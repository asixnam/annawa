<template>
  <div>
    <PondokStudentList 
      :students="students"
      @create="() => navigateTo('/admin/pondok/students/create')"
      @detail="(s: any) => navigateTo('/admin/pondok/students/' + s.id + '/detail')"
      @edit="(s: any) => navigateTo('/admin/pondok/students/' + s.id)"
      @delete="deleteStudent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import PondokStudentList from '~/components/students/PondokStudentList.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:pondok') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const students = ref([
  { id: 1, name: 'Zaid Al-Khoir', pondokType: 'Salafiyah', room: 'B1' },
  { id: 2, name: 'Umar Khalid', pondokType: 'Modern', room: 'A3' },
])

function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data santri ini?')) {
    students.value = students.value.filter(s => s.id !== id)
  }
}
</script>
