import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
    // --- Landing Page ---
    const hero = ref({
        title: 'Selamat Datang di Khozinatul Ulum An-Nawa',
        subtitle: 'Lembaga pendidikan Islam yang menggabungkan tradisi pesantren dengan pendidikan modern untuk membentuk generasi Qur\'ani yang berakhlak mulia.',
        image: '/images/hero-santri.png'
    })

    const partners = ref([
        { id: 1, name: 'Kemenag', logo: '/annawa.png' },
        { id: 2, name: 'Kemendikbud', logo: '/annawa.png' },
        { id: 3, name: 'RMI NU', logo: '/annawa.png' }
    ])

    // --- Profil & Sejarah ---
    const history = ref({
        text: '',
        milestones: [] as any[]
    })

    // Identity - keeping static for now or can be moved to DB later if needed
    const identity = ref({
        vision: 'Menjadi lembaga pendidikan Islam terkemuka dalam mencetak generasi Qur\'ani yang berakhlak mulia, cerdas, dan mandiri.',
        mission: [
            'Menyelenggarakan pendidikan Islam yang berbasis pada Al-Qur\'an dan Sunnah.',
            'Menerapkan sistem pembelajaran modern dengan tetap menjaga tradisi pesantren.',
            'Mengembangkan potensi minat dan bakat santri dalam berbagai bidang.',
            'Membangun karakter kemandirian dan jiwa kepemimpinan islami.'
        ]
    })

    const figures = ref<any[]>([])

    // --- Units & Staff ---
    const units = ref<any[]>([])

    // --- News, Gallery, Testimonials, Kajian ---
    // These are often fetched directly in pages with pagination, but we can keep simple lists here for valid cache
    const news = ref<any[]>([])
    const gallery = ref<any[]>([])
    const testimonials = ref<any[]>([])
    const kajian = ref<any[]>([])

    // --- Actions ---

    async function fetchHistory() {
        try {
            const data: any = await $fetch('/api/history')
            history.value.text = data.text
            history.value.milestones = data.milestones
            figures.value = data.figures
        } catch (e) {
            console.error('Failed to fetch history', e)
        }
    }

    async function fetchUnits() {
        try {
            // We might need a list endpoint, but for now we can fetch individually or add a list endpoint.
            // Assuming /api/units returns a list, or we fetch known IDs.
            // Let's rely on individual unit pages fetching their own data for detailed view,
            // but for a list (e.g. footer), we might need a general endpoint.
            // Use existing endpoint structures.
            // If /api/units returns all, use that.
            const data: any = await $fetch('/api/units')
            units.value = data.map((u: any) => ({
                ...u,
                // Ensure arrays are parsed if string
                mission: typeof u.mission === 'string' ? JSON.parse(u.mission || '[]') : u.mission,
                facilities: u.facilities || [],
                activities: u.activities || [],
                staff: u.staff || [],
                partners: u.partners || []
            }))
        } catch (e) {
            console.error('Failed to fetch units', e)
        }
    }

    async function fetchPublicData() {
        // Parallel fetch for landing page / general data
        await Promise.all([
            fetchHistory(),
            fetchUnits()
        ])
    }

    return {
        hero,
        partners,
        history,
        identity,
        figures,
        units,
        news,
        gallery,
        testimonials,
        kajian,
        fetchHistory,
        fetchUnits,
        fetchPublicData
    }
})
