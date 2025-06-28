<script setup lang="ts">
import Layout from './components/layout/Layout.vue'
import HeroSection from './components/sections/HeroSection.vue'
</script>

<template>
  <Layout>
    <HeroSection />
    
    <!-- Placeholder sections for testing -->
    <section id="about" class="min-h-screen flex items-center justify-center" style="background: var(--bg-secondary);">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4" style="color: var(--text-primary);">About Crimson Order</h2>
        <p class="text-xl" style="color: var(--text-secondary);">Coming soon...</p>
      </div>
    </section>
    
    <section id="alliances" class="min-h-screen flex items-center justify-center" style="background: var(--bg-tertiary);">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4" style="color: var(--text-primary);">Our Alliances</h2>
        <p class="text-xl" style="color: var(--text-secondary);">Crimson Paladins & Crimson Eagles</p>
      </div>
    </section>
    
    <section id="join" class="min-h-screen flex items-center justify-center" style="background: var(--bg-secondary);">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4" style="color: var(--text-primary);">Join Us</h2>
        <p class="text-xl" style="color: var(--text-secondary);">Become part of our family</p>
      </div>
    </section>
    
    <section id="contact" class="min-h-screen flex items-center justify-center" style="background: var(--bg-tertiary);">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4" style="color: var(--text-primary);">Contact</h2>
        <p class="text-xl" style="color: var(--text-secondary);">Get in touch with us</p>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
