<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 text-black px-6 py-3 rounded-xl shadow-lg flex items-center space-x-4 border-2 border-yellow-400"
      style="min-width: 300px"
    >
      <span class="font-semibold">{{
        $t('updateNotification.newVersion')
      }}</span>
      <button
        @click="refresh"
        class="ml-4 px-3 py-1 bg-black text-yellow-300 rounded-lg font-bold hover:bg-yellow-700 transition"
      >
        {{ $t('updateNotification.refresh') }}
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  const visible = ref(false)
  function show() {
    visible.value = true
  }
  function refresh() {
    window.location.reload()
  }

  function onShowBanner() {
    show()
  }

  onMounted(() => {
    window.addEventListener('show-update-banner', onShowBanner)
  })
  onUnmounted(() => {
    window.removeEventListener('show-update-banner', onShowBanner)
  })
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
