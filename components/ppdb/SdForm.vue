<template>
  <div class="transition-colors duration-300">
    <!-- Registration Form -->
    <form @submit.prevent="handleSubmit" class="space-y-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Section 1: Data Diri -->
        <div class="bg-card shadow-sm border border-gray-100 dark:border-gray-800/40 overflow-hidden transition-colors duration-300">
          <div class="px-8 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800">
            <h2 class="text-xl font-bold text-main">Data Diri Murid</h2>
          </div>
          <div class="p-8 space-y-6">
            <div class="space-y-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-main">Nama Lengkap Murid <span class="text-red-500">*</span></label>
                <input v-model="form.namaLengkap" type="text" required placeholder="Nama lengkap calon murid" class="w-full px-4 py-3 rounded-xl theme-input" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-main">NIK Murid <span class="text-red-500">*</span></label>
                <input v-model="form.nik" type="text" required placeholder="Masukkan 16 digit NIK" class="w-full px-4 py-3 rounded-xl theme-input" />
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-sm font-bold text-main">Tempat Lahir <span class="text-red-500">*</span></label>
                  <input v-model="form.tempatLahir" type="text" required placeholder="Kota kelahiran" class="w-full px-4 py-3 rounded-xl theme-input" />
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-bold text-main">Tanggal Lahir <span class="text-red-500">*</span></label>
                  <input v-model="form.tanggalLahir" type="date" required class="w-full px-4 py-3 rounded-xl theme-input" />
                </div>
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
                <label class="text-sm font-bold text-main">Asal TK/RA <span class="text-red-500">*</span></label>
                <input v-model="form.asalSekolah" type="text" required placeholder="Nama TK/RA asal" class="w-full px-4 py-3 rounded-xl theme-input" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-main">Alamat Tempat Tinggal (Sesuai KK) <span class="text-red-500">*</span></label>
                <textarea v-model="form.alamat" required rows="3" placeholder="Alamat lengkap calon murid" class="w-full px-4 py-3 rounded-xl theme-input resize-none"></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Data Orang Tua -->
        <div class="bg-card shadow-sm border border-gray-100 dark:border-gray-800/40 overflow-hidden transition-colors duration-300">
          <div class="px-8 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800">
            <h2 class="text-xl font-bold text-main">Data Orang Tua / Wali</h2>
          </div>
          <div class="p-8 space-y-6">
            <div class="space-y-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-main">Nama Lengkap Ayah <span class="text-red-500">*</span></label>
                <input v-model="form.namaAyah" type="text" required class="w-full px-4 py-3 rounded-xl theme-input" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-main">Pekerjaan Ayah <span class="text-red-500">*</span></label>
                <input v-model="form.pekerjaanAyah" type="text" required class="w-full px-4 py-3 rounded-xl theme-input" />
              </div>

               <div class="space-y-2">
                 <div class="h-px bg-gray-100 dark:bg-gray-800 my-4"></div>
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
                 <div class="h-px bg-gray-100 dark:bg-gray-800 my-4"></div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-bold text-main">No. WhatsApp Wali <span class="text-red-500">*</span></label>
                <input v-model="form.noHp" type="tel" required placeholder="08123xxx" class="w-full px-4 py-3 rounded-xl theme-input" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Upload Berkas -->
      <div class="bg-card shadow-sm border border-gray-100 dark:border-gray-800/40 overflow-hidden transition-colors duration-300">
        <div class="px-8 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800">
          <h2 class="text-xl font-bold text-main">Upload Berkas (Opsional)</h2>
        </div>
        <div class="p-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Ijazah TK -->
            <div class="space-y-3">
              <label class="text-sm font-bold text-main">Scan/Foto Ijazah TK/RA</label>
              
              <div v-if="initialData.files?.ijazahTk && !form.files.ijazahTk" class="p-3 bg-brand-50 dark:bg-brand-900/20 rounded-xl border border-brand-100 dark:border-brand-500/20 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0 flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 dark:text-brand-400 truncate">{{ initialData.files.ijazahTk }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <a :href="'/uploads/students/' + initialData.files.ijazahTk" target="_blank" class="text-[10px] font-bold text-blue-600 hover:text-blue-800 hover:underline uppercase tracking-wider">Lihat</a>
                  <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
                </div>
              </div>
              <div v-else-if="props.isEdit && !form.files.ijazahTk" class="p-3 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-700/50 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span class="text-[10px] font-bold text-gray-400 italic">Data file belum di-upload</span>
              </div>

              <div class="relative group">
                <input 
                  type="file" 
                  @change="handleFileUpload($event, 'ijazahTk')" 
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
                      {{ form.files.ijazahTk ? form.files.ijazahTk.name : 'Pilih file atau drag disini' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Akta Kelahiran -->
            <div class="space-y-3">
              <label class="text-sm font-bold text-main">Scan/Foto Akta Kelahiran</label>

              <div v-if="initialData.files?.akta && !form.files.akta" class="p-3 bg-brand-50 dark:bg-brand-900/20 rounded-xl border border-brand-100 dark:border-brand-500/20 flex items-center justify-between group">
                <div class="flex items-center gap-2 min-w-0 flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 dark:text-brand-400 truncate">{{ initialData.files.akta }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <a :href="'/uploads/students/' + initialData.files.akta" target="_blank" class="text-[10px] font-bold text-blue-600 hover:text-blue-800 hover:underline uppercase tracking-wider">Lihat</a>
                  <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
                </div>
              </div>
              <div v-else-if="props.isEdit && !form.files.akta" class="p-3 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-700/50 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span class="text-[10px] font-bold text-gray-400 italic">Data file belum di-upload</span>
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
                <div class="flex items-center gap-2 min-w-0 flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs font-bold text-brand-700 dark:text-brand-400 truncate">{{ initialData.files.kk }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <a :href="'/uploads/students/' + initialData.files.kk" target="_blank" class="text-[10px] font-bold text-blue-600 hover:text-blue-800 hover:underline uppercase tracking-wider">Lihat</a>
                  <span class="text-[10px] font-black uppercase text-brand-400 tracking-widest whitespace-nowrap">Sudah Ada</span>
                </div>
              </div>
              <div v-else-if="props.isEdit && !form.files.kk" class="p-3 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-700/50 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span class="text-[10px] font-bold text-gray-400 italic">Data file belum di-upload</span>
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

      <!-- Action Button -->
       <div class="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
        <!-- Cancel Button -->
        <button 
          type="button" 
          @click="$router.back()"
          class="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Batal
        </button>

        <div class="flex items-center gap-3">
          <!-- Extra Actions Slot -->
          <slot name="actions"></slot>

          <!-- Submit Button -->
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
      </div>
    </form>

    <!-- Success Modal -->
    <div v-if="showSuccess && useModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="bg-card rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-gray-100 dark:border-gray-800/40 transition-colors duration-300">
        <div class="w-20 h-20 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-2xl font-black text-main mb-2">Pendaftaran Diterima!</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-8 text-sm">Terima kasih telah mendaftar di SDQTA An-Nawa. Panitia akan segera menghubungi Anda untuk tahapan selanjutnya.</p>
        <button @click="showSuccess = false" class="w-full py-4 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-600 shadow-lg shadow-brand-500/20 transition-all">
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'

const props = defineProps({
  submitLabel: {
    type: String,
    default: 'Kirim'
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
  } as Record<string, File | null>
})

function populateForm(data: Record<string, any>) {
  if (!data || Object.keys(data).length === 0) return
  form.namaLengkap = data.name || data.namaLengkap || ''
  form.nik = data.nik || ''
  form.tempatLahir = data.birth_place || data.tempatLahir || ''
  form.tanggalLahir = data.birth_date ? data.birth_date.split('T')[0] : (data.tanggalLahir || '')
  form.jenisKelamin = data.gender || data.pondokType || data.jenisKelamin || ''
  form.asalSekolah = data.school_origin || data.asalSekolah || ''
  form.alamat = data.address || data.alamat || ''
  form.namaAyah = data.father_name || data.parent_name || data.namaAyah || ''
  form.pekerjaanAyah = data.father_job || data.pekerjaanAyah || ''
  form.namaIbu = data.mother_name || data.namaIbu || ''
  form.pekerjaanIbu = data.mother_job || data.pekerjaanIbu || ''
  form.noHp = data.phone || data.noHp || ''
}

onMounted(() => {
  populateForm(props.initialData)
})

watch(() => props.initialData, (newData) => {
  if (newData && Object.keys(newData).length > 0) {
    populateForm(newData)
  }
}, { deep: true })

const handleFileUpload = (event: Event, type: keyof typeof form.files) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    form.files[type] = target.files[0]
  }
}

const handleSubmit = async () => {
  isLoading.value = true
  
  try {
    const formData = new FormData()
    formData.append('name', form.namaLengkap)
    formData.append('nik', form.nik)
    formData.append('birth_place', form.tempatLahir)
    formData.append('birth_date', form.tanggalLahir)
    formData.append('gender', form.jenisKelamin)
    formData.append('school_origin', form.asalSekolah)
    formData.append('address', form.alamat)
    formData.append('father_name', form.namaAyah)
    formData.append('father_job', form.pekerjaanAyah)
    formData.append('mother_name', form.namaIbu)
    formData.append('mother_job', form.pekerjaanIbu)
    formData.append('phone', form.noHp)
    formData.append('registration_year', new Date().getFullYear().toString())
    formData.append('unit', 'SD')
    formData.append('status', 'active')

    // Append files (SdForm specific files)
    if (form.files.ijazahTk) formData.append('ijazah', form.files.ijazahTk) // Map ijazahTk to ijazah
    if (form.files.kk) formData.append('kk', form.files.kk)
    if (form.files.akta) formData.append('akta', form.files.akta)
    
    let response;
     if (props.isEdit && props.initialData?.id) {
       response = await $fetch(`/api/students/${props.initialData.id}`, {
         method: 'PUT',
         body: formData
       })
    } else {
       response = await $fetch('/api/students', {
         method: 'POST',
         body: formData
       })
    }

    console.log('SD Form submitted:', response)
    
    if (props.useModal) {
      showSuccess.value = true
    } else {
      emit('success', { ...form, ...response })
    }

    // Reset form
    if (!props.isEdit) {
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
    }
  } catch (error: any) {
    console.error('Submission error:', error)
     if (error.response?.status === 409 || error.statusCode === 409) {
      alert('Gagal: NIK atau NISN sudah terdaftar. Data murid ini sudah ada.')
    } else {
      alert('Terjadi kesalahan saat menyimpan data: ' + (error.data?.statusMessage || error.message))
    }
  } finally {
    isLoading.value = false
  }
}

const closeSuccess = () => {
  showSuccess.value = false
  // emit already called in handleSubmit for non-modal? 
  // Wait, the logic in handleSubmit calls emit if NOT modal.
  // If modal IS used, showSuccess=true. Then closeSuccess is called by button in modal.
  // closeSuccess should emit success too? Original code did.
  emit('success', {}) // emit empty or form? original emitted form.
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
