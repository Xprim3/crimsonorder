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
  import { useI18n } from 'vue-i18n';

  // Initialize performance monitoring
  const { isLoaded } = usePerformance()
  const updateBanner = ref()
  const { locale } = useI18n();

  function changeLanguage(event: Event) {
    locale.value = (event.target as HTMLSelectElement).value;
  }
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
    <UpdateNotification ref="updateBanner" />
    <div class="p-4">
      <select v-model="locale" @change="changeLanguage" class="border rounded p-1 mb-4">
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
      <h1 class="text-2xl font-bold mb-2">{{ $t('greeting') }}</h1>
      <p>{{ $t('dashboard.welcome', { name: 'User' }) }}</p>
      <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">{{ $t('auth.login') }}</button>
    </div>
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
