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
          v-for="berita in filteredBerita"
          :key="berita.id"
          :title="berita.title"
          :excerpt="berita.excerpt"
          :image="berita.image"
          :date="berita.date"
          :slug="berita.slug"
        />
      </div>

      <!-- Empty State -->

      <!-- Pagination -->
      <div v-if="filteredBerita.length > 0" class="flex justify-center mt-12 gap-2">
        <button class="w-10 h-10 flex items-center justify-center bg-brand-500 text-white font-bold shadow-md hover:scale-105 transition-transform">
          1
        </button>
        <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-brand-500 hover:bg-gray-50 font-bold transition-colors">
          2
        </button>
        <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-brand-500 hover:bg-gray-50 font-bold transition-colors">
          3
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BeritaCard from '~/components/BeritaCard.vue'
import { useContentStore } from '~/stores/content'

const store = useContentStore()
const filter = ref('all')

const filteredBerita = computed(() => {
  if (filter.value === 'all') return store.news
  return store.news.filter(item => item.type.toLowerCase() === filter.value)
})
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
