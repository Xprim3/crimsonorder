<template>
  <section id="join" class="relative min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16" style="background: #1A1A1A;">
    <!-- Background Effects -->
    <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #8B0000, #DC2626);"></div>
    
    <!-- Main Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto">
      <!-- Hero Call-to-Action -->
      <div class="text-center mb-16 lg:mb-20">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Answer the Call
        </h2>
        <div class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mb-8"></div>
        <p class="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-4">
          Join the Legendary Crimson Order
        </p>
        <p class="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Are you ready to become part of something greater than yourself? 
          Crimson Order seeks warriors who value loyalty, strategy, and family above all else.
        </p>
      </div>

      <!-- Requirements & Expectations -->
      <div class="bg-black bg-opacity-70 rounded-3xl p-8 lg:p-12 border-2 border-red-800 mb-16">
        <div class="text-center mb-12">
          <h3 class="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">
            Are You Worthy?
          </h3>
          <p class="text-lg text-gray-300">
            We seek only the most dedicated and honorable warriors
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div class="group bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            <div class="flex flex-col items-center text-center mb-4">
              <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors mb-3">
                <span class="text-2xl">⚔️</span>
              </div>
              <h4 class="text-xl font-bold text-yellow-400">Combat Experience</h4>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed text-center">
              Minimum 50M power with proven battle experience. We value quality over quantity.
            </p>
          </div>

          <div class="group bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            <div class="flex flex-col items-center text-center mb-4">
              <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors mb-3">
                <span class="text-2xl">🕐</span>
              </div>
              <h4 class="text-xl font-bold text-yellow-400">Active Participation</h4>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed text-center">
              Daily activity required. We need warriors who are committed to our cause.
            </p>
          </div>

          <div class="group bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            <div class="flex flex-col items-center text-center mb-4">
              <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors mb-3">
                <span class="text-2xl">🤝</span>
              </div>
              <h4 class="text-xl font-bold text-yellow-400">Team Player</h4>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed text-center">
              Must work well with others and follow leadership directives without question.
            </p>
          </div>

          <div class="group bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            <div class="flex flex-col items-center text-center mb-4">
              <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors mb-3">
                <span class="text-2xl">🔒</span>
              </div>
              <h4 class="text-xl font-bold text-yellow-400">Loyalty</h4>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed text-center">
              Unwavering loyalty to the family. No previous betrayals or dishonorable conduct.
            </p>
          </div>

          <div class="group bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            <div class="flex flex-col items-center text-center mb-4">
              <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors mb-3">
                <span class="text-2xl">📱</span>
              </div>
              <h4 class="text-xl font-bold text-yellow-400">Communication</h4>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed text-center">
              Must join Discord and maintain active communication with the family.
            </p>
          </div>

          <div class="group bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            <div class="flex flex-col items-center text-center mb-4">
              <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors mb-3">
                <span class="text-2xl">💎</span>
              </div>
              <h4 class="text-xl font-bold text-yellow-400">Resource Sharing</h4>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed text-center">
              Willing to contribute to family support and resource distribution programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>

<style scoped>
/* Enhanced hover effects */
.group:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 0, 0, 0.3);
}

/* Text shadow for better readability */
h2, h3 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease-in-out;
}

/* Enhanced border glow */
.border-red-800 {
  box-shadow: 0 0 20px rgba(139, 0, 0, 0.2);
}

/* Gradient text effect */
.text-yellow-400 {
  background: linear-gradient(45deg, #F59E0B, #FCD34D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Epic Neon Button Styles */
@keyframes neon-pulse-blue {
  0%, 100% {
    box-shadow: 0 0 15px #0088FF, inset 0 0 15px rgba(0,136,255,0.3);
  }
  50% {
    box-shadow: 0 0 25px #0088FF, 0 0 35px #0088FF, inset 0 0 15px rgba(0,136,255,0.3);
  }
}

@keyframes neon-pulse-purple {
  0%, 100% {
    box-shadow: 0 0 15px #7289DA, inset 0 0 15px rgba(114,137,218,0.3);
  }
  50% {
    box-shadow: 0 0 25px #7289DA, 0 0 35px #7289DA, inset 0 0 15px rgba(114,137,218,0.3);
  }
}

.btn-neon-telegram, .btn-neon-discord {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
  min-width: 200px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-neon-telegram {
  background: linear-gradient(135deg, #8B0000, #DC2626);
  border: 2px solid #F59E0B;
  color: white;
  box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);
}

.btn-neon-discord {
  background: linear-gradient(135deg, #8B0000, #DC2626);
  border: 2px solid #F59E0B;
  color: white;
  box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);
}

.btn-neon-telegram:hover, .btn-neon-discord:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 0, 0, 0.4);
  border-color: #FCD34D;
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 2;
}

.btn-icon {
  font-size: 24px;
}

.btn-text {
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

/* Button glow effect on focus */
.btn-neon-telegram:focus, .btn-neon-discord:focus {
  outline: none;
  transform: translateY(-1px) scale(1.02);
  box-shadow: 0 6px 20px rgba(139, 0, 0, 0.4);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .btn-neon-telegram, .btn-neon-discord {
    padding: 14px 24px;
    font-size: 16px;
    min-width: 180px;
  }
  
  .btn-icon {
    font-size: 20px;
  }
}
</style> 