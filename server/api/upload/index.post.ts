import { readMultipartFormData, createError } from 'h3'
import fs from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import { put } from '@vercel/blob'

export default defineEventHandler(async (event) => {
    const files = await readMultipartFormData(event)

    if (!files || files.length === 0) {
        throw createError({
            statusCode: 400,
            statusMessage: 'No file uploaded',
        })
    }

    const uploadedFile = files[0]

    // Check file size (max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024
    if (uploadedFile.data.length > MAX_SIZE) {
        throw createError({
            statusCode: 400,
            statusMessage: 'File size exceeds 5MB limit',
        })
    }

    const filename = uploadedFile.filename
    const ext = path.extname(filename || '').toLowerCase()

    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.heic', '.heif']

    if (!allowedExtensions.includes(ext)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid file type. Allowed: jpg, jpeg, png, gif, webp, heic',
        })
    }

    const uniqueFilename = `${randomUUID()}${ext}`

    // If we're on Vercel or have a Blob token, use Vercel Blob
    if (process.env.VERCEL || process.env.BLOB_READ_WRITE_TOKEN) {
        try {
            const blob = await put(`uploads/${uniqueFilename}`, uploadedFile.data, {
                access: 'public',
            });
            return {
                url: blob.url,
                filename: uniqueFilename
            }
        } catch (e: any) {
            console.error('Vercel Blob upload error:', e)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to upload image to Vercel Blob: ' + e.message,
            })
        }
    }

    // Local development fallback
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
    }

    const filePath = path.join(uploadDir, uniqueFilename)
    fs.writeFileSync(filePath, uploadedFile.data)

    return {
        url: `/uploads/${uniqueFilename}`,
        filename: uniqueFilename
    }
})
