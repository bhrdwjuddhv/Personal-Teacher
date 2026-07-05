export default function DocSection({ kicker, title, children }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-8 sm:py-10">
      <span className="cookie-regular text-xl text-amber-300 sm:text-2xl">{kicker}</span>
      <h2 className="karla-text mt-1 text-2xl font-extrabold text-stone-50 sm:text-3xl">{title}</h2>
      <div className="karla-text mt-4 space-y-3 text-base leading-relaxed text-stone-300 sm:text-lg">{children}</div>
    </section>
  )
}
