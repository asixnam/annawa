<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">{{ isEdit ? 'Edit Jadwal Kajian' : 'Tambah Jadwal Kajian' }}</h1>
      <NuxtLink :to="basePath" class="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 border border-amber-600 rounded-lg text-[10px] font-black uppercase tracking-widest text-white transition-all shadow-md shrink-0">
        <img src="https://img.icons8.com/?size=100&id=99287&format=png&color=FFFFFF" alt="Back Arrow" class="w-4 h-4">
      </NuxtLink>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="saveKajian" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Nama Kitab / Judul Kajian</label>
          <input type="text" v-model="form.title" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-lg font-bold" placeholder="Contoh: Kitab Fathul Qorib">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Kategori Kajian</label>
            <select v-model="form.category" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Pengampu / Ustadz</label>
            <input type="text" v-model="form.ustadz" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Nama Kiai/Ustadz">
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Waktu & Jadwal</label>
            <input type="text" v-model="form.time" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Contoh: Senin & Kamis, 19:30 WIB">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Lokasi / Tempat</label>
            <input type="text" v-model="form.location" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Contoh: Masjid Utama / Aula Pondok">
          </div>
        </div>

        <div>
           <label class="block text-sm font-bold text-gray-700 mb-2">Slug (URL)</label>
           <input type="text" v-model="form.slug" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-500" placeholder="otomatis-dari-judul">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Deskripsi Materi</label>
          <textarea rows="5" v-model="form.description" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm leading-relaxed" placeholder="Tulis deskripsi singkat mengenai kajian ini..."></textarea>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
          <NuxtLink :to="basePath" class="px-6 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition">Batal</NuxtLink>
          <button type="submit" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">
            {{ isEdit ? 'Simpan Perubahan' : 'Simpan Jadwal' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  id?: string
  basePath: string
}>()

const router = useRouter()
const isEdit = !!props.id
const isLoading = ref(false)
const categories = ['Sorogan', 'Tahfidzul Quran', 'Bahtsul Masail', 'Bandongan']

const form = ref({
  title: '',
  category: 'Sorogan',
  ustadz: '',
  time: '',
  location: '',
  slug: '',
  description: ''
})

onMounted(async () => {
  if (isEdit) {
    try {
      const data: any = await $fetch(`/api/kajian/${props.id}`)
      if (data) {
        form.value = {
            title: data.title,
            category: data.category,
            ustadz: data.ustadz_name,
            time: data.schedule,
            location: data.location,
            slug: data.slug,
            description: data.description
        }
      }
    } catch (e) {
      console.error('Failed to fetch kajian', e)
    }
  }
})

// Auto slugify title
watch(() => form.value.title, (newTitle) => {
  if (!isEdit) {
    form.value.slug = newTitle
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }
})

async function saveKajian() {
  isLoading.value = true
  try {
    const payload = {
      title: form.value.title,
      category: form.value.category,
      ustadz_name: form.value.ustadz,
      schedule: form.value.time,
      location: form.value.location,
      slug: form.value.slug,
      description: form.value.description
    }

    if (isEdit) {
      await $fetch(`/api/kajian/${props.id}`, {
        method: 'PUT',
        body: payload
      })
      alert('Jadwal kajian berhasil diperbarui!')
    } else {
      await $fetch('/api/kajian', {
        method: 'POST',
        body: payload
      })
      alert('Jadwal kajian berhasil ditambahkan!')
    }
    router.push(props.basePath)
  } catch (error: any) {
    alert(error.data?.statusMessage || 'Gagal menyimpan kajian')
  } finally {
    isLoading.value = false
  }
}
</script>
