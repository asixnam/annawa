<template>
  <div class="max-w-4xl mx-auto pb-12">
    <!-- Header -->
    <div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <NuxtLink to="/super-admin/students/paud" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Daftar Murid PAUD
        </NuxtLink>
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Detail Murid PAUD</h1>
        <p class="text-gray-500 mt-2">Pratinjau lengkap profil dan dokumen murid PAUD IT An-Nawa.</p>
      </div>
      <div class="flex gap-3">
        <button @click="printDetail" class="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-2xl hover:bg-gray-50 transition-all shadow-sm active:scale-95 flex items-center gap-2 uppercase tracking-widest text-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Cetak Profil
        </button>
        <NuxtLink :to="`/super-admin/students/paud/${route.params.id}`" class="px-6 py-3 bg-brand-600 text-black font-black text-sm rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 active:scale-95 flex items-center gap-2 uppercase tracking-widest text-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit Data
        </NuxtLink>
      </div>
    </div>

    <div v-if="loading" class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-brand-100 border-t-brand-600"></div>
      <p class="text-gray-500 font-medium">Memuat data murid...</p>
    </div>

    <div v-else class="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden text-left">
      <div class="divide-y divide-gray-100">
        <!-- Section 1: Data Diri -->
        <div class="p-8 space-y-6">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-8 w-1 bg-brand-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Data Diri Anak</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Nama Lengkap Anak</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.namaLengkap || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">NIK Anak</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.nik || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Tempat Lahir</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.tempatLahir || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Tanggal Lahir</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ formatDate(student.tanggalLahir) }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Jenis Kelamin</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span class="capitalize">{{ student.jenisKelamin || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Anak Ke-</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.anakKe || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2 md:col-span-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Alamat Lengkap</label>
              <div class="w-full px-4 py-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-start min-h-[100px] shadow-sm">
                <span>{{ student.alamat || '-' }}</span>
              </div>
            </div>
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
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Nama Lengkap Ayah</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.namaAyah || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Pekerjaan Ayah</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.pekerjaanAyah || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Nama Lengkap Ibu</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.namaIbu || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Pekerjaan Ibu</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.pekerjaanIbu || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2 md:col-span-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">No. WhatsApp Wali</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm text-brand-600">
                <span class="font-bold font-mono">{{ student.noHp || '-' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Berkas Persyaratan -->
        <div class="p-8 space-y-6">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-8 w-1 bg-orange-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Berkas Persyaratan</h2>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="file in filesList" :key="file.key" class="space-y-2">
              <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{{ file.label }}</label>
              <div @click="openPreview(file.label, student.files[file.key])" class="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl flex items-center justify-between group hover:border-brand-500 hover:bg-brand-50/30 transition-all cursor-pointer">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="h-8 w-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-brand-500 transition-colors shadow-sm shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span class="text-[10px] font-bold text-gray-600 truncate">{{ student.files[file.key] || 'Tidak diunggah' }}</span>
                </div>
                <div v-if="student.files[file.key]" class="text-brand-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <div v-if="preview.show" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-gray-900/60 backdrop-blur-md transition-all">
      <div class="bg-white rounded-[2rem] w-full max-w-4xl max-h-full overflow-hidden shadow-2xl flex flex-col">
        <div class="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h3 class="text-xl font-black text-gray-900">{{ preview.title }}</h3>
            <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{{ preview.filename }}</p>
          </div>
          <button @click="preview.show = false" class="h-12 w-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all group shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="flex-1 overflow-y-auto p-8 bg-gray-100/30 flex items-center justify-center min-h-[400px]">
          <div v-if="preview.filename.endsWith('.pdf')" class="w-full max-w-2xl bg-white aspect-[5/7] shadow-lg rounded-xl border border-gray-200 flex flex-col items-center justify-center p-12 text-center">
            <div class="h-20 w-16 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="text-lg font-bold text-gray-900">PDF Document</h4>
            <div class="w-full h-2 bg-gray-100 rounded-full mt-6 overflow-hidden">
              <div class="h-full bg-brand-500 w-1/3 animate-[progress_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
          <div v-else class="relative p-4 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 font-bold overflow-hidden">
             <div class="w-full max-w-lg aspect-[3/4] bg-gray-50 rounded-[2rem] flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L21 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
             </div>
          </div>
        </div>

        <div class="p-6 border-t border-gray-100 flex items-center justify-end gap-3 bg-white">
          <button @click="preview.show = false" class="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">Tutup</button>
          <button class="px-8 py-3 bg-gray-900 text-white font-black text-sm rounded-2xl hover:bg-black transition-all shadow-xl shadow-gray-900/20 active:scale-95 flex items-center gap-2 uppercase tracking-widest text-[10px]">
            Unduh Berkas
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'

definePageMeta({ layout: 'super-admin' })
const route = useRoute()

const loading = ref(true)
const student = reactive({
  namaLengkap: '',
  nik: '',
  tempatLahir: '',
  tanggalLahir: '',
  jenisKelamin: '',
  anakKe: '',
  alamat: '',
  namaAyah: '',
  pekerjaanAyah: '',
  namaIbu: '',
  pekerjaanIbu: '',
  noHp: '',
  tahunPendaftaran: '',
  files: {
    akta: 'akta_muhammad_fatih.pdf',
    kk: 'kk_budi_santoso.jpg'
  } as Record<string, string>
})

const filesList = [
  { key: 'akta', label: 'Scan Akta Kelahiran' },
  { key: 'kk', label: 'Scan Kartu Keluarga' }
]

const preview = reactive({
  show: false,
  title: '',
  filename: ''
})

onMounted(() => {
  setTimeout(() => {
    Object.assign(student, {
      namaLengkap: 'Muhammad Fatih',
      nik: '3316012345678901',
      tempatLahir: 'Blora',
      tanggalLahir: '2019-08-20',
      jenisKelamin: 'laki-laki',
      anakKe: 1,
      alamat: 'Jln. Pemuda No. 45, Blora, Jawa Tengah',
      namaAyah: 'Budi Santoso',
      pekerjaanAyah: 'Guru',
      namaIbu: 'Siti Maryam',
      pekerjaanIbu: 'Perawat',
      noHp: '081234567890',
      tahunPendaftaran: '2025'
    })
    loading.value = false
  }, 800)
})

const formatDate = (date: string) => {
  if (!date) return '-'
  return new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(date))
}

const openPreview = (title: string, filename: string) => {
  if (!filename) return
  preview.title = title
  preview.filename = filename
  preview.show = true
}

const printDetail = () => { window.print() }
</script>

<style scoped>
@keyframes progress {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}

@media print {
  .max-w-4xl { max-width: 100%; margin: 0; padding: 0.5in; }
  .NuxtLink, button, .mb-8 > div:last-child { display: none !important; }
  .bg-white { border: none !important; box-shadow: none !important; }
  .shadow-xl, .shadow-sm { box-shadow: none !important; }
  .bg-gray-50\/50 { background-color: white !important; border: 1px solid #e5e7eb !important; }
}
</style>
