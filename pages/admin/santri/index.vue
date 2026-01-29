<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Dashboard Kesantrian</h1>
    <p class="text-gray-500 mb-8">Kelola data kedisiplinan dan perizinan santri.</p>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <div class="flex items-center justify-between mb-4">
             <div class="p-3 rounded-full bg-blue-50 text-blue-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
             </div>
             <span class="text-2xl font-bold text-gray-900">{{ stats.totalSantri }}</span>
         </div>
         <p class="text-sm text-gray-500 font-medium">Total Santri</p>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <div class="flex items-center justify-between mb-4">
             <div class="p-3 rounded-full bg-green-50 text-green-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
             <span class="text-2xl font-bold text-gray-900">{{ stats.activePermits }}</span>
         </div>
         <p class="text-sm text-gray-500 font-medium">Perizinan Aktif</p>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <div class="flex items-center justify-between mb-4">
             <div class="p-3 rounded-full bg-amber-50 text-amber-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
             <span class="text-2xl font-bold text-gray-900">{{ stats.pendingIssues }}</span>
         </div>
         <p class="text-sm text-gray-500 font-medium">Pelanggaran Belum Selesai</p>
      </div>
    </div>

    <!-- Kesantrian Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <h2 class="font-bold text-gray-900">Catatan Pelanggaran & Perizinan</h2>
        <button class="text-brand-600 text-sm font-bold hover:text-brand-800">Laporan Bulanan</button>
      </div>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-white">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nama Santri</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Kelas</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Keterangan</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tanggal</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="issue in santriIssues" :key="issue.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-bold text-gray-900">{{ issue.name }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ issue.class }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ issue.issue }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ issue.date }}
            </td>
             <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full uppercase tracking-wide"
                :class="{
                  'bg-green-100 text-green-800': issue.status === 'Resolved',
                  'bg-amber-100 text-amber-800': issue.status === 'Process'
                }"
              >
                {{ issue.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:santri') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const stats = ref({
  totalSantri: 500,
  activePermits: 48,
  pendingIssues: 12
})

const santriIssues = ref([
 { id: 1, name: 'Fulan bin Fulan', class: '7A', issue: 'Terlambat Jamaah Subuh', date: '2026-01-20', status: 'Process' },
 { id: 2, name: 'Abdullah', class: '8B', issue: 'Sakit di UKS', date: '2026-01-19', status: 'Resolved' },
])

onMounted(() => {
  // Simulate fetching Kesantrian specific data
})
</script>
