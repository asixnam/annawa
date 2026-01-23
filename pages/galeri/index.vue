<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-800 text-white pt-20 pb-20">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Galeri Santri</h1>
          <p class="text-lg md:text-xl text-purple-50">
            Dokumentasi kegiatan dan momen berharga di Pondok Pesantren Annawa
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

    <!-- Filter Categories -->
    <section class="container mx-auto px-6 -mt-8 relative z-20">
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all',
              selectedCategory === cat 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="item in filteredGallery" 
          :key="item.id"
          class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <!-- Image -->
          <div class="relative h-64 bg-gradient-to-br from-purple-400 to-pink-500 overflow-hidden">
            <img 
              v-if="item.image" 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h3 class="text-white font-bold text-lg mb-1">{{ item.title }}</h3>
                <p class="text-gray-200 text-sm">{{ item.date }}</p>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-3 right-3">
              <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-purple-700">
                {{ item.category }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredGallery.length === 0" class="text-center py-16">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p class="text-gray-500 text-lg">Belum ada foto untuk kategori ini</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const categories = ref(['Semua', 'Kegiatan', 'Pembelajaran', 'Wisuda', 'Olahraga', 'Seni'])
const selectedCategory = ref('Semua')

// Data galeri (nanti bisa diganti dengan API)
const galleryList = ref([
  {
    id: 1,
    title: 'Kegiatan Tahfidz Pagi',
    image: '',
    date: '15 Jan 2026',
    category: 'Pembelajaran'
  },
  {
    id: 2,
    title: 'Upacara Bendera',
    image: '',
    date: '14 Jan 2026',
    category: 'Kegiatan'
  },
  {
    id: 3,
    title: 'Wisuda Santri Tahfidz',
    image: '',
    date: '10 Jan 2026',
    category: 'Wisuda'
  },
  {
    id: 4,
    title: 'Pertandingan Futsal',
    image: '',
    date: '8 Jan 2026',
    category: 'Olahraga'
  },
  {
    id: 5,
    title: 'Kajian Kitab Kuning',
    image: '',
    date: '7 Jan 2026',
    category: 'Pembelajaran'
  },
  {
    id: 6,
    title: 'Pelatihan Hadroh',
    image: '',
    date: '5 Jan 2026',
    category: 'Seni'
  },
  {
    id: 7,
    title: 'Bakti Sosial',
    image: '',
    date: '3 Jan 2026',
    category: 'Kegiatan'
  },
  {
    id: 8,
    title: 'Lomba Kaligrafi',
    image: '',
    date: '1 Jan 2026',
    category: 'Seni'
  },
  {
    id: 9,
    title: 'Senam Pagi Santri',
    image: '',
    date: '28 Des 2025',
    category: 'Olahraga'
  },
  {
    id: 10,
    title: 'Peringatan Maulid Nabi',
    image: '',
    date: '25 Des 2025',
    category: 'Kegiatan'
  },
  {
    id: 11,
    title: 'Kelas Bahasa Arab',
    image: '',
    date: '20 Des 2025',
    category: 'Pembelajaran'
  },
  {
    id: 12,
    title: 'Turnamen Voli',
    image: '',
    date: '15 Des 2025',
    category: 'Olahraga'
  }
])

const filteredGallery = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return galleryList.value
  }
  return galleryList.value.filter(item => item.category === selectedCategory.value)
})
</script>