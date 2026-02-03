<template>
  <div class="space-y-6">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Data Murid PAUD</h1>
        <p class="text-gray-500 text-sm mt-1">Manajemen data murid PAUD Islam Terpadu An-Nawa.</p>
      </div>
      <div class="flex items-center gap-3 w-full md:w-auto">
        <select v-model="selectedYear" class="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all cursor-pointer">
          <option value="">Semua Tahun</option>
          <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
        </select>
        <select v-model="selectedGender" class="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all cursor-pointer">
          <option value="">Semua Jenis</option>
          <option value="laki-laki">Laki Laki</option>
          <option value="perempuan">Perempuan</option>
        </select>
        <slot name="header-actions">
           <button @click="$emit('create')" class="flex-1 md:flex-none px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 transition flex items-center justify-center shadow-lg shadow-brand-500/20 active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            Tambah Murid
          </button>
        </slot>
      </div>
    </div>

    <StudentTable 
      :headers="headers" 
      :items="filteredStudents"
      @detail="(item) => $emit('detail', item)"
      @edit="(item) => $emit('edit', item)"
      @delete="(id) => $emit('delete', id)"
    >
      <template #nama="{ item }">
        <div class="flex items-center">
          <div class="h-10 w-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 font-bold mr-3 uppercase text-sm">
            {{ item.nama[0] }}
          </div>
          <div>
            <div class="text-sm font-bold text-gray-900">{{ item.nama }}</div>
            <div class="text-xs text-gray-500">{{ item.noHp }}</div>
          </div>
        </div>
      </template>
      <template #jk="{ item }">
        <span class="px-2.5 py-1 rounded-lg text-xs font-bold capitalize" :class="item.jk === 'laki-laki' ? 'bg-blue-50 text-blue-700' : 'bg-pink-50 text-pink-700'">
          {{ item.jk }}
        </span>
      </template>
      <template #tahunPendaftaran="{ item }">
        <span class="text-sm text-gray-500 font-bold">{{ item.tahunPendaftaran }}</span>
      </template>
    </StudentTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import StudentTable from './StudentTable.vue'

const props = defineProps<{
  students: any[]
}>()

defineEmits(['detail', 'edit', 'delete', 'create'])

const selectedGender = ref('')
const selectedYear = ref('')
const availableYears = ['2024', '2025', '2026']

const headers = [
  { key: 'nama', label: 'Murid' },
  { key: 'nik', label: 'NIK' },
  { key: 'jk', label: 'Jenis Kelamin' },
  { key: 'tahunPendaftaran', label: 'Tahun Masuk' }
]

const filteredStudents = computed(() => {
  return props.students.filter(s => {
    const matchYear = !selectedYear.value || s.tahunPendaftaran === selectedYear.value
    const matchGender = !selectedGender.value || (s.jk === selectedGender.value || s.jenisKelamin === selectedGender.value)
    return matchYear && matchGender
  })
})
</script>
