import { useState, useEffect } from 'react'
import './TypewriterText.css'

export default function TypewriterText({ words = [], typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return

    const currentFullWord = words[currentWordIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentFullWord.length) {
          setCurrentText(currentFullWord.slice(0, currentText.length + 1))
        } else {
          // Finished typing the word, pause before deleting
          setTimeout(() => setIsDeleting(true), delayBetween)
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentFullWord.slice(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetween])

  return (
    <span className="typewriter-text">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  )
}
