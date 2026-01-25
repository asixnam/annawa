  <template>
    <div class="min-h-screen flex bg-white font-sans">
      <!-- Left Side: Login Form -->
      <div class="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 max-w-xl mx-auto w-full">
        <div class="w-full space-y-8">
          <div class="text-left">
            <!-- Logo / Branding Text -->
            <div class="mb-8">
               <h1 class="text-2xl font-bold text-brand-600 tracking-tight uppercase">Pondok Pesantren Annawa</h1>
            </div>
            
            <h2 class="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              Selamat Datang
            </h2>
            <p class="text-base text-gray-500">
              Silahkan masukan email dan password anda untuk mulai menggunakan aplikasi
            </p>
          </div>
          
          <form class="mt-8 space-y-6" @submit.prevent="submit">
            <div class="space-y-5">
              <!-- Error Alert -->
              <div v-if="errorMsg" class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-center gap-2 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>{{ errorMsg }}</span>
              </div>

              <div>
                <label for="email-address" class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  id="email-address" 
                  name="email" 
                  type="email" 
                  autocomplete="email" 
                  required 
                  v-model="email"
                  class="appearance-none block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm" 
                  placeholder="Contoh: user@annawa.com" 
                />
              </div>
              
              <div>
                <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <div class="relative">
                  <input 
                    id="password" 
                    name="password" 
                    :type="showPassword ? 'text' : 'password'" 
                    autocomplete="current-password" 
                    required 
                    v-model="password"
                    class="appearance-none block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all pr-12 text-sm" 
                    placeholder="Masukan password anda" 
                  />
                  <button 
                    type="button" 
                    @click="showPassword = !showPassword"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                  >
                    <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.742L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input 
                  id="remember-me" 
                  name="remember-me" 
                  type="checkbox" 
                  class="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded cursor-pointer" 
                  v-model="rememberMe"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-600 cursor-pointer select-none">
                  Ingat Saya
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-brand-600 hover:text-brand-500">
                  Lupa Password?
                </a>
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                :disabled="isLoading"
                class="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all shadow-lg shadow-brand-500/20 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg 
                    v-if="!isLoading"
                    class="h-5 w-5 text-brand-500 group-hover:text-brand-400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                  </svg>
                  <svg 
                    v-else
                    class="animate-spin h-5 w-5 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                {{ isLoading ? 'Memproses...' : 'Masuk Sekarang' }}
              </button>
            </div>
          </form> 

          <!-- Register Link -->
          <p class="text-center text-sm text-gray-500">
            Belum punya akun? 
            <a href="#" class="font-bold text-brand-600 hover:text-brand-500">
              Daftar Sekarang
            </a>
          </p>
        </div>
      </div>

      <!-- Right Side: Hero Image -->
      <div class="hidden lg:block relative w-0 flex-1 bg-brand-900">
        <div class="absolute inset-0 h-full w-full bg-gradient-to-br from-brand-900 to-black opacity-60 z-10"></div>
        <img class="absolute inset-0 h-full w-full object-cover" src="/images/hero-santri.png" alt="Pondok Pesantren Annawa">
        <div class="absolute inset-0 z-20 flex flex-col justify-end p-16 text-white max-w-2xl mx-auto">
          <div class="mb-6">
             <div class="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-brand-50 mb-4">
                Sistem Informasi Akademik
             </div>
             <h3 class="text-5xl font-black font-heading mb-6 leading-tight">Membangun Generasi Qur'ani Berakhlak Mulia</h3>
             <p class="text-lg text-brand-100 leading-relaxed opacity-90">
               Platform terintegrasi untuk mendukung proses pembelajaran dan administrasi Pondok Pesantren Khozinatul Ulum An-Nawa yang lebih efisien dan transparan.
             </p>
          </div>
          
          <div class="flex gap-4">
            <div class="flex -space-x-2">
               <div class="w-10 h-10 rounded-full bg-brand-500 border-2 border-brand-900 flex items-center justify-center text-xs font-bold text-black z-30">500+</div>
               <div class="w-10 h-10 rounded-full bg-gray-400 border-2 border-brand-900 z-20"></div>
               <div class="w-10 h-10 rounded-full bg-gray-500 border-2 border-brand-900 z-10"></div>
            </div>
            <div class="flex flex-col justify-center">
               <span class="text-sm font-bold text-white">Bergabung dengan kami</span>
               <span class="text-xs text-brand-200">Menjadi bagian dari keluarga besar Annawa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/auth'

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
      router.push('/')
    } catch (e: any) {
      errorMsg.value = e.message || 'Login gagal. Periksa kembali email dan password Anda.'
    } finally {
      isLoading.value = false
    }
  }
  </script>