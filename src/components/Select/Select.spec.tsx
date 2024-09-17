import { render, screen, fireEvent } from '@testing-library/react'
import { Select } from './Select'

describe('Select Component', () => {
  test('renders with default props', () => {
    render(<Select options={['Option 1', 'Option 2']} value="Option 1" onChange={jest.fn()} />)
    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toHaveValue('Option 1')
  })

  test('handles onChange event', () => {
    const handleChange = jest.fn()
    render(<Select options={['Option 1', 'Option 2']} value="Option 1" onChange={handleChange} />)
    const selectElement = screen.getByRole('combobox')
    fireEvent.change(selectElement, { target: { value: 'Option 2' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('renders with custom styles', () => {
    render(
      <Select
        options={['Option 1', 'Option 2']}
        value="Option 1"
        onChange={jest.fn()}
        className="bg-red-500 text-white"
      />
    )
    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toHaveClass('bg-red-500 text-white')
  })
})