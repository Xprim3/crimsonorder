<template>
  <div class="min-h-screen" style="background: var(--bg-primary)">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />

    <!-- Scroll to Top Button -->
    <transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 transform translate-y-10 scale-75"
      enter-to-class="opacity-100 transform translate-y-0 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 transform translate-y-0 scale-100"
      leave-to-class="opacity-0 transform translate-y-10 scale-75"
    >
      <button
        v-show="showScrollToTop"
        @click="scrollToTop"
        aria-label="Scroll to top"
        class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-110 border-2 border-yellow-400/50 hover:border-yellow-300"
        style="box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3)"
      >
        <span class="text-white text-xl"> ↑</span>
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import Header from './Header.vue'
  import Footer from './Footer.vue'

  // Scroll to top functionality
  const showScrollToTop = ref(false)

  const handleScroll = () => {
    showScrollToTop.value = window.scrollY > 300
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>
