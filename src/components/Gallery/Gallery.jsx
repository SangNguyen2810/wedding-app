import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import Lightbox from '../Lightbox/Lightbox'
import styles from './Gallery.module.css'
import { WEDDING } from '../../constants/weddingData'

const MAX_VISIBLE = 4

export default function Gallery() {
  const { gallery } = WEDDING
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const visible = gallery.slice(0, MAX_VISIBLE)
  const extra = gallery.length - MAX_VISIBLE

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader eyebrow="Khoảnh Khắc" title="Our Moments" />

        <div className={`${styles.grid} reveal`}>
          {visible.map((img, i) => {
            const isLast = i === MAX_VISIBLE - 1 && extra > 0
            return (
              <div
                key={i}
                className={styles.item}
                onClick={() => setLightboxIndex(i)}
              >
                <img src={img.src} alt={img.alt} />
                {isLast && (
                  <div className={styles.more}>+{extra}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={gallery}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  )
}
