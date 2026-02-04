<template>
  <div class="bg-card rounded-2xl shadow-sm border border-gray-100 dark:border-brand-400/30 overflow-hidden transition-colors duration-300">
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-brand-400/20">
        <thead class="bg-gray-50/50 dark:bg-black/10">
          <tr>
            <th 
              v-for="header in headers" 
              :key="header.key" 
              scope="col" 
              class="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-100 uppercase tracking-wider"
              :class="header.class"
            >
              {{ header.label }}
            </th>
            <th scope="col" class="px-6 py-4 text-right text-xs font-bold text-gray-500 dark:text-gray-100 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-card divide-y divide-gray-100 dark:divide-brand-400/20">
          <tr v-for="(item, index) in items" :key="item.id || index" class="hover:bg-gray-50/50 dark:hover:bg-white/5 transition">
            <td v-for="header in headers" :key="header.key" class="px-6 py-4 whitespace-nowrap">
              <slot :name="header.key" :item="item">
                <span class="text-sm text-gray-600 dark:text-gray-100">{{ item[header.key] }}</span>
              </slot>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-bold">
              <slot name="actions" :item="item">
                <div class="flex justify-end gap-3">
                  <button @click="$emit('detail', item)" class="text-gray-400 dark:text-gray-100/70 hover:text-brand-600 dark:hover:text-white transition-colors">Detail</button>
                  <button @click="$emit('edit', item)" class="text-brand-600 dark:text-gray-100 hover:text-brand-900 dark:hover:text-white transition-colors ring-1 ring-brand-500 dark:ring-white/20 px-2 py-1 rounded">Edit</button>
                  <button @click="$emit('delete', item.id)" class="text-red-500 dark:text-red-200 hover:text-red-700 dark:hover:text-red-100 transition-colors">Hapus</button>
                </div>
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="items.length === 0" class="p-12 text-center">
        <p class="text-gray-400 dark:text-gray-100/50 text-sm font-medium">Data tidak ditemukan.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Header {
  key: string
  label: string
  class?: string
}

defineProps<{
  headers: Header[]
  items: any[]
}>()

defineEmits(['detail', 'edit', 'delete'])
</script>
