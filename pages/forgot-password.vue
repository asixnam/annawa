<template>
  <div class="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center" style="background-image: url('/images/hero-santri.png');">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

    <div class="relative z-10 w-full max-w-md">
      <!-- Logo & Header -->
      <div class="text-center mb-8">
        <img src="/annawa.png" alt="Annawa Logo" class="mx-auto h-24 w-auto drop-shadow-2xl mb-6">
        <h2 class="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg mb-2">
          {{ step === 3 ? 'Sandi Baru' : 'Lupa Sandi?' }}
        </h2>
        <p class="text-base text-gray-200 drop-shadow-sm font-medium px-4">
          {{ 
            step === 1 ? 'Tenang, kami bantu pulihkan akses akun Anda.' : 
            step === 2 ? 'Masukkan 6 digit kode yang dikirim ke email Anda.' : 
            'Buat kata sandi baru yang kuat dan mudah diingat.' 
          }}
        </p>
      </div>

      <!-- Glass Card -->
      <div class="bg-white/10 backdrop-blur-xl border border-white/20 py-10 px-6 shadow-2xl rounded-3xl sm:px-10">
        <!-- Error Message -->
        <div v-if="errorMsg" class="mb-5 bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-100 px-4 py-3 rounded-2xl text-sm flex items-start gap-3">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
           </svg>
           <span class="font-medium">{{ errorMsg }}</span>
        </div>
        <!-- Success Message -->
        <div v-if="successMsg" class="mb-5 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-100 px-4 py-3 rounded-2xl text-sm flex items-start gap-3">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
           </svg>
           <span class="font-medium">{{ successMsg }}</span>
        </div>

        <!-- Step 1: Request OTP -->
        <form v-if="step === 1" @submit.prevent="sendOtp" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-bold text-white mb-2 ml-1 uppercase tracking-wider">Alamat Email</label>
            <div class="relative">
              <input id="email" v-model="email" type="email" required class="block w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all sm:text-sm" placeholder="Masukkan email terdaftar">
            </div>
          </div>
          <button type="submit" :disabled="isLoading" class="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-black text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 transition-all transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest">
            {{ isLoading ? 'Sedang Mengirim...' : 'Kirim Kode Verifikasi' }}
          </button>
        </form>

        <!-- Step 2: Verify OTP -->
        <form v-else-if="step === 2" @submit.prevent="verifyOtp" class="space-y-6">
          <div>
            <label for="otp" class="block text-sm font-bold text-white mb-2 ml-1 uppercase tracking-wider">Kode Verifikasi</label>
            <div class="relative">
              <input id="otp" v-model="otp" type="text" required class="block w-full px-5 py-4 bg-white/5 border border-white/20 rounded-2xl text-white text-center text-3xl font-black tracking-[0.4em] focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all" placeholder="000000" maxlength="6">
            </div>
          </div>
          <button type="submit" :disabled="isLoading" class="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-black text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 transition-all transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest">
            {{ isLoading ? 'Memverifikasi...' : 'Verifikasi Kode' }}
          </button>
        </form>

        <!-- Step 3: Reset Password -->
        <form v-else-if="step === 3" @submit.prevent="resetPassword" class="space-y-6">
          <div>
            <label for="new_password" class="block text-sm font-bold text-white mb-2 ml-1 uppercase tracking-wider">Kata Sandi Baru</label>
            <div class="relative">
              <input id="new_password" v-model="newPassword" :type="showPassword ? 'text' : 'password'" required class="block w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/10 transition-all sm:text-sm pr-12" placeholder="Min. 8 karakter">
              <button type="button" @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-white transition-colors">
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L4.573 4.574m14.853 14.853L14.85 14.85M21 21l-6.15-6.15m3.759-3.322c3.46-1.574 5.892-4.994 5.892-9a9.968 9.968 0 00-2.112-6.15M6.112 6.112a10.05 10.05 0 011.888-1.112M12 5c.448 0 .891.03 1.328.087" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
                </svg>
              </button>
            </div>
          </div>
          <button type="submit" :disabled="isLoading" class="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-black text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 transition-all transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest">
            {{ isLoading ? 'Menyimpan...' : 'Simpan & Masuk' }}
          </button>
        </form>

        <div class="mt-8 text-center">
          <NuxtLink to="/login" class="text-xs font-bold text-white/60 hover:text-white transition-all inline-flex items-center gap-2 uppercase tracking-tighter">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Login
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ layout: 'auth' })

const step = ref(1)
const email = ref('')
const otp = ref('')
const newPassword = ref('')
const showPassword = ref(false)

const isLoading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

async function sendOtp() {
  isLoading.value = true
  errorMsg.value = ''
  successMsg.value = ''
  try {
    await $fetch('/api/auth/send-otp', {
      method: 'POST',
      body: { email: email.value }
    })
    successMsg.value = 'OTP telah dikirim ke email Anda.'
    step.value = 2
  } catch (e: any) {
    errorMsg.value = e.data?.statusMessage || e.message || 'Gagal mengirim OTP'
  } finally {
    isLoading.value = false
  }
}

async function verifyOtp() {
  isLoading.value = true
  errorMsg.value = ''
  successMsg.value = ''
  try {
    await $fetch('/api/auth/verify-otp', {
      method: 'POST',
      body: { email: email.value, otp: otp.value }
    })
    successMsg.value = 'OTP valid. Silakan buat password baru.'
    step.value = 3
  } catch (e: any) {
    errorMsg.value = e.data?.statusMessage || e.message || 'OTP tidak valid atau kadaluwarsa'
  } finally {
    isLoading.value = false
  }
}

async function resetPassword() {
  isLoading.value = true
  errorMsg.value = ''
  successMsg.value = ''
  try {
    await $fetch('/api/auth/reset-password', {
      method: 'POST',
      body: { email: email.value, otp: otp.value, newPassword: newPassword.value }
    })
    successMsg.value = 'Password berhasil diubah. Mengalihkan ke login...'
    setTimeout(() => {
      navigateTo('/login')
    }, 2000)
  } catch (e: any) {
    errorMsg.value = e.data?.statusMessage || e.message || 'Gagal mengubah password'
  } finally {
    isLoading.value = false
  }
}
</script>
