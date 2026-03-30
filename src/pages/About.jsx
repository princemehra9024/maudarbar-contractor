import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedSection from '../components/AnimatedSection'
import TypewriterText from '../components/TypewriterText'
import shivrajImg from '../assets/shivraj.jpeg'
import storyImg from '../assets/all project/project-1.jpeg'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { icon: '🎯', title: 'Precision', desc: 'Every tile cut matters. We work with millimeter-level accuracy for flawless finishes.' },
  { icon: '💎', title: 'Quality', desc: 'Premium Italian marble, natural granite, and handpicked tiles in every project.' },
  { icon: '⏱️', title: 'Timeliness', desc: 'On-time delivery without compromising on quality standards.' },
  { icon: '🤝', title: 'Trust', desc: '15+ years of transparent and reliable partnerships.' },
  { icon: '🪨', title: 'Craftsmanship', desc: 'Expert artisans specializing in marble inlay, mosaic patterns, and designer tile work.' },
  { icon: '💡', title: 'Innovation', desc: 'Embracing modern technology — laser cutting, digital templating, and smart layouts.' },
]

const timeline = [
  { year: '2009', title: 'Foundation', desc: 'Mahu Darbar was established with a vision to deliver premium marble & tiles work across Rajasthan.' },
  { year: '2013', title: 'First Major Project', desc: 'Completed our first luxury villa marble flooring — Royal Heritage Residence.' },
  { year: '2016', title: 'Commercial Expansion', desc: 'Expanded into commercial marble & tiles contracting for hotels and showrooms.' },
  { year: '2019', title: '100+ Projects', desc: 'Reached a milestone of 100 completed marble & tiles projects across residential and commercial sectors.' },
  { year: '2022', title: 'Design Excellence Award', desc: 'Recognized for outstanding marble inlay design and premium tile installations.' },
  { year: '2024', title: '250+ Landmark Projects', desc: 'Continuing to deliver excellence with over 250 completed marble & tiles projects and growing.' },
]

const team = [
  { 
    name: 'Shivraj Mhera', 
    role: 'Founder & CEO', 
    image: shivrajImg, 
    desc: 'Managing all field operations and overseeing our expansive team of marble & tiles specialists. I ensure that every installation is executed to the highest standards of quality, precision, and craftsmanship.',
    experience: '15+ Years',
    projects: '250+'
  }
]

export default function About() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero__label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
      gsap.fromTo('.about-hero__title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
      gsap.fromTo('.about-hero__desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.8 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="about">
      {/* HERO */}
      <section ref={heroRef} className="about-hero">
        <div className="about-hero__bg"></div>
        <div className="container">
          <span className="about-hero__label section-label">About Us</span>
          <h1 className="about-hero__title">
            Marble & Tiles <span className="text-orange">Excellence</span><br />Since 2009
          </h1>
          <p className="about-hero__desc">
            Mahu Darbar has been transforming spaces with premium marble, granite, 
            and designer tiles for over 15 years. With a commitment to quality craftsmanship, 
            precision cutting, and timely delivery, we've built trust across Rajasthan.
          </p>
        </div>
      </section>

      {/* TEAM - SINGLE CARD (MOVED TO TOP) */}
      <section className="section about-team">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">Our Leadership</span>
            <h2 className="section-title">Meet the <span className="text-orange">Founder</span></h2>
          </AnimatedSection>
          
          <AnimatedSection className="about-team__single glass-card" animation="scaleUp">
            <div className="about-team__single-img">
              <img src={team[0].image} alt={team[0].name} />
            </div>
            <div className="about-team__single-info">
              <h3 className="about-team__single-name">{team[0].name}</h3>
              <p className="about-team__single-role">{team[0].role}</p>
              <div className="about-team__single-divider"></div>
              <p className="about-team__single-desc">{team[0].desc}</p>
              
              <div className="about-team__single-stats">
                <div className="stat">
                  <span className="stat-num">{team[0].experience}</span>
                  <span className="stat-label">Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-num">{team[0].projects}</span>
                  <span className="stat-label">Projects Led</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STORY */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story__grid">
            <AnimatedSection animation="fadeLeft" className="about-story__image">
              <img
                src={storyImg}
                alt="Mahu Darbar project site"
              />
              <div className="about-story__badge glass-card">
                <span className="about-story__badge-num">15+</span>
                <span className="about-story__badge-text">Years of Excellence</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" className="about-story__content">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">From Vision to <span className="text-orange">Reality</span></h2>
              <p>
                Founded in 2009, Mahu Darbar began as a small team with a big dream — 
                to redefine marble & tiles quality in Rajasthan. Over the years, we've grown into one 
                of the region's most trusted marble and tiles contractors.
              </p>
              <p>
                Our journey has been marked by milestones of innovation, from pioneering modern 
                marble inlay techniques to embracing laser-cut precision tile work. Today, with 
                over 250 completed projects, we continue to set new standards in marble & tiles contracting.
              </p>
              <div className="about-story__highlights">
                <div className="about-story__highlight">
                  <span className="about-story__highlight-num">250+</span>
                  <span>Projects</span>
                </div>
                <div className="about-story__highlight">
                  <span className="about-story__highlight-num">180+</span>
                  <span>Clients</span>
                </div>
                <div className="about-story__highlight">
                  <span className="about-story__highlight-num">50+</span>
                  <span>Experts</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section about-values">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">Our Core Values</span>
            <h2 className="section-title">What We <span className="text-orange">Stand For</span></h2>
          </AnimatedSection>
          <AnimatedSection className="about-values__grid" stagger>
            {values.map((v, i) => (
              <div key={i} className="about-value glass-card">
                <span className="about-value__icon">{v.icon}</span>
                <h4 className="about-value__title">{v.title}</h4>
                <p className="about-value__desc">{v.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* TIMELINE - HORIZONTAL */}
      <section className="section about-timeline">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">
               <TypewriterText words={['Visions into Reality', 'Building the Future', 'Crafting Excellence', 'Sustainable Spaces']} />
            </h2>
          </AnimatedSection>
          <div className="about-timeline__track">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} animation="scaleUp" className="about-timeline__item">
                <div className="about-timeline__connector">
                  <div className="about-timeline__dot"></div>
                  <div className="about-timeline__line"></div>
                </div>
                <div className="about-timeline__card glass-card">
                  <span className="about-timeline__year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
