import { render, screen } from '@testing-library/react'
import { Checkbox } from './Checkbox'

describe('Checkbox Component', () => {
  test('Checkbox renders label', () => {
    render(<Checkbox label="Checkbox" />)

    // Check if the label element with the text 'Checkbox' is in the document
    const labelElement = screen.getByText('Checkbox')
    expect(labelElement).toBeInTheDocument()
  })

  test('Checkbox is initially unchecked', () => {
    render(<Checkbox label="Checkbox" />)

    // Check if the input element is not checked
    const inputElement = screen.getByRole('checkbox')
    expect(inputElement).not.toBeChecked()
  })

  test('Checkbox is initially checked', () => {
    render(<Checkbox label="Checkbox" value />)

    // Check if the input element is checked
    const inputElement = screen.getByRole('checkbox')
    expect(inputElement).toBeChecked()
  })

  test('Checkbox is disabled', () => {
    render(<Checkbox label="Checkbox" disabled />)

    // Check if the input element is disabled
    const inputElement = screen.getByRole('checkbox')
    expect(inputElement).toBeDisabled()
  })
})