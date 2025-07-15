<script setup lang="ts">
  import Layout from '../layout/Layout.vue'
  import HeroSection from '../sections/HeroSection.vue'
  import AboutSection from '../sections/AboutSection.vue'
  import JoinSection from '../sections/JoinSection.vue'
  import JoinFamilySection from '../sections/JoinFamilySection.vue'
  // import KingdomSection from '../sections/KingdomSection.vue'
  import FAQSection from '../sections/FAQSection.vue'
  import DevTeamSection from '../sections/DevTeamSection.vue'
</script>

<template>
  <Layout>
    <HeroSection />
    <AboutSection />
    <JoinSection />
    <JoinFamilySection />
    <DevTeamSection />
    <FAQSection />
    <!-- <KingdomSection v-if="false" /> -->
  </Layout>
</template>
