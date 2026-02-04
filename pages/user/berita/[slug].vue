<template>
  <div class="min-h-screen bg-gray-50/50">
    <div v-if="berita" class="container mx-auto px-6 py-24">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex mb-8 text-sm font-bold uppercase tracking-widest" aria-label="Breadcrumb">
          <NuxtLink to="/user" class="text-gray-400 hover:text-brand-600 transition-colors">Home</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <NuxtLink to="/user/berita" class="text-gray-400 hover:text-brand-600 transition-colors">Berita</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <span class="text-brand-600">Detail</span>
        </nav>

        <!-- Header -->
        <header class="mb-12">
          <h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight font-heading">
            {{ berita.title }}
          </h1>
          <div class="flex items-center gap-6 text-sm text-gray-500 font-bold uppercase tracking-wider">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-brand-500"></div>
              <span>{{ formattedDate }}</span>
            </div>
          </div>
        </header>

        <!-- Image -->
        <div class="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-gray-200/50">
          <img 
            v-if="berita.image" 
            :src="berita.image" 
            :alt="berita.title" 
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed font-serif bg-white p-10 md:p-16 rounded-3xl border border-gray-100 shadow-sm">
          <p class="mb-6 whitespace-pre-wrap">{{ berita.content }}</p>
          <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
      </div>
    </div>
    
    <div v-else class="container mx-auto px-6 py-24 text-center">
      <h2 class="text-2xl font-bold text-gray-900">Berita tidak ditemukan</h2>
      <NuxtLink to="/user/berita" class="mt-4 inline-block px-6 py-3 bg-brand-500 text-black font-bold rounded-xl">Kembali ke Berita</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '~/stores/content'

const route = useRoute()
const slug = route.params.slug
const store = useContentStore()

const berita = computed(() => store.news.find(b => b.slug === slug))

const formattedDate = computed(() => {
  if (!berita.value) return ''
  const dateObj = new Date(berita.value.date)
  return dateObj.toLocaleDateString('id-ID', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
})
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
.font-serif {
  font-family: 'Source Serif 4', serif;
}
</style>
