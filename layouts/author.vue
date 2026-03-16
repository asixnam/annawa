<template>
  <div class="h-screen bg-light flex overflow-hidden transition-colors duration-300">
    <!-- Mobile Sidebar Backdrop -->
    <div 
      v-if="isSidebarOpen" 
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Sidebar -->
    <aside 
      class="w-64 bg-card border-r border-gray-200 dark:border-brand-400/30 flex flex-col fixed inset-y-0 z-50 transition-transform duration-300 ease-in-out md:translate-x-0 md:static overflow-y-auto"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="h-16 flex items-center px-6 border-b border-gray-200 dark:border-brand-400/20 justify-between">
        <NuxtLink to="/author" class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold overflow-hidden ring-2 ring-white dark:ring-gray-800 shrink-0 shadow-sm">
            <img v-if="auth.user?.image_url" :src="auth.user.image_url" class="w-full h-full object-cover">
            <span v-else>{{ authorInitials }}</span>
          </div>
          <span class="font-bold text-main tracking-tight truncate">{{ auth.user?.name?.split(' ')[0] || 'Author Panel' }}</span>
        </NuxtLink>
        <div class="flex items-center gap-2">
          <ThemeToggle />
          <!-- Close button for mobile -->
          <button @click="isSidebarOpen = false" class="md:hidden text-gray-500 hover:text-main">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <div class="flex-1 py-4">
        <nav class="space-y-1 px-3">
          <!-- Author Menu -->
          <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">Kreatif</p>
           <NuxtLink to="/author" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-main hover:bg-black/5 dark:hover:bg-white/5 group transition-all" active-class="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 group-[.router-link-active]:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Kelola Galeri
          </NuxtLink>
          
          <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-6">Pengaturan</p>
          <NuxtLink to="/author/settings" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-main hover:bg-black/5 dark:hover:bg-white/5 group transition-all" active-class="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 group-[.router-link-active]:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profil Saya
          </NuxtLink>
        </nav>
      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800/40">
        <button @click="logout" class="flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
        </button>
      </div>
    </aside>

    <!-- Main Content Wrapper -->
    <div class="flex-1 flex flex-col h-full overflow-hidden">
      <!-- Navbar (Mobile only) -->
      <header class="bg-card border-b border-gray-200 dark:border-gray-800/40 h-16 flex-shrink-0 flex items-center justify-between px-4 md:hidden z-30 transition-colors duration-300">
        <div class="flex items-center gap-2">
          <button @click="isSidebarOpen = true" class="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span class="font-bold text-main">Author Panel</span>
        </div>
        <ThemeToggle />
      </header>
      
      <!-- Scrollable Main Area -->
      <main class="flex-1 overflow-y-auto transition-colors duration-300">
        <div class="min-h-full flex flex-col">
          <div class="flex-1 p-6 lg:p-10">
            <slot />
          </div>
          <footer class="bg-card border-t border-gray-200 dark:border-gray-800/40 py-4 px-6 text-center md:text-left transition-colors duration-300">
            <p class="text-sm text-gray-500 dark:text-gray-400">&copy; {{ new Date().getFullYear() }} Pondok Pesantren Khozinatul Ulum An-Nawa</p>
          </footer>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import ThemeToggle from '../components/ThemeToggle.vue'

const isSidebarOpen = ref(false)
const auth = useAuthStore()
const router = useRouter()

const authorInitials = computed(() => {
  if (!auth.user?.name) return 'AU'
  const names = auth.user.name.trim().split(/\s+/)
  if (names.length === 1) return names[0].charAt(0).toUpperCase()
  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase()
})

function logout() {
  auth.logout()
  router.push('/login')
}
</script>
