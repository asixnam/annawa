export const compressImage = async (file: File, options = { maxWidth: 1024, maxHeight: 1024, quality: 0.7 }): Promise<File> => {
    return new Promise((resolve, reject) => {
        if (!file.type.startsWith('image/')) {
            // Not an image, return original
            return resolve(file)
        }

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (event) => {
            const img = new Image()
            img.src = event.target?.result as string
            img.onload = () => {
                const canvas = document.createElement('canvas')
                let width = img.width
                let height = img.height

                // Resize logic
                if (width > options.maxWidth) {
                    height = Math.round((height * options.maxWidth) / width)
                    width = options.maxWidth
                }
                if (height > options.maxHeight) {
                    width = Math.round((width * options.maxHeight) / height)
                    height = options.maxHeight
                }

                canvas.width = width
                canvas.height = height

                const ctx = canvas.getContext('2d')
                if (!ctx) {
                    return resolve(file) // Fallback if no context
                }

                ctx.drawImage(img, 0, 0, width, height)

                // Maintain transparency for PNGs, otherwise use WebP for better compression
                const mimeType = file.type === 'image/png' ? 'image/png' : 'image/webp'
                const quality = mimeType === 'image/png' ? undefined : options.quality

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            const newFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + (mimeType === 'image/png' ? '.png' : '.webp'), {
                                type: mimeType,
                                lastModified: Date.now(),
                            })
                            // Only return compressed if it's actually smaller
                            if (newFile.size < file.size) {
                                resolve(newFile)
                            } else {
                                resolve(file)
                            }
                        } else {
                            resolve(file)
                        }
                    },
                    mimeType,
                    quality
                )
            }
            img.onerror = (err) => reject(err)
        }
        reader.onerror = (err) => reject(err)
    })
}
