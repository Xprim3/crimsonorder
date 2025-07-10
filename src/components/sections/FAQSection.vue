<template>
  <section
    id="faq"
    class="relative min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
    style="background: #1a1a1a"
  >
    <!-- Background Effects -->
    <div
      class="absolute inset-0 opacity-20"
      style="background: linear-gradient(135deg, #8b0000, #dc2626)"
    ></div>

    <!-- Main Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
          {{ $t('faq.title') }}
        </h2>
        <div
          class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"
        ></div>
        <p class="text-lg text-gray-300 mt-6 max-w-3xl mx-auto">
          {{ $t('faq.subtitle') }}
        </p>
      </div>

      <!-- FAQ Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Left Column -->
        <div class="space-y-6">
          <div v-for="idx in 4" :key="idx" class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)">
              {{ $t(`faq.questions.${idx - 1}.q`) }}
            </h4>
            <p class="text-gray-200 text-sm leading-relaxed">
              {{ $t(`faq.questions.${idx - 1}.a`) }}
            </p>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <div v-for="idx in 4" :key="idx" class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)">
              {{ $t(`faq.questions.${idx + 3}.q`) }}
            </h4>
            <p class="text-gray-200 text-sm leading-relaxed">
              {{ $t(`faq.questions.${idx + 3}.a`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // No additional logic needed for this section
</script>

<style scoped>
  /* Custom hover effects */
  .bg-gradient-to-br:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 0, 0, 0.3);
  }
</style>
