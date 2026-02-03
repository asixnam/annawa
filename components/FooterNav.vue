<template>
  <footer class="bg-black text-gray-400 py-16">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Column 1: Intro -->
        <div>
          <NuxtLink to="/" class="flex items-center mb-6">
            <img src="/annawa.png" alt="Logo" class="w-12 h-12 object-contain brightness-0 invert" />
            <div class="ml-3">
              <span class="block text-sm font-bold text-white leading-tight uppercase">Khozinatul Ulum</span>
              <span class="block text-xs font-semibold text-brand-500 uppercase">An-Nawa</span>
            </div>
          </NuxtLink>
          <p class="text-sm leading-relaxed mb-6">
            Lembaga pendidikan Islam yang menggabungkan tradisi pesantren dengan pendidikan modern untuk membentuk generasi Qur'ani.
          </p>
          <div class="flex space-x-5">
            <a href="#" class="text-white hover:text-brand-500 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/pesantren_annawakhu" class="text-white hover:text-brand-500 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Program Pendidikan -->
        <div>
          <h3 class="text-white font-bold mb-6 tracking-wider uppercase text-sm">Program Pendidikan</h3>
          <ul class="space-y-4 text-sm">
            <li><NuxtLink to="/user/psb" class="hover:text-brand-500 transition-colors">Pendaftaran Santri (PSB)</NuxtLink></li>
            <li><NuxtLink to="/user/paud" class="hover:text-brand-500 transition-colors">Profil PAUD</NuxtLink></li>
            <li><NuxtLink to="/user/sdqta" class="hover:text-brand-500 transition-colors">Profil SDQTA</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 3: Tautan Penting -->
        <div>
          <h3 class="text-white font-bold mb-6 tracking-wider uppercase text-sm">Tautan Penting</h3>
          <ul class="space-y-4 text-sm">
            <li><NuxtLink to="/user/profil" class="hover:text-brand-500 transition-colors">Profil Pondok</NuxtLink></li>
            <li><NuxtLink to="/user/kajian" class="hover:text-brand-500 transition-colors">Jadwal Kajian</NuxtLink></li>
            <li><NuxtLink to="/user/berita" class="hover:text-brand-500 transition-colors">Warta Terbaru</NuxtLink></li>
            <li><NuxtLink to="/user/kontak" class="hover:text-brand-500 transition-colors">Hubungi Kami</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 4: Kontak -->
        <div>
          <h3 class="text-white font-bold mb-6 tracking-wider uppercase text-sm">Kontak Kami</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Jln. Mr. Iskandar XII/B, -, Kec. Kota Blora, Kab. Blora Prov. Jawa Tengah</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Khozinatululumannawa@gmail.com</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0822-2703-3040</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase">
        <p>&copy; {{ currentYear }} Pondok Pesantren Khozinatul Ulum An-Nawa. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
