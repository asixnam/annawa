<template>
  <section>
    <h2>Berita</h2>
    <ul>
      <li v-for="b in berita" :key="b.id">{{ b.title }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const berita = [{ id:1, title:'Kegiatan Santri' }, { id:2, title:'PPDB Dibuka' }]
</script>