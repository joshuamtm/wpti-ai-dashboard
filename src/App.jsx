import { useState } from 'react'
import ExecutiveDashboard from './components/ExecutiveDashboard'
import LearnerDashboard from './components/LearnerDashboard'
import ResearchContext from './components/ResearchContext'
import Session1Synopsis from './components/Session1Synopsis'
import Session2Synopsis from './components/Session2Synopsis'
import Session3Synopsis from './components/Session3Synopsis'
import Session4Synopsis from './components/Session4Synopsis'
import { Users, Briefcase, Brain } from 'lucide-react'

function App() {
  const [activeView, setActiveView] = useState('learner')

  return (
    <div className="min-h-screen bg-beige">
      {/* Navigation Toggle */}
      <div className="bg-navy text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-white">WPTI AI Training Dashboard</h1>
              <span className="text-turquoise text-sm font-medium">All 4 Sessions Complete! 🎉</span>
            </div>

            <div className="flex space-x-2 bg-navy/50 rounded-lg p-1">
              <button
                onClick={() => setActiveView('executive')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  activeView === 'executive'
                    ? 'bg-turquoise text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Briefcase size={18} />
                <span>Executive View</span>
              </button>
              <button
                onClick={() => setActiveView('learner')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  activeView === 'learner'
                    ? 'bg-turquoise text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Users size={18} />
                <span>Learner View</span>
              </button>
              <button
                onClick={() => setActiveView('research')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  activeView === 'research'
                    ? 'bg-turquoise text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Brain size={18} />
                <span>Research</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <main>
        {activeView === 'executive' && <ExecutiveDashboard />}
        {activeView === 'learner' && <LearnerDashboard setActiveView={setActiveView} />}
        {activeView === 'research' && <ResearchContext />}
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

export default App
