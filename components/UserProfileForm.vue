<template>
  <div class="max-w-4xl mx-auto py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 leading-tight">Profil Saya</h1>
      <p class="text-gray-500 mt-2">Kelola informasi pribadi dan foto profil Anda.</p>
    </div>

    <!-- Loading State -->
    <div v-if="isLoadingData" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
    </div>

    <div v-else class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      <div class="px-8 py-10 lg:p-12">
        <form @submit.prevent="saveProfile" class="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          <!-- Avatar Section -->
          <div class="flex flex-col items-center space-y-5 lg:w-[320px] shrink-0">
            <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest w-full text-center lg:text-left mb-2">Foto Profil</h3>
            <div class="relative group w-64 h-80 rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img v-if="form.image_url" :src="form.image_url" alt="Profile" class="w-full h-full object-cover">
              <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600 font-bold text-8xl shadow-inner">
                {{ form.name ? form.name.charAt(0).toUpperCase() : 'U' }}
              </div>
              
              <!-- Hover overlay for edit/delete/upload -->
              <div class="absolute inset-0 bg-gray-900/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                
                <!-- Action Buttons (if image exists) -->
                <div v-if="form.image_url" class="flex items-center gap-6">
                  <label for="avatar-upload" class="cursor-pointer group/edit flex flex-col items-center">
                    <div class="bg-white/20 p-3.5 rounded-full mb-2 transform group-hover/edit:scale-110 transition-transform hover:bg-brand-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </div>
                    <span class="text-white text-xs font-bold tracking-wide">Ubah</span>
                  </label>
                  
                  <button type="button" @click.prevent="removePhoto" class="cursor-pointer group/delete flex flex-col items-center">
                    <div class="bg-white/20 p-3.5 rounded-full mb-2 transform group-hover/delete:scale-110 transition-transform hover:bg-red-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <span class="text-red-300 text-xs font-bold tracking-wide">Hapus</span>
                  </button>
                </div>
                
                <!-- Upload action (if no image) -->
                <label v-else for="avatar-upload" class="cursor-pointer group/upload flex flex-col items-center">
                  <div class="bg-white/20 p-4 rounded-full mb-3 transform group-hover/upload:scale-110 transition-transform hover:bg-brand-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span class="text-white text-sm font-bold tracking-wide">Unggah Foto</span>
                </label>
              </div>
            </div>
            <input id="avatar-upload" type="file" class="hidden" accept="image/*" @change="handleFileUpload">
            
            <div class="bg-gray-50 rounded-xl p-4 w-full text-center border border-gray-100">
               <p class="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Rasio 4:5</p>
               <p class="text-xs text-gray-400">Format PNG/JPG (Maks. 5MB)</p>
               <div v-if="isUploading" class="mt-2 text-xs font-bold text-brand-600 flex items-center justify-center gap-2">
                 <svg class="animate-spin h-3 w-3 text-brand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                 Mengupload...
               </div>
            </div>
          </div>

          <!-- Form Fields -->
          <div class="flex-1 flex flex-col">
            <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100 pb-4 mb-6 hidden lg:block">Data Pribadi</h3>
            
            <div class="space-y-6 flex-1">
              <div class="group">
                <label class="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-brand-600 transition-colors">Nama Lengkap</label>
                <input type="text" v-model="form.name" required class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 font-medium text-gray-900 transition-all">
                <p class="text-xs text-brand-600/70 font-medium mt-1.5 ml-1">Nama ini akan digunakan sbg identitas karya Anda di galeri.</p>
              </div>

              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">Alamat Email</label>
                <input type="email" v-model="form.email" disabled class="w-full px-4 py-3.5 bg-gray-100 border border-gray-200/60 rounded-xl font-medium text-gray-500 cursor-not-allowed">
                <p class="text-xs text-gray-400 mt-1.5 ml-1 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Email hanya digunakan untuk login dan tidak dapat diubah
                </p>
              </div>

              <div class="group">
                <label class="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-brand-600 transition-colors">Bio & Kutipan Singkat</label>
                <textarea v-model="form.bio" rows="5" placeholder="Ceritakan sedikit latar belakang, minat, atau kutipan favorit Anda..." class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 text-sm resize-none font-medium text-gray-800 transition-all"></textarea>
              </div>
            </div>
            
            <!-- Button Actions -->
            <div class="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
              <span class="text-xs text-gray-400 hidden sm:block">Periksa kembali sebelum menyimpan.</span>
              <button 
                type="submit" 
                :disabled="isSaving || isUploading" 
                class="relative group px-8 py-3.5 text-white font-bold rounded-xl transition-all shadow-xl shadow-brand-500/20 w-full sm:w-auto text-center overflow-hidden"
                :class="isSaving || isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-700 hover:-translate-y-0.5'"
              >
                <!-- Shine effect -->
                <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer hidden sm:block" v-if="!isSaving && !isUploading"></div>
                
                <span class="relative flex items-center justify-center gap-2">
                  <svg v-if="isSaving" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  {{ isSaving ? 'Menyimpan...' : 'Simpan Perubahan' }}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()
const isLoadingData = ref(true)
const isSaving = ref(false)
const isUploading = ref(false)

const form = ref({
  name: '',
  email: '',
  bio: '',
  image_url: ''
})

onMounted(async () => {
  if (auth.user?.id) {
    try {
      const users: any = await $fetch('/api/users')
      const currentUser = users.find((u: any) => u.id === auth.user?.id)
      
      if (currentUser) {
        form.value = {
          name: currentUser.name,
          email: currentUser.email,
          bio: currentUser.bio || '',
          image_url: currentUser.image_url || ''
        }
      }
    } catch (error) {
      console.error('Failed to load user data:', error)
    } finally {
      isLoadingData.value = false
    }
  } else {
    isLoadingData.value = false
  }
})

async function handleFileUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files || input.files.length === 0) return

  const file = input.files[0]
  if (!file.type.startsWith('image/')) {
    alert('Mohon upload file gambar valid.')
    return
  }
  
  if (file.size > 5 * 1024 * 1024) {
      alert('Ukuran gambar maksimal 5MB')
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
    }
  } catch (error) {
    console.error('Upload failed:', error)
    alert('Gagal mengupload gambar profil.')
  } finally {
    isUploading.value = false
  }
}

function removePhoto() {
  if (confirm('Apakah Anda yakin ingin menghapus foto profil ini?')) {
    form.value.image_url = ''
  }
}

async function saveProfile() {
  if (!auth.user?.id) return
  isSaving.value = true
  
  try {
    const payload = {
      name: form.value.name,
      bio: form.value.bio,
      image_url: form.value.image_url
    }

    await $fetch(`/api/users/${auth.user.id}`, {
      method: 'PUT',
      body: payload
    })
    
    auth.user.name = form.value.name
    
    alert('Profil berhasil diperbarui!')
  } catch (error: any) {
    alert(error.data?.statusMessage || 'Gagal menyimpan profil')
  } finally {
    isSaving.value = false
  }
}
</script>
