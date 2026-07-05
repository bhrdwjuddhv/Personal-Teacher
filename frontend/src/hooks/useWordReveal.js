import { useCallback, useEffect, useRef, useState } from 'react'

const WORD_DELAY_MS = 110

// Reveals a block of text one word at a time, simulating a stream.
// The real backend currently returns the full answer in one shot (see
// connect_to_backend.md) — this hook is what turns that into the
// word-by-word chalk animation on the blackboard.
export function useWordReveal() {
  const [revealedText, setRevealedText] = useState('')
  const [isRevealing, setIsRevealing] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearInterval(timerRef.current), [])

  const start = useCallback((fullText, onComplete) => {
    clearInterval(timerRef.current)
    const words = fullText.split(' ')
    let index = 0
    setRevealedText('')
    setIsRevealing(true)

    timerRef.current = setInterval(() => {
      index += 1
      setRevealedText(words.slice(0, index).join(' '))
      if (index >= words.length) {
        clearInterval(timerRef.current)
        setIsRevealing(false)
        onComplete?.(fullText)
      }
    }, WORD_DELAY_MS)
  }, [])

  return { revealedText, isRevealing, start }
}
