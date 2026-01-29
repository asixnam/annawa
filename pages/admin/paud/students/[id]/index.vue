<template>
  <PaudStudentEdit
    :initial-data="student"
    :is-edit="true"
    :loading="!student"
    title="Edit Data Murid (PAUD)"
    @success="onUpdate"
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
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
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

const route = useRoute()
const student = ref(null as any)

onMounted(() => {
  // Simulate fetching student data
  setTimeout(() => {
    student.value = {
      id: route.params.id,
      nama: 'Muhammad Fatih',
      nik: '3316012345678901',
      jk: 'laki-laki',
      noHp: '081234567890',
      tahunPendaftaran: '2025'
    }
  }, 500)
})

function onUpdate(formData: any) {
  console.log('Updating PAUD Student:', formData)
  alert('Data murid PAUD berhasil diperbarui!')
  navigateTo('/admin/paud/students')
}
</script>
