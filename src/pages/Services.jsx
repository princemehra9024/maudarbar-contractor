import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import './Services.css'

const services = [
  { icon: '🪨', title: 'Marble Flooring', description: 'From luxury Italian marble to premium Indian marble — we install stunning marble floors with flawless finish, precision cutting, and seamless joints for homes and commercial spaces.' },
  { icon: '🏢', title: 'Commercial Tiling', description: 'Large-scale tiles and marble work for hotels, showrooms, offices, and retail spaces. We handle heavy-duty tiling with industrial-grade materials and expert workmanship.' },
  { icon: '🔨', title: 'Renovation & Retiling', description: 'Transform your existing floors and walls with modern marble and designer tiles. Our renovation team specializes in removal, resurfacing, and fresh installations.' },
  { icon: '🎨', title: 'Designer Tile Work', description: 'Custom mosaic patterns, marble inlay, border designs, and decorative tile installations. We create bespoke patterns that add luxury and character to any space.' },
  { icon: '💎', title: 'Granite & Stone Work', description: 'Premium granite countertops, staircases, elevation cladding, and natural stone installations. From kitchen platforms to building facades — expert granite contracting.' },
  { icon: '🏠', title: 'Complete Contracting', description: 'End-to-end marble & tiles contracting from material sourcing, site measurement, cutting, installation to final polishing. Full project management and handover.' },
  { icon: '🌿', title: 'Outdoor Stone Work', description: 'Beautiful outdoor spaces with expert stone paving, marble pathways, granite garden seating, and natural stone installations for landscapes and courtyards.' },
  { icon: '✨', title: 'Polishing & Restoration', description: 'Professional marble and granite polishing, cleaning, and restoration services. We bring old marble floors back to their original shine and glory.' },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'Free initial meeting to understand your vision, space requirements, and material preferences.' },
  { step: '02', title: 'Site Measurement', desc: 'Precise site measurement, layout planning, and material estimation with digital templating.' },
  { step: '03', title: 'Material Selection', desc: 'We help you choose from our premium range of marble, granite, tiles, and natural stones.' },
  { step: '04', title: 'Installation', desc: 'Expert installation with precision cutting, proper leveling, and seamless grouting.' },
  { step: '05', title: 'Polishing & Finishing', desc: 'Professional polishing, edge finishing, and quality inspection for a flawless result.' },
  { step: '06', title: 'Handover', desc: 'Final walkthrough, maintenance guidance, and post-installation support.' },
]

export default function Services() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-hero__label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
      gsap.fromTo('.services-hero__title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
      gsap.fromTo('.services-hero__desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.8 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="services-page">
      {/* HERO */}
      <section ref={heroRef} className="services-hero">
        <div className="services-hero__bg"></div>
        <div className="container">
          <span className="services-hero__label section-label">Our Expertise</span>
          <h1 className="services-hero__title">
            Comprehensive <span className="text-orange">Services</span>
          </h1>
          <p className="services-hero__desc">
            From material selection to final polishing, we offer end-to-end marble & tiles 
            contracting services with unmatched quality and expertise.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section services-list">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our <span className="text-orange">Expertise</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Explore our comprehensive range of marble, tiles, granite, and stone work services.
            </p>
          </AnimatedSection>

          <AnimatedSection className="services-list__grid" stagger>
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} index={i} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section services-process">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our <span className="text-orange">Process</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A streamlined 6-step process that ensures flawless marble & tiles delivery every time.
            </p>
          </AnimatedSection>

          <div className="services-process__grid">
            {process.map((p, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 0.1}>
                <div className="services-process__card glass-card">
                  <span className="services-process__step">{p.step}</span>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section services-why">
        <div className="container">
          <div className="services-why__grid">
            <AnimatedSection animation="fadeLeft">
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">The Mahu Darbar <span className="text-orange">Advantage</span></h2>
              <div className="services-why__list">
                <div className="services-why__item">
                  <span className="services-why__check">✓</span>
                  <div>
                    <h4>15+ Years Experience</h4>
                    <p>A proven track record of delivering excellence since 2009.</p>
                  </div>
                </div>
                <div className="services-why__item">
                  <span className="services-why__check">✓</span>
                  <div>
                    <h4>Premium Quality Materials</h4>
                    <p>We use only the finest marble, granite, and tiles from trusted suppliers.</p>
                  </div>
                </div>
                <div className="services-why__item">
                  <span className="services-why__check">✓</span>
                  <div>
                    <h4>On-Time Delivery</h4>
                    <p>98% of our projects are delivered on or before schedule.</p>
                  </div>
                </div>
                <div className="services-why__item">
                  <span className="services-why__check">✓</span>
                  <div>
                    <h4>Transparent Pricing</h4>
                    <p>No hidden costs — detailed estimates upfront with milestone billing.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" className="services-why__image">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=700&fit=crop"
                alt="Construction in progress"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta text-center">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Need Our <span className="text-orange">Services?</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Get a free consultation and quote for your project. We're just a call away.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:9509694042" className="btn btn-primary">📞 Call: 9509694042</a>
              <Link to="/contact" className="btn btn-outline">Get Free Quote →</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
