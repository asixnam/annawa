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
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-black font-bold">
            AN
          </div>
          <span class="font-bold text-main tracking-tight">An-Nawa Admin</span>
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
          <!-- Super Admin Menu -->
          <div v-if="auth.hasRole('super')">
            <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">Super Admin</p>
            <NuxtLink to="/super-admin" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-main hover:bg-black/5 dark:hover:bg-white/5 group transition-all" active-class="bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 group-[.router-link-active]:text-brand-500 dark:group-[.router-link-active]:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Dashboard
            </NuxtLink>
            <NuxtLink to="/super-admin/users" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-main hover:bg-black/5 dark:hover:bg-white/5 group transition-all" active-class="bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 group-[.router-link-active]:text-brand-500 dark:group-[.router-link-active]:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Manajemen User
            </NuxtLink>
            <NuxtLink to="/super-admin/news" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-main hover:bg-black/5 dark:hover:bg-white/5 group transition-all" active-class="bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 group-[.router-link-active]:text-brand-500 dark:group-[.router-link-active]:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Manajemen Konten
            </NuxtLink>
          </div>

          <!-- Admin Menu -->
          <div v-if="auth.hasRole('admin:*') || auth.hasRole('super')">
            <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-6">Administrasi</p>
             <NuxtLink to="/admin" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-main hover:bg-black/5 dark:hover:bg-white/5 group transition-all" active-class="bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 group-[.router-link-active]:text-brand-500 dark:group-[.router-link-active]:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Pendaftaran
            </NuxtLink>
          </div>

          <!-- Author Menu -->
          <div v-if="auth.hasRole('author') || auth.hasRole('super')">
            <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-6">Author</p>
             <NuxtLink to="/author" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-main hover:bg-black/5 dark:hover:bg-white/5 group transition-all" active-class="bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 group-[.router-link-active]:text-brand-500 dark:group-[.router-link-active]:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Galeri
            </NuxtLink>
          </div>
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
          <span class="font-bold text-main">An-Nawa Admin</span>
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
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import ThemeToggle from '../components/ThemeToggle.vue'

const isSidebarOpen = ref(false)
const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>
