<template>
  <PaudStudentDetail 
    :student="student" 
    :loading="loading"
  >
    <template #back-link>
      <NuxtLink to="/super-admin/students/paud" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Murid PAUD
      </NuxtLink>
    </template>
    <template #actions>
      <NuxtLink :to="`/super-admin/students/paud/${route.params.id}`" class="px-6 py-3 bg-brand-600 text-black font-black text-sm rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 active:scale-95 flex items-center gap-2 uppercase tracking-widest text-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Edit Data
      </NuxtLink>
    </template>
  </PaudStudentDetail>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '#app'
import PaudStudentDetail from '~/components/students/PaudStudentDetail.vue'

definePageMeta({ layout: 'super-admin' })
const route = useRoute()

const loading = ref(true)
const student = reactive({} as any)

onMounted(async () => {
  try {
    const data: any = await $fetch(`/api/students/${route.params.id}`)
    Object.assign(student, {
      namaLengkap: data.name,
      nik: data.nik,
      tempatLahir: data.birth_place,
      tanggalLahir: data.birth_date ? new Date(data.birth_date).toISOString().split('T')[0] : '',
      jenisKelamin: data.gender === 'laki-laki' ? 'putra' : (data.gender === 'perempuan' ? 'putri' : data.gender),
      anakKe: data.child_order,
      alamat: data.address,
      namaAyah: data.father_name,
      pekerjaanAyah: data.father_job,
      namaIbu: data.mother_name,
      pekerjaanIbu: data.mother_job,
      noHp: data.phone,
      tahunPendaftaran: data.registration_year,
      files: data.files || {}
    })
  } catch (e) {
    // Handle error
  } finally {
    loading.value = false
  }
})
</script>
