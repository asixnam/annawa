<template>
  <div class="min-h-screen relative flex bg-cover bg-center font-sans overflow-y-auto overflow-x-hidden" style="background-image: url('/images/hero-santri.png');">
    <!-- Full Page Overlay -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

    <div class="relative z-10 flex w-full">
      <!-- Left Side: Register Form (Glass Card) -->
      <div class="flex-1 flex items-start justify-center p-4 sm:p-8 lg:p-12 lg:pt-24 max-w-xl mx-auto w-full pb-12">
        <div class="w-full h-fit space-y-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div class="text-center">
            <!-- Logo / Branding Section -->
            <div class="mb-4 flex flex-row justify-center items-center gap-3">
               <img src="/login.png" alt="Annawa Logo" class="h-8 sm:h-10 w-auto drop-shadow-2xl shrink-0">
            </div>
            
            <h2 class="text-2xl font-black text-white tracking-tight mb-1 drop-shadow-lg">
              Daftar sebagai Author
            </h2>
            <p class="text-sm text-gray-200 font-medium">
              Bergabunglah untuk berkontribusi memajukan pondok.
            </p>
          </div>
          
          <form class="mt-6 space-y-4" @submit.prevent="submit">
            <div v-if="successMsg" class="bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-100 px-3 py-2 rounded-xl text-xs flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="font-medium">{{ successMsg }}</span>
            </div>

            <div class="space-y-3">
               <div>
                <label for="name" class="block text-[10px] font-bold text-white mb-1.5 ml-1 uppercase tracking-widest">Nama Lengkap</label>
                <input id="name" type="text" required v-model="form.name" class="appearance-none block w-full px-3 py-2.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all text-sm" placeholder="Nama Lengkap Anda" />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label for="email" class="block text-[10px] font-bold text-white mb-1.5 ml-1 uppercase tracking-widest">Email</label>
                  <input id="email" type="email" required v-model="form.email" class="appearance-none block w-full px-3 py-2.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all text-sm" placeholder="email@annawa.com" />
                </div>

                <div>
                  <label for="password" class="block text-[10px] font-bold text-white mb-1.5 ml-1 uppercase tracking-widest">Password</label>
                  <div class="relative group">
                    <input id="password" :type="showPassword ? 'text' : 'password'" required v-model="form.password" class="appearance-none block w-full px-3 py-2.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all text-sm pr-10" placeholder="Buat password aman" />
                    <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-300 hover:text-white transition-colors focus:outline-none cursor-pointer">
                      <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.04m4.594-4.594A9.96 9.96 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.059 10.059 0 01-2.227 3.987M9.352 9.352L12 12m0 0l2.648 2.648M12 12l2.648-2.648M12 12l-2.648 2.648m-6-6l18 18" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

               <div>
                <label for="portfolio" class="block text-[10px] font-bold text-white mb-1.5 ml-1 uppercase tracking-widest">Motivasi Bergabung</label>
                <textarea id="portfolio" rows="3" v-model="form.reason" class="appearance-none block w-full px-3 py-2.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all text-sm" placeholder="Ceritakan sedikit motivasi Anda..."></textarea>
              </div>
            </div>

            <div class="pt-2">
              <button type="submit" :disabled="isLoading" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-black rounded-xl text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest transform hover:scale-[1.02] active:scale-[0.98]">
                 {{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}
              </button>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Atau daftar dengan</span>
              </div>
            </div>
            <div class="mt-6 flex justify-center scale-110">
              <div id="googleButton"></div>
            </div>
          </div>

          <p class="text-center text-xs text-gray-300 font-medium mt-4">
            Sudah punya akun? 
            <NuxtLink to="/login" class="font-black text-brand-400 hover:text-brand-300 transition-colors">
              Masuk Disini
            </NuxtLink>
          </p>
        </div>
      </div>
      
      <!-- Right Side: Hero Content -->
      <div class="hidden lg:block relative w-0 flex-1 p-16 lg:pt-24 text-white max-w-2xl mx-auto h-full pb-12">
        <div class="relative z-20 sticky top-24">
          <div class="mb-6">
             <div class="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-black text-brand-50 mb-4 uppercase tracking-widest shadow-xl">
                Sistem Informasi Akademik
             </div>
             <h3 class="text-5xl font-black mb-6 leading-tight drop-shadow-2xl">Membangun Generasi Qur'ani Berakhlak Mulia</h3>
             <p class="text-lg text-brand-50 leading-relaxed font-medium drop-shadow-md">
               Platform terintegrasi untuk mendukung proses pembelajaran dan administrasi Pondok Pesantren Khozinatul Ulum An-Nawa yang lebih efisien and transparan.
             </p>
          </div>
          
          <div class="flex gap-4 items-center">
            <div class="flex -space-x-4">
               <div class="w-12 h-12 rounded-full bg-brand-500 border-4 border-white/20 flex items-center justify-center text-sm font-black text-black z-30 shadow-xl">500+</div>
               <div class="w-12 h-12 rounded-full bg-gray-400/30 backdrop-blur-md border-4 border-white/20 z-20 shadow-xl"></div>
               <div class="w-12 h-12 rounded-full bg-gray-500/30 backdrop-blur-md border-4 border-white/20 z-10 shadow-xl"></div>
            </div>
            <div class="flex flex-col justify-center">
               <span class="text-base font-black text-white drop-shadow-md">Bergabung dengan kami</span>
               <span class="text-xs font-bold text-brand-200 uppercase tracking-tighter drop-shadow-sm">Menjadi bagian dari keluarga besar Annawa</span>
            </div>
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
