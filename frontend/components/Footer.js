import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📄</span>
              <span className="text-xl font-bold text-white">Resume Analyzer</span>
            </div>
            <p className="text-sm">
              AI-powered resume analysis to help you land your dream job.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tool" className="hover:text-white transition">
                  Analyze Resume
                </Link>
              </li>
              <li>
                <Link href="/history" className="hover:text-white transition">
                  History
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3">Project Info</h3>
            <p className="text-sm mb-2">
              Built with Next.js, Tailwind CSS, and Google Gemini AI
            </p>
            <p className="text-sm">
              Free • No signup required • Privacy-focused
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Resume Analyzer. Built for hackathons and demos.</p>
        </div>
      </div>
    </footer>
  )
}
