<template>
  <div class="min-h-screen" style="background: var(--bg-primary);">
    <Header />
    <main class="pt-16 lg:pt-20">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
</script> 