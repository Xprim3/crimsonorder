<template>
  <div class="min-h-screen" style="background: var(--bg-primary);">
    <Header />
    <!-- Spacer div to prevent content from hiding behind fixed header -->
    <div class="h-16 lg:h-20"></div>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
</script> 