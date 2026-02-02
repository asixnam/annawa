<template>
  <div class="max-w-4xl">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Landing Page Editor</h1>
        <p class="text-gray-500 text-sm">Sesuaikan konten halaman utama website.</p>
      </div>
      <button @click="saveChanges" :disabled="isSaving" class="px-6 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        <svg v-if="isSaving" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        {{ isSaving ? 'Menyimpan...' : 'Simpan Perubahan' }}
      </button>
    </div>

    <!-- Hero Section -->
    <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
      <div class="px-8 py-4 bg-brand-500 flex justify-between items-center">
        <h2 class="text-sm font-black text-black uppercase tracking-wider">1. Hero Section</h2>
        <span class="text-[10px] font-black text-black/50 uppercase tracking-widest">Header Utama</span>
      </div>
      <div class="p-8 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <!-- Image Preview & Upload -->
          <div class="space-y-3">
            <label class="block text-xs font-black text-gray-400 uppercase tracking-widest">Gambar Hero</label>
            <div class="relative group">
              <input type="file" @change="handleImageUpload" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
              <div class="aspect-video w-full rounded-2xl overflow-hidden border-2 border-dashed border-gray-100 group-hover:border-brand-500 transition-all duration-300 relative bg-gray-50">
                <img :src="form.heroImage" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div class="flex flex-col items-center gap-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span class="text-[10px] font-black uppercase tracking-widest">Klik untuk Ganti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Text Inputs -->
          <div class="md:col-span-2 space-y-6">
            <div>
              <label class="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Judul Utama</label>
              <input type="text" v-model="form.heroTitle" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 font-bold text-lg transition-all" placeholder="Masukkan judul utama...">
            </div>
            <div>
              <label class="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Sub Judul / Deskripsi</label>
              <textarea rows="4" v-model="form.heroSubtitle" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 text-sm leading-relaxed transition-all resize-y" placeholder="Masukkan deskripsi singkat..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'

definePageMeta({
  layout: 'super-admin',
  middleware: (to, from) => {
    // Only super admin can access
  }
})

const isSaving = ref(false)
const form = ref({
  heroTitle: 'Pondok Pesantren Khozinatul Ulum An-Nawa',
  heroSubtitle: 'Lembaga pendidikan Islam yang menggabungkan tradisi pesantren dengan pendidikan modern untuk membentuk generasi Qur\'ani yang berakhlak mulia.',
  heroImage: '/images/hero-santri.png'
})

function handleImageUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    // Use object URL for preview
    form.value.heroImage = URL.createObjectURL(file)
  }
}



function saveChanges() {
  isSaving.value = true
  setTimeout(() => {
    isSaving.value = false
    alert('Perubahan berhasil disimpan! (Mock)')
  }, 1000)
}
</script>
