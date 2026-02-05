<template>
  <div class="min-h-screen bg-light font-sans transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 overflow-hidden bg-card transition-colors duration-300">
      <!-- Decoration Circles -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-200">
          Official Profil
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-main mb-6 leading-tight font-heading">
          Profil <span class="text-brand-500 uppercase">Pondok Pesantren</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Mengenal lebih dekat Pondok Pesantren Khozinatul Ulum An-Nawa melalui visi, misi, dan tim pengembang kami.
        </p>
      </div>
    </section>

    <!-- Tentang Pondok -->
    <section class="mx-auto px-4 md:px-10 lg:px-20 py-16 w-full">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-main uppercase tracking-tight font-heading">
          Tentang <span class="text-brand-500">Kami</span>
        </h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
        <div class="flex justify-center lg:justify-start">
          <div class="w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
            <img 
              src="/images/pengasuh.jpeg" 
              alt="Pengasuh Pondok" 
              class="w-full h-full object-cover rounded-1xl shadow-xl border-4 bg-gray-100 transition-all duration-500"
            />
          </div>
        </div>
        <div class="space-y-6 text-gray-600 leading-relaxed text-lg text-justify pt-6 lg:max-w-2xl">
          <p>
            Pondok Pesantren Khozinatul Ulum An-Nawa adalah sebuah lembaga pendidikan Islam yang berkomitmen untuk mencetak generasi yang tidak hanya unggul dalam ilmu pengetahuan, namun juga memiliki karakter Qur'ani yang kuat.
          </p>
          <p>
            Berdiri di bawah naungan Yayasan Khozinatul Ulum, kami mengintegrasikan kurikulum pesantren salaf dengan sistem pendidikan modern. Fokus utama kami adalah pada tahfidz Al-Qur'an, pemahaman kitab kuning, dan pembentukan akhlakul karimah.
          </p>
        </div>
      </div>
    </section>

    <!-- Visi & Misi -->
    <section class="bg-card py-16 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Visi -->
          <div class="bg-brand-50 p-8 rounded-3xl border border-brand-100/50 shadow-sm">
            <h3 class="text-xl font-black text-main mb-6 uppercase tracking-tight font-heading">
              Visi <span class="text-brand-500 ml-1">Pondok</span>
            </h3>
            <p class="text-gray-800 text-lg font-medium leading-relaxed italic border-l-4 border-brand-500 pl-4">
              "{{ vision }}"
            </p>
          </div>

          <!-- Misi -->
          <div class="bg-light p-8 rounded-3xl border border-gray-100 dark:border-gray-800/40 shadow-sm">
            <h3 class="text-xl font-black text-main mb-6 uppercase tracking-tight font-heading">
              Misi <span class="text-brand-500 ml-1">Kami</span>
            </h3>
            <ul class="space-y-4">
              <li v-for="(misi, index) in misis" :key="index" class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 text-black flex items-center justify-center font-bold text-xs">
                  {{ index + 1 }}
                </span>
                <p class="text-gray-700 text-sm leading-relaxed">{{ misi }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Fasilitas -->
    <section class="bg-light py-16 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-black text-main mb-4 uppercase font-heading">
            Fasilitas <span class="text-brand-500">Unggulan</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed text-sm md:text-base">
            Sarana dan prasarana yang menunjang kenyamanan serta efektivitas proses belajar mengajar santri di An-Nawa.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div v-for="facility in facilities" :key="facility.id" class="bg-card p-8 rounded-3xl border border-gray-100 dark:border-gray-800/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center">
            <div class="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5 overflow-hidden group-hover:bg-brand-500 transition-colors duration-300">
               <img v-if="facility.icon && (facility.icon.startsWith('http') || facility.icon.startsWith('data:') || facility.icon.startsWith('/'))" :src="facility.icon" class="w-full h-full object-cover">
               <span v-else class="text-3xl group-hover:scale-110 transition-transform duration-300">{{ facility.icon }}</span>
            </div>
            <h4 class="text-main font-black uppercase tracking-widest text-[10px]">{{ facility.name }}</h4>
          </div>
          <!-- Empty State if no facilities -->
          <div v-if="facilities.length === 0" class="col-span-full py-12 text-center bg-card rounded-3xl border border-dashed border-gray-200">
            <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">Fasilitas akan segera diperbarui</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tim Kami -->
    <section class="container mx-auto px-6 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-black text-main mb-4 uppercase font-heading">
          Tim <span class="text-brand-500">Kami</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          Dibalik setiap keberhasilan, terdapat tim yang berdedikasi tinggi untuk memberikan yang terbaik.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div v-for="member in team" :key="member.name" class="group text-center">
          <div class="relative overflow-hidden mb-4 shadow-lg aspect-[3/4]">
            <img 
              :src="member.photo" 
              :alt="member.name" 
              class="w-full h-full object-cover transition-all duration-500 " 
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
      </div>
    </section>

    <!-- Mitra Lembaga -->
    <section class="bg-card py-16 transition-colors duration-300">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-main mb-4 font-heading">
            Mitra <span class="text-brand-500">Lembaga</span>
          </h2>
          <p class="text-gray-500 text-sm max-w-xl mx-auto">Jalinan kerjasama dengan berbagai institusi untuk meningkatkan kualitas pendidikan dan pengabdian.</p>
        </div>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-20">
          <div v-for="mitra in partners" :key="mitra.id" class="flex flex-col items-center group">
            <div class="w-24 h-24 md:w-32 md:h-32 mb-4 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
              <img :src="mitra.logo" :alt="mitra.name" class="max-w-full max-h-full object-contain dark:brightness-0 dark:invert" />
            </div>
            <h3 class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-600 transition-colors text-center">
              {{ mitra.name }}
            </h3>
          </div>
          <!-- Empty state -->
          <div v-if="partners.length === 0" class="text-gray-400 font-bold uppercase tracking-widest text-xs py-10">
            Belum ada mitra lembaga yang ditambahkan
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
              <!-- <NuxtLink to="/profil" class="px-12 py-5 border-2 border-brand-500 text-brand-700 rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-50 transition-all text-center"">
                Profil Pondok
              </NuxtLink> -->
            </div>
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

// Use computed properties to stay reactive to store updates
const vision = computed(() => store.identity.vision)
const misis = computed(() => store.identity.mission)

const facilities = computed(() => {
  // Aggregate facilities from all units for the general profile, 
  // or just show Pondok's if specific. Let's show Pondok's for now.
  const pondok = store.units.find(u => u.id === 'pondok')
  return pondok ? pondok.facilities : []
})
const team = computed(() => {
  // Combine all staff from all units or filter specific leadership?
  // For now, let's just grab main figures or leaders if we had them extended
  // Or reuse existing figures/founders if that matches "Tim Kami" intent
  // The original looked like staff list.
  // Ideally, store should have a 'team' section or we aggregate unit heads.
  // For demo sync, let's use the 'figures' from store as 'Tim Kami' or map Store Staff
  
  // Let's use the figures as key people for now to show sync
  // Or better, aggregate unit heads:
  const heads = []
  store.units.forEach(u => {
    const head = u.staff.find(s => s.position.includes('Kepala') || s.position.includes('Pengasuh'))
    if (head) heads.push(head)
  })
  return heads.length ? heads : store.figures // Fallback
})

// Partners (Mitra Lembaga) from store
const partners = computed(() => {
  const pondok = store.units.find(u => u.id === 'pondok')
  return pondok ? pondok.partners : []
})
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
