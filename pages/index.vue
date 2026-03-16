<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-light dark:bg-gray-950 transition-colors duration-300">
    <div class="relative">
      <!-- Outer Ring -->
      <div class="w-16 h-16 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin"></div>
      
      <!-- Inner Pulse -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-8 h-8 bg-brand-500/10 rounded-full animate-ping"></div>
      </div>
    </div>
    
    <p class="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 animate-pulse tracking-wide">
      Menyiapkan Sesi...
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.push('/user')
})
</script>
