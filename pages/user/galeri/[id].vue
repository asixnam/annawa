<template>
  <div class="min-h-screen transition-colors duration-300">
    <div v-if="item" class="container mx-auto px-6 py-24">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex mb-8 text-sm font-bold uppercase tracking-widest" aria-label="Breadcrumb">
          <NuxtLink to="/user" class="text-gray-400 hover:text-brand-600 transition-colors">Home</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <NuxtLink to="/user/galeri" class="text-gray-400 hover:text-brand-600 transition-colors">Galeri</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <span class="text-brand-600">Terbitan</span>
        </nav>

        <!-- Gallery Details Card -->
        <div class="bg-card rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800/40 shadow-xl transition-colors duration-300">
          <!-- Visual Header (Always displayed for all categories) -->
          <div class="relative h-[400px] md:h-[600px] overflow-hidden group border-b border-gray-100 dark:border-gray-800/40">
            <img 
              v-if="item.image" 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 animate-reveal-image"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-12 left-8 right-8 md:left-16 md:right-16 text-white">
              <span class="inline-block px-3 py-1 bg-brand-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full mb-4 animate-fade-in-down">
                {{ item.category }}
              </span>
              <h1 class="text-3xl md:text-5xl font-black leading-tight font-heading flex flex-wrap gap-x-[0.3em]">
                <span v-for="(wordChars, wIndex) in animatedTitle" :key="wIndex" class="inline-block whitespace-nowrap">
                  <span v-for="(charObj, cIndex) in wordChars" :key="cIndex" 
                        class="reveal-char" 
                        :style="{ animationDelay: `${0.3 + charObj.delay}s` }">
                    {{ charObj.char }}
                  </span>
                </span>
              </h1>
            </div>
          </div>

          <!-- Content Body -->
          <div class="p-12 md:p-16">
            <div class="space-y-16">
              <!-- Text Content -->
              <div ref="sectionContent" class="transition-all duration-1000"
                   :class="[isVisible.content ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
                <div v-if="item.excerpt" class="prose prose-xl max-w-none">
                  <p class="text-gray-700 dark:text-gray-300 italic leading-relaxed text-lg lg:text-xl font-serif">
                    "{{ item.excerpt }}"
                  </p>
                </div>
                <div v-else class="text-gray-600 dark:text-gray-400 space-y-6">
                   <p class="text-lg font-serif">
                     Karya fenomenal ini mencerminkan dedikasi santri dalam mengekspresikan nilai-nilai keislaman melalui media visual. Setiap detail memiliki makna filosofis yang mendalam tentang perjalanan spiritual dan pembelajaran di Pondok Pesantren An-Nawa.
                   </p>
                   <p class="font-serif">
                     Diharapkan karya ini dapat menginspirasi santri lainnya untuk terus berkarya dan mengembangkan bakat yang diberikan Allah SWT untuk kemaslahatan umat.
                   </p>
                </div>
              </div>

              <!-- Minimalist Metadata Footer -->
              <div ref="sectionSidebar" class="pt-12 border-t border-gray-100 dark:border-gray-800/20 transition-all duration-1000 delay-300"
                   :class="[isVisible.sidebar ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div class="flex flex-wrap items-center gap-x-12 gap-y-4">
                    <div class="flex flex-col">
                      <span class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Penulis</span>
                      <span class="text-sm font-bold text-main">{{ item.author }}</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Tanggal</span>
                      <span class="text-sm font-bold text-main">{{ item.date }}</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Kategori</span>
                      <span class="text-sm font-bold text-main">{{ item.category }}</span>
                    </div>
                  </div>
                  
                  <NuxtLink to="/user/galeri" class="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-600 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Kembali ke Galeri
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="container mx-auto px-6 py-24 text-center">
      <h2 class="text-2xl font-bold text-main">Karya tidak ditemukan</h2>
      <NuxtLink to="/user/galeri" class="mt-4 inline-block px-6 py-3 bg-brand-500 text-black font-bold rounded-xl">Kembali ke Galeri</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '#app'

const route = useRoute()
const id = route.params.id

const { data: item } = await useFetch(`/api/gallery/${id}`, {
  transform: (data: any) => ({
    ...data,
    image: data.image_url,
    excerpt: data.description,
    date: new Date(data.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  })
})

// Animation Logic
const isVisible = reactive({
  content: false,
  sidebar: false
})

const sectionContent = ref(null)
const sectionSidebar = ref(null)
let observer: IntersectionObserver | null = null

const splitText = (text: string) => {
  let charCount = 0
  return text.split(' ').map(word => {
    const chars = word.split('').map(char => {
      const delay = charCount * 0.03
      charCount++
      return { char, delay }
    })
    charCount++
    return chars
  })
}

const animatedTitle = computed(() => item.value ? splitText(item.value.title) : [])

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === sectionContent.value) isVisible.content = true
        if (entry.target === sectionSidebar.value) isVisible.sidebar = true
      }
    })
  }, { threshold: 0.1 })

  if (sectionContent.value) observer.observe(sectionContent.value)
  if (sectionSidebar.value) observer.observe(sectionSidebar.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
.font-serif {
  font-family: 'Source Serif 4', serif;
}

/* Animations */
.reveal-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: revealChar 0.6s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

@keyframes revealChar {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-reveal-image {
  animation: revealImage 1.2s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

@keyframes revealImage {
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
