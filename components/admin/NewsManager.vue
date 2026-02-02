<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Manajemen Berita</h1>
      <NuxtLink :to="`${basePath}/create`" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        + Buat Berita Baru
      </NuxtLink>
    </div>

    <!-- Filter Tabs -->
    <div class="flex space-x-2 mb-6">
      <button @click="filter = 'all'" :class="['px-4 py-2 rounded-lg text-sm font-bold transition', filter === 'all' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-50']">Semua</button>
      <button @click="filter = 'berita'" :class="['px-4 py-2 rounded-lg text-sm font-bold transition', filter === 'berita' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-50']">Berita</button>
      <button @click="filter = 'pengumuman'" :class="['px-4 py-2 rounded-lg text-sm font-bold transition', filter === 'pengumuman' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-50']">Pengumuman</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in filteredContent" :key="item.id" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group relative">
        <div class="h-48 bg-gray-200 relative overflow-hidden">
          <img v-if="item.image" :src="item.image" class="w-full h-full object-cover">
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">No Image</div>
          <span class="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-800">{{ item.type }}</span>
        </div>
        <div class="p-6">
          <h3 class="font-bold text-lg text-gray-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors">{{ item.title }}</h3>
          <p class="text-gray-500 text-sm line-clamp-3 mb-4">{{ item.excerpt }}</p>
          <div class="flex justify-between items-center pt-4 border-t border-gray-50">
            <span class="text-xs text-gray-400">{{ item.date }}</span>
            <div class="flex space-x-2">
              <NuxtLink :to="`${basePath}/${item.id}`" class="text-brand-600 hover:text-brand-800 font-bold text-xs uppercase px-2 py-1 bg-brand-50 rounded">Edit</NuxtLink>
              <button @click="deleteContent(item.id)" class="text-red-500 hover:text-red-700 font-bold text-xs uppercase px-2 py-1 bg-red-50 rounded">Hapus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContentStore } from '~/stores/content'

const props = defineProps<{
  basePath: string
}>()

const store = useContentStore()
const filter = ref('all')

const filteredContent = computed(() => {
  if (filter.value === 'all') return store.news
  return store.news.filter(c => c.type.toLowerCase() === filter.value)
})

function deleteContent(id: number) {
  if (confirm('Hapus berita ini?')) {
    store.removeNews(id)
  }
}
</script>
