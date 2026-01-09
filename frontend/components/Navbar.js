import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">📄</span>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Resume Analyzer</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/tool" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
              Analyze
            </Link>
            <Link href="/history" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
              History
            </Link>
            <Link 
              href="/tool" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
