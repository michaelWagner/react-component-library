import React, { useState } from 'react'

interface Column {
  header: string
  accessor: string
}

interface DataTableProps {
  data: Record<string, unknown>[]
  columns: Column[]
  itemsPerPage?: number,
  classNames?: string
}

export const DataTable: React.FC<DataTableProps> = ({ data, columns, classNames, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div>
      <table className={`table-auto w-full ${classNames}`}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.header} className="px-4 py-2 text-left">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="border px-4 py-2">
                  {item[column.accessor] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}