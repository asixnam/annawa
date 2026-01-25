<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Galeri Author</h1>
        <p class="text-gray-500 text-sm">Kelola album foto dan dokumentasi kegiatan.</p>
      </div>
      <button class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>
        Upload Foto Baru
      </button>
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="item in galleries" :key="item.id" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
        <div class="h-48 bg-gray-200 relative">
          <img v-if="item.image" :src="item.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-20" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
             </svg>
          </div>
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
             <button class="p-2 bg-white rounded-full text-gray-900 hover:text-brand-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
             </button>
             <button class="p-2 bg-white rounded-full text-red-600 hover:bg-red-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
             </button>
          </div>
          <div class="absolute top-2 right-2">
             <span class="px-2 py-1 bg-black/60 backdrop-blur text-white text-xs rounded font-bold"
               :class="item.status === 'published' ? 'bg-green-500/80' : 'bg-amber-500/80'"
             >
               {{ item.status }}
             </span>
          </div>
        </div>
        <div class="p-4">
           <h3 class="font-bold text-gray-900 mb-1 truncate">{{ item.title }}</h3>
           <p class="text-xs text-gray-500 mb-3">{{ item.date }}</p>
           <div class="flex justify-between items-center text-xs text-gray-400">
             <span>{{ item.photosCount }} Foto</span>
             <span>{{ item.views }} Views</span>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'

definePageMeta({
  layout: 'author',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('author') && !auth.hasRole('super')) {
       return navigateTo('/user/unauthorized')
    }
  }
})

const galleries = ref([
 { id: 1, title: 'Kegiatan Memanah 2026', date: '22 Jan 2026', status: 'published', photosCount: 12, views: 145, image: 'https://images.unsplash.com/photo-1511391006391-45e2e7e2b6a9?auto=format&fit=crop&q=80&w=400' },
 { id: 2, title: 'Kunjungan Syekh dari Mesir', date: '20 Jan 2026', status: 'published', photosCount: 8, views: 320, image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=400' },
 { id: 3, title: 'Lomba Kaligrafi Nasional', date: '15 Jan 2026', status: 'draft', photosCount: 5, views: 0, image: '' },
])
</script>
