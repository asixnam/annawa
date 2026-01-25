<template>
  <div class="max-w-2xl mx-auto">
    <div class="mb-6">
      <NuxtLink to="/super-admin/testimonials" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Testimoni</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Tambah Testimoni</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="saveTestimonial" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Nama Alumni</label>
            <input v-model="form.name" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Angkatan</label>
            <input v-model="form.batch" placeholder="Alumni 20xx" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Profesi / Status</label>
          <input v-model="form.profession" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Foto (URL)</label>
          <input v-model="form.image" placeholder="https://..." class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Testimoni</label>
          <textarea v-model="form.quote" rows="4" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"></textarea>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink to="/super-admin/testimonials" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">Simpan Testimoni</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: 'super-admin' })
const router = useRouter()

const form = ref({
  name: '',
  batch: '',
  profession: '',
  image: 'https://via.placeholder.com/150',
  quote: ''
})

function saveTestimonial() {
  alert('Testimoni berhasil ditambahkan!')
  router.push('/super-admin/testimonials')
}
</script>
