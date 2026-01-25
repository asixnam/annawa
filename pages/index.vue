<template>
  <div class="flex items-center justify-center min-h-screen">
    <p>Redirecting...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.push('/user')
})
</script>
