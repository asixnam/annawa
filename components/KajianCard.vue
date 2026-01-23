<template>
  <NuxtLink :to="`/kajian/${slug}`" class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2">
    <!-- Context Header -->
    <div class="h-12 bg-brand-50/50 border-b border-gray-50 flex items-center px-6">
      <div class="w-2 h-2 rounded-full bg-brand-500 mr-2"></div>
      <span class="text-[10px] font-black uppercase tracking-widest text-brand-600">{{ category }}</span>
    </div>

    <!-- Content -->
    <div class="p-8 flex-1 flex flex-col">
      <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight font-heading">
        {{ title }}
      </h3>

      <!-- Info Items -->
      <div class="space-y-3 mb-6 flex-1">
        <div class="flex items-center text-gray-600 group/item">
          <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover/item:bg-brand-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span class="text-xs font-bold uppercase tracking-tight text-gray-700">{{ ustadz }}</span>
        </div>

        <div class="flex items-center text-gray-600 group/item">
          <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover/item:bg-brand-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-[11px] font-medium">{{ time }}</span>
        </div>

        <div class="flex items-center text-gray-600 group/item">
          <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover/item:bg-brand-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span class="text-[11px] font-medium">{{ location }}</span>
        </div>
      </div>

      <!-- Description Area -->
      <div class="pt-6 border-t border-gray-50 mt-auto">
        <p class="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4 italic">
          "{{ description }}"
        </p>
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Jadwal Rutin</span>
          <button class="text-brand-600 hover:text-black transition-colors transform group-hover:translate-x-1 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  ustadz: string
  time: string
  location: string
  description: string
  category: string
  slug: string
}>()
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
</style>
