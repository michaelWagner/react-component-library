import React, { useState } from 'react'

interface CheckboxProps {
  value?: boolean
  label: string
  disabled?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ disabled, label, value }) => {
  const [checked, setChecked] = useState(value || false)

  const handleCheckboxChange = () => {
    setChecked(!checked)
  }

  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-indigo-600 disabled:bg-gray-200 disabled:cursor-not-allowed"
      />
      <span>{label}</span>
    </label>
  )
}