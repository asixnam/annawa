<template>
  <div class="max-w-4xl">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Editor Sejarah</h1>
        <p class="text-gray-500 text-sm">Kelola narasi sejarah dan tokoh inspiratif pondok.</p>
      </div>
      <button @click="saveChanges" :disabled="isSaving" class="px-6 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        <svg v-if="isSaving" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        {{ isSaving ? 'Menyimpan...' : 'Simpan Perubahan' }}
      </button>
    </div>

    <!-- History Text -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
      <h3 class="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Narasi Sejarah</h3>
      <label class="block text-sm font-bold text-gray-700 mb-2">Konten Lengkap</label>
      <textarea rows="10" v-model="historyText" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm leading-relaxed"></textarea>
    </div>

    <!-- Historical Events -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
      <div class="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
        <h3 class="font-bold text-gray-900">Peristiwa Sejarah (Timeline)</h3>
        <button class="text-sm font-bold text-brand-600 hover:text-brand-800">+ Tambah Peristiwa</button>
      </div>
      
      <div class="space-y-4">
        <div v-for="(event, idx) in events" :key="idx" class="flex flex-col md:flex-row gap-4 items-start p-4 bg-gray-50 rounded-lg">
          <div class="w-full md:w-24 flex-shrink-0">
            <input v-model="event.year" class="w-full px-2 py-1 border border-gray-300 rounded text-center text-sm font-bold" placeholder="Tahun">
          </div>
          <div class="flex-1 space-y-2 w-full">
            <input v-model="event.title" class="w-full px-2 py-1 border border-gray-300 rounded text-sm font-bold" placeholder="Judul Peristiwa">
            <textarea v-model="event.description" rows="2" class="w-full px-2 py-1 border border-gray-300 rounded text-sm" placeholder="Deskripsi..."></textarea>
          </div>
          <button class="text-red-500 hover:text-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Figures Section -->
    <div class="mb-8">
      <div class="flex justify-between items-center mb-4">
         <h3 class="font-bold text-gray-900 text-lg">Tokoh Inspiratif</h3>
         <button @click="openAddFigureModal" class="text-sm font-bold text-brand-600 hover:text-brand-800">+ Tambah Tokoh</button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="fig in contentStore.figures" :key="fig.id" class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative group">
          <button @click="contentStore.removeFigure(fig.id)" class="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
          <div class="flex items-start gap-4">
            <div class="w-16 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
              <img :src="fig.photo" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 space-y-2">
              <input type="text" v-model="fig.name" class="w-full px-2 py-1 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-brand-500 focus:outline-none text-sm font-bold transition-colors" placeholder="Nama Tokoh">
              <input type="text" v-model="fig.role" class="w-full px-2 py-1 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-brand-500 focus:outline-none text-xs text-brand-600 font-medium transition-colors" placeholder="Peran">
            </div>
          </div>
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
const historyText = ref(contentStore.history.text)
const events = ref(contentStore.history.milestones)

function openAddFigureModal() {
  contentStore.addFigure({
    name: 'Nama Tokoh Baru',
    role: 'Jabatan',
    photo: 'https://via.placeholder.com/150'
  })
}

function saveChanges() {
  isSaving.value = true
  contentStore.updateHistory(historyText.value)
  setTimeout(() => {
    isSaving.value = false
    alert('Sejarah berhasil diperbarui!')
  }, 500)
}
</script>
