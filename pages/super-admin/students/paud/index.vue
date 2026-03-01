<template>
  <div class="space-y-4">
    <NuxtLink to="/super-admin/students" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Kembali ke Daftar Student
    </NuxtLink>

    <PaudStudentList 
      :students="students"
      @detail="(s) => navigateTo('/super-admin/students/paud/' + s.id + '/detail')"
      @edit="(s) => navigateTo('/super-admin/students/paud/' + s.id)"
      @delete="deleteStudent"
    >
      <template #header-actions>
        <NuxtLink to="/super-admin/students/paud/create" class="flex-1 md:flex-none px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 transition flex items-center justify-center shadow-lg shadow-brand-500/20 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          Tambah Murid
        </NuxtLink>
      </template>
    </PaudStudentList>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'
import PaudStudentList from '~/components/students/PaudStudentList.vue'

definePageMeta({ layout: 'super-admin' })

const { data: students, refresh } = await useFetch('/api/students', {
  query: { unit_id: 'PAUD' }, // PAUD 'PAUD'
  transform: (data: any[]) => data.map(s => ({
    ...s,
    nama: s.name,
    jk: s.gender,
    tahunPendaftaran: s.registration_year,
    noHp: s.phone,
    anakKe: s.child_order
  }))
})

async function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data murid ini?')) {
    try {
      await $fetch(`/api/students/${id}`, { method: 'DELETE' })
      refresh()
    } catch (e) {
      alert('Gagal menghapus data')
    }
  }
}
</script>
