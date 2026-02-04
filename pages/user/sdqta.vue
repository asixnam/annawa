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
              src="/annawa.png" 
              alt="SDQTA An-Nawa" 
              class="w-full h-full object-contain rounded-3xl shadow-xl border-4 border-card bg-card p-8 hover:scale-105 transition-all duration-500 dark:border-gray-800"
            />
          </div>
        </div>
        <div class="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg text-justify pt-6 lg:max-w-2xl">
          <p>
            SDQTA (Sekolah Dasar Qur'an Terpadu) An-Nawa Khozinatul Ulum adalah institusi pendidikan dasar yang mengintegrasikan kurikulum nasional dengan pendidikan agama yang mendalam, khususnya dalam bidang Tahfidz Al-Qur'an.
          </p>
          <p>
            Kami berkomitmen untuk melahirkan lulusan yang cerdas secara intelektual, memiliki hafalan Al-Qur'an yang mutqin, serta berakhlak mulia sesuai dengan tuntunan Rasulullah SAW.
          </p>
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
              "Mewujudkan generasi Rabbani yang hafidz Al-Qur'an, unggul dalam prestasi, dan berkarakter islami."
            </p>
          </div>

          <div class="bg-light p-8 rounded-3xl border border-gray-100 dark:border-gray-800/40 shadow-sm">
            <h3 class="text-xl font-black text-main mb-6 uppercase tracking-tight font-heading">
              Misi <span class="text-brand-500 ml-1">Kami</span>
            </h3>
            <ul class="space-y-4">
              <li v-for="(misi, index) in misis" :key="index" class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 text-black flex items-center justify-center font-bold text-xs">
                  {{ index + 1 }}
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
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform">{{ item.icon }}</div>
            <h4 class="text-sm font-bold text-main">{{ item.name }}</h4>
          </div>
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
          <div v-for="activity in activities" :key="activity.title" class="group relative overflow-hidden rounded-3xl aspect-video shadow-lg">
            <img :src="activity.image" :alt="activity.title" class="w-full h-full object-cover group-hover:scale-110 transition-duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <h4 class="text-white font-bold text-lg leading-tight">{{ activity.title }}</h4>
            </div>
          </div>
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
          <div class="relative overflow-hidden rounded-2xl mb-4 shadow-lg aspect-[3/4] bg-card dark:border dark:border-gray-800">
            <img 
              :src="teacher.photo" 
              :alt="teacher.name" 
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
            />
          </div>
          <h4 class="text-lg font-bold text-main mb-1 leading-tight group-hover:text-brand-600 transition-colors">{{ teacher.name }}</h4>
          <p class="text-brand-600 text-[11px] font-bold uppercase tracking-wider mb-1">
            {{ teacher.position }}
          </p>
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
const misis = [
  "Menyelenggarakan pendidikan dasar IT (Islam Terpadu) yang berkualitas tinggi.",
  "Membekali santri dengan hafalan Al-Qur'an minimal 5-10 juz (sesuai target jenjang).",
  "Menumbuhkan kecintaan terhadap ilmu pengetahuan dan teknologi.",
  "Menerapkan kedisiplinan dan pembiasaan islami dalam kehidupan sehari-hari.",
  "Mengembangkan bakat dan minat santri melalui berbagai kegiatan ekstrakurikuler."
]

const facilities = [
  { name: "Gedung Representatif", icon: "🏛️" },
  { name: "Laboratorium Komputer", icon: "💻" },
  { name: "Perpustakaan Lengkap", icon: "📚" },
  { name: "Lapangan Olahraga", icon: "⚽" },
  { name: "Musholla Nyaman", icon: "🕌" },
  { name: "Kantin Sehat", icon: "🍱" },
  { name: "UKS", icon: "🏥" },
  { name: "Studio Tahfidz", icon: "🎙️" }
]

const activities = [
  { title: "Mukhayyam Al-Qur'an", image: "https://images.unsplash.com/photo-1544027993-37dbfe43552e?q=80&w=800&auto=format&fit=crop" },
  { title: "Pramuka & Kepanduan", image: "https://images.unsplash.com/photo-1510522134121-2236c571001e?q=80&w=800&auto=format&fit=crop" },
  { title: "Lomba Kreativitas Siswa", image: "https://images.unsplash.com/photo-1491321447008-4c8a5979bc75?q=80&w=800&auto=format&fit=crop" }
]

const teachers = [
  {
    name: "Ustadz H. Abdullah, M.Pd",
    position: "Kepala SDQTA",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    name: "Ustadzah Siti Zulaikha, S.Pd",
    position: "Koordinator Kurikulum",
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    name: "Ustadz Mansyur Al-Hafidz",
    position: "Koordinator Tahfidz",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    name: "Ustadzah Rohmah, S.Pd",
    position: "Guru Tematik",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop"
  }
]
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
