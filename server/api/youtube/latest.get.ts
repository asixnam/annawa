
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
    const channelId = 'UCKZABNEFZNVJ-apwTGadObQ'
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`

    try {
        const xml = await $fetch<string>(feedUrl)

        // Simple regex parsing for XML to avoid extra dependencies
        const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || []
        const latestVideos = entries.slice(0, 3).map(entry => {
            const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)
            const titleMatch = entry.match(/<title>(.*?)<\/title>/)
            const videoId = videoIdMatch ? videoIdMatch[1] : ''
            const title = titleMatch ? titleMatch[1] : ''

            // Map categories based on title or just keep it generic
            let category = 'Update Terbaru'
            if (title.toLowerCase().includes('kultum')) category = 'Ramadhan Series'
            if (title.toLowerCase().includes('outbond') || title.toLowerCase().includes('dokumentasi')) category = 'Kegiatan Santri'

            return {
                id: videoId,
                title: title,
                category: category,
                link: `https://www.youtube.com/watch?v=${videoId}`,
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            }
        })

        return latestVideos
    } catch (error) {
        console.error('Failed to fetch YouTube feed:', error)
        return []
    }
})
