<template>
  <div class="max-w-6xl">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Manajemen PAUD An-Nawa</h1>
      <p class="text-gray-500 text-sm">Kelola profil, visi misi, fasilitas, kegiatan, dan staff PAUD.</p>
    </div>

    <AdminUnitEditor unitId="paud" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })
</script>
