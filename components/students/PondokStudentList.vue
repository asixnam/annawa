```html
<template>
  <div class="space-y-6">
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
      <div class="w-full lg:w-auto">
        <h1 class="text-2xl font-black text-main uppercase tracking-tight">Data Santri Pondok</h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-1 font-medium">Manajemen data santri Pondok Pesantren Khozinatul Ulum.</p>
      </div>
      <div class="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
        <div class="grid grid-cols-2 gap-3 w-full sm:w-auto">
          <select v-model="selectedGender" class="px-4 py-2.5 bg-card border border-gray-200 dark:border-brand-400/30 rounded-2xl text-xs font-bold text-main focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all cursor-pointer uppercase">
            <option value="">Semua Jenis</option>
            <option value="putra">Putra</option>
            <option value="putri">Putri</option>
          </select>
          <select v-model="selectedYear" class="px-4 py-2.5 bg-card border border-gray-200 dark:border-brand-400/30 rounded-2xl text-xs font-bold text-main focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all cursor-pointer uppercase">
            <option value="">Semua Tahun</option>
            <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
        <div class="w-full sm:w-auto">
          <slot name="header-actions">
            <button @click="$emit('create')" class="w-full sm:w-auto px-6 py-2.5 bg-brand-600 text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-700 transition flex items-center justify-center shadow-lg shadow-brand-500/20 active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              Tambah Santri
            </button>
          </slot>
        </div>
      </div>
    </div>

    <!-- Mobile Card View -->
    <div class="grid grid-cols-1 gap-4 md:hidden">
      <div v-for="item in filteredItems" :key="item.id" class="bg-card p-5 rounded-3xl border border-gray-100 dark:border-brand-400/20 shadow-sm transition-all active:scale-[0.98]">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-2xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 font-black mr-3 uppercase text-xs">
              {{ item.nama[0] }}
            </div>
            <div>
              <div class="text-sm font-black text-main uppercase leading-tight">{{ item.nama }}</div>
              <div class="text-[10px] text-gray-500 dark:text-gray-400 font-bold tracking-wider">{{ item.nisn || '-' }}</div>
            </div>
          </div>
          <span class="px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest" :class="item.jk === 'putra' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400'">
            {{ item.jk }}
          </span>
        </div>
        
        <div class="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800/40">
          <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            TAHUN {{ item.tahunPendaftaran }}
          </div>
          <div class="flex gap-2">
            <button @click="$emit('detail', item)" class="p-2 text-gray-400 hover:text-brand-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            <button @click="$emit('edit', item)" class="p-2 text-brand-600 hover:text-brand-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button @click="$emit('delete', item.id)" class="p-2 text-red-500 hover:text-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-if="filteredItems.length === 0" class="py-12 text-center bg-card rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Data tidak ditemukan</p>
      </div>
    </div>

    <!-- Desktop Table View -->
    <StudentTable 
      class="hidden md:block"
      :headers="headers" 
      :items="filteredItems"
      @detail="(item) => $emit('detail', item)"
      @edit="(item) => $emit('edit', item)"
      @delete="(id) => $emit('delete', id)"
    >
      <template #nama="{ item }">
        <div class="flex items-center">
          <div class="h-10 w-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold mr-3 uppercase text-sm">
            {{ item.nama[0] }}
          </div>
          <div>
            <div class="text-sm font-bold text-gray-900 dark:text-white">{{ item.nama }}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">{{ item.noHp }}</div>
          </div>
        </div>
      </template>
      <template #nisn="{ item }">
        <span class="text-sm text-gray-600 dark:text-gray-400 font-medium">{{ item.nisn || '-' }}</span>
      </template>
      <template #jk="{ item }">
        <span class="px-2.5 py-1 rounded-lg text-xs font-bold capitalize" :class="item.jk === 'putra' ? 'bg-primary/10 text-primary' : 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400'">
          {{ item.jk }}
        </span>
      </template>
      <template #tahunPendaftaran="{ item }">
        <span class="text-sm text-gray-500 dark:text-gray-400 font-bold">{{ item.tahunPendaftaran }}</span>
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
const availableYears = ['2023', '2024', '2025', '2026']

const filteredItems = computed(() => {
  if (!props.students) return []
  return props.students.filter(s => {
    // Year filter: if selectedYear is empty, match all. Else match exact string.
    const matchYear = !selectedYear.value || String(s.tahunPendaftaran) === String(selectedYear.value)
    
    // Gender filter: if selectedGender is empty, match all. Else match exact string.
    const matchGender = !selectedGender.value || s.jk === selectedGender.value

    return matchYear && matchGender
  })
})

const headers = [
  { key: 'nama', label: 'Santri' },
  { key: 'nisn', label: 'NISN' },
  { key: 'jk', label: 'Jenis Kelamin' },
  { key: 'tahunPendaftaran', label: 'Tahun Masuk' }
]
</script>
