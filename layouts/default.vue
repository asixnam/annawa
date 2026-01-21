<template>
  <div class="min-h-screen flex flex-col bg-white">
    <HeaderNav />
    <main class="flex-1">
      <slot />
    </main>
    <footer class="bg-gray-50 border-t mt-8">
      <div class="container mx-auto py-6 px-6 text-center text-sm text-gray-600">
        &copy; {{ new Date().getFullYear() }} Pondok Annawa — Semua hak cipta dilindungi.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from '../components/layout/HeaderNav.vue'
</script>
