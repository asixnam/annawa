<template>
  <div class="max-w-4xl mx-auto pb-12">
    <div class="mb-8">
      <NuxtLink to="/super-admin/students/santri" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Santri
      </NuxtLink>
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Tambah Santri Baru (Pondok)</h1>
      <p class="text-gray-500 mt-2">Daftarkan santri baru ke sistem Pondok Pesantren.</p>
    </div>

    <div class="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
      <form @submit.prevent="saveStudent" class="divide-y divide-gray-100">
        <!-- Section 1: Data Diri -->
        <div class="p-8 space-y-6">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-8 w-1 bg-brand-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Data Diri Santri</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Lengkap <span class="text-red-500">*</span></label>
              <input v-model="form.namaLengkap" type="text" required placeholder="Sesuai Akta Kelahiran/Ijazah" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">NISN</label>
              <input v-model="form.nisn" type="text" placeholder="Masukkan 10 digit NISN" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Tempat Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tempatLahir" type="text" required placeholder="Contoh: Blora" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Tanggal Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tanggalLahir" type="date" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Jenis Kelamin <span class="text-red-500">*</span></label>
              <div class="flex gap-6 py-3">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" v-model="form.jenisKelamin" value="putra" name="jk" class="w-4 h-4 text-brand-600 focus:ring-brand-500" required />
                  <span class="text-sm font-medium text-gray-600 group-hover:text-brand-600">Putra</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" v-model="form.jenisKelamin" value="putri" name="jk" class="w-4 h-4 text-brand-600 focus:ring-brand-500" />
                  <span class="text-sm font-medium text-gray-600 group-hover:text-brand-600">Putri</span>
                </label>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Tahun Masuk</label>
              <input :value="form.tahunPendaftaran" type="text" disabled class="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl font-bold text-gray-500 cursor-not-allowed" />
              <p class="text-[10px] text-gray-400">Tahun masuk diatur otomatis berdasarkan tanggal pendaftaran hari ini.</p>
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-bold text-gray-700">Alamat Lengkap <span class="text-red-500">*</span></label>
            <textarea v-model="form.alamat" required rows="3" placeholder="Jalan, Desa/Kelurahan, RT/RW, Kecamatan, Kabupaten" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium resize-none"></textarea>
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
              <label class="text-sm font-bold text-gray-700">Nama Bapak <span class="text-red-500">*</span></label>
              <input v-model="form.namaAyah" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Pekerjaan Bapak <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanAyah" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.namaIbu" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Pekerjaan Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanIbu" type="text" required class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">No. HP / WhatsApp <span class="text-red-500">*</span></label>
              <input v-model="form.noHp" type="tel" required placeholder="Contoh: 081234567890" class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" />
            </div>
          </div>
        </div>

        <!-- Section 3: Upload Berkas -->
        <div class="p-8 space-y-6">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-8 w-1 bg-orange-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Upload Berkas (Opsional)</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="fileType in fileTypes" :key="fileType.key" class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-tighter">{{ fileType.label }}</label>
              <div class="relative group">
                <input type="file" @change="handleFileUpload($event, fileType.key)" accept="image/*,.pdf" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <div class="w-full px-4 py-6 bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 group-hover:border-brand-500 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span class="text-[10px] font-bold text-gray-500 group-hover:text-brand-600 truncate max-w-full text-center">
                    {{ form.files[fileType.key] ? form.files[fileType.key].name : 'Klik atau seret file' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p class="text-[10px] text-gray-400">Format: JPG, PNG, PDF. Maks 2MB/file.</p>
        </div>

        <div class="p-8 bg-gray-50/30 flex justify-end items-center gap-4">
          <NuxtLink to="/super-admin/students/santri" class="px-6 py-3 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">Batal</NuxtLink>
          <button type="submit" class="px-8 py-3 bg-brand-600 text-black font-black text-sm rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 active:scale-95 flex items-center gap-2 uppercase tracking-widest">
            Simpan Data Santri
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: 'super-admin' })
const router = useRouter()

const fileTypes = [
  { key: 'ktp', label: 'Scan KTP Orang Tua' },
  { key: 'kk', label: 'Scan Kartu Keluarga' },
  { key: 'akta', label: 'Scan Akta Kelahiran' },
  { key: 'ijazah', label: 'Scan Ijazah Terakhir' },
  { key: 'foto', label: 'Pas Foto Santri' }
]

const form = reactive({
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
  tahunPendaftaran: new Date().getFullYear().toString(),
  files: {
    ktp: null as File | null,
    kk: null as File | null,
    akta: null as File | null,
    ijazah: null as File | null,
    foto: null as File | null
  } as Record<string, File | null>
})

const handleFileUpload = (event: Event, type: string) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    form.files[type] = target.files[0]
  }
}

function saveStudent() {
  console.log('Saving Santri:', form)
  alert('Data santri baru berhasil ditambahkan!')
  router.push('/super-admin/students/santri')
}
</script>
