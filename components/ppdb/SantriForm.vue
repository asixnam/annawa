<template>
  <div>
    <!-- Registration Form -->
    <form @submit.prevent="handleSubmit" class="space-y-8">
      <!-- Section 1: Data Diri -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="bg-brand-500 px-8 py-4">
          <h2 class="text-lg font-black text-black uppercase tracking-wider">Data Diri Santri</h2>
        </div>
        <div class="p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Lengkap <span class="text-red-500">*</span></label>
              <input v-model="form.namaLengkap" type="text" required placeholder="Sesuai Akta Kelahiran/Ijazah" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">NISN</label>
              <input v-model="form.nisn" type="text" placeholder="Masukkan 10 digit NISN" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Tempat Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tempatLahir" type="text" required placeholder="Contoh: Blora" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Tanggal Lahir <span class="text-red-500">*</span></label>
              <input v-model="form.tanggalLahir" type="date" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Jenis Kelamin <span class="text-red-500">*</span></label>
              <div class="flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="form.jenisKelamin" value="putra" name="jk" class="w-4 h-4 text-brand-600" required />
                  <span class="text-sm text-gray-600">Putra</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="form.jenisKelamin" value="putri" name="jk" class="w-4 h-4 text-brand-600" />
                  <span class="text-sm text-gray-600">Putri</span>
                </label>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Asal Sekolah <span class="text-red-500">*</span></label>
              <input v-model="form.asalSekolah" type="text" required placeholder="Contoh: SD Negeri 1 Blora" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-bold text-gray-700">Alamat Lengkap <span class="text-red-500">*</span></label>
            <textarea v-model="form.alamat" required rows="3" placeholder="Jalan, Desa/Kelurahan, RT/RW, Kecamatan, Kabupaten" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"></textarea>
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
              <label class="text-sm font-bold text-gray-700">Nama Bapak <span class="text-red-500">*</span></label>
              <input v-model="form.namaAyah" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Pekerjaan Bapak <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanAyah" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Nama Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.namaIbu" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Pekerjaan Ibu <span class="text-red-500">*</span></label>
              <input v-model="form.pekerjaanIbu" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">No. HP / WhatsApp <span class="text-red-500">*</span></label>
              <input v-model="form.noHp" type="tel" required placeholder="Contoh: 081234567890" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" />
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
            <!-- KTP Bapak -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Scan/Foto KTP Bapak</label>
              <div v-if="initialData.files?.ktpAyah && !form.files.ktpAyah" class="mb-2 p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 truncate">{{ initialData.files.ktpAyah }}</span>
                </div>
                <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
              </div>
              <input type="file" @change="handleFileUpload($event, 'ktpAyah')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all underline decoration-brand-200" />
            </div>
            <!-- KTP Ibu -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Scan/Foto KTP Ibu</label>
              <div v-if="initialData.files?.ktpIbu && !form.files.ktpIbu" class="mb-2 p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 truncate">{{ initialData.files.ktpIbu }}</span>
                </div>
                <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
              </div>
              <input type="file" @change="handleFileUpload($event, 'ktpIbu')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all underline decoration-brand-200" />
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
            <!-- Akta -->
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
            <!-- Ijazah -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Scan/Foto Ijazah Terakhir</label>
              <div v-if="initialData.files?.ijazah && !form.files.ijazah" class="mb-2 p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 truncate">{{ initialData.files.ijazah }}</span>
                </div>
                <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
              </div>
              <input type="file" @change="handleFileUpload($event, 'ijazah')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all underline decoration-brand-200" />
            </div>
            <!-- Pas Foto -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Pas Foto 3x4 (Background Merah)</label>
              <div v-if="initialData.files?.pasFoto && !form.files.pasFoto" class="mb-2 p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 truncate">{{ initialData.files.pasFoto }}</span>
                </div>
                <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
              </div>
              <input type="file" @change="handleFileUpload($event, 'pasFoto')" accept="image/*" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all underline decoration-brand-200" />
            </div>
          </div>
          <p class="text-[10px] text-gray-400 mt-6">Format file: JPG, PNG, atau PDF. Maksimal 2MB.</p>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center gap-4 pt-4">
        <button 
          v-if="isEdit"
          type="button"
          @click="$emit('cancel')"
          class="px-8 py-4 bg-gray-100 text-gray-600 rounded-full font-black uppercase tracking-widest text-sm hover:bg-gray-200 transition-all"
        >
          Batal
        </button>
        <button 
          type="submit" 
          :disabled="isLoading"
          class="group px-16 py-5 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all shadow-xl shadow-brand-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
        >
          <span v-if="isLoading">Sedang Mengirim...</span>
          <span v-else>{{ isEdit ? submitLabelEdit : submitLabel }}</span>
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
        <h3 class="text-2xl font-black text-gray-900 mb-2">Pendaftaran Berhasil!</h3>
        <p class="text-gray-600 mb-8 text-sm">Data pendaftaran Anda telah kami terima. Panitia akan segera menghubungi Anda melalui nomor WhatsApp yang terdaftar.</p>
        <button @click="closeSuccess" class="w-full py-4 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-600 shadow-lg shadow-brand-500/20 transition-all">
          Selesai
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
    default: 'Kirim Formulir Sekarang'
  },
  submitLabelEdit: {
    type: String,
    default: 'Update Data Santri'
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

const emit = defineEmits(['success', 'cancel'])

const isLoading = ref(false)
const showSuccess = ref(false)

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
  files: {
    ktpAyah: null as File | null,
    ktpIbu: null as File | null,
    kk: null as File | null,
    akta: null as File | null,
    ijazah: null as File | null,
    pasFoto: null as File | null
  } as Record<string, File | null>
})

onMounted(() => {
  if (props.initialData && Object.keys(props.initialData).length > 0) {
    const data = props.initialData
    form.namaLengkap = data.name || data.namaLengkap || ''
    form.nisn = data.nisn || ''
    form.tempatLahir = data.tempatLahir || ''
    form.tanggalLahir = data.tanggalLahir || ''
    form.jenisKelamin = data.pondokType || data.jenisKelamin || ''
    form.asalSekolah = data.asalSekolah || ''
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
    console.log('Santri Form data:', form)
    
    if (props.useModal) {
      showSuccess.value = true
    } else {
      emit('success', { ...form })
    }
  } catch (error) {
    console.error('Submission error:', error)
  } finally {
    isLoading.value = false
  }
}

const closeSuccess = () => {
  showSuccess.value = false
  emit('success', { ...form })
  
  // Reset form
  if (!props.isEdit) {
    Object.assign(form, {
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
      files: {
        ktpAyah: null,
        ktpIbu: null,
        kk: null,
        akta: null,
        ijazah: null,
        pasFoto: null
      }
    })
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
