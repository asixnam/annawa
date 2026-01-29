<template>
  <div>
    <PaudStudentList 
      :students="students"
      @create="() => navigateTo('/admin/paud/students/create')"
      @detail="(s: any) => navigateTo('/admin/paud/students/' + s.id + '/detail')"
      @edit="(s: any) => navigateTo('/admin/paud/students/' + s.id)"
      @delete="deleteStudent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import PaudStudentList from '~/components/students/PaudStudentList.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:paud') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const students = ref([
  { id: 1, nama: 'Muhammad Fatih', nik: '3316012345678901', jk: 'laki-laki', anakKe: 1, noHp: '081234567890', tahunPendaftaran: '2025' },
  { id: 2, nama: 'Siti Fatimah', nik: '3316012345678902', jk: 'perempuan', anakKe: 2, noHp: '081234567891', tahunPendaftaran: '2025' },
  { id: 3, nama: 'Abdurrahman', nik: '3316012345678903', jk: 'laki-laki', anakKe: 1, noHp: '081234567892', tahunPendaftaran: '2024' }
])

function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data murid ini?')) {
    students.value = students.value.filter(s => s.id !== id)
  }
}
</script>
