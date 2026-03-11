<template>
  <div class="min-h-screen relative flex bg-cover bg-center font-sans overflow-hidden" style="background-image: url('/images/hero-santri.png');">
    <!-- Full Page Overlay -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

    <div class="relative z-10 flex w-full">
      <!-- Left Side: Register Form (Glass Card) -->
      <div class="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 max-w-xl mx-auto w-full">
        <div class="w-full space-y-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-3xl shadow-2xl">
          <div class="text-center">
            <!-- Logo / Branding Section -->
            <div class="mb-8 flex flex-col items-center">
               <img src="/annawa.png" alt="Annawa Logo" class="h-20 w-auto mb-6 drop-shadow-2xl">
               <h1 class="text-lg font-black text-brand-400 tracking-widest uppercase drop-shadow-md">Pondok Pesantren Khozinatul Ulum An-Nawa</h1>
            </div>
            
            <h2 class="text-3xl font-black text-white tracking-tight mb-2 drop-shadow-lg">
              Daftar sebagai Author
            </h2>
            <p class="text-base text-gray-200 font-medium">
              Bergabunglah untuk berkontribusi dalam dokumentasi dan konten pondok.
            </p>
          </div>
          
          <form class="mt-8 space-y-6" @submit.prevent="submit">
            <div v-if="successMsg" class="bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-100 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="font-medium">{{ successMsg }}</span>
            </div>

            <div class="space-y-5">
               <div>
                <label for="name" class="block text-xs font-bold text-white mb-2 ml-1 uppercase tracking-widest">Nama Lengkap</label>
                <input id="name" type="text" required v-model="form.name" class="appearance-none block w-full px-4 py-3.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all text-sm" placeholder="Nama Lengkap Anda" />
              </div>

              <div>
                <label for="email" class="block text-xs font-bold text-white mb-2 ml-1 uppercase tracking-widest">Email</label>
                <input id="email" type="email" required v-model="form.email" class="appearance-none block w-full px-4 py-3.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all text-sm" placeholder="email@annawa.com" />
              </div>

              <div>
                <label for="password" class="block text-xs font-bold text-white mb-2 ml-1 uppercase tracking-widest">Password</label>
                <div class="relative group">
                  <input id="password" :type="showPassword ? 'text' : 'password'" required v-model="form.password" class="appearance-none block w-full px-4 py-3.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all text-sm pr-12" placeholder="Buat password aman" />
                  <button type="button" @click="showPassword = !showPassword" class="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 text-gray-300 hover:text-white transition-colors focus:outline-none cursor-pointer">
                    <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.04m4.594-4.594A9.96 9.96 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.059 10.059 0 01-2.227 3.987M9.352 9.352L12 12m0 0l2.648 2.648M12 12l2.648-2.648M12 12l-2.648 2.648m-6-6l18 18" />
                    </svg>
                  </button>
                </div>
              </div>

               <div>
                <label for="portfolio" class="block text-xs font-bold text-white mb-2 ml-1 uppercase tracking-widest">Motivasi Bergabung</label>
                <textarea id="portfolio" rows="3" v-model="form.reason" class="appearance-none block w-full px-4 py-3.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all text-sm" placeholder="Ceritakan sedikit tentang Anda..."></textarea>
              </div>
            </div>

            <div>
              <button type="submit" :disabled="isLoading" class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black rounded-xl text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest transform hover:scale-[1.02] active:scale-[0.98]">
                 {{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}
              </button>
            </div>
          </form>

          <div class="mt-8">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-white/10"></div>
              </div>
              <div class="relative flex justify-center text-xs uppercase tracking-tighter">
                <span class="px-3 bg-transparent text-gray-400 font-bold">Atau daftar dengan</span>
              </div>
            </div>
            <div class="mt-6 flex justify-center scale-110">
              <div id="googleButton"></div>
            </div>
          </div>

          <p class="text-center text-sm text-gray-300 font-medium">
            Sudah punya akun? 
            <NuxtLink to="/login" class="font-black text-brand-400 hover:text-brand-300 transition-colors">
              Masuk Disini
            </NuxtLink>
          </p>
        </div>
      </div>
      
      <!-- Right Side: Hero Content -->
      <div class="hidden lg:flex relative w-0 flex-1 flex-col justify-end p-16 text-white max-w-2xl mx-auto">
        <div class="relative z-20">
          <div class="mb-6">
             <div class="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-black text-brand-50 mb-4 uppercase tracking-widest shadow-xl">
                Kontribusi untuk Umat
             </div>
             <h3 class="text-5xl font-black mb-6 leading-tight drop-shadow-2xl">Membangun Generasi Qur'ani Berakhlak Mulia</h3>
             <p class="text-lg text-brand-100 opacity-90 drop-shadow-md">Jadilah bagian dari tim kreatif Pondok Pesantren Khozinatul Ulum An-Nawa.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRuntimeConfig } from '#app'

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
const showPassword = ref(false)

async function submit() {
  isLoading.value = true
  successMsg.value = ''
  
  try {
    await $fetch('/api/users', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
        role: 'author',
        bio: form.value.reason,
        status: 'pending'
      }
    })
    
    successMsg.value = 'Pendaftaran berhasil! Silahkan tunggu persetujuan Super Admin.'
    form.value = { name: '', email: '', password: '', reason: '' }
  } catch (error: any) {
    alert('Pendaftaran gagal: ' + (error.data?.statusMessage || error.message))
  } finally {
    isLoading.value = false
  }
}

async function handleGoogleLogin(response: any) {
  if (!response.credential) return;

  isLoading.value = true
  successMsg.value = ''
  try {
    const res = await $fetch<{ message: string, user: any }>('/api/auth/google', {
      method: 'POST',
      body: { credential: response.credential, register_as: 'author' }
    })
    
    if (res.user?.status === 'pending') {
      successMsg.value = 'Pendaftaran berhasil! Akun Anda sedang menunggu persetujuan Super Admin.'
    } else {
      successMsg.value = 'Berhasil mendaftar/masuk dengan Google.'
      setTimeout(() => {
          navigateTo('/login')
      }, 1500)
    }
  } catch (error: any) {
    alert('Google Auth gagal: ' + (error.data?.statusMessage || error.message))
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  const renderButton = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: useRuntimeConfig().public.googleClientId,
        callback: handleGoogleLogin,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("googleButton"),
        { theme: "outline", size: "large", type: "standard", shape: "rectangular" }
      );
    }
  };

  if (window.google) {
    renderButton();
  } else {
    const scriptId = 'google-login-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    script.addEventListener('load', renderButton);
  }
})
</script>
