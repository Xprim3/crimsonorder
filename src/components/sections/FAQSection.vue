<template>
  <section id="faq" class="relative min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16" style="background: #1A1A1A;">
    <!-- Background Effects -->
    <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #8B0000, #DC2626);"></div>
    
    <!-- Main Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
          Common Questions
        </h2>
        <div class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"></div>
        <p class="text-lg text-gray-300 mt-6 max-w-3xl mx-auto">
          Everything you need to know about joining the legendary Crimson Order family
        </p>
      </div>

      <!-- FAQ Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Left Column -->
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold text-yellow-400 mb-3">What if I don't meet the power requirement?</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              We consider exceptional players on a case-by-case basis. Contact our leaders to discuss your situation and potential exceptions.
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold text-yellow-400 mb-3">How long is the trial period?</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              The trial period is 2 weeks, during which we evaluate your skills, teamwork, and commitment to our family values.
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold text-yellow-400 mb-3">Do I need to leave my current alliance?</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              Yes, full membership requires joining one of our alliances. We cannot accept dual membership for security reasons.
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold text-yellow-400 mb-3">What if I can't be active daily?</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              We understand real life comes first. Communicate with leadership about any absences in advance.
            </p>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold text-yellow-400 mb-3">Can I choose which alliance to join?</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              Leadership will recommend the best fit based on your skills and preferences during the interview process.
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold text-yellow-400 mb-3">What happens if I'm rejected?</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              You can reapply after 30 days. Use this time to improve your power, activity, or address any concerns raised.
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold text-yellow-400 mb-3">Is Discord mandatory?</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              Yes, Discord is required for communication, coordination, and staying updated with family events and strategies.
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300">
            <h4 class="text-lg font-bold text-yellow-400 mb-3">What are the benefits of joining?</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              Elite protection, strategic training, resource sharing, constant victories, and a supportive community of experienced players.
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