<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">{{ isEdit ? 'Edit Testimoni' : 'Tambah Testimoni' }}</h1>
      <NuxtLink :to="basePath" class="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 border border-amber-600 rounded-lg text-[10px] font-black uppercase tracking-widest text-white transition-all shadow-md shrink-0">
        <img src="https://img.icons8.com/?size=100&id=99287&format=png&color=FFFFFF" alt="Back Arrow" class="w-4 h-4">
      </NuxtLink>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="saveContent" class="space-y-6">
        <div class="flex flex-col items-center mb-6">
           <label class="block text-sm font-bold text-gray-700 mb-2">Foto Alumni</label>
           
           <div class="relative group mt-2">
             <div class="h-32 w-32 rounded-full bg-gray-100 overflow-hidden border-2 border-brand-500 shadow-lg flex items-center justify-center">
               <img v-if="form.image" :src="form.image" class="w-full h-full object-cover">
               <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
               
               <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                 <div v-if="isUploading" class="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></div>
                 <span v-else class="text-xs font-bold text-white uppercase tracking-widest">Ubah Foto</span>
               </div>
               
               <input type="file" @change="handleFileUpload" accept="image/*" :disabled="isUploading" class="absolute inset-0 opacity-0 cursor-pointer">
             </div>
           </div>
           <p class="mt-2 text-xs text-gray-400">Klik foto untuk upload (Max 2MB)</p>
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
          <button type="submit" :disabled="isLoading || isUploading" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20 disabled:bg-gray-400 disabled:cursor-not-allowed">
            {{ isLoading ? 'Menyimpan...' : (isEdit ? 'Simpan Perubahan' : 'Simpan Testimoni') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  id?: string
  basePath: string
}>()

const router = useRouter()
const isEdit = !!props.id
const isLoading = ref(false)

const form = ref({
  name: '',
  batch: '',
  profession: '',
  quote: '',
  image: ''
})

onMounted(async () => {
  if (isEdit) {
    try {
      const data: any = await $fetch(`/api/testimonials/${props.id}`)
      if (data) {
        form.value = {
            name: data.name,
            batch: data.batch,           // Map batch
            profession: data.role,       // Map role to profession
            quote: data.content,         // Map content to quote
            image: data.avatar_url       // Map avatar_url to image
        }
      }
    } catch (e) {
      console.error('Failed to fetch testimonial', e)
    }
  }
})

const isUploading = ref(false)

async function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    
    if (file.size > 2 * 1024 * 1024) {
      alert('Ukuran foto maksimal 2MB')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    isUploading.value = true
    try {
      const response: any = await $fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      
      if (response && response.url) {
        form.value.image = response.url
      }
    } catch (e) {
      alert('Gagal mengupload foto')
    } finally {
      isUploading.value = false
    }
  }
}

async function saveContent() {
  if (isUploading.value) return
  isLoading.value = true
  try {
      const payload = {
          name: form.value.name,
          batch: form.value.batch,
          role: form.value.profession, // Map profession to role
          content: form.value.quote,   // Map quote to content
          avatar_url: form.value.image // Map image to avatar_url
      }

      if (isEdit) {
        await $fetch(`/api/testimonials/${props.id}`, {
            method: 'PUT',
            body: payload
        })
        alert('Testimoni berhasil diperbarui!')
      } else {
        await $fetch('/api/testimonials', {
            method: 'POST',
            body: payload
        })
        alert('Testimoni berhasil disimpan!')
      }
      router.push(props.basePath)
  } catch (error: any) {
      alert(error.data?.statusMessage || 'Gagal menyimpan testimoni')
  } finally {
      isLoading.value = false
  }
}
</script>
