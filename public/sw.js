const CACHE_NAME = 'nocturnal-legacy-v1.2'
const API_CACHE_NAME = 'nocturnal-legacy-api-v1.0'
const STATIC_CACHE_NAME = 'nocturnal-legacy-static-v1.0'

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/logo/logo.png',
  '/logo/logo2.png',
  '/logo/favicon.jpg',
  '/logo/knights.png',
  '/logo/blades.png'
]

// API endpoints to cache (if any)
const API_ENDPOINTS = [
  // Add your API endpoints here when you have them
  // '/api/members',
  // '/api/events',
  // '/api/announcements'
]

// Cache strategies
const CACHE_STRATEGIES = {
  STATIC: 'cache-first',
  API: 'network-first',
  IMAGES: 'cache-first',
  FONTS: 'cache-first'
}

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...')
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      }),
      caches.open(API_CACHE_NAME).then((cache) => {
        console.log('API cache ready')
        return cache
      })
    ])
  )
  self.skipWaiting() // Activate new SW immediately
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== API_CACHE_NAME && 
              cacheName !== STATIC_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim() // Take control of all clients immediately
})

// Fetch event - handle different types of requests
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Handle API requests
  if (isApiRequest(url)) {
    event.respondWith(handleApiRequest(request))
    return
  }

  // Handle static assets
  if (isStaticAsset(url)) {
    event.respondWith(handleStaticAsset(request))
    return
  }

  // Handle images
  if (isImageRequest(url)) {
    event.respondWith(handleImageRequest(request))
    return
  }

  // Handle fonts
  if (isFontRequest(url)) {
    event.respondWith(handleFontRequest(request))
    return
  }

  // Default: network-first for HTML pages
  event.respondWith(handlePageRequest(request))
})

// Helper functions
function isApiRequest(url) {
  return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint)) ||
         url.pathname.startsWith('/api/')
}

function isStaticAsset(url) {
  return STATIC_ASSETS.includes(url.pathname) ||
         url.pathname.startsWith('/assets/') ||
         url.pathname.includes('.css') ||
         url.pathname.includes('.js')
}

function isImageRequest(url) {
  return url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)
}

function isFontRequest(url) {
  return url.pathname.match(/\.(woff|woff2|ttf|eot)$/i)
}

// Cache strategies
async function handleApiRequest(request) {
  const cache = await caches.open(API_CACHE_NAME)
  
  try {
    // Try network first
    const networkResponse = await fetch(request)
    
    // Cache successful responses
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone()
      cache.put(request, responseClone)
    }
    
    return networkResponse
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline response
    return new Response(
      JSON.stringify({ error: 'No internet connection', offline: true }),
      { 
        status: 503, 
        headers: { 'Content-Type': 'application/json' } 
      }
    )
  }
}

async function handleStaticAsset(request) {
  const cache = await caches.open(STATIC_CACHE_NAME)
  const cachedResponse = await cache.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    return new Response('Offline', { status: 503 })
  }
}

async function handleImageRequest(request) {
  const cache = await caches.open(STATIC_CACHE_NAME)
  const cachedResponse = await cache.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    // Return a placeholder image or fallback
    return new Response('', { status: 404 })
  }
}

async function handleFontRequest(request) {
  const cache = await caches.open(STATIC_CACHE_NAME)
  const cachedResponse = await cache.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    return new Response('', { status: 404 })
  }
}

async function handlePageRequest(request) {
  const cache = await caches.open(STATIC_CACHE_NAME)
  
  try {
    // Try network first for pages
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      // Cache successful page responses
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page
    return cache.match('/offline.html')
  }
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  // Handle background sync for forms, API calls, etc.
  console.log('Background sync triggered')
  
  // You can implement background sync logic here
  // For example, retry failed API calls, sync form data, etc.
}

// Push notifications (if you want to add them later)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: '/logo/logo.png',
      badge: '/logo/logo.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View',
          icon: '/logo/logo.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/logo/logo.png'
        }
      ]
    }
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
  }
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
}) 