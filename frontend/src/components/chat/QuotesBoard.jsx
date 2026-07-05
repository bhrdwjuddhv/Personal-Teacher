import { useEffect, useState } from 'react'
import { hiteshQuotes, piyushQuotes } from '../../data/quotes.js'

const QUOTES_BY_TEACHER = { hitesh: hiteshQuotes, piyush: piyushQuotes }
const ROTATE_MS = 4000

export default function QuotesBoard({ teacherId }) {
  const quotes = QUOTES_BY_TEACHER[teacherId] ?? []
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [teacherId])

  useEffect(() => {
    if (quotes.length < 2) return undefined
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length)
    }, ROTATE_MS)
    return () => clearInterval(timer)
  }, [quotes.length])

  return (
    <div className="mx-auto w-full max-w-sm rounded-md border-4 border-[#8a5a35] bg-[#fdf8ec] px-4 py-2 shadow-md sm:max-w-md">
      <p className="karla-text text-center text-[10px] uppercase tracking-widest text-stone-500">
        famous last words
      </p>
      <p key={index} className="cookie-regular rise-in min-h-8 text-center text-lg text-stone-800 sm:text-xl">
        &quot;{quotes[index]}&quot;
      </p>
    </div>
  )
}
