import { useState } from 'react'

export default function SampleShot({ src, caption }) {
  const [broken, setBroken] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const alt = caption || 'Sample conversation screenshot'

  return (
    <>
      <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-lg">
        {broken ? (
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-stone-800/60 px-4 text-center">
            <span className="text-3xl">📸</span>
            <span className="karla-text text-xs text-stone-400">drop a screenshot at</span>
            <code className="karla-text break-all text-[11px] text-amber-300/80">{src}</code>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            onError={() => setBroken(true)}
            onClick={() => setIsOpen(true)}
            className="aspect-[4/3] w-full cursor-zoom-in object-cover transition hover:opacity-90"
          />
        )}
        {caption && <figcaption className="karla-text px-3 py-2 text-xs text-stone-400">{caption}</figcaption>}
      </figure>

      {isOpen && (
        <div
          className="modal-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setIsOpen(false)}
        >
          <div className="modal-scale-in relative max-h-[90vh] max-w-[90vw]" onClick={(event) => event.stopPropagation()}>
            <img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl" />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-lg font-bold text-amber-300 shadow-lg ring-1 ring-white/20 transition hover:bg-stone-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}
