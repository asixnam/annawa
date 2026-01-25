import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
    // --- Landing Page ---
    const hero = ref({
        title: 'Pondok Pesantren Khozinatul Ulum An-Nawa',
        subtitle: 'Lembaga pendidikan Islam yang menggabungkan tradisi pesantren dengan pendidikan modern untuk membentuk generasi Qur\'ani yang berakhlak mulia.',
        image: '/images/hero-santri.png'
    })

    // Data mitra / kolaborator
    const partners = ref([
        { id: 1, name: 'Kemenag', logo: '/annawa.png' },
        { id: 2, name: 'Kemendikbud', logo: '/annawa.png' },
        { id: 3, name: 'RMI NU', logo: '/annawa.png' }
    ])

    // --- Profil & Sejarah ---
    const history = ref({
        text: 'Pondok Pesantren Khozinatul Ulum An-Nawa didirikan dengan visi yang luhur untuk menyediakan wadah pendidikan Islam yang integratif. Bermula dari sebuah pengajian kecil di lingkungan sekitar, semangat untuk menyebarkan ilmu agama terus berkembang pesat seiring bertambahnya minat masyarakat...',
        milestones: [
            { year: "2010", title: "Peletakan Batu Pertama", description: "Inisiasi awal pembangunan lokasi pusat pesantren." },
            { year: "2013", title: "Pembukaan Formal", description: "Dimulainya kegiatan belajar mengajar dengan angkatan pertama." },
            { year: "2017", title: "Pengembangan PAUD & SDQTA", description: "Perluasan unit pendidikan formal." },
            { year: "2022", title: "Digitalisasi Pesantren", description: "Implementasi sistem manajemen digital." }
        ]
    })

    const identity = ref({
        vision: 'Menjadi lembaga pendidikan Islam terkemuka dalam mencetak generasi Qur\'ani yang berakhlak mulia, cerdas, dan mandiri.',
        mission: [
            'Menyelenggarakan pendidikan Islam yang berbasis pada Al-Qur\'an dan Sunnah.',
            'Menerapkan sistem pembelajaran modern dengan tetap menjaga tradisi pesantren.',
            'Mengembangkan potensi minat dan bakat santri dalam berbagai bidang.',
            'Membangun karakter kemandirian dan jiwa kepemimpinan islami.'
        ]
    })

    const figures = ref([
        { id: 1, name: 'KH. Ahmad Ridwan (Alm)', role: 'Pendiri & Pengasuh Pertama', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=250&auto=format&fit=crop' },
        { id: 2, name: 'H. Abdullah Shodiq', role: 'Ketua Dewan Pembina', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=250&auto=format&fit=crop' },
        { id: 3, name: 'Ustadzah Fatimah', role: 'Perintis Pendidikan Putri', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=250&auto=format&fit=crop' }
    ])

    // --- Units & Staff ---
    const units = ref([
        {
            id: 'paud',
            name: 'PAUD An-Nawa',
            description: 'PAUD Islam Terpadu An-Nawa Khozinatul Ulum adalah jenjang pendidikan anak usia dini yang berfokus pada pengembangan fitrah anak.',
            vision: '"Terwujudnya anak usia dini yang berakhlak mulia, sehat, cerdas, ceria, dan mandiri berlandaskan nilai-nilai Al-Qur\'an."',
            mission: [
                'Menyelenggarakan pendidikan anak usia dini yang berbasis pada nilai-nilai keislaman.',
                'Menciptakan lingkungan belajar yang aktif, inovatif, kreatif, dan menyenangkan.'
            ],
            image: '/annawa.png',
            staff: [
                { id: 1, name: 'Ustadzah Fatimah, S.Pd', position: 'Kepala PAUD', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop' },
                { id: 2, name: 'Ustadzah Aisyah', position: 'Wali Kelas A', photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&h=500&auto=format&fit=crop' }
            ]
        },
        {
            id: 'sd',
            name: 'SDQTA An-Nawa',
            description: 'SDQTA (Sekolah Dasar Qur\'an Terpadu) An-Nawa Khozinatul Ulum adalah institusi pendidikan dasar yang mengintegrasikan kurikulum nasional dengan pendidikan agama yang mendalam.',
            vision: '"Mewujudkan generasi Rabbani yang hafidz Al-Qur\'an, unggul dalam prestasi, dan berkarakter islami."',
            mission: [
                'Menyelenggarakan pendidikan dasar IT (Islam Terpadu) yang berkualitas tinggi.',
                'Membekali santri dengan hafalan Al-Qur\'an minimal 5-10 juz.'
            ],
            image: '/annawa.png',
            staff: [
                { id: 1, name: 'Ustadz H. Abdullah, M.Pd', position: 'Kepala SDQTA', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=500&auto=format&fit=crop' },
                { id: 2, name: 'Ustadz Mansyur Al-Hafidz', position: 'Koordinator Tahfidz', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop' }
            ]
        },
        {
            id: 'pondok',
            name: 'Pondok Pesantren',
            description: 'Pondok Pesantren Khozinatul Ulum An-Nawa adalah lembaga pendidikan Islam yang berfokus pada pembentukan karakter Islami dan penguasaan ilmu agama.',
            vision: '"Menjadi lembaga pendidikan Islam terkemuka dalam mencetak generasi Qur\'ani yang berakhlak mulia, cerdas, dan mandiri."',
            mission: [
                'Menyelenggarakan pendidikan Islam yang berbasis pada Al-Qur\'an dan Sunnah.',
                'Menerapkan sistem pembelajaran modern dengan tetap menjaga tradisi pesantren.'
            ],
            image: '/images/pengasuh.jpeg',
            staff: [
                { id: 1, name: 'KH. Ahmad Ridwan', position: 'Pengasuh Pondok', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=250&auto=format&fit=crop' },
                { id: 2, name: 'Dr. Luthfi Hakim', position: 'Kepala Pendidikan', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=250&auto=format&fit=crop' }
            ]
        }
    ])

    // --- Actions (CRUD Logic) ---

    // Hero
    function updateHero(data: any) {
        hero.value = { ...hero.value, ...data }
    }

    // Partners
    function addPartner(partner: any) {
        partners.value.push({ ...partner, id: Date.now() })
    }
    function removePartner(id: number) {
        partners.value = partners.value.filter(p => p.id !== id)
    }

    // Identity / History
    function updateHistory(text: string) { history.value.text = text }
    function updateVision(text: string) { identity.value.vision = text }
    function updateMission(lines: string) { identity.value.mission = lines.split('\n') } // Simplified

    // Figures
    function addFigure(figure: any) {
        figures.value.push({ ...figure, id: Date.now() })
    }
    function removeFigure(id: number) {
        figures.value = figures.value.filter(f => f.id !== id)
    }
    function updateFigure(id: number, data: any) {
        const idx = figures.value.findIndex(f => f.id === id)
        if (idx !== -1) figures.value[idx] = { ...figures.value[idx], ...data }
    }

    // Units
    function updateUnit(id: string, data: any) {
        const idx = units.value.findIndex(u => u.id === id)
        if (idx !== -1) units.value[idx] = { ...units.value[idx], ...data }
    }

    function addStaff(unitId: string, staff: any) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            unit.staff.push({ ...staff, id: Date.now() })
        }
    }
    function removeStaff(unitId: string, staffId: number) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            unit.staff = unit.staff.filter(s => s.id !== staffId)
        }
    }

    return {
        hero,
        partners,
        history,
        identity,
        figures,
        units,
        updateHero,
        addPartner,
        removePartner,
        updateHistory,
        updateVision,
        updateMission,
        addFigure,
        removeFigure,
        updateFigure,
        updateUnit,
        addStaff,
        removeStaff
    }
})
