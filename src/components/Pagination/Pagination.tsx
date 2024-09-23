import React from 'react'

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  paginate: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginate
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => paginate(page)}
          className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}