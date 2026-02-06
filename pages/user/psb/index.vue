<template>
  <div class="min-h-screen bg-light pt-12 pb-12 font-sans transition-colors duration-300">
    <div class="container mx-auto px-4 md:px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Title Section -->
        <div class="text-center mb-8">
          <h1 class="text-2xl md:text-4xl font-black text-main mb-3 font-heading uppercase tracking-tight">
            Pendaftaran Santri <span class="text-brand-500">Baru</span>
          </h1>
          <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Portal Pendaftaran Santri Baru Pondok Pesantren An-Nawa. 
          </p>
        </div>

        <!-- Alur Pendaftaran (3 Steps) -->
        <div class="mb-10 transition-colors duration-300">
          <h2 class="text-lg font-bold text-main mb-6 text-center">Alur Pendaftaran</h2>
          <div class="grid grid-cols-3 gap-4 relative max-w-2xl mx-auto">
            <!-- Step 1 -->
            <div class="flex flex-col items-center text-center relative z-10 transition-transform hover:scale-105 duration-300 cursor-default">
              <div class="w-10 h-10 rounded-full bg-brand-500 text-black flex items-center justify-center font-bold text-sm mb-3 shadow-lg shadow-brand-500/30">
                1
              </div>
              <h3 class="text-xs font-bold text-main mb-1">Isi Formulir</h3>
              <p class="text-[10px] text-gray-500 dark:text-gray-400 leading-tight max-w-[100px]">Data diri & wali</p>
            </div>
            <!-- Step 2 -->
            <div class="flex flex-col items-center text-center relative z-10 transition-transform hover:scale-105 duration-300 cursor-default">
              <div class="w-10 h-10 rounded-full bg-card text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center font-bold text-sm mb-3">
                2
              </div>
              <h3 class="text-xs font-bold text-gray-400 mb-1">Sowan</h3>
              <p class="text-[10px] text-gray-500 dark:text-gray-400 leading-tight max-w-[100px]">Sowan Pengasuh</p>
            </div>
            <!-- Step 3 -->
            <div class="flex flex-col items-center text-center relative z-10 transition-transform hover:scale-105 duration-300 cursor-default">
              <div class="w-10 h-10 rounded-full bg-card text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center font-bold text-sm mb-3">
                3
              </div>
              <h3 class="text-xs font-bold text-gray-400 mb-1">Pembayaran</h3>
              <p class="text-[10px] text-gray-500 dark:text-gray-400 leading-tight max-w-[100px]">Administrasi</p>
            </div>
            
            <!-- Progress Line -->
            <div class="absolute top-5 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -z-0"></div>
          </div>
        </div>

        <!-- Registration Form Component -->
        <PpdbSantriForm @success="onSuccess" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onSuccess = (formData: any) => {
  console.log('Successfully registered santri:', formData)
}
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
