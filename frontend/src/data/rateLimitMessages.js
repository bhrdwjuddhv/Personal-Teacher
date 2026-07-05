// In-character lines shown on the blackboard when a visitor hits the backend's rate limit.
export function getRateLimitMessage(teacherId, seconds) {
  if (teacherId === 'piyush') {
    return `Bhai itna spam mat karo 😂 rate limit lag gaya — ${seconds}s baad phir se ship karna ye request 🚀`
  }
  return `Haanji, thoda ruk jao ji 😌 itni jaldi jaldi mat pucho — ${seconds}s baad wapas try karna.`
}
