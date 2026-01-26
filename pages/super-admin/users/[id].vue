<template>
  <div class="max-w-3xl mx-auto pb-12">
    <div class="mb-8">
      <NuxtLink to="/super-admin/users" class="group flex items-center text-gray-500 hover:text-brand-600 transition-colors text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar User
      </NuxtLink>
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Detail & Edit User</h1>
      <p class="text-gray-500 mt-2">Perbarui informasi profil dan hak akses pengguna.</p>
    </div>

    <div v-if="loading" class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-brand-100 border-t-brand-600"></div>
      <p class="text-gray-500 font-medium">Memuat data user...</p>
    </div>

    <div v-else class="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
      <form @submit.prevent="updateUser" class="divide-y divide-gray-100">
        <!-- Photo Upload Section -->
        <div class="p-8 bg-gray-50/50">
          <label class="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Foto Profil</label>
          <div class="flex items-center gap-8">
            <div class="relative group">
              <div class="h-32 w-32 rounded-3xl overflow-hidden bg-white border-4 border-white shadow-lg flex items-center justify-center text-brand-600 ring-1 ring-gray-100 transition group-hover:ring-brand-500/30">
                <img v-if="previewImage" :src="previewImage" class="h-full w-full object-cover">
                <div v-else class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <button @click.prevent="triggerFileInput" class="absolute -bottom-2 -right-2 bg-brand-600 text-white p-2.5 rounded-2xl shadow-lg border-2 border-white hover:bg-brand-700 transition active:scale-90">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" class="hidden">
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-gray-900 mb-1">Update Photo</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-4">Gunakan foto formal dengan format PNG, JPG, atau WEBP. Maksimal 2MB.</p>
              <div v-if="previewImage" class="flex gap-2">
                <button @click.prevent="previewImage = null; form.image = null" class="text-xs font-bold text-red-500 hover:text-red-700 transition">Hapus Foto</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Details -->
        <div class="p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700">Nama Lengkap</label>
              <input type="text" v-model="form.name" required placeholder="Contoh: Ahmad Muzakki" class="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium">
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700">Email Address</label>
              <input type="email" v-model="form.email" required placeholder="email@annawa.id" class="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium">
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700">Role / Akses Lembaga</label>
              <div class="relative">
                <select v-model="form.role" class="appearance-none w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium cursor-pointer">
                  <optgroup label="Admin Lembaga">
                    <option value="admin:pondok">Admin Pondok</option>
                    <option value="admin:paud">Admin PAUD</option>
                    <option value="admin:sdqta">Admin SDQTA</option>
                  </optgroup>
                  <optgroup label="Lainnya">
                    <option value="author">Author (Penulis)</option>
                    <option value="super">Super Admin</option>
                  </optgroup>
                </select>
                <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700">Ubah Password (Opsional)</label>
              <input type="password" v-model="form.password" placeholder="Kosongkan jika tidak ada perubahan" class="w-full px-4 py-3.5 bg-brand-50/30 border border-brand-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium">
            </div>
          </div>
        </div>

        <div class="p-8 bg-gray-50/30 flex justify-between items-center gap-4">
          <button type="button" @click="deleteUser" class="text-sm font-bold text-red-500 hover:text-red-700 transition flex items-center gap-1.5 px-4 py-2 hover:bg-red-50 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Hapus User
          </button>
          
          <div class="flex items-center gap-4">
            <NuxtLink to="/super-admin/users" class="px-6 py-3 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">Batal</NuxtLink>
            <button type="submit" class="px-8 py-3 bg-brand-600 text-white font-extrabold text-sm rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 active:scale-95 flex items-center gap-2">
              Simpan Perubahan
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

definePageMeta({ layout: 'super-admin' })
const router = useRouter()
const route = useRoute()

const loading = ref(true)
const fileInput = ref<HTMLInputElement | null>(null)
const previewImage = ref<string | null>(null)

const form = ref({
  id: '',
  name: '',
  email: '',
  password: '',
  role: '',
  image: null as File | string | null
})

onMounted(() => {
  // Mock fetch data based on route.params.id
  setTimeout(() => {
    // Simulate finding user
    form.value = {
      id: route.params.id as string,
      name: 'Admin PAUD',
      email: 'admin@local',
      password: '',
      role: 'admin:paud',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    }
    previewImage.value = form.value.image as string
    loading.value = false
  }, 500)
})

function triggerFileInput() {
  fileInput.value?.click()
}

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    form.value.image = file
    
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

function updateUser() {
  console.log('Updating User:', form.value)
  alert('Data user berhasil diperbarui!')
  router.push('/super-admin/users')
}

function deleteUser() {
  if (confirm('Yakin hapus user ini secara permanen?')) {
    alert('User dihapus.')
    router.push('/super-admin/users')
  }
}
</script>
