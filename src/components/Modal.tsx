import React, { useRef, useEffect, ReactNode } from 'react'
import '../styles/css/modalpop.css'

interface ModalProps {
  onClose: () => any
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  return (
    <div className="modalpopup">
      <div className="modal-content" ref={modalRef}>
        {children}
      </div>
    </div>
  )
}

export default Modal
