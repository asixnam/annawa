<template>
  <div class="space-y-6">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Data Murid SDQTA</h1>
        <p class="text-gray-500 text-sm mt-1">Manajemen data murid SDQTA An-Nawa.</p>
      </div>
      <div class="flex items-center gap-3 w-full md:w-auto">
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
      :items="students"
      @detail="(item) => $emit('detail', item)"
      @edit="(item) => $emit('edit', item)"
      @delete="(id) => $emit('delete', id)"
    >
      <template #name="{ item }">
        <div class="flex items-center">
          <div class="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3 uppercase text-sm">
            {{ item.name[0] }}
          </div>
          <div class="text-sm font-bold text-gray-900">{{ item.name }}</div>
        </div>
      </template>
      <template #class="{ item }">
        <span class="text-sm text-gray-500 font-bold">{{ item.class }}</span>
      </template>
    </StudentTable>
  </div>
</template>

<script setup lang="ts">
import StudentTable from './StudentTable.vue'

defineProps<{
  students: any[]
}>()

defineEmits(['detail', 'edit', 'delete', 'create'])

const headers = [
  { key: 'name', label: 'Murid' },
  { key: 'nisn', label: 'NISN' },
  { key: 'class', label: 'Kelas' }
]
</script>
