import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Global shared state
const globalLoadingState = ref(false)

// Set up route listeners immediately
let isInitialized = false

export function useRouteLoading() {
  const router = useRouter()

  // Initialize route listeners only once
  if (!isInitialized) {
    router.beforeEach((to, from, next) => {
      if (to.path !== from.path) {
        globalLoadingState.value = true
      }
      next()
    })
    
    router.afterEach(() => {
      setTimeout(() => {
        globalLoadingState.value = false
      }, 300)
    })
    
    isInitialized = true
  }

  // Show loading when navigation starts
  const showLoading = () => {
    globalLoadingState.value = true
  }

  // Hide loading when navigation completes
  const hideLoading = () => {
    globalLoadingState.value = false
  }

  // Navigate with loading state
  const navigateWithLoading = async (to: string | { path: string; hash?: string }) => {
    showLoading()
    try {
      await router.push(to)
    } finally {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        hideLoading()
      }, 300)
    }
  }

  return {
    isLoading: globalLoadingState,
    showLoading,
    hideLoading,
    navigateWithLoading
  }
} 