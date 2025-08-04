<script setup lang="ts">
  import HeroSection from '../sections/HeroSection.vue'
  import AboutSection from '../sections/AboutSection.vue'
  import JoinSection from '../sections/JoinSection.vue'
  import JoinFamilySection from '../sections/JoinFamilySection.vue'
  // import KingdomSection from '../sections/KingdomSection.vue'
  import FAQSection from '../sections/FAQSection.vue'
  import DevTeamSection from '../sections/DevTeamSection.vue'
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
  <!-- Migration Summary/CTA -->
  <section class="my-12 flex flex-col items-center justify-center">
    <div class="bg-gradient-to-r from-yellow-500/20 to-red-600/20 rounded-2xl p-8 border-2 border-yellow-500/50 max-w-xl w-full text-center">
      <h2 class="text-2xl font-bold mb-2 text-yellow-400">Thinking of Migrating?</h2>
      <p class="mb-4 text-gray-200">Join the most prestigious kingdom and become part of the legendary Nocturnal Legacy family. Discover the benefits and process of migration!</p>
      <router-link
        to="/migration"
        class="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 border-2 border-yellow-400/50 hover:border-yellow-300"
      >
        Learn About Migration
      </router-link>
    </div>
  </section>
  <DevTeamSection />
  <FAQSection />
  <!-- <KingdomSection v-if="false" /> -->
</template>
