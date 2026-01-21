<template>
  <section>
    <h2>Login</h2>
    <form @submit.prevent="submit">
      <input v-model="email" placeholder="email" />
      <input v-model="password" type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
const email = ref('')
const password = ref('')
const auth = useAuthStore()
async function submit() {
  try {
  await auth.login({ email: email.value, password: password.value })
  const router = useRouter()
  router.push('/')
  } catch (e) {
    alert('Login gagal')
  }
}
</script>