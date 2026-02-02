<template>
  <AdminNewsEditor :id="id" base-path="/super-admin/news" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id as string

definePageMeta({ layout: 'super-admin' })
</script>
