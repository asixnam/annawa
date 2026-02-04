<template>
  <button
    @click="toggleTheme"
    class="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-500 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/50"
    :title="`Switch to ${nextTheme} mode`"
  >
    <div class="relative w-5 h-5 overflow-hidden">
      <!-- Sun Icon -->
      <transition
        enter-active-class="transform transition duration-300 ease-out"
        enter-from-class="translate-y-8 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transform transition duration-300 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-8 opacity-0"
      >
        <svg v-if="colorMode.preference === 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <svg v-else-if="colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <!-- <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg> -->
      </transition>
    </div>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const themes = ['light', 'dark']

const nextTheme = computed(() => {
  const currentIndex = themes.indexOf(colorMode.preference)
  const nextIndex = (currentIndex + 1) % themes.length
  return themes[nextIndex]
})

function toggleTheme() {
  colorMode.preference = nextTheme.value
}
</script>
