import { ref, watch, onMounted } from 'vue'

export function useTheme() {
  const isDark = ref(true) // Default to dark theme

  // Load theme from localStorage on mount
  onMounted(() => {
    const savedTheme = localStorage.getItem('crimson-order-theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }
    applyTheme()
  })

  // Watch for theme changes and apply them
  watch(isDark, (newValue) => {
    localStorage.setItem('crimson-order-theme', newValue ? 'dark' : 'light')
    applyTheme()
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const applyTheme = () => {
    const root = document.documentElement
    if (isDark.value) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }

  return {
    isDark,
    toggleTheme
  }
} 