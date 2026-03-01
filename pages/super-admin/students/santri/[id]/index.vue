<template>
  <SantriStudentEdit
    :initial-data="form"
    :is-edit="true"
    :loading="loading"
    title="Edit Data Santri"
    @success="updateStudent"
    @cancel="() => router.push('/super-admin/students/santri')"
  >
    <template #back-link>
      <NuxtLink to="/super-admin/students/santri" class="h-10 w-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-600 hover:border-brand-100 hover:bg-brand-50 transition-all group shadow-sm mb-4" title="Kembali ke Daftar Santri">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </NuxtLink>
    </template>
    <template #actions>
      <button @click="deleteStudent" class="h-11 w-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-sm group" title="Hapus Santri Secara Permanen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </template>
  </SantriStudentEdit>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useFetch } from '#app'
import SantriStudentEdit from '~/components/students/SantriStudentEdit.vue'

definePageMeta({ layout: 'super-admin' })
const router = useRouter()
const route = useRoute()

const loading = ref(true)
const form = ref<any>(null)

onMounted(async () => {
  try {
    const data: any = await $fetch(`/api/students/${route.params.id}`)
    form.value = data
  } catch (e) {
    alert('Gagal memuat data')
    router.push('/super-admin/students/santri')
  } finally {
    loading.value = false
  }
})

async function updateStudent(formData: any) {
  alert('Data santri berhasil diperbarui!')
  router.push('/super-admin/students/santri')
}

async function deleteStudent() {
  if (confirm('Yakin hapus data santri ini secara permanen?')) {
    try {
      await $fetch(`/api/students/${route.params.id}`, { method: 'DELETE' })
      alert('Data dihapus.')
      router.push('/super-admin/students/santri')
    } catch (e: any) {
      alert('Gagal menghapus data: ' + e.message)
    }
  }
}
</script>
