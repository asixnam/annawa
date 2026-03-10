import fs from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import type { MultiPartData } from 'h3'
import { put } from '@vercel/blob'

/**
 * Saves an uploaded file securely.
 * Uses @vercel/blob in production and local `fs` in development.
 * 
 * @param file - The multipart file data from h3
 * @param uploadDir - Subdirectory inside public/ to save the file (e.g. 'uploads/students')
 * @returns The unique filename (or full blob URL in production)
 */
export const saveFile = async (file: MultiPartData, uploadDir: string = 'uploads'): Promise<string> => {
    const ext = path.extname(file.filename || '').toLowerCase()
    const uniqueFilename = `${randomUUID()}${ext}`

    if (process.env.VERCEL || process.env.BLOB_READ_WRITE_TOKEN) {
        try {
            const blobPath = `${uploadDir}/${uniqueFilename}`
            const blob = await put(blobPath, file.data, { access: 'public' })
            return blob.url // In Vercel, we must return the full URL because it's hosted elsewhere
        } catch (e) {
            console.error('Vercel Blob upload failed:', e)
            throw new Error('Failed to upload file to Blob storage')
        }
    }

    // Save to public/<uploadDir>/<uniqueFilename>
    const fullDir = path.join(process.cwd(), 'public', uploadDir)

    // Ensure directory exists
    if (!fs.existsSync(fullDir)) {
        fs.mkdirSync(fullDir, { recursive: true })
    }

    const filePath = path.join(fullDir, uniqueFilename)
    fs.writeFileSync(filePath, file.data)

    // Return just the filename — callers combine this with uploadDir to form the URL in local dev
    return uniqueFilename
}
