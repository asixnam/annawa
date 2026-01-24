<template>
  <div class="min-h-screen bg-gray-50 pt-24 pb-16 font-sans">
    <div class="container mx-auto px-4 md:px-6 max-w-4xl">
      <!-- Title Section -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-heading uppercase">
          Pendaftaran Santri <span class="text-brand-500">Baru (PSB)</span>
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Selamat datang di portal pendaftaran santri baru Pondok Pesantren Khozinatul Ulum An-Nawa. 
          Silakan lengkapi formulir di bawah ini untuk memulai proses pendaftaran.
        </p>
      </div>

      <!-- Alur Pendaftaran -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 class="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          Alur Pendaftaran
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          <!-- Step 1 -->
          <div class="flex flex-col items-center text-center relative z-10">
            <div class="w-12 h-12 rounded-full bg-brand-500 text-black flex items-center justify-center font-black mb-3 border-4 border-white shadow-md">
              1
            </div>
            <h3 class="text-sm font-bold text-gray-900 mb-1">Isi Formulir</h3>
            <p class="text-[10px] text-gray-500 leading-tight">Lengkapi data diri & orang tua</p>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center text-center relative z-10">
            <div class="w-12 h-12 rounded-full bg-white text-gray-400 flex items-center justify-center font-black mb-3 border-4 border-brand-50 shadow-md">
              2
            </div>
            <h3 class="text-sm font-bold text-gray-900 mb-1 text-gray-400">Upload Berkas</h3>
            <p class="text-[10px] text-gray-500 leading-tight">Unggah dokumen pelengkap</p>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center text-center relative z-10">
            <div class="w-12 h-12 rounded-full bg-white text-gray-400 flex items-center justify-center font-black mb-3 border-4 border-brand-50 shadow-md">
              3
            </div>
            <h3 class="text-sm font-bold text-gray-900 mb-1 text-gray-400">Sowan</h3>
            <p class="text-[10px] text-gray-500 leading-tight">Pertemuan wali santri & pengasuh</p>
          </div>
          <!-- Step 4 -->
          <div class="flex flex-col items-center text-center relative z-10">
            <div class="w-12 h-12 rounded-full bg-white text-gray-400 flex items-center justify-center font-black mb-3 border-4 border-brand-50 shadow-md">
              4
            </div>
            <h3 class="text-sm font-bold text-gray-900 mb-1 text-gray-400">Pembayaran</h3>
            <p class="text-[10px] text-gray-500 leading-tight">Pelunasan biaya pendaftaran</p>
          </div>
          
          <!-- Progress Line (Desktop only) -->
          <div class="absolute top-6 left-0 w-full h-0.5 bg-brand-50 -z-0 hidden md:block"></div>
        </div>
      </div>

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
                <input type="file" @change="handleFileUpload($event, 'ktpAyah')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all" />
              </div>
              <!-- KTP Ibu -->
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Scan/Foto KTP Ibu</label>
                <input type="file" @change="handleFileUpload($event, 'ktpIbu')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all" />
              </div>
              <!-- KK -->
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Scan/Foto Kartu Keluarga</label>
                <input type="file" @change="handleFileUpload($event, 'kk')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all" />
              </div>
              <!-- Akta -->
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Scan/Foto Akta Kelahiran</label>
                <input type="file" @change="handleFileUpload($event, 'akta')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all" />
              </div>
              <!-- Ijazah -->
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Scan/Foto Ijazah Terakhir</label>
                <input type="file" @change="handleFileUpload($event, 'ijazah')" accept="image/*,.pdf" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all" />
              </div>
              <!-- Pas Foto -->
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Pas Foto 3x4 (Background Merah)</label>
                <input type="file" @change="handleFileUpload($event, 'pasFoto')" accept="image/*" class="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 transition-all" />
              </div>
            </div>
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
            <span v-else>Kirim Formulir Sekarang</span>
            <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>

    <!-- Success Modal (Simplified) -->
    <div v-if="showSuccess" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
        <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-2xl font-black text-gray-900 mb-2">Pendaftaran Berhasil!</h3>
        <p class="text-gray-600 mb-8">Data pendaftaran Anda telah kami terima. Panitia akan segera menghubungi Anda melalui nomor WhatsApp yang terdaftar.</p>
        <button @click="showSuccess = false" class="w-full py-4 bg-brand-500 text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-600 shadow-lg shadow-brand-500/20 transition-all">
          Selesai
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

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
    console.log('Form data:', form)
    showSuccess.value = true
    
    // Reset form after success
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
  } catch (error) {
    console.error('Submission error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.font-heading {
  font-family: 'Montserrat', sans-serif;
}

/* Custom transitions */
.form-enter-active, .form-leave-active {
  transition: opacity 0.3s ease;
}
.form-enter-from, .form-leave-to {
  opacity: 0;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    padding: 0;
    margin: 0;
    cursor: pointer;
}
</style>
