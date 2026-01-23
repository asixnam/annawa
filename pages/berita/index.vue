<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white pt-20 pb-20">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Berita & Kegiatan</h1>
          <p class="text-lg md:text-xl text-blue-50">
            Informasi terkini seputar kegiatan dan perkembangan Pondok Pesantren Annawa
          </p>
        </div>
      </div>
      
      <!-- Decorative wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>

    <!-- Berita List -->
    <section class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BeritaCard
          v-for="berita in beritaList"
          :key="berita.id"
          :title="berita.title"
          :excerpt="berita.excerpt"
          :image="berita.image"
          :date="berita.date"
          :slug="berita.slug"
        />
      </div>

      <!-- Empty State -->
      <div v-if="beritaList.length === 0" class="text-center py-16">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <p class="text-gray-500 text-lg">Belum ada berita</p>
      </div>

      <!-- Pagination (placeholder) -->
      <div v-if="beritaList.length > 0" class="flex justify-center mt-12 gap-2">
        <button class="px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700">
          1
        </button>
        <button class="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100">
          2
        </button>
        <button class="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100">
          3
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BeritaCard from '../../components/BeritaCard.vue'

// Data berita (nanti bisa diganti dengan API)
const beritaList = ref([
  {
    id: 1,
    title: 'Peringatan Maulid Nabi Muhammad SAW 1446 H',
    excerpt: 'Pondok Pesantren Annawa mengadakan peringatan Maulid Nabi Muhammad SAW dengan rangkaian kegiatan yang meriah dan penuh makna. Acara dihadiri oleh seluruh santri, ustadz, dan masyarakat sekitar.',
    image: '',
    date: '2026-01-15',
    slug: 'peringatan-maulid-nabi-1446h'
  },
  {
    id: 2,
    title: 'Wisuda Santri Tahfidz Angkatan ke-10',
    excerpt: 'Sebanyak 25 santri berhasil menyelesaikan hafalan 30 juz Al-Qur\'an dan diwisuda dalam acara yang khidmat. Para santri telah melewati ujian munaqosyah dengan hasil yang memuaskan.',
    image: '',
    date: '2026-01-10',
    slug: 'wisuda-santri-tahfidz-10'
  },
  {
    id: 3,
    title: 'Pembukaan Pendaftaran Santri Baru 2026',
    excerpt: 'Pendaftaran santri baru untuk tahun ajaran 2026/2027 telah dibuka. Segera daftarkan putra-putri Anda untuk mendapatkan pendidikan Islam yang berkualitas.',
    image: '',
    date: '2026-01-05',
    slug: 'pembukaan-pendaftaran-2026'
  },
  {
    id: 4,
    title: 'Kegiatan Bakti Sosial di Desa Sekitar',
    excerpt: 'Santri Pondok Annawa mengadakan kegiatan bakti sosial dengan membagikan sembako kepada warga kurang mampu di desa sekitar pondok. Kegiatan ini rutin dilakukan setiap bulan.',
    image: '',
    date: '2026-01-03',
    slug: 'bakti-sosial-desa'
  },
  {
    id: 5,
    title: 'Lomba Tahfidz Antar Santri Tingkat Nasional',
    excerpt: 'Santri Pondok Annawa meraih juara 1 dalam lomba tahfidz tingkat nasional yang diselenggarakan di Jakarta. Prestasi membanggakan ini hasil dari pembinaan yang intensif.',
    image: '',
    date: '2025-12-28',
    slug: 'lomba-tahfidz-nasional'
  },
  {
    id: 6,
    title: 'Pelatihan Kewirausahaan untuk Santri',
    excerpt: 'Pondok Annawa mengadakan pelatihan kewirausahaan untuk membekali santri dengan keterampilan berbisnis yang sesuai syariah. Pelatihan ini diikuti oleh 50 santri senior.',
    image: '',
    date: '2025-12-20',
    slug: 'pelatihan-kewirausahaan'
  }
])
</script>