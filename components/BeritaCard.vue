<template>
  <NuxtLink :to="`/berita/${slug}`" class="block group">
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col transform hover:-translate-y-2">
      <!-- Image Wrapper -->
      <div class="relative h-56 overflow-hidden bg-gray-100">
        <img 
          v-if="image" 
          :src="image" 
          :alt="title" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        
        <!-- Date Badge -->
        <div class="absolute bottom-4 left-4">
          <div class="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
            <span class="text-[10px] font-black uppercase tracking-wider text-gray-800">{{ formattedDate }}</span>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-8 flex-1 flex flex-col">
        <!-- Title -->
        <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight font-heading line-clamp-2">
          {{ title }}
        </h3>

        <!-- Excerpt -->
        <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {{ excerpt }}
        </p>

        <!-- Footer -->
        <div class="flex items-center justify-between pt-6 border-t border-gray-50">
          <span class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Selengkapnya</span>
          <div class="text-brand-600 transition-colors transform group-hover:translate-x-1 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
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
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
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
