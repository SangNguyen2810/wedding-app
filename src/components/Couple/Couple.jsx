import SectionHeader from '../ui/SectionHeader'
import styles from './Couple.module.css'
import { WEDDING } from '../../constants/weddingData'

function PersonCard({ person }) {
  return (
    <div className={`${styles.person} reveal`}>
      <div className={styles.photo}>
        <img src={person.photo} alt={person.name} />
      </div>

      <div className={styles.name}>
        {person.nameParts.map((part, i) => (
          <span key={i}>{part}</span>
        ))}
      </div>
      <div className={styles.parents}>
        <span>Ông Bà</span>
        {person.parents.map((p, i) => (
          <span key={i}>{p}{i < person.parents.length - 1 ? <br /> : null}</span>
        ))}
        <em className={styles.hometown}>{person.hometown}</em>
      </div>
    </div>
  )
}

export default function Couple() {
  const { groom, bride } = WEDDING

  return (
    <section className={styles.couple}>
      <div className="container">
        <SectionHeader eyebrow="Our wedding" title="Tân Lang · Tân Nương" />

        <div className={styles.grid}>
          <PersonCard person={groom} />
          <div className={`${styles.divider} reveal`}>&amp;</div>
          <PersonCard person={bride} />
        </div>

        <div className={`${styles.announcement} reveal`}>
          <p className={styles.announceSub}>Trân trọng báo tin <br></br>lễ vu quy của con chúng tôi</p>
          <p className={styles.announceNames}>
            {groom.name}<span className={styles.announceAmp}>&amp;</span>{bride.name}
          </p>
        </div>
      </div>
    </section>
  )
}
