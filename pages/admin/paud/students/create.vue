<template>
  <PaudStudentEdit
    :is-edit="false"
    title="Tambah Murid Baru (PAUD)"
    submit-label="Simpan Data Murid"
    @success="onSuccess" 
    @cancel="() => navigateTo('/admin/paud/students')"
  >
    <template #back-link>
      <NuxtLink to="/admin/paud/students" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Murid PAUD
      </NuxtLink>
    </template>
  </PaudStudentEdit>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import PaudStudentEdit from '~/components/students/PaudStudentEdit.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:paud') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

function onSuccess(formData: any) {
  console.log('Successfully saved PAUD Student:', formData)
  alert('Data murid PAUD baru berhasil ditambahkan!')
  navigateTo('/admin/paud/students')
}
</script>
