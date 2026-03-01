<template>
  <div class="min-h-screen bg-light transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative bg-card pt-16 pb-24 overflow-hidden border-b border-gray-100 dark:border-gray-800/40 transition-colors duration-300 text-center">
      <!-- Artistic Background Decorations -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto">
          <div class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Jadwal & Materi
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-main mb-6 leading-tight font-heading">
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
      <div class="bg-card rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800/40 p-4 max-w-4xl mx-auto transition-colors duration-300">
        <!-- Mobile View: Dropdown -->
        <div class="block md:hidden relative">
          <select 
            v-model="selectedCategory"
            class="w-full px-5 py-3 rounded-xl font-bold bg-light text-gray-700 border border-gray-200 dark:border-gray-800/40 focus:outline-none focus:ring-2 focus:ring-brand-500/50 appearance-none transition-all"
          >
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
          <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Desktop View: Buttons -->
        <div class="hidden md:flex flex-wrap justify-center gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-5 py-2.5 rounded-xl font-bold transition-all text-sm uppercase tracking-wider',
              selectedCategory === cat 
                ? 'bg-brand-500 text-black shadow-lg shadow-brand-500/20' 
                : 'bg-light text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'
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
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-card mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-main mb-2">Belum ada kajian</h3>
        <p class="text-gray-500">Nantikan jadwal kajian terbaru untuk kategori ini.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '#app'
import KajianCard from '~/components/KajianCard.vue'

const categories = ref(['Semua', 'Sorogan', 'Tahfidzul Quran', 'Bahtsul Masail', 'Bandongan'])
const selectedCategory = ref('Semua')

const { data: kajian } = await useFetch('/api/kajian')

const filteredKajian = computed(() => {
  if (!kajian.value) return []
  let items = kajian.value as any[]

  if (selectedCategory.value !== 'Semua') {
    items = items.filter(k => k.category === selectedCategory.value)
  }

  return items.map(k => ({
    id: k.id,
    title: k.title,
    ustadz: k.ustadz_name,
    time: k.schedule,
    location: k.location,
    description: k.description,
    category: k.category,
    slug: k.slug
  }))
})
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
