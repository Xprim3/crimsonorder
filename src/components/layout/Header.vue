<template>
  <header
    class="fixed top-0 left-0 right-0 z-50"
    :class="[
      isScrolled
        ? 'bg-opacity-95 backdrop-blur-md shadow-lg'
        : 'bg-opacity-90 backdrop-blur-sm',
    ]"
    style="
      background: linear-gradient(
        135deg,
        #000000 0%,
        #1f2937 25%,
        #dc2626 50%,
        #1f2937 75%,
        #000000 100%
      );
      border-bottom: 3px solid #fbbf24;
      box-shadow:
        0 4px 20px rgba(0, 0, 0, 0.6),
        inset 0 1px 0 rgba(251, 191, 36, 0.3);
    "
  >
    <div class="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo/Brand -->
        <a
          href="/"
          class="flex items-center space-x-2 sm:space-x-3 cursor-pointer mr-2 sm:mr-0"
          aria-label="Nocturnal Legacy Home"
        >
          <!-- Enhanced Nocturnal Legacy Emblem -->
          <div class="relative group w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
            <picture>
              <source srcset="/optimized/logo.webp" type="image/webp" />
              <img
                src="/optimized/logo.png"
                alt="Nocturnal Legacy Emblem"
                class="w-full h-full object-contain object-center transition-transform duration-300"
                @error="handleImageError"
                loading="eager"
              />
            </picture>

            <!-- Fallback content if image fails to load -->
            <div
              class="absolute inset-0 items-center justify-center fallback-content hidden"
            >
              <div class="text-center">
                <div
                  class="text-xs sm:text-sm lg:text-base font-black text-white group-hover:text-yellow-100 transition-colors duration-300"
                >
                  NL
                </div>
              </div>
            </div>
          </div>

          <!-- Text Brand -->
          <div class="block">
            <h1
              class="font-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl tracking-widest uppercase text-left leading-tight"
              style="
                color: #fbbf24;
                text-shadow:
                  0 2px 8px rgba(0, 0, 0, 0.9),
                  0 0 20px rgba(251, 191, 36, 0.6);
                filter: drop-shadow(0 0 6px #fbbf24);
              "
            >
              Nocturnal Legacy
            </h1>
            <p
              class="text-xs sm:text-sm lg:text-sm font-bold tracking-wide text-left"
              style="color: #ffffff; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8)"
            >
              Rise of Kingdoms Elite
            </p>
          </div>
        </a>

        <!-- Desktop Navigation and Language Switcher (LG and above) -->
        <div class="flex items-center gap-3">
          <nav
            class="max-lg:hidden flex items-center space-x-2"
            role="navigation"
            aria-label="Main navigation"
          >
            <div
              v-for="item in navigationItems"
              :key="item.id"
              class="relative group"
            >
              <!-- Main Navigation Item -->
              <a
                :href="item.href"
                @click="scrollToSection(item.href)"
                class="font-medium relative px-2 py-2 rounded-lg flex items-center space-x-1 transition-all duration-200 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
                style="color: #ffffff; text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8)"
                :aria-label="`Navigate to ${item.label} section`"
              >
                <!-- Gaming Icons -->
                <span class="text-lg" aria-hidden="true">
                  <svg
                    v-if="item.id === 'home'"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                  </svg>
                  <svg
                    v-else-if="item.id === 'about'"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <svg
                    v-else-if="item.id === 'crimson-family'"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <svg
                    v-else-if="item.id === 'kingdom'"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <svg
                    v-else-if="item.id === 'join-us'"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                  <svg
                    v-else-if="item.id === 'faq'"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </span>
                <span class="text-sm">{{ item.label }}</span>
              </a>
            </div>
          </nav>
          <!-- Language Switcher -->
          <div class="items-center relative select-none">
            <button @click="toggleLangDropdown" @blur="closeLangDropdown" class="lang-switcher-btn flex items-center justify-center w-20 min-w-[80px] max-w-[80px] px-2 py-1 rounded focus:outline-none">
              <img :src="`https://flagcdn.com/24x18/${languages.find(l => l.value === locale)?.flag}.png`" alt="flag" class="flag-img mr-2 w-4 h-4 rounded-sm object-cover" width="16" height="12" loading="lazy" />
              <span class="font-semibold text-xs">{{ languages.find(l => l.value === locale)?.label }}</span>
              <svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <transition name="fade-slide">
              <ul v-if="showLangDropdown" class="absolute inset-x-0 top-full mt-1 w-24 bg-black rounded z-50">
                <li v-for="lang in languages" :key="lang.value">
                  <button
                    @mousedown.prevent="selectLanguage(lang.value)"
                    :class="[
                      'lang-dropdown-item w-full flex items-center transition-colors duration-200 rounded',
                      locale === lang.value ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'
                    ]"
                  >
                    <img :src="`https://flagcdn.com/24x18/${lang.flag}.png`" alt="flag" class="flag-img mr-2 w-4 h-4 rounded-sm object-cover" width="16" height="12" loading="lazy" />
                    <span class="text-xs">{{ lang.label }}</span>
                  </button>
                </li>
              </ul>
            </transition>
          </div>
        </div>
        <!-- Mobile (left of hamburger) -->
        <div class="lg:hidden flex items-center space-x-2 relative select-none">
          <button @click="toggleLangDropdown" @blur="closeLangDropdown" class="lang-switcher-btn flex items-center justify-center w-20 min-w-[80px] max-w-[80px] px-2 py-1 rounded focus:outline-none">
            <img :src="`https://flagcdn.com/24x18/${languages.find(l => l.value === locale)?.flag}.png`" alt="flag" class="flag-img mr-2 w-4 h-4 rounded-sm object-cover" width="16" height="12" loading="lazy" />
            <svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <transition name="fade-slide">
            <ul v-if="showLangDropdown" class="absolute inset-x-0 top-full mt-1 w-20 bg-black rounded z-50">
              <li v-for="lang in languages" :key="lang.value">
                <button @mousedown.prevent="selectLanguage(lang.value)" class="lang-dropdown-item w-full flex items-center hover:text-yellow-400 transition-colors duration-200 rounded">
                  <img :src="`https://flagcdn.com/24x18/${lang.flag}.png`" alt="flag" class="flag-img mr-2 w-4 h-4 rounded-sm object-cover" width="16" height="12" loading="lazy" />
                  <span class="ml-1 text-xs">{{ lang.label }}</span>
                </button>
              </li>
            </ul>
          </transition>
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black border-2 border-transparent transition-all duration-200"
            style="
              color: #dc2626;
              background: rgba(0, 0, 0, 0.8);
              backdrop-filter: blur(8px);
              border-color: #dc2626;
              box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4);
            "
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
          >
            <!-- Hamburger icon code here -->
            <div class="w-5 h-5 flex flex-col justify-center items-center">
              <span
                class="block w-4 h-0.5 rounded transition-all duration-500 ease-out"
                :class="
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-1.5'
                    : 'rotate-0 translate-y-0'
                "
                style="background: #dc2626; box-shadow: 0 0 6px #dc2626"
              ></span>
              <span
                class="block w-4 h-0.5 rounded transition-all duration-300 ease-out mt-1"
                :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
                style="background: #dc2626; box-shadow: 0 0 6px #dc2626"
              ></span>
              <span
                class="block w-4 h-0.5 rounded transition-all duration-500 ease-out mt-1"
                :class="
                  isMobileMenuOpen
                    ? '-rotate-45 -translate-y-1.5'
                    : 'rotate-0 translate-y-0'
                "
                style="background: #dc2626; box-shadow: 0 0 6px #dc2626"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition name="dropdown-fade-scale">
        <div
          v-show="isMobileMenuOpen"
          id="mobile-menu"
          class="lg:hidden absolute right-2 top-16 w-56 rounded-xl shadow-2xl py-3 z-50 max-h-96 overflow-y-auto"
          style="
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(16px);
            border: 2px solid #dc2626;
            box-shadow: 0 8px 32px rgba(220, 38, 38, 0.6);
          "
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav class="space-y-1">
            <div
              v-for="item in navigationItems"
              :key="item.id"
              class="space-y-1"
            >
              <!-- Main Navigation Item -->
              <a
                :href="item.href"
                @click="scrollToSection(item.href)"
                class="font-bold px-4 py-3 rounded-lg border-l-4 border-transparent transition-all duration-300 ease-in-out flex items-center justify-between mx-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset"
                style="color: #ffffff; background: rgba(31, 41, 55, 0.8)"
                :style="{ '--hover-border': '#dc2626' }"
                :aria-label="`Navigate to ${item.label} section`"
              >
                <div class="flex items-center space-x-3">
                  <!-- Gaming Icons for Mobile -->
                  <span class="text-lg" aria-hidden="true">
                    <svg
                      v-if="item.id === 'home'"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      />
                      <polyline points="9,22 9,12 15,12 15,22" />
                    </svg>
                    <svg
                      v-else-if="item.id === 'about'"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <svg
                      v-else-if="item.id === 'crimson-family'"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <svg
                      v-else-if="item.id === 'kingdom'"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <svg
                      v-else-if="item.id === 'join-us'"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <line x1="20" y1="8" x2="20" y2="14" />
                      <line x1="23" y1="11" x2="17" y2="11" />
                    </svg>
                    <svg
                      v-else-if="item.id === 'faq'"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </span>
                  <span>{{ item.label }}</span>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useI18n } from 'vue-i18n';

  // Reactive state
  const isMobileMenuOpen = ref(false)
  const isScrolled = ref(false)
  let scrollTimeout: number | null = null

  // Navigation items
  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      href: '#home',
    },
    {
      id: 'crimson-family',
      label: 'Nocturnal Family',
      href: '#about',
    },
    // {
    //   id: 'kingdom',
    //   label: 'Kingdom',
    //   href: '#kingdom',
    // },
    {
      id: 'join-us',
      label: 'Join Us',
      href: '#join-family',
    },
    {
      id: 'faq',
      label: 'FAQ',
      href: '#faq',
    },
  ]

  const { locale } = useI18n();
  const languages = [
    { label: 'EN', value: 'en', flag: 'gb' },
    { label: 'FR', value: 'fr', flag: 'fr' },
  ];
  const showLangDropdown = ref(false);
  function selectLanguage(val: string) {
    locale.value = val;
    showLangDropdown.value = false;
  }
  function toggleLangDropdown() {
    showLangDropdown.value = !showLangDropdown.value;
  }
  function closeLangDropdown() {
    showLangDropdown.value = false;
  }

  // Methods
  const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement
    const fallbackContent = target.parentElement?.querySelector(
      '.fallback-content'
    ) as HTMLElement
    if (fallbackContent) {
      fallbackContent.classList.remove('hidden')
      fallbackContent.classList.add('flex')
    }
  }

  const toggleMobileMenu = (): void => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href)
    const header = document.querySelector('header')
    if (element && header) {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        const headerHeight = header.offsetHeight
        const elementTop = (element as HTMLElement).offsetTop

        // Position section at the top of viewport, just below header
        const scrollPosition = elementTop - headerHeight - 20 // 20px breathing room

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        })
      })
    }
    closeMobileMenu()
  }

  const handleScroll = (): void => {
    isScrolled.value = window.scrollY > 50

    // Close mobile menu on scroll with debounce
    if (isMobileMenuOpen.value) {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      scrollTimeout = window.setTimeout(() => {
        closeMobileMenu()
      }, 150) // 150ms delay before closing
    }
  }

  const closeMobileMenu = (): void => {
    isMobileMenuOpen.value = false
  }

  const handleClickOutside = (event: Event): void => {
    const target = event.target as HTMLElement

    // Check if click is outside the mobile dropdown menu
    const mobileMenu = document.querySelector('#mobile-menu')
    const mobileMenuButton = document.querySelector(
      'button[aria-label="Toggle mobile menu"]'
    )

    // Close menu if click is outside both the dropdown and the toggle button
    if (
      isMobileMenuOpen.value &&
      mobileMenu &&
      !mobileMenu.contains(target) &&
      mobileMenuButton &&
      !mobileMenuButton.contains(target)
    ) {
      closeMobileMenu()
    }
  }

  // Lifecycle
  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleClickOutside)
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
  })
</script>

<style scoped>
  /* Gaming-style hover effects for navigation items */
  nav a {
    background: transparent !important;
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
  }

  nav a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(220, 38, 38, 0.2),
      rgba(251, 191, 36, 0.2)
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: -1;
    border-radius: 8px;
  }

  nav a:hover {
    color: var(--accent-gold) !important;
    text-shadow: 0 0 12px rgba(251, 191, 36, 0.5);
    border-radius: 8px;
    border-color: var(--accent-gold);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
  }

  nav a:hover::before {
    opacity: 1;
  }

  /* Active/pressed state for navigation items */
  nav a:active::before {
    background: linear-gradient(
      135deg,
      rgba(220, 38, 38, 0.3),
      rgba(251, 191, 36, 0.3)
    );
    opacity: 1;
  }

  /* Gaming-style hover effects for mobile menu items */
  nav a:hover {
    border-left-color: var(--accent-gold) !important;
    color: var(--accent-gold) !important;
    background: linear-gradient(
      90deg,
      rgba(220, 38, 38, 0.15),
      rgba(251, 191, 36, 0.1)
    ) !important;
  }

  /* Icon hover effects */
  a:hover svg {
    filter: drop-shadow(0 0 6px var(--accent-gold));
    color: var(--accent-gold);
  }

  /* Hamburger button states */
  button[aria-label='Toggle mobile menu'] {
    transition:
      transform 0.2s ease-in-out,
      opacity 0.2s ease-in-out;
  }

  button[aria-label='Toggle mobile menu']:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  button[aria-label='Toggle mobile menu']:active {
    transform: scale(0.95);
    opacity: 0.9;
  }

  /* Mobile menu dropdown animation */
  .dropdown-fade-scale-enter-active,
  .dropdown-fade-scale-leave-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .dropdown-fade-scale-enter-from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  .dropdown-fade-scale-enter-to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  .dropdown-fade-scale-leave-from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  .dropdown-fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }

  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: opacity 0.2s, transform 0.2s;
    transform-origin: top right;
  }
  .fade-slide-enter-from, .fade-slide-leave-to {
    opacity: 0;
    transform: scaleY(0.8) translateY(-8px);
  }
  .fade-slide-enter-to, .fade-slide-leave-from {
    opacity: 1;
    transform: scaleY(1) translateY(0);
  }

  .lang-switcher-btn {
    border: none;
    background: transparent;
    color: #fff;
    transition: color 0.2s;
    min-width: 56px;
    min-height: 36px;
    font-weight: 400;
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    transform: none;
    box-shadow: none;
  }
  .lang-switcher-btn:hover, .lang-switcher-btn:focus {
    background: transparent;
    color: #fbbf24;
    border: none;
    font-weight: 400;
    transform: none;
    box-shadow: none;
  }
  .flag-img {
    vertical-align: middle;
    transform: none;
  }
  .lang-dropdown-item {
    border: none;
    background: transparent;
    color: #fff;
    font-weight: 400;
    padding: 0.25rem 0.5rem;
    min-width: 100%;
    min-height: 36px;
    box-sizing: border-box;
    transition: color 0.2s;
    transform: none;
    text-align: left;
    box-shadow: none;
    outline: none;
  }
  .lang-dropdown-item:hover, .lang-dropdown-item:focus {
    background: transparent;
    color: #fbbf24;
    font-weight: 400;
    border: none;
    transform: none;
    box-shadow: none;
    outline: none;
  }
</style>
