<script setup lang="ts">
  import Layout from './components/layout/Layout.vue'
  import ErrorBoundary from './components/ui/ErrorBoundary.vue'
  import LoadingSpinner from './components/ui/LoadingSpinner.vue'
  import { usePerformance } from './composables/usePerformance'
  import { useRouteLoading } from './composables/useRouteLoading'
  import UpdateNotification from './components/UpdateNotification.vue'
  import { ref, computed } from 'vue'

  // Initialize performance monitoring
  const { isLoaded } = usePerformance()
  const { isLoading: isRouteLoading } = useRouteLoading()
  const updateBanner = ref()

  // Show loading spinner for initial load OR route transitions
  const shouldShowLoading = computed(() => !isLoaded.value || isRouteLoading.value)
</script>

<template>
  <ErrorBoundary>
    <LoadingSpinner :loading="shouldShowLoading" />
    <Layout>
      <router-view />
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
