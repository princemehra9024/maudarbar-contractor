import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      })
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0
      })
    }

    const manageHover = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, .project-card, .service-card, .btn')
      interactiveElements.forEach(el => {
        el.onmouseenter = () => {
          cursor.classList.add('cursor--hover')
          dot.classList.add('dot--hover')
        }
        el.onmouseleave = () => {
          cursor.classList.remove('cursor--hover')
          dot.classList.remove('dot--hover')
        }
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    
    // Check for interactive elements periodically to support dynamic routes
    const observer = new MutationObserver(manageHover)
    observer.observe(document.body, { childList: true, subtree: true })
    manageHover()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-dot" ref={dotRef}></div>
    </>
  )
}
