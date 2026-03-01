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

    <div v-if="loading" class="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-brand-100 border-t-brand-600"></div>
      <p class="text-gray-500 font-medium">Memuat data user...</p>
    </div>

    <div v-else class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <form @submit.prevent="updateUser" class="divide-y divide-gray-100">
        <!-- Photo Upload Section -->
        <div class="p-8">
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
              <div v-if="isUploading" class="text-sm font-bold text-brand-600 animate-pulse mb-2">Mengupload foto...</div>
              <div v-if="previewImage" class="flex gap-2">
                <button @click.prevent="removePhoto" class="text-xs font-bold text-red-500 hover:text-red-700 transition">Hapus Foto</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Details -->
        <div class="p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700">Nama Lengkap</label>
              <input type="text" v-model="form.name" required placeholder="Contoh: Ahmad Muzakki" class="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium text-black">
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700">Email Address</label>
              <input type="email" v-model="form.email" required placeholder="email@annawa.id" class="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium text-black">
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700">Role / Akses Lembaga</label>
              <div class="relative">
                <select v-model="form.role" class="appearance-none w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium cursor-pointer text-black">
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
              <label class="block text-sm font-bold text-gray-700">No. HP / WhatsApp</label>
              <input type="tel" v-model="form.phone" placeholder="Contoh: 081234567890" class="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium text-black">
            </div>
          </div>

          <!-- Author Specific Fields -->
          <div v-if="form.role === 'author'" class="space-y-6 pt-4 border-t border-gray-100">
            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700">Bio / Profil Ringkas</label>
              <textarea v-model="form.bio" rows="3" placeholder="Tuliskan bio singkat author di sini..." class="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium text-black resize-none"></textarea>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700 mb-2">Verifikasi Data</label>
              <div class="flex items-center gap-3">
                <button 
                  type="button"
                  @click="form.status = 'verified'"
                  :class="[
                    'flex-1 py-3.5 rounded-2xl font-bold transition-all border flex items-center justify-center gap-2',
                    form.status === 'verified' 
                      ? 'bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/20' 
                      : 'bg-white text-gray-400 border-gray-200 hover:border-green-200'
                  ]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Terverifikasi
                </button>
                <button 
                  type="button"
                  @click="form.status = 'rejected'"
                  :class="[
                    'flex-1 py-3.5 rounded-2xl font-bold transition-all border flex items-center justify-center gap-2',
                    form.status === 'rejected' 
                      ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/20' 
                      : 'bg-white text-gray-400 border-gray-200 hover:border-red-200'
                  ]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  Tolak Data
                </button>
              </div>
            </div>
          </div>

          <div class="space-y-2 pt-4 border-t border-gray-100">
            <label class="block text-sm font-bold text-gray-700">Ubah Password (Opsional)</label>
            <input type="password" v-model="form.password" placeholder="Kosongkan jika tidak ada perubahan" class="w-full px-4 py-3.5 bg-brand-50/30 border border-brand-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium">
          </div>
        </div>

        <div class="p-8 flex justify-between items-center gap-4">
          <button type="button" @click="deleteUser" class="text-sm font-bold text-red-500 hover:text-red-700 transition flex items-center gap-1.5 px-4 py-2 hover:bg-red-50 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Hapus User
          </button>
          
          <div class="flex items-center gap-4">
            <NuxtLink to="/super-admin/users" class="px-6 py-3 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">Batal</NuxtLink>
            <button type="submit" :disabled="isLoading" class="px-8 py-3 bg-brand-600 text-white font-extrabold text-sm rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 active:scale-95 flex items-center gap-2">
              <span v-if="isLoading">Menyimpan...</span>
              <span v-else>Simpan Perubahan</span>
              <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
const isLoading = ref(false)
const isUploading = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const previewImage = ref<string | null>(null)

const form = ref({
  id: '',
  name: '',
  email: '',
  password: '',
  role: '',
  status: 'pending',
  bio: '',
  phone: '',
  image: null as File | string | null,
  image_url: ''
})

onMounted(async () => {
  try {
    const data: any = await $fetch(`/api/users/${route.params.id}`)
    if (data) {
      form.value = {
        ...data,
        password: '', // Reset password field for security
      }
      previewImage.value = data.image_url
    }
  } catch (e: any) {
    alert('Gagal memuat data user: ' + (e.data?.statusMessage || e.message))
    router.push('/super-admin/users')
  } finally {
    loading.value = false
  }
})

function triggerFileInput() {
  fileInput.value?.click()
}

async function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    
    if (!file.type.startsWith('image/')) {
      alert('Mohon upload file gambar valid.')
      return
    }
    
    if (file.size > 2 * 1024 * 1024) {
      alert('Ukuran gambar maksimal 2MB')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    isUploading.value = true
    try {
      const response: any = await $fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      
      if (response && response.url) {
        form.value.image_url = response.url
        previewImage.value = response.url
      }
    } catch (error) {
      console.error('Upload failed:', error)
      alert('Gagal mengupload gambar profil.')
    } finally {
      isUploading.value = false
    }
  }
}

function removePhoto() {
  if (confirm('Yakin ingin menghapus foto profil ini?')) {
    form.value.image_url = ''
    previewImage.value = null
  }
}

async function updateUser() {
  isLoading.value = true
  try {
    // Note: Image upload logic should be added here if needed
    // For now, updating text fields
    await $fetch(`/api/users/${route.params.id}`, {
      method: 'PUT',
      body: {
        name: form.value.name,
        email: form.value.email,
        role: form.value.role,
        password: form.value.password || undefined,
        status: form.value.status,
        bio: form.value.bio,
        phone: form.value.phone,
        image_url: form.value.image_url
      }
    })
    
    alert('Data user berhasil diperbarui!')
    router.push('/super-admin/users')
  } catch (e: any) {
    alert('Gagal memperbarui user: ' + (e.data?.statusMessage || e.message))
  } finally {
    isLoading.value = false
  }
}

async function deleteUser() {
  if (confirm('Yakin hapus user ini secara permanen?')) {
    try {
      await $fetch(`/api/users/${route.params.id}`, { method: 'DELETE' })
      alert('User dihapus.')
      router.push('/super-admin/users')
    } catch (e: any) {
      alert('Gagal menghapus user: ' + (e.data?.statusMessage || e.message))
    }
  }
}
</script>
