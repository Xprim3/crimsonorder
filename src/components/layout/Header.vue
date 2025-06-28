<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50"
    :class="[
      isScrolled 
        ? 'bg-opacity-95 backdrop-blur-md shadow-lg' 
        : 'bg-opacity-90 backdrop-blur-sm'
    ]"
    style="background: var(--header-bg);"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        
        <!-- Logo/Brand -->
        <div class="flex items-center space-x-2 sm:space-x-3">
          <!-- Dragon Shield Logo with CO -->
          <div class="relative w-8 h-10 sm:w-10 sm:h-12 lg:w-12 lg:h-14">
            <svg viewBox="0 0 32 36" fill="none" class="w-full h-full">
              <!-- Shield background with dragon silhouette -->
              <defs>
                <linearGradient id="dragonShieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:var(--accent-primary);stop-opacity:1" />
                  <stop offset="50%" style="stop-color:#b91c1c;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#7f1d1d;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="dragonWingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:var(--accent-gold);stop-opacity:0.8" />
                  <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0.6" />
                </linearGradient>
              </defs>
              
              <!-- Main shield -->
              <path d="M16 2L28 8V18C28 26 22 30 16 32C10 30 4 26 4 18V8L16 2Z" 
                    fill="url(#dragonShieldGradient)" 
                    stroke="var(--accent-gold)" 
                    stroke-width="2"/>
              
              <!-- Dragon wings (left) -->
              <path d="M4 12C2 10 1 8 2 6C3 4 5 5 6 7C7 9 6 11 4 12Z" 
                    fill="url(#dragonWingGradient)"/>
              <path d="M4 16C2 14 1 12 2 10C3 8 5 9 6 11C7 13 6 15 4 16Z" 
                    fill="url(#dragonWingGradient)"/>
              
              <!-- Dragon wings (right) -->
              <path d="M28 12C30 10 31 8 30 6C29 4 27 5 26 7C25 9 26 11 28 12Z" 
                    fill="url(#dragonWingGradient)"/>
              <path d="M28 16C30 14 31 12 30 10C29 8 27 9 26 11C25 13 26 15 28 16Z" 
                    fill="url(#dragonWingGradient)"/>
              
              <!-- Dragon head silhouette -->
              <path d="M16 8C18 6 20 7 21 9C22 11 21 13 19 14C17 15 15 14 14 12C13 10 14 8 16 8Z" 
                    fill="rgba(0,0,0,0.3)"/>
              
              <!-- CO text in center -->
              <text x="16" y="22" 
                    text-anchor="middle" 
                    class="text-xs sm:text-sm lg:text-base font-black fill-white"
                    style="font-family: 'Arial Black', sans-serif; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">
                CO
              </text>
              
              <!-- Glow effect -->
              <circle cx="16" cy="16" r="14" 
                      fill="none" 
                      stroke="var(--accent-gold)" 
                      stroke-width="1" 
                      opacity="0.3"/>
            </svg>
          </div>
          
          <!-- Text Brand -->
          <div class="hidden sm:block">
            <h1 class="font-black text-lg sm:text-xl lg:text-2xl tracking-widest uppercase text-left" 
                style="color: var(--text-primary); text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              Crimson Order
            </h1>
            <p class="text-xs sm:text-sm lg:text-sm font-medium tracking-wide text-left" 
               style="color: var(--accent-primary); text-shadow: 0 1px 2px rgba(0,0,0,0.2);">
              Rise of Kingdoms Elite
            </p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-4">
          <div 
            v-for="item in navigationItems" 
            :key="item.id"
            class="relative group"
            @mouseenter="item.hasDropdown ? openDropdownWithDelay(item.id) : null"
            @mouseleave="item.hasDropdown ? closeDropdownWithDelay() : null"
          >
            <!-- Main Navigation Item -->
            <a 
              :href="item.href"
              @click="scrollToSection(item.href)"
              class="font-medium relative px-3 py-2 rounded-lg flex items-center space-x-1 transition-all duration-200"
              :class="item.hasDropdown ? 'cursor-pointer' : ''"
              style="color: var(--text-secondary);"
              :style="{ '--hover-color': 'var(--text-primary)' }"
            >
              <!-- Gaming Icons -->
              <span class="text-lg transition-all duration-300">
                <svg v-if="item.id === 'home'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
                <svg v-else-if="item.id === 'about'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <svg v-else-if="item.id === 'alliances'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <svg v-else-if="item.id === 'kingdom'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <svg v-else-if="item.id === 'join'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
                <svg v-else-if="item.id === 'members'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <svg v-else-if="item.id === 'faq'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </span>
              <span class="text-sm">{{ item.label }}</span>
              <!-- Dropdown Arrow -->
              <svg v-if="item.hasDropdown" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200" :class="openDropdown === item.id ? 'rotate-180' : ''">
                <polyline points="6,9 12,15 18,9"/>
              </svg>
            </a>
            
            <!-- Dropdown Menu -->
            <transition name="dropdown-fade">
              <div 
                v-if="item.hasDropdown && openDropdown === item.id"
                class="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-xl py-2 z-50"
                style="background: var(--dropdown-bg); border: 1px solid var(--border-color);"
                @mouseenter="cancelCloseDropdown()"
                @mouseleave="closeDropdownWithDelay()"
              >
                <a 
                  v-for="dropdownItem in item.dropdownItems" 
                  :key="dropdownItem.id"
                  :href="dropdownItem.href"
                  @click="scrollToSection(dropdownItem.href)"
                  class="block px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center space-x-2"
                  style="color: var(--text-secondary);"
                  :style="{ '--hover-color': 'var(--text-primary)' }"
                >
                  <span class="w-1 h-1 rounded-full" style="background: var(--accent-primary);"></span>
                  <span>{{ dropdownItem.label }}</span>
                </a>
              </div>
            </transition>
          </div>
          
          <!-- Theme Toggle Button -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg flex items-center justify-center focus:outline-none transition-all duration-300 ease-in-out hover:opacity-80"
            style="color: var(--text-secondary); background-color: var(--bg-tertiary);"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <span v-if="isDark">
              <!-- Sun Icon (Gold) -->
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5" fill="var(--accent-gold)"/>
                <g stroke="var(--accent-gold)">
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
              </svg>
            </span>
            <span v-else>
              <!-- Moon Icon (Blue) -->
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" fill="var(--accent-blue)"/>
              </svg>
            </span>
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden flex items-center space-x-2">
          <!-- Theme Toggle Button (Mobile) -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg flex items-center justify-center focus:outline-none"
            style="color: var(--text-secondary); background-color: var(--bg-tertiary);"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <span v-if="isDark">
              <!-- Sun Icon (Gold) -->
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5" fill="var(--accent-gold)"/>
                <g stroke="var(--accent-gold)">
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
              </svg>
            </span>
            <span v-else>
              <!-- Moon Icon (Blue) -->
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" fill="var(--accent-blue)"/>
              </svg>
            </span>
          </button>
          
          <button
            @click="toggleMobileMenu"
            class="p-1 rounded-md focus:outline-none"
            style="color: var(--text-secondary);"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle mobile menu"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                class="block w-4 h-0.5 rounded"
                :class="isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1.5'"
                style="background: currentColor;"
              ></span>
              <span 
                class="block w-4 h-0.5 rounded"
                :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
                style="background: currentColor;"
              ></span>
              <span 
                class="block w-4 h-0.5 rounded"
                :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'"
                style="background: currentColor;"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition name="dropdown-fade-scale">
        <div 
          v-show="isMobileMenuOpen"
          class="lg:hidden absolute right-4 top-16 w-64 rounded-xl shadow-2xl py-2 z-50 max-h-96 overflow-y-auto"
          style="background: var(--dropdown-bg); border: 1px solid var(--border-color);"
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
                @click="item.hasDropdown ? toggleDropdown(item.id) : scrollToSection(item.href)"
                class="block font-medium px-4 py-3 rounded-lg border-l-2 border-transparent transition-all duration-300 ease-in-out flex items-center justify-between"
                style="color: var(--text-secondary);"
                :style="{ '--hover-border': 'var(--accent-primary)' }"
              >
                <div class="flex items-center space-x-3">
                  <!-- Gaming Icons for Mobile -->
                  <span class="text-lg transition-all duration-300">
                    <svg v-if="item.id === 'home'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9,22 9,12 15,12 15,22"/>
                    </svg>
                    <svg v-else-if="item.id === 'about'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <svg v-else-if="item.id === 'alliances'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                    <svg v-else-if="item.id === 'kingdom'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <svg v-else-if="item.id === 'join'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="8.5" cy="7" r="4"/>
                      <line x1="20" y1="8" x2="20" y2="14"/>
                      <line x1="23" y1="11" x2="17" y2="11"/>
                    </svg>
                    <svg v-else-if="item.id === 'members'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <svg v-else-if="item.id === 'faq'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </span>
                  <span>{{ item.label }}</span>
                </div>
                <!-- Dropdown Arrow for Mobile -->
                <svg v-if="item.hasDropdown" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200" :class="openDropdown === item.id ? 'rotate-180' : ''">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </a>
              
              <!-- Mobile Dropdown Items -->
              <transition name="mobile-dropdown">
                <div 
                  v-if="item.hasDropdown && openDropdown === item.id"
                  class="ml-4 space-y-1 border-l-2 border-gray-300 dark:border-gray-600"
                >
                  <a 
                    v-for="dropdownItem in item.dropdownItems" 
                    :key="dropdownItem.id"
                    :href="dropdownItem.href"
                    @click="scrollToSection(dropdownItem.href)"
                    class="block px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center space-x-2"
                    style="color: var(--text-secondary);"
                    :style="{ '--hover-color': 'var(--text-primary)' }"
                  >
                    <span class="w-1 h-1 rounded-full" style="background: var(--accent-primary);"></span>
                    <span>{{ dropdownItem.label }}</span>
                  </a>
                </div>
              </transition>
            </div>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../../composables/useTheme'

// Theme composable
const { isDark, toggleTheme } = useTheme()

// Reactive state
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Navigation items with dropdowns
const navigationItems = [
  { 
    id: 'home', 
    label: 'Home', 
    href: '#home',
    hasDropdown: false
  },
  { 
    id: 'about', 
    label: 'About', 
    href: '#about',
    hasDropdown: false
  },
  { 
    id: 'alliances', 
    label: 'Alliances', 
    href: '#alliances',
    hasDropdown: false
  },
  { 
    id: 'kingdom', 
    label: 'Kingdom', 
    href: '#kingdom',
    hasDropdown: false
  },
  { 
    id: 'join', 
    label: 'Join', 
    href: '#join',
    hasDropdown: true,
    dropdownItems: [
      { id: 'what-we-offer', label: 'What We Offer', href: '#what-we-offer' },
      { id: 'application', label: 'Application', href: '#application' }
    ]
  },
  { 
    id: 'members', 
    label: 'Members', 
    href: '#members',
    hasDropdown: true,
    dropdownItems: [
      { id: 'top-members', label: 'Top Members', href: '#top-members' },
      { id: 'testimonials', label: 'Testimonials', href: '#testimonials' }
    ]
  },
  { 
    id: 'faq', 
    label: 'FAQ', 
    href: '#faq',
    hasDropdown: false
  }
]

// Reactive state for dropdowns
const openDropdown = ref<string | null>(null)
const dropdownTimeout = ref<number | null>(null)

// Methods
const openDropdownWithDelay = (itemId: string): void => {
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value)
  }
  openDropdown.value = itemId
}

const closeDropdownWithDelay = (): void => {
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value)
  }
  dropdownTimeout.value = window.setTimeout(() => {
    openDropdown.value = null
  }, 150) // 150ms delay
}

const cancelCloseDropdown = (): void => {
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value)
    dropdownTimeout.value = null
  }
}

const toggleDropdown = (itemId: string): void => {
  if (openDropdown.value === itemId) {
    openDropdown.value = null
  } else {
    openDropdown.value = itemId
  }
}

const closeAllDropdowns = (): void => {
  openDropdown.value = null
}

const toggleMobileMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false
}

const scrollToSection = (href: string): void => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
  closeAllDropdowns()
  closeMobileMenu()
}

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 50
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Dropdown animation */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-fade-enter-from {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}
.dropdown-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.dropdown-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

/* Mobile dropdown animation */
.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-dropdown-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}
.mobile-dropdown-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.mobile-dropdown-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.mobile-dropdown-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* Gaming-style hover effects for navigation items */
nav a {
  background: transparent !important;
  position: relative;
  overflow: hidden;
}

nav a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(251, 191, 36, 0.15));
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: -1;
}

nav a:hover {
  color: var(--hover-color, var(--text-primary)) !important;
  text-shadow: 0 0 8px rgba(220, 38, 38, 0.3);
  border-radius: 8px;
}

nav a:hover::before {
  opacity: 1;
}

/* Active/pressed state for navigation items */
nav a:active::before {
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.25), rgba(251, 191, 36, 0.25));
  opacity: 1;
}

nav a:active {
  transform: scale(0.98);
}

/* Gaming-style hover effects for mobile menu items */
nav a:hover {
  border-left-color: var(--hover-border, var(--accent-primary)) !important;
  color: var(--text-primary) !important;
  background: linear-gradient(90deg, rgba(220, 38, 38, 0.1), transparent) !important;
}

/* Icon hover effects */
a:hover svg {
  filter: drop-shadow(0 0 4px var(--accent-primary));
}

/* Dropdown animation */
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
</style> 