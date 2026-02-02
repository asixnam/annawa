<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Kata Alumni (Testimoni)</h1>
      <NuxtLink :to="`${basePath}/create`" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        + Tambah Testimoni
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in store.testimonials" :key="item.id" class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative group">
        <button @click="deleteTestimonial(item.id)" class="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <img :src="item.image" class="w-full h-full object-cover">
          </div>
          <div>
            <h4 class="font-bold text-gray-900">{{ item.name }}</h4>
            <p class="text-xs text-brand-600 font-bold uppercase">{{ item.batch }}</p>
          </div>
        </div>
        <p class="text-gray-600 text-sm italic mb-4 flex-grow">"{{ item.quote }}"</p>
        <p class="text-xs text-gray-400 font-medium">{{ item.profession }}</p>
        
        <NuxtLink :to="`${basePath}/${item.id}`" class="mt-4 w-full block text-center py-2 bg-gray-50 text-gray-600 font-bold text-xs rounded hover:bg-gray-100">Edit</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from '~/stores/content'

const props = defineProps<{
  basePath: string
}>()

const store = useContentStore()

function deleteTestimonial(id: number) {
  if (confirm('Hapus testimoni ini?')) {
    store.removeTestimonial(id)
  }
}
</script>
