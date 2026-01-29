<template>
  <div class="space-y-6">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Data Santri (Kesantrian)</h1>
        <p class="text-gray-500 text-sm mt-1">Daftar santri aktif untuk pemantauan kedisiplinan dan perizinan.</p>
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
          <div class="h-10 w-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-3 uppercase text-sm">
            {{ item.name[0] }}
          </div>
          <div class="text-sm font-bold text-gray-900">{{ item.name }}</div>
        </div>
      </template>
      <template #status="{ item }">
        <span class="text-sm text-gray-500 font-bold">{{ item.status }}</span>
      </template>
      <template #actions="{ item }">
        <div class="flex justify-end gap-3 font-bold">
           <button @click="$emit('recordIssue', item)" class="text-brand-600 hover:text-brand-900 mr-4">Catat Pelanggaran</button>
           <button @click="$emit('detail', item)" class="text-gray-400 hover:text-gray-600">Detail</button>
        </div>
      </template>
    </StudentTable>
  </div>
</template>

<script setup lang="ts">
import StudentTable from './StudentTable.vue'

defineProps<{
  students: any[]
}>()

defineEmits(['detail', 'edit', 'delete', 'recordIssue'])

const headers = [
  { key: 'name', label: 'Santri' },
  { key: 'class', label: 'Kelas' },
  { key: 'status', label: 'Status' }
]
</script>
