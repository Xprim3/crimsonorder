<script setup lang="ts">
  import Layout from './components/layout/Layout.vue'
  import HeroSection from './components/sections/HeroSection.vue'
  import AboutSection from './components/sections/AboutSection.vue'
  import JoinSection from './components/sections/JoinSection.vue'
  import JoinFamilySection from './components/sections/JoinFamilySection.vue'
  import KingdomSection from './components/sections/KingdomSection.vue'
  import FAQSection from './components/sections/FAQSection.vue'
  import ErrorBoundary from './components/ui/ErrorBoundary.vue'
  import LoadingSpinner from './components/ui/LoadingSpinner.vue'
  import { usePerformance } from './composables/usePerformance'

  // Initialize performance monitoring
  const { isLoaded } = usePerformance()
</script>

<template>
  <ErrorBoundary>
    <LoadingSpinner :loading="!isLoaded" />
    <Layout>
      <HeroSection />
      <AboutSection />
      <JoinSection />
      <JoinFamilySection />
      <FAQSection />
      <KingdomSection v-if="false" />
    </Layout>
  </ErrorBoundary>
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
