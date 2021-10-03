import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.scss'

export function Modal({ toggleModal, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.addEventListener('keydown', handleEsc)
    }
  })

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal()
    }
  }

  const handleEsc = (e) => {
    if (e.code === 'Escape') {
      toggleModal()
    }
  }

  return createPortal(
    <div className={s.backDrop} onClick={handleClose}>
      <div className={s.content}>{children}</div>
    </div>,
    document.getElementById('modal-root'),
  )
}
