import SectionHeader from '../ui/SectionHeader'
import styles from './Venue.module.css'
import { WEDDING } from '../../constants/weddingData'

export default function Venue() {
  const { venue } = WEDDING

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader eyebrow="Địa Điểm · Venue" title="Tiệc cưới sẽ tổ chức tại" />

        <div className={`${styles.venueName} reveal`}>{venue.name}</div>
        <div className={`${styles.venueAddress} reveal`}>
          {venue.address}<br />{venue.city}
        </div>

        <div className={`${styles.mapContainer} reveal`}>
          <iframe
            src={venue.mapSrc}
            title={`Bản đồ ${venue.name}`}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
