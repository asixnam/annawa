<template>
  <div class="max-w-6xl">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Manajemen Unit & Staff</h1>
        <p class="text-gray-500 text-sm">Kelola profil unit pendidikan dan daftar guru/ustadz.</p>
      </div>
    </div>

    <!-- Unit Tabs -->
    <div class="flex space-x-4 mb-8">
      <button 
        v-for="unit in units" 
        :key="unit.id"
        @click="activeUnit = unit.id"
        :class="['px-6 py-3 rounded-xl font-bold text-sm transition-all', activeUnit === unit.id ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50']"
      >
        {{ unit.name }}
      </button>
    </div>

    <div v-if="currentUnit" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left: Unit Profile -->
      <div class="lg:col-span-1 space-y-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 class="font-bold text-gray-900 mb-4">Profil Unit: {{ currentUnit.name }}</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Deskripsi Singkat</label>
              <textarea rows="6" v-model="currentUnit.description" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm"></textarea>
            </div>
            <button class="w-full py-2 bg-gray-100 text-gray-600 font-bold rounded-lg text-sm hover:bg-gray-200 transition-colors">Simpan Profil Unit</button>
          </div>
        </div>
      </div>

      <!-- Right: Staff List -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 class="font-bold text-gray-900">Daftar Guru / Ustadz</h3>
            <button class="text-brand-600 font-bold text-xs uppercase tracking-wider hover:text-brand-800">+ Tambah Guru</button>
          </div>
          
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nama</th>
                <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Jabatan</th>
                <th class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="staff in currentUnit.staff" :key="staff.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden mr-3">
                      <img :src="staff.photo" class="w-full h-full object-cover">
                    </div>
                    <div class="text-sm font-bold text-gray-900">{{ staff.name }}</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ staff.position }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button class="text-brand-600 hover:text-brand-900 mr-3">Edit</button>
                  <button class="text-red-600 hover:text-red-900">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContentStore } from '../../../stores/content'

definePageMeta({
  layout: 'super-admin'
})

const store = useContentStore()
const activeUnit = ref('paud')

const units = computed(() => store.units)
const currentUnit = computed(() => units.value.find(u => u.id === activeUnit.value))
</script>
