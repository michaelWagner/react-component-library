import { render, screen } from '@testing-library/react'
import { DataTable } from './DataTable'

const data = [
  { id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@gmail.com', age: 25 },
  { id: 3, name: 'John Smith', email: 'john.smith@gmail.com', age: 30 }
]
const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
]

describe('DataTable Component', () => {
  test('renders with default props', () => {
    render(<DataTable data={data} columns={columns} />)

    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  test('renders with data', () => {
    render(<DataTable data={data} columns={columns} />)

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  test('renders with custom styles', () => {
    const { container } = render(<DataTable data={data} columns={columns} classNames="bg-red-500 text-white" />)
    const table = container.querySelector('table') as HTMLTableElement

    expect(table).toHaveClass('bg-red-500')
    expect(table).toHaveClass('text-white')
  })
})
