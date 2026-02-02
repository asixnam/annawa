<template>
  <AdminGalleryEditor :id="id" base-path="/author" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const route = useRoute()
const id = route.params.id as string

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
