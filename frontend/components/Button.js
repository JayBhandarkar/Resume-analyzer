export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  disabled = false 
}) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-block text-center transform hover:scale-105 active:scale-95'
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md hover:shadow-lg disabled:bg-gray-100',
    white: 'bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl disabled:bg-gray-200'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-8 py-4 text-lg'
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100`}
    >
      {children}
    </button>
  )
}
