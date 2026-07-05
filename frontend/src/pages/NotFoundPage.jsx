import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 px-6 text-center">
      <span className="cookie-regular text-2xl text-amber-300">attendance: absent</span>
      <h1 className="karla-text text-7xl font-extrabold text-stone-50 sm:text-8xl">404</h1>
      <p className="karla-text max-w-md text-stone-300">
        Even Hitesh &amp; Piyush couldn&apos;t find this page. Maybe it got deleted in a &quot;dead framework&quot; video.
      </p>
      <Link
        to="/"
        className="karla-text rounded-full bg-amber-300 px-8 py-3 text-base font-bold text-stone-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-200"
      >
        Back to Class
      </Link>
    </div>
  )
}
