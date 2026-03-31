import './ImageModal.css'
import { createPortal } from 'react-dom'

export default function ImageModal({ image, onClose }) {
  if (!image) return null

  return createPortal(
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={e => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>×</button>
        <img src={image} alt="Full screen preview" />
      </div>
    </div>,
    document.body
  )
}
