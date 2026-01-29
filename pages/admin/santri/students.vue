<template>
  <div>
    <KesantrianStudentList 
      :students="students"
      @detail="(s: any) => navigateTo('/admin/santri/students/' + s.id + '/detail')"
      @edit="(s: any) => navigateTo('/admin/santri/students/' + s.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import KesantrianStudentList from '~/components/students/KesantrianStudentList.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:santri') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const students = ref([
  { id: 1, name: 'Abdullah Umam', class: '7A', status: 'Aktif' },
  { id: 2, name: 'Zaid Al-Harits', class: '8B', status: 'Izin' },
])
</script>
