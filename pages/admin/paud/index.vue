<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Dashboard PAUD</h1>
    <p class="text-gray-500 mb-8">Kelola pendaftaran siswa baru untuk unit PAUD.</p>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <div class="flex items-center justify-between mb-4">
             <div class="p-3 rounded-full bg-blue-50 text-blue-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
             </div>
             <span class="text-2xl font-bold text-gray-900">{{ stats.total }}</span>
         </div>
         <p class="text-sm text-gray-500 font-medium">Total Pendaftar</p>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <div class="flex items-center justify-between mb-4">
             <div class="p-3 rounded-full bg-green-50 text-green-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
             <span class="text-2xl font-bold text-gray-900">{{ stats.verified }}</span>
         </div>
         <p class="text-sm text-gray-500 font-medium">Terverifikasi</p>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <div class="flex items-center justify-between mb-4">
             <div class="p-3 rounded-full bg-amber-50 text-amber-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
             <span class="text-2xl font-bold text-gray-900">{{ stats.pending }}</span>
         </div>
         <p class="text-sm text-gray-500 font-medium">Menunggu Review</p>
      </div>
    </div>

    <!-- Registration Table -->
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
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

const stats = ref({
  total: 12,
  verified: 5,
  pending: 7
})

const registrations = ref([
  { id: 4, name: 'Fatimah Kecil', parentName: 'Budi', phone: '081xxx', date: '2026-01-21', status: 'pending' }
])

onMounted(() => {
  // Simulate fetching PAUD specific data
})
</script>
