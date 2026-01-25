<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Data Santri Siswa</h1>
      <NuxtLink to="/super-admin/students/create" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        + Tambah Santri
      </NuxtLink>
    </div>

    <!-- Tabs PAUD / SD -->
    <div class="flex border-b border-gray-200 mb-6">
      <button @click="activeTab = 'paud'" :class="['px-6 py-3 font-bold text-sm border-b-2 transition', activeTab === 'paud' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700']">PAUD An-Nawa</button>
      <button @click="activeTab = 'sd'" :class="['px-6 py-3 font-bold text-sm border-b-2 transition', activeTab === 'sd' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700']">SDQTA</button>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <!-- Search Bar -->
      <div class="p-4 border-b border-gray-100 bg-gray-50">
        <input type="text" v-model="search" placeholder="Cari nama santri..." class="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20">
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-white">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">NIS</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nama Santri</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Kelas</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Wali Murid</th>
            <th class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="student in filteredStudents" :key="student.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ student.nis }}</td>
            <td class="px-6 py-4 whitespace-nowrap font-bold text-gray-900">{{ student.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ student.class }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ student.parent }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <NuxtLink :to="`/super-admin/students/${student.id}`" class="text-brand-600 hover:text-brand-900 font-bold mr-3">Edit</NuxtLink>
              <button @click="deleteStudent(student.id)" class="text-red-600 hover:text-red-900 font-bold">Hapus</button>
            </td>
          </tr>
          <tr v-if="filteredStudents.length === 0">
            <td colspan="5" class="px-6 py-10 text-center text-gray-500 text-sm">Data tidak ditemukan.</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout: 'super-admin' })

const activeTab = ref('paud')
const search = ref('')

// Sample Data
const studentsPAUD = ref([
  { id: 1, nis: '2024001', name: 'Ahmad Kecil', class: 'A', parent: 'Bpk. Budi' },
  { id: 2, nis: '2024002', name: 'Siti Mungil', class: 'B', parent: 'Ibu Ani' },
])
const studentsSD = ref([
  { id: 101, nis: 'SD24001', name: 'Fulan bin Fulan', class: '1A', parent: 'Bpk. Hasan' },
  { id: 102, nis: 'SD24002', name: 'Fulanah', class: '2C', parent: 'Bpk. Ali' },
])

const filteredStudents = computed(() => {
  const source = activeTab.value === 'paud' ? studentsPAUD.value : studentsSD.value
  if (!search.value) return source
  return source.filter(s => s.name.toLowerCase().includes(search.value.toLowerCase()))
})

function deleteStudent(id: number) {
  if (confirm('Hapus data siswa ini?')) {
    if (activeTab.value === 'paud') {
      studentsPAUD.value = studentsPAUD.value.filter(s => s.id !== id)
    } else {
      studentsSD.value = studentsSD.value.filter(s => s.id !== id)
    }
  }
}
</script>
