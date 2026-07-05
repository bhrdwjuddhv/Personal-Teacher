export default function TechDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute left-[4%] top-[8%] font-mono text-3xl text-amber-200/10 sm:text-4xl">{'{ }'}</span>
      <span className="absolute right-[6%] top-[14%] hidden font-mono text-3xl text-emerald-200/10 sm:block sm:text-5xl">
        {'</>'}
      </span>
      <span className="absolute left-[12%] top-[38%] hidden font-mono text-2xl text-sky-200/10 md:block">{'( )'}</span>
      <span className="absolute right-[10%] top-[46%] font-mono text-2xl text-stone-300/10 sm:text-3xl">;</span>
      <span className="absolute left-[7%] top-[64%] hidden font-mono text-2xl text-amber-200/10 md:block">{'=>'}</span>
      <span className="absolute right-[16%] top-[70%] hidden font-mono text-3xl text-emerald-200/10 sm:block">{'{ }'}</span>
      <span className="absolute left-[20%] top-[86%] hidden font-mono text-2xl text-sky-200/10 lg:block">01</span>
      <span className="absolute right-[5%] top-[88%] font-mono text-2xl text-stone-300/10 sm:text-4xl">{'</>'}</span>
      <span className="absolute left-[42%] top-[4%] hidden font-mono text-xl text-amber-200/10 lg:block">#!/usr/bin</span>

      <svg
        className="absolute right-[8%] top-[4%] hidden h-16 w-24 text-stone-200/10 lg:block"
        viewBox="0 0 160 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="156" height="96" rx="8" />
        <line x1="2" y1="22" x2="158" y2="22" />
        <circle cx="14" cy="12" r="3" fill="currentColor" stroke="none" />
        <circle cx="24" cy="12" r="3" fill="currentColor" stroke="none" />
        <circle cx="34" cy="12" r="3" fill="currentColor" stroke="none" />
        <line x1="14" y1="40" x2="70" y2="40" />
        <line x1="14" y1="55" x2="100" y2="55" />
        <line x1="14" y1="70" x2="60" y2="70" />
      </svg>

      <svg
        className="absolute left-[3%] top-[20%] hidden h-24 w-24 text-emerald-200/10 md:block"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M10 100 H60 V40 H140 V100 H190" />
        <path d="M10 150 H90 V180 H190" />
        <circle cx="60" cy="40" r="4" fill="currentColor" stroke="none" />
        <circle cx="140" cy="100" r="4" fill="currentColor" stroke="none" />
        <circle cx="90" cy="180" r="4" fill="currentColor" stroke="none" />
      </svg>

      <svg
        className="absolute right-[4%] top-[58%] hidden h-20 w-20 text-sky-200/10 md:block"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 20 H120 V80 H180" />
        <path d="M20 140 H80 V90" />
        <circle cx="120" cy="80" r="4" fill="currentColor" stroke="none" />
        <circle cx="80" cy="90" r="4" fill="currentColor" stroke="none" />
      </svg>
    </div>
  )
}
