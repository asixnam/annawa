<template>
  <div class="max-w-4xl mx-auto pb-12">
    <div class="mb-8">
      <NuxtLink to="/super-admin/students/sd" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Murid SD
      </NuxtLink>
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Tambah Murid Baru (SDQTA)</h1>
      <p class="text-gray-500 mt-2">Daftarkan murid baru ke sistem SD Qur'an Terpadu An-Nawa.</p>
    </div>

    <PpdbSdForm 
      submit-label="Simpan Data Murid" 
      :use-modal="false" 
      @success="onSuccess" 
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

definePageMeta({ layout: 'super-admin' })
const router = useRouter()

function onSuccess(formData: any) {
  console.log('Successfully saved SD Student via component:', formData)
  alert('Data murid SDQTA baru berhasil ditambahkan!')
  router.push('/super-admin/students/sd')
}
</script>
