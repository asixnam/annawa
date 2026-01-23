<template>
  <div class="min-h-screen bg-[#F9FAFB] font-sans">
    <!-- Hero Section -->
    <section class="relative pt-0 pb-10 lg:pt-2 lg:pb-20 overflow-hidden bg-white">
      <!-- Decoration Circles (like plai style) -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-20"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="flex-1 text-left">
            <div class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Official Website
            </div>
            <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight font-heading">
               Pondok Pesantren <span class="text-brand-500">Khozinatul Ulum</span> An-Nawa
            </h1>
            <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Lembaga pendidikan Islam yang menggabungkan tradisi pesantren dengan pendidikan modern untuk membentuk generasi Qur'ani yang berakhlak mulia.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/psb/putra" class="px-8 py-4 bg-brand-500 text-black rounded font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all shadow-lg shadow-brand-500/20 transform hover:-translate-y-1">
                Daftar Sekarang
              </NuxtLink>
              <NuxtLink to="/profil" class="px-8 py-4 border-2 border-gray-200 text-gray-800 rounded font-black uppercase text-sm tracking-widest hover:border-brand-500 hover:text-brand-500 transition-all transform hover:-translate-y-1">
                Profil Pondok
              </NuxtLink>
            </div>
          </div>
          <div class="flex-1 relative">
            <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img src="/images/hero-santri.png" alt="Santri Pesantren" class="w-full h-auto object-cover" />
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100">
              <div class="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-black font-bold">
                500+
              </div>
              <div class="text-sm">
                <span class="block font-bold text-gray-900 leading-none">Santri Aktif</span>
                <span class="text-gray-500 text-xs">Tahun Ajaran 2024/2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tentang Pondok -->
    <section class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Pondok Pesantren Khozinatul Ulum An-Nawa</h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-8">
          Pondok Pesantren Khozinatul Ulum An-Nawa adalah lembaga pendidikan Islam yang berfokus pada pembentukan karakter Islami dan penguasaan ilmu agama. Kami menyediakan berbagai program pendidikan mulai dari PAUD, SD/QTA, hingga pendidikan pesantren untuk putra dan putri.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div class="text-center">
            <div class="text-4xl font-bold text-brand-600 mb-2">500+</div>
            <div class="text-gray-600">Santri Aktif</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-brand-600 mb-2">50+</div>
            <div class="text-gray-600">Ustadz & Ustadzah</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-brand-600 mb-2">15+</div>
            <div class="text-gray-600">Tahun Berdiri</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-brand-600 mb-2">10+</div>
            <div class="text-gray-600">Program Kajian</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Layanan Utama -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Layanan Pendaftaran</h2>
          <p class="text-gray-600 text-lg">Pilih program pendidikan yang sesuai untuk putra-putri Anda</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <!-- PSB Putra -->
          <NuxtLink to="/psb/putra" class="group">
            <div class="bg-white rounded-2xl p-8 text-gray-800 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-500 transition-all transform hover:-translate-y-2">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">PSB Putra</h3>
              <p class="text-gray-600 mb-4">Pendaftaran Santri Baru untuk Putra</p>
              <div class="flex items-center text-sm font-bold text-brand-600 group-hover:translate-x-2 transition-transform uppercase tracking-wider">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- PSB Putri -->
          <NuxtLink to="/psb/putri" class="group">
            <div class="bg-white rounded-2xl p-8 text-gray-800 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-500 transition-all transform hover:-translate-y-2">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">PSB Putri</h3>
              <p class="text-gray-600 mb-4">Pendaftaran Santri Baru untuk Putri</p>
              <div class="flex items-center text-sm font-bold text-brand-600 group-hover:translate-x-2 transition-transform uppercase tracking-wider">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- PPDB PAUD -->
          <NuxtLink to="/ppdb/paud" class="group">
            <div class="bg-white rounded-2xl p-8 text-gray-800 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-500 transition-all transform hover:-translate-y-2">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">SPMB PAUD</h3>
              <p class="text-gray-600 mb-4">Sistem Penerimaan Murid Baru PAUD</p>
              <div class="flex items-center text-sm font-bold text-brand-600 group-hover:translate-x-2 transition-transform uppercase tracking-wider">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- PPDB SD -->
          <NuxtLink to="/ppdb/sd" class="group">
            <div class="bg-white rounded-2xl p-8 text-gray-800 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-500 transition-all transform hover:-translate-y-2">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">SPMB SD</h3>
              <p class="text-gray-600 mb-4">Sistem Penerimaan Murid Baru SD</p>
              <div class="flex items-center text-sm font-bold text-brand-600 group-hover:translate-x-2 transition-transform uppercase tracking-wider">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Kajian Terbaru -->
    <section class="container mx-auto px-6 py-16">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Kajian Rutin</h2>
          <p class="text-gray-600">Ikuti kajian-kajian ilmiah untuk menambah wawasan keislaman</p>
        </div>
        <NuxtLink to="/kajian" class="hidden md:flex items-center text-brand-600 font-bold uppercase tracking-wider text-xs hover:text-black">
          Lihat Semua
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KajianCard
          v-for="kajian in featuredKajian"
          :key="kajian.id"
          :title="kajian.title"
          :ustadz="kajian.ustadz"
          :time="kajian.time"
          :location="kajian.location"
          :description="kajian.description"
          :category="kajian.category"
          :slug="kajian.slug"
        />
      </div>

      <div class="text-center mt-8 md:hidden">
        <NuxtLink to="/kajian" class="inline-flex items-center px-6 py-3 bg-brand-500 text-black rounded font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
          Lihat Semua Kajian
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <!-- Berita Terbaru -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center mb-8">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Berita Terbaru</h2>
            <p class="text-gray-600">Informasi dan kegiatan terkini dari Pondok Annawa</p>
          </div>
          <NuxtLink to="/berita" class="hidden md:flex items-center text-brand-600 font-bold uppercase tracking-wider text-xs hover:text-black">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BeritaCard
            v-for="berita in featuredBerita"
            :key="berita.id"
            :title="berita.title"
            :excerpt="berita.excerpt"
            :image="berita.image"
            :date="berita.date"
            :slug="berita.slug"
          />
        </div>

        <div class="text-center mt-8 md:hidden">
          <NuxtLink to="/berita" class="inline-flex items-center px-6 py-3 bg-brand-500 text-black rounded font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
            Lihat Semua Berita
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimoni Alumni -->
    <section class="py-16 overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Apa Kata Alumni!</h2>
          <p class="text-gray-600 text-lg">Apa kata mereka yang telah menempuh pendidikan di Pondok Pesantren Khozinatul Ulum An-Nawa</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testi in testimonials" :key="testi.id" class="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col relative transition-all hover:shadow-2xl hover:-translate-y-1">
            <!-- Quote Icon -->
            <div class="absolute -top-4 -left-4 bg-brand-500 w-10 h-10 rounded-full flex items-center justify-center text-black shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <p class="text-gray-600 italic mb-8 leading-relaxed flex-grow">
              "{{ testi.quote }}"
            </p>

            <div class="flex items-center gap-4 border-t border-gray-50 pt-6">
              <div class="w-14 h-14 rounded-full bg-brand-100 overflow-hidden border-2 border-brand-500 flex-shrink-0">
                <img v-if="testi.image" :src="testi.image" :alt="testi.name" class="w-full h-full object-cover">
                <div v-else class="w-full h-full flex items-center justify-center text-brand-700 font-bold bg-gray-100 uppercase">
                  {{ testi.name.charAt(0) }}
                </div>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 leading-tight">{{ testi.name }}</h4>
                <p class="text-brand-600 text-xs font-bold uppercase tracking-wider mb-1">{{ testi.batch }}</p>
                <p class="text-gray-500 text-sm">{{ testi.profession }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#F5F5F5] py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">Bergabunglah dengan Kami</h2>
        <p class="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Daftarkan putra-putri Anda untuk mendapatkan pendidikan Islam yang berkualitas dan berakhlak mulia di Pondok Pesantren Khozinatul Ulum An-Nawa.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/psb/putra" class="px-10 py-4 bg-brand-500 text-black rounded font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all shadow-xl shadow-brand-500/10">
            Daftar Sekarang
          </NuxtLink>
          <NuxtLink to="/galeri" class="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded font-black uppercase text-sm tracking-widest hover:border-black hover:text-black transition-all">
            Lihat Galeri
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Featured Kajian (3 items)
const featuredKajian = ref([
  {
    id: 1,
    title: 'Kajian Tafsir Al-Qur\'an',
    ustadz: 'Ustadz Ahmad Fauzi',
    time: 'Senin & Kamis, 19:30 - 21:00 WIB',
    location: 'Masjid Utama',
    description: 'Kajian mendalam tentang tafsir Al-Qur\'an dengan pendekatan kontekstual dan klasik.',
    category: 'Tafsir',
    slug: 'tafsir-al-quran'
  },
  {
    id: 2,
    title: 'Kajian Hadits Arba\'in',
    ustadz: 'Ustadz Muhammad Ridwan',
    time: 'Rabu, 20:00 - 21:30 WIB',
    location: 'Aula Pondok',
    description: 'Mempelajari 40 hadits pilihan Imam Nawawi yang mencakup berbagai aspek kehidupan muslim.',
    category: 'Hadits',
    slug: 'hadits-arbain'
  },
  {
    id: 3,
    title: 'Fiqih Muamalah Kontemporer',
    ustadz: 'Ustadz Abdul Hakim',
    time: 'Selasa, 19:00 - 20:30 WIB',
    location: 'Ruang Kajian',
    description: 'Membahas hukum-hukum muamalah dalam konteks modern dan ekonomi syariah.',
    category: 'Fiqih',
    slug: 'fiqih-muamalah-kontemporer'
  }
])

// Featured Berita (3 items)
const featuredBerita = ref([
  {
    id: 1,
    title: 'Peringatan Maulid Nabi Muhammad SAW 1446 H',
    excerpt: 'Pondok Pesantren Annawa mengadakan peringatan Maulid Nabi Muhammad SAW dengan rangkaian kegiatan yang meriah dan penuh makna.',
    image: '',
    date: '2026-01-15',
    slug: 'peringatan-maulid-nabi-1446h'
  },
  {
    id: 2,
    title: 'Wisuda Santri Tahfidz Angkatan ke-10',
    excerpt: 'Sebanyak 25 santri berhasil menyelesaikan hafalan 30 juz Al-Qur\'an dan diwisuda dalam acara yang khidmat.',
    image: '',
    date: '2026-01-10',
    slug: 'wisuda-santri-tahfidz-10'
  },
  {
    id: 3,
    title: 'Pembukaan Pendaftaran Santri Baru 2026',
    excerpt: 'Pendaftaran santri baru untuk tahun ajaran 2026/2027 telah dibuka. Segera daftarkan putra-putri Anda!',
    image: '',
    date: '2026-01-05',
    slug: 'pembukaan-pendaftaran-2026'
  }
])

// Testimonials Data
const testimonials = ref([
  {
    id: 1,
    name: 'Ahmad Muzaki',
    batch: 'Alumni 2018',
    profession: 'Mahasiswa Al-Azhar, Kairo',
    quote: 'Belajar di Annawa memberikan pondasi keagamaan yang kuat sekaligus memotivasi saya untuk terus mengejar ilmu hingga ke negeri para nabi.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Siti Fatimah',
    batch: 'Alumni 2019',
    profession: 'Pendidik & Hafidzah',
    quote: 'Metode hafalan yang diterapkan sangat sistematis. Kekeluargaan antar santri dan ustadz membuat lingkungan belajar terasa sangat nyaman.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Budi Santoso',
    batch: 'Alumni 2017',
    profession: 'Wirausaha Muda',
    quote: 'Nilai-nilai kemandirian dan kedisiplinan yang diajarkan di pesantren sangat membantu saya dalam membangun usaha dari nol.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop'
  }
])
</script>
