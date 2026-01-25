<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Manajemen Konten</h1>
      <NuxtLink to="/super-admin/content/create" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        + Buat Konten Baru
      </NuxtLink>
    </div>

    <!-- Filter Tabs -->
    <div class="flex space-x-2 mb-6">
      <button @click="filter = 'all'" :class="['px-4 py-2 rounded-lg text-sm font-bold transition', filter === 'all' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-50']">Semua</button>
      <button @click="filter = 'berita'" :class="['px-4 py-2 rounded-lg text-sm font-bold transition', filter === 'berita' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-50']">Berita</button>
      <button @click="filter = 'kajian'" :class="['px-4 py-2 rounded-lg text-sm font-bold transition', filter === 'kajian' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-50']">Kajian</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in filteredContent" :key="item.id" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group relative">
        <div class="h-48 bg-gray-200 relative overflow-hidden">
          <img v-if="item.image" :src="item.image" class="w-full h-full object-cover">
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">No Image</div>
          <span class="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider text-gray-800">{{ item.type }}</span>
        </div>
        <div class="p-6">
          <h3 class="font-bold text-lg text-gray-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors">{{ item.title }}</h3>
          <p class="text-gray-500 text-sm line-clamp-3 mb-4">{{ item.excerpt }}</p>
          <div class="flex justify-between items-center pt-4 border-t border-gray-50">
            <span class="text-xs text-gray-400">{{ item.date }}</span>
            <div class="flex space-x-2">
              <NuxtLink :to="`/super-admin/content/${item.id}`" class="text-brand-600 hover:text-brand-800 font-bold text-xs uppercase px-2 py-1 bg-brand-50 rounded">Edit</NuxtLink>
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

definePageMeta({ layout: 'super-admin' })

const filter = ref('all')

const contents = ref([
  { id: 1, title: 'Wisuda Tahfidz 2026', type: 'Berita', date: '2026-01-20', excerpt: 'Alhamdulillah telah terlaksana wisuda akbar...', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400' },
  { id: 2, title: 'Kajian Tafsir Jalalain', type: 'Kajian', date: '2026-01-18', excerpt: 'Kajian rutin setiap malam selasa...', image: null },
])

const filteredContent = computed(() => {
  if (filter.value === 'all') return contents.value
  return contents.value.filter(c => c.type.toLowerCase() === filter.value)
})

function deleteContent(id: number) {
  if (confirm('Hapus konten ini?')) {
    contents.value = contents.value.filter(c => c.id !== id)
  }
}
</script>
