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
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
      <div class="px-6 py-4 border-b border-gray-100 bg-gray-50 font-bold text-gray-800">
        1. Hero Section
      </div>
      <div class="p-6 space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Judul Utama</label>
          <input type="text" v-model="form.heroTitle" class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-bold text-lg">
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Sub Judul / Deskripsi</label>
          <textarea rows="3" v-model="form.heroSubtitle" class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"></textarea>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Gambar Hero</label>
          <div class="flex items-center gap-4">
            <img :src="form.heroImage" class="w-24 h-24 object-cover rounded-lg border border-gray-200">
            <button class="px-4 py-2 border border-brand-200 text-brand-600 rounded-lg text-sm font-bold hover:bg-brand-50">Upload Gambar Baru</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Collaborators / Partners -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
      <div class="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
        <span class="font-bold text-gray-800">2. Mitra & Kolaborator</span>
        <button class="text-xs font-bold text-brand-600 uppercase tracking-wider hover:text-brand-800">+ Tambah Mitra</button>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(partner, idx) in form.partners" :key="idx" class="relative group border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50 hover:border-brand-500 transition-colors">
            <button @click="removePartner(idx)" class="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <img :src="partner.logo" class="h-12 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all">
            <span class="text-xs font-bold text-gray-600">{{ partner.name }}</span>
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
  heroImage: '/images/hero-santri.png',
  partners: [
    { name: 'Kemenag', logo: '/annawa.png' },
    { name: 'Depdikbud', logo: '/annawa.png' },
    { name: 'Yayasan KU', logo: '/annawa.png' }
  ]
})

function removePartner(idx: number) {
  if (confirm('Hapus mitra ini?')) {
    form.value.partners.splice(idx, 1)
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
