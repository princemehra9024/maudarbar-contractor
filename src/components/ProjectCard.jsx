import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProjectCard.css'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectCard({ image, onClick }) {
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 20, // Travel down as you scroll
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="project-card" onClick={() => onClick && onClick(image)}>
      <div 
        ref={imageRef}
        className="project-card__image" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="project-card__zoom">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
