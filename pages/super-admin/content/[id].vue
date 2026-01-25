<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <NuxtLink to="/super-admin/content" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Daftar</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Edit Konten</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <div v-if="loading" class="text-center py-10">Loading...</div>
      <form v-else @submit.prevent="updateContent" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Judul</label>
          <input type="text" v-model="form.title" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-lg font-bold">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Kategori / Tipe</label>
            <select v-model="form.type" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option value="Berita">Berita</option>
              <option value="Kajian">Kajian</option>
              <option value="Pengumuman">Pengumuman</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Tanggal Publikasi</label>
            <input type="date" v-model="form.date" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
          </div>
        </div>

       <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Gambar Unggulan</label>
          <div class="flex gap-4">
             <div v-if="form.image" class="w-32 h-20 rounded-lg overflow-hidden border border-gray-200">
               <img :src="form.image" class="w-full h-full object-cover">
             </div>
             <div class="flex-1 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
               <span class="text-sm text-gray-500">Ganti Gambar</span>
             </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Isi Konten</label>
          <textarea rows="15" v-model="form.content" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm leading-relaxed"></textarea>
        </div>

        <div class="pt-6 border-t border-gray-100 flex justify-between items-center">
          <button type="button" @click="deleteContent" class="text-red-600 hover:text-red-800 font-bold text-sm">Hapus Konten</button>
          
          <div class="flex gap-3">
            <NuxtLink to="/super-admin/content" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
            <button type="submit" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">Simpan Perubahan</button>
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

const form = ref({
  id: '',
  title: '',
  type: '',
  date: '',
  image: '',
  content: ''
})

onMounted(() => {
  setTimeout(() => {
    // Mock Data
    form.value = {
      id: route.params.id as string,
      title: 'Wisuda Tahfidz 2026',
      type: 'Berita',
      date: '2026-01-20',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400',
      content: 'Isi berita lengkap...'
    }
    loading.value = false
  }, 500)
})

function updateContent() {
  alert('Konten diperbarui!')
  router.push('/super-admin/content')
}

function deleteContent() {
  if (confirm('Hapus konten ini?')) {
    alert('Konten dihapus.')
    router.push('/super-admin/content')
  }
}
</script>
