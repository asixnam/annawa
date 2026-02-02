<template>
  <AdminKajianEditor :id="id" base-path="/admin/pondok/kajian" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id as string
definePageMeta({ layout: 'admin' })
</script>
