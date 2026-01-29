<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed inset-y-0 z-50">
      <div class="h-16 flex items-center px-6 border-b border-gray-200">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            AD
          </div>
          <span class="font-bold text-gray-800 tracking-tight">Admin Unit</span>
        </NuxtLink>
      </div>
      
      <div class="flex-1 overflow-y-auto py-4">
        <nav class="space-y-6 px-3">
          <div v-for="group in menuGroups" :key="group.label">
            <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{{ group.label }}</p>
            <div class="space-y-1">
              <NuxtLink 
                v-for="item in group.items" 
                :key="item.name"
                :to="item.path" 
                class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all" 
                active-class="bg-blue-50 text-blue-600"
              >
                <div v-html="item.icon" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-blue-500 group-[.router-link-active]:text-blue-500"></div>
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>

      <div class="p-4 border-t border-gray-200">
        <button @click="logout" class="flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 md:pl-64 flex flex-col min-h-screen">
      <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:hidden">
        <NuxtLink to="/" class="font-bold text-gray-800">Admin Unit</NuxtLink>
        <button class="p-2 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      
      <div class="p-6 lg:p-10 flex-1">
        <slot />
      </div>

      <footer class="bg-white border-t border-gray-200 py-4 px-6 text-center md:text-left">
        <p class="text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} Pondok Pesantren Khozinatul Ulum An-Nawa</p>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const auth = useAuthStore()
const router = useRouter()

const dashboardPath = computed(() => {
  const role = auth.user?.role
  if (role === 'admin:paud') return '/admin/paud'
  if (role === 'admin:sd') return '/admin/sdqta'
  if (role === 'admin:pondok') return '/admin/pondok'
  if (role === 'admin:santri') return '/admin/santri'
  return '/admin'
})

const icons = {
  dashboard: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>',
  users: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
  registration: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
  news: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>',
  gallery: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
  discipline: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>',
  permit: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>',
  room: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>'
}

const menuGroups = computed(() => {
  const role = auth.user?.role
  
  if (role === 'admin:paud') {
    return [
      { label: 'Main Menu', items: [{ name: 'Dashboard', path: '/admin/paud', icon: icons.dashboard }] },
      { label: 'Lembaga PAUD', items: [
        { name: 'Data Siswa PAUD', path: '/admin/paud/students', icon: icons.users },
        { name: 'Galeri', path: '#', icon: icons.gallery },
      ]}
    ]
  }

  if (role === 'admin:sd') {
    return [
      { label: 'Main Menu', items: [{ name: 'Dashboard', path: '/admin/sdqta', icon: icons.dashboard }] },
      { label: 'Lembaga SDQTA', items: [
        { name: 'Data Murid SDQTA', path: '/admin/sdqta/students', icon: icons.users },
        { name: 'Berita SDQTA', path: '#', icon: icons.news },
      ]}
    ]
  }

  if (role === 'admin:pondok') {
    return [
      { label: 'Main Menu', items: [{ name: 'Dashboard', path: '/admin/pondok', icon: icons.dashboard }] },
      { label: 'Pondok Pesantren', items: [
        { name: 'Data Santri', path: '/admin/pondok/students', icon: icons.users },
      ]}
    ]
  }

  // Super or Default
  return [
    { label: 'Main Menu', items: [{ name: 'Dashboard', path: '/admin', icon: icons.dashboard }] },
    { label: 'Settings', items: [
      { name: 'User Management', path: '#', icon: icons.users },
      { name: 'Logs', path: '#', icon: icons.news },
    ]}
  ]
})

function logout() {
  auth.logout()
  router.push('/login')
}
</script>
