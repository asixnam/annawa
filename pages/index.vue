<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 text-white pt-20 pb-24 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Selamat Datang di<br />
            <span class="text-teal-200">Pondok Pesantren Annawa</span>
          </h1>
          <p class="text-lg md:text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Lembaga pendidikan Islam yang menggabungkan tradisi pesantren dengan pendidikan modern untuk membentuk generasi Qur'ani yang berakhlak mulia
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/psb/putra" class="px-8 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Daftar Santri Putra
            </NuxtLink>
            <NuxtLink to="/psb/putri" class="px-8 py-4 bg-teal-500 text-white rounded-full font-bold hover:bg-teal-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Daftar Santri Putri
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Wave Decoration -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>

    <!-- Tentang Pondok -->
    <section class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Tentang Pondok Annawa</h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-8">
          Pondok Pesantren Annawa adalah lembaga pendidikan Islam yang berfokus pada pembentukan karakter Islami dan penguasaan ilmu agama. Kami menyediakan berbagai program pendidikan mulai dari PAUD, SD/QTA, hingga pendidikan pesantren untuk putra dan putri.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div class="text-center">
            <div class="text-4xl font-bold text-teal-600 mb-2">500+</div>
            <div class="text-gray-600">Santri Aktif</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <div class="text-gray-600">Ustadz & Ustadzah</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-teal-600 mb-2">15+</div>
            <div class="text-gray-600">Tahun Berdiri</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-teal-600 mb-2">10+</div>
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
            <div class="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">PSB Putra</h3>
              <p class="text-teal-100 mb-4">Pendaftaran Santri Baru untuk Putra</p>
              <div class="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- PSB Putri -->
          <NuxtLink to="/psb/putri" class="group">
            <div class="bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">PSB Putri</h3>
              <p class="text-pink-100 mb-4">Pendaftaran Santri Baru untuk Putri</p>
              <div class="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- PPDB PAUD -->
          <NuxtLink to="/ppdb/paud" class="group">
            <div class="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">PPDB PAUD</h3>
              <p class="text-amber-100 mb-4">Pendaftaran Peserta Didik Baru PAUD</p>
              <div class="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- PPDB SD -->
          <NuxtLink to="/ppdb/sd" class="group">
            <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">PPDB SD</h3>
              <p class="text-blue-100 mb-4">Pendaftaran Peserta Didik Baru SD</p>
              <div class="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
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
        <NuxtLink to="/kajian" class="hidden md:flex items-center text-teal-600 font-semibold hover:text-teal-700">
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
        />
      </div>

      <div class="text-center mt-8 md:hidden">
        <NuxtLink to="/kajian" class="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700">
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
          <NuxtLink to="/berita" class="hidden md:flex items-center text-teal-600 font-semibold hover:text-teal-700">
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
          <NuxtLink to="/berita" class="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700">
            Lihat Semua Berita
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-teal-600 to-emerald-700 py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Bergabunglah dengan Kami</h2>
        <p class="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
          Daftarkan putra-putri Anda untuk mendapatkan pendidikan Islam yang berkualitas dan berakhlak mulia
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/psb/putra" class="px-8 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-teal-50 transition-all shadow-lg">
            Daftar Sekarang
          </NuxtLink>
          <NuxtLink to="/galeri" class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-teal-700 transition-all">
            Lihat Galeri
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KajianCard from '../components/KajianCard.vue'
import BeritaCard from '../components/BeritaCard.vue'

// Featured Kajian (3 items)
const featuredKajian = ref([
  {
    id: 1,
    title: 'Kajian Tafsir Al-Qur\'an',
    ustadz: 'Ustadz Ahmad Fauzi',
    time: 'Senin & Kamis, 19:30 - 21:00 WIB',
    location: 'Masjid Utama',
    description: 'Kajian mendalam tentang tafsir Al-Qur\'an dengan pendekatan kontekstual dan klasik.',
    category: 'Tafsir'
  },
  {
    id: 2,
    title: 'Kajian Hadits Arba\'in',
    ustadz: 'Ustadz Muhammad Ridwan',
    time: 'Rabu, 20:00 - 21:30 WIB',
    location: 'Aula Pondok',
    description: 'Mempelajari 40 hadits pilihan Imam Nawawi yang mencakup berbagai aspek kehidupan muslim.',
    category: 'Hadits'
  },
  {
    id: 3,
    title: 'Fiqih Muamalah Kontemporer',
    ustadz: 'Ustadz Abdul Hakim',
    time: 'Selasa, 19:00 - 20:30 WIB',
    location: 'Ruang Kajian',
    description: 'Membahas hukum-hukum muamalah dalam konteks modern dan ekonomi syariah.',
    category: 'Fiqih'
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
</script>
