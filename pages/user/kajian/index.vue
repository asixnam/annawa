<template>
  <div class="min-h-screen bg-light transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative bg-card pt-16 pb-24 overflow-hidden border-b border-gray-100 dark:border-gray-800/40 transition-colors duration-300 text-center">
      <!-- Artistic Background Decorations -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto">
          <div class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-down">
            Jadwal & Materi
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
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed flex flex-wrap justify-center gap-x-[0.2em]">
            <span v-for="(wordChars, wIndex) in animatedHeroSubtitle" :key="wIndex" class="inline-block whitespace-nowrap">
              <span v-for="(charObj, cIndex) in wordChars" :key="cIndex" 
                    class="reveal-char-subtitle" 
                    :style="{ animationDelay: `${0.8 + charObj.delay}s` }">
                {{ charObj.char }}
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section ref="sectionFilter" class="container mx-auto px-6 -mt-8 relative z-20">
      <div class="bg-card rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800/40 p-4 max-w-4xl mx-auto transition-all duration-700"
           :class="[isVisible.filter ? 'animate-fade-in-up' : 'opacity-0 translate-y-4']">
        <!-- Mobile View: Dropdown -->
        <div class="block md:hidden relative">
          <select 
            v-model="selectedCategory"
            class="w-full px-5 py-3 rounded-xl font-bold bg-light text-gray-700 border border-gray-200 dark:border-gray-800/40 focus:outline-none focus:ring-2 focus:ring-brand-500/50 appearance-none transition-all"
          >
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
          <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Desktop View: Buttons -->
        <div class="hidden md:flex flex-wrap justify-center gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-5 py-2.5 rounded-xl font-bold transition-all text-sm uppercase tracking-wider',
              selectedCategory === cat 
                ? 'bg-brand-500 text-black shadow-lg shadow-brand-500/20' 
                : 'bg-light text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Kajian List -->
    <section ref="sectionList" class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(kajian, index) in filteredKajian" :key="kajian.id"
             class="transition-all duration-700"
             :style="{ transitionDelay: `${index * 100}ms` }"
             :class="[isVisible.list ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <KajianCard
            :title="kajian.title"
            :ustadz="kajian.ustadz"
            :time="kajian.time"
            :location="kajian.location"
            :description="kajian.description"
            :category="kajian.category"
            :slug="kajian.slug"
          />
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredKajian.length === 0" class="text-center py-24">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-card mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-main mb-2">Belum ada kajian</h3>
        <p class="text-gray-500">Nantikan jadwal kajian terbaru untuk kategori ini.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'
import { useFetch } from '#app'
import KajianCard from '~/components/KajianCard.vue'

const categories = ref(['Semua', 'Sorogan', 'Tahfidzul Quran', 'Bahtsul Masail', 'Bandongan'])
const selectedCategory = ref('Semua')

// Animation States
const isVisible = reactive({
  filter: false,
  list: false
})

const sectionFilter = ref(null)
const sectionList = ref(null)

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

const heroTitle = "Kajian Rutin & Ilmiah"
const heroSubtitle = "Bergabunglah dengan rangkaian kajian keislaman untuk memperdalam pemahaman agama dan membentuk akhlak mulia."

const animatedHeroTitle = computed(() => splitText(heroTitle))
const animatedHeroSubtitle = computed(() => splitText(heroSubtitle))

const { data: kajian } = await useFetch('/api/kajian')

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === sectionFilter.value) isVisible.filter = true
        if (entry.target === sectionList.value) isVisible.list = true
      }
    })
  }, { threshold: 0.1 })

  if (sectionFilter.value) observer.observe(sectionFilter.value)
  if (sectionList.value) observer.observe(sectionList.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

const filteredKajian = computed(() => {
  if (!kajian.value) return []
  let items = kajian.value as any[]

  if (selectedCategory.value !== 'Semua') {
    items = items.filter(k => k.category === selectedCategory.value)
  }

  return items.map(k => ({
    id: k.id,
    title: k.title,
    ustadz: k.ustadz_name,
    time: k.schedule,
    location: k.location,
    description: k.description,
    category: k.category,
    slug: k.slug
  }))
})
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

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
