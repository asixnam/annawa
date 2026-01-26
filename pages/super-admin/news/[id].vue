<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <NuxtLink to="/super-admin/news" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Daftar Berita</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Edit Berita</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="updateContent" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Judul Berita</label>
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
          <label class="block text-sm font-bold text-gray-700 mb-2">Gambar Unggulan</label>
          <div class="flex items-center gap-4">
            <img v-if="form.image" :src="form.image" class="w-24 h-24 object-cover rounded-lg border border-gray-200">
            <div v-else class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">No Image</div>
            <button type="button" class="px-4 py-2 border border-brand-200 text-brand-600 rounded-lg text-sm font-bold hover:bg-brand-50">Upload Gambar Baru</button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Isi Berita</label>
          <textarea rows="15" v-model="form.content" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm leading-relaxed"></textarea>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink to="/super-admin/news" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
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

const form = ref({
  title: '',
  type: 'Berita',
  date: '',
  image: '',
  content: ''
})

onMounted(() => {
  // Mocking data
  form.value = {
    title: 'Wisuda Tahfidz 2026',
    type: 'Berita',
    date: '2026-01-20',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400',
    content: 'Alhamdulillah telah terlaksana wisuda akbar penghafal Al-Quran tahun 2026...'
  }
})

function updateContent() {
  alert('Perubahan berhasil disimpan!')
  router.push('/super-admin/news')
}
</script>
