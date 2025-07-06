<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-6 sm:pt-20 lg:pt-24 xl:pt-28 pb-8 sm:pb-12 lg:pb-16 xl:pb-20"
  >
    <!-- Background Layer -->
    <div class="absolute inset-0 z-0">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-gray-800"
      >
        <!-- Optimized fire particles - reduced count for performance -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            v-for="i in 10"
            :key="i"
            class="fire-particle absolute w-2 h-2 bg-orange-500 rounded-full opacity-60"
            :style="{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }"
            aria-hidden="true"
          ></div>
        </div>

        <!-- Crimson banners overlay -->
        <div
          class="absolute top-0 left-0 w-full h-full opacity-20"
          aria-hidden="true"
        >
          <div
            class="absolute top-10 left-10 w-32 h-48 bg-gradient-to-b from-red-800 to-red-600 transform -rotate-12"
          ></div>
          <div
            class="absolute top-20 right-20 w-24 h-36 bg-gradient-to-b from-red-700 to-red-500 transform rotate-6"
          ></div>
          <div
            class="absolute bottom-20 left-1/4 w-28 h-40 bg-gradient-to-b from-red-800 to-red-600 transform -rotate-3"
          ></div>
        </div>
      </div>

      <!-- Dark overlay for text readability -->
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>

    <!-- Main Content -->
    <div
      class="relative z-10 text-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
    >
      <!-- Main Headline -->
      <div class="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Logo Emblem -->
        <div class="flex justify-center mb-6">
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-black rounded-full border-2 border-yellow-500 flex items-center justify-center shadow-2xl"
            style="box-shadow: 0 0 20px rgba(251, 191, 36, 0.4)"
          >
            <picture>
              <source srcset="/optimized/logo.webp" type="image/webp" />
              <img src="/optimized/logo.png" alt="Nocturnal Legacy Logo" />
            </picture>
            <!-- Fallback content if logo fails to load -->
            <div
              class="fallback-logo hidden absolute inset-0 items-center justify-center"
            >
              <div class="text-center">
                <div
                  class="text-lg sm:text-xl lg:text-2xl font-black text-white"
                >
                  NL
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1
          class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tight"
        >
          <span
            class="text-white drop-shadow-lg"
            style="
              text-shadow:
                0 0 10px rgba(220, 38, 38, 0.5),
                0 0 20px rgba(220, 38, 38, 0.3);
            "
          >
            LEAVE YOUR
          </span>
          <br />
          <span
            class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
            style="text-shadow: 0 0 15px rgba(251, 191, 36, 0.4)"
          >
            MARK
          </span>
        </h1>

        <p
          class="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 drop-shadow-lg mb-6 tracking-wider"
          style="
            text-shadow:
              0 0 10px rgba(251, 191, 36, 0.5),
              0 0 20px rgba(251, 191, 36, 0.3);
          "
        >
          LEGACY • FAMILY • IMMORTALITY
        </p>

        <p
          class="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Your name will echo through the ages. Join the Nocturnal Legacy and
          become part of a family whose legends will be told for generations.
          Your story starts here.
        </p>
      </div>

      <!-- Primary CTA Button -->
      <button
        @click="scrollToSection('#join-family')"
        class="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg sm:text-xl rounded-lg border-2 border-yellow-500 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 focus:outline-none focus:ring-4 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Join the Nocturnal Legacy family"
      >
        <span class="relative z-10 flex items-center space-x-2">
          <span>WRITE YOUR STORY</span>
        </span>
        <div
          class="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
</script>

<style scoped>
  /* Optimized fire particle animation */
  .fire-particle {
    animation: float-up 3s ease-in-out infinite;
    will-change: transform, opacity;
  }

  @keyframes float-up {
    0% {
      transform: translateY(100vh) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 0.6;
    }
    90% {
      opacity: 0.6;
    }
    100% {
      transform: translateY(-100px) scale(1);
      opacity: 0;
    }
  }

  /* Text glow effect */
  h1 span {
    text-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
  }

  /* Button glow effect */
  button {
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
  }

  button:hover {
    box-shadow: 0 0 30px rgba(239, 68, 68, 0.6);
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .fire-particle {
      animation-duration: 2s;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .fire-particle {
      animation: none;
    }

    button {
      transition: none;
    }

    button:hover {
      transform: none;
    }
  }
</style>
