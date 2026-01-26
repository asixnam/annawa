<template>
  <div class="space-y-8">
    <NuxtLink to="/super-admin/students" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Santri
      </NuxtLink>
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Data Santri (Pondok)</h1>
        <p class="text-gray-500 text-sm mt-1">Manajemen data santri Pondok Pesantren Khozinatul Ulum An-Nawa.</p>
      </div>
      <div class="flex items-center gap-3 w-full md:w-auto">
        <select v-model="selectedYear" class="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all cursor-pointer">
          <option value="">Semua Tahun</option>
          <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
        </select>
        <NuxtLink to="/super-admin/students/santri/create" class="flex-1 md:flex-none px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 transition flex items-center justify-center shadow-lg shadow-brand-500/20 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          Tambah Santri
        </NuxtLink>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50/50">
            <tr>
              <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Santri</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">NISN</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Jenis Kelamin</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tahun Masuk</th>
              <th scope="col" class="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <tr v-for="student in filteredStudents" :key="student.id" class="hover:bg-gray-50/50 transition">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="h-10 w-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 font-bold mr-3 uppercase text-sm">
                    {{ student.nama[0] }}
                  </div>
                  <div>
                    <div class="text-sm font-bold text-gray-900">{{ student.nama }}</div>
                    <div class="text-xs text-gray-500">{{ student.noHp }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">{{ student.nisn || '-' }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2.5 py-1 rounded-lg text-xs font-bold capitalize" :class="student.jk === 'putra' ? 'bg-blue-50 text-blue-700' : 'bg-pink-50 text-pink-700'">
                  {{ student.jk }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold">{{ student.tahunPendaftaran }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                <div class="flex justify-end gap-3 font-bold">
                  <NuxtLink :to="`/super-admin/students/santri/${student.id}/detail`" class="text-gray-400 hover:text-brand-600 transition-colors">Detail</NuxtLink>
                  <NuxtLink :to="`/super-admin/students/santri/${student.id}`" class="text-brand-600 hover:text-brand-900 transition-colors">Edit</NuxtLink>
                  <button @click="deleteStudent(student.id)" class="text-red-500 hover:text-red-700 transition-colors">Hapus</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="filteredStudents.length === 0" class="p-12 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <p class="text-gray-400 text-sm font-medium">Data santri tidak ditemukan untuk filter ini.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout: 'super-admin' })

const selectedYear = ref('')
const availableYears = ['2023', '2024', '2025', '2026']

const students = ref([
  { id: 1, nama: 'Zaidan Al-Fatih', nisn: '0123456789', jk: 'putra', asalSekolah: 'SDN 1 Blora', noHp: '081234567890', tahunPendaftaran: '2025' },
  { id: 2, nama: 'Aisyah Humaira', nisn: '0123456790', jk: 'putri', asalSekolah: 'MI Khozinatul Ulum', noHp: '081234567891', tahunPendaftaran: '2025' },
  { id: 3, nama: 'Muhammad Ali', nisn: '0123456791', jk: 'putra', asalSekolah: 'SDN 2 Blora', noHp: '081234567892', tahunPendaftaran: '2024' }
])

const filteredStudents = computed(() => {
  if (!selectedYear.value) return students.value
  return students.value.filter(s => s.tahunPendaftaran === selectedYear.value)
})

function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data santri ini?')) {
    students.value = students.value.filter(s => s.id !== id)
  }
}
</script>
