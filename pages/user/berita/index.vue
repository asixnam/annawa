<template>
  <div class="min-h-screen bg-gray-50/50">
    <!-- Hero Section -->
    <section class="relative bg-white pt-16 pb-24 overflow-hidden border-b border-gray-100">
      <!-- Artistic Background Decorations -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Kabar & Pemutakhiran
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight font-heading">
            Berita & <span class="text-brand-500">Kegiatan</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Informasi terkini seputar dinamika kegiatan, prestasi, dan perkembangan di lingkungan Pondok Pesantren Annawa.
          </p>
        </div>
      </div>
    </section>

    <!-- Berita List -->
    <section class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div v-if="beritaList.length === 0" class="text-center py-24">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Belum ada berita</h3>
        <p class="text-gray-500">Ikuti terus kami untuk mendapatkan informasi terbaru.</p>
      </div>

      <!-- Pagination -->
      <div v-if="beritaList.length > 0" class="flex justify-center mt-20 gap-3">
        <button class="w-12 h-12 flex items-center justify-center bg-brand-500 text-black rounded-xl font-bold shadow-lg shadow-brand-500/20">
          1
        </button>
        <button class="w-12 h-12 flex items-center justify-center bg-white text-gray-600 border border-gray-100 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
          2
        </button>
        <button class="w-12 h-12 flex items-center justify-center bg-white text-gray-600 border border-gray-100 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
          3
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BeritaCard from '~/components/BeritaCard.vue'

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

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
