<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Dashboard Pondok Pesantren</h1>
    <p class="text-gray-500 mb-8">Kelola pendaftaran santri baru untuk Pondok Pesantren.</p>

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
    <!-- <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <h2 class="font-bold text-gray-900">Data Pendaftar Pondok</h2>
        <button class="text-brand-600 text-sm font-bold hover:text-brand-800">Export Excel</button>
      </div>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-white">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nama Calon Santri</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Wali</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tanggal Daftar</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="reg in registrations" :key="reg.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-bold text-gray-900">{{ reg.name }}</div>
              <div class="text-xs text-gray-400">Pondok: {{ reg.pondokType }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ reg.parentName }}</div>
              <div class="text-xs text-gray-400">{{ reg.phone }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ reg.date }}
            </td>
             <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full uppercase tracking-wide"
                :class="{
                  'bg-green-100 text-green-800': reg.status === 'verified',
                  'bg-amber-100 text-amber-800': reg.status === 'pending',
                  'bg-red-100 text-red-800': reg.status === 'rejected'
                }"
              >
                {{ reg.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
               <button v-if="reg.status === 'pending'" class="text-brand-600 hover:text-brand-900 mr-4 font-bold">Verifikasi</button>
               <button class="text-gray-400 hover:text-gray-600">Detail</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:pondok') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const stats = ref({
  total: 80,
  verified: 60,
  pending: 20
})

const registrations = ref([
  { id: 10, name: 'Ahmad Pesantren', pondokType: 'Salafiyah', parentName: 'Zaid', phone: '085xxx', date: '2026-01-22', status: 'pending' }
])

onMounted(() => {
  // Simulate fetching Pondok specific data
})
</script>
