<template>
  <div class="h-screen bg-gray-50 flex overflow-hidden">
    <!-- Mobile Sidebar Backdrop -->
    <div 
      v-if="isSidebarOpen" 
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Sidebar -->
    <aside 
      class="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 z-50 transition-transform duration-300 ease-in-out md:translate-x-0 md:static overflow-y-auto"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="h-16 flex-shrink-0 flex items-center px-6 border-b border-gray-200 justify-between sticky top-0 bg-white z-10">
        <NuxtLink to="/super-admin" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold">
            SA
          </div>
          <span class="font-bold text-gray-800 tracking-tight">Super Admin</span>
        </NuxtLink>
        <!-- Close button for mobile -->
        <button @click="isSidebarOpen = false" class="md:hidden text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="flex-1 py-4">
        <nav class="space-y-1 px-3">
          <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">Main Menu</p>
          <NuxtLink to="/super-admin" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </NuxtLink>
          <NuxtLink to="/super-admin/users" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Manajemen User
          </NuxtLink>
          

          <NuxtLink to="/super-admin/students" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Data Santri
          </NuxtLink>
          
          <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">Web Content</p>
          <NuxtLink to="/super-admin/landing" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Landing Page
          </NuxtLink>
          <NuxtLink to="/super-admin/units" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Manajemen Unit (PAUD/SD)
          </NuxtLink>
          <NuxtLink to="/super-admin/profile" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profil (Tentang Kami)
          </NuxtLink>
          <NuxtLink to="/super-admin/history" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sejarah
          </NuxtLink>

          <NuxtLink to="/super-admin/news" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Manajemen Berita
          </NuxtLink>

          <NuxtLink to="/super-admin/kajian" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Manajemen Kajian
          </NuxtLink>
          
          <NuxtLink to="/super-admin/testimonials" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Kata Alumni
          </NuxtLink>
          <NuxtLink to="/super-admin/gallery" @click="isSidebarOpen = false" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-600 group transition-all" active-class="bg-brand-50 text-brand-600">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-brand-500 group-[.router-link-active]:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Galeri
          </NuxtLink>
      <div class="p-4 border-t border-gray-200">
        <button @click="logout" class="flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
        </button>
      </div>
        </nav>
          </div>   
    </aside>

    <!-- Main Content Wrapper -->
    <div class="flex-1 flex flex-col h-full overflow-hidden">
      <!-- Navbar (Mobile only) -->
      <header class="bg-white border-b border-gray-200 h-16 flex-shrink-0 flex items-center justify-between px-4 md:hidden z-30">
        <div class="flex items-center gap-2">
          <button @click="isSidebarOpen = true" class="p-2 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span class="font-bold text-gray-800">Super Admin</span>
        </div>
      </header>
      
      <!-- Scrollable Main Area -->
      <main class="flex-1 overflow-y-auto p-6 lg:p-10">
        <slot />
        <SuperAdminFooter />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import SuperAdminFooter from '../components/SuperAdminFooter.vue'

const isSidebarOpen = ref(false)
const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>
