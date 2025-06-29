<template>
  <footer class="bg-black py-6 border-t border-red-800/50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <!-- Logo & Name -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-red-900 via-red-800 to-red-700 rounded-full flex items-center justify-center border-2 border-yellow-500">
            <div class="text-white font-black text-sm">CO</div>
          </div>
          <div>
            <h3 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold text-lg" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Crimson Order</h3>
            <p class="text-gray-400 text-xs">Rise of Kingdoms Elite</p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex space-x-6">
          <a href="#home" class="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm font-medium">
            Home
          </a>
          <a href="#about" class="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm font-medium">
            About
          </a>
          <a href="#join" class="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm font-medium">
            Join
          </a>
          <a href="#kingdom" class="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm font-medium">
            Kingdom
          </a>
        </div>

        <!-- Social Icons -->
        <div class="flex space-x-4">
          <a href="#" class="w-8 h-8 bg-red-800/50 rounded-full flex items-center justify-center hover:bg-red-700/70 transition-all duration-300 border border-red-700/50 hover:border-yellow-500/50">
            <span class="text-red-400 text-sm">💬</span>
          </a>
          <a href="#" class="w-8 h-8 bg-red-800/50 rounded-full flex items-center justify-center hover:bg-red-700/70 transition-all duration-300 border border-red-700/50 hover:border-yellow-500/50">
            <span class="text-red-400 text-sm">📱</span>
          </a>
          <a href="#" class="w-8 h-8 bg-red-800/50 rounded-full flex items-center justify-center hover:bg-red-700/70 transition-all duration-300 border border-red-700/50 hover:border-yellow-500/50">
            <span class="text-red-400 text-sm">🎮</span>
          </a>
        </div>
      </div>

      <!-- Copyright (small, centered) -->
      <div class="text-center mt-4 pt-4 border-t border-red-800/30">
        <!-- Powered by Pryda Badge -->
        <div class="mb-3">
          <div class="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-red-600/20 rounded-full px-4 py-2 border border-yellow-500/30">
            <span class="text-red-400 text-sm">⚡</span>
            <span class="text-gray-200 text-sm font-semibold">Powered by Pryda</span>
            <span class="text-red-400 text-sm">⚡</span>
          </div>
        </div>
        <p class="text-gray-500 text-xs">
          © 2024 Crimson Order. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>

<style scoped>
/* Smooth transitions */
* {
  transition: all 0.3s ease-in-out;
}
</style> 