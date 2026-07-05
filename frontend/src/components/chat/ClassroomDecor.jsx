export default function ClassroomDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden xl:block">
      {/* top-right: clock, alone in its corner */}
      <div className="absolute right-6 top-6 h-16 w-16 rounded-full border-4 border-stone-700 bg-stone-100 shadow-lg">
        <div className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-full bg-stone-800" />
        <div
          className="absolute left-1/2 top-1/2 h-3.5 w-0.5 -translate-x-1/2 -translate-y-full rotate-45 bg-stone-800"
          style={{ transformOrigin: 'bottom' }}
        />
      </div>

      {/* top-left: sticky note */}
      <div className="absolute left-4 top-20 -rotate-3 rounded bg-rose-200/90 px-3 py-2 shadow-md">
        <p className="cookie-regular text-base text-stone-800">&quot;console.log(&apos;aazad desh hai!&apos;)&quot;</p>
      </div>

      {/* bottom-right: sticky note, well above the bookshelf */}
      <div className="absolute bottom-28 right-4 rotate-2 rounded bg-emerald-200/90 px-3 py-2 shadow-md">
        <p className="cookie-regular text-base text-stone-800">&quot;it works on my machine 🌱&quot;</p>
      </div>

      {/* bottom-left: growth chart poster, above the plant */}
      <div className="absolute bottom-28 left-4 -rotate-1 rounded bg-sky-100/90 px-3 py-2 shadow-md">
        <p className="karla-text mb-1 text-center text-[10px] font-bold text-stone-500">SKILL GROWTH</p>
        <div className="flex h-10 items-end gap-1">
          <div className="h-3 w-3 rounded-sm bg-sky-400" />
          <div className="h-5 w-3 rounded-sm bg-sky-500" />
          <div className="h-7 w-3 rounded-sm bg-sky-600" />
          <div className="h-10 w-3 rounded-sm bg-sky-700" />
        </div>
      </div>

      {/* bottom-right: bookshelf */}
      <div className="absolute bottom-4 right-4 flex h-14 w-24 items-end gap-1 rounded-t-sm bg-[#8a5a35]/80 p-1.5 shadow-md">
        <div className="h-full w-2.5 rounded-sm bg-rose-400" />
        <div className="h-4/5 w-2.5 rounded-sm bg-amber-300" />
        <div className="h-full w-2.5 rounded-sm bg-emerald-400" />
        <div className="h-3/4 w-2.5 rounded-sm bg-sky-400" />
        <div className="h-full w-2.5 rounded-sm bg-violet-400" />
      </div>

      {/* bottom-left: plant */}
      <div className="absolute bottom-4 left-4 text-6xl">🪴</div>
    </div>
  )
}
