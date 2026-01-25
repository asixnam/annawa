<template>
  <div class="max-w-2xl mx-auto">
    <div class="mb-6">
      <NuxtLink to="/super-admin/users" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Daftar User</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Tambah Admin Baru</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="saveUser" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
          <input type="text" v-model="form.name" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Email</label>
          <input type="email" v-model="form.email" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Password</label>
          <input type="password" v-model="form.password" required placeholder="Minimal 6 karakter" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
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

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink to="/super-admin/users" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">Simpan User</button>
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
  email: '',
  password: '',
  role: 'admin:paud'
})

function saveUser() {
  // TODO: Call API to create user
  alert('User baru berhasil ditambahkan!')
  router.push('/super-admin/users')
}
</script>
