import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Home() {
  const features = [
    {
      title: 'AI Career Guidance',
      description: 'Get personalized career advice based on your resume and target role',
      icon: '🤖'
    },
    {
      title: 'Skill Gap Analysis',
      description: 'Identify missing skills and competencies for your desired position',
      icon: '📊'
    },
    {
      title: 'Actionable Recommendations',
      description: 'Receive specific next steps to advance your career goals',
      icon: '🎯'
    },
    {
      title: 'Industry Insights',
      description: 'Understand what employers are looking for in your field',
      icon: '💼'
    },
    {
      title: 'Career Path Planning',
      description: 'Get guidance on how to progress in your chosen career',
      icon: '🗺️'
    },
    {
      title: 'Free & Private',
      description: 'No signup required. Your data stays private and secure',
      icon: '🔒'
    }
  ]

  const steps = [
    { number: '1', title: 'Upload Resume', description: 'Upload your resume and specify your target job title' },
    { number: '2', title: 'AI Analysis', description: 'Our AI analyzes your background against job requirements' },
    { number: '3', title: 'Get Advice', description: 'Receive personalized career guidance and next steps' }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Get AI-Powered Career Advice
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-3 md:mb-4 px-4 lg:px-0">
                Upload your resume and get personalized career guidance. Discover skill gaps, next steps, and actionable advice for your dream job.
              </p>
              <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8 px-4 lg:px-0">
                No signup required • Free to use • Results in seconds
              </p>
              <Link href="/tool">
                <Button size="lg">
                  Try Now - It's Free →
                </Button>
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="/resume-sample.png" 
                  alt="Resume Sample" 
                  className="w-64 sm:w-80 h-auto hover:animate-spin-horizontal shadow-2xl rounded-lg hover:shadow-3xl hover:glow-effect transition-all duration-300"
                />
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transform rotate-12 animate-pulse">
                  HIRED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors px-4">{step.title}</h3>
                <p className="text-gray-600 px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <div className="text-3xl md:text-4xl mb-4 transform hover:scale-125 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
            Join thousands of professionals who have received personalized career guidance
          </p>
          <Link href="/tool">
            <Button variant="white" size="lg">
              Get Started Now →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
