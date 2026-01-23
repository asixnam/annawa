<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="min-h-screen flex flex-col bg-white">
      <HeaderNav />
      <main class="flex-1 pt-20">
        <NuxtPage />
      </main>
     <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- About -->
          <div>
            <h3 class="text-white text-xl font-bold mb-4">Pondok Pesantren Annawa</h3>
            <p class="text-gray-400 mb-4">
              Lembaga pendidikan Islam yang menggabungkan tradisi pesantren dengan pendidikan modern.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white text-xl font-bold mb-4">Menu</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="hover:text-teal-400 transition-colors">Beranda</NuxtLink></li>
              <li><NuxtLink to="/kajian" class="hover:text-teal-400 transition-colors">Kajian</NuxtLink></li>
              <li><NuxtLink to="/berita" class="hover:text-teal-400 transition-colors">Berita</NuxtLink></li>
              <li><NuxtLink to="/galeri" class="hover:text-teal-400 transition-colors">Galeri</NuxtLink></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-white text-xl font-bold mb-4">Kontak</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Pondok Annawa No. 123, Indonesia</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@annawa.com</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 123 4567 890</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Pondok Pesantren Annawa. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import './assets/css/tailwind.css'
import HeaderNav from './components/layout/HeaderNav.vue'
</script>
