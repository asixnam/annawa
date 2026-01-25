<template>
  <div class="min-h-screen bg-gray-50/50">
    <div v-if="item" class="container mx-auto px-6 py-24">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex mb-8 text-sm font-bold uppercase tracking-widest" aria-label="Breadcrumb">
          <NuxtLink to="/" class="text-gray-400 hover:text-brand-600 transition-colors">Home</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <NuxtLink to="/galeri" class="text-gray-400 hover:text-brand-600 transition-colors">Galeri</NuxtLink>
          <span class="mx-3 text-gray-300">/</span>
          <span class="text-brand-600">Terbitan</span>
        </nav>

        <!-- Gallery Details Card -->
        <div class="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50">
          <!-- Visual Header -->
          <div v-if="item.category === 'Kesenian' || item.category === 'Juara'" class="relative h-[400px] md:h-[600px] overflow-hidden group">
            <img 
              v-if="item.image" 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8 text-white">
              <span class="inline-block px-3 py-1 bg-brand-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                {{ item.category }}
              </span>
              <h1 class="text-3xl md:text-5xl font-black leading-tight font-heading">{{ item.title }}</h1>
            </div>
          </div>

          <!-- Text Header -->
          <div v-else class="p-12 md:p-16 border-b border-gray-50 bg-gradient-to-br from-white to-gray-50">
            <span class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              {{ item.category }}
            </span>
            <h1 class="text-3xl md:text-5xl font-black text-gray-900 leading-tight font-heading">{{ item.title }}</h1>
          </div>

          <!-- Content Body -->
          <div class="p-12 md:p-16">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div class="lg:col-span-2">
                <div v-if="item.excerpt" class="prose prose-xl max-w-none">
                  <p class="text-gray-700 italic leading-relaxed text-lg lg:text-xl font-serif">
                    "{{ item.excerpt }}"
                  </p>
                  <div class="mt-8 pt-8 border-t border-gray-100">
                    <p class="text-gray-600 leading-relaxed font-serif">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <p class="mt-4 text-gray-600 leading-relaxed font-serif">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div v-else class="text-gray-600 space-y-6">
                   <p class="text-lg font-serif">
                     Karya fenomenal ini mencerminkan dedikasi santri dalam mengekspresikan nilai-nilai keislaman melalui media visual. Setiap detail memiliki makna filosofis yang mendalam tentang perjalanan spiritual dan pembelajaran di Pondok Pesantren An-Nawa.
                   </p>
                   <p class="font-serif">
                     Diharapkan karya ini dapat menginspirasi santri lainnya untuk terus berkarya dan mengembangkan bakat yang diberikan Allah SWT untuk kemaslahatan umat.
                   </p>
                </div>
              </div>

              <!-- Sidebar Info -->
              <div class="space-y-8">
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Informasi Karya</h4>
                  
                  <div class="space-y-6">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-600 shadow-sm border border-gray-100 font-bold text-xs">
                        {{ item.author?.charAt(0) }}
                      </div>
                      <div>
                        <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400">Arsitek Karya</p>
                        <p class="text-xs font-bold text-gray-800">{{ item.author }}</p>
                      </div>
                    </div>

                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-600 shadow-sm border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400">Tanggal Rilis</p>
                        <p class="text-xs font-bold text-gray-800">{{ item.date }}</p>
                      </div>
                    </div>

                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-600 shadow-sm border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01" />
                        </svg>
                      </div>
                      <div>
                        <p class="text-[10px] font-black uppercase tracking-tighter text-gray-400">Kategori</p>
                        <p class="text-xs font-bold text-gray-800">{{ item.category }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <NuxtLink to="/galeri" class="flex items-center justify-center w-full py-4 bg-gray-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-500 hover:text-black transition-all">
                  Kembali ke Galeri
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="container mx-auto px-6 py-24 text-center">
      <h2 class="text-2xl font-bold text-gray-900">Karya tidak ditemukan</h2>
      <NuxtLink to="/galeri" class="mt-4 inline-block px-6 py-3 bg-brand-500 text-black font-bold rounded-xl">Kembali ke Galeri</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

// Mock data (sync with index.vue)
const galleryList = [
  {
    id: 1,
    title: 'Juara 1 MTQ Nasional',
    excerpt: 'Prestasi gemilang santri Annawa dalam ajang Musabaqah Tilawatil Quran tingkat nasional tahun 2025.',
    author: 'Majid Al-Fatih',
    date: '20 Jan 2026',
    category: 'Juara',
    image: 'https://images.unsplash.com/photo-1577894780451-9f144e87d2bc?auto=format&fit=crop&q=80&w=800',
    slug: 'juara-1-mtq-nasional'
  },
  {
    id: 2,
    title: 'Pemenang Lomba Pidato Bahasa Arab',
    excerpt: 'Keberhasilan meraih podium utama dalam kompetisi pidato antar pesantren se-Jawa Barat.',
    author: 'Zaskia Nurul',
    date: '18 Jan 2026',
    category: 'Juara',
    image: 'https://images.unsplash.com/photo-1533256621371-d4e5ff04226f?auto=format&fit=crop&q=80&w=800',
    slug: 'pemenang-pidato-arab'
  },
  {
    id: 3,
    title: 'Rindu Cahaya Wahyu',
    excerpt: 'Di hening malam aku bersimpuh, mencari setitik embun dalam kalbu yang lusuh...',
    author: 'Ahmad Fauzan',
    date: '15 Jan 2026',
    category: 'Literasi',
    slug: 'rindu-cahaya-wahyu'
  },
  {
    id: 4,
    title: 'Santri dan Sepatu Tua',
    excerpt: 'Sepatu itu telah menemaninya melewati ribuan langkah menuju majelis ilmu, meski solnya mulai menipis...',
    author: 'Siti Aminah',
    date: '14 Jan 2026',
    category: 'Literasi',
    slug: 'santri-sepatu-tua'
  },
  {
    id: 5,
    title: 'Adab Sebelum Ilmu',
    image: '',
    author: 'Zaid Al-Khoiri',
    date: '10 Jan 2026',
    category: 'Kesenian',
    slug: 'adab-sebelum-ilmu'
  },
  {
    id: 6,
    title: 'Urgensi Menjaga Lisan',
    excerpt: 'Lisan adalah pedang bermata dua. Ia bisa menjadi jalan ke surga, atau justru menyeret ke jurang celaka...',
    author: 'Muhammad Ridwan',
    date: '08 Jan 2026',
    category: 'Khitobah',
    slug: 'urgensi-menjaga-lisan'
  },
  {
    id: 7,
    title: 'Pantun Nasihat Santri',
    excerpt: 'Pergi berlayar ke pulau Jawa, membawa bekal keripik kentang. Belajarlah dengan sepenuh jiwa, agar masa depan terang benderang.',
    author: 'Luthfi Hakim',
    date: '07 Jan 2026',
    category: 'Literasi',
    slug: 'pantun-nasihat-santri'
  },
  {
    id: 8,
    title: 'Goresan Senyum Kiai',
    image: '',
    author: 'Rahmat Hidayat',
    date: '05 Jan 2026',
    category: 'Kesenian',
    slug: 'goresan-senyum-kiai'
  },
  {
    id: 9,
    title: 'Fajar di Gerbang Pesantren',
    excerpt: 'Ketika surya belum menampakkan wajahnya, sayup-sayup lantunan ayat suci mulai membelah kesunyian...',
    author: 'Annisa Fitri',
    date: '03 Jan 2026',
    category: 'Literasi',
    slug: 'fajar-gerbang-pesantren'
  },
  {
    id: 10,
    title: 'Misteri Kitab Kuning',
    excerpt: 'Lembaran usang itu menyimpan rahasia besar yang belum terpecahkan selama puluhan tahun...',
    author: 'Umar Khalid',
    date: '01 Jan 2026',
    category: 'Literasi',
    slug: 'misteri-kitab-kuning'
  }
]

const item = computed(() => galleryList.find(g => g.slug === slug))
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
.font-serif {
  font-family: 'Source Serif 4', serif;
}
</style>
