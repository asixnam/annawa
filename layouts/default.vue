<template>
  <div class="min-h-screen flex flex-col bg-white">
    <HeaderNav />
    <main class="flex-1 pt-20">
      <slot />
    </main>
    <FooterNav />
  </div>
</template>
