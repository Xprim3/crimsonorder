<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-40 pb-8 sm:pb-12 lg:pb-16 xl:pb-20"
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
      class="relative z-10 text-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-10 sm:pt-0 lg:mt-16"
    >
      <!-- Main Headline -->
      <div class="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
            {{ $t('hero.leaveYour') }}
          </span>
          <br />
          <span
            class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
            style="text-shadow: 0 0 15px rgba(251, 191, 36, 0.4)"
          >
            {{ $t('hero.mark') }}
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
          {{ $t('hero.subheadline') }}
        </p>

        <p
          class="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {{ $t('hero.description') }}
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12">
        <!-- Members Card -->
        <div class="scroll-card">
          <div class="scroll-content">
            <div class="scroll-icon-circle">
              <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <div class="scroll-number">2,847</div>
            <div class="scroll-label">{{ $t('hero.stats.members') }}</div>
          </div>
          <div class="scroll-border"></div>
        </div>

        <!-- Alliances Card -->
        <div class="scroll-card">
          <div class="scroll-content">
            <div class="scroll-icon-circle">
              <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="scroll-number">4</div>
            <div class="scroll-label">{{ $t('hero.stats.alliances') }}</div>
          </div>
          <div class="scroll-border"></div>
        </div>

        <!-- Kingdom Card -->
        <div class="scroll-card">
          <div class="scroll-content">
            <div class="scroll-icon-circle">
              <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="scroll-number">#3866</div>
            <div class="scroll-label">{{ $t('hero.stats.kingdom') }}</div>
          </div>
          <div class="scroll-border"></div>
        </div>

        <!-- Total Power Card -->
        <div class="scroll-card">
          <div class="scroll-content">
            <div class="scroll-icon-circle">
              <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="scroll-number">847M</div>
            <div class="scroll-label">{{ $t('hero.stats.totalPower') }}</div>
          </div>
          <div class="scroll-border"></div>
        </div>
      </div>

      <!-- Scroll Down Indicator -->
      <div class="scroll-indicator group" @click="scrollToSection('#about')">
        <div class="scroll-text">{{ $t('hero.scrollDown') }}</div>
        <div class="scroll-arrow">
          <svg class="w-6 h-6 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>
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

  /* Glassmorphism Stats Cards - Theme Based */
  .scroll-card {
    @apply relative p-3 text-center transform transition-all duration-300 hover:scale-105;
    background: rgba(127, 29, 29, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 12px;
    border: 1px solid rgba(239, 68, 68, 0.3);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(239, 68, 68, 0.2);
    position: relative;
    overflow: hidden;
  }

  .scroll-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(153, 27, 27, 0.05) 100%);
    border-radius: 12px;
    pointer-events: none;
  }

  .scroll-card:hover {
    background: rgba(127, 29, 29, 0.25);
    border-color: rgba(239, 68, 68, 0.5);
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(239, 68, 68, 0.4);
  }

  .scroll-content {
    @apply relative z-10;
  }

  .scroll-icon-circle {
    @apply text-yellow-400 mb-2 mx-auto flex items-center justify-center;
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(239, 68, 68, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(251, 191, 36, 0.4);
    border-radius: 50%;
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(251, 191, 36, 0.3);
    transition: all 0.3s ease;
  }

  .scroll-card:hover .scroll-icon-circle {
    background: rgba(239, 68, 68, 0.3);
    border-color: rgba(251, 191, 36, 0.6);
    box-shadow: 
      0 6px 20px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(251, 191, 36, 0.4);
    transform: scale(1.05);
  }

  .scroll-number {
    @apply text-xl sm:text-2xl font-bold mb-1;
    color: #FEF3C7;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .scroll-label {
    @apply text-xs font-medium;
    color: rgba(251, 191, 36, 0.9);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .scroll-border {
    display: none;
  }

  /* Remove corner flourishes */
  .scroll-card::after {
    display: none;
  }

  /* Scroll Indicator */
  .scroll-indicator {
    @apply flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-110;
  }

  .scroll-text {
    @apply text-gray-300 text-sm font-medium mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300;
  }

  .scroll-arrow {
    @apply text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300;
  }

  /* Text glow effect */
  h1 span {
    text-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .fire-particle {
      animation-duration: 2s;
    }
    .pt-10 {
      padding-top: 2.5rem !important;
    }
    .scroll-card {
      @apply p-2;
    }
    .scroll-number {
      @apply text-lg;
    }
    .scroll-icon-circle {
      width: 2rem;
      height: 2rem;
    }
  }

  /* Large screen adjustments */
  @media (min-width: 1024px) {
    .scroll-card {
      @apply p-3;
    }
    .scroll-number {
      @apply text-xl;
    }
    .scroll-icon-circle {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  /* Extra large screen adjustments */
  @media (min-width: 1280px) {
    #home {
      padding-top: 10rem !important;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .fire-particle {
      animation: none;
    }

    .scroll-card:hover {
      transform: none;
    }

    .scroll-indicator:hover {
      transform: none;
    }

    .animate-bounce {
      animation: none;
    }
  }
</style>
