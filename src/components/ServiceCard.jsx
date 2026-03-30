import './ServiceCard.css'

export default function ServiceCard({ icon, title, description, index }) {
  return (
    <div className="service-card glass-card" style={{ '--i': index }}>
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      <span className="service-card__number">{String(index + 1).padStart(2, '0')}</span>
    </div>
  )
}
