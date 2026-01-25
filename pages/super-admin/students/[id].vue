<template>
  <div class="max-w-2xl mx-auto">
    <div class="mb-6">
      <NuxtLink to="/super-admin/students" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Data Santri</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Edit Data Santri</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="updateStudent" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Unit Pendidikan</label>
          <select v-model="form.unit" disabled class="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none text-gray-500 cursor-not-allowed">
            <option value="paud">PAUD An-Nawa</option>
            <option value="sd">SDQTA</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
          <input type="text" v-model="form.name" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">NIS</label>
            <input type="text" v-model="form.nis" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Kelas</label>
            <input type="text" v-model="form.class" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Nama Wali Murid</label>
          <input type="text" v-model="form.parent" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink to="/super-admin/students" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
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
  id: '',
  unit: 'paud',
  name: '',
  nis: '',
  class: '',
  parent: ''
})

onMounted(() => {
  // Mock fetch
  form.value = {
    id: route.params.id as string,
    unit: 'paud',
    name: 'Ahmad Kecil',
    nis: '2024001',
    class: 'A',
    parent: 'Bpk. Budi'
  }
})

function updateStudent() {
  alert('Data santri diperbarui!')
  router.push('/super-admin/students')
}
</script>
