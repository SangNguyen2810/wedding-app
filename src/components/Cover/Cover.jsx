import styles from './Cover.module.css'
import { WEDDING } from '../../constants/weddingData'

export default function Cover({ onOpen }) {
  const { cover, groom, bride, date } = WEDDING

  return (
    <>
      <div className={styles.coverFrame} />
      <div className={styles.coverContent}>
        <div className={styles.eyebrow}>{cover.eyebrow}</div>
        <h1 className={styles.names}>
          <span className={styles.groom}>{groom.shortName}</span>
          <span className={styles.amp}>&amp;</span>
          <span className={styles.bride}>{bride.shortName}</span>
        </h1>
        <div className={styles.date}>{date.display}</div>
        <div className={styles.inviteText}>{cover.inviteText}</div>
        <button className={styles.openBtn} onClick={onOpen}>
          {cover.btnText}
        </button>
      </div>
    </>
  )
}
