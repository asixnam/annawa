<template>
  <div class="min-h-screen bg-light font-sans transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 overflow-hidden bg-card transition-colors duration-300">
      <!-- Decoration Circles -->
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

    <!-- Tentang Pondok -->
    <section ref="sectionTentang" class="container mx-auto px-6 py-16 bg-card border-b border-gray-100 dark:border-gray-800/40 transition-colors duration-300">
      <div class="max-w-5xl mx-auto" :class="[isVisible.tentang ? 'animate-fade-in-up' : 'opacity-0']">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-main uppercase tracking-tight font-heading">
            Tentang <span class="text-brand-500">Kami</span>
          </h2>
        </div>

        <!-- Hero Image Horizontal -->
        <div class="mb-12 relative overflow-hidden shadow-2xl group rounded-xl">
          <img 
            :src="pondokUnit?.image_url || '/images/pengasuh.jpeg'" 
            :alt="pondokUnit?.name || 'Pengasuh Pondok'" 
            class="w-full h-[400px] md:h-[500px] object-cover group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
            :class="[isVisible.tentang ? 'animate-image-reveal' : 'scale-110 opacity-0']"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <!-- Text Content -->
        <div class="space-y-8 text-gray-700 leading-relaxed text-lg text-justify max-w-4xl mx-auto whitespace-pre-line">
          <p v-if="pondokUnit?.description">
            {{ pondokUnit.description }}
          </p>
          <template v-else>
            <p>
              Pondok Pesantren Khozinatul Ulum An-Nawa adalah sebuah lembaga pendidikan Islam yang berkomitmen untuk mencetak generasi yang tidak hanya unggul dalam ilmu pengetahuan, namun juga memiliki karakter Qur'ani yang kuat.
            </p>
            <p>
              Berdiri di bawah naungan Yayasan Khozinatul Ulum, kami mengintegrasikan kurikulum pesantren salaf dengan sistem pendidikan modern. Fokus utama kami adalah pada tahfidz Al-Qur'an, pemahaman kitab kuning, dan pembentukan akhlakul karimah.
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
          <div class="bg-brand-50 p-8 rounded-xl border border-brand-100/50 shadow-sm transition-all duration-700"
               :class="[isVisible.visiMisi ? 'animate-fade-in-left' : 'opacity-0 translate-x-10']">
            <h3 class="text-xl font-black text-main mb-6 uppercase tracking-tight font-heading">
              Visi <span class="text-brand-500 ml-1">Pondok</span>
            </h3>
            <p class="text-gray-800 text-lg font-medium leading-relaxed italic border-l-4 border-brand-500 pl-4">
              "{{ vision }}"
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
                <p class="text-gray-700 text-sm leading-relaxed">{{ misi }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Fasilitas -->
    <section ref="sectionFasilitas" class="bg-light py-16 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12" :class="[isVisible.fasilitas ? 'animate-fade-in-up' : 'opacity-0']">
          <h2 class="text-3xl md:text-5xl font-black text-main mb-4 uppercase font-heading">
            Fasilitas <span class="text-brand-500">Unggulan</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed text-sm md:text-base">
            Sarana dan prasarana yang menunjang kenyamanan serta efektivitas proses belajar mengajar santri di An-Nawa.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(facility, index) in facilities" :key="facility.id" 
               class="group relative overflow-hidden aspect-video shadow-lg rounded-xl transition-all duration-700"
               :style="{ transitionDelay: `${index * 150}ms` }"
               :class="[isVisible.fasilitas ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <div v-if="facility.icon && (facility.icon.startsWith('http') || facility.icon.startsWith('data:') || facility.icon.startsWith('/'))" class="w-full h-full">
              <img :src="facility.icon" :alt="facility.name" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
            </div>
            <div v-else class="w-full h-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 transition-colors duration-500">
               <span class="text-5xl group-hover:scale-110 transition-transform duration-300">{{ facility.icon || '🏫' }}</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <h4 class="text-white font-bold text-lg leading-tight">{{ facility.name }}</h4>
            </div>
          </div>
        </div>

        <!-- Empty State if no facilities -->
        <div v-if="facilities.length === 0" class="py-16 text-center">
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

    <!-- Tim Kami -->
    <section ref="sectionTim" class="container mx-auto px-6 py-16">
      <div class="text-center mb-12" :class="[isVisible.tim ? 'animate-fade-in-up' : 'opacity-0']">
        <h2 class="text-3xl md:text-5xl font-black text-main mb-4 uppercase font-heading">
          Tim <span class="text-brand-500">Kami</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          Dibalik setiap keberhasilan, terdapat tim yang berdedikasi tinggi untuk memberikan yang terbaik.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div v-for="(member, index) in team" :key="member.name" 
             class="group text-center transition-all duration-700"
             :style="{ transitionDelay: `${index * 100}ms` }"
             :class="[isVisible.tim ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <div class="relative overflow-hidden mb-4 shadow-lg aspect-[3/4] rounded-xl">
            <img 
              :src="member.photo" 
              :alt="member.name" 
              class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
            />
          </div>
          <h4 class="text-lg font-bold text-main mb-1 leading-tight group-hover:text-brand-600 transition-colors">{{ member.name }}</h4>
          <p class="text-brand-600 text-[11px] font-bold uppercase tracking-wider mb-1">
            {{ member.position }}
          </p>
          <p class="text-gray-400 text-[9px] font-bold uppercase tracking-widest">
           Khozinatul Ulum An-Nawa
          </p>
        </div>

        <!-- Empty State -->
        <div v-if="team.length === 0" class="col-span-full py-16 text-center">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-light border border-gray-100 dark:border-gray-800/40 mb-6 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-main mb-2">Belum Ada Tim</h3>
          <p class="text-gray-500 text-sm max-w-sm mx-auto">Informasi tim pengembang akan segera hadir di sini. Data tim akan segera diperbarui.</p>
        </div>

      </div>
    </section>

    <!-- Mitra Lembaga -->
    <section ref="sectionMitra" class="bg-card py-16 transition-colors duration-300">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="text-center mb-12" :class="[isVisible.mitra ? 'animate-fade-in-up' : 'opacity-0']">
          <h2 class="text-3xl md:text-4xl font-black text-main mb-4 font-heading">
            Mitra <span class="text-brand-500">Lembaga</span>
          </h2>
          <p class="text-gray-500 text-sm max-w-xl mx-auto">Jalinan kerjasama dengan berbagai institusi untuk meningkatkan kualitas pendidikan dan pengabdian.</p>
        </div>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-20">
          <div v-for="(mitra, index) in partners" :key="mitra.id" 
               class="flex flex-col items-center group transition-all duration-700"
               :style="{ transitionDelay: `${index * 100}ms` }"
               :class="[isVisible.mitra ? 'scale-100 opacity-100' : 'scale-50 opacity-0']">
            <div class="w-24 h-24 md:w-32 md:h-32 mb-4 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
              <img :src="mitra.logo" :alt="mitra.name" class="max-w-full max-h-full object-contain dark:brightness-0 dark:invert" />
            </div>
            <h3 class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-600 transition-colors text-center">
              {{ mitra.name }}
            </h3>
          </div>
          <!-- Empty state -->
          <div v-if="partners.length === 0" class="w-full text-center py-16">
            <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-light border border-gray-100 dark:border-gray-800/40 mb-6 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-main mb-2">Belum Ada Mitra</h3>
            <p class="text-gray-500 text-sm max-w-sm mx-auto">Masih dalam tahap inisiasi kerja sama. Data kemitraan lembaga akan segera diperbarui.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section (Card Style) -->
    <section class="bg-light py-16 px-6 transition-colors duration-300">
      <div class="max-w-6xl mx-auto">
        <div class="bg-card rounded-[2rem] border border-gray-100 dark:border-gray-800/40 shadow-2xl overflow-hidden relative p-8 md:p-14">
          <!-- Decoration for CTA -->
          <div class="absolute top-0 right-0 w-80 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.4,42.4C65.3,55.8,54.8,68,41.4,75.1C28,82.2,14,84.1,0.2,83.8C-13.6,83.5,-27.2,81,-40.4,74.1C-53.5,67.2,-66.2,55.8,-74.6,42.2C-82.9,28.6,-86.9,12.8,-86.2,-2.7C-85.4,-18.2,-80,-33.4,-70.7,-46.1C-61.4,-58.8,-48.3,-69.1,-34.4,-76.5C-20.5,-83.9,-10.2,-88.4,2.9,-93.4C16,-98.5,30.6,-83.7,44.7,-76.4Z" transform="translate(100 100)" class="text-brand-500" />
            </svg>
          </div>

          <div class="relative z-10">
            <h2 class="text-xl md:text-3xl font-black text-brand-700 mb-3 font-heading leading-tight">
              Bergabunglah dengan Khozinatul Ulum An-Nawa Sekarang!
            </h2>
            <p class="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Terbuka untuk tahun ajaran 2025/2026
            </p>
            <p class="text-gray-500 text-sm mb-12">
              Informasi selengkapnya di <a href="#" class="text-brand-600 underline font-bold hover:text-brand-700">psb.annawa.com</a>
            </p>

            <div class="flex flex-col sm:flex-row gap-5">
              <NuxtLink 
                to="/user/psb" 
                class="px-12 py-5 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-600 transition-all text-center shadow-xl shadow-brand-500/20"
              >
                Daftar Sekarang
              </NuxtLink>
            </div>
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
  tim: false,
  mitra: false
})

const sectionTentang = ref(null)
const sectionVisiMisi = ref(null)
const sectionFasilitas = ref(null)
const sectionTim = ref(null)
const sectionMitra = ref(null)

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

const heroTitle = "Profil Pondok Pesantren"
const heroSubtitle = "Mengenal lebih dekat Pondok Pesantren Khozinatul Ulum An-Nawa melalui visi, misi, dan tim pengembang kami."

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
        if (entry.target === sectionTim.value) isVisible.tim = true
        if (entry.target === sectionMitra.value) isVisible.mitra = true
      }
    })
  }, { threshold: 0.15 })

  if (sectionTentang.value) observer.observe(sectionTentang.value)
  if (sectionVisiMisi.value) observer.observe(sectionVisiMisi.value)
  if (sectionFasilitas.value) observer.observe(sectionFasilitas.value)
  if (sectionTim.value) observer.observe(sectionTim.value)
  if (sectionMitra.value) observer.observe(sectionMitra.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

// Find Pondok Unit (assuming name contains 'Pondok')
const pondokUnit = computed(() => {
  if (store.units.length === 0) return null
  return (store.units as any[]).find(u => u.name.toLowerCase().includes('pondok')) || (store.units as any[])[0]
})

const vision = computed(() => pondokUnit.value?.vision || 'Mewujudkan generasi Qurani yang berakhlakul karimah dan berwawasan global.')
const misis = computed(() => {
  if (!pondokUnit.value?.mission) return ['Menyelenggarakan pendidikan tahfidz Al-Quran yang berkualitas.', 'Mengembangkan kurikulum yang terintegrasi antara ilmu agama dan umum.']
  
  // Mission is already parsed in store, but just in case
  return Array.isArray(pondokUnit.value.mission) ? pondokUnit.value.mission : [pondokUnit.value.mission]
})

const facilities = computed(() => pondokUnit.value?.facilities || [])
const team = computed(() => pondokUnit.value?.staff || [])
const partners = computed(() => pondokUnit.value?.partners || [])
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
