import { put } from '@vercel/blob'
import { randomUUID } from 'crypto'
import type { MultiPartData } from 'h3'

export const saveFile = async (file: MultiPartData, uploadDir: string = 'uploads'): Promise<string> => {
    // Original local logic is not compatible with Vercel Serverless (Read-Only filesystem)
    // We now use Vercel Blob storage, which requires BLOB_READ_WRITE_TOKEN in env vars

    const filename = `${uploadDir}/${randomUUID()}-${file.filename}`

    try {
        const blob = await put(filename, file.data, {
            access: 'public',
            addRandomSuffix: false // We already added UUID
        });

        // Return the Vercel Blob URL (matches previous string-returning signature)
        return blob.url;
    } catch (error) {
        console.error('Blob upload error:', error)
        throw new Error('Gagal mengunggah file. Pastikan Vercel Blob Storage sudah di-setup.')
    }
}
