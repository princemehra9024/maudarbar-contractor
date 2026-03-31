import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow"></div>
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">◆</span>
              <div>
                <h3 className="footer__logo-name">Mahu Darbar</h3>
                <span className="footer__logo-tag">Marble & Tiles Contractor</span>
              </div>
            </div>
            <p className="footer__desc">
              Crafting excellence in marble, granite & tiles. Your vision, our expertise — 
              creating stunning floors and walls that stand the test of time.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/about" className="footer__link">About Us</Link>
            <Link to="/projects" className="footer__link">Projects</Link>
            <Link to="/services" className="footer__link">Services</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <span className="footer__link">Marble Flooring</span>
            <span className="footer__link">Commercial Tiling</span>
            <span className="footer__link">Granite & Stone Work</span>
            <span className="footer__link">Designer Tile Work</span>
            <span className="footer__link">Polishing & Restoration</span>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <a href="tel:9509694042" className="footer__link">
              📞 +91 9509694042
            </a>
            <a href="https://wa.me/919509694042" target="_blank" rel="noopener noreferrer" className="footer__link">
              💬 WhatsApp Chat
            </a>
            <span className="footer__link">📍 Rajasthan, India</span>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <div className="footer__seo-text">
              <strong>Our Expertise:</strong> Italian Marble Flooring, Granite Installation, Designer Tiles, Bathroom Tiling, Wall Cladding, Floor Polishing, Staircase Work, Commercial Stone Work, Residential Renovation.<br/>
              <strong>Service Areas:</strong> Jaipur, Udaipur, Jodhpur, Ajmer, Kishangarh, Makrana, and across Rajasthan.
            </div>
            <div className="footer__credits-row">
              <p>© {new Date().getFullYear()} Mahu Darbar — Marble & Tiles Contractor. All rights reserved.</p>
              <p className="footer__credit">Crafted with ◆ excellence</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
