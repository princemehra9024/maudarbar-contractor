import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message from form data
    const msg = `Hello Mahu Darbar!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`
    window.open(`https://wa.me/919509694042?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form className="contact-form glass-card" onSubmit={handleSubmit}>
      <h3 className="contact-form__title">Send Us a Message</h3>
      <p className="contact-form__subtitle">We'll get back to you within 24 hours</p>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+91 XXXXX XXXXX"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary contact-form__submit" disabled={submitted}>
        {submitted ? '✓ Sent via WhatsApp!' : 'Send via WhatsApp →'}
      </button>
    </form>
  )
}
