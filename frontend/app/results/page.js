'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function ResultsPage() {
  const router = useRouter()
  const [result, setResult] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem('currentResult')
    if (data) {
      setResult(JSON.parse(data))
    } else {
      router.push('/tool')
    }
  }, [router])

  const handleCopy = () => {
    if (!result?.advice) return
    
    const text = `Career Advice for ${result.jobTitle}\n\nSummary:\n${result.advice.summary}\n\nSkill Gaps:\n${result.advice.skillGaps?.map(s => `- ${s}`).join('\n') || 'None identified'}\n\nNext Steps:\n${result.advice.nextSteps?.map(s => `- ${s}`).join('\n') || 'None provided'}`
    
    navigator.clipboard.writeText(text)
    alert('Results copied to clipboard!')
  }

  const handleDownload = () => {
    if (!result?.advice) return
    
    const text = `Career Advice for ${result.jobTitle}\n\nSummary:\n${result.advice.summary}\n\nSkill Gaps:\n${result.advice.skillGaps?.map(s => `- ${s}`).join('\n') || 'None identified'}\n\nNext Steps:\n${result.advice.nextSteps?.map(s => `- ${s}`).join('\n') || 'None provided'}`
    
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `career-advice-${result.jobTitle.replace(/\s+/g, '-').toLowerCase()}.txt`
    a.click()
  }

  if (!result) {
    return (
      <div className="py-20 px-4 text-center">
        <div className="animate-spin text-4xl mb-4">⚙️</div>
        <p>Loading results...</p>
      </div>
    )
  }

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Career Advice</h1>
          <p className="text-gray-600">AI-powered insights for your career path</p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg inline-block">
            <p className="text-sm text-gray-600">Target Role: <span className="font-semibold text-blue-700">{result.jobTitle}</span></p>
            <p className="text-sm text-gray-600">Experience: <span className="font-semibold text-blue-700">{result.experience || '0'} years</span></p>
          </div>
        </div>

        {/* Summary */}
        <Card className="mb-6 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">💼</span> Career Summary
          </h2>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed">{result.advice?.summary || 'No summary available'}</p>
          </div>
        </Card>

        {/* Skill Gaps */}
        {result.advice?.skillGaps && result.advice.skillGaps.length > 0 && (
          <Card className="mb-6 border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">📈</span> Skills to Develop
            </h2>
            <ul className="space-y-3">
              {result.advice.skillGaps.map((skill, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                  <span className="text-yellow-600 mt-1 text-xl">•</span>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Next Steps */}
        {result.advice?.nextSteps && result.advice.nextSteps.length > 0 && (
          <Card className="mb-6 border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">🎯</span> Recommended Actions
            </h2>
            <ul className="space-y-3">
              {result.advice.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mt-1 text-xl">•</span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button onClick={handleCopy} variant="secondary">
            📋 Copy Results
          </Button>
          <Button onClick={handleDownload} variant="secondary">
            💾 Download Report
          </Button>
          <Link href="/tool">
            <Button variant="secondary">
              🔄 Get New Advice
            </Button>
          </Link>
          <Link href="/history">
            <Button variant="secondary">
              📚 View History
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
