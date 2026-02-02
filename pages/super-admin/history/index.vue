<template>
  <div class="max-w-4xl pb-20">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Editor Sejarah</h1>
        <p class="text-gray-500 text-sm">Kelola narasi sejarah dan tokoh inspiratif pondok.</p>
      </div>
      <button @click="saveChanges" :disabled="isSaving" class="px-6 py-2 bg-brand-600 text-white rounded-lg font-bold text-sm hover:bg-brand-700 transition flex items-center shadow-lg shadow-brand-500/20">
        <svg v-if="isSaving" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        {{ isSaving ? 'Menyimpan...' : 'Simpan Perubahan' }}
      </button>
    </div>

    <!-- History Text -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
      <h3 class="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Narasi Sejarah</h3>
      <label class="block text-sm font-bold text-gray-700 mb-2">Konten Lengkap</label>
      <textarea rows="10" v-model="historyText" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm leading-relaxed"></textarea>
    </div>

    <!-- Historical Events -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
      <div class="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
        <h3 class="font-bold text-gray-900">Peristiwa Sejarah (Timeline)</h3>
        <button @click="openAddMilestone" class="text-sm font-bold text-brand-600 hover:text-brand-800 tracking-wider uppercase text-[10px]">+ Tambah Peristiwa</button>
      </div>
      
      <div class="space-y-4">
        <div v-for="(event, idx) in contentStore.history.milestones" :key="idx" class="flex flex-col md:flex-row gap-4 items-start p-4 bg-gray-50 rounded-xl group relative border border-gray-100 hover:border-brand-200 transition-all">
          <div class="w-full md:w-20 font-black text-brand-600 text-lg py-1">
            {{ event.year }}
          </div>
          <div class="flex-1 space-y-1 w-full">
            <h4 class="font-bold text-gray-900">{{ event.title }}</h4>
            <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed">{{ event.description }}</p>
          </div>
          <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 md:relative md:top-0 md:right-0">
            <button @click="openEditMilestone(idx, event)" class="p-2 text-brand-600 hover:bg-white rounded-lg transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button @click="deleteMilestone(idx)" class="p-2 text-red-500 hover:bg-white rounded-lg transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Figures Section -->
    <div class="mb-8">
      <div class="flex justify-between items-center mb-6">
         <h3 class="font-bold text-gray-900 text-lg">Tokoh Inspiratif</h3>
         <button @click="openAddFigure" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition shadow-sm">+ Tambah Tokoh</button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="fig in contentStore.figures" :key="fig.id" class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative group hover:border-brand-200 transition-all">
          <div class="flex items-start gap-4">
            <div class="w-16 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
              <img :src="fig.photo" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 py-1">
              <h4 class="font-bold text-gray-900">{{ fig.name }}</h4>
              <p class="text-xs text-brand-600 font-bold uppercase tracking-widest mt-1">{{ fig.role }}</p>
            </div>
          </div>
          <div class="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button @click="openEditFigure(fig)" class="p-2 text-brand-600 bg-gray-50 rounded-lg hover:bg-white transition shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
               </svg>
            </button>
            <button @click="deleteFigure(fig.id)" class="p-2 text-red-500 bg-gray-50 rounded-lg hover:bg-white transition shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
               </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <Teleport to="body">
      <!-- Milestone Modal -->
      <div v-if="modals.milestone" class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
        <form @submit.prevent="submitMilestone" class="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-gray-100">
          <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 class="font-bold text-gray-900">{{ isEditing ? 'Edit Peristiwa' : 'Tambah Peristiwa Baru' }}</h3>
            <button type="button" @click="modals.milestone = false" class="text-gray-400 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="p-8 space-y-6">
             <div class="grid grid-cols-[100px_1fr] gap-4">
               <div>
                 <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Tahun</label>
                 <input type="text" v-model="forms.milestone.year" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-bold text-center" placeholder="20XX">
               </div>
               <div>
                 <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Judul Peristiwa</label>
                 <input type="text" v-model="forms.milestone.title" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-bold" placeholder="Contoh: Peresmian Gedung">
               </div>
             </div>
             <div>
               <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Deskripsi Detail</label>
               <textarea rows="3" v-model="forms.milestone.description" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm leading-relaxed" placeholder="Jelaskan peristiwa tersebut..."></textarea>
             </div>
          </div>
          <div class="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
             <button type="button" @click="modals.milestone = false" class="px-6 py-2 text-gray-500 font-bold hover:text-gray-700 transition">Batal</button>
             <button type="submit" class="px-8 py-2 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">Simpan Peristiwa</button>
          </div>
        </form>
      </div>

      <!-- Figure Modal -->
      <div v-if="modals.figure" class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
        <form @submit.prevent="submitFigure" class="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-gray-100">
          <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 class="font-bold text-gray-900">{{ isEditing ? 'Edit Tokoh' : 'Tambah Tokoh Baru' }}</h3>
            <button type="button" @click="modals.figure = false" class="text-gray-400 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="p-8 space-y-6">
             <div class="flex flex-col items-center">
               <div class="relative group">
                 <div class="w-24 h-32 bg-gray-100 rounded-2xl overflow-hidden border-2 border-brand-500 shadow-xl flex items-center justify-center">
                    <img v-if="forms.figure.photo" :src="forms.figure.photo" class="w-full h-full object-cover">
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                       <span class="text-[8px] font-black text-white uppercase tracking-widest">Ubah Foto</span>
                    </div>
                    <input type="file" @change="handlePhotoUpload" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer">
                 </div>
               </div>
               <p class="mt-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">Foto Tokoh (3:4)</p>
             </div>
             <div class="space-y-4">
               <div>
                 <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Nama Lengkap</label>
                 <input type="text" v-model="forms.figure.name" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-bold" placeholder="Contoh: KH. Ahmad Ridwan">
               </div>
               <div>
                 <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Peran / Jabatan</label>
                 <input type="text" v-model="forms.figure.role" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm" placeholder="Contoh: Pendiri Pondok">
               </div>
             </div>
          </div>
          <div class="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
             <button type="button" @click="modals.figure = false" class="px-6 py-2 text-gray-500 font-bold hover:text-gray-700 transition">Batal</button>
             <button type="submit" class="px-8 py-2 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">Simpan Tokoh</button>
          </div>
        </form>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useContentStore } from '~/stores/content'

definePageMeta({
  layout: 'super-admin'
})

const contentStore = useContentStore()
const isSaving = ref(false)
const historyText = ref(contentStore.history.text)

// Modals State
const modals = reactive({
  milestone: false,
  figure: false
})

const isEditing = ref(false)
const editIndex = ref<number | null>(null)
const editId = ref<number | null>(null)

// Forms State
const forms = reactive({
  milestone: { year: '', title: '', description: '' },
  figure: { name: '', role: '', photo: '' }
})

function resetForms() {
  forms.milestone = { year: '', title: '', description: '' }
  forms.figure = { name: '', role: '', photo: '' }
  isEditing.value = false
  editIndex.value = null
  editId.value = null
}

// --- Milestone Logic ---
function openAddMilestone() {
  resetForms()
  modals.milestone = true
}

function openEditMilestone(index: number, event: any) {
  resetForms()
  isEditing.value = true
  editIndex.value = index
  forms.milestone = { ...event }
  modals.milestone = true
}

function submitMilestone() {
  if (!forms.milestone.year || !forms.milestone.title) return
  
  if (isEditing.value && editIndex.value !== null) {
    contentStore.updateMilestone(editIndex.value, { ...forms.milestone })
  } else {
    contentStore.addMilestone({ ...forms.milestone })
  }
  modals.milestone = false
}

function deleteMilestone(index: number) {
  if (confirm('Hapus peristiwa sejarah ini?')) {
    contentStore.removeMilestone(index)
  }
}

// --- Figure Logic ---
function openAddFigure() {
  resetForms()
  modals.figure = true
}

function openEditFigure(fig: any) {
  resetForms()
  isEditing.value = true
  editId.value = fig.id
  forms.figure = { ...fig }
  modals.figure = true
}

function handlePhotoUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      forms.figure.photo = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

function submitFigure() {
  if (!forms.figure.name) return
  
  if (isEditing.value && editId.value !== null) {
    contentStore.updateFigure(editId.value, { ...forms.figure })
  } else {
    contentStore.addFigure({ ...forms.figure })
  }
  modals.figure = false
}

function deleteFigure(id: number) {
  if (confirm('Hapus tokoh inspiratif ini?')) {
    contentStore.removeFigure(id)
  }
}

// --- Save Global Change ---
function saveChanges() {
  isSaving.value = true
  contentStore.updateHistory(historyText.value)
  setTimeout(() => {
    isSaving.value = false
    alert('Sejarah berhasil diperbarui!')
  }, 800)
}
</script>
