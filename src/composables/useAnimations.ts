import { ref, onMounted, onUnmounted } from 'vue'

export interface AnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  duration?: number
  delay?: number
  easing?: string
}

export function useScrollAnimations(options: AnimationOptions = {}) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    once: true,
    duration: 600,
    delay: 0,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    ...options,
  }

  const animatedElements = ref<Set<HTMLElement>>(new Set())
  let observer: IntersectionObserver | null = null

  const animateElement = (element: HTMLElement) => {
    if (animatedElements.value.has(element)) return

    element.style.opacity = '0'
    element.style.transform = 'translateY(30px)'
    element.style.transition = `all ${defaultOptions.duration}ms ${defaultOptions.easing} ${defaultOptions.delay}ms`

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
          animatedElements.value.add(element)

          if (defaultOptions.once && observer) {
            observer.unobserve(element)
          }
        }
      })
    }

    observer = new IntersectionObserver(handleIntersection, {
      threshold: defaultOptions.threshold,
      rootMargin: defaultOptions.rootMargin,
    })

    observer.observe(element)
  }

  const fadeInUp = (element: HTMLElement) => {
    animateElement(element)
  }

  const fadeInLeft = (element: HTMLElement) => {
    element.style.transform = 'translateX(-30px)'
    animateElement(element)
  }

  const fadeInRight = (element: HTMLElement) => {
    element.style.transform = 'translateX(30px)'
    animateElement(element)
  }

  const scaleIn = (element: HTMLElement) => {
    element.style.transform = 'scale(0.8)'
    animateElement(element)
  }

  const slideInFromBottom = (element: HTMLElement) => {
    element.style.transform = 'translateY(50px)'
    animateElement(element)
  }

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    slideInFromBottom,
    animatedElements,
  }
}

// Parallax effect composable
export function useParallax() {
  const parallaxElements = ref<HTMLElement[]>([])
  let ticking = false

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        parallaxElements.value.forEach(element => {
          const speed = parseFloat(element.dataset.speed || '0.5')
          const scrolled = window.pageYOffset
          const rate = scrolled * -speed

          element.style.transform = `translateY(${rate}px)`
        })
        ticking = false
      })
      ticking = true
    }
  }

  const addParallaxElement = (element: HTMLElement, speed = 0.5) => {
    element.dataset.speed = speed.toString()
    parallaxElements.value.push(element)
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    addParallaxElement,
    parallaxElements,
  }
}

// Micro-interactions composable
export function useMicroInteractions() {
  const addHoverEffect = (
    element: HTMLElement,
    options: {
      scale?: number
      rotate?: number
      duration?: number
    } = {}
  ) => {
    const { scale = 1.05, rotate = 0, duration = 200 } = options

    element.style.transition = `transform ${duration}ms ease`

    element.addEventListener('mouseenter', () => {
      element.style.transform = `scale(${scale}) rotate(${rotate}deg)`
    })

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1) rotate(0deg)'
    })
  }

  const addClickEffect = (
    element: HTMLElement,
    options: {
      scale?: number
    } = {}
  ) => {
    const { scale = 0.95 } = options

    element.addEventListener('mousedown', () => {
      element.style.transform = `scale(${scale})`
    })

    element.addEventListener('mouseup', () => {
      element.style.transform = 'scale(1)'
    })

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)'
    })
  }

  const addRippleEffect = (element: HTMLElement) => {
    element.style.position = 'relative'
    element.style.overflow = 'hidden'

    element.addEventListener('click', e => {
      const ripple = document.createElement('span')
      const rect = element.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.position = 'absolute'
      ripple.style.width = ripple.style.height = size + 'px'
      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      ripple.style.borderRadius = '50%'
      ripple.style.background = 'rgba(255, 255, 255, 0.3)'
      ripple.style.transform = 'scale(0)'
      ripple.style.animation = 'ripple 600ms linear'

      element.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  }

  return {
    addHoverEffect,
    addClickEffect,
    addRippleEffect,
  }
}

// CSS animations
export const animationStyles = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slide-up {
    animation: slideUp 0.6s ease-out;
  }

  .animate-scale-in {
    animation: scaleIn 0.6s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`
