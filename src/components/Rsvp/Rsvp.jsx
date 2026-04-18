import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import styles from './Rsvp.module.css'

export default function Rsvp() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader eyebrow="Xác Nhận Tham Dự" title="RSVP" />

        <p className={`${styles.subtitle} reveal`}>
          Sự hiện diện của bạn là món quà quý giá nhất đối với chúng tôi.
          Vui lòng xác nhận trước ngày 01/06/2026.
        </p>

        {!submitted ? (
          <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Họ và tên · Your Name" required />
            <input type="tel" name="phone" placeholder="Số điện thoại · Phone" />
            <select name="attending" required defaultValue="">
              <option value="" disabled>Bạn sẽ tham dự? · Will you attend?</option>
              <option value="yes">Có · Yes, I'll be there</option>
              <option value="no">Không · Unfortunately no</option>
            </select>
            <select name="guests" defaultValue="1">
              <option value="1">1 người · 1 guest</option>
              <option value="2">2 người · 2 guests</option>
              <option value="3">3 người · 3 guests</option>
              <option value="4">4 người · 4 guests</option>
            </select>
            <textarea name="message" placeholder="Lời chúc · Your wishes (optional)" />
            <button type="submit" className={styles.submitBtn}>
              Gửi Xác Nhận · Send
            </button>
          </form>
        ) : (
          <div className={styles.success}>
            ❦ Cảm ơn bạn đã xác nhận! ❦<br />
            <span>Thank you for your response</span>
          </div>
        )}
      </div>
    </section>
  )
}
