<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <NuxtLink to="/super-admin/gallery" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Daftar Galeri</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Tambah Karya Galeri</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="saveItem" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Judul Karya</label>
          <input type="text" v-model="form.title" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-lg font-bold" placeholder="Contoh: Juara 1 Kaligrafi Nasional">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Kategori</label>
            <select v-model="form.category" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Tanggal Karya/Prestasi</label>
            <input type="date" v-model="form.date" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Penulis / Kreator</label>
            <input type="text" v-model="form.author" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Nama Santri">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Slug (URL)</label>
            <input type="text" v-model="form.slug" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-500" placeholder="otomatis-dari-judul">
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Gambar Karya (Opsional untuk Literasi)</label>
          <div class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-sm text-gray-500">Klik untuk upload gambar atau drop file di sini</span>
            <input type="file" class="hidden" accept="image/*">
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Kutipan / Deskripsi Singkat</label>
          <textarea rows="4" v-model="form.excerpt" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm leading-relaxed" placeholder="Tulis deskripsi atau kutipan karya..."></textarea>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink to="/super-admin/gallery" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">Simpan ke Galeri</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: 'super-admin' })
const router = useRouter()

const categories = ['Juara', 'Literasi', 'Kesenian', 'Khitobah']

const form = ref({
  title: '',
  category: 'Juara',
  date: new Date().toISOString().substr(0, 10),
  author: '',
  slug: '',
  image: '',
  excerpt: ''
})

// Auto slugify title
watch(() => form.value.title, (newTitle) => {
  form.value.slug = newTitle
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
})

function saveItem() {
  // In a real app, this would be an API call
  alert('Karya galeri berhasil disimpan!')
  router.push('/super-admin/gallery')
}
</script>
