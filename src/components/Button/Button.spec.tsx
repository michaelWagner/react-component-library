import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  test('renders with default props', () => {
    render(<Button>Click Me</Button>)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('bg-blue-500')
  })

  test('applies custom style for custom variant', () => {
    render(
      <Button variant="custom" customStyle="bg-green-500 text-black">
        Custom Button
      </Button>
    )
    const buttonElement = screen.getByRole('button', { name: /custom button/i })
    expect(buttonElement).toHaveClass('bg-green-500 text-black')
  })

  test('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const buttonElement = screen.getByRole('button', { name: /secondary button/i })
    expect(buttonElement).toHaveClass('bg-gray-500')
  })

  test('renders with different sizes', () => {
    render(<Button size="large">Large Button</Button>)
    const buttonElement = screen.getByRole('button', { name: /large button/i })
    expect(buttonElement).toHaveClass('text-lg px-6 py-3')
  })

  test('handles onClick event', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})