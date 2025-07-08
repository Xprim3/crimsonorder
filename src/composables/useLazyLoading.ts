import { ref, onMounted, onUnmounted } from 'vue'

export interface LazyImageOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export function useLazyLoading(options: LazyImageOptions = {}) {
  const imageRef = ref<HTMLImageElement | null>(null)
  const isLoaded = ref(false)
  const isInView = ref(false)
  const hasError = ref(false)

  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  }

  let observer: IntersectionObserver | null = null

  const loadImage = (img: HTMLImageElement) => {
    const src = img.dataset.src
    if (!src) return

    const image = new Image()
    image.onload = () => {
      img.src = src
      img.classList.remove('lazy')
      img.classList.add('loaded')
      isLoaded.value = true
    }
    image.onerror = () => {
      hasError.value = true
      img.classList.add('error')
    }
    image.src = src
  }

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && imageRef.value) {
        isInView.value = true
        loadImage(imageRef.value)
        if (observer) {
          observer.unobserve(entry.target)
        }
      }
    })
  }

  onMounted(() => {
    if (!imageRef.value) return

    observer = new IntersectionObserver(handleIntersection, defaultOptions)
    observer.observe(imageRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    imageRef,
    isLoaded,
    isInView,
    hasError,
  }
}

// Utility function for multiple images
export function useLazyLoadingMultiple() {
  const imageRefs = ref<HTMLImageElement[]>([])
  const loadedImages = ref<Set<number>>(new Set())
  const errorImages = ref<Set<number>>(new Set())

  const addImageRef = (img: HTMLImageElement, index: number) => {
    imageRefs.value[index] = img
  }

  const loadImage = (img: HTMLImageElement, index: number) => {
    const src = img.dataset.src
    if (!src) return

    const image = new Image()
    image.onload = () => {
      img.src = src
      img.classList.remove('lazy')
      img.classList.add('loaded')
      loadedImages.value.add(index)
    }
    image.onerror = () => {
      errorImages.value.add(index)
      img.classList.add('error')
    }
    image.src = src
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const img = entry.target as HTMLImageElement
        const index = imageRefs.value.indexOf(img)

        if (entry.isIntersecting && index !== -1) {
          loadImage(img, index)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: '50px',
      threshold: 0.1,
    }
  )

  const observeImage = (img: HTMLImageElement) => {
    observer.observe(img)
  }

  const unobserveImage = (img: HTMLImageElement) => {
    observer.unobserve(img)
  }

  return {
    addImageRef,
    loadedImages,
    errorImages,
    observeImage,
    unobserveImage,
  }
}
