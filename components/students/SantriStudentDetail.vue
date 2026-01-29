<template>
  <div class="max-w-4xl mx-auto pb-12 text-left">
    <!-- Header -->
    <div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <slot name="back-link"></slot>
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">{{ title }}</h1>
        <p class="text-gray-500 mt-2">Pratinjau lengkap profil dan dokumen santri Pondok Pesantren An-Nawa.</p>
      </div>
      <div class="flex gap-3">
        <button @click="printDetail" class="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-2xl hover:bg-gray-50 transition-all shadow-sm active:scale-95 flex items-center gap-2 uppercase tracking-widest text-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Cetak Profil
        </button>
        <slot name="actions"></slot>
      </div>
    </div>

    <div v-if="loading" class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-brand-100 border-t-brand-600"></div>
      <p class="text-gray-500 font-medium">Memuat data santri...</p>
    </div>

    <div v-else class="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
      <div class="divide-y divide-gray-100">
        <!-- Section 1: Data Diri -->
        <div class="p-8 space-y-6">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-8 w-1 bg-brand-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Data Diri Santri</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Nama Lengkap</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.namaLengkap || student.name || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">NISN</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.nisn || '-' }}</span>
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
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Tahun Pendaftaran</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.tahunPendaftaran || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2 md:col-span-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Asal Sekolah</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.asalSekolah || '-' }}</span>
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
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Nama Bapak</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.namaAyah || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Pekerjaan Bapak</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.pekerjaanAyah || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Nama Ibu</label>
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
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="file in filesList" :key="file.key" class="space-y-2">
              <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{{ file.label }}</label>
              <div @click="openPreview(file.label, student.files?.[file.key])" class="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl flex items-center justify-between group hover:border-brand-500 hover:bg-brand-50/30 transition-all cursor-pointer">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="h-8 w-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-brand-500 transition-colors shadow-sm shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span class="text-[10px] font-bold text-gray-600 truncate">{{ student.files?.[file.key] || 'Tidak diunggah' }}</span>
                </div>
                <div v-if="student.files?.[file.key]" class="text-brand-600">
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
           <div class="text-center p-12 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-sm">
              <div class="h-16 w-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500 mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-1">Pratinjau Berkas</h4>
              <p class="text-sm text-gray-500">Berkas pendaftaran dapat dilihat setelah diunduh oleh admin.</p>
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
import { reactive } from 'vue'

defineProps({
  student: {
    type: Object,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Detail Santri'
  }
})

const filesList = [
  { key: 'ktp', label: 'Scan KTP Orang Tua' },
  { key: 'kk', label: 'Scan Kartu Keluarga' },
  { key: 'akta', label: 'Scan Akta Kelahiran' },
  { key: 'ijazah', label: 'Scan Ijazah Terakhir' },
  { key: 'foto', label: 'Pas Foto Santri' }
]

const preview = reactive({
  show: false,
  title: '',
  filename: ''
})

const formatDate = (date: string) => {
  if (!date) return '-'
  try {
    return new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(date))
  } catch (e) {
    return date
  }
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
@media print {
  .max-w-4xl { max-width: 100%; margin: 0; padding: 0.5in; }
  button, slot[name="actions"] { display: none !important; }
  .bg-white { border: none !important; box-shadow: none !important; }
  .shadow-xl, .shadow-sm { box-shadow: none !important; }
  .bg-gray-50\/50 { background-color: white !important; border: 1px solid #e5e7eb !important; }
}
</style>
