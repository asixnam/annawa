<template>
  <div>
    <h1 class="text-3xl font-bold text-main mb-2">Dashboard PAUD</h1>
    <p class="text-gray-500 dark:text-gray-400 mb-8">Selamat datang kembali. Kelola pendaftaran siswa baru untuk unit PAUD.</p>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div class="bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/20 transition-colors duration-300">
         <div class="flex items-center justify-between mb-4">
              <div class="p-3 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                 </svg>
              </div>
              <span class="text-2xl font-bold text-main">{{ data?.stats?.total || 0 }}</span>
         </div>
         <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Pendaftar</p>
      </div>
      <div class="bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/20 transition-colors duration-300">
         <div class="flex items-center justify-between mb-4">
              <div class="p-3 rounded-full bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                 </svg>
              </div>
              <span class="text-2xl font-bold text-main">{{ data?.stats?.news || 0 }}</span>
         </div>
         <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Artikel News</p>
      </div>
      <div class="bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/20 transition-colors duration-300">
         <div class="flex items-center justify-between mb-4">
              <div class="p-3 rounded-full bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
              </div>
              <span class="text-2xl font-bold text-main">{{ data?.stats?.gallery || 0 }}</span>
         </div>
         <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Galeri Foto</p>
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
      </div>

      <!-- Quick Actions -->
      <div class="bg-card rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/20 p-6 transition-colors duration-300">
        <h2 class="text-lg font-bold text-main mb-6">Aksi Cepat</h2>
        <div class="space-y-3">
          <NuxtLink to="/admin/paud/students/create" class="flex items-center p-4 bg-gray-50 dark:bg-gray-900/40 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all border border-transparent hover:border-brand-200 dark:hover:border-brand-800 group">
            <div class="bg-blue-500/10 text-blue-600 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span class="font-bold text-sm text-main">Tambah Siswa Baru</span>
          </NuxtLink>
          
          <NuxtLink to="/admin/paud/news" class="flex items-center p-4 bg-gray-50 dark:bg-gray-900/40 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all border border-transparent hover:border-brand-200 dark:hover:border-brand-800 group">
            <div class="bg-amber-500/10 text-amber-600 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <span class="font-bold text-sm text-main">Posting Berita PAUD</span>
          </NuxtLink>

          <NuxtLink to="/admin/paud/gallery" class="flex items-center p-4 bg-gray-50 dark:bg-gray-900/40 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all border border-transparent hover:border-brand-200 dark:hover:border-brand-800 group">
            <div class="bg-purple-500/10 text-purple-600 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="font-bold text-sm text-main">Upload Galeri PAUD</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:paud') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const { data } = await useFetch('/api/admin/paud/stats')

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
