<template>
  <div class="min-h-screen bg-light font-sans transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 overflow-hidden bg-card transition-colors duration-300">
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-200">
          Official Profil
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-main mb-6 leading-tight font-heading">
          Profil <span class="text-brand-500 uppercase">SDQTA An-Nawa</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Sekolah Dasar Qur'an Terpadu An-Nawa: Memadukan keunggulan akademik dengan nilai-nilai luhur Al-Qur'an.
        </p>
      </div>
    </section>

    <!-- Tentang SDQTA -->
    <section class="mx-auto px-4 md:px-10 lg:px-20 py-16 w-full transition-colors duration-300">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-main uppercase tracking-tight font-heading">
          Tentang <span class="text-brand-500">SDQTA</span>
        </h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
        <div class="flex justify-center lg:justify-start">
          <div class="w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
            <img 
              :src="sdUnit?.image_url || '/annawa.png'" 
              :alt="sdUnit?.name || 'SDQTA An-Nawa'" 
              class="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-card hover:scale-105 transition-all duration-500 dark:border-gray-800"
            />
          </div>
        </div>
        <div class="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg text-justify pt-6 lg:max-w-2xl">
          <p v-if="sdUnit?.description">
            {{ sdUnit.description }}
          </p>
          <template v-else>
            <p>
              SDQTA (Sekolah Dasar Qur'an Terpadu) An-Nawa Khozinatul Ulum adalah institusi pendidikan dasar yang mengintegrasikan kurikulum nasional dengan pendidikan agama yang mendalam, khususnya dalam bidang Tahfidz Al-Qur'an.
            </p>
            <p>
              Kami berkomitmen untuk melahirkan lulusan yang cerdas secara intelektual, memiliki hafalan Al-Qur'an yang mutqin, serta berakhlak mulia sesuai dengan tuntunan Rasulullah SAW.
            </p>
          </template>
        </div>
      </div>
    </section>

    <!-- Visi & Misi -->
    <section class="bg-card py-16 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-brand-50 dark:bg-brand-900/10 p-8 rounded-3xl border border-brand-100/50 dark:border-brand-500/20 shadow-sm">
            <h3 class="text-xl font-black text-main mb-6 uppercase tracking-tight font-heading">
              Visi <span class="text-brand-500 ml-1">SDQTA</span>
            </h3>
            <p class="text-main text-lg font-medium leading-relaxed italic border-l-4 border-brand-500 pl-4">
              "{{ sdUnit?.vision || 'Mewujudkan generasi Rabbani yang hafidz Al-Qur\'an, unggul dalam prestasi, dan berkarakter islami.' }}"
            </p>
          </div>

          <div class="bg-light p-8 rounded-3xl border border-gray-100 dark:border-gray-800/40 shadow-sm">
            <h3 class="text-xl font-black text-main mb-6 uppercase tracking-tight font-heading">
              Misi <span class="text-brand-500 ml-1">Kami</span>
            </h3>
            <ul class="space-y-4">
              <li v-for="(misi, index) in misis" :key="index" class="flex items-start gap-3">
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
    <section class="py-16 bg-light transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-main uppercase font-heading">
            Fasilitas <span class="text-brand-500">Unggulan</span>
          </h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="item in facilities" :key="item.name" class="bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800/40 text-center group hover:border-brand-500 transition-all">
            <div class="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-4 overflow-hidden group-hover:bg-brand-500/10 transition-colors duration-300">
               <img v-if="item.icon && (item.icon.startsWith('http') || item.icon.startsWith('data:') || item.icon.startsWith('/'))" :src="item.icon" class="w-full h-full object-cover">
               <span v-else class="text-3xl group-hover:scale-110 transition-transform duration-300">{{ item.icon }}</span>
            </div>
            <h4 class="text-sm font-bold text-main">{{ item.name }}</h4>
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
    <section class="py-16 bg-card transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-main uppercase font-heading">
            Kegiatan <span class="text-brand-500">Sekolah</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="activity in activities" :key="activity.title" class="group relative overflow-hidden aspect-video shadow-lg">
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
    <section class="container mx-auto px-6 py-16 bg-light transition-colors duration-300">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-black text-main mb-4 uppercase font-heading">
          Guru <span class="text-brand-500">SDQTA</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Tim pengajar yang profesional, hafidz Al-Qur'an, dan berdedikasi tinggi.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div v-for="teacher in teachers" :key="teacher.name" class="group text-center">
          <div class="relative overflow-hidden mb-4 shadow-lg aspect-[3/4] bg-card dark:border dark:border-gray-800">
            <img 
              :src="teacher.photo" 
              :alt="teacher.name" 
              class="w-full h-full object-cover transition-all duration-500" 
            />
          </div>
          <h4 class="text-lg font-bold text-main mb-1 leading-tight group-hover:text-brand-600 transition-colors">{{ teacher.name }}</h4>
          <p class="text-brand-600 text-[11px] font-bold uppercase tracking-wider mb-1">
            {{ teacher.position }}
          </p>
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
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-light py-16 px-6 transition-colors duration-300">
      <div class="max-w-6xl mx-auto">
        <div class="bg-card rounded-[2rem] border border-gray-100 dark:border-gray-800/40 shadow-2xl overflow-hidden relative p-8 md:p-14 text-center">
          <h2 class="text-2xl md:text-4xl font-black text-brand-700 mb-6 font-heading">
            Wujudkan Generasi Qur'ani Terpadu
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
            Segera daftarkan putra-putri Anda untuk bergabung dalam angkatan baru SDQTA An-Nawa.
          </p>
          <div class="flex justify-center">
            <NuxtLink 
              to="/user/ppdb/sd" 
              class="px-12 py-5 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20"
            >
              Daftar SDQTA
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useContentStore } from '~/stores/content'

const store = useContentStore()

// Fetch Data
onMounted(() => {
  if (store.units.length === 0) {
    store.fetchUnits()
  }
})

// Find SD Unit
const sdUnit = computed(() => {
  if (store.units.length === 0) return null
  return (store.units as any[]).find(u => u.id === 'sd') || (store.units as any[]).find(u => u.name.toLowerCase().includes('sd'))
})

const misis = computed(() => {
  if (!sdUnit.value?.mission) return [
    "Menyelenggarakan pendidikan dasar IT (Islam Terpadu) yang berkualitas tinggi.",
    "Membekali santri dengan hafalan Al-Qur'an minimal 5-10 juz (sesuai target jenjang).",
    "Menumbuhkan kecintaan terhadap ilmu pengetahuan dan teknologi."
  ]
  return Array.isArray(sdUnit.value.mission) ? sdUnit.value.mission : [sdUnit.value.mission]
})

const facilities = computed(() => sdUnit.value?.facilities || [])
const activities = computed(() => sdUnit.value?.activities || [])
const teachers = computed(() => sdUnit.value?.staff || [])
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
