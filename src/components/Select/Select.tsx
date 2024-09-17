import React, { useEffect, useState, useRef } from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

interface CustomSelectProps {
  options: string[]
  classNames?: string
}

export const Select: React.FC<CustomSelectProps> = ({ options, classNames }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(options[0])
  const [focusedIndex, setFocusedIndex] = useState(0)
  const optionRefs = useRef<(HTMLDivElement | null)[]>([])

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

  useEffect(() => {
    if (isOpen && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.focus()
    }
  }, [focusedIndex, isOpen])

  return (
    <div className="relative">
      <div
        className={`px-4 py-2 max-w-96 border border-gray-400 rounded cursor-pointer ${classNames || ''}`}
        onClick={() => setIsOpen(!isOpen)}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className='flex justify-between'>
          <span>
            {value}
          </span>
          <span className='flex items-center'>
            {isOpen ? <GoChevronUp /> : <GoChevronDown />}
          </span>
        </div>
      </div>

      {isOpen && (
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
                focusedIndex === idx ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleSelect(option)}
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