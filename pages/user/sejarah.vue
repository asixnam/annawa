<template>
  <div class="min-h-screen bg-[#F9FAFB] font-sans">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 overflow-hidden bg-white">
      <!-- Decoration Circles -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-30"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-200">
          Tentang Kami
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight font-heading">
          Sejarah <span class="text-brand-500 uppercase">Perjalanan</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Menapak tilas awal berdirinya Pondok Pesantren Khozinatul Ulum An-Nawa dan perjuangan dalam mencetak generasi Qur'ani.
        </p>
      </div>
    </section>

    <!-- Narasi Sejarah -->
    <!-- Narasi Sejarah -->
    <section class="container mx-auto px-6 py-16 bg-white border-b border-gray-100">
      <div class="max-w-5xl mx-auto">
        <!-- Hero Image Horizontal -->
        <div class="mb-12 relative overflow-hidden rounded-3xl shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&auto=format&fit=crop" 
            alt="Gedung Utama Pesantren" 
            class="w-full h-[400px] md:h-[500px] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <!-- Text Content -->
        <div class="space-y-8 text-gray-700 leading-relaxed text-lg text-justify max-w-4xl mx-auto">
          <p class="first-letter:text-5xl first-letter:font-black first-letter:text-brand-500 first-letter:mr-3 first-letter:float-left">
            Pondok Pesantren Khozinatul Ulum An-Nawa didirikan dengan visi yang luhur untuk menyediakan wadah pendidikan Islam yang integratif. Bermula dari sebuah pengajian kecil di lingkungan sekitar, semangat untuk menyebarkan ilmu agama terus berkembang pesat seiring bertambahnya minat masyarakat.
          </p>
          <p>
            Dengan dedikasi para pendiri dan dukungan tulus dari para kiai serta tokoh masyarakat, pesantren ini bertransformasi dari sebuah tempat belajar tradisional menjadi lembaga pendidikan modern yang tetap memegang teguh nilai-nilai <span class="font-bold border-b-2 border-brand-200 uppercase tracking-wider text-sm text-brand-600">akhlaqul karimah</span> dan literasi Al-Qur'an.
          </p>
          <p>
            Nama "An-Nawa" sendiri diambil dengan harapan lembaga ini menjadi inti (biji) dari kebaikan yang akan tumbuh menjadi pohon yang rimbun dan memberikan manfaat luas bagi umat dan bangsa. Perjalanan panjang ini menjadi bukti nyata kekuatan niat dan kerja keras dalam membangun peradaban islami.
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline / Milestones -->
    <section class="py-20 bg-[#F9FAFB]">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 uppercase font-heading">
            Kilas <span class="text-brand-500 ml-1">Peristiwa</span>
          </h2>
          <p class="text-gray-500 mt-4">Tonggak sejarah penting yang membentuk eksistensi kami hari ini.</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div v-for="(item, index) in milestones" :key="index" class="relative pl-10 pb-12 last:pb-0 border-l-2 border-brand-200 ml-4 md:ml-6">
            <div class="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-brand-500 border-4 border-white shadow-sm"></div>
            <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span class="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold mb-4">{{ item.year }}</span>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ item.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tokoh Pendiri / Key Figures -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase font-heading">
            Tokoh <span class="text-brand-500">Inspiratif</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Beliau-beliau yang meletakkan fondasi dan dedikasi luar biasa dalam perjalanan dakwah kami.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div v-for="figure in founders" :key="figure.name" class="group text-center">
            <div class="relative overflow-hidden rounded-2xl mb-6 shadow-xl aspect-[3/4]">
              <img 
                :src="figure.photo" 
                :alt="figure.name" 
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-1 leading-tight group-hover:text-brand-600 transition-colors">{{ figure.name }}</h4>
            <p class="text-brand-600 text-[11px] font-bold uppercase tracking-wider mb-1">
              {{ figure.role }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const milestones = [
  {
    year: "2010",
    title: "Peletakan Batu Pertama",
    description: "Inisiasi awal pembangunan lokasi pusat pesantren yang berawal dari niat ikhlas untuk kemajuan dakwah Islam di daerah."
  },
  {
    year: "2013",
    title: "Pembukaan Formal",
    description: "Dimulainya kegiatan belajar mengajar dengan angkatan pertama santri yang memfokuskan pada pemahaman kitab kuning."
  },
  {
    year: "2017",
    title: "Pengembangan PAUD & SDQTA",
    description: "Perluasan unit pendidikan formal di bawah naungan yayasan untuk mencakup pendidikan anak usia dini dan tingkat dasar Quranic."
  },
  {
    year: "2022",
    title: "Digitalisasi Pesantren",
    description: "Implementasi sistem manajemen digital dan laboratorium bahasa modern untuk menunjang daya saing santri di era global."
  }
]

const founders = [
  {
    name: "KH. Ahmad Ridwan (Alm)",
    role: "Pendiri & Pengasuh Pertama",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=250&auto=format&fit=crop"
  },
  {
    name: "H. Abdullah Shodiq",
    role: "Ketua Dewan Pembina",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=250&auto=format&fit=crop"
  },
  {
    name: "Ustadzah Fatimah",
    role: "Perintis Pendidikan Putri",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=250&auto=format&fit=crop"
  }
]
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
