<template>
  <NuxtLink :to="`/berita/${slug}`" class="block group">
    <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      <!-- Image -->
      <div class="relative h-48 overflow-hidden bg-gray-200">
        <img 
          v-if="image" 
          :src="image" 
          :alt="title" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-400 to-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        
        <!-- Date Badge -->
        <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md">
          <span class="text-xs font-semibold text-gray-700">{{ formattedDate }}</span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-5 flex-1 flex flex-col">
        <!-- Title -->
        <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
          {{ title }}
        </h3>

        <!-- Excerpt -->
        <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {{ excerpt }}
        </p>

        <!-- Read More -->
        <div class="flex items-center text-teal-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Baca Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  excerpt: string
  image?: string
  date: string
  slug: string
}>()

const formattedDate = computed(() => {
  const dateObj = new Date(props.date)
  return dateObj.toLocaleDateString('id-ID', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  })
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
