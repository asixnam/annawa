<template>
  <div class="max-w-6xl">
    <div v-if="unit" class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Manajemen {{ unitName }}</h1>
        <p class="text-gray-500 text-sm mt-1">Kelola profil, visi misi, fasilitas, kegiatan, dan staff {{ unitName }}.</p>
      </div>
      
      <button @click="useRouter().back()" class="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 border border-amber-600 rounded-lg text-[10px] font-black uppercase tracking-widest text-white transition-all shadow-md shrink-0">
        <img src="https://img.icons8.com/?size=100&id=99287&format=png&color=FFFFFF" alt="Back Arrow" class="w-4 h-4">
      </button>
    </div>

    <UnitEditor :unitId="id" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import UnitEditor from '~/components/admin/UnitEditor.vue'

definePageMeta({ layout: 'super-admin' })
const route = useRoute()
const id = computed(() => route.params.id as string)

const { data: unit } = await useFetch(`/api/units/${id.value}`)

const unitName = computed(() => {
  if (!unit.value) return 'Unit'
  if (unit.value.slug === 'paud') return 'PAUD An-Nawa'
  if (unit.value.slug === 'sd') return 'SDQTA An-Nawa'
  if (unit.value.slug === 'pondok') return 'Pondok Pesantren'
  return unit.value.name
})
</script>
