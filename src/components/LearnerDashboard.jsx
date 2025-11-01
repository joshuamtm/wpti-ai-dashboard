import React, { useState } from 'react'
import {
  BookOpen, CheckCircle, Circle, Award, Target, Lightbulb,
  Users, MessageSquare, Download, ExternalLink, Shield,
  TrendingUp, Zap, Heart, Brain, Rocket, AlertCircle
} from 'lucide-react'

const LearnerDashboard = () => {
  const [activeSession, setActiveSession] = useState(1)

  const sessions = [
    {
      number: 1,
      title: 'AI Basics & Workforce Disruption',
      status: 'completed',
      date: 'November 1, 2025',
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
      resources: [
        { title: 'Session 1 Slides', type: 'PDF', icon: 'Download' },
        { title: 'Otter.ai Transcript', type: 'Text', icon: 'Download' },
        { title: 'ChatGPT Getting Started', type: 'Link', icon: 'ExternalLink' },
        { title: 'Data Privacy Guidelines', type: 'PDF', icon: 'Download' }
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
      status: 'upcoming',
      date: 'November 8, 2025',
      topics: [
        'Effective prompt engineering techniques',
        'Iteration and refinement strategies',
        'Context and specificity in prompts',
        'Using AI as a thought partner',
        'Practical applications for your role'
      ],
      keyTakeaways: [
        'Coming after Session 2...'
      ],
      resources: [
        { title: 'Prompt Library Template', type: 'Template', icon: 'Download' },
        { title: 'Iteration Framework', type: 'Guide', icon: 'Download' }
      ],
      actionItems: [
        'Build your personal prompt library',
        'Practice iteration with 3 real tasks',
        'Share successful prompts with peers'
      ]
    },
    {
      number: 3,
      title: 'Risk, Responsibility & Ethics',
      status: 'upcoming',
      date: 'November 15, 2025',
      topics: [
        'AI bias and fairness considerations',
        'Environmental impact of AI',
        'Participant data protection',
        'AI detection and authenticity',
        'Organizational policy development'
      ],
      keyTakeaways: [
        'Coming after Session 3...'
      ],
      resources: [
        { title: 'AI Ethics Checklist', type: 'Checklist', icon: 'Download' },
        { title: 'Policy Template', type: 'Template', icon: 'Download' }
      ],
      actionItems: [
        'Review your organization\'s AI policy',
        'Create a "safe to use AI" decision tree',
        'Discuss ethics with your team'
      ]
    },
    {
      number: 4,
      title: 'Organizational Readiness & Implementation',
      status: 'upcoming',
      date: 'November 22, 2025',
      topics: [
        'Building AI literacy programs',
        'Training participants effectively',
        'Change management strategies',
        'Platform selection and rollout',
        'Measuring impact and outcomes'
      ],
      keyTakeaways: [
        'Coming after Session 4...'
      ],
      resources: [
        { title: 'Implementation Roadmap', type: 'Template', icon: 'Download' },
        { title: 'Training Curriculum', type: 'Curriculum', icon: 'Download' }
      ],
      actionItems: [
        'Draft your AI adoption plan',
        'Identify organizational champions',
        'Create participant training materials'
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
      insight: 'I use AI to create presentations with Gamma and mind maps with NotebookLM. Sent 13 emails in an hour using AI assistance!',
      likes: 15
    },
    {
      author: 'Ariana B.',
      role: 'Co-Op Careers',
      insight: 'Teaching our college grads how NOT to over-use AI. They need to network, not just auto-apply to 100 jobs.',
      likes: 12
    },
    {
      author: 'Workshop Participant',
      role: 'Workforce Professional',
      insight: 'I use AI to translate job descriptions for English language learners. Game changer for accessibility!',
      likes: 10
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
        <p className="text-gray-600 text-lg">
          WPTI AI Training Workshop | 4-Session Series | Track Your Progress
        </p>
      </div>

      {/* Progress Overview */}
      <div className="card mb-8 bg-gradient-to-r from-navy to-turquoise text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Overall Progress</h2>
            <p className="text-turquoise-100">Session 1 of 4 Complete</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">25%</div>
            <p className="text-sm text-turquoise-100">of series complete</p>
          </div>
        </div>
        <div className="w-full bg-white/20 rounded-full h-4">
          <div className="bg-warmYellow h-4 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Your Learning Objectives</h2>
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
        <h2 className="text-2xl font-bold text-navy mb-4">Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {sessions.map((session) => (
            <button
              key={session.number}
              onClick={() => setActiveSession(session.number)}
              className={`card text-left transition-all ${
                activeSession === session.number
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
              <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${
                session.status === 'completed'
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
            <span className={`px-4 py-2 rounded-lg font-semibold ${
              selectedSession.status === 'completed'
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

          {/* Resources */}
          <div className="mt-6">
            <h4 className="font-bold text-navy mb-3 flex items-center">
              <Download className="mr-2 text-navy" size={20} />
              Session Resources
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedSession.resources.map((resource, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-all"
                >
                  <div className="flex items-center">
                    {resource.icon === 'Download' ? (
                      <Download size={16} className="mr-2 text-turquoise" />
                    ) : (
                      <ExternalLink size={16} className="mr-2 text-turquoise" />
                    )}
                    <span className="text-sm font-medium">{resource.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">{resource.type}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Community Insights */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <MessageSquare className="mr-2 text-turquoise" size={28} />
          Community Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {communityInsights.map((insight, index) => (
            <div key={index} className="card hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-sm">{insight.author}</h4>
                  <p className="text-xs text-gray-600">{insight.role}</p>
                </div>
                <Heart className="text-red-400" size={20} />
              </div>
              <p className="text-sm mb-3 italic">"{insight.insight}"</p>
              <div className="flex items-center text-xs text-gray-500">
                <Heart size={14} className="mr-1" />
                {insight.likes} people found this helpful
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="btn-primary">
            Share Your Insight
          </button>
        </div>
      </div>

      {/* Quick Resources */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Quick Resources</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready for Session 2?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join us next week for Prompting 101 where you'll learn how to write effective prompts
            and put AI to work solving real challenges in your role.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Add to Calendar
            </button>
            <button className="bg-warmYellow text-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Invite a Colleague
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnerDashboard
