<template>
  <div class="min-h-screen flex bg-white font-sans">
    <div class="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 max-w-xl mx-auto w-full">
      <div class="w-full space-y-8">
        <div class="text-left">
           <div class="mb-8">
              <h1 class="text-2xl font-bold text-brand-600 tracking-tight uppercase">Pondok Pesantren Annawa</h1>
           </div>
           
           <h2 class="text-3xl font-bold text-gray-900 tracking-tight mb-2">
             Daftar sebagai Author
           </h2>
           <p class="text-base text-gray-500">
             Bergabunglah untuk berkontribusi dalam dokumentasi dan konten pondok.
           </p>
        </div>
        
        <form class="mt-8 space-y-6" @submit.prevent="submit">
          <div v-if="successMsg" class="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>{{ successMsg }}</span>
          </div>

          <div class="space-y-5">
             <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
              <input id="name" type="text" required v-model="form.name" class="appearance-none block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm" placeholder="Nama Lengkap Anda" />
            </div>

            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input id="email" type="email" required v-model="form.email" class="appearance-none block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm" placeholder="email@annawa.com" />
            </div>

             <div>
              <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input id="password" type="password" required v-model="form.password" class="appearance-none block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm" placeholder="Buat password aman" />
            </div>

             <div>
              <label for="portfolio" class="block text-sm font-semibold text-gray-700 mb-2">Alasan Bergabung / Portofolio</label>
              <textarea id="portfolio" rows="3" v-model="form.reason" class="appearance-none block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm" placeholder="Ceritakan sedikit tentang Anda..."></textarea>
            </div>
          </div>

          <div>
            <button type="submit" :disabled="isLoading" class="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all shadow-lg shadow-brand-500/20 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide">
               {{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}
            </button>
          </div>
        </form>

        <p class="text-center text-sm text-gray-500">
          Sudah punya akun? 
          <NuxtLink to="/login" class="font-bold text-brand-600 hover:text-brand-500">
            Masuk Disini
          </NuxtLink>
        </p>
      </div>
    </div>
    
     <!-- Right Side: Hero Image (Reuse) -->
    <div class="hidden lg:block relative w-0 flex-1 bg-gray-900">
      <div class="absolute inset-0 h-full w-full bg-gradient-to-br from-brand-900 to-black opacity-60 z-10"></div>
       <img class="absolute inset-0 h-full w-full object-cover" src="/images/hero-santri.png" alt="Pondok Pesantren Annawa">
       <div class="absolute inset-0 z-20 flex flex-col justify-end p-16 text-white max-w-2xl mx-auto">
          <h3 class="text-4xl font-black font-heading mb-4 leading-tight">Kontribusi untuk Umat</h3>
          <p class="text-lg text-brand-100 opacity-90">Jadilah bagian dari tim kreatif Pondok Pesantren Khozinatul Ulum An-Nawa.</p>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'auth'
})

const form = ref({
  name: '',
  email: '',
  password: '',
  reason: ''
})

const isLoading = ref(false)
const successMsg = ref('')

function submit() {
  isLoading.value = true
  // Mock API call
  setTimeout(() => {
    isLoading.value = false
    successMsg.value = 'Pendaftaran berhasil! Silahkan tunggu persetujuan Super Admin.'
    form.value = { name: '', email: '', password: '', reason: '' }
  }, 1500)
}
</script>
