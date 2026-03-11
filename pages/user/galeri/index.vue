<template>
  <div class="min-h-screen bg-light transition-colors duration-300 font-sans">
    <!-- Hero Section -->
    <section class="relative bg-card pt-16 pb-24 overflow-hidden border-b border-gray-100 dark:border-gray-800/40 transition-colors duration-300">
      <!-- Artistic Background Decorations -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="max-w-3xl mx-auto">
          <div class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-down">
            Kreativitas & Inspirasi
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

    <!-- Filter Categories -->
    <section ref="sectionFilter" class="container mx-auto px-6 -mt-8 relative z-20 transition-all duration-700"
             :class="[isVisible.filter ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
      <div class="bg-card rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800/40 p-4 max-w-4xl mx-auto transition-colors duration-300">
        <!-- Mobile View: Dropdown -->
        <div class="block md:hidden relative">
          <select 
            v-model="selectedCategory"
            class="w-full px-5 py-3 rounded-xl font-bold bg-light text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 appearance-none transition-all"
          >
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
          <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Desktop View: Buttons -->
        <div class="hidden md:flex flex-wrap justify-center gap-2">
          <button 
            v-for="(cat, index) in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            class="px-5 py-2.5 rounded-xl font-bold transition-all text-sm uppercase tracking-wider transform"
            :style="{ transitionDelay: `${index * 50}ms` }"
            :class="[
              selectedCategory === cat 
                ? 'bg-brand-500 text-black shadow-lg shadow-brand-500/20 scale-105' 
                : 'bg-light text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800',
              isVisible.filter ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section ref="sectionGrid" class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in filteredGallery" :key="item.id"
             class="transition-all duration-700"
             :style="{ transitionDelay: `${(index % 6) * 100}ms` }"
             :class="[isVisible.grid ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0']">
          <NuxtLink 
            :to="`/user/galeri/${item.id}`"
            class="group bg-card rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2"
          >
            <!-- Visual Context (Image for Karikatur, Pattern/Icon for Text) -->
            <div v-if="item.category === 'Kesenian' || item.category === 'Juara'" class="relative h-64 overflow-hidden">
               <div v-if="!item.image" class="w-full h-full bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                 </svg>
               </div>
               <img 
                 v-else 
                 :src="item.image" 
                 :alt="item.title" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 group-hover"
               />
               <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            </div>
            
            <div v-else class="h-12 bg-brand-50/50 border-b border-gray-50 dark:border-gray-800/20 flex items-center px-6">
              <div class="w-2 h-2 rounded-full bg-brand-500 mr-2"></div>
              <span class="text-[10px] font-black uppercase tracking-widest text-brand-600">{{ item.category }}</span>
            </div>

            <!-- Content -->
            <div class="p-8 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-main mb-3 group-hover:text-brand-600 transition-colors leading-tight">
                {{ item.title }}
              </h3>
              
              <p v-if="item.excerpt" class="text-gray-600 text-sm leading-relaxed mb-6 flex-1 italic">
                "{{ item.excerpt }}"
              </p>
              <p v-else class="text-gray-500 text-sm mb-6 flex-1">
                Karya seni visual oleh santri berprestasi Annawa.
              </p>

              <div class="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-gray-800/20">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-light flex items-center justify-center text-[10px] font-bold text-gray-500 border border-gray-200 dark:border-gray-800/40">
                    {{ item.author?.charAt(0) }}
                  </div>
                  <div class="ml-3">
                    <p class="text-[11px] font-bold text-main uppercase tracking-tighter">{{ item.author }}</p>
                    <p class="text-[10px] text-gray-400">{{ item.date }}</p>
                  </div>
                </div>
                <button class="text-brand-600 hover:text-main transition-colors transform translate-x-0 group-hover:translate-x-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredGallery.length === 0" class="text-center py-24">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-card mb-6 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-main mb-2">Belum ada karya</h3>
        <p class="text-gray-500">Nantikan karya-karya inspiratif berikutnya dari santri kami.</p>
      </div>
    </section>

    <!-- Author Registration CTA -->
    <section ref="sectionCTA" class="bg-light py-16 px-6 transition-colors duration-300">
      <div class="max-w-6xl mx-auto">
        <div class="bg-card rounded-[2rem] border border-gray-100 dark:border-gray-800/40 shadow-2xl overflow-hidden relative p-8 md:p-14 transition-all duration-1000"
             :class="[isVisible.cta ? 'scale-100 opacity-100' : 'scale-95 opacity-0']">
          <!-- Decoration for CTA -->
          <div class="absolute top-0 right-0 w-80 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.4,42.4C65.3,55.8,54.8,68,41.4,75.1C28,82.2,14,84.1,0.2,83.8C-13.6,83.5,-27.2,81,-40.4,74.1C-53.5,67.2,-66.2,55.8,-74.6,42.2C-82.9,28.6,-86.9,12.8,-86.2,-2.7C-85.4,-18.2,-80,-33.4,-70.7,-46.1C-61.4,-58.8,-48.3,-69.1,-34.4,-76.5C-20.5,-83.9,-10.2,-88.4,2.9,-93.4C16,-98.5,30.6,-83.7,44.7,-76.4Z" transform="translate(100 100)" class="text-brand-500" />
            </svg>
          </div>

          <div class="relative z-10 text-center">
            <h2 class="text-3xl md:text-5xl font-black text-main mb-6 font-heading leading-tight transition-all duration-700 delay-300"
                :class="[isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0']">
              Punya Bakat <span class="text-brand-600">Menulis</span> atau <span class="text-brand-600">Seni?</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-500"
               :class="[isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0']">
              Mari bergabung menjadi kontributor galeri Annawa. Bagikan karyamu, inspirasi temanmu, dan jadilah bagian dari sejarah kreatif pesantren.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-5 justify-center transition-all duration-700 delay-700"
                 :class="[isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0']">
              <NuxtLink 
                to="/login" 
                class="px-12 py-5 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-600 transition-all text-center shadow-xl shadow-brand-500/20 transform hover:-translate-y-1"
              >
                Daftar Sebagai Penulis
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'
import { useFetch } from '#app'

// Animation States
const isVisible = reactive({
  filter: false,
  grid: false,
  cta: false
})

const sectionFilter = ref(null)
const sectionGrid = ref(null)
const sectionCTA = ref(null)

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

const heroTitle = "Goresan Pena Santri"
const heroSubtitle = "Wadah kreativitas santri Pondok Pesantren Khozinatul Ulum An-Nawa dalam berbagai karya sastra, seni visual, dan pemikiran islami."

const animatedHeroTitle = computed(() => splitText(heroTitle))
const animatedHeroSubtitle = computed(() => splitText(heroSubtitle))

const categories = ref(['Semua', 'Juara', 'Literasi', 'Kesenian', 'Khitobah'])
const selectedCategory = ref('Semua')

const { data: gallery } = await useFetch('/api/gallery?public=true')

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === sectionFilter.value) isVisible.filter = true
        if (entry.target === sectionGrid.value) isVisible.grid = true
        if (entry.target === sectionCTA.value) isVisible.cta = true
      }
    })
  }, { threshold: 0.1 })

  if (sectionFilter.value) observer.observe(sectionFilter.value)
  if (sectionGrid.value) observer.observe(sectionGrid.value)
  if (sectionCTA.value) observer.observe(sectionCTA.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

const filteredGallery = computed(() => {
  if (!gallery.value) return []
  let items = gallery.value as any[]

  if (selectedCategory.value !== 'Semua') {
    items = items.filter(item => item.category === selectedCategory.value)
  }
  
  return items.map(item => {
    const words = item.description ? item.description.trim().split(/\s+/) : [];
    const excerpt = words.length > 40 ? words.slice(0, 40).join(' ') + '...' : item.description;
    
    return {
      id: item.id,
      title: item.title,
      image: item.image_url,
      category: item.category,
      author: item.author,
      date: new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      excerpt: excerpt,
      slug: item.id // Use ID as slug/link parameter
    };
  })
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

.animate-fade-in-down {
  animation: fadeInDown 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
