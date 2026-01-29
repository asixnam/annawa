<template>
  <SantriStudentDetail 
    :student="santri" 
    :loading="loading"
    title="Detail Profil Santri"
  >
    <template #back-link>
      <NuxtLink to="/admin/pondok/students" class="group flex items-center text-gray-500 hover:text-green-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Santri Pondok
      </NuxtLink>
    </template>
    <template #actions>
      <NuxtLink :to="`/admin/pondok/students/${route.params.id}`" class="px-6 py-3 bg-brand-600 text-black font-black text-sm rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 active:scale-95 flex items-center gap-2 uppercase tracking-widest text-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Edit Data
      </NuxtLink>
    </template>
  </SantriStudentDetail>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import SantriStudentDetail from '~/components/students/SantriStudentDetail.vue'

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
const loading = ref(true)
const santri = reactive({
  namaLengkap: '',
  nisn: '',
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
    ktp: 'ktp_ayah_zaidan.pdf',
    kk: 'kk_zaidan.jpg',
    akta: 'akta_zaidan.pdf',
    ijazah: 'ijazah_sd_zaidan.pdf',
    foto: 'foto_zaidan.jpg'
  } as Record<string, string>
})

onMounted(() => {
  setTimeout(() => {
    Object.assign(santri, {
      namaLengkap: 'Zaidan Al-Fatih',
      nisn: '0123456789',
      tempatLahir: 'Blora',
      tanggalLahir: '2012-05-15',
      jenisKelamin: 'putra',
      asalSekolah: 'SD Negeri 1 Blora',
      alamat: 'Jln. Gajah Mada No. 12, Blora, Jawa Tengah',
      namaAyah: 'Ahmad Muzaki',
      pekerjaanAyah: 'Wiraswasta',
      namaIbu: 'Laila Husna',
      pekerjaanIbu: 'Guru',
      noHp: '081234567890',
      tahunPendaftaran: '2025'
    })
    loading.value = false
  }, 800)
})
</script>
