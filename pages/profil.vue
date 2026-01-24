<template>
  <div class="min-h-screen bg-[#F9FAFB] font-sans">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 overflow-hidden bg-white">
      <!-- Decoration Circles -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-200">
          Official Profil
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight font-heading">
          Profil <span class="text-brand-500 uppercase">Pondok Pesantren</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Mengenal lebih dekat Pondok Pesantren Khozinatul Ulum An-Nawa melalui visi, misi, dan tim pengembang kami.
        </p>
      </div>
    </section>

    <!-- Tentang Pondok -->
    <section class="container mx-auto px-4 md:px-10 py-20">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight font-heading">
          Tentang <span class="text-brand-500">Kami</span>
        </h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
        <div class="flex justify-center lg:justify-start">
          <div class="w-64 h-64 flex-shrink-0">
            <img 
              src="/images/pengasuh.jpg" 
              alt="Pengasuh Pondok" 
              class="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-gray-100 bg-gray-100 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        <div class="space-y-6 text-gray-600 leading-relaxed text-lg lg:text-left">
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
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Visi -->
          <div class="bg-brand-50 p-8 rounded-3xl border border-brand-100/50 shadow-sm">
            <h3 class="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight font-heading">
              Visi <span class="text-brand-500 ml-1">Pondok</span>
            </h3>
            <p class="text-gray-800 text-lg font-medium leading-relaxed italic border-l-4 border-brand-500 pl-4">
              "Menjadi lembaga pendidikan Islam terkemuka dalam mencetak generasi Qur'ani yang berakhlak mulia, cerdas, dan mandiri."
            </p>
          </div>

          <!-- Misi -->
          <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 class="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight font-heading">
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

    <!-- Tim Kami -->
    <section class="container mx-auto px-6 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase font-heading">
          Tim <span class="text-brand-500">Kami</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          Dibalik setiap keberhasilan, terdapat tim yang berdedikasi tinggi untuk memberikan yang terbaik.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div v-for="member in team" :key="member.name" class="group text-center">
          <div class="relative overflow-hidden rounded-2xl mb-4 shadow-lg aspect-[3/4]">
            <img 
              :src="member.photo" 
              :alt="member.name" 
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
            />
          </div>
          <h4 class="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-brand-600 transition-colors">{{ member.name }}</h4>
          <p class="text-brand-600 text-[11px] font-bold uppercase tracking-wider italic mb-1">
            {{ member.position }}
          </p>
          <p class="text-gray-400 text-[9px] font-bold uppercase tracking-widest">
            Ulum An-Nawa
          </p>
        </div>
      </div>
    </section>

    <!-- Program Pendidikan (Minimalist Grid) -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-black text-brand-500 uppercase font-heading tracking-tight">
            Program Pendidikan
          </h2>
        </div>

        <div class="flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-24">
          <div v-for="program in programs" :key="program.name" class="flex flex-col items-center group">
            <div class="w-20 h-20 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105">
              <img :src="program.image" :alt="program.name" class="max-w-full max-h-full object-contain" />
            </div>
            <h3 class="text-xs font-black uppercase tracking-widest text-gray-700 transition-colors font-heading group-hover:text-brand-500">
              {{ program.name }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-950 py-16 relative overflow-hidden">
      <!-- Decoration for CTA -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -ml-32 -mt-32"></div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-widest font-heading">
          Bergabunglah Bersama Kami
        </h2>
        <p class="text-gray-400 mb-10 text-base max-w-2xl mx-auto leading-relaxed">
          Mulai perjalanan pendidikan Islami yang berkualitas dan berakhlak mulia untuk masa depan yang lebih baik.
        </p>
        <NuxtLink 
          to="/psb" 
          class="inline-block px-10 py-4 bg-brand-500 text-black rounded font-black uppercase tracking-widest text-xs hover:bg-white hover:scale-105 transition-all shadow-xl shadow-brand-500/20"
        >
          Daftar Sekarang
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const misis = [
  "Menyelenggarakan pendidikan Islam yang berbasis pada Al-Qur'an dan Sunnah.",
  "Menerapkan sistem pembelajaran modern dengan tetap menjaga tradisi pesantren.",
  "Mengembangkan potensi minat dan bakat santri dalam berbagai bidang.",
  "Membangun karakter kemandirian dan jiwa kepemimpinan islami.",
  "Mewujudkan lingkungan pesantren yang bersih, sehat, dan kondusif untuk belajar."
]

const team = [
  {
    name: "KH. Ahmad Ridwan",
    position: "Pengasuh Pondok",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=250&auto=format&fit=crop"
  },
  {
    name: "Dr. Luthfi Hakim",
    position: "Kepala Pendidikan",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=250&auto=format&fit=crop"
  },
  {
    name: "Ustadz Fauzi",
    position: "Sekretaris Yayasan",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=250&auto=format&fit=crop"
  },
  {
    name: "Hj. Siti Aminah",
    position: "Bendahara",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=250&auto=format&fit=crop"
  }
]

const programs = [
  {
    name: "PAUD",
    image: "/annawa.png"
  },
  {
    name: "SDQTA",
    image: "/annawa.png"
  },
  {
    name: "PESANTREN",
    image: "/annawa.png"
  }
]
</script>

<style scoped>
.font-heading {
  font-family: 'Inter', sans-serif;
}
</style>
