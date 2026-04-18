import { useState, useEffect, useRef } from 'react'
import Cover from './components/Cover/Cover'
import Couple from './components/Couple/Couple'
import SaveTheDate from './components/SaveTheDate/SaveTheDate'
import Venue from './components/Venue/Venue'
import Gallery from './components/Gallery/Gallery'
import Rsvp from './components/Rsvp/Rsvp'
import Thanks from './components/Thanks/Thanks'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const firstPageRef = useRef(null)
  const coverRef = useRef(null)

  // Lock scroll on mount (cover showing)
  useEffect(() => {
    document.body.classList.add('locked')
  }, [])

  // Activate scroll reveal after cover opens
  useScrollReveal()

  const handleOpen = () => {
    setIsOpen(true)
    document.body.classList.remove('locked')
    document.body.classList.add('main-open')
    setTimeout(() => {
      if (firstPageRef.current) firstPageRef.current.style.display = 'none'
    }, 1600)
  }

  return (
    <>
      {/* Cover with red backdrop */}
      <div
        ref={firstPageRef}
        id="firstPage"
        className={`first-page${isOpen ? ' open' : ''}`}
      >
        <div
          ref={coverRef}
          id="cover"
          className={`cover${isOpen ? ' open' : ''}`}
        >
          <Cover onOpen={handleOpen} />
        </div>
      </div>

      {/* Main content */}
      <div id="page-wrap">
        <main>
          <Couple />
          <SaveTheDate />
          <Venue />
          <Gallery />
          <Rsvp />
          <Thanks />
        </main>
      </div>
    </>
  )
}
