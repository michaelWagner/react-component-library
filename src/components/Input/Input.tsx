import React, { useState } from 'react'

interface InputProps {
  placeholder?: string
  value: string
}

export const Input: React.FC<InputProps> = ({ placeholder, value }) => {
  const [modelValue, setModelValue] = useState(value)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelValue(e.target.value)
  }
  return (
    <input
      className="px-4 py-2 border border-gray-400 rounded"
      placeholder={placeholder}
      value={modelValue}
      onChange={onChange}
    />
  )
}