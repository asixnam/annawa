<template>
  <SantriStudentEdit
    :initial-data="student"
    :is-edit="true"
    :loading="!student"
    title="Edit Data Santri (Pondok)"
    @success="onUpdate"
    @cancel="() => navigateTo('/admin/pondok/students')"
  >
    <template #back-link>
      <NuxtLink to="/admin/pondok/students" class="group flex items-center text-gray-500 hover:text-green-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Santri Pondok
      </NuxtLink>
    </template>
  </SantriStudentEdit>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import SantriStudentEdit from '~/components/students/SantriStudentEdit.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:pondok') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const route = useRoute()
const student = ref(null as any)
const loading = ref(true)

onMounted(async () => {
  loading.value = true
  try {
    const data = await $fetch(`/api/students/${route.params.id}`)
    student.value = data
  } catch (e) {
    console.error('Failed to fetch student', e)
    alert('Gagal memuat data santri.')
    navigateTo('/admin/pondok/students')
  } finally {
    loading.value = false
  }
})

function onUpdate(formData: any) {
  console.log('Updated Pondok Student:', formData)
  alert('Data santri berhasil diperbarui!')
  navigateTo('/admin/pondok/students')
}
</script>
