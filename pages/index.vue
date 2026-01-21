<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navbar -->
    <HeaderNav />
  
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20 text-center">
        <h2 class="text-4xl font-extrabold">Selamat Datang di Pondok Annawa</h2>
        <p class="mt-4 text-lg">Sistem Pendaftaran & Informasi Pondok Pesantren</p>
      </section>

    <!-- Main Content -->
    <main class="flex-1 max-w-5xl mx-auto px-6 py-12">
      <!-- PPDB -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
          PPDB - Pendaftaran Peserta Didik Baru
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            to="/ppdb/paud"
            class="p-8 rounded-2xl bg-white shadow hover:shadow-lg transition text-center"
          >
            <span class="text-xl font-semibold text-brand-700">PPDB PAUD</span>
          </NuxtLink>
          <NuxtLink
            to="/ppdb/sd"
            class="p-8 rounded-2xl bg-white shadow hover:shadow-lg transition text-center"
          >
            <span class="text-xl font-semibold text-brand-700">PPDB SD</span>
          </NuxtLink>
        </div>
      </div>

      <!-- PSB & Layanan lain -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">Layanan Lain</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/psb/putra" class="px-6 py-3 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition">PSB Putra</NuxtLink>
          <NuxtLink to="/psb/putri" class="px-6 py-3 rounded-lg bg-brand-500 text-white hover:bg-brand-600 transition">PSB Putri</NuxtLink>
          <NuxtLink
            to="/berita"
            class="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Berita
          </NuxtLink>
          <NuxtLink
            to="/galeri"
            class="px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition"
          >
            Galeri
          </NuxtLink>
        </div>
      </div>
    </main>
  </div> <!-- ✅ Tutup div di sini -->
</template>

<script setup lang="ts">
import HeaderNav from '../components/layout/HeaderNav.vue'
</script>
