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
          <!-- Visual Header -->
          <div v-if="item.category === 'Kesenian' || item.category === 'Juara'" class="relative h-[400px] md:h-[600px] overflow-hidden group">
            <img 
              v-if="item.image" 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 animate-reveal-image"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8 text-white">
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

          <!-- Text Header -->
          <div v-else class="p-12 md:p-16 border-b border-gray-50 dark:border-gray-800/20 bg-gradient-to-br from-card to-gray-50 dark:to-gray-900 transition-colors duration-300">
            <span class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 animate-fade-in-down">
              {{ item.category }}
            </span>
            <h1 class="text-3xl md:text-5xl font-black text-main leading-tight font-heading flex flex-wrap gap-x-[0.3em]">
              <span v-for="(wordChars, wIndex) in animatedTitle" :key="wIndex" class="inline-block whitespace-nowrap">
                <span v-for="(charObj, cIndex) in wordChars" :key="cIndex" 
                      class="reveal-char" 
                      :style="{ animationDelay: `${0.3 + charObj.delay}s` }">
                  {{ charObj.char }}
                </span>
              </span>
            </h1>
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

              <!-- Horizontal Info -->
              <div ref="sectionSidebar" class="space-y-12 transition-all duration-1000 delay-300"
                   :class="[isVisible.sidebar ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
                <div class="bg-light p-10 rounded-3xl border border-gray-100 dark:border-gray-800/20 transition-colors duration-300">
                  <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8 text-center">Informasi Karya</h4>
                  
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <!-- Author -->
                    <div class="flex items-center gap-5 transition-all duration-500 delay-500"
                         :class="[isVisible.sidebar ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0']">
                      <div class="w-12 h-12 rounded-full bg-card flex items-center justify-center text-brand-600 shadow-sm border border-gray-100 dark:border-gray-800/20 font-bold text-sm">
                        {{ item.author?.charAt(0) }}
                      </div>
                      <div>
                        <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400">Arsitek Karya</p>
                        <p class="text-sm font-bold text-main">{{ item.author }}</p>
                      </div>
                    </div>

                    <!-- Date -->
                    <div class="flex items-center gap-5 transition-all duration-500 delay-[600ms]"
                         :class="[isVisible.sidebar ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0']">
                      <div class="w-12 h-12 rounded-full bg-card flex items-center justify-center text-brand-600 shadow-sm border border-gray-100 dark:border-gray-800/20">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400">Tanggal Rilis</p>
                        <p class="text-sm font-bold text-main">{{ item.date }}</p>
                      </div>
                    </div>

                    <!-- Category -->
                    <div class="flex items-center gap-5 transition-all duration-500 delay-[700ms]"
                         :class="[isVisible.sidebar ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0']">
                      <div class="w-12 h-12 rounded-full bg-card flex items-center justify-center text-brand-600 shadow-sm border border-gray-100 dark:border-gray-800/20">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01" />
                        </svg>
                      </div>
                      <div>
                        <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400">Kategori</p>
                        <p class="text-sm font-bold text-main">{{ item.category }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-center">
                  <NuxtLink to="/user/galeri" class="inline-flex items-center justify-center px-12 py-5 bg-gray-900 dark:bg-brand-600 text-white dark:text-black rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-brand-500 hover:text-black transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gray-200/50 dark:shadow-brand-600/20">
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
