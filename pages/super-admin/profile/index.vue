<template>
  <div class="max-w-4xl">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Editor Profil & Sejarah</h1>
        <p class="text-gray-500 text-sm">Kelola halaman Sejarah, Visi Misi, dan Tokoh.</p>
      </div>
      <button @click="saveChanges" :disabled="isSaving" class="px-6 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        {{ isSaving ? 'Menyimpan...' : 'Simpan Perubahan' }}
      </button>
    </div>

    <!-- Identity / Vision Mission -->
    <div class="space-y-8">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 class="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Identitas & Tentang Kami</h3>
        <label class="block text-sm font-bold text-gray-700 mb-2">Deskripsi Tentang Kami (Profil Singkat)</label>
        <textarea rows="6" v-model="aboutUs" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm leading-relaxed" placeholder="Deskripsi singkat tentang pondok pesantren..."></textarea>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 class="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Visi & Misi</h3>
        <div class="mb-4">
          <label class="block text-sm font-bold text-gray-700 mb-2">Visi</label>
          <input type="text" v-model="vision" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm">
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Misi (Satu per baris)</label>
          <textarea rows="8" v-model="mission" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContentStore } from '../../../stores/content'

definePageMeta({
  layout: 'super-admin'
})

const contentStore = useContentStore()
const isSaving = ref(false)

const vision = ref(contentStore.identity.vision)
const mission = ref(contentStore.identity.mission.join('\n'))
const aboutUs = ref('Pondok Pesantren Khozinatul Ulum An-Nawa adalah sebuah lembaga pendidikan Islam yang berkomitmen...') // Mock default

function saveChanges() {
  isSaving.value = true
  contentStore.updateVision(vision.value)
  contentStore.updateMission(mission.value)
  // contentStore.updateAbout(aboutUs.value) 
  
  setTimeout(() => {
    isSaving.value = false
    alert('Profil Visi & Misi tersimpan!')
  }, 800)
}
</script>
