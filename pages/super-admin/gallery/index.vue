<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Manajemen Galeri</h1>
      <NuxtLink to="/super-admin/gallery/create" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        + Tambah Karya Galeri
      </NuxtLink>
    </div>

    <!-- Filter Tabs -->
    <div class="flex overflow-x-auto pb-2 space-x-2 mb-6 scrollbar-hide">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="selectedCategory = cat"
        :class="['px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition', 
                selectedCategory === cat ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-50']"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in filteredGallery" :key="item.id" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group relative flex flex-col h-full">
        <div class="h-48 bg-gray-200 relative overflow-hidden">
          <img v-if="item.image" :src="item.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100 italic text-sm p-4 text-center">
             {{ item.excerpt ? '"' + item.excerpt + '"' : 'Tanpa Gambar' }}
          </div>
          <span class="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-sm">{{ item.category }}</span>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="font-bold text-lg text-gray-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors">{{ item.title }}</h3>
          <p class="text-gray-500 text-xs mb-4">Oleh: <span class="font-bold">{{ item.author }}</span> · {{ item.date }}</p>
          
          <div class="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
            <div class="flex space-x-2">
              <NuxtLink :to="`/super-admin/gallery/${item.id}`" class="text-brand-600 hover:text-brand-800 font-bold text-xs uppercase px-2 py-1 bg-brand-50 rounded">Edit</NuxtLink>
              <button @click="deleteItem(item.id)" class="text-red-500 hover:text-red-700 font-bold text-xs uppercase px-2 py-1 bg-red-50 rounded">Hapus</button>
            </div>
            <button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Empty State -->
    <div v-if="filteredGallery.length === 0" class="text-center py-20 bg-white rounded-2xl border border-gray-100">
      <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 class="text-lg font-bold text-gray-900">Belum ada karya galeri</h3>
      <p class="text-gray-500 text-sm">Coba ubah filter atau tambahkan karya baru.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout: 'super-admin' })

const categories = ref(['Semua', 'Juara', 'Literasi', 'Kesenian', 'Khitobah'])
const selectedCategory = ref('Semua')

// Shared data with user gallery
const galleryList = ref([
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

const filteredGallery = computed(() => {
  if (selectedCategory.value === 'Semua') return galleryList.value
  return galleryList.value.filter(item => item.category === selectedCategory.value)
})

function deleteItem(id: number) {
  if (confirm('Hapus karya galeri ini?')) {
    galleryList.value = galleryList.value.filter(item => item.id !== id)
  }
}
</script>
