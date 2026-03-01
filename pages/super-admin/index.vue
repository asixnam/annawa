<template>
  <div>
    <h1 class="text-3xl font-bold text-main mb-2">Dashboard Overview</h1>
    <p class="text-gray-500 dark:text-gray-400 mb-8">Selamat datang kembali, Super Admin.</p>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <!-- Stat Card 1 -->
      <div class="bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/20 flex flex-col transition-colors duration-300">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span class="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+12%</span>
        </div>
        <div class="text-3xl font-bold text-main mb-1">{{ data?.stats?.users || 0 }}</div>
        <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Admin & Users</p>
      </div>

       <!-- Stat Card 2 -->
      <div class="bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/20 flex flex-col transition-colors duration-300">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-full bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
           <span class="text-xs font-bold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-full">0%</span>
        </div>
        <div class="text-3xl font-bold text-main mb-1">{{ data?.stats?.articles || 0 }}</div>
        <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Artikel & Konten</p>
      </div>

       <!-- Stat Card 3 -->
      <div class="bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/20 flex flex-col transition-colors duration-300">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-full bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
           <span class="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+5%</span>
        </div>
        <div class="text-3xl font-bold text-main mb-1">{{ data?.stats?.photos || 0 }}</div>
        <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Galeri Foto</p>
      </div>

       <!-- Stat Card 4 -->
      <div class="bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/20 flex flex-col transition-colors duration-300">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-full bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+24%</span>
        </div>
        <div class="text-3xl font-bold text-main mb-1">{{ data?.stats?.registrations || 0 }}</div>
        <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Pendaftaran Baru</p>
      </div>
    </div>

    <!-- Recent Activity & Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Recent Activity -->
      <div class="lg:col-span-2 bg-card rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/20 p-6 transition-colors duration-300">
        <h2 class="text-lg font-bold text-main mb-6">Aktivitas Terkini</h2>
        <div class="space-y-6">
          <div v-for="act in data?.activities" :key="act.id" class="flex gap-4">
            <div class="w-2 h-2 mt-2 rounded-full shrink-0" :class="act.color"></div>
            <div>
              <p class="text-sm text-main font-medium">{{ act.message }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ formatRelativeTime(act.date) }}</p>
            </div>
          </div>
          <div v-if="!data?.activities?.length" class="text-center py-10">
            <p class="text-gray-500">Belum ada aktivitas terbaru.</p>
          </div>
        </div>
        <div class="mt-8 pt-6 border-t border-gray-100 dark:border-brand-400/20">
           <button class="text-brand-600 dark:text-brand-400 font-bold text-sm hover:text-brand-700 dark:hover:text-brand-300">Lihat Semua Aktivitas</button>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-gray-900 rounded-2xl shadow-xl overflow-hidden relative text-white p-8">
         <div class="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
         
         <h2 class="text-xl font-bold mb-6 relative z-10">Aksi Cepat</h2>
         
         <div class="space-y-3 relative z-10">
           <NuxtLink to="/super-admin/users" class="flex items-center w-full p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/10 group">
             <div class="bg-brand-500 p-2 rounded-lg text-black mr-4 group-hover:scale-110 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
               </svg>
             </div>
             <div class="text-left">
               <span class="block font-bold">Tambah Admin Baru</span>
               <span class="text-xs text-gray-400">Buat akun untuk pengelola unit</span>
             </div>
           </NuxtLink>

           <NuxtLink to="/super-admin/gallery" class="flex items-center w-full p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/10 group">
             <div class="bg-purple-500 p-2 rounded-lg text-white mr-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
             </div>
             <div class="text-left">
               <span class="block font-bold">Approve Author</span>
               <span class="text-xs text-gray-400">Validasi pendaftaran author</span>
             </div>
           </NuxtLink>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../stores/auth'

definePageMeta({
  layout: 'super-admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const { data } = await useFetch('/api/super-admin/stats')

const formatRelativeTime = (date: string) => {
  if (!date) return '-'
  const now = new Date()
  const then = new Date(date)
  const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1000)

  if (diffInSeconds < 60) return 'Baru saja'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit yang lalu`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam yang lalu`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} hari yang lalu`
  
  return then.toLocaleDateString('id-ID', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
}
</script>
