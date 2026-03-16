<template>
  <div class="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <!-- Icon Container -->
      <div class="relative">
        <div class="absolute inset-0 flex items-center justify-center opacity-20">
          <div class="w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div class="relative flex justify-center">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Text Content -->
      <div class="space-y-4">
        <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Akses Ditolak
        </h2>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator jika Anda merasa ini adalah kesalahan.
        </p>
      </div>

      <!-- Action Button -->
      <div class="pt-6">
        <NuxtLink
          to="/login"
          class="inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-brand-500 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 shadow-lg shadow-brand-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 8.959 8.959 0 01-9 9 8.959 8.959 0 01-9-9z" />
          </svg>
          Kembali ke Login
        </NuxtLink>
      </div>
      
      <!-- Support Text -->
      <p class="text-sm text-gray-400 dark:text-gray-500">
        Error Code: 403 - Forbidden
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Tidak perlu script tambahan jika hanya statis, 
// tapi kita pastikan layout yang digunakan sesuai.
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.1); }
}
.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
