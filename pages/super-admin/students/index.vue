<template>
  <div class="max-w-6xl mx-auto pb-12">
    <div class="mb-10 text-center">
      <h1 class="text-4xl font-black text-main tracking-tight mb-3 uppercase">Manajemen Data Siswa</h1>
      <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Pilih kategori pendidikan untuk mengelola data siswa, pendaftaran, dan administrasi akademik.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Santri Pondok -->
      <NuxtLink to="/super-admin/students/santri" class="group bg-card rounded-3xl p-8 border border-gray-100 dark:border-brand-400/20 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-brand-500/10 hover:border-brand-200 dark:hover:border-brand-500/50 transition-all active:scale-95 flex flex-col items-center text-center">
        <div class="h-20 w-20 rounded-2xl bg-brand-50 dark:bg-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h2 class="text-2xl font-black text-main mb-2 uppercase tracking-wide">Pondok Pesantren</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">Manajemen data santri, asrama, dan pendaftaran santri baru (PSB).</p>
        <div class="mt-auto pt-6 border-t border-gray-50 dark:border-gray-800/40 w-full flex justify-between items-center text-gray-400 dark:text-gray-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          <span class="text-xs font-bold uppercase tracking-widest">Kelola Data</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </NuxtLink>

      <!-- PAUD -->
      <NuxtLink to="/super-admin/students/paud" class="group bg-card rounded-3xl p-8 border border-gray-100 dark:border-brand-400/20 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-orange-500/10 hover:border-orange-200 dark:hover:border-orange-500/50 transition-all active:scale-95 flex flex-col items-center text-center">
        <div class="h-20 w-20 rounded-2xl bg-orange-50 dark:bg-orange-900/40 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 class="text-2xl font-black text-main mb-2 uppercase tracking-wide">PAUD</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">Administrasi murid PAUD, data tumbuh kembang, dan pendaftaran murid baru.</p>
        <div class="mt-auto pt-6 border-t border-gray-50 dark:border-gray-800/40 w-full flex justify-between items-center text-gray-400 dark:text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
          <span class="text-xs font-bold uppercase tracking-widest">Kelola Data</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </NuxtLink>

      <!-- SD -->
      <NuxtLink to="/super-admin/students/sd" class="group bg-card rounded-3xl p-8 border border-gray-100 dark:border-brand-400/20 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-blue-500/10 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all active:scale-95 flex flex-col items-center text-center">
        <div class="h-20 w-20 rounded-2xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 class="text-2xl font-black text-main mb-2 uppercase tracking-wide">SDQTA Qur'an</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">Manajemen siswa SDQTA, data akademik, tahfidz, dan pendaftaran murid baru.</p>
        <div class="mt-auto pt-6 border-t border-gray-50 dark:border-gray-800/40 w-full flex justify-between items-center text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <span class="text-xs font-bold uppercase tracking-widest">Kelola Data</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'super-admin' })
</script>
