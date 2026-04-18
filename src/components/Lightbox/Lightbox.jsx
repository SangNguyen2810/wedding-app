import { useState, useEffect, useCallback } from 'react'
import styles from './Lightbox.module.css'

export default function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((index) => {
    setFading(true)
    setTimeout(() => {
      setCurrent((index + images.length) % images.length)
      setFading(false)
    }, 150)
  }, [images.length])

  useEffect(() => {
    setCurrent(startIndex)
  }, [startIndex])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft')  goTo(current - 1)
      if (e.key === 'ArrowRight') goTo(current + 1)
      if (e.key === 'Escape')     onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current, goTo, onClose])

  // Touch swipe
  let touchStartX = 0
  const onTouchStart = (e) => { touchStartX = e.touches[0].clientX }
  const onTouchEnd  = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1))
  }

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className={styles.close} onClick={onClose}>&times;</button>

      <div className={styles.imgWrap}>
        <button className={`${styles.btn} ${styles.prev}`} onClick={() => goTo(current - 1)}>&#8249;</button>
        <img
          src={images[current].src}
          alt={images[current].alt}
          className={fading ? styles.fade : ''}
        />
        <button className={`${styles.btn} ${styles.next}`} onClick={() => goTo(current + 1)}>&#8250;</button>
      </div>

      <div className={styles.counter}>{current + 1} / {images.length}</div>

      <div className={styles.thumbs}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`${styles.thumb} ${i === current ? styles.active : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
