<template>
  <AdminGalleryEditor base-path="/author" />
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'author',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('author') && !auth.hasRole('super')) {
       return navigateTo('/user/unauthorized')
    }
  }
})
</script>
