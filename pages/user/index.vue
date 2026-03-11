<template>
  <div class="min-h-screen bg-light dark:bg-gray-950 font-sans transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-0 pb-10 lg:pt-2 lg:pb-20 overflow-hidden bg-card">
      <!-- Decoration Circles (like plai style) -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-20"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="flex-1 text-left">
            <div class="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Official Website
            </div>
            <h1 class="text-4xl md:text-6xl font-black text-main mb-6 leading-tight font-heading">
               {{ hero.title }}
            </h1>
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
              {{ hero.subtitle }}
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="#layanan-pendaftaran" class="px-8 py-4 bg-brand-500 text-black rounded font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all shadow-lg shadow-brand-500/20 transform hover:-translate-y-1">
                Daftar Sekarang
              </NuxtLink>
              <NuxtLink to="/user/profil" class="px-8 py-4 border-2 border-gray-200 text-gray-800 rounded font-black uppercase text-sm tracking-widest hover:border-brand-500 hover:text-brand-500 transition-all transform hover:-translate-y-1">
                Profil Pondok
              </NuxtLink>
            </div>
          </div>
          <div class="flex-1 relative">
            <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img :src="hero.image" alt="Santri Pesantren" class="w-full h-auto object-cover" />
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-6 -left-6 z-20 bg-card p-6 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100 dark:border-brand-400/20">
              <div class="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-black font-bold">
                {{ santriTotal }}+
              </div>
              <div class="text-sm">
                <span class="block font-bold text-main leading-none">Santri Aktif</span>
                <span class="text-gray-500 dark:text-gray-400 text-xs">Tahun Ajaran 2024/2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tentang Pondok -->
    <section class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-main mb-6">Yayasan Khozinatul Ulum An-Nawa</h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-8">
          Yayasan Khozinatul Ulum An-Nawa adalah lembaga pendidikan Islam yang berfokus pada pembentukan karakter Islami dan penguasaan ilmu agama. Kami menyediakan berbagai program pendidikan mulai dari PAUD, SD/QTA, hingga pendidikan pesantren untuk putra dan putri.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div class="text-center">
            <div class="text-4xl font-bold text-brand-600 mb-2">{{ santriTotal }}+</div>
            <div class="text-gray-600">Santri Aktif</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-brand-600 mb-2">{{ authorTotal }}+</div>
            <div class="text-gray-600">Author</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-brand-600 mb-2">{{ tahunBerdiri }}+</div>
            <div class="text-gray-600">Tahun Berdiri</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-brand-600 mb-2">{{ kajianTotal }}</div>
            <div class="text-gray-600">Program Kajian</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Layanan Utama -->
    <section id="layanan-pendaftaran" class="bg-card py-16 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-main mb-4">Layanan Pendaftaran</h2>
          <p class="text-gray-600 text-lg">Pilih program pendidikan yang sesuai untuk putra-putri Anda</p>
        </div>

        <div class="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          <!-- PSB -->
          <NuxtLink to="/user/psb" class="group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm">
            <div class="bg-card rounded-2xl p-8 text-main shadow-lg border border-gray-100 dark:border-gray-800/40 hover:shadow-2xl hover:border-brand-500 transition-all transform hover:-translate-y-2 h-full flex flex-col">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">Pendaftaran Santri Baru</h3>
              <p class="text-gray-600 mb-6 flex-grow">Pendaftaran Santri Baru untuk Putra dan Putri (Pesantren)</p>
              <div class="flex items-center text-sm font-bold text-brand-600 group-hover:translate-x-2 transition-transform uppercase tracking-wider mt-auto">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- PPDB PAUD -->
          <NuxtLink to="/user/ppdb/paud" class="group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm">
            <div class="bg-card rounded-2xl p-8 text-main shadow-lg border border-gray-100 dark:border-gray-800/40 hover:shadow-2xl hover:border-brand-500 transition-all transform hover:-translate-y-2 h-full flex flex-col">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">SPMB PAUD</h3>
              <p class="text-gray-600 mb-6 flex-grow">Sistem Penerimaan Murid Baru PAUD Islam Terpadu</p>
              <div class="flex items-center text-sm font-bold text-brand-600 group-hover:translate-x-2 transition-transform uppercase tracking-wider mt-auto">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- PPDB SD -->
          <NuxtLink to="/user/ppdb/sd" class="group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm">
            <div class="bg-card rounded-2xl p-8 text-main shadow-lg border border-gray-100 dark:border-gray-800/40 hover:shadow-2xl hover:border-brand-500 transition-all transform hover:-translate-y-2 h-full flex flex-col">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">SPMB SDQTA</h3>
              <p class="text-gray-600 mb-6 flex-grow">Sistem Penerimaan Murid Baru SD Qur'an Terpadu</p>
              <div class="flex items-center text-sm font-bold text-brand-600 group-hover:translate-x-2 transition-transform uppercase tracking-wider mt-auto">
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Kajian Terbaru -->
    <section class="container mx-auto px-6 py-16">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-main mb-2">Kajian Rutin</h2>
          <p class="text-gray-600">Ikuti kajian-kajian ilmiah untuk menambah wawasan keislaman</p>
        </div>
        <NuxtLink to="/user/kajian" class="hidden md:flex items-center text-brand-600 font-bold uppercase tracking-wider text-xs hover:text-black">
          Lihat Semua
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KajianCard
          v-for="kajian in featuredKajian"
          :key="kajian.id"
          :title="kajian.title"
          :ustadz="kajian.ustadz"
          :time="kajian.time"
          :location="kajian.location"
          :description="kajian.description"
          :category="kajian.category"
          :slug="kajian.slug"
        />
      </div>

       <!-- Empty State -->
      <div v-if="featuredKajian.length === 0" class="text-center py-20">
        <div class="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2v-6a2 2 0 012-2h2m-6-4h.01M17 16h.01" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-main mb-2">Belum Ada Kajian</h3>
        <p class="text-gray-600 mb-6">Informasi kajian akan segera hadir di sini.</p>
      </div>

      <div class="text-center mt-8 md:hidden">
        <NuxtLink to="/user/kajian" class="inline-flex items-center px-6 py-3 bg-brand-500 text-black rounded font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
          Lihat Semua Kajian
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <!-- Berita Terbaru -->
    <section class="bg-card py-16">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center mb-8">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-main mb-2">Berita Terbaru</h2>
            <p class="text-gray-600">Informasi dan kegiatan terkini dari Pondok Annawa</p>
          </div>
          <NuxtLink to="/user/berita" class="hidden md:flex items-center text-brand-600 font-bold uppercase tracking-wider text-xs hover:text-black">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BeritaCard
            v-for="berita in featuredBerita"
            :key="berita.id"
            :title="berita.title"
            :excerpt="berita.excerpt"
            :image="berita.image"
            :date="berita.date"
            :slug="berita.slug"
          />
        </div>

        <!-- Empty State -->
        <div v-if="featuredBerita.length === 0" class="text-center py-20">
          <div class="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2v-6a2 2 0 012-2h2m-6-4h.01M17 16h.01" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-main mb-2">Belum Ada Berita</h3>
          <p class="text-gray-600 mb-6">Informasi kegiatan akan segera hadir di sini.</p>
        </div>

        <div class="text-center mt-8 md:hidden">
          <NuxtLink to="/user/berita" class="inline-flex items-center px-6 py-3 bg-brand-500 text-black rounded font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
            Lihat Semua Berita
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- YouTube Section -->
    <section v-if="youtubeVideos && youtubeVideos.length > 0" class="bg-card py-20 transition-colors duration-300">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div class="space-y-2">
            <h3 class="text-3xl font-black text-main uppercase tracking-tight font-heading">
              An-Nawa <span class="text-brand-500">TV</span>
            </h3>
            <p class="text-gray-500 max-w-xl">
              Ikuti dokumentasi kegiatan, kajian, dan update terbaru dari Pondok Pesantren An-Nawa melalui channel YouTube resmi kami.
            </p>
          </div>
          <a href="https://www.youtube.com/@an-nawatv3179" target="_blank" class="px-8 py-3 bg-brand-600 text-white font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2 group uppercase tracking-widest text-xs">
          Kunjungi Chanel
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="video in youtubeVideos" :key="video.id" class="group cursor-pointer bg-white rounded-0 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
            <a :href="video.link" target="_blank" class="relative aspect-video overflow-hidden">
              <img :src="video.thumbnail" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="YouTube Thumbnail">
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div class="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform shadow-brand-500/40">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-3 block">{{ video.category }}</span>
                <h4 class="font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors text-sm">
                  {{ video.title }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimoni Alumni -->
    <section class="py-16 overflow-hidden bg-card/30">
      <div class="container mx-auto px-6 mb-12">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-main mb-4">Apa Kata Alumni!</h2>
          <p class="text-gray-600 text-lg">Apa kata mereka yang telah menempuh pendidikan di Pondok Pesantren Khozinatul Ulum An-Nawa</p>
        </div>
      </div>

      <!-- Scrolling Container -->
      <div class="relative flex overflow-hidden group">
        <!-- Main Scrolling List -->
        <div class="flex animate-scroll hover:pause-scroll gap-8 py-4 px-4">
          <!-- Double items to ensure seamless loop -->
          <div v-for="testi in [...testimonials, ...testimonials]" :key="testi.id + '-' + Math.random()" class="w-[350px] md:w-[400px] shrink-0 bg-card p-8 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800/40 flex flex-col relative transition-all hover:scale-[1.02] hover:border-brand-500">
            <!-- Quote Icon -->
            <div class="absolute -top-4 -left-4 bg-brand-500 w-10 h-10 rounded-full flex items-center justify-center text-black shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <p class="text-gray-600 italic mb-8 leading-relaxed flex-grow">
              "{{ testi.quote }}"
            </p>

            <div class="flex items-center gap-4 border-t border-gray-50 dark:border-gray-800/40 pt-6">
              <div class="w-14 h-14 rounded-full bg-brand-100 dark:bg-brand-900/40 overflow-hidden border-2 border-brand-500 flex-shrink-0">
                <img v-if="testi.image" :src="testi.image" :alt="testi.name" class="w-full h-full object-cover">
                <div v-else class="w-full h-full flex items-center justify-center text-brand-700 dark:text-brand-300 font-bold bg-gray-100 dark:bg-gray-800 uppercase">
                   {{ testi.name.charAt(0) }}
                </div>
              </div>
              <div>
                <h4 class="font-bold text-main leading-tight">{{ testi.name }}</h4>
                <p class="text-brand-600 text-xs font-bold uppercase tracking-wider mb-1">{{ testi.batch }}</p>
                <p class="text-gray-500 text-sm">{{ testi.profession }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-light dark:bg-gray-950 py-16 px-6 transition-colors duration-300">
      <div class="max-w-6xl mx-auto">
        <div class="bg-card dark:border-brand-400/30 rounded-[2rem] border border-gray-100 shadow-2xl overflow-hidden relative p-8 md:p-14">
          <!-- Decoration for CTA -->
          <div class="absolute top-0 right-0 w-80 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.4,42.4C65.3,55.8,54.8,68,41.4,75.1C28,82.2,14,84.1,0.2,83.8C-13.6,83.5,-27.2,81,-40.4,74.1C-53.5,67.2,-66.2,55.8,-74.6,42.2C-82.9,28.6,-86.9,12.8,-86.2,-2.7C-85.4,-18.2,-80,-33.4,-70.7,-46.1C-61.4,-58.8,-48.3,-69.1,-34.4,-76.5C-20.5,-83.9,-10.2,-88.4,2.9,-93.4C16,-98.5,30.6,-83.7,44.7,-76.4Z" transform="translate(100 100)" class="text-brand-500" />
            </svg>
          </div>

          <div class="relative z-10">
            <h2 class="text-3xl md:text-5xl font-black text-brand-600 dark:text-brand-400 mb-3 font-heading leading-tight">
              Bergabunglah dengan An-Nawa Sekarang!
            </h2>
            <p class="text-xl md:text-2xl font-bold text-main mb-6">
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

              <NuxtLink to="/user/profil" class="px-12 py-5 border-2 border-brand-500 text-brand-700 rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-50 transition-all text-center">
                Profil Pondok
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContentStore } from '~/stores/content'

const store = useContentStore()
const hero = computed(() => store.hero)

// Run all fetches in parallel — no await chaining
const [
  { data: statsData },
  { data: kajianData },
  { data: newsData },
  { data: testimonialsData },
  { data: historyData },
  { data: youtubeVideos }
] = await Promise.all([
  useFetch('/api/stats'),
  useFetch('/api/kajian', { query: { limit: 3 } }),
  useFetch('/api/news', { query: { limit: 6 } }),
  useFetch('/api/testimonials', { query: { limit: 20 } }),
  useFetch('/api/history'),
  useFetch('/api/youtube/latest')
])

const historyText = computed(() => (historyData.value as any)?.text || '')

// Stats from lightweight COUNT endpoint
const santriTotal = computed(() => (statsData.value as any)?.santriTotal ?? 500)
const authorTotal = computed(() => (statsData.value as any)?.authorTotal ?? 50)
const kajianTotal = computed(() => (statsData.value as any)?.kajianTotal ?? 0)
const tahunBerdiri = computed(() => (statsData.value as any)?.tahunBerdiri ?? 10)

// Featured Kajian — API already returns only 3
const featuredKajian = computed(() => {
  if (!kajianData.value) return []
  return (kajianData.value as any[]).map(k => ({
    id: k.id,
    title: k.title,
    ustadz: k.ustadz_name,
    time: k.schedule,
    location: k.location,
    description: k.description,
    category: k.category,
    slug: k.slug
  }))
})

// Featured Berita — API returns 6, show first 3
const featuredBerita = computed(() => {
  if (!newsData.value) return []
  return (newsData.value as any[]).filter(n => n.type === 'Berita' || !n.type).slice(0, 3).map(n => ({
    id: n.id,
    title: n.title,
    excerpt: n.content ? n.content.substring(0, 100) + '...' : '',
    image: n.image_url,
    date: new Date(n.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    slug: n.slug
  }))
})

// Testimonials
const testimonials = computed(() => {
  if (!testimonialsData.value) return []
  return (testimonialsData.value as any[]).map(t => ({
    id: t.id,
    name: t.name,
    batch: t.batch,
    profession: t.role,
    quote: t.content,
    image: t.avatar_url
  }))
})
</script>


<style scoped>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 1rem)); }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}

.pause-scroll:hover {
  animation-play-state: paused;
}
</style>
