import styles from './SectionHeader.module.css'

export default function SectionHeader({ eyebrow, title }) {
  return (
    <>
      <div className={`eyebrow reveal ${styles.eyebrow}`}>{eyebrow}</div>
      <h2 className="section-title reveal">{title}</h2>
    </>
  )
}
