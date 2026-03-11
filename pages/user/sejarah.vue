<template>
  <div class="min-h-screen bg-light font-sans transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 overflow-hidden bg-card transition-colors duration-300">
      <!-- Decoration Circles -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-200 animate-fade-in-down">
          Tentang Kami
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-main mb-6 leading-tight font-heading flex flex-wrap justify-center gap-x-[0.25em]">
          <span v-for="(wordChars, wIndex) in animatedHeroTitle" :key="wIndex" class="inline-block whitespace-nowrap">
            <span v-for="(charObj, cIndex) in wordChars" :key="cIndex" 
                  class="reveal-char" 
                  :style="{ animationDelay: `${0.2 + charObj.delay}s` }">
              {{ charObj.char }}
            </span>
          </span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed flex flex-wrap justify-center gap-x-[0.2em]">
          <span v-for="(wordChars, wIndex) in animatedHeroSubtitle" :key="wIndex" class="inline-block whitespace-nowrap">
            <span v-for="(charObj, cIndex) in wordChars" :key="cIndex" 
                  class="reveal-char-subtitle" 
                  :style="{ animationDelay: `${0.8 + charObj.delay}s` }">
              {{ charObj.char }}
            </span>
          </span>
        </p>
      </div>
    </section>

    <!-- Narasi Sejarah -->
    <section ref="sectionNarasi" class="container mx-auto px-6 py-16 bg-card border-b border-gray-100 dark:border-gray-800/40 transition-colors duration-300">
      <div class="max-w-5xl mx-auto" :class="[isVisible.narasi ? 'animate-fade-in-up' : 'opacity-0']">
        <!-- Hero Image Horizontal -->
        <div class="mb-12 relative overflow-hidden shadow-2xl group rounded-xl">
          <img 
            src="/images/hero-santri.png" 
            alt="Gedung Utama Pesantren" 
            class="w-full h-[400px] md:h-[500px] object-cover group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
            :class="[isVisible.narasi ? 'animate-image-reveal' : 'scale-110 opacity-0']"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <!-- Text Content -->
        <div class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify max-w-4xl mx-auto whitespace-pre-line">
          {{ historyText }}
        </div>
      </div>
    </section>

    <!-- Timeline / Milestones -->
    <section ref="sectionTimeline" class="py-20 bg-light transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" :class="[isVisible.timeline ? 'animate-fade-in-up' : 'opacity-0']">
          <h2 class="text-3xl md:text-4xl font-black text-main uppercase font-heading">
            Kilas <span class="text-brand-500 ml-1">Peristiwa</span>
          </h2>
          <p class="text-gray-500 mt-4">Tonggak sejarah penting yang membentuk eksistensi kami hari ini.</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div v-for="(item, index) in milestones" :key="index" 
               class="relative pl-10 pb-12 last:pb-0 border-l-2 border-brand-200 ml-4 md:ml-6 transition-all duration-700"
               :style="{ transitionDelay: `${index * 150}ms` }"
               :class="[isVisible.timeline ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0']">
            <div class="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-brand-500 border-4 border-white dark:border-gray-800 shadow-sm"></div>
            <div class="bg-card p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800/40 hover:shadow-md transition-shadow">
              <span class="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold mb-4">{{ item.year }}</span>
              <h3 class="text-xl font-bold text-main mb-3">{{ item.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tokoh Pendiri / Key Figures -->
    <section ref="sectionTokoh" class="bg-card py-16 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" :class="[isVisible.tokoh ? 'animate-fade-in-up' : 'opacity-0']">
          <h2 class="text-3xl md:text-5xl font-black text-main mb-4 uppercase font-heading">
            Tokoh <span class="text-brand-500">Inspiratif</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Beliau-beliau yang meletakkan fondasi dan dedikasi luar biasa dalam perjalanan dakwah kami.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div v-for="(figure, index) in founders" :key="figure.name" 
               class="group text-center transition-all duration-700"
               :style="{ transitionDelay: `${index * 200}ms` }"
               :class="[isVisible.tokoh ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <div class="relative overflow-hidden mb-6 shadow-xl aspect-[3/4] rounded-xl">
              <img 
                :src="figure.photo" 
                :alt="figure.name" 
                class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
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
        <!-- Empty State -->
        <div v-if="founders.length === 0" class="col-span-full py-16 text-center">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-light border border-gray-100 dark:border-gray-800/40 mb-6 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-main mb-2">Belum Ada Tokoh</h3>
          <p class="text-gray-500 text-sm max-w-sm mx-auto">Informasi tokoh pendiri akan segera hadir di sini. Data tokoh akan segera diperbarui.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, reactive, onUnmounted } from 'vue'
import { useContentStore } from '~/stores/content'

const store = useContentStore()

// Animation States
const isVisible = reactive({
  narasi: false,
  timeline: false,
  tokoh: false
})

const sectionNarasi = ref(null)
const sectionTimeline = ref(null)
const sectionTokoh = ref(null)

let observer: IntersectionObserver | null = null

// Helper for split text
const splitText = (text: string) => {
  let charCount = 0
  return text.split(' ').map(word => {
    const chars = word.split('').map(char => {
      const delay = charCount * 0.03
      charCount++
      return { char, delay }
    })
    charCount++ // count space
    return chars
  })
}

const heroTitle = "Sejarah Perjalanan"
const heroSubtitle = "Menapak tilas awal berdirinya Pondok Pesantren Khozinatul Ulum An-Nawa dan perjuangan dalam mencetak generasi Qur'ani."

const animatedHeroTitle = computed(() => splitText(heroTitle))
const animatedHeroSubtitle = computed(() => splitText(heroSubtitle))

// Fetch Data & Setup Observer
onMounted(() => {
  store.fetchHistory()

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === sectionNarasi.value) isVisible.narasi = true
        if (entry.target === sectionTimeline.value) isVisible.timeline = true
        if (entry.target === sectionTokoh.value) isVisible.tokoh = true
      }
    })
  }, { threshold: 0.15 })

  if (sectionNarasi.value) observer.observe(sectionNarasi.value)
  if (sectionTimeline.value) observer.observe(sectionTimeline.value)
  if (sectionTokoh.value) observer.observe(sectionTokoh.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

const milestones = computed(() => store.history.milestones)
const founders = computed(() => store.figures)
const historyText = computed(() => store.history.text)
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}

/* Animations */
.reveal-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: revealChar 0.6s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

.reveal-char-subtitle {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
  animation: revealChar 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

@keyframes revealChar {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

.animate-image-reveal {
  animation: imageReveal 1.2s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes imageReveal {
  from { opacity: 0; transform: scale(1.1); }
  to { opacity: 1; transform: scale(1); }
}
</style>
