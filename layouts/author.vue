<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed inset-y-0 z-50">
      <div class="h-16 flex items-center px-6 border-b border-gray-200">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold">
            AU
          </div>
          <span class="font-bold text-gray-800 tracking-tight">Author Panel</span>
        </NuxtLink>
      </div>
      
      <div class="flex-1 overflow-y-auto py-4">
        <nav class="space-y-1 px-3">
          <!-- Author Menu -->
          <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">Kreatif</p>
           <NuxtLink to="/author" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 group transition-all" active-class="bg-green-50 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 group-[.router-link-active]:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Kelola Galeri
          </NuxtLink>
          
          <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-6">Pengaturan</p>
          <NuxtLink to="/author/settings" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 group transition-all" active-class="bg-green-50 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 group-[.router-link-active]:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profil Saya
          </NuxtLink>
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
        <NuxtLink to="/" class="font-bold text-gray-800">Author Panel</NuxtLink>
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

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>
