<template>
  <footer class="bg-black text-gray-400 py-16">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Column 1: Intro -->
        <div>
          <NuxtLink to="/" class="flex items-center mb-6">
            <img src="/annawa.png" alt="Logo" class="w-12 h-12 object-contain brightness-0 invert" />
            <div class="ml-3">
              <span class="block text-sm font-bold text-white leading-tight uppercase">Khozinatul Ulum</span>
              <span class="block text-xs font-semibold text-brand-500 uppercase">An-Nawa</span>
            </div>
          </NuxtLink>
          <p class="text-sm leading-relaxed mb-6">
            Lembaga pendidikan Islam yang menggabungkan tradisi pesantren dengan pendidikan modern untuk membentuk generasi Qur'ani.
          </p>
          <div class="flex space-x-4">
            <!-- Social Icons (Placeholders) -->
            <a href="#" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.495.32-3.44.1.265-.945-.945-1.208-1.208-2.485-1.265-3.766-1.265-5.046-.072-1.28-.058-2.497-.321-3.442-.1.265-.945.945-1.208 1.208-2.485 1.265-3.766 1.265-5.046.072z"/></svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Program Pendidikan -->
        <div>
          <h3 class="text-white font-bold mb-6 tracking-wider uppercase text-sm">Program Pendidikan</h3>
          <ul class="space-y-4 text-sm">
            <li><NuxtLink to="/psb/putra" class="hover:text-brand-500 transition-colors">Pesantren Putra</NuxtLink></li>
            <li><NuxtLink to="/psb/putri" class="hover:text-brand-500 transition-colors">Pesantren Putri</NuxtLink></li>
            <li><NuxtLink to="/ppdb/paud" class="hover:text-brand-500 transition-colors">PAUD Islam</NuxtLink></li>
            <li><NuxtLink to="/ppdb/sd" class="hover:text-brand-500 transition-colors">SD / QTA</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 3: Tautan Penting -->
        <div>
          <h3 class="text-white font-bold mb-6 tracking-wider uppercase text-sm">Tautan Penting</h3>
          <ul class="space-y-4 text-sm">
            <li><NuxtLink to="/profil" class="hover:text-brand-500 transition-colors">Profil Pondok</NuxtLink></li>
            <li><NuxtLink to="/kajian" class="hover:text-brand-500 transition-colors">Jadwal Kajian</NuxtLink></li>
            <li><NuxtLink to="/berita" class="hover:text-brand-500 transition-colors">Warta Terbaru</NuxtLink></li>
            <li><NuxtLink to="/kontak" class="hover:text-brand-500 transition-colors">Hubungi Kami</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 4: Kontak -->
        <div>
          <h3 class="text-white font-bold mb-6 tracking-wider uppercase text-sm">Kontak Kami</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Jl. Raya Blora-Cepu, Karangjati, Blora, Jawa Tengah 58219</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@annawa.com</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+62 812-3456-7890</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase">
        <p>&copy; {{ currentYear }} Pondok Pesantren Khozinatul Ulum An-Nawa. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
