<template>
  <div>
    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">{{ error }}</span>
    </div>
    <div v-if="loading" class="text-center py-4">Memuat data...</div>
    <SdStudentList 
       v-else
      :students="students"
      @create="() => navigateTo('/admin/sdqta/students/create')"
      @detail="(s: any) => navigateTo('/admin/sdqta/students/' + s.id + '/detail')"
      @edit="(s: any) => navigateTo('/admin/sdqta/students/' + s.id)"
      @delete="deleteStudent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import SdStudentList from '~/components/students/SdStudentList.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:sdqta') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const students = ref<any[]>([])
const loading = ref(true)
const error = ref('')

async function fetchStudents() {
  loading.value = true
  error.value = ''
  try {
    const data: any[] = await $fetch('/api/students?unit_id=SD')
    students.value = data.map(s => ({
      ...s,
      namaLengkap: s.name,
      name: s.name,
      jenisKelamin: s.gender,
      jk: s.gender,
      tahunPendaftaran: s.registration_year?.toString() || '-',
      noHp: s.phone,
      nisn: s.nis,
      nik: s.nik,
      id: s.id
    }))
  } catch (e: any) {
    console.error('Failed to fetch students', e)
    error.value = e.message || 'Gagal memuat data murid.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchStudents()
})

async function deleteStudent(id: number) {
  if (confirm('Apakah Anda yakin ingin menghapus data murid ini?')) {
    try {
      await $fetch(`/api/students/${id}`, { method: 'DELETE' })
      students.value = students.value.filter(s => s.id !== id)
      alert('Data murid berhasil dihapus')
    } catch (e) {
      console.error('Failed to delete', e)
      alert('Gagal menghapus data murid.')
    }
  }
}
</script>
