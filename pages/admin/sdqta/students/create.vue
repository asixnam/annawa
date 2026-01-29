<template>
  <SdStudentEdit
    :is-edit="false"
    title="Tambah Murid Baru (SDQTA)"
    submit-label="Simpan Data Murid"
    @success="onSave" 
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

function onSave(formData: any) {
  console.log('Saving SDQTA Student:', formData)
  alert('Data murid SDQTA berhasil disimpan!')
  navigateTo('/admin/sdqta/students')
}
</script>
