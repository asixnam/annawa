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
      <NuxtLink to="/super-admin/students/santri" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Santri
      </NuxtLink>
    </template>
    <template #footer>
      <div class="p-8 border-t border-gray-50 flex justify-center">
        <button @click="deleteStudent" class="text-sm font-bold text-red-500 hover:text-red-700 transition flex items-center gap-1.5 px-6 py-3 bg-red-50 rounded-2xl border border-red-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Hapus Santri Secara Permanen
        </button>
      </div>
    </template>
  </SantriStudentEdit>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SantriStudentEdit from '../../../../../components/students/SantriStudentEdit.vue'

definePageMeta({ layout: 'super-admin' })
const router = useRouter()
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

function updateStudent(formData: any) {
  console.log('Updating Santri:', formData)
  alert('Data santri berhasil diperbarui!')
  router.push('/super-admin/students/santri')
}

function deleteStudent() {
  if (confirm('Yakin hapus data santri ini secara permanen?')) {
    alert('Data dihapus.')
    router.push('/super-admin/students/santri')
  }
}
</script>
