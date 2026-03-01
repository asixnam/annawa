<template>
  <div class="space-y-4">
    <NuxtLink to="/super-admin/students" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Kembali ke Daftar Santri
    </NuxtLink>

    <PondokStudentList 
      :students="students"
      @create="() => navigateTo('/super-admin/students/santri/create')"
      @detail="(s: any) => navigateTo('/super-admin/students/santri/' + s.id + '/detail')"
      @edit="(s: any) => navigateTo('/super-admin/students/santri/' + s.id)"
      @delete="deleteStudent"
    />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'
import PondokStudentList from '~/components/students/PondokStudentList.vue'

definePageMeta({ layout: 'super-admin' })

const { data: students, refresh } = await useFetch('/api/students', {
  query: { unit_id: 'SANTRI' }, // Pondok 'SANTRI'
  transform: (data: any[]) => data.map(s => ({
    ...s,
    nama: s.name,
    jk: s.gender === 'laki-laki' ? 'putra' : 'putri',
    tahunPendaftaran: s.registration_year,
    noHp: s.phone,
    asalSekolah: s.school_origin
  }))
})

async function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data santri ini?')) {
    try {
      await $fetch(`/api/students/${id}`, { method: 'DELETE' })
      refresh()
    } catch (e) {
      alert('Gagal menghapus data')
    }
  }
}
</script>

