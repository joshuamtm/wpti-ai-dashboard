import React from 'react'
import {
  Calendar, Users, Target, Lightbulb, BookOpen, Award,
  TrendingUp, MessageSquare, ArrowLeft, CheckCircle,
  Compass, Lock, Map, Building, AlertCircle, Shield,
  Layers, Heart, User, Ear, HandHeart, RefreshCw, Download,
  FileText, Presentation
} from 'lucide-react'

const Session4Synopsis = ({ onBack }) => {
  const scenarios = [
    {
      id: 1,
      name: 'The Wild West',
      tagline: 'Protect, Don\'t Punish.',
      icon: Compass,
      description: 'How to introduce guardrails without punishing passionate early adopters after months of unrestricted use.',
      color: 'from-orange-400 to-red-400',
      playbook: {
        immediateActions: [
          'Establish Governance: Form a cross-functional AI Task Force',
          'Conduct an AI Pulse Check: Survey staff to understand current use and risks',
          'Implement a "Gentle Pause": Temporarily restrict high-risk uses (e.g., PII) with clear communication that the pause is protective, not punitive'
        ],
        policy: [
          'Permissive with Guardrails: Don\'t ban tools; define safe use',
          'Draft with Staff: Involve early adopters in policy creation to ensure buy-in and relevance'
        ],
        training: [
          'AI Basics First: Deliver immediate, mandatory training on privacy and safe use',
          'Peer-to-Peer Model: Empower "AI Champions" to lead small-group, hands-on training sessions'
        ],
        sustainability: [
          'Standing Governance: Convert the Task Force into a permanent AI Governance Committee',
          'Quarterly Reviews: Establish a cadence to update policy, approve tools, and monitor risk'
        ]
      }
    },
    {
      id: 2,
      name: 'Locked Down',
      tagline: 'Build Trust at a Human Pace.',
      icon: Lock,
      description: 'How to build trust and psychological safety to move from fear-based prohibition to exploration.',
      color: 'from-blue-400 to-indigo-400',
      playbook: {
        weeks12: {
          title: 'Weeks 1-2: Listen & Learn',
          items: [
            'Conduct Appreciative Inquiry sessions to understand hopes and fears',
            'Establish psychological safety as the non-negotiable foundation'
          ]
        },
        weeks38: {
          title: 'Weeks 3-8: Explore Together',
          items: [
            'Launch "Friday Innovation Hours" as a low-stakes space for exploration',
            'Use peer-buddy pairs to support hesitant staff',
            'Test multiple tools (ChatGPT, Copilot, Gemini) with a simple, human-centered evaluation scorecard'
          ]
        },
        weeks910: {
          title: 'Weeks 9-10: Co-Create the Decision',
          items: [
            'Empower staff to vote or reach consensus on a recommended tool',
            'Leadership makes the final call based on staff input, not over it'
          ]
        },
        weeks1112: {
          title: 'Weeks 11-12+: Adopt & Sustain',
          items: [
            'Roll out training tailored to the chosen tool',
            'Establish a permanent AI Working Group to continue the shared learning journey'
          ]
        }
      }
    },
    {
      id: 3,
      name: 'Patchwork Policy',
      tagline: 'From Confusion to Cohesion.',
      icon: Map,
      description: 'How to unify and modernize an outdated, inconsistently applied policy that doesn\'t match program needs.',
      color: 'from-pink-400 to-rose-400',
      playbook: {
        audit: {
          title: 'Audit & Consolidate',
          items: [
            'Confirm Actual Use: First, identify what tools and workflows people are actually using',
            'Identify High-Risk Gaps: Pinpoint where current practice creates liability',
            'Draft Temporary Guardrails: Issue interim guidelines to manage immediate risks'
          ]
        },
        align: {
          title: 'Align Policy with Reality',
          items: [
            'Adopt a Moderate Stance: Restrict high-risk behavior (PII), but allow structured use',
            'Build Around Use Cases: Draft simple rules based on real-world needs, not hypotheticals',
            'Establish Clear Governance: Create a small, central group to own the policy'
          ]
        },
        activate: {
          title: 'Activate & Support',
          items: [
            'Train by Role: Train early adopters and supervisors first, then the whole organization',
            'Provide Simple Guides: Create prompt guides and "allowed vs. restricted" cheat sheets',
            'Open a Help Channel: Offer quick, accessible support to encourage safe experimentation'
          ]
        }
      }
    },
    {
      id: 4,
      name: 'Ready to Formalize',
      tagline: 'Protected Innovation.',
      icon: Building,
      description: 'How to transition from an informal, champion-led model to a sustainable, structured system after the champion departs.',
      color: 'from-green-400 to-teal-400',
      playbook: {
        leadership: {
          title: '1. Formalize the Leadership',
          description: 'Immediately form an official AI Task Force to replace the informal "buddy system," including Staff, a Supervisor, and the Legal Department'
        },
        codify: {
          title: '2. Codify the Policy',
          description: 'Create a "Red Lines & Green Zones" policy. Legal writes the strict "Red Lines" (e.g., no client data). The Team writes the flexible "Green Zones" for creative experimentation'
        },
        systematize: {
          title: '3. Systematize the Learning',
          description: 'Establish a Bi-Weekly Rhythm of tactical team meetings led by the Supervisor, signaling official support and carving out protected time'
        },
        ensure: {
          title: '4. Ensure Future-Readiness',
          description: 'Institute a Quarterly Strategic Review where the Task Force and Legal meet to update policy and governance as AI evolves'
        }
      }
    },
    {
      id: 5,
      name: 'Post-Crisis',
      tagline: 'Rebuild Trust Through Action.',
      icon: AlertCircle,
      description: 'How to rebuild trust and create a culture of safety after a client PII data incident.',
      color: 'from-red-400 to-orange-400',
      playbook: {
        phase1: {
          title: 'Phase 1: Stabilize (Days 1-30)',
          items: [
            'Full Incident Review: Document what happened to learn, not to blame',
            'Temporary Pause on PII: Immediately halt high-risk activities',
            'Form a Working Group: Assemble leadership (IT, Compliance, HR) for rapid decisions',
            'Issue Interim Guidelines: Provide immediate clarity on what is safe to do now'
          ]
        },
        phase2: {
          title: 'Phase 2: Rebuild (Days 31-90)',
          items: [
            'Protective, Practical Policy: Create a privacy-first policy that firmly prohibits PII in external tools but defines approved, safe uses',
            'Confidence-Building Training: Mandate foundational training for all staff with a non-punitive tone. Provide deeper training for supervisors and high-risk roles'
          ]
        },
        phase3: {
          title: 'Phase 3: Reinforce (Ongoing)',
          items: [
            'Permanent Governance Committee: Establish long-term ownership for policy and monitoring',
            'Program-Level AI Stewards: Appoint local experts to provide frontline support',
            'Quarterly Review Cycle: Implement audits and feedback loops to ensure the system stays safe'
          ]
        }
      }
    }
  ]

  const commonThemes = [
    {
      icon: Layers,
      title: 'Governance is Foundational',
      description: 'Every team started by establishing a formal group—a Task Force, Committee, or Working Group—to own the process'
    },
    {
      icon: Ear,
      title: 'Start by Listening',
      description: 'Every plan included an initial discovery phase—an audit, survey, or appreciative inquiry—to understand the current reality before acting'
    },
    {
      icon: HandHeart,
      title: 'Co-Creation Drives Adoption',
      description: 'You consistently chose to involve staff in policy drafting and tool selection, recognizing that buy-in isn\'t given, it\'s earned'
    },
    {
      icon: Shield,
      title: 'Aim for \'Permissive with Guardrails\'',
      description: 'Outright bans were rejected in favor of policies that enable innovation within clear, safe boundaries'
    },
    {
      icon: RefreshCw,
      title: 'Sustainability Requires Structure',
      description: 'Every team built in a formal, recurring review process to ensure policies and practices evolve with the technology'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-turquoise hover:text-navy transition-colors font-semibold"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Learner Dashboard
      </button>

      {/* Header */}
      <div className="card mb-8 bg-gradient-to-r from-warmYellow to-navy text-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">WPTI AI Learning Lab</h1>
            <h2 className="text-2xl mb-4 text-white/90">Session 4 Synopsis</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                November 21, 2025
              </div>
              <div className="flex items-center">
                <Users className="mr-2" size={16} />
                Facilitators: Kim Snyder & Joshua Peskay
              </div>
              <div className="flex items-center">
                <Target className="mr-2" size={16} />
                Focus: AI Adoption Strategy
              </div>
            </div>
          </div>
          <Target size={64} className="text-white/30" />
        </div>
      </div>

      {/* Overview */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Overview: Forging the Future</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Session 4 transformed participants from learners into <strong>strategic leaders</strong>. Through the "Forging the Future" activity,
          cross-organizational teams stepped into the shoes of five different workforce organizations, each facing distinct AI adoption challenges.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>The Mission:</strong> In 15 minutes, develop a realistic 90-day strategy addressing Immediate Actions (Days 1-30), Policy Approach,
          Training & Learning Plan, and Sustainability Strategy.
        </p>
        <p className="text-gray-700 leading-relaxed">
          What emerged was remarkable—five unique playbooks that revealed universal strategic principles for responsible AI adoption in
          workforce development organizations.
        </p>
      </div>

      {/* The Five Scenarios */}
      <div className="card mb-8 border-l-4 border-turquoise">
        <h2 className="text-2xl font-bold text-navy mb-6">Five Organizations, Five Realities</h2>

        <div className="space-y-4">
          {scenarios.map((scenario) => {
            const Icon = scenario.icon
            return (
              <div key={scenario.id} className={`bg-gradient-to-r ${scenario.color} p-1 rounded-lg`}>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-start mb-2">
                    <Icon className="mr-3 flex-shrink-0 text-navy" size={32} />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy mb-1">
                        #{scenario.id} {scenario.name}
                      </h3>
                      <p className="text-sm font-semibold text-gray-600 italic mb-2">"{scenario.tagline}"</p>
                      <p className="text-sm text-gray-700">{scenario.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Detailed Playbooks */}
      {scenarios.map((scenario) => {
        const Icon = scenario.icon
        return (
          <div key={`playbook-${scenario.id}`} className="card mb-8 border-2 border-turquoise/30">
            <div className="flex items-center mb-4">
              <Icon className="mr-3 text-turquoise" size={32} />
              <h2 className="text-2xl font-bold text-navy">
                Playbook: {scenario.name}
              </h2>
            </div>

            {/* Wild West, Ready to Formalize use standard format */}
            {(scenario.id === 1 || scenario.id === 4) && scenario.playbook.immediateActions && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2 flex items-center">
                    <Target className="mr-2 text-blue-600" size={18} />
                    1. Immediate Actions (Days 1-30)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.immediateActions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2 flex items-center">
                    <Shield className="mr-2 text-orange-600" size={18} />
                    2. Policy Approach
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.policy.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2 flex items-center">
                    <BookOpen className="mr-2 text-purple-600" size={18} />
                    3. Training & Learning Plan
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.training.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2 flex items-center">
                    <RefreshCw className="mr-2 text-green-600" size={18} />
                    4. Sustainability Strategy
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.sustainability.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Locked Down timeline format */}
            {scenario.id === 2 && scenario.playbook.weeks12 && (
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.weeks12.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.weeks12.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.weeks38.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.weeks38.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.weeks910.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.weeks910.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.weeks1112.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.weeks1112.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Patchwork Policy three-step format */}
            {scenario.id === 3 && scenario.playbook.audit && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.audit.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.audit.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.align.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.align.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.activate.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.activate.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Ready to Formalize four-step format */}
            {scenario.id === 4 && scenario.playbook.leadership && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.leadership.title}</h3>
                  <p className="text-sm text-gray-700">{scenario.playbook.leadership.description}</p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.codify.title}</h3>
                  <p className="text-sm text-gray-700">{scenario.playbook.codify.description}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.systematize.title}</h3>
                  <p className="text-sm text-gray-700">{scenario.playbook.systematize.description}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy mb-2">{scenario.playbook.ensure.title}</h3>
                  <p className="text-sm text-gray-700">{scenario.playbook.ensure.description}</p>
                </div>
              </div>
            )}

            {/* Post-Crisis three-phase format */}
            {scenario.id === 5 && scenario.playbook.phase1 && (
              <div className="space-y-3">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-red-700 mb-2">{scenario.playbook.phase1.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.phase1.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-bold text-orange-700 mb-2">{scenario.playbook.phase2.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.phase2.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-green-700 mb-2">{scenario.playbook.phase3.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {scenario.playbook.phase3.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )
      })}

      {/* Common Themes */}
      <div className="card mb-8 bg-gradient-to-br from-turquoise/10 to-navy/10 border-2 border-turquoise">
        <h2 className="text-2xl font-bold text-navy mb-4">Common Threads, Collective Wisdom</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          While each plan was unique, five powerful themes emerged across all your strategies:
        </p>

        <div className="space-y-4">
          {commonThemes.map((theme, index) => {
            const Icon = theme.icon
            return (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <Icon className="mr-4 text-turquoise flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-bold text-navy mb-2">{index + 1}. {theme.title}</h3>
                  <p className="text-sm text-gray-700">{theme.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Control vs Co-Creation */}
      <div className="card mb-8 border-l-4 border-warmYellow">
        <h2 className="text-2xl font-bold text-navy mb-4">The Fork in the Road: Control vs. Co-Creation</h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Your strategies consistently navigated a central tension in organizational change: <strong>Control versus Co-Creation</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-bold text-red-700 mb-3">A Path of Control</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                <span>Top-Down Mandates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                <span>Restrictive Bans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                <span>Policy Written <em>for</em> Staff</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                <span>Fear of Mistakes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                <span>Innovation Blocked</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-bold text-green-700 mb-3">A Path of Co-Creation</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span><strong>Your Choice:</strong> Listening First</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span><strong>Your Choice:</strong> Gentle Pauses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span><strong>Your Choice:</strong> Policy <em>with</em> Staff</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span><strong>Your Choice:</strong> Psychological Safety</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span><strong>Your Choice:</strong> Protected Innovation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-turquoise/10 p-4 rounded-lg border-2 border-turquoise">
          <p className="text-sm font-bold text-navy mb-2">The Overwhelming Consensus:</p>
          <p className="text-sm text-gray-700">
            You chose strategies that build trust, share power, and empower staff. You recognized that the only way to
            manage risk responsibly is to build capability and confidence from the ground up.
          </p>
        </div>
      </div>

      {/* The Framework */}
      <div className="card mb-8 bg-gradient-to-r from-navy to-turquoise text-white">
        <h2 className="text-2xl font-bold mb-4">A Unified Framework for Action</h2>

        <p className="text-turquoise-100 mb-6 leading-relaxed">
          While the tactics differed for each scenario, your plans revealed a universal strategic framework. Whether you are in a
          'Wild West' or a 'Post-Crisis' situation, your work demonstrates that a successful strategy must build on these four pillars simultaneously:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
            <Target className="mb-2" size={32} />
            <h3 className="font-bold mb-2">Immediate Actions</h3>
            <p className="text-sm text-turquoise-100">Quick wins and urgent risk mitigation</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
            <Shield className="mb-2" size={32} />
            <h3 className="font-bold mb-2">Policy</h3>
            <p className="text-sm text-turquoise-100">Clear guardrails with room for innovation</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
            <BookOpen className="mb-2" size={32} />
            <h3 className="font-bold mb-2">Training</h3>
            <p className="text-sm text-turquoise-100">Building capability and confidence</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
            <RefreshCw className="mb-2" size={32} />
            <h3 className="font-bold mb-2">Sustainability</h3>
            <p className="text-sm text-turquoise-100">Governance and continuous improvement</p>
          </div>
        </div>
      </div>

      {/* Your Path Forward */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Compass className="mr-2 text-turquoise" size={32} />
          Your Path Forward
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          As you return to your organization, consider these questions inspired by your work today:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-navy mb-2">1. What is our persona?</h3>
            <p className="text-sm text-gray-700">
              Which of the five scenarios we explored feels most like our current reality?
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-navy mb-2">2. What is our next right step?</h3>
            <p className="text-sm text-gray-700">
              Based on the playbooks, what is one immediate, practical action we can take in the next 30 days?
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-navy mb-2">3. Who needs to be in the conversation?</h3>
            <p className="text-sm text-gray-700">
              Who is on our informal (or formal) AI Task Force, and who do we need to invite to the table?
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="card mb-8 border-l-4 border-turquoise">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Award className="mr-2 text-turquoise" size={28} />
          Key Takeaways from Session 4
        </h2>

        <div className="space-y-3">
          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Five Scenarios, One Framework:</strong> Different contexts require different tactics, but all successful strategies build on four pillars
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Governance First:</strong> Establish formal leadership structures (task forces, committees) to own the AI adoption process
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Listen Before Acting:</strong> Conduct surveys, audits, or appreciative inquiry to understand current reality
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Co-Create for Buy-In:</strong> Involve staff in policy drafting and tool selection—buy-in isn't given, it's earned
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Permissive with Guardrails:</strong> Enable innovation within clear boundaries rather than imposing restrictive bans
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Build for Sustainability:</strong> Implement quarterly reviews and permanent governance structures to evolve with technology
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Human-Paced Change:</strong> Build trust through psychological safety, gentle pauses, and protected innovation time
            </p>
          </div>
        </div>
      </div>

      {/* Downloadable Resources */}
      <div className="card mb-8 border-l-4 border-warmYellow">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Download className="mr-2 text-warmYellow" size={28} />
          Session 4 Resources
        </h2>

        <p className="text-gray-700 mb-4">
          Download the complete materials from today's session:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/Forging_the_Future.pdf"
            download
            className="flex items-center p-4 bg-gradient-to-r from-turquoise/10 to-navy/10 rounded-lg border-2 border-turquoise/30 hover:border-turquoise transition-all group"
          >
            <FileText className="mr-3 text-turquoise group-hover:scale-110 transition-transform" size={32} />
            <div className="flex-1">
              <h3 className="font-bold text-navy">Forging the Future</h3>
              <p className="text-sm text-gray-600">Complete AI Adoption Playbooks PDF</p>
            </div>
            <Download className="text-turquoise" size={20} />
          </a>

          <a
            href="/Shark_Tank_Format.pdf"
            download
            className="flex items-center p-4 bg-gradient-to-r from-warmYellow/10 to-navy/10 rounded-lg border-2 border-warmYellow/30 hover:border-warmYellow transition-all group"
          >
            <Presentation className="mr-3 text-warmYellow group-hover:scale-110 transition-transform" size={32} />
            <div className="flex-1">
              <h3 className="font-bold text-navy">Shark Tank Format</h3>
              <p className="text-sm text-gray-600">Project Rating System & Guidelines</p>
            </div>
            <Download className="text-warmYellow" size={20} />
          </a>
        </div>
      </div>

      {/* Celebration */}
      <div className="card bg-gradient-to-r from-warmYellow to-turquoise text-white">
        <div className="text-center py-6">
          <h2 className="text-3xl font-bold mb-4">🎉 Series Complete!</h2>
          <p className="text-lg mb-4">
            Congratulations on completing the WPTI AI Learning Lab 4-session series!
          </p>
          <p className="mb-4">
            You've built foundational knowledge, developed practical skills, explored ethical frameworks, and created strategic playbooks.
            You're now equipped to lead responsible AI adoption in your workforce development organization.
          </p>
          <div className="bg-white/20 p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm font-semibold mb-2">What's Next?</p>
            <ul className="text-sm space-y-1 text-left list-disc list-inside">
              <li>Continue practicing with AI tools in your daily work</li>
              <li>Join the community for peer support and ongoing learning</li>
              <li>Attend Wednesday office hours (4-5 PM Eastern)</li>
              <li>Share your successes and challenges with the cohort</li>
              <li>Implement your AI adoption strategy at your organization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Session4Synopsis
