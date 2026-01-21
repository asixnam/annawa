<template>
  <button :class="['base-button', variant]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: { type: String, default: 'primary' }
})
</script>

<style scoped>
.base-button { padding: .5rem 1rem; border-radius: 6px; border: none; cursor: pointer }
.base-button.primary { background: #1f6feb; color: white }
.base-button.ghost { background: transparent; border: 1px solid #ddd }
</style>