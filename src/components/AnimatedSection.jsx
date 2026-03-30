import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedSection({ children, className = '', animation = 'fadeUp', delay = 0, stagger = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger ? el.children : el

    const animations = {
      fadeUp: { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0 } },
      fadeDown: { from: { opacity: 0, y: -60 }, to: { opacity: 1, y: 0 } },
      fadeLeft: { from: { opacity: 0, x: -80 }, to: { opacity: 1, x: 0 } },
      fadeRight: { from: { opacity: 0, x: 80 }, to: { opacity: 1, x: 0 } },
      scaleUp: { from: { opacity: 0, scale: 0.85 }, to: { opacity: 1, scale: 1 } },
      fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
    }

    const anim = animations[animation] || animations.fadeUp

    gsap.fromTo(targets, anim.from, {
      ...anim.to,
      duration: 1,
      delay,
      ease: 'power3.out',
      stagger: stagger ? 0.15 : 0,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill()
      })
    }
  }, [animation, delay, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
