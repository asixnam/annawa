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
            Jadwal & Materi
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight font-heading">
            Kajian Rutin & <span class="text-brand-500">Ilmiah</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan rangkaian kajian keislaman untuk memperdalam pemahaman agama dan membentuk akhlak mulia.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="container mx-auto px-6 -mt-8 relative z-20">
      <div class="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-4 max-w-4xl mx-auto">
        <div class="flex flex-wrap justify-center gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-5 py-2.5 rounded-xl font-bold transition-all text-sm uppercase tracking-wider',
              selectedCategory === cat 
                ? 'bg-brand-500 text-black shadow-lg shadow-brand-500/20' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Kajian List -->
    <section class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <KajianCard
          v-for="kajian in filteredKajian"
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

      <!-- Empty State -->
      <div v-if="filteredKajian.length === 0" class="text-center py-24">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Belum ada kajian</h3>
        <p class="text-gray-500">Nantikan jadwal kajian terbaru untuk kategori ini.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import KajianCard from '../../components/KajianCard.vue'

const categories = ref(['Semua', 'Sorogan', 'Tahfidzul Quran', 'Bahtsul Masail', 'Bandongan'])
const selectedCategory = ref('Semua')

// Data kajian (nanti bisa diganti dengan API)
const kajianList = ref([
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
  },
  {
    id: 3,
    title: 'Diskusi Hukum Islam Tematik',
    ustadz: 'Tim Bahtsul Masail',
    time: 'Selasa, 19:00 - 20:30 WIB',
    location: 'Ruang Kajian',
    description: 'Forum diskusi ilmiah membahas persoalan hukum kontemporer dari perspektif fiqih lintas madzhab.',
    category: 'Bahtsul Masail',
    slug: 'bahtsul-masail-tematik'
  },
  {
    id: 4,
    title: 'Kajian Umum Riyadus Shalihin',
    ustadz: 'Ustadz Hasan Basri',
    time: 'Jum\'at, 15:00 - 16:30 WIB',
    location: 'Masjid Utama',
    description: 'Penyampaian materi secara klasikal (bandongan) yang diikuti oleh seluruh santri dan jamaah umum.',
    category: 'Bandongan',
    slug: 'riyadus-shalihin-umum'
  },
  {
    id: 5,
    title: 'Muroja\'ah Akbar',
    ustadz: 'Ustadz Ibrahim Khalil',
    time: 'Sabtu, 14:00 - 15:30 WIB',
    location: 'Aula Pondok',
    description: 'Kegiatan rutin mengulang hafalan secara berkelompok untuk menjaga kelancaran bacaan.',
    category: 'Tahfidzul Quran',
    slug: 'murojaah-akbar'
  },
  {
    id: 6,
    title: 'Kajian Kitab Jurumiyah',
    ustadz: 'Ustadz Zainal Abidin',
    time: 'Ahad, 08:00 - 10:00 WIB',
    location: 'Ruang Kajian',
    description: 'Mengkaji dasar-dasar ilmu nahwu secara mendetail dengan metode bandongan.',
    category: 'Bandongan',
    slug: 'kitab-jurumiyah'
  }
])

const filteredKajian = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return kajianList.value
  }
  return kajianList.value.filter(k => k.category === selectedCategory.value)
})
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
