import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  const setup = (props = {}) => {
    const defaultProps = {
      totalItems: 50,
      itemsPerPage: 10,
      currentPage: 1,
      paginate: jest.fn(),
      ...props
    }
    return render(<Pagination {...defaultProps} />)
  }

  test('renders correct number of page buttons', () => {
    setup({ totalItems: 50, itemsPerPage: 10 })
    const pageButtons = screen.getAllByRole('button')
    expect(pageButtons.length).toBe(5) // 50 items, 10 per page = 5 pages
  })

  test('highlights the current page', () => {
    setup({ totalItems: 50, itemsPerPage: 10, currentPage: 3 })
    const currentPageButton = screen.getByText('3')
    expect(currentPageButton).toHaveClass('bg-blue-500')
  })

  test('triggers paginate function on button click', () => {
    const paginate = jest.fn()
    setup({ totalItems: 50, itemsPerPage: 10, currentPage: 1, paginate })
    const pageButton = screen.getByText('3')
    fireEvent.click(pageButton)
    expect(paginate).toHaveBeenCalledWith(3)
  })

  test('renders no buttons if there are no items', () => {
    setup({ totalItems: 0, itemsPerPage: 10 })
    const pageButtons = screen.queryAllByRole('button')
    expect(pageButtons.length).toBe(0)
  })

  test('renders one button if items fit on one page', () => {
    setup({ totalItems: 5, itemsPerPage: 10 })
    const pageButtons = screen.getAllByRole('button')
    expect(pageButtons.length).toBe(1) // 1 page since there are only 5 items
  })
})
