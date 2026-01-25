<template>
  <div class="min-h-screen bg-gray-50/50">
    <div v-if="kajian" class="container mx-auto px-6 py-24">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex mb-8 text-sm font-bold uppercase tracking-widest" aria-label="Breadcrumb">
          <NuxtLink to="/" class="text-gray-400 hover:text-brand-600 transition-colors">Home</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <NuxtLink to="/kajian" class="text-gray-400 hover:text-brand-600 transition-colors">Kajian</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <span class="text-brand-600">Detail</span>
        </nav>

        <!-- Header -->
        <header class="mb-12 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          
          <div class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 relative z-10">
            {{ kajian.category }}
          </div>
          
          <h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight font-heading relative z-10">
            {{ kajian.title }}
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-600 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-0.5">Pengajar</p>
                <p class="text-xs font-bold text-gray-800">{{ kajian.ustadz }}</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-600 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-0.5">Waktu</p>
                <p class="text-xs font-bold text-gray-800">{{ kajian.time }}</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-600 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-0.5">Lokasi</p>
                <p class="text-xs font-bold text-gray-800">{{ kajian.location }}</p>
              </div>
            </div>
          </div>
        </header>

        <!-- Content -->
        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed bg-white p-10 md:p-16 rounded-3xl border border-gray-100 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 font-heading">Deskripsi Kajian</h3>
          <p class="mb-8 whitespace-pre-wrap">{{ kajian.description }}</p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-6 font-heading">Materi Pembahasan</h3>
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
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="container mx-auto px-6 py-24 text-center">
      <h2 class="text-2xl font-bold text-gray-900">Kajian tidak ditemukan</h2>
      <NuxtLink to="/kajian" class="mt-4 inline-block px-6 py-3 bg-brand-500 text-black font-bold rounded-xl">Kembali ke Kajian</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

// Mock data (sync with index.vue)
const kajianList = [
  {
    id: 1,
    title: 'Kajian Kitab Fathul Qorib',
    ustadz: 'Kiai Ahmad Fauzi',
    time: 'Senin & Kamis, 19:30 - 21:00 WIB',
    location: 'Masjid Utama',
    description: 'Metode kajian tatap muka langsung (sorogan) untuk membedah kitab fiqih klasik dengan bimbingan intensif.',
    category: 'Sorogan',
    slug: 'kajian-fathul-qorib'
  },
  {
    id: 2,
    title: 'Setoran Hafalan Juz Amma',
    ustadz: 'Ustadz Muhammad Ridwan',
    time: 'Rabu, 20:00 - 21:30 WIB',
    location: 'Aula Pondok',
    description: 'Program tahfidz terpadu untuk penguatan hafalan Al-Qur\'an dengan metode mutqin.',
    category: 'Tahfidzul Quran',
    slug: 'tahfidz-juz-amma'
  },
  {
    id: 3,
    title: 'Diskusi Hukum Islam Tematik',
    ustadz: 'Tim Bahtsul Masail',
    time: 'Selasa, 19:00 - 20:30 WIB',
    location: 'Ruang Kajian',
    description: 'Forum diskusi ilmiah membahas persoalan hukum kontemporer dari perspektif fiqih lintas madzhab.',
    category: 'Bahtsul Masail',
    slug: 'bahtsul-masail-tematik'
  },
  {
    id: 4,
    title: 'Kajian Umum Riyadus Shalihin',
    ustadz: 'Ustadz Hasan Basri',
    time: 'Jum\'at, 15:00 - 16:30 WIB',
    location: 'Masjid Utama',
    description: 'Penyampaian materi secara klasikal (bandongan) yang diikuti oleh seluruh santri dan jamaah umum.',
    category: 'Bandongan',
    slug: 'riyadus-shalihin-umum'
  },
  {
    id: 5,
    title: 'Muroja\'ah Akbar',
    ustadz: 'Ustadz Ibrahim Khalil',
    time: 'Sabtu, 16:00 - 17:30 WIB',
    location: 'Aula Pondok',
    description: 'Kegiatan rutin mengulang hafalan secara berkelompok untuk menjaga kelancaran bacaan.',
    category: 'Tahfidzul Quran',
    slug: 'murojaah-akbar'
  },
  {
    id: 6,
    title: 'Kajian Kitab Jurumiyah',
    ustadz: 'Ustadz Zainal Abidin',
    time: 'Ahad, 08:00 - 10:00 WIB',
    location: 'Ruang Kajian',
    description: 'Mengkaji dasar-dasar ilmu nahwu secara mendetail dengan metode bandongan.',
    category: 'Bandongan',
    slug: 'kitab-jurumiyah'
  }
]

const kajian = computed(() => kajianList.find(k => k.slug === slug))
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
