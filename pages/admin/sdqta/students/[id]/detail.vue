<template>
  <SdStudentDetail 
    :student="student" 
    :loading="loading"
    title="Detail Murid SDQTA"
  >
    <template #back-link>
      <NuxtLink to="/admin/sdqta/students" class="group flex items-center text-gray-500 hover:text-blue-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Murid SDQTA
      </NuxtLink>
    </template>
    <template #actions>
      <NuxtLink :to="`/admin/sdqta/students/${route.params.id}`" class="px-6 py-3 bg-blue-600 text-white font-black text-sm rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center gap-2 uppercase tracking-widest text-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Edit Data
      </NuxtLink>
    </template>
  </SdStudentDetail>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import SdStudentDetail from '~/components/students/SdStudentDetail.vue'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:sd') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const route = useRoute()
const loading = ref(true)
const student = reactive({
  namaLengkap: '',
  nik: '',
  tempatLahir: '',
  tanggalLahir: '',
  jenisKelamin: '',
  asalSekolah: '',
  alamat: '',
  namaAyah: '',
  pekerjaanAyah: '',
  namaIbu: '',
  pekerjaanIbu: '',
  noHp: '',
  tahunPendaftaran: '',
  files: {
    akta: 'akta_rayyan_ghifari.pdf',
    kk: 'kk_hendra_wijaya.jpg'
  } as Record<string, string>
})

onMounted(() => {
  setTimeout(() => {
    Object.assign(student, {
      namaLengkap: 'Rayyan Al-Ghifari',
      nik: '3316012345678001',
      tempatLahir: 'Blora',
      tanggalLahir: '2017-03-12',
      jenisKelamin: 'laki-laki',
      asalSekolah: 'TK IT An-Nawa',
      alamat: 'Jln. Gajah Mada No. 88, Blora, Jawa Tengah',
      namaAyah: 'Haryono',
      pekerjaanAyah: 'PNS',
      namaIbu: 'Endang Suci',
      pekerjaanIbu: 'Wiraswasta',
      noHp: '081234567990',
      tahunPendaftaran: '2025'
    })
    loading.value = false
  }, 800)
})
</script>
