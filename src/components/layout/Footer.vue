<template>
  <footer class="bg-black py-6 border-t border-red-800/50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-0 md:space-x-8"
      >
        <!-- Logo & Name -->
        <a href="/" class="flex items-center space-x-3 cursor-pointer">
          <picture>
            <source srcset="/optimized/logo.webp" type="image/webp" />
            <img
              src="/optimized/logo.png"
              alt="Nocturnal Legacy Logo"
              class="w-10 h-10 object-contain object-center"
              @error="handleLogoError"
            />
          </picture>
          <!-- Fallback content if logo fails to load -->
          <div
            class="fallback-logo hidden w-10 h-10 bg-black rounded-full items-center justify-center"
          >
            <div class="text-white font-black text-sm">NL</div>
          </div>
          <div class="text-left">
            <h3
              class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold text-lg"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Nocturnal Legacy
            </h3>
            <p class="text-gray-400 text-xs">Rise of Kingdoms Elite</p>
          </div>
        </a>

        <!-- Powered by Pryda Badge -->
        <a
          href="https://discord.gg/xsgPQJ5ZJS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join the Nocturnal Legacy Discord server (Powered by Pryda)"
          class="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-red-600/20 rounded-full px-4 py-2 border border-yellow-500/30 hover:border-yellow-400/50 hover:from-yellow-500/30 hover:to-red-600/30 transition-all duration-300"
        >
          <span class="text-red-400 text-sm">⚡</span>
          <span class="text-gray-200 text-sm font-semibold"
            >Powered by Pryda</span
          >
          <span class="text-red-400 text-sm">⚡</span>
        </a>

        <!-- Social Icons -->
        <div class="flex space-x-4">
          <!-- Discord -->
          <a
            href="https://discord.gg/xsgPQJ5ZJS"
            aria-label="Join us on Discord"
            class="w-8 h-8 bg-red-800/50 rounded-full flex items-center justify-center hover:bg-red-700/70 transition-all duration-300 border border-red-700/50 hover:border-yellow-500/50 group"
          >
            <svg
              class="w-4 h-4 text-red-400 group-hover:text-yellow-400 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"
              />
            </svg>
          </a>
          <!-- Telegram -->
          <a
            href="https://t.me/+7ROpqc4W1eQ5MDYy"
            aria-label="Join us on Telegram"
            class="w-8 h-8 bg-red-800/50 rounded-full flex items-center justify-center hover:bg-red-700/70 transition-all duration-300 border border-red-700/50 hover:border-yellow-500/50 group"
          >
            <svg
              class="w-4 h-4 text-red-400 group-hover:text-yellow-400 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Copyright (small, centered) -->
      <div class="text-center mt-4 pt-4 border-t border-red-800/30">
        <p class="text-gray-500 text-xs">Nocturnal Legacy</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  // Handle logo loading errors
  const handleLogoError = (event: Event) => {
    const target = event.target as HTMLImageElement
    const fallbackContent = target.parentElement?.querySelector(
      '.fallback-logo'
    ) as HTMLElement
    if (fallbackContent) {
      fallbackContent.classList.remove('hidden')
      fallbackContent.classList.add('flex')
    }
  }
</script>

<style scoped>
  /* Smooth transitions */
  * {
    transition: all 0.3s ease-in-out;
  }
</style>
