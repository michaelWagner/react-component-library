import React from 'react'

interface SelectProps {
  options: string[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange }) =>{
  return (
    <select
      className="px-4 py-2 border border-gray-400 rounded"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}