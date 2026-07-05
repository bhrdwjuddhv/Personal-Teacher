import { Link } from 'react-router-dom'
import { socials } from '../../data/socials.js'
import SocialIcon from './SocialIcon.jsx'

export default function Footer() {
  return (
    <footer id="developer" className="karla-text border-t border-white/10 bg-black/20 px-6 py-10 text-stone-200">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <Link to="/docs" className="text-sm text-amber-300/90 underline-offset-4 hover:underline">
          Read the docs →
        </Link>
        <p className="text-sm text-stone-400">Social Media - </p>
        <div className="mt-2 flex gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="rounded-full border border-white/15 p-2.5 text-stone-300 transition hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
            >
              <SocialIcon name={social.icon} />
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-stone-500">© {new Date().getFullYear()} · Made with chai</p>
      </div>
    </footer>
  )
}
