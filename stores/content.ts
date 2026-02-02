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
            facilities: [
                { id: 1, name: "Ruang Kelas AC", icon: "🏫" },
                { id: 2, name: "Area Bermain", icon: "🎡" }
            ],
            activities: [
                { id: 1, title: "Manasik Haji Cilik", image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop" }
            ],
            staff: [
                { id: 1, name: 'Ustadzah Fatimah, S.Pd', position: 'Kepala PAUD', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop' },
                { id: 2, name: 'Ustadzah Aisyah', position: 'Wali Kelas A', photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&h=500&auto=format&fit=crop' }
            ],
            partners: []
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
            facilities: [
                { id: 1, name: "Gedung Representatif", icon: "🏛️" },
                { id: 2, name: "Laboratorium Komputer", icon: "💻" }
            ],
            activities: [
                { id: 1, title: "Mukhayyam Al-Qur'an", image: "https://images.unsplash.com/photo-1544027993-37dbfe43552e?q=80&w=800&auto=format&fit=crop" }
            ],
            staff: [
                { id: 1, name: 'Ustadz H. Abdullah, M.Pd', position: 'Kepala SDQTA', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=500&auto=format&fit=crop' },
                { id: 2, name: 'Ustadz Mansyur Al-Hafidz', position: 'Koordinator Tahfidz', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop' }
            ],
            partners: []
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
            facilities: [],
            activities: [],
            staff: [
                { id: 1, name: 'KH. Ahmad Ridwan', position: 'Pengasuh Pondok', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=250&auto=format&fit=crop' },
                { id: 2, name: 'Dr. Luthfi Hakim', position: 'Kepala Pendidikan', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=250&auto=format&fit=crop' }
            ],
            partners: [
                { id: 1, name: 'Kemenag', logo: '/annawa.png' },
                { id: 2, name: 'RMI NU', logo: '/annawa.png' }
            ]
        }
    ])

    // --- News, Gallery, Testimonials ---
    const news = ref([
        { id: 1, title: 'Wisuda Tahfidz 2026', type: 'Berita', date: '2026-01-20', excerpt: 'Alhamdulillah telah terlaksana wisuda akbar...', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400', content: 'Isi lengkap berita wisuda...' },
        { id: 2, title: 'Pembukaan Pendaftaran Santri Baru', type: 'Pengumuman', date: '2026-01-15', excerpt: 'Pendaftaran santri baru tahun ajaran 2026/2027 telah dibuka...', image: null, content: 'Isi lengkap pengumuman pendaftaran...' },
    ])

    const gallery = ref([
        {
            id: 1,
            title: 'Juara 1 MTQ Nasional',
            excerpt: 'Prestasi gemilang santri Annawa dalam ajang Musabaqah Tilawatil Quran tingkat nasional tahun 2025.',
            author: 'Majid Al-Fatih',
            date: '20 Jan 2026',
            category: 'Juara',
            image: 'https://images.unsplash.com/photo-1577894780451-9f144e87d2bc?auto=format&fit=crop&q=80&w=800',
            slug: 'juara-1-mtq-nasional'
        },
        {
            id: 2,
            title: 'Pemenang Lomba Pidato Bahasa Arab',
            excerpt: 'Keberhasilan meraih podium utama dalam kompetisi pidato antar pesantren se-Jawa Barat.',
            author: 'Zaskia Nurul',
            date: '18 Jan 2026',
            category: 'Juara',
            image: 'https://images.unsplash.com/photo-1533256621371-d4e5ff04226f?auto=format&fit=crop&q=80&w=800',
            slug: 'pemenang-pidato-arab'
        },
        {
            id: 3,
            title: 'Rindu Cahaya Wahyu',
            excerpt: 'Di hening malam aku bersimpuh, mencari setitik embun dalam kalbu yang lusuh...',
            author: 'Ahmad Fauzan',
            date: '15 Jan 2026',
            category: 'Literasi',
            slug: 'rindu-cahaya-wahyu'
        },
        {
            id: 4,
            title: 'Santri dan Sepatu Tua',
            excerpt: 'Sepatu itu telah menemaninya melewati ribuan langkah menuju majelis ilmu, meski solnya mulai menipis...',
            author: 'Siti Aminah',
            date: '14 Jan 2026',
            category: 'Literasi',
            slug: 'santri-sepatu-tua'
        }
    ])

    const testimonials = ref([
        {
            id: 1,
            name: 'Ahmad Muzaki',
            batch: 'Alumni 2018',
            profession: 'Mahasiswa Al-Azhar, Kairo',
            quote: 'Belajar di Annawa memberikan pondasi keagamaan yang kuat...',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop'
        }
    ])

    const kajian = ref([
        {
            id: 1,
            title: 'Kajian Kitab Fathul Qorib',
            ustadz: 'Kiai Ahmad Fauzi',
            time: 'Senin & Kamis, 19:30 - 21:00 WIB',
            location: 'Masjid Utama',
            description: 'Metode kajian tatap muka langsung (sorogan) untuk membedah kitab fiqih klasik dengan bimbingan intensif.',
            category: 'Sorogan',
            slug: 'kajian-fathul-qorib'
        },
        {
            id: 2,
            title: 'Setoran Hafalan Juz Amma',
            ustadz: 'Ustadz Muhammad Ridwan',
            time: 'Rabu, 20:00 - 21:30 WIB',
            location: 'Aula Pondok',
            description: 'Program tahfidz terpadu untuk penguatan hafalan Al-Qur\'an dengan metode mutqin.',
            category: 'Tahfidzul Quran',
            slug: 'tahfidz-juz-amma'
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

    // Milestones
    function addMilestone(milestone: any) {
        history.value.milestones.push({ ...milestone })
    }
    function removeMilestone(index: number) {
        history.value.milestones.splice(index, 1)
    }
    function updateMilestone(index: number, data: any) {
        history.value.milestones[index] = { ...history.value.milestones[index], ...data }
    }

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
    function updateStaff(unitId: string, staffId: number, data: any) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            const idx = unit.staff.findIndex(s => s.id === staffId)
            if (idx !== -1) unit.staff[idx] = { ...unit.staff[idx], ...data }
        }
    }

    // Facilities
    function addFacility(unitId: string, facility: any) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            (unit.facilities as any[]).push({ ...facility, id: Date.now() })
        }
    }
    function removeFacility(unitId: string, facilityId: number) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            unit.facilities = unit.facilities.filter(f => f.id !== facilityId)
        }
    }
    function updateFacility(unitId: string, facilityId: number, data: any) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            const idx = unit.facilities.findIndex(f => f.id === facilityId)
            if (idx !== -1) unit.facilities[idx] = { ...unit.facilities[idx], ...data }
        }
    }

    // Activities
    function addActivity(unitId: string, activity: any) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            (unit.activities as any[]).push({ ...activity, id: Date.now() })
        }
    }
    function removeActivity(unitId: string, activityId: number) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            unit.activities = unit.activities.filter(a => a.id !== activityId)
        }
    }
    function updateActivity(unitId: string, activityId: number, data: any) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            const idx = unit.activities.findIndex(a => a.id === activityId)
            if (idx !== -1) unit.activities[idx] = { ...unit.activities[idx], ...data }
        }
    }

    // Unit Partners
    function addUnitPartner(unitId: string, partner: any) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            (unit.partners as any[]).push({ ...partner, id: Date.now() })
        }
    }
    function removeUnitPartner(unitId: string, partnerId: number) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            unit.partners = unit.partners.filter(p => p.id !== partnerId)
        }
    }
    function updateUnitPartner(unitId: string, partnerId: number, data: any) {
        const unit = units.value.find(u => u.id === unitId)
        if (unit) {
            const idx = unit.partners.findIndex(p => p.id === partnerId)
            if (idx !== -1) unit.partners[idx] = { ...unit.partners[idx], ...data }
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
        addFacility,
        removeFacility,
        updateFacility,
        addActivity,
        removeActivity,
        updateActivity,
        addStaff,
        removeStaff,
        updateStaff,
        addUnitPartner,
        removeUnitPartner,
        updateUnitPartner,
        addMilestone,
        removeMilestone,
        updateMilestone,
        // News
        news,
        addNews: (item: any) => news.value.push({ ...item, id: Date.now() }),
        removeNews: (id: number) => news.value = news.value.filter(n => n.id !== id),
        updateNews: (id: number, data: any) => {
            const idx = news.value.findIndex(n => n.id === id)
            if (idx !== -1) news.value[idx] = { ...news.value[idx], ...data }
        },
        // Gallery
        gallery,
        addGallery: (item: any) => gallery.value.push({ ...item, id: Date.now() }),
        removeGallery: (id: number) => gallery.value = gallery.value.filter(g => g.id !== id),
        updateGallery: (id: number, data: any) => {
            const idx = gallery.value.findIndex(g => g.id === id)
            if (idx !== -1) gallery.value[idx] = { ...gallery.value[idx], ...data }
        },
        // Testimonials
        testimonials,
        addTestimonial: (item: any) => testimonials.value.push({ ...item, id: Date.now() }),
        removeTestimonial: (id: number) => testimonials.value = testimonials.value.filter(t => t.id !== id),
        updateTestimonial: (id: number, data: any) => {
            const idx = testimonials.value.findIndex(t => t.id === id)
            if (idx !== -1) testimonials.value[idx] = { ...testimonials.value[idx], ...data }
        },
        // Kajian
        kajian,
        addKajian: (item: any) => kajian.value.push({ ...item, id: Date.now() }),
        removeKajian: (id: number) => kajian.value = kajian.value.filter(k => k.id !== id),
        updateKajian: (id: number, data: any) => {
            const idx = kajian.value.findIndex(k => k.id === id)
            if (idx !== -1) kajian.value[idx] = { ...kajian.value[idx], ...data }
        }
    }
})
