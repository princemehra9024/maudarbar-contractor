import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import ImageModal from '../components/ImageModal'
import StatsCounter from '../components/StatsCounter'
import WhatsAppSection from '../components/WhatsAppSection'
import { videos, getEmbedUrl } from '../data/videoData'
import heroImg from '../assets/hero img.jpeg'
import proj1 from '../assets/all project/project-1.jpeg'
import proj2 from '../assets/all project/project-2.jpeg'
import proj3 from '../assets/all project/project-3.jpeg'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: '🪨', title: 'Marble Flooring', description: 'Premium Italian and Indian marble flooring installation with flawless finish and precision cutting.' },
  { icon: '🏢', title: 'Commercial Tiling', description: 'Large-scale tiles and marble work for hotels, showrooms, offices, and commercial spaces.' },
  { icon: '🔨', title: 'Renovation & Retiling', description: 'Transform your existing floors and walls with modern marble and designer tiles.' },
  { icon: '🎨', title: 'Designer Tile Work', description: 'Custom mosaic patterns, marble inlay, and designer tile installations for luxury spaces.' },
  { icon: '💎', title: 'Granite & Stone Work', description: 'Premium granite countertops, staircases, and natural stone cladding solutions.' },
  { icon: '🏠', title: 'Complete Contracting', description: 'End-to-end marble & tiles contracting — material sourcing to final polishing and handover.' },
]

const featuredProjects = [
  { title: 'Royal Heritage Villa', category: 'Marble Flooring', image: proj1, description: 'Complete Italian marble flooring with intricate border inlay work for a luxury villa.' },
  { title: 'Darbar Business Center', category: 'Commercial Tiling', image: proj2, description: 'Premium porcelain tiles and granite lobby installation for a commercial complex.' },
  { title: 'Garden View Apartments', category: 'Residential Tiles', image: proj3, description: 'Designer vitrified tiles and marble bathroom fittings for premium 3BHK apartments.' },
]

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero__tag', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.3 })
      gsap.fromTo('.hero__title', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
      gsap.fromTo('.hero__subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.9 })
      gsap.fromTo('.hero__actions', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.2 })
      gsap.fromTo('.hero__image', { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.4, delay: 0.4, ease: 'power2.out' })
      gsap.fromTo('.hero__scroll', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 2 })
      gsap.fromTo('.hero__orange-block', { scaleX: 0 }, { scaleX: 1, duration: 0.8, delay: 0.2, ease: 'power3.out', transformOrigin: 'left' })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="home">
      {/* HERO */}
      <section ref={heroRef} className="hero">
        <div className="hero__orange-block"></div>
        <div className="hero__grid container-wide">
          <div className="hero__content">
            <div className="hero__tag">
              <span className="hero__tag-line"></span>
              <span>Premium Marble & Tiles Contractor</span>
            </div>
            <h1 className="hero__title">
              We Craft<br />
              Your <span className="text-orange">Dream</span><br />
              Floors & Walls
            </h1>
            <p className="hero__subtitle">
              Mahu Darbar — Crafting excellence in every marble slab and tile. 
              Premium marble, granite & tiles contracting across Rajasthan.
            </p>
            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary">
                Explore Projects →
              </Link>
              <a href="https://wa.me/919509694042" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="hero__image">
            <img
              src={heroImg}
              alt="Construction Excellence"
            />
            <div className="hero__image-badge">
              <span className="hero__image-badge-num">15+</span>
              <span className="hero__image-badge-text">Years</span>
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter />

      {/* SERVICES */}
      <section className="section home-services">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our <span className="text-orange">Services</span></h2>
            <p className="section-subtitle">
              From material selection to final polishing, we offer comprehensive marble & tiles 
              contracting services tailored to your vision.
            </p>
          </AnimatedSection>

          <AnimatedSection className="home-services__grid" stagger>
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} index={i} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section home-projects">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Our Portfolio</span>
            <h2 className="section-title">Featured <span className="text-orange">Projects</span></h2>
            <p className="section-subtitle">
              Explore our latest masterpieces — each project tells a story of precision, 
              quality, and architectural brilliance.
            </p>
          </AnimatedSection>

          <AnimatedSection className="home-projects__grid" stagger>
            {featuredProjects.map((p, i) => (
              <ProjectCard key={i} {...p} onClick={() => setSelectedImage(p.image)} />
            ))}
          </AnimatedSection>

          <AnimatedSection className="home-projects__cta">
            <Link to="/projects" className="btn btn-outline">
              View All Projects →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="section home-videos">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Watch Our Work</span>
            <h2 className="section-title">Project <span className="text-orange">Walkthroughs</span></h2>
            <p className="section-subtitle">
              See the precision and quality of our marble & tiles work through cinematic project walkthroughs.
            </p>
          </AnimatedSection>

          <div className="home-videos__grid">
            {videos.slice(0, 2).map((v, i) => (
              <AnimatedSection key={v.id} delay={i * 0.1}>
                <div className="video-card">
                  <div className="video-card__content">
                    {activeVideo === v.id ? (
                      <iframe
                        src={`${getEmbedUrl(v)}&autoplay=1`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div 
                        className="video-card__thumbnail"
                        onClick={() => setActiveVideo(v.id)}
                      >
                        {/* Background blurred image */}
                        <img 
                          src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`} 
                          alt={v.title}
                          className="video-card__thumbnail-bg"
                        />
                        {/* Actual centered image */}
                        <div className="video-card__thumbnail-overlay">
                          <img 
                            src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`} 
                            alt={v.title}
                          />
                        </div>
                        <div className="video-card__play">
                          <span className="play-icon">▶</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="video-card__info">
                    <p className="video-card__category">{v.category}</p>
                    <h3 className="video-card__title">{v.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="home-videos__cta">
            <Link to="/projects#videos" className="btn btn-primary">
              Watch More Videos →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* WHATSAPP SECTION */}
      <WhatsAppSection />

      {/* CTA */}
      <section className="section home-cta">
        <div className="home-cta__bg"></div>
        <div className="container text-center">
          <AnimatedSection>
            <span className="section-label">Start Your Project</span>
            <h2 className="section-title">Ready to Build<br/>Your <span className="text-orange">Dream?</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
              Contact us today for a free consultation. Let's transform your space 
              with Mahu Darbar's marble & tiles expertise.
            </p>
            <div className="home-cta__buttons">
              <a href="tel:9509694042" className="btn btn-primary">
                Call: 9509694042
              </a>
              <Link to="/contact" className="btn btn-outline">
                Get Free Quote →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* MODAL */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  )
}
