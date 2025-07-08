<template>
  <div
    v-if="hasError"
    class="min-h-screen flex items-center justify-center bg-black"
  >
    <div class="text-center p-8">
      <!-- Error Icon -->
      <div
        class="w-24 h-24 mx-auto mb-6 bg-red-900/50 rounded-full flex items-center justify-center"
      >
        <span class="text-red-400 text-4xl">⚠️</span>
      </div>

      <!-- Error Message -->
      <h1 class="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p class="text-gray-400 mb-6 max-w-md">
        We're experiencing technical difficulties. Please try refreshing the
        page or contact our support team.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="reloadPage"
          class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
        >
          Refresh Page
        </button>
        <button
          @click="goHome"
          class="px-6 py-3 bg-red-800/50 text-white font-semibold rounded-lg border border-red-700 hover:bg-red-700/50 transition-all duration-300"
        >
          Go Home
        </button>
      </div>

      <!-- Error Details (Development Only) -->
      <div
        v-if="error && isDevelopment"
        class="mt-8 p-4 bg-red-900/20 rounded-lg border border-red-700/50"
      >
        <h3 class="text-red-400 font-semibold mb-2">Error Details:</h3>
        <pre class="text-xs text-gray-400 overflow-auto">{{ error }}</pre>
      </div>
    </div>
  </div>

  <slot v-else />
</template>

<script setup lang="ts">
  import { ref, onErrorCaptured } from 'vue'

  const hasError = ref(false)
  const error = ref<Error | null>(null)
  const isDevelopment = import.meta.env.DEV

  const reloadPage = () => {
    window.location.reload()
  }

  const goHome = () => {
    window.location.href = '/'
  }

  onErrorCaptured((err: Error) => {
    hasError.value = true
    error.value = err

    // Log error for debugging
    console.error('Error caught by boundary:', err)

    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: err.message,
        fatal: false,
      })
    }

    return false // Prevent error from propagating
  })
</script>
