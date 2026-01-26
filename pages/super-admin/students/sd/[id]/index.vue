<template>
  <div class="max-w-4xl mx-auto pb-12">
    <div class="mb-8">
      <NuxtLink to="/super-admin/students/sd" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Murid SD
      </NuxtLink>
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Edit Murid SDQTA</h1>
      <p class="text-gray-500 mt-2">Perbarui informasi profil dan data orang tua murid SD.</p>
    </div>

    <div v-if="loading" class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-brand-100 border-t-brand-600"></div>
      <p class="text-gray-500 font-medium">Memuat data murid...</p>
    </div>

    <div v-else class="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
      <form @submit.prevent="updateStudent" class="divide-y divide-gray-100">
        <!-- Section 1: Data Diri -->
        <div class="p-8 space-y-6">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-8 w-1 bg-brand-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Data Diri Murid</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Lengkap Murid <span class="text-red-500">*</span></label>
              <input v-model="form.namaLengkap" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">NIK Murid <span class="text-red-500">*</span></label>
              <input v-model="form.nik" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Tempat Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tempatLahir" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Tanggal Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tanggalLahir" type="date" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Jenis Kelamin <span class="text-red-500">*</span></label>
              <div class="flex gap-6 py-3">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" v-model="form.jenisKelamin" value="laki-laki" name="jk" class="w-4 h-4 text-brand-600 focus:ring-brand-500" required />
                  <span class="text-sm font-medium text-gray-600 group-hover:text-brand-600">Laki-laki</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" v-model="form.jenisKelamin" value="perempuan" name="jk" class="w-4 h-4 text-brand-600 focus:ring-brand-500" />
                  <span class="text-sm font-medium text-gray-600 group-hover:text-brand-600">Perempuan</span>
                </label>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Asal TK/RA <span class="text-red-500">*</span></label>
              <input v-model="form.asalSekolah" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-bold text-gray-700">Alamat Tempat Tinggal (Sesuai KK) <span class="text-red-500">*</span></label>
            <textarea v-model="form.alamat" required rows="3" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium resize-none"></textarea>
          </div>
        </div>

        <!-- Section 2: Data Orang Tua -->
        <div class="p-8 space-y-6">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-8 w-1 bg-blue-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Data Orang Tua / Wali</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Lengkap Ayah <span class="text-red-500">*</span></label>
              <input v-model="form.namaAyah" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Pekerjaan Ayah <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanAyah" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Lengkap Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.namaIbu" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Pekerjaan Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanIbu" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">No. WhatsApp Wali <span class="text-red-500">*</span></label>
              <input v-model="form.noHp" type="tel" required placeholder="08123xxx" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
          </div>
        </div>

        <div class="p-8 bg-gray-50/30 flex justify-between items-center gap-4">
          <button type="button" @click="deleteStudent" class="text-sm font-bold text-red-500 hover:text-red-700 transition flex items-center gap-1.5 px-4 py-2 hover:bg-red-50 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Hapus Data
          </button>
          
          <div class="flex items-center gap-4">
            <NuxtLink to="/super-admin/students/sd" class="px-6 py-3 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">Batal</NuxtLink>
            <button type="submit" class="px-8 py-3 bg-brand-600 text-white font-extrabold text-sm rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 active:scale-95 flex items-center gap-2">
              Simpan Perubahan
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

definePageMeta({ layout: 'super-admin' })
const router = useRouter()
const route = useRoute()

const loading = ref(true)

const form = reactive({
  id: '',
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
  noHp: ''
})

onMounted(() => {
  setTimeout(() => {
    Object.assign(form, {
      id: route.params.id,
      namaLengkap: 'Rayyan Al-Ghifari',
      nik: '3316012345678001',
      tempatLahir: 'Blora',
      tanggalLahir: '2017-03-12',
      jenisKelamin: 'laki-laki',
      asalSekolah: 'TK IT An-Nawa',
      alamat: 'Jln. Gajah Mada No. 88, Blora',
      namaAyah: 'Haryono',
      pekerjaanAyah: 'PNS',
      namaIbu: 'Endang Suci',
      pekerjaanIbu: 'Wiraswasta',
      noHp: '081234567990'
    })
    loading.value = false
  }, 500)
})

function updateStudent() {
  console.log('Updating SD Student:', form)
  alert('Data murid SDQTA berhasil diperbarui!')
  router.push('/super-admin/students/sd')
}

function deleteStudent() {
  if (confirm('Yakin hapus data murid ini secara permanen?')) {
    alert('Data dihapus.')
    router.push('/super-admin/students/sd')
  }
}
</script>
