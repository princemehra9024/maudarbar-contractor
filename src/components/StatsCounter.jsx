import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './StatsCounter.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 250, suffix: '+', label: 'Projects Completed' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 180, suffix: '+', label: 'Happy Clients' },
  { value: 50, suffix: '+', label: 'Expert Workers' },
]

export default function StatsCounter() {
  const sectionRef = useRef(null)
  const countRefs = useRef([])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        countRefs.current.forEach((ref, i) => {
          if (ref) {
            gsap.fromTo(ref, 
              { innerText: 0 },
              {
                innerText: stats[i].value,
                duration: 2,
                ease: 'power2.out',
                snap: { innerText: 1 },
                delay: i * 0.15,
              }
            )
          }
        })
      },
      once: true,
    })
  }, [])

  return (
    <section ref={sectionRef} className="stats section">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <div key={i} className="stats__item">
              <div className="stats__number">
                <span ref={el => countRefs.current[i] = el}>0</span>
                <span className="stats__suffix">{stat.suffix}</span>
              </div>
              <p className="stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
