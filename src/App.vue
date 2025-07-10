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
  import UpdateNotification from './components/UpdateNotification.vue'
  import { ref } from 'vue'
  import DevTeamSection from './components/sections/DevTeamSection.vue'

  // Initialize performance monitoring
  const { isLoaded } = usePerformance()
  const updateBanner = ref()
</script>

<template>
  <ErrorBoundary>
    <LoadingSpinner :loading="!isLoaded" />
    <Layout>
      <HeroSection />
      <AboutSection />
      <JoinSection />
      <JoinFamilySection />
      <DevTeamSection />
      <FAQSection />
      <KingdomSection v-if="false" />
    </Layout>
    <UpdateNotification ref="updateBanner" />
    <!-- Removed the bottom section with language selector, greeting, dashboard.welcome, and login button -->
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
