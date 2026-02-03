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
import { ref } from 'vue'
import PondokStudentList from '~/components/students/PondokStudentList.vue'

definePageMeta({ layout: 'super-admin' })

const students = ref([
  { id: 1, nama: 'Zaidan Al-Fatih', nisn: '0123456789', jk: 'putra', asalSekolah: 'SDN 1 Blora', noHp: '081234567890', tahunPendaftaran: '2025' },
  { id: 2, nama: 'Aisyah Humaira', nisn: '0123456790', jk: 'putri', asalSekolah: 'MI Khozinatul Ulum', noHp: '081234567891', tahunPendaftaran: '2025' },
  { id: 3, nama: 'Muhammad Ali', nisn: '0123456791', jk: 'putra', asalSekolah: 'SDN 2 Blora', noHp: '081234567892', tahunPendaftaran: '2024' }
])

function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data santri ini?')) {
    students.value = students.value.filter(s => s.id !== id)
  }
}
</script>

