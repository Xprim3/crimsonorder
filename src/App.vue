<script setup lang="ts">
  import Layout from './components/layout/Layout.vue'
  import ErrorBoundary from './components/ui/ErrorBoundary.vue'
  import LoadingSpinner from './components/ui/LoadingSpinner.vue'
  import { usePerformance } from './composables/usePerformance'
  import { useRouteLoading } from './composables/useRouteLoading'
  import UpdateNotification from './components/UpdateNotification.vue'
  import { ref, computed, onMounted } from 'vue'

  // Initialize performance monitoring
  const { isLoaded } = usePerformance()
  const { isLoading: isRouteLoading } = useRouteLoading()
  const updateBanner = ref()

  // Show loading spinner for initial load OR route transitions
  const shouldShowLoading = computed(() => !isLoaded.value || isRouteLoading.value)

  // Add error handling for debugging
  onMounted(() => {
    console.log('App mounted successfully')
    
    // Global error handler
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error)
    })
    
    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason)
    })
  })
</script>

<template>
  <div id="app">
    <ErrorBoundary>
      <LoadingSpinner :loading="shouldShowLoading" />
      <Layout>
        <router-view />
      </Layout>
      <UpdateNotification ref="updateBanner" />
    </ErrorBoundary>
  </div>
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
