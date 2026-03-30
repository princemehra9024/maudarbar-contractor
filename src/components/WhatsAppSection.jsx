import './WhatsAppSection.css'

const features = [
  'Instant Booking Confirmation',
  'Quick Price Quotes',
  'Material Consultations',
  '24/7 Customer Support',
]

export default function WhatsAppSection() {
  return (
    <section className="wa-section">
      <div className="wa-section__grid">
        {/* LEFT — Orange Panel */}
        <div className="wa-section__left">
          <div className="wa-section__left-content">
            <div className="wa-section__icon">
              <svg viewBox="0 0 32 32" width="52" height="52">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.134 6.738 3.06 9.37L1.058 31.35l6.204-1.96A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.012-3.162 2.278-.844.178-1.946.32-5.656-1.216-4.746-1.964-7.8-6.776-8.036-7.09-.226-.314-1.896-2.524-1.896-4.814 0-2.29 1.2-3.416 1.626-3.882.426-.466.93-.584 1.24-.584.31 0 .62.002.89.016.286.014.67-.108.948.724.35 1.048.846 2.584.92 2.77.076.188.126.406.026.65-.1.252-.15.406-.296.626-.15.22-.314.49-.45.658-.148.18-.304.374-.13.734.174.36.77 1.272 1.654 2.062 1.136 1.016 2.094 1.33 2.39 1.478.296.148.468.124.64-.076.174-.2.744-.87.942-1.168.198-.298.396-.248.668-.148.272.1 1.724.814 2.02.962.296.148.494.222.568.346.074.124.074.724-.316 1.824z" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="wa-section__title">
              Connect With Us On<br />
              <span>WhatsApp</span>
            </h2>

            <p className="wa-section__desc">
              Get Instant Responses To Your Queries. Available 24/7 For Bookings And Support.
            </p>

            <ul className="wa-section__features">
              {features.map((f, i) => (
                <li key={i} className="wa-section__feature">
                  <span className="wa-section__check">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT — CTA Panel */}
        <div className="wa-section__right">
          <div className="wa-section__right-content">
            <h3 className="wa-section__cta-title">Ready To Transform Your Space?</h3>
            <p className="wa-section__cta-desc">
              Chat With Our Team Now And Get Your Dream Marble & Tiles Project Started Today.
            </p>

            <a
              href="https://wa.me/919509694042?text=Hello%20Mahu%20Darbar!%20I%27m%20interested%20in%20your%20marble%20and%20tiles%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="wa-section__cta-btn"
            >
              <svg viewBox="0 0 32 32" width="22" height="22">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.134 6.738 3.06 9.37L1.058 31.35l6.204-1.96A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.012-3.162 2.278-.844.178-1.946.32-5.656-1.216-4.746-1.964-7.8-6.776-8.036-7.09-.226-.314-1.896-2.524-1.896-4.814 0-2.29 1.2-3.416 1.626-3.882.426-.466.93-.584 1.24-.584.31 0 .62.002.89.016.286.014.67-.108.948.724.35 1.048.846 2.584.92 2.77.076.188.126.406.026.65-.1.252-.15.406-.296.626-.15.22-.314.49-.45.658-.148.18-.304.374-.13.734.174.36.77 1.272 1.654 2.062 1.136 1.016 2.094 1.33 2.39 1.478.296.148.468.124.64-.076.174-.2.744-.87.942-1.168.198-.298.396-.248.668-.148.272.1 1.724.814 2.02.962.296.148.494.222.568.346.074.124.074.724-.316 1.824z" fill="currentColor"/>
              </svg>
              Start WhatsApp Chat
            </a>

            <div className="wa-section__phones">
              <a href="tel:9509694042" className="wa-section__phone">
                <span className="wa-section__phone-icon">📞</span>
                <span>+91 9509694042</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
