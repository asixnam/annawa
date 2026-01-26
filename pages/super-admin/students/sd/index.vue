<template>
  <div class="space-y-8">
    <NuxtLink to="/super-admin/students" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Beranda Daftar
      </NuxtLink>
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Data Murid SDQTA</h1>
        <p class="text-gray-500 text-sm mt-1">Manajemen data murid SD Qur'an Terpadu An-Nawa.</p>
      </div>
      <div class="flex items-center gap-3 w-full md:w-auto">
        <select v-model="selectedYear" class="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all cursor-pointer">
          <option value="">Semua Tahun</option>
          <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
        </select>
        <NuxtLink to="/super-admin/students/sd/create" class="flex-1 md:flex-none px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 transition flex items-center justify-center shadow-lg shadow-brand-500/20 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          Tambah Murid
        </NuxtLink>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 text-left">
          <thead class="bg-gray-50/50">
            <tr>
              <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Murid</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">NIK / NISN</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">L/P</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tahun Masuk</th>
              <th scope="col" class="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <tr v-for="student in filteredStudents" :key="student.id" class="hover:bg-gray-50/50 transition">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3 uppercase text-sm">
                    {{ student.namaLengkap[0] }}
                  </div>
                  <div>
                    <div class="text-sm font-bold text-gray-900">{{ student.namaLengkap }}</div>
                    <div class="text-xs text-gray-500">{{ student.noHp }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900 font-bold">{{ student.nik }}</div>
                <div class="text-[10px] text-gray-400 font-medium">NISN: {{ student.nisn || '-' }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2.5 py-1 rounded-lg text-xs font-bold capitalize" :class="student.jenisKelamin === 'laki-laki' ? 'bg-blue-50 text-blue-700' : 'bg-pink-50 text-pink-700'">
                  {{ student.jenisKelamin === 'laki-laki' ? 'L' : 'P' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold">{{ student.tahunPendaftaran }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                <div class="flex justify-end gap-3 font-bold">
                  <NuxtLink :to="`/super-admin/students/sd/${student.id}/detail`" class="text-gray-400 hover:text-brand-600 transition-colors">Detail</NuxtLink>
                  <NuxtLink :to="`/super-admin/students/sd/${student.id}`" class="text-brand-600 hover:text-brand-900 transition-colors">Edit</NuxtLink>
                  <button @click="deleteStudent(student.id)" class="text-red-500 hover:text-red-700 transition-colors">Hapus</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="filteredStudents.length === 0" class="p-12 text-center">
          <p class="text-gray-400 text-sm font-medium">Data murid tidak ditemukan untuk filter ini.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout: 'super-admin' })

const selectedYear = ref('')
const availableYears = ['2024', '2025', '2026']

const students = ref([
  { id: 1, namaLengkap: 'Rayyan Al-Ghifari', nik: '3316012345678001', nisn: '0123456001', jenisKelamin: 'laki-laki', asalSekolah: 'TK IT An-Nawa', noHp: '081234567990', tahunPendaftaran: '2025' },
  { id: 2, namaLengkap: 'Zahra Amira', nik: '3316012345678002', nisn: '0123456002', jenisKelamin: 'perempuan', asalSekolah: 'TK Pembina Blora', noHp: '081234567991', tahunPendaftaran: '2025' },
  { id: 3, namaLengkap: 'Ibrahim Khalil', nik: '3316012345678003', nisn: '0123456003', jenisKelamin: 'laki-laki', asalSekolah: 'TK IT An-Nawa', noHp: '081234567992', tahunPendaftaran: '2024' }
])

const filteredStudents = computed(() => {
  if (!selectedYear.value) return students.value
  return students.value.filter(s => s.tahunPendaftaran === selectedYear.value)
})

function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data murid ini?')) {
    students.value = students.value.filter(s => s.id !== id)
  }
}
</script>
