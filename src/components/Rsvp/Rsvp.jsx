import styles from './Rsvp.module.css'

const RSVP_URL = 'https://forms.google.com/placeholder'

export default function Rsvp() {
  return (
    <section className={styles.section}>
      <div className="container">
        <a
          href={RSVP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.rsvpBtn} reveal`}
        >
          Xác nhận tham dự
        </a>
      </div>
    </section>
  )
}
