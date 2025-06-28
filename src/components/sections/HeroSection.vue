<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 opacity-20" style="background: linear-gradient(to bottom right, var(--accent-primary), var(--accent-secondary));"></div>
    <div class="absolute inset-0 pattern-bg opacity-30"></div>
    
    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <div class="mb-8">
        <div class="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-2xl">
          <span class="text-white font-bold text-3xl lg:text-4xl">CO</span>
        </div>
        <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-wider" style="color: var(--text-primary);">
          Crimson Order
        </h1>
        <p class="text-xl lg:text-2xl mb-8 font-medium" style="color: var(--accent-primary);">
          Rise of Kingdoms Family
        </p>
        <p class="text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style="color: var(--text-secondary);">
          Join the most powerful family in Rise of Kingdoms. 
          Crimson Paladins and Crimson Eagles await your arrival.
        </p>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          @click="scrollToSection('#join')"
          label="Join Our Family" 
          class="p-button-lg p-button-danger"
          icon="pi pi-users"
        />
        <Button 
          @click="scrollToSection('#about')"
          label="Learn More" 
          class="p-button-lg p-button-outlined p-button-danger"
          icon="pi pi-info-circle"
        />
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 rounded-full flex justify-center" style="border: 2px solid var(--accent-primary);">
        <div class="w-1 h-3 rounded-full mt-2 animate-pulse" style="background: var(--accent-primary);"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

const scrollToSection = (href: string): void => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
.pattern-bg {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style> 