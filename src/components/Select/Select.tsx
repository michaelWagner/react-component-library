import React, { useEffect, useState, useRef } from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

interface CustomSelectProps {
  options: string[]
  classNames?: string
  placeholder?: string
  initialValue?: string
  disabled?: boolean
}

export const Select: React.FC<CustomSelectProps> = ({ options, classNames, placeholder, initialValue, disabled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<string | undefined>(initialValue)
  const [focusedIndex, setFocusedIndex] = useState(0)
  const optionRefs = useRef<(HTMLDivElement | null)[]>([])
  const selectRef = useRef<HTMLDivElement>(null)

  const handleSelect = (option: string) => {
    setValue(option)
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen)
      handleSelect(options[focusedIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (focusedIndex < options.length - 1) {
        setFocusedIndex((prevIndex) => prevIndex + 1)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (focusedIndex > 0) {
        setFocusedIndex((prevIndex) => prevIndex - 1)
      }
    }
  }

  // Close dropdown when clicking outside of the component
  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.focus()
    }
  }, [focusedIndex, isOpen])

  return (
    <div ref={selectRef} className="relative">
      <div
        className={
          `px-4 py-2 max-w-96 border border-gray-400 rounded cursor-pointer ${
          disabled && 'bg-gray-200 cursor-not-allowed'} ${
          classNames || ''
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className='flex justify-between'>
          {value && <span>{value}</span>}
          {!value && <span className='text-gray-400'>{placeholder || 'Select an option...'}</span>}
          <span className='flex items-center'>
            {isOpen ? <GoChevronUp /> : <GoChevronDown />}
          </span>
        </div>
      </div>

      {isOpen && !disabled && (
        <div
          className={`absolute w-full max-w-96 border border-gray-400 rounded bg-white ${classNames || ''}`}
          role="listbox"
          tabIndex={-1}
        >
          {options.map((option, idx) => (
            <div
              key={idx}
              ref={(el) => (optionRefs.current[idx] = el)}
              role="option"
              className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                classNames || ''} ${
                focusedIndex === idx ? 'bg-gray-200' : ''} ${
                value === option ? 'bg-gray-300' : ''} ${
                disabled && 'bg-gray-200 cursor-not-allowed'}
              }`}
              onClick={() => !disabled && handleSelect(option)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              aria-selected={value === option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}