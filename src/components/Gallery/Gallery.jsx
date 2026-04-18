import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import Lightbox from '../Lightbox/Lightbox'
import styles from './Gallery.module.css'
import { WEDDING } from '../../constants/weddingData'

export default function Gallery() {
  const { gallery } = WEDDING
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader eyebrow="Khoảnh Khắc" title="Our Moments" />

        <div className={`${styles.grid} reveal`}>
          {gallery.map((img, i) => (
            <div
              key={i}
              className={styles.item}
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
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
