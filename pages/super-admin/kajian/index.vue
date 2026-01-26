<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Manajemen Kajian</h1>
      <NuxtLink to="/super-admin/kajian/create" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        + Tambah Jadwal Kajian
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
      <div v-for="kajian in filteredKajian" :key="kajian.id" class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group relative">
        <div class="flex justify-between items-start mb-4">
          <span class="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-[10px] font-bold uppercase tracking-wider">{{ kajian.category }}</span>
          <div class="flex space-x-1">
            <NuxtLink :to="`/super-admin/kajian/${kajian.id}`" class="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-brand-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </NuxtLink>
            <button @click="deleteKajian(kajian.id)" class="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
        <h3 class="font-bold text-lg text-gray-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors">{{ kajian.title }}</h3>
        <p class="text-brand-600 text-xs font-bold mb-3">{{ kajian.ustadz }}</p>
        
        <div class="space-y-2 mb-4">
          <div class="flex items-center text-xs text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ kajian.time }}
          </div>
          <div class="flex items-center text-xs text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ kajian.location }}
          </div>
        </div>
        
        <p class="text-gray-500 text-xs line-clamp-2 leading-relaxed">{{ kajian.description }}</p>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredKajian.length === 0" class="text-center py-20 bg-white rounded-2xl border border-gray-100 mt-6">
      <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h3 class="text-lg font-bold text-gray-900">Belum ada kajian</h3>
      <p class="text-gray-500 text-sm">Nantikan jadwal kajian terbaru untuk kategori ini.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout: 'super-admin' })

const categories = ref(['Semua', 'Sorogan', 'Tahfidzul Quran', 'Bahtsul Masail', 'Bandongan'])
const selectedCategory = ref('Semua')

// Data kajian (Mocked)
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
  }
])

const filteredKajian = computed(() => {
  if (selectedCategory.value === 'Semua') return kajianList.value
  return kajianList.value.filter(k => k.category === selectedCategory.value)
})

function deleteKajian(id: number) {
  if (confirm('Hapus jadwal kajian ini?')) {
    kajianList.value = kajianList.value.filter(k => k.id !== id)
  }
}
</script>
