import { useCallback, useEffect, useState } from 'react'

const storageKey = (teacher) => `hnp_chat_${teacher}`

function loadHistory(teacher) {
  try {
    const raw = localStorage.getItem(storageKey(teacher))
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

// Chat log scoped per teacher, persisted to localStorage and reloaded on teacher switch.
export function useChatHistory(teacher) {
  const [history, setHistory] = useState(() => loadHistory(teacher))

  useEffect(() => {
    setHistory(loadHistory(teacher))
  }, [teacher])

  const appendEntry = useCallback(
    (entry) => {
      setHistory((prev) => {
        const next = [...prev, { id: Date.now() + Math.random(), timestamp: Date.now(), ...entry }]
        localStorage.setItem(storageKey(teacher), JSON.stringify(next))
        return next
      })
    },
    [teacher],
  )

  return { history, appendEntry }
}
