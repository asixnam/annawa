<template>
  <section>
    <h2>Galeri</h2>
    <div class="grid">
      <div class="item" v-for="n in 6" :key="n">Gambar {{n}}</div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
.item{background:#f3f3f3;padding:1rem;text-align:center}
</style>