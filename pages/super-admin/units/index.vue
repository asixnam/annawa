<template>
  <div class="max-w-6xl">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Manajemen Unit Pendidikan</h1>
        <p class="text-gray-500 text-sm">Kelola profil, visi misi, fasilitas, kegiatan, dan staff unit.</p>
      </div>
    </div>

    <!-- Unit Selection Tabs -->
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

    <!-- Sub-tabs -->
    <div v-if="currentUnit" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="flex border-b border-gray-100 bg-gray-50">
        <button 
          v-for="tab in sectionTabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['px-6 py-4 text-sm font-bold transition-all relative', activeTab === tab.id ? 'text-brand-600 bg-white' : 'text-gray-500 hover:text-gray-700']"
        >
          {{ tab.name }}
          <div v-if="activeTab === tab.id" class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600"></div>
        </button>
      </div>

      <div class="p-8">
        <!-- Tab: Profil & Visi Misi -->
        <div v-if="activeTab === 'profile'" class="max-w-3xl space-y-8">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Deskripsi Unit</label>
            <textarea rows="4" v-model="currentUnit.description" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"></textarea>
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Visi Unit</label>
            <textarea rows="2" v-model="currentUnit.vision" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm italic"></textarea>
          </div>
          <div>
            <div class="flex justify-between mb-2">
               <label class="block text-sm font-bold text-gray-700">Misi Unit</label>
               <button @click="addMission" class="text-xs font-bold text-brand-600 uppercase">+ Tambah Misi</button>
            </div>
            <div class="space-y-3">
              <div v-for="(misi, idx) in currentUnit.mission" :key="idx" class="flex gap-2">
                <input type="text" v-model="currentUnit.mission[idx]" class="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                <button @click="currentUnit.mission.splice(idx, 1)" class="text-red-400 hover:text-red-600 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="pt-6 border-t border-gray-100 flex justify-end">
            <button @click="saveUnitChanges" class="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">Simpan Profil & Visi Misi</button>
          </div>
        </div>

        <!-- Tab: Fasilitas -->
        <div v-if="activeTab === 'facilities'">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold text-gray-900">Kelola Fasilitas</h3>
            <button @click="showAddFacilityModal = true" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition shadow-sm">
              + Tambah Fasilitas
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="fc in currentUnit.facilities" :key="fc.id" class="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between group">
              <div class="flex items-center">
                <span class="text-2xl mr-4">{{ fc.icon }}</span>
                <span class="font-bold text-gray-700">{{ fc.name }}</span>
              </div>
              <button @click="deleteFacility(fc.id)" class="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Tab: Kegiatan -->
        <div v-if="activeTab === 'activities'">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold text-gray-900">Kelola Kegiatan Utama</h3>
            <button @click="showAddActivityModal = true" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition shadow-sm">
              + Tambah Kegiatan
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="act in currentUnit.activities" :key="act.id" class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 flex h-32 group relative">
              <img :src="act.image" class="w-40 h-full object-cover">
              <div class="p-4 flex-1 flex flex-col justify-center">
                <h4 class="font-bold text-gray-800">{{ act.title }}</h4>
              </div>
              <button @click="deleteActivity(act.id)" class="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Tab: Staff -->
        <div v-if="activeTab === 'staff'">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold text-gray-900">Daftar Guru / Ustadz</h3>
            <button @click="showAddStaffModal = true" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition shadow-sm">
              + Tambah Staff
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50 border-t border-gray-100">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nama</th>
                  <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Jabatan</th>
                  <th class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="s in currentUnit.staff" :key="s.id" class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="h-10 w-10 rounded-full bg-gray-100 mr-4 overflow-hidden shadow-sm">
                        <img :src="s.photo" class="w-full h-full object-cover">
                      </div>
                      <div class="text-sm font-bold text-gray-900">{{ s.name }}</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ s.position }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button class="text-brand-600 hover:text-brand-800 font-bold mr-4">Edit</button>
                    <button @click="deleteStaff(s.id)" class="text-red-500 hover:text-red-700 font-bold">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals (Simple implementation for now) -->
    <Teleport to="body">
      <!-- Add Facility Modal -->
      <div v-if="showAddFacilityModal" class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
        <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
          <div class="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 class="font-bold text-gray-900">Tambah Fasilitas Baru</h3>
            <button @click="showAddFacilityModal = false" class="text-gray-400 hover:text-gray-600">×</button>
          </div>
          <div class="p-6 space-y-4">
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nama Fasilitas</label>
               <input type="text" v-model="newFacility.name" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg">
             </div>
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Icon (Emoji)</label>
               <input type="text" v-model="newFacility.icon" class="w-64 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-2xl">
             </div>
          </div>
          <div class="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
             <button @click="showAddFacilityModal = false" class="px-4 py-2 text-gray-600 font-bold">Batal</button>
             <button @click="confirmAddFacility" class="px-6 py-2 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition">Simpan Fasilitas</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useContentStore } from '../../../stores/content'

definePageMeta({ layout: 'super-admin' })

const store = useContentStore()
const activeUnit = ref('paud')
const activeTab = ref('profile')

const sectionTabs = [
  { id: 'profile', name: 'Profil & Visi Misi' },
  { id: 'facilities', name: 'Fasilitas' },
  { id: 'activities', name: 'Kegiatan' },
  { id: 'staff', name: 'Staff / Guru' }
]

const units = computed(() => store.units)
const currentUnit = computed(() => units.value.find(u => u.id === activeUnit.value))

// State for Modals & Forms
const showAddFacilityModal = ref(false)
const newFacility = reactive({ name: '', icon: '🏫' })

const showAddActivityModal = ref(false)
const showAddStaffModal = ref(false)

function addMission() {
  if (currentUnit.value) {
    currentUnit.value.mission.push('Misi baru...')
  }
}

function saveUnitChanges() {
  alert('Perubahan profil unit berhasil disimpan!')
}

// Facility Logic
function confirmAddFacility() {
  if (newFacility.name) {
    store.addFacility(activeUnit.value, { ...newFacility })
    newFacility.name = ''
    newFacility.icon = '🏫'
    showAddFacilityModal.value = false
  }
}

function deleteFacility(id: number) {
  if (confirm('Hapus fasilitas ini?')) {
    store.removeFacility(activeUnit.value, id)
  }
}

// Activity Logic
function deleteActivity(id: number) {
  if (confirm('Hapus kegiatan ini?')) {
    store.removeActivity(activeUnit.value, id)
  }
}

// Staff Logic
function deleteStaff(id: number) {
  if (confirm('Hapus staff ini?')) {
    store.removeStaff(activeUnit.value, id)
  }
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
