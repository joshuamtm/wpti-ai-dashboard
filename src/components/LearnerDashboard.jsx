import React, { useState } from 'react'
import {
  BookOpen, CheckCircle, Circle, Award, Target, Lightbulb,
  Users, MessageSquare, Download, ExternalLink, Shield,
  TrendingUp, Zap, Heart, Brain, Rocket, AlertCircle, Clock, FileText
} from 'lucide-react'
import SectionHeader from './SectionHeader'

const LearnerDashboard = ({ setActiveView }) => {
  const [activeSession, setActiveSession] = useState(1)

  const sessions = [
    {
      number: 1,
      title: 'AI Basics & Workforce Disruption',
      status: 'completed',
      date: 'October 31, 2025',
      topics: [
        'What is AI and how does it work?',
        'Probabilistic vs. Deterministic technology',
        'AI in workforce development context',
        'Data privacy and security basics',
        'Personal vs. Enterprise accounts'
      ],
      keyTakeaways: [
        '67% of participants already use AI daily',
        'No one is an "expert" - we learn together',
        'AI predicts the next word based on probability',
        'Personal accounts expose sensitive data',
        'Temperature settings control AI creativity'
      ],
      actionItems: [
        'Switch from personal to enterprise AI account',
        'Join the online community for peer learning',
        'Complete the "AI feelings" reflection exercise',
        'Identify 3 use cases in your workflow'
      ]
    },
    {
      number: 2,
      title: 'Prompting 101 & Putting AI to Work',
      status: 'completed',
      date: 'November 7, 2025',
      topics: [
        'Human+AI augmentation (Stanford H1-H5 framework)',
        'Workflow planning and analysis',
        'AI Packages (GPTs, Gems, Agents, Projects)',
        'Deep Research capabilities',
        'Exploratory Data Analysis with real datasets',
        'Google Notebook LM for document analysis'
      ],
      keyTakeaways: [
        'Think in workflows - break processes into discrete steps',
        'Augmentation beats automation for most use cases',
        'Create packages (GPTs/Gems) for repetitive prompts',
        'Clear instructions win - the drawing game proved it',
        'Notebook LM is best for policy Q&A (zero hallucinations)',
        'Practice is the best way to learn AI capabilities'
      ],
      actionItems: [
        'Map one organizational workflow using Post-its',
        'Create your first GPT/Gem/Agent for a repetitive task',
        'Try Notebook LM with organizational documents',
        'Practice EDA with a dataset from your work'
      ]
    },
    {
      number: 3,
      title: 'Responsible AI Practices & Vibe Coding',
      status: 'completed',
      date: 'November 14, 2025',
      topics: [
        'Cognitive biases (Anchoring, Sunk Cost, Confirmation)',
        'Circles of Control, Influence & Concern framework',
        'The Big Three AI Risks (Accuracy, Bias, Privacy)',
        'AI Trolley Problems and ethical decision-making',
        'Vibe coding with Bolt, Lovable, and Replit',
        'Product Requirements Documents (PRDs)',
        'Stateless application design principles'
      ],
      keyTakeaways: [
        '11 functional applications built in one hour',
        'Focus energy on what you can control and influence',
        'Accuracy, bias, privacy are within your control',
        'Always review AI outputs - "you are responsible"',
        'AI amplifies our cognitive biases',
        'Ask AI: "What am I missing?" to counter bias',
        'Build stateless apps only - no sensitive data storage',
        'Free apps are like free puppies - need ongoing care'
      ],
      actionItems: [
        'Review your organization\'s AI policy',
        'Try the Nonprofit AI Trolley Problem tool',
        'Build a simple app using the PRD prompt',
        'Test colleagues\' applications and provide feedback',
        'Develop a 5-slide pitch for Shark Tank (Session 4)'
      ]
    },
    {
      number: 4,
      title: 'Forging the Future: AI Adoption Strategy Challenge',
      status: 'completed',
      date: 'November 21, 2025',
      topics: [
        'Cross-organizational team strategy building',
        'Five organizational AI adoption scenarios',
        '90-day implementation playbooks',
        'Immediate Actions, Policy, Training, Sustainability',
        'Permissive with Guardrails approach',
        'Co-creation and psychological safety'
      ],
      keyTakeaways: [
        '5 organizational scenarios: Wild West, Locked Down, Patchwork Policy, Ready to Formalize, Post-Crisis',
        'Governance is foundational - establish formal AI task forces',
        'Start by listening - conduct surveys and appreciative inquiry',
        'Co-creation drives adoption - involve staff in policy drafting',
        'Aim for "permissive with guardrails" not outright bans',
        'Sustainability requires structure - quarterly reviews and permanent governance',
        'Build trust at human pace through psychological safety'
      ],
      actionItems: [
        'Identify which organizational scenario matches your reality',
        'Form or join your organization\'s AI task force',
        'Conduct an AI pulse check survey with staff',
        'Draft permissive AI policies with clear guardrails',
        'Establish quarterly policy review cadence'
      ]
    }
  ]

  const learningObjectives = [
    {
      icon: Brain,
      title: 'Understand AI Fundamentals',
      description: 'Grasp how AI works, its capabilities and limitations',
      progress: 85
    },
    {
      icon: Shield,
      title: 'Navigate Security & Privacy',
      description: 'Protect participant data and organizational information',
      progress: 75
    },
    {
      icon: Zap,
      title: 'Apply AI Practically',
      description: 'Use AI tools to improve efficiency in daily work',
      progress: 60
    },
    {
      icon: Users,
      title: 'Train Participants',
      description: 'Teach job seekers appropriate AI skills',
      progress: 25
    }
  ]

  const communityInsights = [
    {
      author: 'Carlton J.',
      role: 'Eagle Academy Foundation',
      insight: 'I use AI to create presentations with Gamma and mind maps with NotebookLM. Sent 13 emails in an hour using AI assistance!'
    },
    {
      author: 'Ariana B.',
      role: 'Co-Op Careers',
      insight: 'Teaching our college grads how NOT to over-use AI. They need to network, not just auto-apply to 100 jobs.'
    },
    {
      author: 'Workshop Participant',
      role: 'Workforce Professional',
      insight: 'I use AI to translate job descriptions for English language learners. Game changer for accessibility!'
    }
  ]

  const quickResources = [
    {
      category: 'AI Tools',
      items: [
        { name: 'ChatGPT', description: 'Most popular, 90% adoption', url: '#' },
        { name: 'Microsoft Copilot', description: 'Free in Microsoft 365', url: '#' },
        { name: 'Google Gemini', description: 'Integrated with Workspace', url: '#' },
        { name: 'NotebookLM', description: 'Mind mapping & podcasts', url: '#' }
      ]
    },
    {
      category: 'Learning Resources',
      items: [
        { name: 'Prompt Library', description: '50+ templates for workforce dev', url: '#' },
        { name: 'Data Privacy Guide', description: 'Protect participant information', url: '#' },
        { name: 'AI Ethics Checklist', description: 'Responsible AI use framework', url: '#' },
        { name: 'Community Forum', description: 'Connect with peer learners', url: '#' }
      ]
    }
  ]

  const selectedSession = sessions[activeSession - 1]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-navy mb-2">
          Your AI Learning Journey
        </h1>
        <p className="text-gray-600 text-lg mb-2">
          WPTI AI Training Workshop | 4-Session Series Complete!
        </p>
        <p className="text-turquoise font-semibold flex items-center">
          <Clock className="mr-2" size={18} />
          Office Hours: Wednesdays, 4-5 PM Eastern
        </p>
      </div>

      {/* Cohort Overview */}
      <div className="card mb-8 bg-gradient-to-r from-beige to-white border-2 border-turquoise">
        <div className="flex items-start">
          <Users className="text-turquoise mr-4 flex-shrink-0" size={40} />
          <div>
            <h2 className="text-2xl font-bold text-navy mb-3">About This Cohort</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              This intensive 4-week in-person training brought together 30 workforce development professionals from across New York City—career counselors, job developers, program managers, and organizational leaders—all committed to navigating the AI revolution with confidence and responsibility. Hosted by the <strong>Workforce Professionals Training Institute (WPTI)</strong> at <strong>Civic Hall, NYC</strong>, the series ran from October 31 to November 21, 2025.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Led by <strong>Joshua Peskay</strong> (Founder, Meet the Moment) and <strong>Kim Snyder</strong> (Co-facilitator), the cohort emphasized hands-on practice, ethical frameworks, and peer learning. Together, participants moved from uncertainty to mastery—building 11 functional applications, developing 90-day AI adoption strategies, and forming a community of practice committed to responsible AI implementation in workforce development.
            </p>
          </div>
        </div>
      </div>

      {/* Session Synopsis Banners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {/* Session 1 Synopsis */}
        <div className="card bg-gradient-to-r from-turquoise to-navy text-white hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveView('synopsis1')}>
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <FileText className="mr-3 flex-shrink-0" size={40} />
              <div>
                <h2 className="text-xl font-bold mb-1">Session 1 Synopsis</h2>
                <p className="text-sm text-turquoise-100">
                  AI Basics, CRAFT framework, and standout quotes
                </p>
              </div>
            </div>
            <ExternalLink size={24} className="text-turquoise-200 flex-shrink-0" />
          </div>
        </div>

        {/* Session 2 Synopsis */}
        <div className="card bg-gradient-to-r from-warmYellow to-turquoise text-white hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveView('synopsis2')}>
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <FileText className="mr-3 flex-shrink-0" size={40} />
              <div>
                <h2 className="text-xl font-bold mb-1">Session 2 Synopsis</h2>
                <p className="text-sm text-white/90">
                  Workflows, AI packages, robot drawing game & photos
                </p>
              </div>
            </div>
            <ExternalLink size={24} className="text-white/80 flex-shrink-0" />
          </div>
        </div>

        {/* Session 3 Synopsis */}
        <div className="card bg-gradient-to-r from-navy to-turquoise text-white hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveView('synopsis3')}>
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <Shield className="mr-3 flex-shrink-0" size={40} />
              <div>
                <h2 className="text-xl font-bold mb-1">Session 3 Synopsis</h2>
                <p className="text-sm text-turquoise-100">
                  Ethics, cognitive biases, trolley problems & 11 vibe-coded apps
                </p>
              </div>
            </div>
            <ExternalLink size={24} className="text-turquoise-200 flex-shrink-0" />
          </div>
        </div>

        {/* Session 4 Synopsis */}
        <div className="card bg-gradient-to-r from-warmYellow to-navy text-white hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveView('synopsis4')}>
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <Target className="mr-3 flex-shrink-0" size={40} />
              <div>
                <h2 className="text-xl font-bold mb-1">Session 4 Synopsis</h2>
                <p className="text-sm text-white/90">
                  AI adoption strategies, 5 organizational scenarios & 90-day playbooks
                </p>
              </div>
            </div>
            <ExternalLink size={24} className="text-white/80 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="card mb-8 bg-gradient-to-r from-navy to-turquoise text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Overall Progress</h2>
            <p className="text-turquoise-100">All 4 Sessions Complete! 🎉</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">100%</div>
            <p className="text-sm text-turquoise-100">of series complete</p>
          </div>
        </div>
        <div className="w-full bg-white/20 rounded-full h-4">
          <div className="bg-warmYellow h-4 rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="mb-8">
        <SectionHeader title="Your Learning Objectives" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {learningObjectives.map((obj, index) => {
            const Icon = obj.icon
            return (
              <div key={index} className="card">
                <Icon className="text-turquoise mb-3" size={32} />
                <h3 className="font-bold mb-2">{obj.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{obj.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-turquoise h-2 rounded-full transition-all duration-500"
                    style={{ width: `${obj.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{obj.progress}% complete</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Session Navigation */}
      <div className="mb-8">
        <SectionHeader title="Sessions" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {sessions.map((session) => (
            <button
              key={session.number}
              onClick={() => setActiveSession(session.number)}
              className={`card text-left transition-all ${activeSession === session.number
                ? 'border-2 border-turquoise bg-turquoise/5'
                : 'hover:border-turquoise/50'
                }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-navy">Session {session.number}</span>
                {session.status === 'completed' ? (
                  <CheckCircle className="text-success" size={24} />
                ) : (
                  <Circle className="text-gray-300" size={24} />
                )}
              </div>
              <h3 className="font-bold text-sm mb-1">{session.title}</h3>
              <p className="text-xs text-gray-600">{session.date}</p>
              <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${session.status === 'completed'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-600'
                }`}>
                {session.status === 'completed' ? 'Completed' : 'Upcoming'}
              </span>
            </button>
          ))}
        </div>

        {/* Session Details */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-navy">Session {selectedSession.number}</h3>
              <p className="text-gray-600">{selectedSession.title}</p>
            </div>
            <span className={`px-4 py-2 rounded-lg font-semibold ${selectedSession.status === 'completed'
              ? 'bg-green-100 text-green-800'
              : 'bg-blue-100 text-blue-800'
              }`}>
              {selectedSession.date}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Topics Covered */}
            <div>
              <h4 className="font-bold text-navy mb-3 flex items-center">
                <BookOpen className="mr-2 text-turquoise" size={20} />
                Topics Covered
              </h4>
              <ul className="space-y-2">
                {selectedSession.topics.map((topic, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Takeaways */}
            <div>
              <h4 className="font-bold text-navy mb-3 flex items-center">
                <Lightbulb className="mr-2 text-warmYellow" size={20} />
                Key Takeaways
              </h4>
              <ul className="space-y-2">
                {selectedSession.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <TrendingUp className="mr-2 mt-0.5 text-warmYellow flex-shrink-0" size={16} />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Items */}
          <div className="mt-6 p-4 bg-turquoise/10 rounded border border-turquoise">
            <h4 className="font-bold text-navy mb-3 flex items-center">
              <Target className="mr-2 text-turquoise" size={20} />
              Your Action Items
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedSession.actionItems.map((item, index) => (
                <label key={index} className="flex items-start cursor-pointer hover:bg-white/50 p-2 rounded transition-all">
                  <input type="checkbox" className="mt-1 mr-3 text-turquoise" />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Community Insights */}
      <div className="mb-8">
        <SectionHeader
          title={
            <span className="flex items-center">
              <MessageSquare className="mr-2 text-turquoise" size={28} />
              Community Insights
            </span>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {communityInsights.map((insight, index) => (
            <div key={index} className="card hover:shadow-lg transition-all">
              <div className="mb-3">
                <h4 className="font-bold text-sm">{insight.author}</h4>
                <p className="text-xs text-gray-600">{insight.role}</p>
              </div>
              <p className="text-sm italic">"{insight.insight}"</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://app.circle.so/wpti-ai-learning-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <MessageSquare className="mr-2" size={18} />
            Share Your Insight in Community
          </a>
        </div>
      </div>

      {/* Quick Resources */}
      <div className="mb-8">
        <SectionHeader title="Quick Resources" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {quickResources.map((category, index) => (
            <div key={index} className="card">
              <h3 className="font-bold text-lg mb-4 text-navy">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    className="flex items-start p-3 bg-gray-50 rounded hover:bg-turquoise/10 transition-all group"
                  >
                    <ExternalLink size={16} className="mr-3 mt-1 text-turquoise group-hover:text-navy transition-colors" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="card bg-gradient-to-r from-turquoise to-navy text-white">
        <div className="text-center py-8">
          <Rocket className="mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4">Congratulations! Series Complete!</h2>
          <p className="text-lg max-w-2xl mx-auto mb-4">
            You've completed all 4 sessions of the WPTI AI Learning Lab. You now have the foundational knowledge,
            practical skills, and strategic frameworks to lead AI adoption in your workforce development organization.
          </p>
          <p className="text-sm text-turquoise-100 mb-4">
            Continue practicing, join the community for ongoing support, and don't hesitate to reach out during Wednesday office hours!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://app.circle.so/wpti-ai-learning-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-warmYellow hover:bg-white text-navy px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <MessageSquare className="mr-2" size={18} />
              Join Community
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnerDashboard
