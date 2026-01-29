<template>
  <div class="max-w-4xl mx-auto pb-12 text-left">
    <div class="mb-8">
      <slot name="back-link"></slot>
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">{{ title }}</h1>
      <p class="text-gray-500 mt-2">Daftarkan atau perbarui data murid PAUD An-Nawa.</p>
    </div>

    <div v-if="loading" class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-brand-100 border-t-brand-600"></div>
      <p class="text-gray-500 font-medium">Memuat data...</p>
    </div>

    <div v-else>
      <PpdbPaudForm 
        :initial-data="initialData"
        :is-edit="isEdit"
        :submit-label="submitLabel"
        :use-modal="false"
        @success="(data) => $emit('success', data)"
        @cancel="() => $emit('cancel')"
      />
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import PpdbPaudForm from '../ppdb/PaudForm.vue'

defineProps({
  initialData: {
    type: Object,
    default: () => ({})
  },
  isEdit: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Edit Murid PAUD'
  },
  submitLabel: {
    type: String,
    default: 'Simpan Perubahan'
  }
})

defineEmits(['success', 'cancel'])
</script>
