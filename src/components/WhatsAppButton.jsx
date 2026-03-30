import { useState } from 'react'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`wa-widget ${expanded ? 'wa-widget--open' : ''}`}>
      {/* Expanded Box */}
      <div className="wa-box">
        <div className="wa-box__header">
          <div className="wa-box__header-left">
            <div className="wa-box__avatar">
              <svg viewBox="0 0 32 32" className="wa-box__avatar-icon">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.134 6.738 3.06 9.37L1.058 31.35l6.204-1.96A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.012-3.162 2.278-.844.178-1.946.32-5.656-1.216-4.746-1.964-7.8-6.776-8.036-7.09-.226-.314-1.896-2.524-1.896-4.814 0-2.29 1.2-3.416 1.626-3.882.426-.466.93-.584 1.24-.584.31 0 .62.002.89.016.286.014.67-.108.948.724.35 1.048.846 2.584.92 2.77.076.188.126.406.026.65-.1.252-.15.406-.296.626-.15.22-.314.49-.45.658-.148.18-.304.374-.13.734.174.36.77 1.272 1.654 2.062 1.136 1.016 2.094 1.33 2.39 1.478.296.148.468.124.64-.076.174-.2.744-.87.942-1.168.198-.298.396-.248.668-.148.272.1 1.724.814 2.02.962.296.148.494.222.568.346.074.124.074.724-.316 1.824z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h4 className="wa-box__name">Mahu Darbar</h4>
              <p className="wa-box__status">
                <span className="wa-box__status-dot"></span>
                Online — Typically replies instantly
              </p>
            </div>
          </div>
          <button className="wa-box__close" onClick={() => setExpanded(false)}>✕</button>
        </div>

        <div className="wa-box__body">
          <div className="wa-box__chat-bg">
            <div className="wa-box__message">
              <div className="wa-box__msg-bubble">
                <p>👋 Hello! Welcome to <strong>Mahu Darbar Construction</strong></p>
                <p>How can we help you today? We're ready to discuss your dream project!</p>
                <span className="wa-box__msg-time">Just now</span>
              </div>
            </div>
          </div>

          <div className="wa-box__actions">
            <a
              href="https://wa.me/919509694042?text=Hello%20Mahu%20Darbar!%20I%27m%20interested%20in%20your%20construction%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="wa-box__send-btn"
            >
              <svg viewBox="0 0 32 32" width="20" height="20">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.134 6.738 3.06 9.37L1.058 31.35l6.204-1.96A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.012-3.162 2.278-.844.178-1.946.32-5.656-1.216-4.746-1.964-7.8-6.776-8.036-7.09-.226-.314-1.896-2.524-1.896-4.814 0-2.29 1.2-3.416 1.626-3.882.426-.466.93-.584 1.24-.584.31 0 .62.002.89.016.286.014.67-.108.948.724.35 1.048.846 2.584.92 2.77.076.188.126.406.026.65-.1.252-.15.406-.296.626-.15.22-.314.49-.45.658-.148.18-.304.374-.13.734.174.36.77 1.272 1.654 2.062 1.136 1.016 2.094 1.33 2.39 1.478.296.148.468.124.64-.076.174-.2.744-.87.942-1.168.198-.298.396-.248.668-.148.272.1 1.724.814 2.02.962.296.148.494.222.568.346.074.124.074.724-.316 1.824z" fill="currentColor"/>
              </svg>
              Start Chat — 9509694042
            </a>
          </div>
        </div>
      </div>

      {/* Big Floating Button */}
      <button
        className="wa-fab"
        onClick={() => setExpanded(!expanded)}
        aria-label="Chat on WhatsApp"
      >
        <div className="wa-fab__inner">
          <svg viewBox="0 0 32 32" className="wa-fab__icon">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.134 6.738 3.06 9.37L1.058 31.35l6.204-1.96A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.012-3.162 2.278-.844.178-1.946.32-5.656-1.216-4.746-1.964-7.8-6.776-8.036-7.09-.226-.314-1.896-2.524-1.896-4.814 0-2.29 1.2-3.416 1.626-3.882.426-.466.93-.584 1.24-.584.31 0 .62.002.89.016.286.014.67-.108.948.724.35 1.048.846 2.584.92 2.77.076.188.126.406.026.65-.1.252-.15.406-.296.626-.15.22-.314.49-.45.658-.148.18-.304.374-.13.734.174.36.77 1.272 1.654 2.062 1.136 1.016 2.094 1.33 2.39 1.478.296.148.468.124.64-.076.174-.2.744-.87.942-1.168.198-.298.396-.248.668-.148.272.1 1.724.814 2.02.962.296.148.494.222.568.346.074.124.074.724-.316 1.824z" fill="currentColor"/>
          </svg>
          <span className="wa-fab__label">Chat Now</span>
        </div>
        <span className="wa-fab__pulse"></span>
        <span className="wa-fab__pulse wa-fab__pulse--delay"></span>
      </button>
    </div>
  )
}
