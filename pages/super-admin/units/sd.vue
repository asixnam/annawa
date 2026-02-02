<template>
  <div class="max-w-6xl">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Manajemen SDQTA An-Nawa</h1>
      <p class="text-gray-500 text-sm">Kelola profil, visi misi, fasilitas, kegiatan, dan staff SDQTA.</p>
    </div>

    <UnitEditor unitId="sd" />
  </div>
</template>

<script setup lang="ts">
import UnitEditor from '~/components/admin/UnitEditor.vue'
definePageMeta({ layout: 'super-admin' })
</script>
