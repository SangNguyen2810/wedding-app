import styles from './Thanks.module.css'
import { WEDDING } from '../../constants/weddingData'

export default function Thanks() {
  const { groom, bride, date } = WEDDING

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.symbol} reveal`}>囍</div>
        <h2 className={`${styles.title} reveal`}>Trân Trọng Cảm Ơn</h2>
        <p className={`${styles.message} reveal`}>
          Thank you for being part of our story.
          Chúng tôi mong được chia sẻ niềm hạnh phúc này cùng bạn trong ngày đặc biệt.
        </p>
        <div className={`${styles.names} reveal`}>
          {groom.shortName} &amp; {bride.shortName}
        </div>
        <div className={styles.footer}>❦ {date.display} ❦</div>
      </div>
    </section>
  )
}
