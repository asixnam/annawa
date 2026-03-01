<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">{{ isEdit ? 'Edit Item' : 'Buat Baru' }}</h1>
      <NuxtLink :to="basePath" class="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 border border-amber-600 rounded-lg text-[10px] font-black uppercase tracking-widest text-white transition-all shadow-md shrink-0">
        <img src="https://img.icons8.com/?size=100&id=99287&format=png&color=FFFFFF" alt="Back Arrow" class="w-4 h-4">
      </NuxtLink>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="saveContent" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Judul</label>
          <input type="text" v-model="form.title" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-lg font-bold">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Tipe</label>
            <select v-model="form.type" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option value="Berita">Berita</option>
              <option value="Pengumuman">Pengumuman</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Tanggal Publikasi</label>
            <input type="date" v-model="form.date" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Gambar Utama</label>
          
          <div class="flex items-center gap-4 mb-3">
             <div class="relative group w-full">
                <div class="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition cursor-pointer" @click="$refs.fileInput.click()">
                  <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-gray-200 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-700 truncate">{{ fileName || 'Klik untuk upload gambar...' }}</p>
                    <p class="text-xs text-gray-500">JPG, PNG, JPEG, HEIC (Max 2MB)</p>
                  </div>
                  <div v-if="isUploading" class="animate-spin h-5 w-5 border-2 border-brand-500 border-t-transparent rounded-full"></div>
                </div>
                <input ref="fileInput" type="file" class="hidden" accept="image/*,.heic" @change="handleFileUpload">
             </div>
          </div>

          <input type="text" v-model="form.image" placeholder="Atau masukkan URL gambar eksternal..." class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm mb-2">
          
          <div v-if="form.image" class="mt-2 relative group rounded-xl overflow-hidden bg-gray-100 border border-gray-200 aspect-video md:w-1/2">
             <img :src="form.image" class="w-full h-full object-cover">
             <button type="button" @click="form.image = ''; fileName = ''" class="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-100 group-hover:opacity-100 transition shadow-lg transform hover:scale-110">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Isi Berita</label>
          <textarea rows="15" v-model="form.content" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm leading-relaxed" placeholder="Tulis berita di sini..."></textarea>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink :to="basePath" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" :disabled="isLoading || isUploading" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20 disabled:bg-gray-400 disabled:cursor-not-allowed">
            {{ isLoading ? 'Menyimpan...' : (isEdit ? 'Simpan Perubahan' : 'Publikasi') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  id?: string
  basePath: string
}>()

const router = useRouter()
const isEdit = !!props.id
const isUploading = ref(false)
const isLoading = ref(false)
const fileName = ref('')
const fileInput = ref<HTMLInputElement | null>(null)

const form = ref({
  title: '',
  type: 'Berita',
  date: new Date().toISOString().substr(0, 10),
  image: '',
  content: '',
  excerpt: ''
})

async function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files?.length) return

  const file = target.files[0]
  fileName.value = file.name
  isUploading.value = true

  const formData = new FormData()
  formData.append('file', file)

  try {
    const response: any = await $fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    form.value.image = response.url
  } catch (error: any) {
    alert(error.data?.statusMessage || 'Gagal mengupload gambar')
    fileName.value = ''
  } finally {
    isUploading.value = false
  }
}

onMounted(async () => {
  if (isEdit) {
    try {
      const data: any = await $fetch(`/api/news/${props.id}`)
      if (data) {
        // Map DB fields to Form fields
        form.value = {
            title: data.title,
            type: 'Berita', // DB doesn't store type yet, default to Berita
            date: new Date(data.created_at).toISOString().substr(0, 10),
            image: data.image_url,
            content: data.content,
            excerpt: data.content ? data.content.substring(0, 150) + '...' : ''
        }
      }
    } catch (e) {
      console.error('Failed to fetch news', e)
    }
  }
})

async function saveContent() {
  isLoading.value = true
  try {
    const payload = {
      title: form.value.title,
      content: form.value.content,
      image_url: form.value.image,
      type: form.value.type,
      created_at: form.value.date ? new Date(form.value.date).toISOString().slice(0, 19).replace('T', ' ') : undefined,
      is_published: true
    }

    if (isEdit) {
      await $fetch(`/api/news/${props.id}`, {
        method: 'PUT',
        body: payload
      })
      alert('Berita berhasil diperbarui!')
    } else {
      await $fetch('/api/news', {
        method: 'POST',
        body: payload
      })
      alert('Berita berhasil dipublikasikan!')
    }
    router.push(props.basePath)
  } catch (error: any) {
    alert(error.data?.statusMessage || 'Gagal menyimpan berita')
  } finally {
    isLoading.value = false
  }
}
</script>
