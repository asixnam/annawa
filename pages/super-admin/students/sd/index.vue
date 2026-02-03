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
import { ref } from 'vue'
import SdStudentList from '~/components/students/SdStudentList.vue'

definePageMeta({ layout: 'super-admin' })

const students = ref([
  { id: 1, namaLengkap: 'Rayyan Al-Ghifari', nik: '3316012345678001', nisn: '0123456001', jenisKelamin: 'laki-laki', asalSekolah: 'TK IT An-Nawa', noHp: '081234567990', tahunPendaftaran: '2025' },
  { id: 2, namaLengkap: 'Zahra Amira', nik: '3316012345678002', nisn: '0123456002', jenisKelamin: 'perempuan', asalSekolah: 'TK Pembina Blora', noHp: '081234567991', tahunPendaftaran: '2025' },
  { id: 3, namaLengkap: 'Ibrahim Khalil', nik: '3316012345678003', nisn: '0123456003', jenisKelamin: 'laki-laki', asalSekolah: 'TK IT An-Nawa', noHp: '081234567992', tahunPendaftaran: '2024' }
])

function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data murid ini?')) {
    students.value = students.value.filter(s => s.id !== id)
  }
}
</script>

