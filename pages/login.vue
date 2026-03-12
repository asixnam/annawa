  <template>
    <div class="min-h-screen relative flex bg-cover bg-center font-sans overflow-y-auto overflow-x-hidden" style="background-image: url('/images/hero-santri.png');">
    <!-- Full Page Overlay -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

    <div class="relative z-10 flex w-full">
      <!-- Left Side: Login Form -->
      <div class="flex-1 flex items-start justify-center p-4 sm:p-8 lg:p-12 lg:pt-24 max-w-xl mx-auto w-full pb-12">
        <div class="w-full h-fit space-y-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div class="text-center">
            <!-- Logo / Branding Section -->
            <div class="mb-4 flex flex-row justify-center items-center gap-3">
               <img src="/Login.png" alt="Annawa Logo" class="h-8 sm:h-10 w-auto drop-shadow-2xl shrink-0">
            </div>
            
            <h2 class="text-2xl font-black text-white tracking-tight mb-1 drop-shadow-lg">
              Selamat Datang
            </h2>
            <p class="text-sm text-gray-200 font-medium">
              Silahkan masukan email dan password anda
            </p>
          </div>
          
          <form class="mt-6 space-y-4" @submit.prevent="submit">
            <div class="space-y-3">
              <!-- Error Alert -->
              <div v-if="errorMsg" class="bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-100 px-3 py-2 rounded-xl text-xs flex items-center gap-2 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span class="font-medium">{{ errorMsg }}</span>
              </div>

              <div>
                <label for="email-address" class="block text-[10px] font-bold text-white mb-1.5 ml-1 uppercase tracking-widest">Email</label>
                <input 
                  id="email-address" 
                  name="email" 
                  type="email" 
                  autocomplete="email" 
                  required 
                  v-model="email"
                  class="appearance-none block w-full px-3 py-2.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all text-sm" 
                  placeholder="user@gmail.com" 
                />
              </div>
              
              <div>
                <label for="password" class="block text-[10px] font-bold text-white mb-1.5 ml-1 uppercase tracking-widest">Password</label>
                <div class="relative">
                  <input 
                    id="password" 
                    name="password" 
                    :type="showPassword ? 'text' : 'password'" 
                    autocomplete="current-password" 
                    required 
                    v-model="password"
                    class="appearance-none block w-full px-3 py-2.5 bg-white/5 border border-white/20 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all pr-10 text-sm" 
                    placeholder="Masukan password anda" 
                  />
                  <button 
                    type="button" 
                    @click="showPassword = !showPassword"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-300 hover:text-white focus:outline-none cursor-pointer transition-colors"
                  >
                    <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.742L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between mt-2">
              <div class="flex items-center">
                <input 
                  id="remember-me" 
                  name="remember-me" 
                  type="checkbox" 
                  class="h-3.5 w-3.5 text-brand-500 focus:ring-brand-400 border-white/20 bg-white/10 rounded cursor-pointer" 
                  v-model="rememberMe"
                />
                <label for="remember-me" class="ml-2 block text-xs text-gray-200 cursor-pointer select-none font-medium">
                  Ingat Saya
                </label>
              </div>

              <div class="text-xs">
                <NuxtLink to="/forgot-password" class="font-bold text-brand-400 hover:text-brand-300 transition-colors">
                  Lupa Password?
                </NuxtLink>
              </div>
            </div>

            <div class="pt-2">
              <button 
                type="submit" 
                :disabled="isLoading"
                class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-black rounded-xl text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg 
                    v-if="!isLoading"
                    class="h-4 w-4 text-brand-300 group-hover:text-white transition-colors" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                  </svg>
                  <svg 
                    v-else
                    class="animate-spin h-4 w-4 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                {{ isLoading ? 'Memproses...' : 'Masuk' }}
              </button>
            </div>
          </form> 

          <!-- Google Login Section -->
          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Atau masuk dengan</span>
              </div>
            </div>
            <div class="mt-6 flex justify-center">
              <div id="googleButton"></div>
            </div>
          </div>

          <!-- Register Link -->
          <p class="text-center text-xs text-gray-300 font-medium mt-4">
            Belum punya akun? 
            <a href="/register" class="font-black text-brand-400 hover:text-brand-300 transition-colors">
              Daftar Sekarang
            </a>
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
  import { useAuthStore } from '../stores/auth'
  import { useRuntimeConfig } from '#app'

  definePageMeta({
    layout: 'auth'
  })

  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  const showPassword = ref(false)
  const errorMsg = ref('')
  const isLoading = ref(false)
  const auth = useAuthStore()
  const router = useRouter()

  async function submit() {
    errorMsg.value = ''
    isLoading.value = true
    
    try {
      await auth.login({ email: email.value, password: password.value })
      // Handle remember me logic here if needed
      
      const role = auth.user?.role
      if (role === 'super') {
        router.push('/super-admin')
      } else if (role?.startsWith('admin')) {
        router.push('/admin')
      } else if (role === 'author') {
        router.push('/author')
      } else {
        router.push('/user')
      }
    } catch (e: any) {
      errorMsg.value = e.message || 'Login gagal. Periksa kembali email dan password Anda.'
    } finally {
      isLoading.value = false
    }
  }

  async function handleGoogleLogin(response: any) {
    if (!response.credential) return;

    isLoading.value = true
    errorMsg.value = ''
    try {
      const { user } = await $fetch<{ user: any }>('/api/auth/google', {
        method: 'POST',
        body: { credential: response.credential }
      })
      
      auth.setUser(user)
      
      const role = auth.user?.role
      if (role === 'super') {
        router.push('/super-admin')
      } else if (role?.startsWith('admin')) {
        router.push('/admin')
      } else if (role === 'author') {
        router.push('/author')
      } else {
        router.push('/user')
      }
    } catch (e: any) {
      errorMsg.value = e.data?.statusMessage || e.message || 'Login dengan Google gagal.'
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