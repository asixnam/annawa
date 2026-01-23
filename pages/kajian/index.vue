<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 text-white pt-20 pb-20">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Kajian Rutin</h1>
          <p class="text-lg md:text-xl text-teal-50">
            Bergabunglah dengan kajian-kajian ilmiah untuk menambah wawasan keislaman
          </p>
        </div>
      </div>
      
      <!-- Decorative wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="container mx-auto px-6 -mt-8 relative z-20">
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all',
              selectedCategory === cat 
                ? 'bg-teal-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Kajian List -->
    <section class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KajianCard
          v-for="kajian in filteredKajian"
          :key="kajian.id"
          :title="kajian.title"
          :ustadz="kajian.ustadz"
          :time="kajian.time"
          :location="kajian.location"
          :description="kajian.description"
          :category="kajian.category"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredKajian.length === 0" class="text-center py-16">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-gray-500 text-lg">Belum ada kajian untuk kategori ini</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import KajianCard from '../../components/KajianCard.vue'

const categories = ref(['Semua', 'Tafsir', 'Hadits', 'Fiqih', 'Akhlaq', 'Sirah'])
const selectedCategory = ref('Semua')

// Data kajian (nanti bisa diganti dengan API)
const kajianList = ref([
  {
    id: 1,
    title: 'Kajian Tafsir Al-Qur\'an',
    ustadz: 'Ustadz Ahmad Fauzi',
    time: 'Senin & Kamis, 19:30 - 21:00 WIB',
    location: 'Masjid Utama',
    description: 'Kajian mendalam tentang tafsir Al-Qur\'an dengan pendekatan kontekstual dan klasik. Membahas ayat-ayat pilihan dengan metode yang mudah dipahami.',
    category: 'Tafsir'
  },
  {
    id: 2,
    title: 'Kajian Hadits Arba\'in',
    ustadz: 'Ustadz Muhammad Ridwan',
    time: 'Rabu, 20:00 - 21:30 WIB',
    location: 'Aula Pondok',
    description: 'Mempelajari 40 hadits pilihan Imam Nawawi yang mencakup berbagai aspek kehidupan muslim sehari-hari.',
    category: 'Hadits'
  },
  {
    id: 3,
    title: 'Fiqih Muamalah Kontemporer',
    ustadz: 'Ustadz Abdul Hakim',
    time: 'Selasa, 19:00 - 20:30 WIB',
    location: 'Ruang Kajian',
    description: 'Membahas hukum-hukum muamalah dalam konteks modern, termasuk transaksi digital, e-commerce, dan ekonomi syariah.',
    category: 'Fiqih'
  },
  {
    id: 4,
    title: 'Akhlaq dan Tasawuf',
    ustadz: 'Ustadz Hasan Basri',
    time: 'Jum\'at, 15:00 - 16:30 WIB',
    location: 'Masjid Utama',
    description: 'Kajian tentang pembinaan akhlaq dan tasawuf untuk membentuk kepribadian muslim yang baik dan beradab.',
    category: 'Akhlaq'
  },
  {
    id: 5,
    title: 'Sirah Nabawiyah',
    ustadz: 'Ustadz Ibrahim Khalil',
    time: 'Sabtu, 16:00 - 17:30 WIB',
    location: 'Aula Pondok',
    description: 'Mempelajari sejarah kehidupan Rasulullah SAW sebagai teladan dalam kehidupan sehari-hari.',
    category: 'Sirah'
  },
  {
    id: 6,
    title: 'Kajian Kitab Kuning',
    ustadz: 'Ustadz Zainal Abidin',
    time: 'Ahad, 08:00 - 10:00 WIB',
    location: 'Ruang Kajian',
    description: 'Mengkaji kitab-kitab klasik (kitab kuning) dengan metode sorogan dan bandongan untuk santri tingkat lanjut.',
    category: 'Fiqih'
  }
])

const filteredKajian = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return kajianList.value
  }
  return kajianList.value.filter(k => k.category === selectedCategory.value)
})
</script>
