<template>
  <div class="min-h-screen flex bg-gray-50 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Reset Password
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        {{ 
          step === 1 ? 'Masukkan email yang terdaftar' : 
          step === 2 ? 'Masukkan 6 digit OTP yang dikirim ke email Anda' : 
          'Buat password baru' 
        }}
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <!-- Error Message -->
        <div v-if="errorMsg" class="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-sm">
          {{ errorMsg }}
        </div>
        <!-- Success Message -->
        <div v-if="successMsg" class="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded text-sm">
          {{ successMsg }}
        </div>

        <!-- Step 1: Request OTP -->
        <form v-if="step === 1" @submit.prevent="sendOtp" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
            <div class="mt-1">
              <input id="email" v-model="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm" placeholder="user@gmail.com">
            </div>
          </div>
          <button type="submit" :disabled="isLoading" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50">
            {{ isLoading ? 'Mengirim...' : 'Kirim OTP' }}
          </button>
        </form>

        <!-- Step 2: Verify OTP -->
        <form v-else-if="step === 2" @submit.prevent="verifyOtp" class="space-y-6">
          <div>
            <label for="otp" class="block text-sm font-medium text-gray-700">Kode OTP</label>
            <div class="mt-1">
              <input id="otp" v-model="otp" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm" placeholder="123456" maxlength="6">
            </div>
          </div>
          <button type="submit" :disabled="isLoading" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50">
            {{ isLoading ? 'Verifikasi...' : 'Verifikasi OTP' }}
          </button>
        </form>

        <!-- Step 3: Reset Password -->
        <form v-else-if="step === 3" @submit.prevent="resetPassword" class="space-y-6">
          <div>
            <label for="new_password" class="block text-sm font-medium text-gray-700">Password Baru</label>
            <div class="mt-1">
              <input id="new_password" v-model="newPassword" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm">
            </div>
          </div>
          <button type="submit" :disabled="isLoading" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50">
            {{ isLoading ? 'Menyimpan...' : 'Simpan Password Baru' }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <NuxtLink to="/login" class="text-sm font-medium text-brand-600 hover:text-brand-500">
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
