import React from 'react'

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonVariant = 'primary' | 'secondary' | 'custom'

interface ButtonProps {
  children: React.ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
  customStyle?: string // For additional custom styles when 'custom' variant is used
  onClick?: () => void
}

// Define default styles for primary and secondary variants
const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2'

const sizeStyles = {
  small: 'text-sm px-2 py-1',
  medium: 'text-base px-4 py-2',
  large: 'text-lg px-6 py-3',
}

const variantStyles = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium', // Default size
  variant = 'primary', // Default variant
  customStyle = '',
  onClick,
}) => {
  const sizeClass = sizeStyles[size]
  const variantClass = variant === 'custom' ? customStyle : variantStyles[variant]

  return (
    <button
      className={`${baseStyles} ${sizeClass} ${variantClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
