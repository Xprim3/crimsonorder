import { ref, onMounted } from 'vue'

export function usePerformance() {
  const pageLoadTime = ref(0)
  const isLoaded = ref(false)

  const trackPageLoad = () => {
    const startTime = performance.now()

    window.addEventListener('load', () => {
      const loadTime = performance.now() - startTime
      pageLoadTime.value = loadTime
      isLoaded.value = true

      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'page_load_time', {
          value: Math.round(loadTime),
          custom_parameter: 'load_time_ms',
        })
      }

      console.log(`Page loaded in ${Math.round(loadTime)}ms`)
    })
  }

  const trackUserInteraction = (action: string, label?: string) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: 'user_interaction',
        event_label: label,
      })
    }
  }

  const trackScrollDepth = () => {
    let maxScroll = 0

    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      )

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent

        // Track at 25%, 50%, 75%, 100%
        if ([25, 50, 75, 100].includes(maxScroll)) {
          trackUserInteraction('scroll_depth', `${maxScroll}%`)
        }
      }
    })
  }

  const trackTimeOnPage = () => {
    const startTime = Date.now()

    setInterval(() => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)

      // Track every 30 seconds
      if (timeOnPage % 30 === 0) {
        trackUserInteraction('time_on_page', `${timeOnPage}s`)
      }
    }, 1000)
  }

  onMounted(() => {
    trackPageLoad()
    trackScrollDepth()
    trackTimeOnPage()
  })

  return {
    pageLoadTime,
    isLoaded,
    trackUserInteraction,
  }
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
