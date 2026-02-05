<template>
  <div class="min-h-screen bg-light font-sans transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 overflow-hidden bg-card transition-colors duration-300">
      <!-- Decoration Circles -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-200">
          Tentang Kami
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-main mb-6 leading-tight font-heading">
          Sejarah <span class="text-brand-500 uppercase">Perjalanan</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Menapak tilas awal berdirinya Pondok Pesantren Khozinatul Ulum An-Nawa dan perjuangan dalam mencetak generasi Qur'ani.
        </p>
      </div>
    </section>

    <!-- Narasi Sejarah -->
    <section class="container mx-auto px-6 py-16 bg-card border-b border-gray-100 dark:border-gray-800/40 transition-colors duration-300">
      <div class="max-w-5xl mx-auto">
        <!-- Hero Image Horizontal -->
        <div class="mb-12 relative overflow-hidden shadow-2xl group">
          <img 
            src="/images/hero-santri.png" 
            alt="Gedung Utama Pesantren" 
            class="w-full h-[400px] md:h-[500px] object-cover group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <!-- Text Content -->
        <div class="space-y-8 text-gray-700 leading-relaxed text-lg text-justify max-w-4xl mx-auto whitespace-pre-line">
          {{ historyText }}
        </div>
      </div>
    </section>

    <!-- Timeline / Milestones -->
    <section class="py-20 bg-light transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-black text-main uppercase font-heading">
            Kilas <span class="text-brand-500 ml-1">Peristiwa</span>
          </h2>
          <p class="text-gray-500 mt-4">Tonggak sejarah penting yang membentuk eksistensi kami hari ini.</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div v-for="(item, index) in milestones" :key="index" class="relative pl-10 pb-12 last:pb-0 border-l-2 border-brand-200 ml-4 md:ml-6">
            <div class="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-brand-500 border-4 border-white dark:border-gray-800 shadow-sm"></div>
            <div class="bg-card p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800/40 hover:shadow-md transition-shadow">
              <span class="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold mb-4">{{ item.year }}</span>
              <h3 class="text-xl font-bold text-main mb-3">{{ item.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tokoh Pendiri / Key Figures -->
    <section class="bg-card py-16 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-black text-main mb-4 uppercase font-heading">
            Tokoh <span class="text-brand-500">Inspiratif</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Beliau-beliau yang meletakkan fondasi dan dedikasi luar biasa dalam perjalanan dakwah kami.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div v-for="figure in founders" :key="figure.name" class="group text-center">
            <div class="relative overflow-hidden mb-6 shadow-xl aspect-[3/4]">
              <img 
                :src="figure.photo" 
                :alt="figure.name" 
                class="w-full h-full object-cover transition-all duration-500" 
              />
            </div>
            <h4 class="text-xl font-bold text-main mb-1 leading-tight group-hover:text-brand-600 transition-colors">{{ figure.name }}</h4>
            <p class="text-brand-600 text-[11px] font-bold uppercase tracking-wider mb-1">
              {{ figure.role }}
            </p>
            <p class="text-gray-400 text-[9px] font-bold uppercase tracking-widest">
           Khozinatul Ulum An-Nawa
          </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '~/stores/content'

const store = useContentStore()

const milestones = computed(() => store.history.milestones)
const founders = computed(() => store.figures)
const historyText = computed(() => store.history.text)
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
