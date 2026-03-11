<template>
  <div class="min-h-screen bg-gray-50/50 dark:bg-gray-950 transition-colors duration-300">
    <div v-if="kajian" class="container mx-auto px-6 py-24">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex mb-8 text-sm font-bold uppercase tracking-widest animate-fade-in-down" aria-label="Breadcrumb">
          <NuxtLink to="/user" class="text-gray-400 hover:text-brand-600 transition-colors">Home</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <NuxtLink to="/user/kajian" class="text-gray-400 hover:text-brand-600 transition-colors">Kajian</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <span class="text-brand-600">Detail</span>
        </nav>

        <!-- Header -->
        <header ref="sectionHeader" class="mb-12 bg-card p-10 rounded-3xl border border-gray-100 dark:border-gray-800/40 shadow-sm relative overflow-hidden transition-all duration-700"
                :class="[isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
          <div class="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full -mr-16 -mt-16 blur-2xl opacity-50"></div>
          
          <div class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 relative z-10">
            {{ kajian.category }}
          </div>
          
          <h1 class="text-4xl md:text-5xl font-black text-main mb-8 leading-tight font-heading relative z-10 flex flex-wrap gap-x-[0.25em]">
            <span v-for="(wordChars, wIndex) in animatedTitle" :key="wIndex" class="inline-block whitespace-nowrap">
              <span v-for="(charObj, cIndex) in wordChars" :key="cIndex" 
                    class="reveal-char" 
                    :style="{ animationDelay: `${0.3 + charObj.delay}s` }">
                {{ charObj.char }}
              </span>
            </span>
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div class="flex items-center gap-4 group p-4 rounded-2xl bg-light/50 hover:bg-light transition-all duration-300 hover:scale-[1.02]"
                 :style="{ transitionDelay: '500ms' }"
                 :class="[isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0']">
              <div class="w-12 h-12 rounded-2xl bg-card flex items-center justify-center text-brand-600 shadow-inner group-hover:text-brand-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-0.5">Pengajar</p>
                <p class="text-xs font-bold text-main">{{ kajian.ustadz }}</p>
              </div>
            </div>

            <div class="flex items-center gap-4 group p-4 rounded-2xl bg-light/50 hover:bg-light transition-all duration-300 hover:scale-[1.02]"
                 :style="{ transitionDelay: '600ms' }"
                 :class="[isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0']">
              <div class="w-12 h-12 rounded-2xl bg-card flex items-center justify-center text-brand-600 shadow-inner group-hover:text-brand-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-0.5">Waktu</p>
                <p class="text-xs font-bold text-main">{{ kajian.time }}</p>
              </div>
            </div>

            <div class="flex items-center gap-4 group p-4 rounded-2xl bg-light/50 hover:bg-light transition-all duration-300 hover:scale-[1.02]"
                 :style="{ transitionDelay: '700ms' }"
                 :class="[isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0']">
              <div class="w-12 h-12 rounded-2xl bg-card flex items-center justify-center text-brand-600 shadow-inner group-hover:text-brand-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-0.5">Lokasi</p>
                <p class="text-xs font-bold text-main">{{ kajian.location }}</p>
              </div>
            </div>
          </div>
        </header>

        <!-- Content -->
        <div ref="sectionContent" class="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 leading-relaxed bg-card p-10 md:p-16 rounded-3xl border border-gray-100 dark:border-gray-800/40 shadow-sm transition-all duration-1000"
             :class="[isVisible.content ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0']">
          <h3 class="text-2xl font-bold text-main mb-6 font-heading">Deskripsi Kajian</h3>
          <p class="mb-8 whitespace-pre-wrap">{{ kajian.description }}</p>
          
          <!-- <h3 class="text-2xl font-bold text-main mb-6 font-heading">Materi Pembahasan</h3>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Pendalaman materi klasik dari kitab kuning pilihan.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Diskusi interaktif seputar problematika hukum Islam kontemporer.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Pembentukan karakter dan akhlaqul karimah melalui teladan salaf.</span>
            </li>
          </ul>

          <div class="bg-brand-50 p-8 rounded-2xl border border-brand-100">
            <p class="text-sm font-bold text-brand-800 mb-2 uppercase tracking-widest">Catatan Penting</p>
            <p class="text-brand-700 text-sm italic">"Ilmu itu ibarat binatang buruan, dan tulisan adalah pengikatnya. Maka ikatlah buruanmu dengan tali yang kuat."</p>
          </div> -->
        </div>
      </div>
    </div>
    
    <div v-else class="container mx-auto px-6 py-24 text-center">
      <h2 class="text-2xl font-bold text-main">Kajian tidak ditemukan</h2>
      <NuxtLink to="/user/kajian" class="mt-4 inline-block px-6 py-3 bg-brand-500 text-black font-bold rounded-xl">Kembali ke Kajian</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '#app'

const route = useRoute()
const slug = route.params.slug

// Animation States
const isVisible = reactive({
  header: false,
  content: false
})

const sectionHeader = ref(null)
const sectionContent = ref(null)

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

const { data: kajian } = await useFetch(`/api/kajian/slug/${slug}`, {
  transform: (data: any) => ({
    ...data,
    ustadz: data.ustadz_name,
    time: data.schedule,
    // other fields match (title, location, description, category)
  })
})

const animatedTitle = computed(() => splitText(kajian.value?.title || ''))

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === sectionHeader.value) isVisible.header = true
        if (entry.target === sectionContent.value) isVisible.content = true
      }
    })
  }, { threshold: 0.1 })

  if (sectionHeader.value) observer.observe(sectionHeader.value)
  if (sectionContent.value) observer.observe(sectionContent.value)
})

onUnmounted(() => {
  observer?.disconnect()
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

.prose :deep(li) {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 700ms;
}

.prose :deep(li):nth-child(1) { transition-delay: 200ms; }
.prose :deep(li):nth-child(2) { transition-delay: 300ms; }
.prose :deep(li):nth-child(3) { transition-delay: 400ms; }
</style>
