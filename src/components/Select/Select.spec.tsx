import { render, screen, fireEvent } from '@testing-library/react'
import { Select } from './Select'

describe('Select Component', () => {
  test('renders with default props', () => {
    render(<Select options={['Option 1', 'Option 2', 'Option 3']} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  test('opens and closes dropdown on click', () => {
    render(<Select options={['Option 1', 'Option 2', 'Option 3']} />)
    const selectButton = screen.getByRole('combobox')
    fireEvent.click(selectButton)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.click(selectButton)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  test('selects an option', () => {
    render(<Select options={['Option 1', 'Option 2', 'Option 3']} />)
    const selectButton = screen.getByRole('combobox')
    fireEvent.click(selectButton)

    // Use getAllByRole to get the list of options and click the desired one
    const options = screen.getAllByRole('option')
    fireEvent.click(options[1]) // Click on 'Option 2'

    expect(selectButton).toHaveTextContent('Option 2')
  })

  test('navigates options with keyboard', () => {
    render(<Select options={['Option 1', 'Option 2', 'Option 3']} />)
    const selectButton = screen.getByRole('combobox')
    fireEvent.click(selectButton)

    // Navigate down
    fireEvent.keyDown(selectButton, { key: 'ArrowDown' })
    expect(screen.getAllByRole('option')[1]).toHaveFocus()

    fireEvent.keyDown(screen.getAllByRole('option')[2], { key: 'ArrowDown' })
    expect(screen.getAllByRole('option')[2]).toHaveFocus()

    // Navigate up
    fireEvent.keyDown(screen.getAllByRole('option')[1], { key: 'ArrowUp' })
    expect(screen.getAllByRole('option')[1]).toHaveFocus()
  })

  test('applies custom styles', () => {
    const { container } = render(
      <Select
        options={['Option 1', 'Option 2', 'Option 3']}
        classNames="bg-red-500 text-white hover:bg-red-700"
      />
    )

    const selectButton = container.querySelector('div[role="combobox"]') as HTMLDivElement
    expect(selectButton).toHaveClass('bg-red-500')
    expect(selectButton).toHaveClass('text-white')

    fireEvent.click(selectButton)
    const dropdown = container.querySelector('div[role="listbox"]')
    expect(dropdown).toHaveClass('bg-red-500')
    expect(dropdown).toHaveClass('text-white')

    const option = screen.getAllByRole('option')[0]
    fireEvent.mouseOver(option)
    expect(option).toHaveClass('bg-gray-200')
  })

  test('disables the select', () => {
    render(<Select options={['Option 1', 'Option 2', 'Option 3']} disabled />)
    const selectButton = screen.getByRole('combobox')
    fireEvent.click(selectButton)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  test('displays a placeholder', () => {
    render(<Select options={['Option 1', 'Option 2', 'Option 3']} placeholder="Select an option" />)
    expect(screen.getByText('Select an option')).toBeInTheDocument()
  })

  test('displays a default value', () => {
    render(<Select options={['Option 1', 'Option 2', 'Option 3']} initialValue="Option 2" />)
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 2')
  })

  test('displays a default value with placeholder', () => {
    render(
      <Select options={['Option 1', 'Option 2', 'Option 3']} initialValue="Option 2" placeholder="Select an option" />
    )
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 2')
  })
})
