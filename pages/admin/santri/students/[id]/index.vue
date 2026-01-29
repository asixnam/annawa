<template>
  <SantriStudentEdit
    :initial-data="form"
    :is-edit="true"
    :loading="loading"
    title="Edit Data Santri"
    @success="onUpdate"
    @cancel="() => navigateTo('/admin/santri/students')"
  >
    <template #back-link>
      <NuxtLink to="/admin/santri/students" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Santri
      </NuxtLink>
    </template>
  </SantriStudentEdit>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import SantriStudentEdit from '~/components/students/SantriStudentEdit.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:santri') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const route = useRoute()
const loading = ref(true)
const form = reactive({} as any)

onMounted(() => {
  setTimeout(() => {
    Object.assign(form, {
      id: route.params.id,
      namaLengkap: 'Abdullah Umam',
      nisn: '1234567890',
      tempatLahir: 'Blora',
      tanggalLahir: '2008-05-15',
      jenisKelamin: 'putra',
      asalSekolah: 'SDN 1 Blora',
      alamat: 'Jln. Sunan Kalijaga No. 12, Blora',
      namaAyah: 'H. Ahmad',
      pekerjaanAyah: 'Pedagang',
      namaIbu: 'Hj. Aminah',
      pekerjaanIbu: 'Ibu Rumah Tangga',
      noHp: '081234567890'
    })
    loading.value = false
  }, 500)
})

function onUpdate(formData: any) {
  console.log('Updating Santri:', formData)
  alert('Data santri berhasil diperbarui!')
  navigateTo('/admin/santri/students')
}
</script>
