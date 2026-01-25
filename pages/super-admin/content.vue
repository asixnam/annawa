<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Manajemen Konten</h1>
        <p class="text-gray-500 text-sm">Kelola semua konten website (Berita, Kajian, Galeri)</p>
      </div>
      <div class="flex gap-3">
         <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-50 transition">
          Filter
        </button>
        <button class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
          Buat Konten Baru
        </button>
      </div>
    </div>

    <!-- Tabs -->
    <div class="border-b border-gray-200 mb-6">
      <nav class="-mb-px flex space-x-8">
        <button 
          @click="activeTab = 'all'"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          :class="activeTab === 'all' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
        >
          Semua Konten
        </button>
        <button 
          @click="activeTab = 'berita'"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          :class="activeTab === 'berita' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
        >
          Berita
        </button>
        <button 
          @click="activeTab = 'kajian'"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          :class="activeTab === 'kajian' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
        >
          Kajian
        </button>
         <button 
          @click="activeTab = 'galeri'"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          :class="activeTab === 'galeri' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
        >
          Galeri
        </button>
      </nav>
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in filteredContent" :key="item.id" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
        <div class="h-48 bg-gray-200 relative">
          <img v-if="item.image" :src="item.image" class="w-full h-full object-cover">
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="absolute top-4 left-4">
             <span class="px-2 py-1 bg-white/90 backdrop-blur text-xs font-bold rounded uppercase tracking-wide"
              :class="{
                'text-blue-600': item.type === 'berita',
                'text-purple-600': item.type === 'kajian',
                'text-green-600': item.type === 'galeri'
              }"
             >
               {{ item.type }}
             </span>
          </div>
          <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="p-2 bg-white rounded-full text-red-500 hover:bg-red-50 shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div class="p-5 flex-1 flex flex-col">
          <h3 class="font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">{{ item.title }}</h3>
          <p class="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">{{ item.excerpt }}</p>
          <div class="flex items-center justify-between pt-4 border-t border-gray-50 text-xs text-gray-400">
            <span>{{ item.author }}</span>
            <span>{{ item.date }}</span>
          </div>
        </div>
        <div class="bg-gray-50 p-3 flex justify-between items-center text-sm font-medium">
           <span :class="item.status === 'published' ? 'text-green-600' : 'text-amber-600'">
             {{ item.status === 'published' ? 'Published' : 'Draft' }}
           </span>
           <button class="text-brand-600 hover:text-brand-800">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'super-admin',
  middleware: (to, from) => {
    // Only super admin can access
  }
})

const activeTab = ref('all')

const contentStats = ref([
 { id: 1, title: 'Pembukaan Pendaftaran Santri Baru 2026', excerpt: 'Pendaftaran telah dibuka untuk angkatan baru tahun ajaran 2026/2027.', type: 'berita', author: 'Admin Pondok', date: '20 Jan 2026', status: 'published', image: '' },
 { id: 2, title: 'Kajian Rutin Tafsir Jalalain', excerpt: 'Setiap Senin malam di Masjid Utama bersama KH. Abdullah.', type: 'kajian', author: 'Admin Pondok', date: '21 Jan 2026', status: 'published', image: '' },
 { id: 3, title: 'Kegiatan Ekstrakurikuler Memanah', excerpt: 'Dokumentasi kegiatan memanah santri kelas 3.', type: 'galeri', author: 'Ustadz Ahmad', date: '22 Jan 2026', status: 'published', image: 'https://images.unsplash.com/photo-1511391006391-45e2e7e2b6a9?auto=format&fit=crop&q=80&w=400' },
 { id: 4, title: 'Draft: Tata Tertib Ujian Semester', excerpt: 'Perubahan jadwal dan tata tertib ujian semester genap.', type: 'berita', author: 'Admin SD', date: '24 Jan 2026', status: 'draft', image: '' },
])

const filteredContent = computed(() => {
  if (activeTab.value === 'all') return contentStats.value
  return contentStats.value.filter(c => c.type === activeTab.value)
})
</script>
