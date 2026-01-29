<template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <div class="text-center">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-500 border-t-transparent mb-4"></div>
      <p class="text-gray-600 font-medium">Memindahkan Anda ke dashboard yang sesuai...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '../../stores/auth'

definePageMeta({
  layout: 'admin',
  middleware: (to, from) => {
    const auth = useAuthStore()
    if (!auth.hasRole('admin:*') && !auth.hasRole('super')) {
      return navigateTo('/user/unauthorized')
    }
  }
})

const auth = useAuthStore()

onMounted(() => {
  const role = auth.user?.role

  if (role === 'admin:paud') {
    return navigateTo('/admin/paud')
  } else if (role === 'admin:sd') {
    return navigateTo('/admin/sdqta')
  } else if (role === 'admin:pondok') {
    return navigateTo('/admin/pondok')
  } else if (role === 'admin:santri') {
    return navigateTo('/admin/santri')
  } else if (role === 'super') {
    // Super admin can choose or default to one, let's default to SDQTA for now or show a central hub
    return navigateTo('/admin/sdqta')
  }
})
</script>
