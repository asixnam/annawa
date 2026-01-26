<template>
  <div class="min-h-screen bg-gray-50 pt-24 pb-16 font-sans">
    <div class="container mx-auto px-4 md:px-6 max-w-4xl">
      <!-- Title Section -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-heading uppercase">
          Pendaftaran Murid <span class="text-brand-500">Baru (SPMB) PAUD</span>
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Portal Pendaftaran Murid Baru PAUD Islam Terpadu An-Nawa. 
          Membentuk Karakter Qur'ani Sejak Dini dalam Lingkungan yang Menyenangkan.
        </p>
      </div>

      <!-- Alur Pendaftaran (3 Steps) -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 class="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          Alur Pendaftaran
        </h2>
        <div class="grid grid-cols-3 gap-4 relative">
          <!-- Step 1 -->
          <div class="flex flex-col items-center text-center relative z-10">
            <div class="w-12 h-12 rounded-full bg-brand-500 text-black flex items-center justify-center font-black mb-3 border-4 border-white shadow-md">
              1
            </div>
            <h3 class="text-sm font-bold text-gray-900 mb-1">Isi Formulir</h3>
            <p class="text-[10px] text-gray-500 leading-tight">Lengkapi data anak & orang tua</p>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center text-center relative z-10">
            <div class="w-12 h-12 rounded-full bg-white text-gray-400 flex items-center justify-center font-black mb-3 border-4 border-brand-50 shadow-md">
              2
            </div>
            <h3 class="text-sm font-bold text-gray-900 mb-1 text-gray-400">Upload Berkas</h3>
            <p class="text-[10px] text-gray-500 leading-tight">Unggah dokumen persyaratan</p>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center text-center relative z-10">
            <div class="w-12 h-12 rounded-full bg-white text-gray-400 flex items-center justify-center font-black mb-3 border-4 border-brand-50 shadow-md">
              3
            </div>
            <h3 class="text-sm font-bold text-gray-900 mb-1 text-gray-400">Pembayaran</h3>
            <p class="text-[10px] text-gray-500 leading-tight">Pelunasan biaya pendaftaran</p>
          </div>
          
          <!-- Progress Line (Desktop only) -->
          <div class="absolute top-6 left-0 w-full h-0.5 bg-brand-50 -z-0 hidden md:block"></div>
        </div>
      </div>

      <!-- Registration Form -->
      <PpdbPaudForm />
    </div>
  </div>
</template>

<script setup lang="ts">
// No extra logic needed for now as it's handled in the component
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}
</style>
