<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <NuxtLink to="/super-admin/gallery" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Daftar Galeri</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Edit Karya Galeri</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="updateItem" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Judul Karya</label>
          <input type="text" v-model="form.title" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-lg font-bold">
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
            <input type="text" v-model="form.author" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Slug (URL)</label>
            <input type="text" v-model="form.slug" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-500">
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Gambar Karya</label>
          <div class="flex items-center gap-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <img v-if="form.image" :src="form.image" class="w-32 h-32 object-cover rounded-lg shadow-sm">
            <div v-else class="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">No Image</div>
            <div class="flex-1">
              <button type="button" class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-bold hover:bg-gray-50 transition">Ganti Gambar</button>
              <p class="text-xs text-gray-500 mt-2 italic">Format: JPG, PNG, WEBP. Maks 2MB.</p>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Kutipan / Deskripsi Singkat</label>
          <textarea rows="4" v-model="form.excerpt" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm leading-relaxed"></textarea>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink to="/super-admin/gallery" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">Simpan Perubahan</button>
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

const categories = ['Juara', 'Literasi', 'Kesenian', 'Khitobah']

const form = ref({
  title: '',
  category: '',
  date: '',
  author: '',
  slug: '',
  image: '',
  excerpt: ''
})

onMounted(() => {
  // In a real app, fetch data by route.params.id
  // Mocking data for now
  form.value = {
    title: 'Juara 1 MTQ Nasional',
    category: 'Juara',
    date: '2026-01-20',
    author: 'Majid Al-Fatih',
    slug: 'juara-1-mtq-nasional',
    image: 'https://images.unsplash.com/photo-1577894780451-9f144e87d2bc?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Prestasi gemilang santri Annawa dalam ajang Musabaqah Tilawatil Quran tingkat nasional tahun 2025.'
  }
})

function updateItem() {
  alert('Perubahan berhasil disimpan!')
  router.push('/super-admin/gallery')
}
</script>
