import { useEffect, useRef, useState } from 'react'

export default function PaperInput({ onSubmit, disabled, label }) {
  const [expanded, setExpanded] = useState(false)
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [value, expanded])

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSubmit(trimmed)
    setValue('')
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 sm:px-8">
      <form
        onSubmit={handleSubmit}
        className={`paper-texture w-full max-w-xl rounded-t-lg px-5 pt-3 shadow-2xl transition-transform duration-300 ease-out ${
          expanded ? 'translate-y-0' : 'translate-y-[calc(100%-2.75rem)]'
        }`}
      >
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="cookie-regular block w-full text-left text-lg text-stone-600"
        >
          {expanded ? 'psst, ask your question below ✍️' : 'tap to ask a question...'}
        </button>

        <textarea
          ref={textareaRef}
          value={value}
          onFocus={() => setExpanded(true)}
          onChange={(event) => setValue(event.target.value)}
          rows={1}
          placeholder="e.g. why does my recursion recurse forever..."
          className="cookie-regular mt-1 max-h-56 min-h-10 w-full resize-none overflow-hidden border-none bg-transparent text-xl text-stone-800 outline-none placeholder:text-stone-400"
        />

        <div className="flex justify-end pb-3 pt-1">
          <button
            type="submit"
            disabled={disabled || !value.trim()}
            className="karla-text rounded-full bg-stone-800 px-5 py-1.5 text-sm font-semibold text-amber-200 transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            {label ?? (disabled ? 'thinking…' : 'Submit')}
          </button>
        </div>
      </form>
    </div>
  )
}
