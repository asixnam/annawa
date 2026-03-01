<template>
  <div class="min-h-screen bg-light transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative bg-card pt-16 pb-24 overflow-hidden border-b border-gray-100 dark:border-gray-800/40 transition-colors duration-300">
      <!-- Artistic Background Decorations -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="max-w-3xl mx-auto">
          <div class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Kabar & Pemutakhiran
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-main mb-6 leading-tight font-heading">
            Berita & <span class="text-brand-500">Kegiatan</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Informasi terkini seputar dinamika kegiatan, prestasi, dan perkembangan di lingkungan Pondok Pesantren Annawa.
          </p>
        </div>
      </div>
    </section>

    <!-- Berita List -->
    <section class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BeritaCard
          v-for="berita in paginatedBerita"
          :key="berita.id"
          :title="berita.title"
          :excerpt="berita.excerpt"
          :image="berita.image"
          :date="berita.date"
          :slug="berita.slug"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredBerita.length === 0" class="text-center py-20">
        <div class="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2v-6a2 2 0 012-2h2m-6-4h.01M17 16h.01" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-main mb-2">Belum Ada Berita</h3>
        <p class="text-gray-600 mb-6">Informasi kegiatan akan segera hadir di sini.</p>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center mt-12 gap-2">
        <button 
          v-for="page in totalPages" 
          :key="page"
          @click="currentPage = page"
          :class="[
            'w-10 h-10 flex items-center justify-center font-bold transition-all',
            currentPage === page 
              ? 'bg-brand-500 text-white shadow-md hover:scale-105'
              : 'text-gray-600 hover:text-brand-500 hover:bg-gray-50'
          ]"
        >
          {{ page }}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useFetch } from '#app'
import BeritaCard from '~/components/BeritaCard.vue'

const filter = ref('all')
const currentPage = ref(1)
const itemsPerPage = 6

const { data: news } = await useFetch('/api/news')

const filteredBerita = computed(() => {
  if (!news.value) return []
  let items = news.value as any[]
  
  if (filter.value !== 'all') {
    items = items.filter(item => item.type && item.type.toLowerCase() === filter.value)
  }

  return items.map(n => ({
    id: n.id,
    title: n.title,
    excerpt: n.content ? n.content.substring(0, 100) + '...' : '',
    image: n.image_url,
    date: new Date(n.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    slug: n.slug
  }))
})

const totalPages = computed(() => {
  return Math.ceil(filteredBerita.value.length / itemsPerPage)
})

const paginatedBerita = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredBerita.value.slice(start, end)
})

// Reset to page 1 when filter changes
watch(filter, () => {
  currentPage.value = 1
})
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
