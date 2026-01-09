import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function AboutPage() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Advanced AI technology analyzes your resume against industry standards and job requirements.'
    },
    {
      icon: '🎯',
      title: 'Career Guidance',
      description: 'Get personalized advice tailored to your target job title and experience level.'
    },
    {
      icon: '📊',
      title: 'Skill Gap Analysis',
      description: 'Identify missing skills and competencies needed for your desired position.'
    },
    {
      icon: '🚀',
      title: 'Actionable Steps',
      description: 'Receive specific recommendations to improve your career prospects.'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'No signup required. Your data stays private and secure on your device.'
    },
    {
      icon: '⚡',
      title: 'Instant Results',
      description: 'Get comprehensive career advice in seconds, not days.'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Resumes Analyzed' },
    { number: '95%', label: 'User Satisfaction' },
    { number: '24/7', label: 'Available' },
    { number: '100%', label: 'Free to Use' }
  ]

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Resume Analyzer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Empowering job seekers with AI-driven career insights. Our platform helps you optimize your resume 
            and get personalized guidance for your dream job.
          </p>
          <Link href="/tool">
            <Button size="lg">
              Try Resume Analyzer →
            </Button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <Card className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We believe everyone deserves access to professional career guidance. Our AI-powered platform 
                democratizes career coaching by providing instant, personalized advice to help you succeed 
                in your job search.
              </p>
              <p className="text-gray-700">
                Whether you're a recent graduate, career changer, or seasoned professional, Resume Analyzer 
                helps you identify opportunities for improvement and provides actionable steps to achieve your goals.
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🎯</div>
              <p className="text-lg font-semibold text-gray-700">Helping You Land Your Dream Job</p>
            </div>
          </div>
        </Card>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Resume Analyzer?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
              <p className="text-gray-600">Upload your PDF resume or paste your resume text directly into our platform.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Specify Your Goals</h3>
              <p className="text-gray-600">Enter your target job title and years of experience for personalized analysis.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get AI Insights</h3>
              <p className="text-gray-600">Receive detailed career advice, skill gaps, and actionable next steps.</p>
            </div>
          </div>
        </Card>

        {/* Technology Section */}
        <Card className="mb-16 border-l-4 border-green-500">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🧠</div>
              <p className="text-lg font-semibold text-gray-700">Powered by Advanced AI</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Cutting-Edge Technology</h2>
              <p className="text-gray-700 mb-4">
                Our platform leverages Google's Gemini AI to provide sophisticated resume analysis and career guidance. 
                The AI understands industry trends, job requirements, and career progression patterns.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Natural language processing for resume analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Industry-specific job requirement matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Personalized career path recommendations
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who have improved their career prospects with Resume Analyzer
          </p>
          <Link href="/tool">
            <Button variant="white" size="lg">
              Analyze Your Resume Now →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}