import React, { useState } from 'react'
import { GoChevronUp, GoChevronDown } from 'react-icons/go'
import { Pagination } from '../Pagination/Pagination'

interface Column<T> {
  header: string
  accessor: keyof T | ((row: T) => React.ReactNode)
  render?: (row: T) => React.ReactNode
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  itemsPerPage?: number
  classNames?: string
}

export const DataTable = <T extends Record<string, unknown>>({
  data,
  columns,
  classNames = '',
  itemsPerPage = 5
}: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<{ key: keyof T | null, direction: 'asc' | 'desc' } | null>(null)

  const sortedData = React.useMemo(() => {
    if (sortConfig !== null && sortConfig.key !== null) {
      const sorted = [...data].sort((a, b) => {
        const aValue = sortConfig.key !== null && typeof sortConfig.key === 'function' ? (sortConfig.key as (row: T) => React.ReactNode)(a) : a[sortConfig.key as keyof T]
        const bValue = sortConfig.key !== null && typeof sortConfig.key === 'function' ? (sortConfig.key as (row: T) => React.ReactNode)(b) : b[sortConfig.key as keyof T]

        if (aValue && bValue) {
          if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1
          }
          if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1
          }
        }
        return 0
      })
      return sorted
    }
    return data
  }, [data, sortConfig])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  // Handle sorting requests
  const requestSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const getSortIcon = (key: keyof T) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null
    }
    return sortConfig.direction === 'asc' ? <GoChevronUp /> : <GoChevronDown />
  }

  return (
    <div>
      <table className={`table-auto w-full ${classNames}`}>
        <thead>
          <tr>
            {columns.map((column, colIndex) => (
              <th
                key={colIndex}
                className="px-4 py-2 text-left cursor-pointer"
                onClick={() => requestSort(column.accessor as keyof T)}
            >
              <div className="flex items-center">
                {column.header}
                <span className="ml-2">{getSortIcon(column.accessor as keyof T)}</span>
              </div>
            </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="border px-4 py-2">
                  {typeof column.accessor === 'function'
                    ? column.accessor(item)
                    : item[column.accessor] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  )
}