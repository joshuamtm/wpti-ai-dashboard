import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import LearnerDashboard from './components/LearnerDashboard'
import ResearchContext from './components/ResearchContext'
import CaseStudy from './components/CaseStudy'
import Session1Synopsis from './components/Session1Synopsis'
import Session2Synopsis from './components/Session2Synopsis'
import Session3Synopsis from './components/Session3Synopsis'
import Session4Synopsis from './components/Session4Synopsis'
import TestimonialForm from './components/TestimonialForm'
import TestimonialConfirmation from './components/TestimonialConfirmation'
import AdminTestimonials from './components/AdminTestimonials'
import ProtectedRoute from './components/ProtectedRoute'
import { Users, Brain, Award, Menu, X } from 'lucide-react'

function Dashboard() {
  const [activeView, setActiveView] = useState('learner')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'learner', label: 'Learner View', icon: Users },
    { id: 'research', label: 'Research', icon: Brain },
    { id: 'casestudy', label: 'Case Study', icon: Award },
  ]

  const handleNavClick = (viewId) => {
    setActiveView(viewId)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-beige">
      {/* Navigation Toggle */}
      <div className="bg-navy text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-white">WPTI AI Training Dashboard</h1>
              <span className="hidden md:inline text-turquoise-dark text-sm font-medium">All 4 Sessions Complete! 🎉</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 h-full">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeView === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2 px-1 h-full border-b-4 transition-all ${isActive
                        ? 'border-turquoise text-white'
                        : 'border-transparent text-gray-300 hover:text-white hover:border-gray-500'
                      }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeView === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-3 w-full px-3 py-3 rounded-md text-base font-medium ${isActive
                        ? 'bg-turquoise text-white'
                        : 'text-gray-300 hover:bg-navy-dark hover:text-white'
                      }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Dashboard Content */}
      <main>
        {activeView === 'learner' && <LearnerDashboard setActiveView={setActiveView} />}
        {activeView === 'research' && <ResearchContext />}
        {activeView === 'casestudy' && <CaseStudy />}
        {activeView === 'synopsis1' && <Session1Synopsis onBack={() => setActiveView('learner')} />}
        {activeView === 'synopsis2' && <Session2Synopsis onBack={() => setActiveView('learner')} />}
        {activeView === 'synopsis3' && <Session3Synopsis onBack={() => setActiveView('learner')} />}
        {activeView === 'synopsis4' && <Session4Synopsis onBack={() => setActiveView('learner')} />}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How This Dashboard Was Made */}
          <div className="max-w-3xl mx-auto mb-6 pb-6 border-b border-gray-600">
            <h3 className="text-sm font-semibold text-turquoise mb-3 text-center">How This Dashboard Was Made</h3>
            <div className="text-xs text-gray-300 space-y-2">
              <p>
                <strong>Built with AI-assisted development:</strong> This dashboard was created using{' '}
                <a
                  href="https://claude.com/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-turquoise hover:underline"
                >
                  Claude Code
                </a>
                , demonstrating how AI can accelerate nonprofit technology development.
              </p>
              <p>
                <strong>Tools used:</strong> React 18, Vite, Tailwind CSS, Recharts for interactive visualizations
              </p>
              <p>
                <strong>Data sources:</strong> Sessions 1-4 polling data and transcript analysis (34 participants),
                11 vibe-coded applications from Session 3, AI adoption playbooks from Session 4, Wharton AI Adoption Report (800 enterprises),
                MIT State of AI in Business Report (300+ implementations)
              </p>
              <p>
                <strong>Latest update:</strong> Session 4 (November 21, 2025) - "Forging the Future" AI Adoption Strategy Challenge,
                5 organizational scenarios, 90-day playbooks, and strategic frameworks for responsible AI implementation.
              </p>
            </div>
          </div>

          {/* Attribution */}
          <div className="text-center">
            <p className="text-sm">
              Created by{' '}
              <a
                href="https://mtm.now"
                target="_blank"
                rel="noopener noreferrer"
                className="text-turquoise hover:underline font-semibold"
              >
                Meet the Moment
              </a>{' '}
              | Resilience for Nonprofits
            </p>
            <p className="text-xs text-gray-400 mt-2">
              © 2025 Meet the Moment. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/testimonial" element={<TestimonialForm />} />
        <Route path="/testimonial/confirmation" element={<TestimonialConfirmation />} />
        <Route
          path="/admin/testimonials"
          element={
            <ProtectedRoute>
              <AdminTestimonials />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
