import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DEFAULT_TEACHER } from '../data/teachers.js'
import { useChatHistory } from '../hooks/useChatHistory.js'
import { useWordReveal } from '../hooks/useWordReveal.js'
import { askTeacher } from '../api/askTeacher.js'
import Blackboard from '../components/chat/Blackboard.jsx'
import StickmanDisplay from '../components/chat/StickmanDisplay.jsx'
import PinBoard from '../components/chat/PinBoard.jsx'
import PaperInput from '../components/chat/PaperInput.jsx'
import ClassroomDecor from '../components/chat/ClassroomDecor.jsx'
import QuotesBoard from '../components/chat/QuotesBoard.jsx'

const RECENT_TURNS = 8

export default function ChatPage() {
  const [teacherId, setTeacherId] = useState(DEFAULT_TEACHER)
  const [status, setStatus] = useState('idle') // idle | thinking | teaching
  const { history, appendEntry } = useChatHistory(teacherId)
  const { revealedText, start } = useWordReveal()

  const isBusy = status !== 'idle'

  const handleSelectTeacher = (id) => {
    if (isBusy || id === teacherId) return
    setTeacherId(id)
  }

  const handleSubmit = async (question) => {
    appendEntry({ role: 'user', text: question })
    setStatus('thinking')

    let answer
    try {
      const recentHistory = history.slice(-RECENT_TURNS)
      answer = await askTeacher(teacherId, question, recentHistory)
    } catch {
      appendEntry({ role: 'teacher', text: "Ugh, couldn't reach the backend. Try again in a bit." })
      setStatus('idle')
      return
    }

    setStatus('teaching')
    start(answer, (fullText) => {
      appendEntry({ role: 'teacher', text: fullText })
      setStatus('idle')
    })
  }

  const pending =
    status === 'teaching'
      ? { text: revealedText }
      : status === 'thinking'
        ? { thinking: true }
        : null

  return (
    <div className="classroom-wall relative min-h-screen overflow-hidden">
      <ClassroomDecor />

      <Link
        to="/"
        className="karla-text absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-full bg-stone-900/85 px-4 py-2 text-sm font-bold text-amber-300 shadow-lg ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-stone-900 sm:left-5 sm:top-5 sm:px-5 sm:py-2.5 sm:text-base"
      >
        <span aria-hidden="true">←</span> Home
      </Link>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-4 px-3 pb-32 pt-16 sm:px-8">
        <QuotesBoard teacherId={teacherId} />

        <div className="flex w-full flex-row items-end justify-center gap-2 sm:gap-6">
          <StickmanDisplay teacherId={teacherId} status={status} />
          <Blackboard history={history} pending={pending} />
          <PinBoard current={teacherId} onSelect={handleSelectTeacher} disabled={isBusy} />
        </div>
      </div>

      <PaperInput onSubmit={handleSubmit} disabled={isBusy} />
    </div>
  )
}
