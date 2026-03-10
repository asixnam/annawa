import fs from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import type { MultiPartData } from 'h3'

/**
 * Saves an uploaded file to the local public/uploads directory.
 * Works in both development and production (Vercel) environments.
 * 
 * @param file - The multipart file data from h3
 * @param uploadDir - Subdirectory inside public/ to save the file (e.g. 'uploads/students')
 * @returns The filename (UUID-based) stored on disk
 */
export const saveFile = async (file: MultiPartData, uploadDir: string = 'uploads'): Promise<string> => {
    const ext = path.extname(file.filename || '').toLowerCase()
    const uniqueFilename = `${randomUUID()}${ext}`

    // Save to public/<uploadDir>/<uniqueFilename>
    const fullDir = path.join(process.cwd(), 'public', uploadDir)

    // Ensure directory exists
    if (!fs.existsSync(fullDir)) {
        fs.mkdirSync(fullDir, { recursive: true })
    }

    const filePath = path.join(fullDir, uniqueFilename)
    fs.writeFileSync(filePath, file.data)

    // Return just the filename — callers combine this with uploadDir to form the URL
    return uniqueFilename
}
