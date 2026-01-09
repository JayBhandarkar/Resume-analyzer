export default function Card({ children, className = '', hover = true }) {
  const hoverClass = hover ? 'card-hover' : ''
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}
