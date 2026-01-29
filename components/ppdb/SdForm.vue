<template>
  <div>
    <!-- Registration Form -->
    <form @submit.prevent="handleSubmit" class="space-y-8">
      <!-- Section 1: Data Diri -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="bg-brand-500 px-8 py-4">
          <h2 class="text-lg font-black text-black uppercase tracking-wider">Data Diri Murid</h2>
        </div>
        <div class="p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Lengkap Murid <span class="text-red-500">*</span></label>
              <input v-model="form.namaLengkap" type="text" required placeholder="Nama lengkap calon murid" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">NIK Murid <span class="text-red-500">*</span></label>
              <input v-model="form.nik" type="text" required placeholder="Masukkan 16 digit NIK" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Tempat Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tempatLahir" type="text" required placeholder="Kota kelahiran" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Tanggal Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tanggalLahir" type="date" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Jenis Kelamin <span class="text-red-500">*</span></label>
              <div class="flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="form.jenisKelamin" value="laki-laki" name="jk" class="w-4 h-4 text-brand-600" required />
                  <span class="text-sm text-gray-600">Laki-laki</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="form.jenisKelamin" value="perempuan" name="jk" class="w-4 h-4 text-brand-600" />
                  <span class="text-sm text-gray-600">Perempuan</span>
                </label>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Asal TK/RA <span class="text-red-500">*</span></label>
              <input v-model="form.asalSekolah" type="text" required placeholder="Nama TK/RA asal" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-bold text-gray-700">Alamat Tempat Tinggal (Sesuai KK) <span class="text-red-500">*</span></label>
            <textarea v-model="form.alamat" required rows="3" placeholder="Alamat lengkap calon murid" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"></textarea>
          </div>
        </div>
      </div>

      <!-- Section 2: Data Orang Tua -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="bg-brand-500 px-8 py-4">
          <h2 class="text-lg font-black text-black uppercase tracking-wider">Data Orang Tua / Wali</h2>
        </div>
        <div class="p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Lengkap Ayah <span class="text-red-500">*</span></label>
              <input v-model="form.namaAyah" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Pekerjaan Ayah <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanAyah" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Lengkap Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.namaIbu" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Pekerjaan Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanIbu" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">No. WhatsApp Wali <span class="text-red-500">*</span></label>
              <input v-model="form.noHp" type="tel" required placeholder="08123xxx" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Upload Berkas -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="bg-brand-500 px-8 py-4">
          <h2 class="text-lg font-black text-black uppercase tracking-wider">Upload Berkas (Opsional)</h2>
        </div>
        <div class="p-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Ijazah TK -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Scan/Foto Ijazah TK/RA</label>
              <div v-if="initialData.files?.ijazahTk && !form.files.ijazahTk" class="mb-2 p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 truncate">{{ initialData.files.ijazahTk }}</span>
                </div>
                <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
              </div>
              <input type="file" @change="handleFileUpload($event, 'ijazahTk')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all underline decoration-brand-200" />
            </div>
            <!-- Akta Kelahiran -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Scan/Foto Akta Kelahiran</label>
              <div v-if="initialData.files?.akta && !form.files.akta" class="mb-2 p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 truncate">{{ initialData.files.akta }}</span>
                </div>
                <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
              </div>
              <input type="file" @change="handleFileUpload($event, 'akta')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all underline decoration-brand-200" />
            </div>
            <!-- KK -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Scan/Foto Kartu Keluarga</label>
              <div v-if="initialData.files?.kk && !form.files.kk" class="mb-2 p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 truncate">{{ initialData.files.kk }}</span>
                </div>
                <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
              </div>
              <input type="file" @change="handleFileUpload($event, 'kk')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all underline decoration-brand-200" />
            </div>
          </div>
          <p class="text-[10px] text-gray-400 mt-6">Format file: JPG, PNG, atau PDF. Maksimal 2MB.</p>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center pt-4">
        <button 
          type="submit" 
          :disabled="isLoading"
          class="group px-16 py-5 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all shadow-xl shadow-brand-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
        >
          <span v-if="isLoading">Sedang Mengirim...</span>
          <span v-else>{{ submitLabel }}</span>
          <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </form>

    <!-- Success Modal -->
    <div v-if="showSuccess && useModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
        <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-2xl font-black text-gray-900 mb-2">Pendaftaran Diterima!</h3>
        <p class="text-gray-600 mb-8 text-sm">Terima kasih telah mendaftar di SDQTA An-Nawa. Panitia akan segera menghubungi Anda untuk tahapan selanjutnya.</p>
        <button @click="showSuccess = false" class="w-full py-4 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-600 shadow-lg shadow-brand-500/20 transition-all">
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const props = defineProps({
  submitLabel: {
    type: String,
    default: 'Kirim Formulir SPMB'
  },
  useModal: {
    type: Boolean,
    default: true
  },
  initialData: {
    type: Object,
    default: () => ({})
  },
  isEdit: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['success'])

const isLoading = ref(false)
const showSuccess = ref(false)

const form = reactive({
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
  files: {
    ijazahTk: null as File | null,
    akta: null as File | null,
    kk: null as File | null
  }
})

onMounted(() => {
  if (props.initialData && Object.keys(props.initialData).length > 0) {
    const data = props.initialData
    form.namaLengkap = data.name || data.namaLengkap || ''
    form.nik = data.nik || ''
    form.tempatLahir = data.tempatLahir || ''
    form.tanggalLahir = data.tanggalLahir || ''
    form.jenisKelamin = data.jenisKelamin || ''
    form.asalSekolah = data.class || data.asalSekolah || ''
    form.alamat = data.alamat || ''
    form.namaAyah = data.namaAyah || ''
    form.pekerjaanAyah = data.pekerjaanAyah || ''
    form.namaIbu = data.namaIbu || ''
    form.pekerjaanIbu = data.pekerjaanIbu || ''
    form.noHp = data.noHp || ''
  }
})

const handleFileUpload = (event: Event, type: keyof typeof form.files) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    form.files[type] = target.files[0]
  }
}

const handleSubmit = async () => {
  isLoading.value = true
  
  // Simulate API call
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('SPMB SDQTA Form data:', form)
    showSuccess.value = true
    emit('success', { ...form })
    
    // Reset form
    Object.assign(form, {
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
      files: {
        ijazahTk: null,
        akta: null,
        kk: null
      }
    })
  } catch (error) {
    console.error('Submission error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    padding: 0;
    margin: 0;
    cursor: pointer;
}
</style>
