<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <NuxtLink to="/super-admin/kajian" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Daftar Kajian</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Tambah Jadwal Kajian</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="saveKajian" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Nama Kitab / Judul Kajian</label>
          <input type="text" v-model="form.title" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-lg font-bold" placeholder="Contoh: Kitab Fathul Qorib">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Kategori Kajian</label>
            <select v-model="form.category" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Pengampu / Ustadz</label>
            <input type="text" v-model="form.ustadz" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Nama Kiai/Ustadz">
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Waktu & Jadwal</label>
            <input type="text" v-model="form.time" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Contoh: Senin & Kamis, 19:30 WIB">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Lokasi / Tempat</label>
            <input type="text" v-model="form.location" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Contoh: Masjid Utama / Aula Pondok">
          </div>
        </div>

        <div>
           <label class="block text-sm font-bold text-gray-700 mb-2">Slug (URL)</label>
           <input type="text" v-model="form.slug" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-500" placeholder="otomatis-dari-judul">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Deskripsi Materi</label>
          <textarea rows="5" v-model="form.description" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm leading-relaxed" placeholder="Tulis deskripsi singkat mengenai kajian ini..."></textarea>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink to="/super-admin/kajian" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">Simpan Jadwal</button>
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

const categories = ['Sorogan', 'Tahfidzul Quran', 'Bahtsul Masail', 'Bandongan']

const form = ref({
  title: '',
  category: 'Sorogan',
  ustadz: '',
  time: '',
  location: '',
  slug: '',
  description: ''
})

// Auto slugify title
watch(() => form.value.title, (newTitle) => {
  form.value.slug = newTitle
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
})

function saveKajian() {
  alert('Jadwal kajian berhasil ditambahkan!')
  router.push('/super-admin/kajian')
}
</script>
