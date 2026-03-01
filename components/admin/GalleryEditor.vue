<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">{{ isEdit ? 'Edit Karya' : 'Tambah Karya Baru' }}</h1>
      <NuxtLink :to="basePath" class="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 border border-amber-600 rounded-lg text-[10px] font-black uppercase tracking-widest text-white transition-all shadow-md shrink-0">
        <img src="https://img.icons8.com/?size=100&id=99287&format=png&color=FFFFFF" alt="Back Arrow" class="w-4 h-4">
      </NuxtLink>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="saveContent" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Judul Karya</label>
          <input type="text" v-model="form.title" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-lg font-bold">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Kategori</label>
            <select v-model="form.category" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option value="Juara">Juara</option>
              <option value="Literasi">Literasi</option>
              <option value="Kesenian">Kesenian</option>
              <option value="Khitobah">Khitobah</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Nama Penulis / Pemenang</label>
            <input 
              type="text" 
              v-model="form.author" 
              required 
              :disabled="auth.user?.role === 'author'"
              :class="['w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500', auth.user?.role === 'author' ? 'opacity-50 cursor-not-allowed' : '']"
            >
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Deskripsi Singkat / Kutipan</label>
          <textarea rows="4" v-model="form.excerpt" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm" placeholder="Masukkan deskripsi atau kutipan karya..."></textarea>
        </div>

        <div>
           <label class="block text-sm font-bold text-gray-700 mb-2">Gambar Karya</label>
           
           <!-- File Upload Input -->
           <div class="mb-4">
             <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6" v-if="!form.image && !isUploading">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500"><span class="font-bold">Klik untuk upload</span></p>
                        <p class="text-xs text-gray-500">PNG, JPG atau WEBP</p>
                    </div>
                    <div v-else-if="isUploading" class="flex flex-col items-center justify-center pt-5 pb-6">
                        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-600 mb-3"></div>
                        <p class="text-sm text-gray-500">Mengupload...</p>
                    </div>
                    <div v-else class="relative w-full h-full p-2">
                        <img :src="form.image" class="w-full h-full object-contain rounded-lg">
                         <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                            <p class="text-white font-bold">Ganti Gambar</p>
                        </div>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" accept="image/*" @change="handleFileUpload" />
                </label>
             </div> 
           </div>
           
           <!-- Hidden URL Input for fallback/debugging if needed, or just keep it synced -->
           <input type="hidden" v-model="form.image">
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink :to="basePath" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" :disabled="isLoading || isUploading" :class="['px-6 py-2.5 text-white font-bold rounded-lg transition shadow-lg shadow-brand-500/20', isLoading || isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-700']">
            {{ isUploading ? 'Mengupload...' : (isLoading ? 'Menyimpan...' : (isEdit ? 'Simpan Perubahan' : 'Tambah ke Galeri')) }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const props = defineProps<{
  id?: string
  basePath: string
}>()

const router = useRouter()
const auth = useAuthStore()
const isEdit = !!props.id
const isLoading = ref(false)
const isUploading = ref(false)

async function handleFileUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files || input.files.length === 0) return

  const file = input.files[0]
  if (!file.type.startsWith('image/')) {
    alert('Mohon upload file gambar valid.')
    return
  }
  
  // Max 5MB
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
      form.value.image = response.url
    }
  } catch (error) {
    console.error('Upload failed:', error)
    alert('Gagal mengupload gambar. Silakan coba lagi.')
  } finally {
    isUploading.value = false
  }
}

const form = ref({
  title: '',
  category: 'Juara',
  author: '',
  date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
  image: '',
  excerpt: '',
  slug: '',
  description: ''
})

onMounted(async () => {
  if (isEdit) {
    try {
      const data: any = await $fetch(`/api/gallery/${props.id}`)
      if (data) {
        if (auth.user?.role === 'author' && data.author !== auth.user?.name) {
             alert('Anda tidak memiliki akses untuk mengedit karya ini.')
             router.push(props.basePath)
             return
        }
        form.value = {
            title: data.title,
            category: data.category,
            author: data.author,
            date: new Date(data.created_at).toLocaleDateString('id-ID'),
            image: data.image_url,
            excerpt: data.description, // UI uses excerpt, DB uses description
            description: data.description,
            slug: ''
        }
      }
    } catch (e) {
      console.error('Failed to fetch gallery', e)
    }
  } else if (auth.user?.role === 'author') {
    // Auto-fill author for new items
    form.value.author = auth.user.name || ''
  }
})

async function saveContent() {
  isLoading.value = true
  if (auth.user?.role === 'author') {
    form.value.author = auth.user.name || ''
  }

  if (!form.value.image) {
      alert('Mohon upload gambar karya terlebih dahulu.')
      isLoading.value = false
      return
  }

  // Use description field as excerpt for API
  // form.value.description = form.value.excerpt

  try {
      const payload = {
          title: form.value.title,
          image_url: form.value.image,
          category: form.value.category,
          author: form.value.author,
          author_id: auth.user?.id, // Send author_id
          description: form.value.excerpt, // Using excerpt input as description
          user_role: auth.user?.role // Send role so backend can set is_approved
      }

      if (isEdit) {
        await $fetch(`/api/gallery/${props.id}`, {
            method: 'PUT',
            body: payload
        })
        alert('Karya berhasil diperbarui!')
      } else {
        await $fetch('/api/gallery', {
            method: 'POST',
            body: payload
        })
        alert('Karya berhasil ditambahkan!')
      }
      router.push(props.basePath)
  } catch (error: any) {
      alert(error.data?.statusMessage || 'Gagal menyimpan karya')
  } finally {
      isLoading.value = false
  }
}
</script>
