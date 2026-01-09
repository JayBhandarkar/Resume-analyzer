'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import Card from '@/components/Card'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function ToolPage() {
  const router = useRouter()
  const [inputMode, setInputMode] = useState('upload') // 'upload' or 'text'
  const [file, setFile] = useState(null)
  const [text, setText] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [experience, setExperience] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile)
      setError('')
    } else {
      alert('Please upload a PDF file')
    }
  }

  const handleAnalyze = async () => {
    if (inputMode === 'upload' && !file) {
      setError('Please upload a resume file')
      return
    }
    if (inputMode === 'text' && !text.trim()) {
      setError('Please paste your resume text')
      return
    }
    if (!jobTitle.trim()) {
      setError('Please enter a job title')
      return
    }

    setLoading(true)
    setError('')

    try {
      let resumeText = text
      
      // If file upload mode, first upload the file
      if (inputMode === 'upload' && file) {
        const formData = new FormData()
        formData.append('resume', file)
        
        const uploadResponse = await fetch(`${API_URL}/upload-resume`, {
          method: 'POST',
          body: formData
        })
        
        if (!uploadResponse.ok) {
          throw new Error('Failed to upload resume')
        }
        
        const uploadResult = await uploadResponse.json()
        resumeText = uploadResult.resumeText
      }
      
      // Get career advice
      const adviceResponse = await fetch(`${API_URL}/career-advice`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          resumeText,
          jobTitle,
          experience: experience || '0'
        })
      })
      
      if (!adviceResponse.ok) {
        throw new Error('Failed to get career advice')
      }
      
      const adviceResult = await adviceResponse.json()
      
      // Create result object
      const result = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        fileName: inputMode === 'upload' ? file.name : 'Text Input',
        jobTitle,
        experience,
        advice: adviceResult.advice
      }
      
      // Save to history
      const history = JSON.parse(localStorage.getItem('resumeHistory') || '[]')
      history.unshift(result)
      localStorage.setItem('resumeHistory', JSON.stringify(history.slice(0, 10)))
      localStorage.setItem('currentResult', JSON.stringify(result))
      
      router.push('/results')
    } catch (err) {
      console.error('Analysis error:', err)
      setError(err.message || 'Failed to analyze resume. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Analyze Your Resume</h1>
          <p className="text-gray-600">Upload your resume or paste the text to get instant AI-powered feedback</p>
        </div>

        <Card>
          {/* Input Mode Toggle */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setInputMode('upload')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition ${
                inputMode === 'upload'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📄 Upload File
            </button>
            <button
              onClick={() => setInputMode('text')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition ${
                inputMode === 'text'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📝 Paste Text
            </button>
          </div>

          {/* Upload Mode */}
          {inputMode === 'upload' && (
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">
                Upload Resume (PDF)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">📎</div>
                  <p className="text-gray-600 mb-1 font-medium">
                    {file ? file.name : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-sm text-gray-500">PDF files only</p>
                </label>
              </div>
            </div>
          )}

          {/* Text Mode */}
          {inputMode === 'text' && (
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">
                Paste Resume Text
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your resume content here..."
                className="w-full h-64 p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none hover:border-gray-400"
              />
            </div>
          )}

          {/* Job Details */}
          <div className="mb-6 grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Target Job Title *
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g., Software Engineer, Data Analyst"
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Years of Experience
              </label>
              <input
                type="number"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="0"
                min="0"
                max="50"
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Analyze Button */}
          <Button
            onClick={handleAnalyze}
            disabled={loading}
            fullWidth
            size="lg"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⚙️</span>
                Analyzing...
              </span>
            ) : (
              'Analyze Resume'
            )}
          </Button>

          {/* Info */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <p className="text-sm text-gray-700">
              <strong>💡 Tip:</strong> For best results, ensure your resume includes contact info, work experience, education, and skills sections.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
