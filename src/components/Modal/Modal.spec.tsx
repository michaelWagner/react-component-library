import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from './Modal'

// Mock `ReactDOM.createPortal` to render the modal content into the document body during testing
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (node: React.ReactNode) => node,
}))

describe('Modal Component', () => {
  test('renders when `isOpen` is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        Modal content
      </Modal>
    )

    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  test('does not render when `isOpen` is false', () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}} title="Test Modal">
        Modal content
      </Modal>
    )

    expect(container.firstChild).toBeNull()
  })

  test('calls `onClose` when close button is clicked', () => {
    const onClose = jest.fn()
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        Modal content
      </Modal>
    )

    const closeButton = screen.getByText('✕')
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('calls `onClose` when clicking outside the modal if `closeOnOutsideClick` is true', () => {
    const onClose = jest.fn()
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal" closeOnOutsideClick={true}>
        Modal content
      </Modal>
    )

    const overlay = screen.getByRole('presentation') // The modal-overlay
    fireEvent.mouseDown(overlay)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('does not call `onClose` when clicking outside the modal if `closeOnOutsideClick` is false', () => {
    const onClose = jest.fn()
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal" closeOnOutsideClick={false}>
        Modal content
      </Modal>
    )

    const overlay = screen.getByRole('presentation') // The modal-overlay
    fireEvent.mouseDown(overlay)

    expect(onClose).not.toHaveBeenCalled()
  })

  test('renders footer when provided', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal" footer="Modal Footer">
        Modal content
      </Modal>
    )

    expect(screen.getByText('Modal Footer')).toBeInTheDocument()
  })

  test('adds additional class names when `classNames` prop is provided', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={() => {}} classNames="extra-class">
        Modal content
      </Modal>
    )

    const modalContent = container.querySelector('.relative')
    expect(modalContent).toHaveClass('extra-class')
  })
})
