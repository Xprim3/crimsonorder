<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'

  // Define proper types for performance entries
  interface PerformanceEventTiming extends PerformanceEntry {
    processingStart: number
  }

  interface LayoutShiftEntry extends PerformanceEntry {
    hadRecentInput: boolean
    value: number
  }

  const performanceMetrics = ref({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
  })

  const isVisible = ref(false)

  onMounted(() => {
    // Only show in development
    if (import.meta.env.DEV) {
      isVisible.value = true
      measurePerformance()
    }
  })

  onUnmounted(() => {
    // Clean up observers
  })

  const measurePerformance = () => {
    // First Contentful Paint
    new PerformanceObserver(entryList => {
      const entries = entryList.getEntries()
      entries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          performanceMetrics.value.fcp = Math.round(entry.startTime)
        }
      })
    }).observe({ entryTypes: ['paint'] })

    // Largest Contentful Paint
    new PerformanceObserver(entryList => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      if (lastEntry) {
        performanceMetrics.value.lcp = Math.round(lastEntry.startTime)
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay
    new PerformanceObserver(entryList => {
      const entries = entryList.getEntries()
      entries.forEach(entry => {
        const firstInputEntry = entry as PerformanceEventTiming
        performanceMetrics.value.fid = Math.round(
          firstInputEntry.processingStart - firstInputEntry.startTime
        )
      })
    }).observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift
    new PerformanceObserver(entryList => {
      let clsValue = 0
      for (const entry of entryList.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value
        }
      }
      performanceMetrics.value.cls = Math.round(clsValue * 1000) / 1000
    }).observe({ entryTypes: ['layout-shift'] })

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      performanceMetrics.value.ttfb = Math.round(
        navigationEntry.responseStart - navigationEntry.requestStart
      )
    }
  }

  const getScore = (
    metric: number,
    thresholds: { good: number; needsImprovement: number }
  ) => {
    if (metric <= thresholds.good) return '🟢 Good'
    if (metric <= thresholds.needsImprovement) return '🟡 Needs Improvement'
    return '🔴 Poor'
  }
</script>

<template>
  <div
    v-if="isVisible"
    class="performance-monitor"
    role="status"
    aria-live="polite"
  >
    <div class="monitor-header">
      <h4>Performance Metrics</h4>
      <button
        @click="isVisible = false"
        class="close-btn"
        aria-label="Close performance monitor"
      >
        ×
      </button>
    </div>
    <div class="metrics-grid">
      <div class="metric">
        <span class="metric-label">FCP</span>
        <span class="metric-value">{{ performanceMetrics.fcp }}ms</span>
        <span class="metric-score">{{
          getScore(performanceMetrics.fcp, {
            good: 1800,
            needsImprovement: 3000,
          })
        }}</span>
      </div>
      <div class="metric">
        <span class="metric-label">LCP</span>
        <span class="metric-value">{{ performanceMetrics.lcp }}ms</span>
        <span class="metric-score">{{
          getScore(performanceMetrics.lcp, {
            good: 2500,
            needsImprovement: 4000,
          })
        }}</span>
      </div>
      <div class="metric">
        <span class="metric-label">FID</span>
        <span class="metric-value">{{ performanceMetrics.fid }}ms</span>
        <span class="metric-score">{{
          getScore(performanceMetrics.fid, { good: 100, needsImprovement: 300 })
        }}</span>
      </div>
      <div class="metric">
        <span class="metric-label">CLS</span>
        <span class="metric-value">{{ performanceMetrics.cls }}</span>
        <span class="metric-score">{{
          getScore(performanceMetrics.cls, {
            good: 0.1,
            needsImprovement: 0.25,
          })
        }}</span>
      </div>
      <div class="metric">
        <span class="metric-label">TTFB</span>
        <span class="metric-value">{{ performanceMetrics.ttfb }}ms</span>
        <span class="metric-score">{{
          getScore(performanceMetrics.ttfb, {
            good: 800,
            needsImprovement: 1800,
          })
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .performance-monitor {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid #dc2626;
    border-radius: 8px;
    padding: 16px;
    font-family: 'Inter', monospace;
    font-size: 12px;
    color: white;
    z-index: 9999;
    min-width: 280px;
    backdrop-filter: blur(10px);
  }

  .monitor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    border-bottom: 1px solid #404040;
    padding-bottom: 8px;
  }

  .monitor-header h4 {
    margin: 0;
    font-size: 14px;
    color: #fbbf24;
  }

  .close-btn {
    background: none;
    border: none;
    color: #a3a3a3;
    font-size: 18px;
    cursor: pointer;
    padding: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-btn:hover {
    color: #dc2626;
  }

  .metrics-grid {
    display: grid;
    gap: 8px;
  }

  .metric {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    align-items: center;
    padding: 4px 0;
  }

  .metric-label {
    font-weight: 600;
    color: #e5e5e5;
  }

  .metric-value {
    font-family: monospace;
    color: #fbbf24;
  }

  .metric-score {
    text-align: right;
    font-size: 11px;
  }
</style>
