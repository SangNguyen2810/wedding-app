import SectionHeader from '../ui/SectionHeader'
import styles from './SaveTheDate.module.css'
import { useCountdown } from '../../hooks/useCountdown'
import { WEDDING } from '../../constants/weddingData'

function CountBox({ value, label }) {
  return (
    <div className={styles.countBox}>
      <div className={styles.countNum}>{String(value).padStart(2, '0')}</div>
      <div className={styles.countLabel}>{label}</div>
    </div>
  )
}

export default function SaveTheDate() {
  const { date } = WEDDING
  const { days, hours, mins, secs } = useCountdown(date.iso)

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader eyebrow="Save The Date" title="Tiệc cưới sẽ diễn ra vào lúc" />

        <div className={`${styles.mainTime} reveal`}>{date.ceremonyStart}</div>

        <div className={`${styles.dateRow} reveal`}>
          <div className={styles.dateSide}>{date.dayOfWeek}</div>
          <div className={styles.vline} />
          <div className={styles.dateHero}>{date.day}</div>
          <div className={styles.vline} />
          <div className={styles.dateSide}>{date.month}</div>
        </div>

        <div className={`${styles.yearLine} reveal`}>{date.year}</div>
        <div className={`${styles.lunarDate} reveal`}>({date.lunar})</div>

        <div className={`${styles.receptionTimes} reveal`}>
          <div className={styles.receptionItem}>
            <div className={styles.receptionLabel}>Đón Khách</div>
            <div className={styles.receptionTime}>{date.receptionStart}</div>
          </div>
          <div className={styles.receptionDivider} />
          <div className={styles.receptionItem}>
            <div className={styles.receptionLabel}>Khai Tiệc</div>
            <div className={styles.receptionTime}>{date.ceremonyStart}</div>
          </div>
        </div>

        <div className={`${styles.countdown} reveal`}>
          <CountBox value={days}  label="Ngày · Days" />
          <CountBox value={hours} label="Giờ · Hours" />
          <CountBox value={mins}  label="Phút · Min" />
          <CountBox value={secs}  label="Giây · Sec" />
        </div>
      </div>
    </section>
  )
}
