<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5] border-b border-gray-200 py-4">
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
          
          <!-- Dropdown PSB -->
          <div class="relative group h-full py-2" @mouseenter="isPsbOpen = true" @mouseleave="isPsbOpen = false">
            <button class="hover:text-brand-600 transition-colors flex items-center gap-1 uppercase">
              PSB
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="isPsbOpen" class="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl py-2 border-t-2 border-brand-500">
              <NuxtLink to="/psb/putra" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors">Santri Putra</NuxtLink>
              <NuxtLink to="/psb/putri" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors">Santri Putri</NuxtLink>
            </div>
          </div>

          <!-- Dropdown PPDB -->
          <div class="relative group h-full py-2" @mouseenter="isPpdbOpen = true" @mouseleave="isPpdbOpen = false">
            <button class="hover:text-brand-600 transition-colors flex items-center gap-1 uppercase">
              Formal
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="isPpdbOpen" class="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl py-2 border-t-2 border-brand-500">
              <NuxtLink to="/ppdb/paud" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors">PPDB PAUD</NuxtLink>
              <NuxtLink to="/ppdb/sd" class="block px-4 py-3 hover:bg-brand-50 hover:text-brand-600 transition-colors">PPDB SD</NuxtLink>
            </div>
          </div>

          <NuxtLink to="/kajian" class="hover:text-brand-600 transition-colors">Kajian</NuxtLink>
          <NuxtLink to="/berita" class="hover:text-brand-600 transition-colors">Berita</NuxtLink>
          <NuxtLink to="/galeri" class="hover:text-brand-600 transition-colors">Galeri</NuxtLink>
        </nav>

        <!-- CTA & Tools -->
        <div class="flex items-center gap-4">
          <NuxtLink to="/psb" class="hidden lg:block px-7 py-3 bg-brand-500 text-black font-extrabold text-xs tracking-widest uppercase rounded shadow-sm hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-0.5">
            Daftar PSB
          </NuxtLink>
          
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
        <NuxtLink to="/" class="block py-2 hover:text-teal-600">Home</NuxtLink>
        
        <!-- Mobile PSB Dropdown -->
        <div>
          <button @click="isPsbMobileOpen = !isPsbMobileOpen" class="w-full text-left py-2 hover:text-teal-600 flex items-center justify-between">
            PSB
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'rotate-180': isPsbMobileOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="isPsbMobileOpen" class="pl-4 space-y-1">
            <NuxtLink to="/psb/putra" class="block py-2 text-gray-600 hover:text-teal-600">PSB Putra</NuxtLink>
            <NuxtLink to="/psb/putri" class="block py-2 text-gray-600 hover:text-teal-600">PSB Putri</NuxtLink>
          </div>
        </div>

        <!-- Mobile PPDB Dropdown -->
        <div>
          <button @click="isPpdbMobileOpen = !isPpdbMobileOpen" class="w-full text-left py-2 hover:text-teal-600 flex items-center justify-between">
            PPDB
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'rotate-180': isPpdbMobileOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="isPpdbMobileOpen" class="pl-4 space-y-1">
            <NuxtLink to="/ppdb/paud" class="block py-2 text-gray-600 hover:text-teal-600">PPDB PAUD</NuxtLink>
            <NuxtLink to="/ppdb/sd" class="block py-2 text-gray-600 hover:text-teal-600">PPDB SD</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/kajian" class="block py-2 hover:text-teal-600">Kajian</NuxtLink>
        <NuxtLink to="/berita" class="block py-2 hover:text-teal-600">Berita</NuxtLink>
        <NuxtLink to="/galeri" class="block py-2 hover:text-teal-600">Galeri Santri</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const isPsbOpen = ref(false)
const isPpdbOpen = ref(false)
const isPsbMobileOpen = ref(false)
const isPpdbMobileOpen = ref(false)

const toggleDarkMode = () => {
  // Implement dark mode toggle logic here
  console.log('Dark mode toggled')
}
</script>
