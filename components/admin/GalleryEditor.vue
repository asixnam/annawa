<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <NuxtLink :to="basePath" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Daftar</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">{{ isEdit ? 'Edit Karya' : 'Tambah Karya Baru' }}</h1>
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
           <div @click="triggerFileInput" class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer relative overflow-hidden">
             <template v-if="form.image">
               <img :src="form.image" class="absolute inset-0 w-full h-full object-cover opacity-20">
               <div class="relative z-10">
                 <p class="font-bold text-brand-600">Gambar Terpilih</p>
                 <p class="text-xs text-gray-400">Klik untuk mengganti</p>
               </div>
             </template>
             <template v-else>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
               <span class="text-sm text-gray-500">Klik untuk upload gambar (Opsional untuk Literasi)</span>
             </template>
             <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleFileUpload">
           </div>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink :to="basePath" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">
            {{ isEdit ? 'Simpan Perubahan' : 'Tambah ke Galeri' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useContentStore } from '~/stores/content'
import { useAuthStore } from '~/stores/auth'

const props = defineProps<{
  id?: string
  basePath: string
}>()

const router = useRouter()
const store = useContentStore()
const auth = useAuthStore()
const isEdit = !!props.id
const fileInput = ref<HTMLInputElement | null>(null)

const form = ref({
  title: '',
  category: 'Juara',
  author: '',
  date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
  image: '',
  excerpt: '',
  slug: ''
})

onMounted(() => {
  if (isEdit) {
    const existing = store.gallery.find(g => g.id === parseInt(props.id!))
    if (existing) {
      // Security check: if author, only can edit their own
      if (auth.user?.role === 'author' && existing.author !== auth.user?.name) {
        alert('Anda tidak memiliki akses untuk mengedit karya ini.')
        router.push(props.basePath)
        return
      }
      form.value = { ...existing }
    }
  } else if (auth.user?.role === 'author') {
    // Auto-fill author for new items
    form.value.author = auth.user.name
  }
})

function triggerFileInput() {
  fileInput.value?.click()
}

function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.image = e.target?.result as string
    }
    reader.readAsDataURL(target.files[0])
  }
}

function saveContent() {
  if (auth.user?.role === 'author') {
    form.value.author = auth.user.name
  }

  if (!form.value.slug) {
    form.value.slug = form.value.title.toLowerCase().replace(/ /g, '-')
  }

  if (isEdit) {
    store.updateGallery(parseInt(props.id!), { ...form.value })
    alert('Karya berhasil diperbarui!')
  } else {
    store.addGallery({ ...form.value })
    alert('Karya berhasil ditambahkan!')
  }
  router.push(props.basePath)
}
</script>
