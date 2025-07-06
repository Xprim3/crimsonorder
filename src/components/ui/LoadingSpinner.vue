<template>
  <div
    v-if="loading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
  >
    <div class="relative">
      <!-- Spinner -->
      <div class="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      
      <!-- Loading Text -->
      <div class="mt-4 text-center">
        <div class="text-yellow-400 text-lg font-semibold mb-2">
          Loading Nocturnal Legacy
        </div>
        <div class="text-gray-300 text-sm">
          Preparing your elite gaming experience...
        </div>
      </div>
      
      <!-- Pulsing Dots -->
      <div class="flex justify-center mt-4 space-x-1">
        <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
        <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  loading: boolean
}

defineProps<Props>()
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 