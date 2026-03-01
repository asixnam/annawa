<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Kelola Galeri</h1>
      <NuxtLink :to="`${basePath}/create`" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 8L2 22" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.5 15H9" />
        </svg>
        + Baru
      </NuxtLink>
    </div>

    <!-- Filter Section -->
    <div class="mb-6">
      <!-- Mobile View: Dropdown -->
      <div class="block md:hidden relative">
        <select 
          v-model="selectedCategory"
          class="w-full px-4 py-2.5 rounded-lg font-bold bg-white text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 appearance-none transition-all text-sm"
        >
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
        <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <!-- Desktop View: Tabs -->
      <div class="hidden md:flex overflow-x-auto pb-2 space-x-2 scrollbar-hide">
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
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-bold text-lg text-gray-900 leading-tight group-hover:text-brand-600 transition-colors">{{ item.title }}</h3>
            <!-- Status Badge -->
            <span v-if="item.is_approved" class="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">Disetujui</span>
            <span v-else class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">Menunggu</span>
          </div>
          <p class="text-gray-500 text-xs mb-4">Oleh: <span class="font-bold">{{ item.author }}</span> · {{ item.date }}</p>
          
          <div class="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center flex-wrap gap-2">
            <div class="flex space-x-2">
              <NuxtLink :to="`${basePath}/${item.id}`" class="text-brand-600 hover:text-brand-800 font-bold text-xs uppercase px-2 py-1 bg-brand-50 rounded">Edit</NuxtLink>
              <button @click="deleteItem(item.id)" class="text-red-500 hover:text-red-700 font-bold text-xs uppercase px-2 py-1 bg-red-50 rounded">
                {{ !item.is_approved ? 'Tolak' : 'Hapus' }}
              </button>
            </div>
            
            <button 
              v-if="!item.is_approved && (auth.user?.role === 'super' || auth.user?.role === 'admin')" 
              @click="approveItem(item.id)" 
              class="w-auto px-3 h-8 flex items-center justify-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100 font-bold text-xs tracking-wide transition-colors"
            >
              Approve
            </button>
            <button v-else class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400">
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
import { useAuthStore } from '~/stores/auth'

const props = defineProps<{
  basePath: string
}>()

const { data: gallery, refresh } = await useFetch('/api/gallery')
const auth = useAuthStore()
const categories = ref(['Semua', 'Juara', 'Literasi', 'Kesenian', 'Khitobah'])
const selectedCategory = ref('Semua')

const filteredGallery = computed(() => {
  if (!gallery.value) return []
  
  let list = gallery.value.map((item: any) => ({
    ...item,
    image: item.image_url,
    date: new Date(item.created_at).toLocaleDateString('id-ID'),
    excerpt: item.description // Map description to excerpt
  }))
  
  // Filter by author if user is an author
  if (auth.user?.role === 'author') {
    list = list.filter((item: any) => item.author === auth.user?.name)
  }

  if (selectedCategory.value === 'Semua') return list
  return list.filter((item: any) => item.category === selectedCategory.value)
})

async function deleteItem(id: number) {
  if (!confirm('Hapus karya galeri ini?')) return
  try {
    await $fetch(`/api/gallery/${id}`, { method: 'DELETE' })
    refresh()
  } catch (e) {
    alert('Gagal menghapus karya')
  }
}

async function approveItem(id: number) {
  if (!confirm('Setujui karya galeri ini untuk ditampilkan ke publik?')) return
  try {
    await $fetch(`/api/gallery/${id}/approve`, { 
      method: 'PUT',
      body: { is_approved: true } 
    })
    alert('Karya berhasil disetujui')
    refresh()
  } catch (e) {
    alert('Gagal menyetujui karya')
  }
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
