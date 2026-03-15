<template>
  <div class="min-h-screen transition-colors duration-300">
    <div v-if="berita" class="container mx-auto px-6 py-24">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex mb-8 text-sm font-bold uppercase tracking-widest animate-fade-in-down" aria-label="Breadcrumb">
          <NuxtLink to="/user" class="text-gray-400 hover:text-brand-600 transition-colors">Home</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <NuxtLink to="/user/berita" class="text-gray-400 hover:text-brand-600 transition-colors">Berita</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <span class="text-brand-600">Detail</span>
        </nav>

        <!-- Header -->
        <header ref="sectionHeader" class="mb-12">
          <h1 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-6 leading-tight font-heading flex flex-wrap gap-x-[0.25em]">
            <span v-for="(wordChars, wIndex) in animatedTitle" :key="wIndex" class="inline-block whitespace-nowrap">
              <span v-for="(charObj, cIndex) in wordChars" :key="cIndex" 
                    class="reveal-char" 
                    :style="{ animationDelay: `${0.3 + charObj.delay}s` }">
                {{ charObj.char }}
              </span>
            </span>
          </h1>
          <div class="flex items-center gap-6 text-sm text-gray-500 font-bold uppercase tracking-wider animate-fade-in-up" style="animation-delay: 0.8s">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-brand-500"></div>
              <span>{{ formattedDate }}</span>
            </div>
          </div>
        </header>

        <!-- Image -->
        <div ref="sectionImage" class="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl transition-all duration-1000"
             :class="[isVisible.image ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0']">
          <img 
            v-if="berita.image" 
            :src="berita.image" 
            :alt="berita.title" 
            class="w-full h-full object-cover transition-transform duration-1000"
            :class="[isVisible.image ? 'scale-100' : 'scale-110']"
          />
          <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div ref="sectionContent" class="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 leading-relaxed font-serif bg-white dark:bg-gray-900 p-10 md:p-16 rounded-3xl border border-gray-100 dark:border-gray-800/40 shadow-sm transition-all duration-1000"
             :class="[isVisible.content ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0']">
          <p class="mb-12 whitespace-pre-wrap text-justify">{{ berita.content }}</p>
          
          <!-- Author Section -->
          <div class="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800/20 flex items-center gap-4">
            <div>
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">Penulis Berita</p>
              <p class="text-sm font-black text-main uppercase">{{ berita.author_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Berita Terkait / Lainnya -->
    <div v-if="berita && otherNews.length > 0" ref="sectionRelated" class="container mx-auto px-6 pb-24 border-t border-gray-100 dark:border-gray-800/40 pt-16 mt-8 transition-all duration-1000"
         :class="[isVisible.related ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0']">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl md:text-3xl font-black text-main font-heading">Berita Terbaru Lainnya</h2>
          <NuxtLink to="/user/berita" class="text-brand-600 font-bold uppercase tracking-wider text-xs hover:text-black dark:hover:text-white transition-colors flex items-center">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, index) in otherNews" :key="item.id"
               class="transition-all duration-700"
               :style="{ transitionDelay: `${index * 100}ms` }"
               :class="[isVisible.related ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
            <BeritaCard
              :title="item.title"
              :excerpt="item.excerpt"
              :image="item.image"
              :date="item.date"
              :slug="item.slug"
            />
          </div>
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
import { computed, onMounted, reactive, ref, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '#app'
import BeritaCard from '~/components/BeritaCard.vue'

const route = useRoute()
const slug = route.params.slug

// Animation States
const isVisible = reactive({
  header: false,
  image: false,
  content: false,
  related: false
})

const sectionHeader = ref(null)
const sectionImage = ref(null)
const sectionContent = ref(null)
const sectionRelated = ref(null)

let observer: IntersectionObserver | null = null

// Helper for split text
const splitText = (text: string) => {
  if (!text) return []
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

const { data: berita } = await useFetch(`/api/news/slug/${slug}`, {
  transform: (data: any) => ({
    ...data,
    author_name: data.author_name || 'Administrator',
    image: data.image_url,
    date: data.created_at
  })
})

const animatedTitle = computed(() => splitText(berita.value?.title || ''))

const { data: newsData } = await useFetch('/api/news')

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === sectionImage.value) isVisible.image = true
        if (entry.target === sectionContent.value) isVisible.content = true
        if (entry.target === sectionRelated.value) isVisible.related = true
      }
    })
  }, { threshold: 0.1 })

  if (sectionImage.value) observer.observe(sectionImage.value)
  if (sectionContent.value) observer.observe(sectionContent.value)
  if (sectionRelated.value) observer.observe(sectionRelated.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

const otherNews = computed(() => {
  if (!newsData.value) return []
  return (newsData.value as any[])
    .filter(n => (!n.type || n.type === 'Berita') && n.slug !== slug)
    .slice(0, 3)
    .map(n => ({
      id: n.id,
      title: n.title,
      excerpt: n.content ? n.content.substring(0, 100) + '...' : '',
      image: n.image_url,
      date: new Date(n.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      slug: n.slug
    }))
})

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

.animate-fade-in-down {
  animation: fadeInDown 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
