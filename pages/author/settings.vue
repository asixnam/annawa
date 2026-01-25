<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">Pengaturan Profil</h1>
    <p class="text-gray-500 mb-8">Kelola informasi profil dan akun author Anda.</p>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="p-8">
        <!-- Photo Upload -->
        <div class="flex items-center gap-8 mb-8 pb-8 border-b border-gray-100">
          <div class="relative group">
            <div class="w-24 h-24 rounded-full bg-gray-200 overflow-hidden ring-4 ring-white shadow-lg">
              <img v-if="profile.photo" :src="profile.photo" class="w-full h-full object-cover">
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400 font-bold text-2xl uppercase">
                {{ profile.name?.charAt(0) }}
              </div>
            </div>
            <button class="absolute bottom-0 right-0 p-2 bg-brand-500 text-white rounded-full shadow-md hover:bg-brand-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-1">Foto Profil</h3>
            <p class="text-sm text-gray-500 mb-3">Format JPG, GIF atau PNG. Ukuran maks 800KB.</p>
            <div class="flex gap-3">
              <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                Ganti Foto
              </button>
              <button class="px-4 py-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
                Hapus
              </button>
            </div>
          </div>
        </div>

        <!-- Info Form -->
        <form @submit.prevent="saveProfile" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
              <input type="text" v-model="profile.name" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm font-medium">
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input type="email" v-model="profile.email" disabled class="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed text-sm font-medium">
            </div>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Bio Singkat</label>
            <textarea rows="4" v-model="profile.bio" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm font-medium" placeholder="Ceritakan sedikit tentang Anda..."></textarea>
          </div>

          <div class="pt-6 border-t border-gray-100 flex justify-end">
            <button type="submit" :disabled="isSaving" class="px-6 py-3 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
              <svg v-if="isSaving" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              {{ isSaving ? 'Menyimpan...' : 'Simpan Perubahan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'

definePageMeta({
  layout: 'author',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('author') && !auth.hasRole('super')) {
       return navigateTo('/user/unauthorized')
    }
  }
})

const auth = useAuthStore()
const isSaving = ref(false)

const profile = ref({
  name: auth.user?.name || 'Ustadz Author',
  email: 'author@annawa.com',
  bio: 'Penulis aktif di divisi humas Pondok Pesantren.',
  photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop'
})

function saveProfile() {
  isSaving.value = true
  setTimeout(() => {
    isSaving.value = false
    // Mock save logic
    auth.user!.name = profile.value.name
    alert('Profil berhasil diperbaharui!')
  }, 1000)
}
</script>
