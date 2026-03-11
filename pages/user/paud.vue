<template>
  <div class="min-h-screen bg-light font-sans transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 overflow-hidden bg-card transition-colors duration-300">
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-200 animate-fade-in-down">
          Official Profil
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
    </section>

    <!-- Tentang PAUD -->
    <section ref="sectionTentang" class="container mx-auto px-6 py-16 bg-card border-b border-gray-100 dark:border-gray-800/40 transition-colors duration-300">
      <div class="max-w-5xl mx-auto" :class="[isVisible.tentang ? 'animate-fade-in-up' : 'opacity-0']">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-main uppercase tracking-tight font-heading">
            Tentang <span class="text-brand-500">PAUD</span>
          </h2>
        </div>

        <!-- Hero Image Horizontal -->
        <div class="mb-12 relative overflow-hidden shadow-2xl group rounded-xl">
          <img 
            :src="paudUnit?.image_url || '/annawa.png'" 
            :alt="paudUnit?.name || 'PAUD An-Nawa'" 
            class="w-full h-[400px] md:h-[500px] object-cover group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
            :class="[isVisible.tentang ? 'animate-image-reveal' : 'scale-110 opacity-0']"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <!-- Text Content -->
        <div class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify max-w-4xl mx-auto whitespace-pre-line">
          <p v-if="paudUnit?.description">
            {{ paudUnit.description }}
          </p>
          <template v-else>
            <p>
              PAUD Islam Terpadu An-Nawa Khozinatul Ulum adalah jenjang pendidikan anak usia dini yang berfokus pada pengembangan fitrah anak. Kami percaya bahwa setiap anak adalah unik dan memiliki potensi yang luar biasa.
            </p>
            <p>
              Dengan pendekatan "Learning through Play" yang diintegrasikan dengan nilai-nilai Al-Qur'an, kami menciptakan lingkungan belajar yang aman, nyaman, dan stimulatif bagi tumbuh kembang anak secara holistik.
            </p>
          </template>
        </div>
      </div>
    </section>

    <!-- Visi & Misi -->
    <section ref="sectionVisiMisi" class="bg-card py-16 transition-colors duration-300">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="space-y-8">
          <!-- Visi -->
          <div class="bg-brand-50 dark:bg-brand-900/10 p-8 rounded-xl border border-brand-100/50 dark:border-brand-500/20 shadow-sm transition-all duration-700"
               :class="[isVisible.visiMisi ? 'animate-fade-in-left' : 'opacity-0 translate-x-10']">
            <h3 class="text-xl font-black text-main mb-6 uppercase tracking-tight font-heading">
              Visi <span class="text-brand-500 ml-1">PAUD</span>
            </h3>
            <p class="text-main text-lg font-medium leading-relaxed italic border-l-4 border-brand-500 pl-4">
              "{{ paudUnit?.vision || 'Terwujudnya anak usia dini yang berakhlak mulia, sehat, cerdas, ceria, dan mandiri berlandaskan nilai-nilai Al-Qur\'an.' }}"
            </p>
          </div>

          <!-- Misi -->
          <div class="bg-light p-8 rounded-xl border border-gray-100 dark:border-gray-800/40 shadow-sm transition-all duration-700"
               :class="[isVisible.visiMisi ? 'animate-fade-in-right' : 'opacity-0 -translate-x-10']">
            <h3 class="text-xl font-black text-main mb-6 uppercase tracking-tight font-heading">
              Misi <span class="text-brand-500 ml-1">Kami</span>
            </h3>
            <ul class="space-y-4">
              <li v-for="(misi, index) in misis" :key="index" class="flex items-start gap-3 transition-all duration-500"
                  :style="{ transitionDelay: `${index * 100}ms` }"
                  :class="[isVisible.visiMisi ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0']">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 text-black flex items-center justify-center font-bold text-xs">
                  {{ Number(index) + 1 }}
                </span>
                <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{{ misi }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Fasilitas -->
    <section ref="sectionFasilitas" class="py-16 bg-light transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12" :class="[isVisible.fasilitas ? 'animate-fade-in-up' : 'opacity-0']">
          <h2 class="text-3xl md:text-4xl font-black text-main uppercase font-heading">
            Fasilitas <span class="text-brand-500">PAUD</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(item, index) in facilities" :key="item.name" 
               class="group relative overflow-hidden aspect-video shadow-lg rounded-xl transition-all duration-700"
               :style="{ transitionDelay: `${index * 150}ms` }"
               :class="[isVisible.fasilitas ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <div v-if="item.icon && (item.icon.startsWith('http') || item.icon.startsWith('data:') || item.icon.startsWith('/'))" class="w-full h-full">
              <img :src="item.icon" :alt="item.name" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
            </div>
            <div v-else class="w-full h-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 transition-colors duration-500">
               <span class="text-5xl group-hover:scale-110 transition-transform duration-300">{{ item.icon || '🏫' }}</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <h4 class="text-white font-bold text-lg leading-tight">{{ item.name }}</h4>
            </div>
          </div>
        </div>
        <!-- Empty State -->
        <div v-if="facilities.length === 0" class="col-span-full py-16 text-center">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-light border border-gray-100 dark:border-gray-800/40 mb-6 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-main mb-2">Belum Ada Fasilitas</h3>
          <p class="text-gray-500 text-sm max-w-sm mx-auto">Informasi fasilitas akan segera hadir di sini. Data fasilitas akan segera diperbarui.</p>
        </div>
      </div>
    </section>

    <!-- Kegiatan -->
    <section ref="sectionKegiatan" class="py-16 bg-card transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12" :class="[isVisible.kegiatan ? 'animate-fade-in-up' : 'opacity-0']">
          <h2 class="text-3xl md:text-4xl font-black text-main uppercase font-heading">
            Kegiatan <span class="text-brand-500">Siswa</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(activity, index) in activities" :key="activity.title" 
               class="group relative overflow-hidden aspect-video shadow-lg rounded-xl transition-all duration-700"
               :style="{ transitionDelay: `${index * 150}ms` }"
               :class="[isVisible.kegiatan ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <img :src="activity.image" :alt="activity.title" class="w-full h-full object-cover group-hover:scale-110 transition-duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <h4 class="text-white font-bold text-lg leading-tight">{{ activity.title }}</h4>
            </div>
          </div>
        </div>
        <!-- Empty State -->
        <div v-if="activities.length === 0" class="col-span-full py-16 text-center">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-light border border-gray-100 dark:border-gray-800/40 mb-6 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-main mb-2">Belum Ada Kegiatan</h3>
          <p class="text-gray-500 text-sm max-w-sm mx-auto">Informasi kegiatan akan segera hadir di sini. Data kegiatan akan segera diperbarui.</p>
        </div>
      </div>
    </section>

    <!-- Guru Guru -->
    <section ref="sectionGuru" class="container mx-auto px-6 py-16 bg-light transition-colors duration-300">
      <div class="text-center mb-12" :class="[isVisible.guru ? 'animate-fade-in-up' : 'opacity-0']">
        <h2 class="text-3xl md:text-5xl font-black text-main mb-4 uppercase font-heading">
          Guru <span class="text-brand-500">PAUD</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Pendidik yang sabar dan kompeten dalam membimbing tumbuh kembang anak.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div v-for="(teacher, index) in teachers" :key="teacher.name" 
             class="group text-center transition-all duration-700"
             :style="{ transitionDelay: `${index * 100}ms` }"
             :class="[isVisible.guru ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <div class="relative overflow-hidden mb-4 shadow-lg aspect-[3/4] bg-card dark:border dark:border-gray-800 rounded-xl">
            <img 
              :src="teacher.photo" 
              :alt="teacher.name" 
              class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
            />
          </div>
          <h4 class="text-lg font-bold text-main mb-1 leading-tight group-hover:text-brand-600 transition-colors">{{ teacher.name }}</h4>
          <p class="text-brand-600 text-[11px] font-bold uppercase tracking-wider mb-1">
            {{ teacher.position }}
          </p>
        </div>
      </div>
      <!-- Empty State -->
      <div v-if="teachers.length === 0" class="col-span-full py-16 text-center">
        <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-light border border-gray-100 dark:border-gray-800/40 mb-6 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-main mb-2">Belum Ada Guru</h3>
        <p class="text-gray-500 text-sm max-w-sm mx-auto">Informasi guru akan segera hadir di sini. Data guru akan segera diperbarui.</p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-light py-16 px-6 transition-colors duration-300">
      <div class="max-w-6xl mx-auto">
        <div class="bg-card rounded-[2rem] border border-gray-100 dark:border-gray-800/40 shadow-2xl overflow-hidden relative p-8 md:p-14 text-center">
          <h2 class="text-2xl md:text-4xl font-black text-brand-700 mb-6 font-heading">
            Daftarkan Putra-Putri Anda Sekarang!
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
            Mari bergabung bersama keluarga besar PAUD An-Nawa untuk masa depan anak yang lebih gemilang.
          </p>
          <div class="flex justify-center">
            <NuxtLink 
              to="/user/ppdb/paud" 
              class="px-12 py-5 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20"
            >
              Daftar PAUD
            </NuxtLink>
          </div>
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
  tentang: false,
  visiMisi: false,
  fasilitas: false,
  kegiatan: false,
  guru: false
})

const sectionTentang = ref(null)
const sectionVisiMisi = ref(null)
const sectionFasilitas = ref(null)
const sectionKegiatan = ref(null)
const sectionGuru = ref(null)

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

const heroTitle = "Profil PAUD An-Nawa"
const heroSubtitle = "Membentuk landasan karakter dan kecerdasan anak sejak dini dalam lingkungan yang islami dan menyenangkan."

const animatedHeroTitle = computed(() => splitText(heroTitle))
const animatedHeroSubtitle = computed(() => splitText(heroSubtitle))

// Fetch Data & Setup Observer
onMounted(() => {
  if (store.units.length === 0) {
    store.fetchUnits()
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === sectionTentang.value) isVisible.tentang = true
        if (entry.target === sectionVisiMisi.value) isVisible.visiMisi = true
        if (entry.target === sectionFasilitas.value) isVisible.fasilitas = true
        if (entry.target === sectionKegiatan.value) isVisible.kegiatan = true
        if (entry.target === sectionGuru.value) isVisible.guru = true
      }
    })
  }, { threshold: 0.15 })

  if (sectionTentang.value) observer.observe(sectionTentang.value)
  if (sectionVisiMisi.value) observer.observe(sectionVisiMisi.value)
  if (sectionFasilitas.value) observer.observe(sectionFasilitas.value)
  if (sectionKegiatan.value) observer.observe(sectionKegiatan.value)
  if (sectionGuru.value) observer.observe(sectionGuru.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

// Find PAUD Unit
const paudUnit = computed(() => {
  if (store.units.length === 0) return null
  return (store.units as any[]).find(u => u.id === 'paud') || (store.units as any[]).find(u => u.name.toLowerCase().includes('paud'))
})

const misis = computed(() => {
  if (!paudUnit.value?.mission) return [
    "Menyelenggarakan pendidikan anak usia dini yang berbasis pada nilai-nilai keislaman.",
    "Menciptakan lingkungan belajar yang aktif, inovatif, kreatif, dan menyenangkan."
  ]
  return Array.isArray(paudUnit.value.mission) ? paudUnit.value.mission : [paudUnit.value.mission]
})

const facilities = computed(() => paudUnit.value?.facilities || [])
const activities = computed(() => paudUnit.value?.activities || [])
const teachers = computed(() => paudUnit.value?.staff || [])
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
