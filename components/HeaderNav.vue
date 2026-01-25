<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50 py-4">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img src="/annawa.png" alt="Logo" class="w-12 h-12 object-contain" />
          <div class="ml-3 hidden lg:block">
            <span class="block text-sm font-extrabold text-gray-800 leading-tight uppercase font-heading">Khozinatul Ulum</span>
            <span class="block text-xs font-bold text-brand-600 uppercase">An-Nawa</span>
          </div>
        </NuxtLink>

        <!-- Menu Desktop (Center) -->
        <nav class="hidden md:flex items-center space-x-6 lg:space-x-8 text-gray-700 font-bold uppercase text-[13px] tracking-wide">
          <NuxtLink to="/" class="hover:text-brand-600 transition-colors">Home</NuxtLink>
          
          <!-- Dropdown About -->
          <div class="relative group h-full py-2" @mouseenter="isAboutOpen = true" @mouseleave="isAboutOpen = false">
            <button class="hover:text-brand-600 transition-colors flex items-center gap-1 uppercase">
              About
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="isAboutOpen" class="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl py-2 border-t-2 border-brand-500">
              <NuxtLink to="/user/profil" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors text-[11px]">Profil</NuxtLink>
              <NuxtLink to="/user/sejarah" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors text-[11px]">Sejarah</NuxtLink>
              <NuxtLink to="/user/paud" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors text-[11px]">PAUD An-Nawa Khozinatul Ulum
              </NuxtLink>
              <NuxtLink to="/user/sdqta" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors text-[11px]">SDQTA An-Nawa Khozinatul Ulum
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/user/kajian" class="hover:text-brand-600 transition-colors">Kajian</NuxtLink>
          <NuxtLink to="/user/berita" class="hover:text-brand-600 transition-colors">Berita</NuxtLink>
          <NuxtLink to="/user/galeri" class="hover:text-brand-600 transition-colors">Galeri</NuxtLink>
        </nav>

        <!-- CTA & Tools -->
        <div class="flex items-center gap-4">
          <!-- CTA Dropdown -->
          <div class="hidden lg:relative lg:block" @mouseenter="isCtaOpen = true" @mouseleave="isCtaOpen = false">
            <button class="px-7 py-3 bg-brand-500 text-black font-extrabold text-xs tracking-widest uppercase rounded shadow-sm hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
              Daftar
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="isCtaOpen" class="absolute right-0 top-full mt-0 w-56 bg-white shadow-xl py-2 border-t-2 border-brand-500 z-[60]">
              <NuxtLink to="/user/psb" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors text-[11px] font-bold uppercase tracking-wider">Daftar Santri (PSB)</NuxtLink>
              <NuxtLink to="/user/ppdb/paud" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors text-[11px] font-bold uppercase tracking-wider">Daftar PAUD</NuxtLink>
              <NuxtLink to="/user/ppdb/sd" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors text-[11px] font-bold uppercase tracking-wider">Daftar SDQTA</NuxtLink>
            </div>
          </div>
          
          <button class="p-2 rounded-full hover:bg-gray-200 transition-colors" @click="toggleDarkMode">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Mobile Toggle -->
          <button class="md:hidden p-2 rounded-md hover:bg-gray-200" @click="isOpen = !isOpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden mt-4">
      <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 space-y-1">
        <NuxtLink to="/" class="block py-2 hover:text-brand-600 transition-colors">Home</NuxtLink>
        
        <!-- Mobile About Dropdown -->
        <div>
          <button @click="isAboutMobileOpen = !isAboutMobileOpen" class="w-full text-left py-2 hover:text-brand-600 flex items-center justify-between transition-colors uppercase font-bold text-sm">
            About
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'rotate-180': isAboutMobileOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="isAboutMobileOpen" class="pl-4 space-y-1 border-l-2 border-brand-500 ml-1">
            <NuxtLink to="/user/profil" class="block py-2 text-gray-600 hover:text-brand-600 transition-colors">Profil</NuxtLink>
            <NuxtLink to="/user/sejarah" class="block py-2 text-gray-600 hover:text-brand-600 transition-colors">Sejarah</NuxtLink>
            <NuxtLink to="/user/paud" class="block py-2 text-gray-600 hover:text-brand-600 transition-colors">PAUD An-Nawa Khozinatul Ulum
            </NuxtLink>
            <NuxtLink to="/user/sdqta" class="block py-2 text-gray-600 hover:text-brand-600 transition-colors">SDQTA An-Nawa Khozinatul Ulum
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Daftar Dropdown -->
        <div>
          <button @click="isCtaMobileOpen = !isCtaMobileOpen" class="w-full text-left py-2 text-brand-700 font-bold flex items-center justify-between transition-colors uppercase text-sm">
            Pendaftaran
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'rotate-180': isCtaMobileOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="isCtaMobileOpen" class="pl-4 space-y-1 border-l-2 border-brand-500 ml-1">
            <NuxtLink to="/user/psb" class="block py-2 text-gray-600 hover:text-brand-600 transition-colors">Daftar Santri</NuxtLink>
            <NuxtLink to="/user/ppdb/paud" class="block py-2 text-gray-600 hover:text-brand-600 transition-colors">Daftar PAUD</NuxtLink>
            <NuxtLink to="/user/ppdb/sd" class="block py-2 text-gray-600 hover:text-brand-600 transition-colors">Daftar SDQTA</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/user/kajian" class="block py-2 hover:text-brand-600 transition-colors font-bold text-sm uppercase">Kajian</NuxtLink>
        <NuxtLink to="/user/berita" class="block py-2 hover:text-brand-600 transition-colors font-bold text-sm uppercase">Berita</NuxtLink>
        <NuxtLink to="/user/galeri" class="block py-2 hover:text-brand-600 transition-colors font-bold text-sm uppercase">Galeri</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const isAboutOpen = ref(false)
const isCtaOpen = ref(false)
const isAboutMobileOpen = ref(false)
const isCtaMobileOpen = ref(false)

const toggleDarkMode = () => {
  // Implement dark mode toggle logic here
  console.log('Dark mode toggled')
}
</script>
