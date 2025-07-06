export function useLazyLoading() {
  const isIntersectionObserverSupported = 'IntersectionObserver' in window

  const lazyLoadImage = (img: HTMLImageElement, src: string) => {
    if (!isIntersectionObserverSupported) {
      // Fallback for older browsers
      img.src = src
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement
          target.src = src
          target.classList.remove('lazy')
          observer.unobserve(target)
        }
      })
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    })

    observer.observe(img)
  }

  const lazyLoadComponent = (element: HTMLElement, callback: () => void) => {
    if (!isIntersectionObserverSupported) {
      callback()
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback()
          observer.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: '100px 0px',
      threshold: 0.1
    })

    observer.observe(element)
  }

  return {
    lazyLoadImage,
    lazyLoadComponent
  }
}

// Vue directive for lazy loading
export const lazyLoad = {
  mounted(el: HTMLElement, binding: any) {
    const { lazyLoadImage } = useLazyLoading()
    
    if (el.tagName === 'IMG') {
      const img = el as HTMLImageElement
      const src = binding.value
      
      if (src) {
        img.classList.add('lazy')
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' // Placeholder
        lazyLoadImage(img, src)
      }
    }
  }
} 