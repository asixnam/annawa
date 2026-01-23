<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div class="container mx-auto">
      <div class="bg-white/80 backdrop-blur-md rounded-full shadow-lg px-8 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <div class="">
              <img src="/annawa.png" alt="Logo" class="w-10 h-10 object-contain" />
            </div>
          </NuxtLink>

          <!-- Menu Desktop -->
          <nav class="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <NuxtLink to="/" class="hover:text-teal-600 transition-colors">Home</NuxtLink>
            
            <!-- Dropdown PSB -->
            <div class="relative" @mouseenter="isPsbOpen = true" @mouseleave="isPsbOpen = false">
              <button class="hover:text-teal-600 transition-colors flex items-center gap-1">
                PSB
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div v-show="isPsbOpen" class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                <NuxtLink to="/psb/putra" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">PSB Putra</NuxtLink>
                <NuxtLink to="/psb/putri" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">PSB Putri</NuxtLink>
              </div>
            </div>

            <!-- Dropdown PPDB -->
            <div class="relative" @mouseenter="isPpdbOpen = true" @mouseleave="isPpdbOpen = false">
              <button class="hover:text-teal-600 transition-colors flex items-center gap-1">
                PPDB
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div v-show="isPpdbOpen" class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                <NuxtLink to="/ppdb/paud" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">PPDB PAUD</NuxtLink>
                <NuxtLink to="/ppdb/sd" class="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">PPDB SD</NuxtLink>
              </div>
            </div>

            <NuxtLink to="/kajian" class="hover:text-teal-600 transition-colors">Kajian</NuxtLink>
            <NuxtLink to="/berita" class="hover:text-teal-600 transition-colors">Berita</NuxtLink>
            <NuxtLink to="/galeri" class="hover:text-teal-600 transition-colors">Galeri Santri</NuxtLink>
          </nav>

          <!-- Dark Mode Toggle -->
          <button class="hidden md:block p-2 rounded-full hover:bg-gray-100 transition-colors" @click="toggleDarkMode">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center gap-2">
            <button class="p-2 rounded-full hover:bg-gray-100" @click="toggleDarkMode">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <button class="p-2 rounded-md" @click="isOpen = !isOpen">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
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
