<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <NuxtLink :to="basePath" class="text-gray-500 hover:text-gray-700 text-sm mb-2 inline-block">&larr; Kembali ke Daftar</NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">{{ isEdit ? 'Edit Testimoni' : 'Tambah Testimoni' }}</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="saveContent" class="space-y-6">
        <div class="flex flex-col items-center mb-6">
           <div class="relative group">
             <div class="h-24 w-24 rounded-full bg-gray-100 overflow-hidden border-2 border-brand-500 shadow-lg">
               <img v-if="form.image" :src="form.image" class="w-full h-full object-cover">
               <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
               </div>
               <div @click="triggerFileInput" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
               </div>
               <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleFileUpload">
             </div>
           </div>
           <span class="mt-2 text-[10px] font-black uppercase text-gray-400 tracking-widest">Foto Alumni</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
            <input type="text" v-model="form.name" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Angkatan / Batch</label>
            <input type="text" v-model="form.batch" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Contoh: Alumni 2018">
          </div>
        </div>

        <div>
           <label class="block text-sm font-bold text-gray-700 mb-2">Pekerjaan / Status Saat Ini</label>
           <input type="text" v-model="form.profession" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Contoh: Mahasiswa Al-Azhar, Kairo">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Pesan / Testimoni</label>
          <textarea rows="6" v-model="form.quote" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm italic" placeholder="Tuliskan kesan dan pesan selama belajar..."></textarea>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink :to="basePath" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">
            {{ isEdit ? 'Simpan Perubahan' : 'Simpan Testimoni' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useContentStore } from '~/stores/content'

const props = defineProps<{
  id?: string
  basePath: string
}>()

const router = useRouter()
const store = useContentStore()
const isEdit = !!props.id
const fileInput = ref<HTMLInputElement | null>(null)

const form = ref({
  name: '',
  batch: '',
  profession: '',
  quote: '',
  image: ''
})

onMounted(() => {
  if (isEdit) {
    const existing = store.testimonials.find(t => t.id === parseInt(props.id!))
    if (existing) {
      form.value = { ...existing }
    }
  }
})

function triggerFileInput() {
  fileInput.value?.click()
}

function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.image = e.target?.result as string
    }
    reader.readAsDataURL(target.files[0])
  }
}

function saveContent() {
  if (isEdit) {
    store.updateTestimonial(parseInt(props.id!), { ...form.value })
    alert('Testimoni berhasil diperbarui!')
  } else {
    store.addTestimonial({ ...form.value })
    alert('Testimoni berhasil disimpan!')
  }
  router.push(props.basePath)
}
</script>
