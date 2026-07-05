import { Link } from 'react-router-dom'
import TechDecor from '../components/landing/TechDecor.jsx'
import DocSection from '../components/docs/DocSection.jsx'
import SampleConversations from '../components/docs/SampleConversations.jsx'

export default function DocumentationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
      <TechDecor />

      <Link
        to="/"
        className="karla-text absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-full bg-stone-800/80 px-4 py-2 text-sm font-bold text-amber-300 shadow-lg ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-stone-800 sm:left-5 sm:top-5"
      >
        <span aria-hidden="true">←</span> Home
      </Link>

      <div className="relative z-10">
        <header className="flex flex-col items-center gap-3 px-6 pb-8 pt-24 text-center sm:pt-28">
          <span className="cookie-regular text-2xl text-amber-300 sm:text-3xl">how the sausage gets made</span>
          <h1 className="karla-text max-w-2xl text-3xl font-extrabold text-stone-50 sm:text-5xl">
            Behind Hitesh &amp; Piyush
          </h1>
          <p className="karla-text max-w-xl text-stone-300">
            The persona work, the prompt design, and how it remembers a conversation — documented honestly,
            warts and all.
          </p>
        </header>

        <div className="divide-y divide-white/10">
          <DocSection kicker="step one" title="How the persona data was collected and prepared">
            <p>
              Both personas are built entirely from <strong className="text-stone-100">publicly available</strong>{' '}
              material YouTube videos, live streams, tweets, talks, and interviews. For each teacher I
              catalogued recurring patterns rather than copying transcripts: sentence rhythm (short and punchy vs.
              a longer teaching tangent), catchphrases, code-review pet peeves, running jokes, and
              language-mixing habits.
            </p>
            <p>
              Those observations were distilled into a short list of behavioral rules per teacher so the model generalizes the <em>style</em> instead of parroting specific lines.
            </p>
          </DocSection>

          <DocSection kicker="step two" title="Prompt engineering strategy">
            <p>
              Each persona is one long <strong className="text-stone-100">system message</strong>, not a chain of
              example turns, identity, voice/language rules, philosophy and opinions, signature traits, and
              response-style rules, all as direct imperatives (&quot;Default to short replies&quot;, &quot;Mix
              English and Hindi/Punjabi naturally when it fits, don&apos;t force it&quot;).
            </p>
            <p>
              A curated set of <strong className="text-stone-100">few-shot examples</strong> is written directly
              into that same system message, a handful of realistic Q&amp;A pairs that calibrate tone and
              length, rather than being sent as separate conversation turns. One message, no extra per-request
              token overhead from a growing example history. Both personas also explicitly instruct the model to
              reply in plain text, no Markdown that's what lets the blackboard just render the string as-is.
            </p>
            <p>
              At request time, the backend picks a system prompt by the <code className="text-amber-300/90">teacher</code>{' '}
              field, pairs it with the incoming question, and sends both to{' '}
              <code className="text-amber-300/90">gpt-4o-mini</code>.
            </p>
          </DocSection>

          <DocSection kicker="step three" title="Context management approach">
            <p>
              The assistant remembers your conversation. Every question and
              answer is already saved in your browser&apos;s <code className="text-amber-300/90">localStorage</code>,
              as one running log per teacher. Before a new question goes out, the app grabs the <strong className="text-stone-100">last 8 messages</strong>{' '}
              from that log and sends them along with the new question.
            </p>
            <p>
              On the backend, those 8 messages get slotted in between the persona&apos;s system prompt and your new
              question, so the model sees them as part of the same conversation, instead of guessing cold. Think
              of it like handing the AI a quick recap card before it answers: &quot;here&apos;s roughly what we&apos;ve
              talked about so far, now answer this.&quot;
            </p>

          </DocSection>

          <DocSection kicker="step four" title="Sample conversations demonstrating both personas">
            <p className="mb-2">
               Click image to see it in full-size
            </p>
            <SampleConversations />
          </DocSection>
        </div>

        <footer className="px-6 pb-16 pt-4 text-center">
          <p className="karla-text text-xs text-stone-500">That&apos;s the whole story, so far.</p>
        </footer>
      </div>
    </div>
  )
}
