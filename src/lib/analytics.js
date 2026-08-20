// Ad-traffic analytics: GA4 + Meta Pixel, both gated behind env vars so this
// is a no-op (zero network requests) until real IDs are configured — see
// .env.example. Scripts load after the page is idle/interactive rather than
// in <head>, so third-party tags don't compete with LCP/TBT on first paint.

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID

function loadScript(src, onload) {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  if (onload) script.onload = onload
  document.head.appendChild(script)
}

function initGA4() {
  if (!GA_ID) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
}

function initMetaPixel() {
  if (!META_PIXEL_ID) return
  const fbq = function fbq() {
    fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments)
  }
  window.fbq = window.fbq || fbq
  window.fbq.push = window.fbq
  window.fbq.loaded = true
  window.fbq.version = '2.0'
  window.fbq.queue = []
  window.fbq('init', META_PIXEL_ID)
  window.fbq('track', 'PageView')
  loadScript('https://connect.facebook.net/en_US/fbevents.js')
}

let initialized = false

// Call once on app mount. Defers third-party script injection until the
// browser is idle (or immediately if idle callbacks aren't supported) so it
// never blocks the initial render for ad-landing traffic.
export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  const run = () => {
    initGA4()
    initMetaPixel()
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 4000 })
  } else {
    window.setTimeout(run, 1500)
  }
}

// Fires a conversion event for a given outbound channel (e.g. "email",
// "linkedin", "github"). No-ops silently if analytics isn't configured.
export function trackConversion(channel) {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      event_category: 'engagement',
      event_label: channel,
    })
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'Conversion', { channel })
  }
}
