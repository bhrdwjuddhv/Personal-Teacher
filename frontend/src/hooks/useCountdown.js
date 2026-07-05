import { useEffect, useState } from 'react'

// Ticks down the whole seconds remaining until targetTimestamp (epoch ms), or 0 if null/passed.
export function useCountdown(targetTimestamp) {
  const [remaining, setRemaining] = useState(() =>
    targetTimestamp ? Math.max(0, Math.ceil((targetTimestamp - Date.now()) / 1000)) : 0,
  )

  useEffect(() => {
    if (!targetTimestamp) {
      setRemaining(0)
      return undefined
    }

    const tick = () => setRemaining(Math.max(0, Math.ceil((targetTimestamp - Date.now()) / 1000)))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetTimestamp])

  return remaining
}
