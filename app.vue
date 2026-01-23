<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="min-h-screen flex flex-col bg-white">
      <HeaderNav />
      <main class="flex-1 pt-20">
        <NuxtPage />
      </main>
      <FooterNav />
    </div>
  </div>
</template>

<script setup lang="ts">
import './assets/css/tailwind.css'
import HeaderNav from './components/layout/HeaderNav.vue'
import FooterNav from './components/layout/FooterNav.vue'
</script>
