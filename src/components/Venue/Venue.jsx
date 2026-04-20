import SectionHeader from '../ui/SectionHeader'
import styles from './Venue.module.css'
import { WEDDING } from '../../constants/weddingData'

const RSVP_URL = 'https://forms.google.com/placeholder'

export default function Venue() {
  const { venue } = WEDDING

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader eyebrow="Địa Điểm · Venue" title="Tiệc cưới sẽ tổ chức tại" />

        <div className={`${styles.venueCard} reveal`}>
          <div className={styles.venueName}>{venue.name}</div>
          <div className={styles.venueDivider} />
          <div className={styles.venueAddress}>{venue.address}</div>
          <div className={styles.venueCity}>{venue.city}</div>
        </div>

        <div className={`${styles.mapContainer} reveal`}>
          <iframe
            src={venue.mapSrc}
            title={`Bản đồ ${venue.name}`}
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className={`${styles.rsvpWrap} reveal`}>
          <a
            href={RSVP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.rsvpBtn}
          >
            Xác nhận tham dự
          </a>
        </div>
      </div>
    </section>
  )
}
