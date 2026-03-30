import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import AnimatedSection from '../components/AnimatedSection'
import ContactForm from '../components/ContactForm'
import WhatsAppSection from '../components/WhatsAppSection'
import './Contact.css'

export default function Contact() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-hero__label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
      gsap.fromTo('.contact-hero__title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
      gsap.fromTo('.contact-hero__desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.8 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="contact-page">
      {/* HERO */}
      <section ref={heroRef} className="contact-hero">
        <div className="contact-hero__bg"></div>
        <div className="container">
          <span className="contact-hero__label section-label">Get In Touch</span>
          <h1 className="contact-hero__title">
            Let's Build <span className="text-orange">Together</span>
          </h1>
          <p className="contact-hero__desc">
            Ready to start your project? Reach out to us for a free consultation. 
            We're here to turn your vision into reality.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-main__grid">
            {/* INFO */}
            <AnimatedSection animation="fadeLeft" className="contact-info">
              <span className="section-label">Contact Info</span>
              <h2 className="section-title">Reach <span className="text-orange">Us</span></h2>
              <p className="contact-info__desc">
                Whether you have a question, need a quote, or want to discuss your 
                dream project — we'd love to hear from you.
              </p>

              <div className="contact-info__items">
                <a href="tel:9509694042" className="contact-info__item">
                  <div className="contact-info__icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 9509694042</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919509694042?text=Hello%20Mahu%20Darbar!%20I%27m%20interested%20in%20your%20marble%20and%20tiles%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__item contact-info__item--whatsapp"
                >
                  <div className="contact-info__icon contact-info__icon--whatsapp">💬</div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>Chat Now — 9509694042</p>
                  </div>
                  <span className="contact-info__badge">Quick Response</span>
                </a>

                <div className="contact-info__item">
                  <div className="contact-info__icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>info@mahudarbar.com</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">📍</div>
                  <div>
                    <h4>Office</h4>
                    <p>Rajasthan, India</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">🕐</div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* FORM */}
            <AnimatedSection animation="fadeRight">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="contact-map">
        <div className="contact-map__overlay">
          <AnimatedSection className="contact-map__content text-center">
            <h3>Visit Our Office</h3>
            <p>Rajasthan, India</p>
            <a
              href="https://www.google.com/maps/place/Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ marginTop: '16px' }}
            >
              Open in Google Maps →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* WHATSAPP SECTION */}
      <WhatsAppSection />
    </div>
  )
}
