<template>
  <div v-if="unit" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <!-- Sub-tabs -->
    <div class="flex border-b border-gray-100 bg-gray-50 overflow-x-auto scrollbar-hide">
      <button 
        v-for="tab in sectionTabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="['px-6 py-4 text-sm font-bold transition-all relative whitespace-nowrap', activeTab === tab.id ? 'text-brand-600 bg-white' : 'text-gray-500 hover:text-gray-700']"
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
          <textarea rows="4" v-model="unit.description" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"></textarea>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Visi Unit</label>
          <textarea rows="2" v-model="unit.vision" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm italic"></textarea>
        </div>
        <div>
          <div class="flex justify-between mb-2">
             <label class="block text-sm font-bold text-gray-700">Misi Unit</label>
             <button @click="addMission" class="text-xs font-bold text-brand-600 uppercase">+ Tambah Misi</button>
          </div>
          <div class="space-y-3">
            <div v-for="(misi, idx) in unit.mission" :key="idx" class="flex gap-2">
              <input type="text" v-model="unit.mission[idx]" class="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
              <button @click="unit.mission.splice(idx, 1)" class="text-red-400 hover:text-red-600 p-2">
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
          <button @click="openAddFacility" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition shadow-sm">
            + Tambah Fasilitas
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="fc in unit.facilities" :key="fc.id" class="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between group">
            <div class="flex items-center min-w-0">
              <div class="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center mr-4 shrink-0 overflow-hidden">
                <img v-if="fc.icon.startsWith('http') || fc.icon.startsWith('data:') || fc.icon.startsWith('/')" :src="fc.icon" class="w-full h-full object-cover">
                <span v-else class="text-2xl">{{ fc.icon }}</span>
              </div>
              <span class="font-bold text-gray-700 truncate">{{ fc.name }}</span>
            </div>
            <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button @click="openEditFacility(fc)" class="text-brand-600 hover:text-brand-800 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button @click="deleteFacility(fc.id)" class="text-red-400 hover:text-red-600 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Kegiatan -->
      <div v-if="activeTab === 'activities'">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-bold text-gray-900">Kelola Kegiatan Utama</h3>
          <button @click="openAddActivity" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition shadow-sm">
            + Tambah Kegiatan
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="act in unit.activities" :key="act.id" class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 flex h-32 group relative">
            <img :src="act.image" class="w-40 h-full object-cover">
            <div class="p-4 flex-1 flex flex-col justify-center">
              <h4 class="font-bold text-gray-800">{{ act.title }}</h4>
            </div>
            <div class="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button @click="openEditActivity(act)" class="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-brand-600 hover:text-brand-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button @click="deleteActivity(act.id)" class="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Staff -->
      <div v-if="activeTab === 'staff'">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-bold text-gray-900">Daftar Guru / Ustadz</h3>
          <button @click="openAddStaff" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition shadow-sm">
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
              <tr v-for="s in unit.staff" :key="s.id" class="hover:bg-gray-50">
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
                  <button @click="openEditStaff(s)" class="text-brand-600 hover:text-brand-800 font-bold mr-4">Edit</button>
                  <button @click="deleteStaff(s.id)" class="text-red-500 hover:text-red-700 font-bold">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tab: Mitra (Specific for Pondok) -->
      <div v-if="activeTab === 'mitra'">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-bold text-gray-900">Kelola Mitra Lembaga</h3>
          <button @click="openAddPartner" class="px-4 py-2 bg-brand-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition shadow-sm">
            + Tambah Mitra
          </button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div v-for="p in unit.partners" :key="p.id" class="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center group relative aspect-square justify-center">
            <img :src="p.logo" class="max-w-[80%] max-h-[60%] object-contain mb-3 grayscale group-hover:grayscale-0 transition-all">
            <span class="text-[10px] font-bold text-gray-600 uppercase tracking-widest text-center">{{ p.name }}</span>
            <div class="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button @click="openEditPartner(p)" class="p-1.5 bg-white shadow-sm rounded-lg text-brand-600">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                 </svg>
              </button>
              <button @click="deletePartner(p.id)" class="p-1.5 bg-white shadow-sm rounded-lg text-red-500">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                 </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <Teleport to="body">
      <!-- Facility Modal -->
      <div v-if="modals.facility" class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
        <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
          <div class="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 class="font-bold text-gray-900">{{ isEditing ? 'Edit Fasilitas' : 'Tambah Fasilitas Baru' }}</h3>
            <button @click="modals.facility = false" class="text-gray-400 hover:text-gray-600">×</button>
          </div>
          <div class="p-6 space-y-4">
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nama Fasilitas</label>
               <input type="text" v-model="forms.facility.name" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all">
             </div>
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Icon / Gambar Fasilitas</label>
               <div class="mt-2 flex items-center gap-4">
                 <div class="w-16 h-16 rounded-xl bg-gray-50 overflow-hidden border border-gray-200 relative group flex items-center justify-center">
                   <img v-if="forms.facility.icon && (forms.facility.icon.startsWith('http') || forms.facility.icon.startsWith('data:') || forms.facility.icon.startsWith('/'))" :src="forms.facility.icon" class="w-full h-full object-cover">
                   <span v-else-if="forms.facility.icon" class="text-3xl">{{ forms.facility.icon }}</span>
                   <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      </svg>
                   </div>
                   <input type="file" @change="handleImageUpload($event, 'facility')" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer">
                 </div>
                 <div class="flex-1 text-[10px] text-gray-400">
                    Klik kotak untuk upload icon atau gambar fasilitas (PNG/JPG).
                 </div>
               </div>
             </div>
          </div>
          <div class="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
             <button @click="modals.facility = false" class="px-4 py-2 text-gray-600 font-bold">Batal</button>
             <button @click="submitFacility" class="px-6 py-2 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition">Simpan Fasilitas</button>
          </div>
        </div>
      </div>

      <!-- Activity Modal -->
      <div v-if="modals.activity" class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
        <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
          <div class="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 class="font-bold text-gray-900">{{ isEditing ? 'Edit Kegiatan' : 'Tambah Kegiatan Baru' }}</h3>
            <button @click="modals.activity = false" class="text-gray-400 hover:text-gray-600">×</button>
          </div>
          <div class="p-6 space-y-6">
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Judul Kegiatan</label>
               <input type="text" v-model="forms.activity.title" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all">
             </div>
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Gambar Kegiatan</label>
               <div class="mt-2 flex flex-col items-center gap-4">
                 <div class="w-full aspect-video rounded-xl bg-gray-100 overflow-hidden border border-gray-200 relative group">
                   <img v-if="forms.activity.image" :src="forms.activity.image" class="w-full h-full object-cover">
                   <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                     <span class="text-white text-[10px] font-black uppercase tracking-widest">Klik untuk ganti</span>
                   </div>
                   <input type="file" @change="handleImageUpload($event, 'activity')" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer">
                 </div>
               </div>
             </div>
          </div>
          <div class="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
             <button @click="modals.activity = false" class="px-4 py-2 text-gray-600 font-bold">Batal</button>
             <button @click="submitActivity" class="px-6 py-2 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition">Simpan Kegiatan</button>
          </div>
        </div>
      </div>

      <!-- Staff Modal -->
      <div v-if="modals.staff" class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
        <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
          <div class="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 class="font-bold text-gray-900">{{ isEditing ? 'Edit Staff/Guru' : 'Tambah Staff Baru' }}</h3>
            <button @click="modals.staff = false" class="text-gray-400 hover:text-gray-600">×</button>
          </div>
          <div class="p-6 space-y-6">
             <div class="flex flex-col items-center mb-4">
               <div class="relative group">
                 <div class="h-24 w-24 rounded-full bg-gray-100 overflow-hidden border-2 border-brand-500 shadow-lg">
                   <img v-if="forms.staff.photo" :src="forms.staff.photo" class="w-full h-full object-cover">
                   <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                     </svg>
                   </div>
                   <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                   </div>
                   <input type="file" @change="handleImageUpload($event, 'staff')" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer">
                 </div>
               </div>
               <span class="mt-2 text-[10px] font-black uppercase text-gray-400 tracking-widest">Ubah Foto</span>
             </div>
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nama Lengkap</label>
               <input type="text" v-model="forms.staff.name" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all">
             </div>
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Jabatan / Mapel</label>
               <input type="text" v-model="forms.staff.position" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all">
             </div>
          </div>
          <div class="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
             <button @click="modals.staff = false" class="px-4 py-2 text-gray-600 font-bold">Batal</button>
             <button @click="submitStaff" class="px-6 py-2 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition">Simpan Staff</button>
          </div>
        </div>
      </div>

      <!-- Partner Modal -->
      <div v-if="modals.partner" class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
        <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
          <div class="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 class="font-bold text-gray-900">{{ isEditing ? 'Edit Mitra' : 'Tambah Mitra Baru' }}</h3>
            <button @click="modals.partner = false" class="text-gray-400 hover:text-gray-600">×</button>
          </div>
          <div class="p-6 space-y-6">
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nama Lembaga Mitra</label>
               <input type="text" v-model="forms.partner.name" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all">
             </div>
             <div>
               <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Logo Mitra</label>
               <div class="mt-2 flex flex-col items-center gap-4">
                 <div class="w-full h-32 rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 relative group flex items-center justify-center">
                    <img v-if="forms.partner.logo" :src="forms.partner.logo" class="max-h-[80%] max-w-[80%] object-contain">
                    <div v-else class="text-center text-gray-400">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                       </svg>
                       <span class="text-[10px] font-bold uppercase tracking-widest">Klik untuk upload logo</span>
                    </div>
                    <input type="file" @change="handleImageUpload($event, 'partner')" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer">
                 </div>
               </div>
             </div>
          </div>
          <div class="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
             <button @click="modals.partner = false" class="px-4 py-2 text-gray-600 font-bold">Batal</button>
             <button @click="submitPartner" class="px-6 py-2 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition">Simpan Mitra</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useContentStore } from '~/stores/content'

const props = defineProps<{
  unitId: string
}>()

const store = useContentStore()
const activeTab = ref('profile')
const isEditing = ref(false)
const editingId = ref<number | null>(null)

const sectionTabs = computed(() => {
  const tabs = [
    { id: 'profile', name: 'Profil & Visi Misi' },
    { id: 'facilities', name: 'Fasilitas' },
    { id: 'activities', name: 'Kegiatan' },
    { id: 'staff', name: 'Staff / Guru' }
  ]
  
  if (props.unitId === 'pondok') {
    // Hidden Activities, add Mitra
    const filtered = tabs.filter(t => t.id !== 'activities')
    filtered.push({ id: 'mitra', name: 'Mitra Lembaga' })
    return filtered
  }
  return tabs
})

const unit = computed(() => store.units.find(u => u.id === props.unitId))

// Modals State
const modals = reactive({
  facility: false,
  activity: false,
  staff: false,
  partner: false
})

// Forms State
const forms = reactive({
  facility: { name: '', icon: '🏫' },
  activity: { title: '', image: '' },
  staff: { name: '', position: '', photo: '' },
  partner: { name: '', logo: '' }
})

// --- Logic Global ---
function resetForms() {
  forms.facility = { name: '', icon: '🏫' }
  forms.activity = { title: '', image: '' }
  forms.staff = { name: '', position: '', photo: '' }
  forms.partner = { name: '', logo: '' }
  isEditing.value = false
  editingId.value = null
}

function handleImageUpload(event: Event, type: 'activity' | 'staff' | 'facility' | 'partner') {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      if (type === 'activity') forms.activity.image = result
      else if (type === 'staff') forms.staff.photo = result
      else if (type === 'facility') forms.facility.icon = result
      else if (type === 'partner') forms.partner.logo = result
    }
    reader.readAsDataURL(file)
  }
}

// --- Profil & Visi Misi ---
function addMission() {
  if (unit.value) unit.value.mission.push('Misi baru...')
}
function saveUnitChanges() {
  alert('Perubahan profil unit berhasil disimpan!')
}

// --- Facility CRUD ---
function openAddFacility() {
  resetForms()
  modals.facility = true
}
function openEditFacility(fc: any) {
  resetForms()
  isEditing.value = true
  editingId.value = fc.id
  forms.facility = { ...fc }
  modals.facility = true
}
function submitFacility() {
  if (!forms.facility.name) return
  if (isEditing.value && editingId.value) {
    store.updateFacility(props.unitId, editingId.value, { ...forms.facility })
  } else {
    store.addFacility(props.unitId, { ...forms.facility })
  }
  modals.facility = false
}
function deleteFacility(id: number) {
  if (confirm('Hapus fasilitas ini?')) store.removeFacility(props.unitId, id)
}

// --- Activity CRUD ---
function openAddActivity() {
  resetForms()
  modals.activity = true
}
function openEditActivity(act: any) {
  resetForms()
  isEditing.value = true
  editingId.value = act.id
  forms.activity = { ...act }
  modals.activity = true
}
function submitActivity() {
  if (!forms.activity.title) return
  if (isEditing.value && editingId.value) {
    store.updateActivity(props.unitId, editingId.value, { ...forms.activity })
  } else {
    store.addActivity(props.unitId, { ...forms.activity })
  }
  modals.activity = false
}
function deleteActivity(id: number) {
  if (confirm('Hapus kegiatan ini?')) store.removeActivity(props.unitId, id)
}

// --- Staff CRUD ---
function openAddStaff() {
  resetForms()
  modals.staff = true
}
function openEditStaff(s: any) {
  resetForms()
  isEditing.value = true
  editingId.value = s.id
  forms.staff = { ...s }
  modals.staff = true
}
function submitStaff() {
  if (!forms.staff.name) return
  if (isEditing.value && editingId.value) {
    store.updateStaff(props.unitId, editingId.value, { ...forms.staff })
  } else {
    store.addStaff(props.unitId, { ...forms.staff })
  }
  modals.staff = false
}
function deleteStaff(id: number) {
  if (confirm('Hapus staff ini?')) store.removeStaff(props.unitId, id)
}

// --- Partner CRUD ---
function openAddPartner() {
  resetForms()
  modals.partner = true
}
function openEditPartner(p: any) {
  resetForms()
  isEditing.value = true
  editingId.value = p.id
  forms.partner = { ...p }
  modals.partner = true
}
function submitPartner() {
  if (!forms.partner.name) return
  if (isEditing.value && editingId.value) {
    store.updateUnitPartner(props.unitId, editingId.value, { ...forms.partner })
  } else {
    store.addUnitPartner(props.unitId, { ...forms.partner })
  }
  modals.partner = false
}
function deletePartner(id: number) {
  if (confirm('Hapus mitra ini?')) store.removeUnitPartner(props.unitId, id)
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
