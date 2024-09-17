import { render, screen } from '@testing-library/react'
import { Input } from './Input'

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