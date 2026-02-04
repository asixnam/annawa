<template>
  <div class="transition-colors duration-300">
    <!-- Registration Form -->
    <form @submit.prevent="handleSubmit" class="space-y-8">
      <!-- Section 1: Data Diri -->
      <div class="bg-card rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800/40 overflow-hidden transition-colors duration-300">
        <div class="bg-brand-500 px-8 py-4">
          <h2 class="text-lg font-black text-black uppercase tracking-wider">Data Diri Anak</h2>
        </div>
        <div class="p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">Nama Lengkap Anak <span class="text-red-500">*</span></label>
              <input v-model="form.namaLengkap" type="text" required placeholder="Nama lengkap calon murid" class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">NIK Anak <span class="text-red-500">*</span></label>
              <input v-model="form.nik" type="text" required placeholder="Sesuai Kartu Keluarga" class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">Tempat Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tempatLahir" type="text" required placeholder="Kota kelahiran" class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">Tanggal Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tanggalLahir" type="date" required class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">Jenis Kelamin <span class="text-red-500">*</span></label>
              <div class="flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" v-model="form.jenisKelamin" value="laki-laki" name="jk" class="w-4 h-4 text-brand-600 focus:ring-brand-500 dark:bg-gray-800 dark:border-gray-700" required />
                  <span class="text-sm text-gray-600 dark:text-gray-400 group-hover:text-main">Laki-laki</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" v-model="form.jenisKelamin" value="perempuan" name="jk" class="w-4 h-4 text-brand-600 focus:ring-brand-500 dark:bg-gray-800 dark:border-gray-700" />
                  <span class="text-sm text-gray-600 dark:text-gray-400 group-hover:text-main">Perempuan</span>
                </label>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">Anak Ke- <span class="text-red-500">*</span></label>
              <input v-model="form.anakKe" type="number" required placeholder="Contoh: 1" class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-bold text-main">Alamat Lengkap <span class="text-red-500">*</span></label>
            <textarea v-model="form.alamat" required rows="3" placeholder="Alamat tinggal saat ini" class="w-full px-4 py-3 rounded-xl theme-input resize-none"></textarea>
          </div>
        </div>
      </div>

      <!-- Section 2: Data Orang Tua -->
      <div class="bg-card rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800/40 overflow-hidden transition-colors duration-300">
        <div class="bg-brand-500 px-8 py-4">
          <h2 class="text-lg font-black text-black uppercase tracking-wider">Data Orang Tua / Wali</h2>
        </div>
        <div class="p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">Nama Lengkap Ayah <span class="text-red-500">*</span></label>
              <input v-model="form.namaAyah" type="text" required class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">Pekerjaan Ayah <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanAyah" type="text" required class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">Nama Lengkap Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.namaIbu" type="text" required class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">Pekerjaan Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanIbu" type="text" required class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-main">No. WhatsApp Wali <span class="text-red-500">*</span></label>
              <input v-model="form.noHp" type="tel" required placeholder="08123xxx" class="w-full px-4 py-3 rounded-xl theme-input" />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Upload Berkas -->
      <div class="bg-card rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800/40 overflow-hidden transition-colors duration-300">
        <div class="bg-brand-500 px-8 py-4">
          <h2 class="text-lg font-black text-black uppercase tracking-wider">Upload Berkas (Opsional)</h2>
        </div>
        <div class="p-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Akta Kelahiran -->
            <div class="space-y-3">
              <label class="text-sm font-bold text-main">Scan/Foto Akta Kelahiran</label>
              
              <div v-if="initialData.files?.akta && !form.files.akta" class="p-3 bg-brand-50 dark:bg-brand-900/20 rounded-xl border border-brand-100 dark:border-brand-500/20 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 dark:text-brand-400 truncate">{{ initialData.files.akta }}</span>
                </div>
                <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
              </div>

              <div class="relative group">
                <input 
                  type="file" 
                  @change="handleFileUpload($event, 'akta')" 
                  accept="image/*,.pdf" 
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                />
                <div class="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700/50 group-hover:border-brand-500 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/10 transition-all duration-300">
                  <div class="w-8 h-8 rounded-lg bg-light flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 group-hover:text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <div class="min-w-0">
                    <p class="text-[11px] font-bold text-gray-500 dark:text-gray-400 group-hover:text-brand-700 dark:group-hover:text-brand-400 truncate">
                      {{ form.files.akta ? form.files.akta.name : 'Pilih file atau drag disini' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- KK -->
            <div class="space-y-3">
              <label class="text-sm font-bold text-main">Scan/Foto Kartu Keluarga</label>
              
              <div v-if="initialData.files?.kk && !form.files.kk" class="p-3 bg-brand-50 dark:bg-brand-900/20 rounded-xl border border-brand-100 dark:border-brand-500/20 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 dark:text-brand-400 truncate">{{ initialData.files.kk }}</span>
                </div>
                <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
              </div>

              <div class="relative group">
                <input 
                  type="file" 
                  @change="handleFileUpload($event, 'kk')" 
                  accept="image/*,.pdf" 
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                />
                <div class="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700/50 group-hover:border-brand-500 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/10 transition-all duration-300">
                  <div class="w-8 h-8 rounded-lg bg-light flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 group-hover:text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <div class="min-w-0">
                    <p class="text-[11px] font-bold text-gray-500 dark:text-gray-400 group-hover:text-brand-700 dark:group-hover:text-brand-400 truncate">
                      {{ form.files.kk ? form.files.kk.name : 'Pilih file atau drag disini' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="text-[10px] text-gray-400 dark:text-gray-500 mt-6 italic">Format file: JPG, PNG, atau PDF. Maksimal 2MB.</p>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end pt-4">
        <button 
          type="submit" 
          :disabled="isLoading"
          class="group px-6 py-3 bg-brand-500 text-black rounded-xl font-bold text-sm hover:bg-black hover:text-white transition-all shadow-lg shadow-brand-500/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <span v-if="isLoading">Sedang Mengirim...</span>
          <span v-else>{{ submitLabel }}</span>
          <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </form>

    <!-- Success Modal -->
    <div v-if="showSuccess && useModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="bg-card rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-gray-100 dark:border-gray-800/40">
        <div class="w-20 h-20 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-2xl font-black text-main mb-2">Pendaftaran Diterima!</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-8 text-sm">Terima kasih telah mendaftar di PAUD An-Nawa. Kami akan segera menghubungi Ayah/Bunda untuk tahapan selanjutnya.</p>
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
    default: 'Kirim Formulir PAUD'
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
  anakKe: '',
  alamat: '',
  namaAyah: '',
  pekerjaanAyah: '',
  namaIbu: '',
  pekerjaanIbu: '',
  noHp: '',
  files: {
    akta: null as File | null,
    kk: null as File | null
  }
})

onMounted(() => {
  if (props.initialData && Object.keys(props.initialData).length > 0) {
    // Map initialData fields to form fields
    const data = props.initialData
    form.namaLengkap = data.nama || data.namaLengkap || ''
    form.nik = data.nik || ''
    form.tempatLahir = data.tempatLahir || ''
    form.tanggalLahir = data.tanggalLahir || ''
    form.jenisKelamin = data.jk || data.jenisKelamin || ''
    form.anakKe = data.anakKe || ''
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
    console.log('SPMB PAUD Form data:', form)
    showSuccess.value = true
    emit('success', { ...form })
    
    // Reset form
    Object.assign(form, {
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
      files: {
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
