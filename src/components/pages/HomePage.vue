<script setup lang="ts">
  import HeroSection from '../sections/HeroSection.vue'
  import AboutSection from '../sections/AboutSection.vue'
  import JoinSection from '../sections/JoinSection.vue'
  import JoinFamilySection from '../sections/JoinFamilySection.vue'
  // import KingdomSection from '../sections/KingdomSection.vue'
  import FAQSection from '../sections/FAQSection.vue'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  onMounted(() => {
    // Handle hash navigation when page loads
    if (route.hash) {
      setTimeout(() => {
        const element = document.querySelector(route.hash)
        const header = document.querySelector('header')
        if (element && header) {
          const headerHeight = header.offsetHeight
          const elementTop = (element as HTMLElement).offsetTop
          const scrollPosition = elementTop - headerHeight - 20
          
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
          })
        }
      }, 100) // Small delay to ensure page is fully loaded
    }
  })
</script>

<template>
  <HeroSection />
  <AboutSection />
  <JoinSection />
  <JoinFamilySection />
  <FAQSection />
  <!-- <KingdomSection v-if="false" /> -->
</template>
