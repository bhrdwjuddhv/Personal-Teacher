import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-1px)] flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <span className="cookie-regular text-3xl text-amber-300 sm:text-4xl">two teachers, zero chill</span>

      <h1 className="karla-text max-w-3xl text-4xl font-extrabold leading-tight text-stone-50 sm:text-6xl">
        Ask Hitesh &amp; Piyush anything.
        <br className="hidden sm:block" /> Get roasted <span className="text-amber-300">and</span> taught.
      </h1>

      <p className="karla-text max-w-xl text-base text-stone-300 sm:text-lg">
        One AI, two personalities, infinite &quot;bhai just ship it&quot; energy. Pick a teacher, ask your doubt,
        survive the sarcasm.
      </p>

      <img
        src="/landingpage/hiteshPiyush.png"
        alt="Hitesh and Piyush, mildly judging your code"
        className="float-slow w-64 max-w-full drop-shadow-2xl sm:w-80"
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          to="/chat"
          className="karla-text rounded-full bg-amber-300 px-8 py-3 text-base font-bold text-stone-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-200"
        >
          Enter the Classroom
        </Link>
        <Link
          to="/docs"
          className="karla-text rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-stone-200 transition hover:-translate-y-0.5 hover:border-white/40"
        >
          Documentation &#8594;
        </Link>
      </div>
    </section>
  )
}
