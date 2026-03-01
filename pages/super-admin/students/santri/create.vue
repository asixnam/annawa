<template>
  <SantriStudentEdit
    :is-edit="false"
    title="Tambah Santri Baru (Pondok)"
    @success="saveStudent" 
    @cancel="() => router.push('/super-admin/students/santri')"
  >
    <template #back-link>
      <NuxtLink to="/super-admin/students/santri" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Santri
      </NuxtLink>
    </template>
  </SantriStudentEdit>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SantriStudentEdit from '../../../../components/students/SantriStudentEdit.vue'

definePageMeta({ layout: 'super-admin' })
const router = useRouter()

async function saveStudent(formData: any) {
  console.log('Student saved successfully via component:', formData)
  alert('Data santri baru berhasil ditambahkan!')
  router.push('/super-admin/students/santri')
}
</script>
