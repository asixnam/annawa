<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-main">Manajemen User</h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Kelola akses dan peran pengguna berdasarkan kategori.</p>
      </div>
      <NuxtLink to="/super-admin/users/create" class="px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20 active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        Admin
      </NuxtLink>
    </div>

    <!-- Section: Super Admin -->
    <section>
      <div class="flex items-center gap-2 mb-4">
        <div class="h-8 w-1.5 bg-brand-600 rounded-full"></div>
        <h2 class="text-lg font-bold text-main tracking-tight">Super Admin</h2>
        <span class="px-2 py-0.5 bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 text-xs font-bold rounded-md border border-brand-100 dark:border-brand-800/50">
          {{ groupedUsers.super.length }}
        </span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="user in groupedUsers.super" :key="user.id" class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="h-12 w-12 rounded-xl bg-brand-100 dark:bg-brand-900/40 overflow-hidden flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-lg ring-2 ring-white dark:ring-gray-800">
                <img v-if="user.image_url" :src="user.image_url" class="h-full w-full object-cover">
                <span v-else>{{ user.name.charAt(0) }}</span>
              </div>
              <div>
                <h3 class="font-bold text-main leading-tight">{{ user.name }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</p>
              </div>
            </div>
            <div class="flex gap-2">
              <NuxtLink :to="`/super-admin/users/${user.id}`" class="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Admin Per Lembaga -->
    <section>
      <div class="flex items-center gap-2 mb-4">
        <div class="h-8 w-1.5 bg-blue-600 rounded-full"></div>
        <h2 class="text-lg font-bold text-main tracking-tight">Admin Lembaga</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div v-for="(admins, unit) in groupedUsers.admin" :key="unit" class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold text-gray-400 uppercase tracking-widest">{{ unit }}</h3>
            <span class="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">{{ admins.length }} / 2</span>
          </div>
          <div class="space-y-3">
            <div v-for="user in admins" :key="user.id" class="bg-card p-4 rounded-xl border border-gray-100 dark:border-brand-400/20 shadow-sm hover:border-blue-200 dark:hover:border-blue-800 transition">
              <div class="flex items-center justify-between">
                <div class="min-w-0">
                  <h4 class="font-bold text-main truncate text-sm">{{ user.name }}</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ user.email }}</p>
                </div>
                <div class="flex shrink-0">
                  <NuxtLink :to="`/super-admin/users/${user.id}`" class="p-1.5 text-gray-400 hover:text-blue-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- Empty state for admin slots -->
            <div v-if="admins.length < 2" class="border-2 border-dashed border-gray-100 rounded-xl p-4 flex items-center justify-center group cursor-pointer hover:border-blue-100 hover:bg-gray-50 transition">
              <NuxtLink to="/super-admin/users/create" class="text-xs font-medium text-gray-400 group-hover:text-blue-500 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
                Tambah Slot
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Author -->
    <section>
      <div class="flex items-center gap-2 mb-4">
        <div class="h-8 w-1.5 bg-purple-600 rounded-full"></div>
        <h2 class="text-lg font-bold text-gray-800 tracking-tight">Author / Ustadz</h2>
        <span class="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-bold rounded-md border border-purple-100">
          {{ groupedUsers.author.length }}
        </span>
      </div>
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50/50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nama</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100">
              <tr v-for="user in groupedUsers.author" :key="user.id" class="hover:bg-gray-50/50 transition">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-xl bg-purple-100 overflow-hidden flex items-center justify-center text-purple-600 font-bold mr-3 uppercase text-xs ring-2 ring-gray-50">
                      <img v-if="user.image_url" :src="user.image_url" class="h-full w-full object-cover">
                      <span v-else>{{ user.name.charAt(0) }}</span>
                    </div>
                    <div class="text-sm font-bold text-gray-900">{{ user.name }}</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.email }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'px-2.5 py-1 rounded-lg text-xs font-bold border',
                    user.status === 'verified' ? 'bg-green-50 text-green-700 border-green-100' :
                    user.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                    'bg-red-50 text-red-700 border-red-100'
                  ]">
                    {{ user.status || 'verified' }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button v-if="user.status === 'pending'" @click="verifyUser(user.id)" class="text-green-600 hover:text-green-900 font-bold mr-4">Verifikasi</button>
                  <NuxtLink :to="`/super-admin/users/${user.id}`" class="text-brand-600 hover:text-brand-900 font-bold mr-4">Edit</NuxtLink>
                  <button @click="deleteUser(user.id)" class="text-red-500 hover:text-red-700 font-bold">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="groupedUsers.author.length === 0" class="p-8 text-center">
            <p class="text-gray-400 text-sm italic">Belum ada data author.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Pengguna Umum (User) -->
    <section>
      <div class="flex items-center gap-2 mb-4 mt-8">
        <div class="h-8 w-1.5 bg-green-600 rounded-full"></div>
        <h2 class="text-lg font-bold text-gray-800 dark:text-gray-200 tracking-tight">Calon Anggota</h2>
        <span class="px-2 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-md border border-green-100 dark:border-green-800/50">
          {{ groupedUsers.user.length }}
        </span>
      </div>
      <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead class="bg-gray-50/50 dark:bg-gray-800/50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Nama</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
              <tr v-for="u in groupedUsers.user" :key="u.id" class="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-xl bg-green-100 dark:bg-green-900/40 overflow-hidden flex items-center justify-center text-green-600 dark:text-green-400 font-bold mr-3 uppercase text-xs ring-2 ring-gray-50 dark:ring-gray-800">
                      <img v-if="u.image_url" :src="u.image_url" class="h-full w-full object-cover">
                      <span v-else>{{ u.name.charAt(0) }}</span>
                    </div>
                    <div class="text-sm font-bold text-gray-900 dark:text-gray-100">{{ u.name }}</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{{ u.email }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <NuxtLink :to="`/super-admin/users/${u.id}`" class="text-brand-600 hover:text-brand-900 dark:text-brand-400 dark:hover:text-brand-300 font-bold mr-4">Edit</NuxtLink>
                  <button @click="deleteUser(u.id)" class="text-red-500 hover:text-red-700 font-bold">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="groupedUsers.user.length === 0" class="p-8 text-center">
            <p class="text-gray-400 text-sm italic">Belum ada data pengguna umum.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout: 'super-admin' })

const { data: users, refresh } = await useFetch('/api/users')

const groupedUsers = computed(() => {
  const groups = {
    super: [] as any[],
    admin: {
      'Pondok': [] as any[],
      'PAUD': [] as any[],
      'SDQTA': [] as any[]
    },
    author: [] as any[],
    user: [] as any[]
  }

  if (!users.value) return groups

  users.value.forEach((user: any) => {
    if (user.role === 'super') {
      groups.super.push(user)
    } else if (user.role === 'author') {
      groups.author.push(user)
    } else if (user.role === 'user') {
      groups.user.push(user)
    } else if (user.role.startsWith('admin:')) {
      const parts = user.role.split(':')
      if (parts.length > 1) {
        let unit = parts[1].toUpperCase()
        if (unit === 'SDQTA' || unit === 'SD') {
          groups.admin['SDQTA'].push(user)
        } else if (unit === 'PONDOK') {
          groups.admin['Pondok'].push(user)
        } else if (unit === 'PAUD') {
          groups.admin['PAUD'].push(user)
        }
      }
    }
  })

  return groups
})

async function verifyUser(id: number) {
  if (!confirm('Apakah Anda yakin ingin memverifikasi user ini?')) return

  try {
    await $fetch(`/api/users/${id}`, {
      method: 'PUT',
      body: { status: 'verified' }
    })
    refresh()
  } catch (error) {
    alert('Gagal memverifikasi user')
  }
}

async function deleteUser(id: number) {
  if (!confirm('Apakah Anda yakin ingin menghapus user ini?')) return

  try {
    await $fetch(`/api/users/${id}`, { method: 'DELETE' })
    refresh() // Reload data
  } catch (error) {
    alert('Gagal menghapus user')
  }
}
</script>
