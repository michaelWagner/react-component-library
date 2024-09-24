import React, { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  footer?: ReactNode
  classNames?: string
  closeOnOutsideClick?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  classNames,
  closeOnOutsideClick = true}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
     if (closeOnOutsideClick && isOpen && (event.target as Element).classList.contains('modal-overlay')) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose, closeOnOutsideClick])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

      <div className={`relative bg-white p-6 rounded-lg shadow-lg z-10 ${classNames}`}>
        <div>
          {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 hover:text-gray-500"
          >
            &#x2715;
          </button>

        </div>
        <div className='mb-4'>{children}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
    , document.body
  )
}
  