import React, { useState } from 'react'

interface InputProps {
  disabled?: boolean
  placeholder?: string
  value: string
  label?: string
}

export const Input: React.FC<InputProps> = ({ disabled, label, placeholder, value }) => {
  const [modelValue, setModelValue] = useState(value)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelValue(e.target.value)
  }
  return (
    <>
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}

      <input
        className="px-4 py-2 border border-gray-400 rounded text-gray-800 bg-white dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 disabled:bg-gray-200 disabled:cursor-not-allowed"
        disabled={disabled}
        aria-disabled={disabled}
        placeholder={placeholder}
        value={modelValue}
        onChange={onChange}
      />
    </>
  )
}