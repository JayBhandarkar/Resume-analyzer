'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">📄</span>
            <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Resume Analyzer</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/tool" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
              Analyze
            </Link>
            <Link href="/history" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
              History
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
              About
            </Link>
            <Link 
              href="/tool" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-3">
            <Link 
              href="/tool" 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Analyze
            </Link>
            <Link 
              href="/history" 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              History
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/tool" 
              className="block mx-4 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
