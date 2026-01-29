<template>
  <SdStudentEdit
    :initial-data="student"
    :is-edit="true"
    :loading="!student"
    title="Edit Data Murid (SDQTA)"
    @success="onUpdate"
    @cancel="() => navigateTo('/admin/sdqta/students')"
  >
    <template #back-link>
      <NuxtLink to="/admin/sdqta/students" class="group flex items-center text-gray-500 hover:text-blue-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Murid SDQTA
      </NuxtLink>
    </template>
  </SdStudentEdit>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import SdStudentEdit from '~/components/students/SdStudentEdit.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:sd') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const route = useRoute()
const student = ref(null as any)

onMounted(() => {
  // Simulate fetching student data
  setTimeout(() => {
    student.value = {
      id: route.params.id,
      name: 'Muhammad Ali',
      nisn: '1234567890',
      class: '1A'
    }
  }, 500)
})

function onUpdate(formData: any) {
  console.log('Updating SDQTA Student:', formData)
  alert('Data murid SDQTA berhasil diperbarui!')
  navigateTo('/admin/sdqta/students')
}
</script>
