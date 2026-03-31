import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import ImageModal from '../components/ImageModal'
import { videos, getEmbedUrl, getSrcDoc } from '../data/videoData'
import './Projects.css'

const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Interior']

import proj1 from '../assets/all project/project-1.jpeg'
import proj2 from '../assets/all project/project-2.jpeg'
import proj3 from '../assets/all project/project-3.jpeg'
import proj4 from '../assets/all project/project-4.jpeg'
import proj5 from '../assets/all project/project-5.jpeg'
import proj7 from '../assets/all project/project-7.jpeg'
import proj8 from '../assets/all project/project-8.jpeg'
import proj9 from '../assets/all project/project-9.jpeg'
import proj10 from '../assets/all project/project-10.jpeg'
import proj11 from '../assets/all project/project-11.jpeg'

const allProjects = [
  { title: 'Royal Heritage Villa', category: 'Residential', image: proj1, description: 'Luxury 5-bedroom villa with Rajasthani architecture and modern amenities.' },
  { title: 'Darbar Business Center', category: 'Commercial', image: proj2, description: 'Modern 12-story commercial complex with premium office spaces.' },
  { title: 'Garden View Apartments', category: 'Residential', image: proj3, description: 'Premium 3BHK apartments with landscaped gardens and rooftop amenities.' },
  { title: 'Sunrise Mall Renovation', category: 'Renovation', image: proj4, description: 'Complete renovation of 50,000 sq ft retail space with modern design.' },
  { title: 'Lakeview Bungalows', category: 'Residential', image: proj5, description: 'Exclusive lakeside bungalows with panoramic views and private gardens.' },
  { title: 'Palace Hotel Interiors', category: 'Interior', image: proj7, description: 'Royal-themed hotel interior design with traditional Rajasthani motifs.' },
  { title: 'Emerald Residences', category: 'Residential', image: proj8, description: 'Modern townhouses with energy-efficient design and smart home systems.' },
  { title: 'Heritage Haveli Restoration', category: 'Renovation', image: proj9, description: 'Careful restoration of a 200-year-old haveli preserving historical charm.' },
  { title: 'Luxury Penthouse Designs', category: 'Interior', image: proj10, description: 'Ultra-luxury penthouse interiors with imported marble and custom fixtures.' },
  { title: 'City Center Mall', category: 'Commercial', image: proj11, description: 'Mega shopping mall with 200+ retail outlets and entertainment zone.' }
]


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)
  const heroRef = useRef(null)

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-hero__label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
      gsap.fromTo('.projects-hero__title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
      gsap.fromTo('.projects-hero__desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.8 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="projects">
      {/* HERO */}
      <section ref={heroRef} className="projects-hero">
        <div className="projects-hero__bg"></div>
        <div className="container">
          <span className="projects-hero__label section-label">Our Portfolio</span>
          <h1 className="projects-hero__title">
            Masterpieces of <span className="text-orange">Construction</span>
          </h1>
          <p className="projects-hero__desc">
            Each project reflects our commitment to excellence, innovation, and 
            architectural brilliance. Browse our portfolio of completed works.
          </p>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="section projects-gallery">
        <div className="container">
          <AnimatedSection className="projects-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`projects-filter ${activeFilter === cat ? 'projects-filter--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <div className="projects-grid">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} animation="scaleUp" delay={i * 0.05}>
                <ProjectCard {...p} onClick={() => setSelectedImage(p.image)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO GALLERY SECTION */}
      <section id="videos" className="section projects-videos">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Video Portfolio</span>
            <h2 className="section-title">Case Study <span className="text-orange">Videos</span></h2>
            <p className="section-subtitle">
              Take a cinematic journey through our landmark projects with these video walkthroughs.
            </p>
          </AnimatedSection>

          <div className="videos-grid">
            {videos.map((v, i) => (
              <AnimatedSection key={v.id} delay={i * 0.1}>
                <div className="video-card">
                  <div className="video-card__content">
                    <iframe
                      src={getEmbedUrl(v)}
                      srcDoc={getSrcDoc(v)}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="video-card__info">
                    <p className="video-card__category">{v.category}</p>
                    <h3 className="video-card__title">{v.title}</h3>
                    <p className="video-card__desc">{v.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section projects-cta">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="section-title">Have a Project in <span className="text-orange">Mind?</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Let's discuss your vision. Contact us for a free consultation and project estimate.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919509694042" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                💬 Discuss on WhatsApp
              </a>
              <a href="tel:9509694042" className="btn btn-outline">
                📞 Call: 9509694042
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MODAL */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  )
}
