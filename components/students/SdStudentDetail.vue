<template>
  <div class="max-w-4xl mx-auto pb-12 text-left">
    <!-- Header -->
    <div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <slot name="back-link"></slot>
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">{{ title }}</h1>
        <p class="text-gray-500 mt-2">Pratinjau lengkap profil dan dokumen murid SDQTA An-Nawa.</p>
      </div>
      <div class="flex gap-3">
        <button @click="printDetail" class="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-2xl hover:bg-gray-50 transition-all shadow-sm active:scale-95 flex items-center gap-2 uppercase tracking-widest text-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        </button>
        <slot name="actions"></slot>
      </div>
    </div>

    <div v-if="loading" class="bg-white rounded-1xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-blue-100 border-t-blue-600"></div>
      <p class="text-gray-500 font-medium">Memuat data murid...</p>
    </div>

    <div v-else class="bg-white rounded-1xl shadow-xl border border-gray-100 overflow-hidden">
      <div class="divide-y divide-gray-100">
        <!-- Section 1: Data Diri -->
        <div class="p-8 space-y-6">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-8 w-1 bg-blue-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Data Diri Murid</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Nama Lengkap</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.namaLengkap || student.name || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">NIK</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.nik || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Tempat Lahir</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.birth_place || student.tempatLahir || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Tanggal Lahir</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ formatDate(student.birth_date || student.tanggalLahir) }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Jenis Kelamin</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span class="capitalize">{{ student.gender || student.jenisKelamin || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Tahun Pendaftaran</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.registration_year || student.tahunPendaftaran || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2 md:col-span-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Asal TK/RA</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.school_origin || student.asalSekolah || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2 md:col-span-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Alamat Lengkap</label>
              <div class="w-full px-4 py-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-start min-h-[100px] shadow-sm">
                <span>{{ student.address || student.alamat || '-' }}</span>
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
                <span>{{ student.father_name || student.namaAyah || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Pekerjaan Bapak</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.father_job || student.pekerjaanAyah || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Nama Ibu</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.mother_name || student.namaIbu || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">Pekerjaan Ibu</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm">
                <span>{{ student.mother_job || student.pekerjaanIbu || '-' }}</span>
              </div>
            </div>

            <div class="space-y-2 md:col-span-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">No. WhatsApp Wali</label>
              <div class="w-full px-4 border border-gray-200 rounded-2xl bg-gray-50/50 font-medium text-gray-800 flex items-center h-[52px] shadow-sm text-blue-600">
                <span class="font-bold font-mono">{{ student.phone || student.noHp || '-' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Berkas Persyaratan -->
        <!-- Section 3: Berkas Persyaratan -->
        <div class="p-8 space-y-12">
          <div class="flex items-center gap-3">
            <div class="h-8 w-1 bg-orange-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Berkas Persyaratan</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            <div v-for="file in filesList" :key="file.key" class="space-y-4">
              <div class="flex items-center justify-between px-2">
                <div>
                  <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{{ file.label }}</label>
                  <p class="text-xs font-bold text-gray-900 truncate max-w-[200px]" :title="student.files?.[file.key]">
                    {{ student.files?.[file.key] || 'Belum di-upload' }}
                  </p>
                </div>
                <div v-if="student.files?.[file.key]" class="flex items-center gap-2">
                  <a :href="student.files[file.key]" target="_blank" class="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="Buka di Tab Baru">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a :href="student.files[file.key]" :download="student.files[file.key].split('/').pop()" class="h-10 w-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-sm" title="Unduh Berkas">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Preview Area -->
              <div class="relative bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 shadow-inner aspect-[3/4] group ring-1 ring-gray-200">
                <template v-if="student.files?.[file.key]">
                  <!-- PDF Preview -->
                  <iframe 
                    v-if="student.files[file.key].toLowerCase().endsWith('.pdf')"
                    :src="student.files[file.key]" 
                    class="w-full h-full border-none"
                  ></iframe>
                  <!-- Image Preview -->
                  <div v-else class="w-full h-full flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm">
                    <img 
                      :src="student.files[file.key]" 
                      class="max-w-full max-h-full object-contain rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]" 
                      alt="Preview" 
                    />
                  </div>
                </template>
                <!-- Empty State -->
                <div v-else class="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-gray-50/50">
                  <div class="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-gray-200 mb-6 shadow-sm border border-gray-100/50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p class="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Belum Unggah Berkas</p>
                </div>

                <!-- Hover Overlay for interaction -->
                <div v-if="student.files?.[file.key]" class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/50 flex items-center justify-center">
                    <span class="text-[10px] font-black text-gray-900 uppercase tracking-widest">Pratinjau Dokumen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    default: 'Detail Murid SDQTA'
  }
})

const filesList = [
  { key: 'ijazahTk', label: 'Scan Ijazah TK/RA' },
  { key: 'akta', label: 'Scan Akta Kelahiran' },
  { key: 'kk', label: 'Scan Kartu Keluarga' }
]

const formatDate = (date: string) => {
  if (!date) return '-'
  try {
    return new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(date))
  } catch (e) {
    return date
  }
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
