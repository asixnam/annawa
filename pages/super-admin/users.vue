<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Manajemen Pengguna</h1>
        <p class="text-gray-500 text-sm">Kelola admin, author, veirifikasi pendaftaran akun.</p>
      </div>
      <button @click="showAddModal = true" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>
        Tambah Admin
      </button>
    </div>

    <!-- Filters -->
    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex gap-4">
      <button 
        v-for="filter in filters" 
        :key="filter.value"
        @click="activeFilter = filter.value"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
        :class="activeFilter === filter.value ? 'bg-brand-50 text-brand-700 font-bold' : 'text-gray-500 hover:bg-gray-50'"
      >
        {{ filter.label }}
      </button>
    </div>

    <!-- Users Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tanggal Daftar</th>
            <th scope="col" class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <div class="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-lg">
                    {{ user.name.charAt(0) }}
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-bold text-gray-900">{{ user.name }}</div>
                  <div class="text-sm text-gray-500">{{ user.email }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full uppercase tracking-wide"
                :class="{
                  'bg-purple-100 text-purple-800': user.role === 'super',
                  'bg-blue-100 text-blue-800': user.role.startsWith('admin'),
                  'bg-green-100 text-green-800': user.role === 'author',
                  'bg-gray-100 text-gray-800': user.role === 'user'
                }"
              >
                {{ formatRole(user.role) }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full"
                :class="user.active ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'"
              >
                {{ user.active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ user.joinedAt }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
               <button v-if="!user.active && user.role === 'author'" @click="approveUser(user.id)" class="text-brand-600 hover:text-brand-900 mr-4 font-bold">Approve</button>
               <button class="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
               </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Tambah Admin (Simplified) -->
    <div v-if="showAddModal" class="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showAddModal = false"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Tambah Admin Baru</h3>
            <div class="mt-4 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Role</label>
                <select class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm">
                  <option value="admin:pondok">Admin Pondok</option>
                  <option value="admin:sd">Admin SDQTA</option>
                  <option value="admin:paud">Admin PAUD</option>
                </select>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-600 text-base font-medium text-white hover:bg-brand-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm" @click="showAddModal = false">Simpan</button>
            <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="showAddModal = false">Batal</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'super-admin',
  middleware: (to, from) => {
    // Only super admin can access
  }
})

const showAddModal = ref(false)
const activeFilter = ref('all')

const filters = [
  { label: 'Semua', value: 'all' },
  { label: 'Admin', value: 'admin' },
  { label: 'Author', value: 'author' },
  { label: 'Pending Author', value: 'pending' }
]

const users = ref([
  { id: 1, name: 'Super Admin', email: 'super@annawa.com', role: 'super', active: true, joinedAt: '2023-01-01' },
  { id: 2, name: 'Admin PAUD', email: 'paud@annawa.com', role: 'admin:paud', active: true, joinedAt: '2023-05-12' },
  { id: 3, name: 'Admin SD', email: 'sd@annawa.com', role: 'admin:sd', active: true, joinedAt: '2023-06-20' },
  { id: 4, name: 'Ustadz Fulan', email: 'fulan@annawa.com', role: 'author', active: true, joinedAt: '2023-08-15' },
  { id: 5, name: 'Santri Writer', email: 'writer@annawa.com', role: 'author', active: false, joinedAt: '2025-01-20' },
])

const filteredUsers = computed(() => {
  if (activeFilter.value === 'all') return users.value
  if (activeFilter.value === 'admin') return users.value.filter(u => u.role.startsWith('admin'))
  if (activeFilter.value === 'author') return users.value.filter(u => u.role === 'author')
  if (activeFilter.value === 'pending') return users.value.filter(u => !u.active && u.role === 'author')
  return users.value
})

function formatRole(role: string) {
  if (role === 'super') return 'Super Admin'
  if (role === 'admin:paud') return 'Admin PAUD'
  if (role === 'admin:sd') return 'Admin SD'
  if (role === 'admin:pondok') return 'Admin Pondok'
  return role.charAt(0).toUpperCase() + role.slice(1)
}

function approveUser(id: number) {
  const user = users.value.find(u => u.id === id)
  if (user) user.active = true
}
</script>
