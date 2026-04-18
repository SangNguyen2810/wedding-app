import { useState, useEffect } from 'react'

export function useCountdown(targetDateISO) {
  const [timeLeft, setTimeLeft] = useState(calcTime())

  function calcTime() {
    const diff = new Date(targetDateISO).getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 }
    return {
      days:  Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins:  Math.floor((diff / (1000 * 60)) % 60),
      secs:  Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTime()), 1000)
    return () => clearInterval(id)
  }, [targetDateISO])

  return timeLeft
}
