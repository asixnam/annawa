import { readMultipartFormData, createError } from 'h3'
import fs from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

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

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
    }

    // Generate unique filename
    const uniqueFilename = `${randomUUID()}${ext}`
    const filePath = path.join(uploadDir, uniqueFilename)

    // Write file
    fs.writeFileSync(filePath, uploadedFile.data)

    return {
        url: `/uploads/${uniqueFilename}`,
        filename: uniqueFilename
    }
})
