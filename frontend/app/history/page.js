'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function HistoryPage() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('resumeHistory')
    if (data) {
      setHistory(JSON.parse(data))
    }
  }, [])

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to clear all history?')) {
      localStorage.removeItem('resumeHistory')
      setHistory([])
    }
  }

  const handleViewResult = (result) => {
    localStorage.setItem('currentResult', JSON.stringify(result))
  }

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Career Advice History</h1>
            <p className="text-gray-600">View your previous career consultations</p>
          </div>
          {history.length > 0 && (
            <Button onClick={handleClearHistory} variant="secondary">
              🗑️ Clear History
            </Button>
          )}
        </div>

        {history.length === 0 ? (
          <Card className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-semibold mb-2">No History Yet</h2>
            <p className="text-gray-600 mb-6">
              Your career advice sessions will appear here
            </p>
            <Link href="/tool">
              <Button>Get Your First Career Advice</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <Card key={item.id} className="hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold">{item.fileName}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {item.jobTitle}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {new Date(item.timestamp).toLocaleString()} • {item.experience || '0'} years experience
                    </p>
                    {item.advice?.summary && (
                      <p className="text-gray-700 text-sm line-clamp-2">
                        {item.advice.summary.substring(0, 150)}...
                      </p>
                    )}
                  </div>
                  <Link href="/results" onClick={() => handleViewResult(item)}>
                    <Button variant="secondary">
                      View Details →
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
