import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input Component', () => {
  test('Input renders value', () => {
    render(<Input value="Cookies" placeholder="Search" />)

    // Check if the input element with the value 'Cookies' is in the document
    const inputElement = screen.getByDisplayValue('Cookies')
    expect(inputElement).toBeInTheDocument()
  })
  test('Input renders placeholder', () => {
    render(<Input value="Search" placeholder="Search" />)

    // Check if the input element with the placeholder 'Search' is in the document
    const inputElement = screen.getByPlaceholderText('Search')
    expect(inputElement).toBeInTheDocument()
  })

  test('Input renders label', () => {
    render(<Input value="Search" placeholder="Search" label="Search" />)

    // Check if the label element with the text 'Search' is in the document
    const labelElement = screen.getByText('Search')
    expect(labelElement).toBeInTheDocument()
  })

  test('Input is disabled', () => {
    render(<Input value="Search" placeholder="Search" disabled />)

    // Check if the input element is disabled
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeDisabled()
  })

  test('Input is enabled', () => {
    render(<Input value="Search" placeholder="Search" />)

    // Check if the input element is not disabled
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).not.toBeDisabled()
  })

  test('Input updates value', () => {
    render(<Input value="Cookies" placeholder="Search" />)

    // Check if the input element with the value 'Cookies' is in the document
    const inputElement = screen.getByDisplayValue('Cookies')
    expect(inputElement).toBeInTheDocument()

    fireEvent.change(inputElement, { target: { value: 'Milk' } })
    expect(inputElement).toHaveValue('Milk')
  })
})