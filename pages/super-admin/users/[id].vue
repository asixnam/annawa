<template>
  <div class="max-w-2xl mx-auto">
    <div class="mb-6">
      <NuxtLink to="/super-admin/users" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Daftar User</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Detail & Edit User</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <div v-if="loading" class="text-center py-10 text-gray-500">Memuat data...</div>
      
      <form v-else @submit.prevent="updateUser" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
          <input type="text" v-model="form.name" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Email</label>
          <input type="email" v-model="form.email" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
        </div>

        <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
          <label class="block text-sm font-bold text-yellow-800 mb-2">Ubah Password (Opsional)</label>
          <input type="password" v-model="form.password" placeholder="Kosongkan jika tidak ingin mengubah" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Role / Hak Akses</label>
          <select v-model="form.role" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
            <option value="admin:paud">Admin PAUD</option>
            <option value="admin:sd">Admin SDQTA</option>
            <option value="admin:pondok">Admin Pondok</option>
            <option value="admin:santri">Admin Kesantrian</option>
            <option value="author">Author (Penulis)</option>
            <option value="super">Super Admin</option>
          </select>
        </div>

        <div class="pt-6 border-t border-gray-100 flex justify-between items-center">
          <button type="button" @click="deleteUser" class="text-red-600 hover:text-red-800 font-bold text-sm">Hapus User Ini</button>
          
          <div class="flex gap-3">
            <NuxtLink to="/super-admin/users" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
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
  name: '',
  email: '',
  password: '',
  role: ''
})

onMounted(() => {
  // Mock fetch data based on route.params.id
  setTimeout(() => {
    // Simulate finding user
    form.value = {
      id: route.params.id as string,
      name: 'Admin PAUD',
      email: 'admin@local',
      password: '',
      role: 'admin:paud'
    }
    loading.value = false
  }, 500)
})

function updateUser() {
  alert('Data user berhasil diperbarui!')
  router.push('/super-admin/users')
}

function deleteUser() {
  if (confirm('Yakin hapus user ini secara permanen?')) {
    alert('User dihapus.')
    router.push('/super-admin/users')
  }
}
</script>
