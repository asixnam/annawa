import { writeFile } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'
import type { MultiPartData } from 'h3'

export const saveFile = async (file: MultiPartData, uploadDir: string = 'uploads'): Promise<string> => {
    const filename = `${randomUUID()}-${file.filename}`
    const publicDir = join(process.cwd(), 'public', uploadDir)
    const filePath = join(publicDir, filename)

    // Ensure directory exists (optional if we know it exists, but safer)
    const { mkdir } = await import('fs/promises')
    try {
        await mkdir(publicDir, { recursive: true })
    } catch (e) {
        // Ignore if exists
    }

    await writeFile(filePath, file.data)
    return `/${uploadDir}/${filename}`
}
