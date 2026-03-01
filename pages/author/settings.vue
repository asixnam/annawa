<template>
  <UserProfileForm />
</template>

<script setup lang="ts">
// Also limit access to authenticated users if needed, though layout middleware handles it
definePageMeta({
  layout: 'author'
})
</script>
