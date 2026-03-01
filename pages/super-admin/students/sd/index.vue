<template>
  <div class="space-y-4">
    <NuxtLink to="/super-admin/students" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Kembali ke Beranda Daftar
    </NuxtLink>

    <SdStudentList 
      :students="students"
      @create="() => navigateTo('/super-admin/students/sd/create')"
      @detail="(s: any) => navigateTo('/super-admin/students/sd/' + s.id + '/detail')"
      @edit="(s: any) => navigateTo('/super-admin/students/sd/' + s.id)"
      @delete="deleteStudent"
    />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'
import SdStudentList from '~/components/students/SdStudentList.vue'

definePageMeta({ layout: 'super-admin' })

const { data: students, refresh } = await useFetch('/api/students', {
  query: { unit_id: 'SD' }, // SD 'SD'
  transform: (data: any[]) => data.map(s => ({
    ...s,
    namaLengkap: s.name,
    jenisKelamin: s.gender,
    tahunPendaftaran: s.registration_year,
    noHp: s.phone,
    asalSekolah: s.school_origin,
    nisn: s.nis // mapping nis to nisn if that's intended, or separate column? setup-db had 'nis', missing 'nisn' column. I added 'nis' column.
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

