import { useEffect, useRef } from 'react'

function RevealingLine({ text }) {
  const words = text.split(' ')
  const lastWord = words[words.length - 1]
  const rest = words.slice(0, -1).join(' ')

  return (
    <p className="mb-6 text-stone-50">
      {rest ? `${rest} ` : ''}
      <span className="word-reveal">{lastWord}</span>
      <span className="ml-1 animate-pulse">▍</span>
    </p>
  )
}

export default function Blackboard({ history, pending }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [history, pending?.text])

  return (
    <div className="wood-frame chalk-texture min-w-0 flex-1 rounded-sm">
      <div
        ref={scrollRef}
        className="fredericka-the-great-regular h-[48vh] overflow-y-auto p-4 text-lg leading-relaxed text-stone-100 sm:h-[58vh] sm:p-8 sm:text-2xl"
      >
        {history.length === 0 && !pending && (
          <p className="text-stone-300/60">...board&apos;s empty. Ask something before the bell rings.</p>
        )}

        {history.map((entry) => (
          <p key={entry.id} className={entry.role === 'user' ? 'mb-3 text-amber-200/90' : 'mb-6 text-stone-50'}>
            {entry.role === 'user' ? '— ' : ''}
            {entry.text}
          </p>
        ))}

        {pending?.thinking && (
          <p className="mb-6 text-stone-300/70">
            <span className="inline-block animate-pulse">thinking...</span>
          </p>
        )}

        {pending && !pending.thinking && pending.text && <RevealingLine text={pending.text} />}
      </div>
    </div>
  )
}
