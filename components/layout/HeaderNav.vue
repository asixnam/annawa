<template>
  <header class="bg-white shadow-sm">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-extrabold text-brand-700">Pondok Annawa</NuxtLink>

      <!-- Menu Desktop -->
      <nav class="hidden md:flex items-center space-x-6 text-gray-700">
        <NuxtLink to="/" class="hover:text-brand-700">Home</NuxtLink>
        <NuxtLink to="/ppdb/paud" class="hover:text-brand-700">PPDB PAUD</NuxtLink>
        <NuxtLink to="/ppdb/sd" class="hover:text-brand-700">PPDB SD</NuxtLink>
        <NuxtLink to="/psb/putra" class="hover:text-brand-700">PSB Putra</NuxtLink>
        <NuxtLink to="/psb/putri" class="hover:text-brand-700">PSB Putri</NuxtLink>
        <NuxtLink to="/berita" class="hover:text-brand-700">Berita</NuxtLink>
        <NuxtLink to="/galeri" class="hover:text-brand-700">Galeri</NuxtLink>
      </nav>

      <!-- Mobile -->
      <div class="md:hidden flex items-center">
        <button class="mr-3 p-2 rounded-md border border-gray-200" @click="isOpen = !isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <NuxtLink to="/login" class="px-3 py-2 rounded bg-brand-600 text-white text-sm">Login</NuxtLink>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden bg-white border-t px-6 pb-4 space-y-2">
      <NuxtLink to="/" class="block py-2">Home</NuxtLink>
      <NuxtLink to="/ppdb/paud/index" class="block py-2">PPDB PAUD</NuxtLink>
      <NuxtLink to="/ppdb/sd/index" class="block py-2">PPDB SD</NuxtLink>
      <NuxtLink to="/psb/putra/index" class="block py-2">PSB Putra</NuxtLink>
      <NuxtLink to="/psb/putri/index" class="block py-2">PSB Putri</NuxtLink>
      <NuxtLink to="/berita/index" class="block py-2">Berita</NuxtLink>
      <NuxtLink to="/galeri/index" class="block py-2">Galeri</NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>
