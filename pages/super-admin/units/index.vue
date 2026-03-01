<template>
  <div class="max-w-6xl">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Manajemen Unit Pendidikan</h1>
      <p class="text-gray-500 text-sm">Pilih unit pendidikan yang ingin dikelola.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <NuxtLink 
        v-for="unit in units" 
        :key="unit.id"
        :to="`/super-admin/units/${unit.slug}`"
        class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-500 transition-all group flex items-center gap-6"
      >
        <div class="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-500 transition-colors overflow-hidden shrink-0">
          <img v-if="unit.image_url" :src="unit.image_url" class="w-full h-full object-cover">
          <span v-else class="text-3xl group-hover:scale-110 transition-transform">🏫</span>
        </div>
        <div class="min-w-0">
          <h3 class="text-xl font-black text-gray-900 mb-1 truncate">{{ unit.name }}</h3>
          <div class="flex items-center text-brand-600 font-bold text-sm">
            Kelola Unit
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'

definePageMeta({ layout: 'super-admin' })

const { data: units } = await useFetch('/api/units')
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
