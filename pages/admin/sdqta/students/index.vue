<template>
  <div>
    <SdStudentList 
      :students="students"
      @create="() => navigateTo('/admin/sdqta/students/create')"
      @detail="(s: any) => navigateTo('/admin/sdqta/students/' + s.id + '/detail')"
      @edit="(s: any) => navigateTo('/admin/sdqta/students/' + s.id)"
      @delete="deleteStudent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import SdStudentList from '~/components/students/SdStudentList.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:sd') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const students = ref([
  { id: 1, name: 'Muhammad Ali', nisn: '1234567890', class: '1A' },
  { id: 2, name: 'Aisyah Zahra', nisn: '0987654321', class: '2B' },
])

function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data murid ini?')) {
    students.value = students.value.filter(s => s.id !== id)
  }
}
</script>
