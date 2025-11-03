import React, { useState } from 'react'
import {
  BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell, PieChart, Pie
} from 'recharts'
import {
  BookOpen, TrendingUp, AlertTriangle, Target, CheckCircle, XCircle,
  Users, Building2, Zap, Shield, Award, ExternalLink, Download,
  ArrowRight, Lightbulb, GitBranch, Heart, Brain
} from 'lucide-react'

const ResearchContext = () => {
  const [activeSection, setActiveSection] = useState('paradox')

  // Data for visualizations
  const paradoxData = [
    { study: 'Wharton', metric: 'Success Rate', value: 75, color: '#2ecc71' },
    { study: 'MIT', metric: 'Success Rate', value: 5, color: '#e74c3c' },
  ]

  const measurementApproach = [
    { study: 'Wharton', approach: 'Productivity Metrics', examples: 'Time saved, engagement, throughput' },
    { study: 'MIT', approach: 'P&L Impact', examples: 'Revenue change, cost reduction in 6 months' },
  ]

  const wptiPosition = [
    { metric: 'Active AI Users', percentage: 87, color: '#2ecc71', status: 'High Adoption' },
    { metric: 'Organizational Accounts', percentage: 22.7, color: '#f39c12', status: 'Low Transformation' },
  ]

  const buildVsBuy = [
    { approach: 'Strategic Partnerships (Buy)', successRate: 66, color: '#2ecc71' },
    { approach: 'Internal Development (Build)', successRate: 33, color: '#e74c3c' },
  ]

  const institutionalFluency = [
    { pillar: 'Context', wpti: 90, industry: 60, fullMark: 100 },
    { pillar: 'Problem-Solving', wpti: 85, industry: 55, fullMark: 100 },
    { pillar: 'Ownership', wpti: 80, industry: 50, fullMark: 100 },
    { pillar: 'Taste', wpti: 75, industry: 45, fullMark: 100 },
  ]

  const roiComparison = [
    { category: 'WPTI Training', roi: 1756, payback: '2.8 weeks' },
    { category: 'Industry Average', roi: 300, payback: '6-12 months' },
  ]

  const researchSources = [
    {
      title: 'Wharton AI Adoption Report 2025',
      authors: 'Wharton Human-AI Research & GBK Collective',
      sample: '800 enterprise decision-makers',
      keyFinding: '75% report positive ROI using productivity measures',
      link: '#',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'MIT State of AI in Business 2025',
      authors: 'MIT Project NANDA',
      sample: '300+ AI implementations, 52 organizations',
      keyFinding: '95% failure rate using P&L impact measures',
      link: '#',
      icon: Target,
      color: 'bg-purple-100 text-purple-800'
    },
  ]

  const keyInsights = [
    {
      title: 'The Measurement Problem',
      icon: TrendingUp,
      description: 'MIT requires P&L impact in 6 months. Wharton measures productivity gains. Both are right—you need adoption first, then transformation.',
      implication: 'Measure what matters: time saved, quality improved, engagement increased.',
      color: 'border-blue-500'
    },
    {
      title: 'The Shadow AI Economy',
      icon: Users,
      description: '90% of workers use personal AI tools (MIT), but only 40% of companies purchased subscriptions. WPTI shows 72.7% personal account usage.',
      implication: 'Formalize what already works—buy enterprise accounts for proven users.',
      color: 'border-orange-500'
    },
    {
      title: 'Build vs. Buy Reality',
      icon: GitBranch,
      description: 'Strategic partnerships succeed 2x more than internal builds (MIT: 66% vs 33%). Yet organizations keep trying to build custom solutions.',
      implication: 'Stop building, start buying. Partner with proven vendors like ChatGPT/Claude.',
      color: 'border-green-500'
    },
    {
      title: 'Back-Office ROI Advantage',
      icon: Zap,
      description: 'MIT found $2-10M annual savings in back-office automation. Yet 50% of budgets go to sales/marketing. Workforce development fits the high-ROI pattern.',
      implication: 'Invest in "boring" productivity tasks—that\'s where 1,756% ROI comes from.',
      color: 'border-purple-500'
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Brain className="text-turquoise" size={40} />
          <h1 className="text-4xl font-bold text-navy">
            Crossing the AI Divide
          </h1>
        </div>
        <p className="text-xl text-gray-700 mb-2">
          What 800 enterprises and 300+ AI implementations teach us about success
        </p>
        <p className="text-gray-600">
          Two groundbreaking studies reveal why most AI projects fail—and how WPTI's approach succeeds
        </p>
      </div>

      {/* The Paradox - Hero Section */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-navy mb-4">The AI Paradox</h2>
          <p className="text-lg text-gray-700 mb-6">
            In October 2025, Wharton and MIT released contradictory findings on enterprise AI adoption:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border-2 border-green-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-green-700">Wharton: 75% Success</h3>
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <p className="text-gray-700 mb-3">Measured: <strong>Productivity gains</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Employee efficiency (47%)</li>
                <li>• Time-to-productivity (37%)</li>
                <li>• Engagement scores (47%)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-red-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-red-700">MIT: 95% Failure</h3>
                <XCircle className="text-red-600" size={32} />
              </div>
              <p className="text-gray-700 mb-3">Measured: <strong>P&L impact</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Revenue change in 6 months</li>
                <li>• Direct cost reduction</li>
                <li>• Bottom-line transformation</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300">
            <div className="flex items-start space-x-3">
              <Lightbulb className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-yellow-900 mb-1">The Truth: Both Are Right</p>
                <p className="text-yellow-800 text-sm">
                  Organizations need high adoption (Wharton's measure) before achieving transformation (MIT's measure).
                  The gap between these two is called the <strong>"GenAI Divide"</strong>—and most organizations are stuck on the wrong side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WPTI Position */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-6">Where WPTI Participants Stand</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">The Divide in Our Data</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={wptiPosition}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" fontSize={12} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="percentage" radius={[8, 8, 0, 0]}>
                  {wptiPosition.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">87% Active Users</span>
                <span className="text-green-600">✓ High Adoption</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">22.7% Org Accounts</span>
                <span className="text-orange-600">⚠ Low Transformation</span>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-turquoise/10 to-warmYellow/10 border-2 border-turquoise">
            <h3 className="text-xl font-bold mb-4">This Is Normal (And Fixable)</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-navy">Your cohort's 87% active usage</p>
                  <p className="text-sm text-gray-600">Aligns with MIT's finding: 90% shadow AI economy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-navy">Your 22.7% organizational adoption</p>
                  <p className="text-sm text-gray-600">Shows the gap that keeps 95% of projects from transforming</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-navy">WPTI bridges this divide</p>
                  <p className="text-sm text-gray-600">By teaching institutional fluency, not just individual skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insights Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-6">Four Research-Backed Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyInsights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <div key={index} className={`card border-l-4 ${insight.color} hover:shadow-xl transition-all`}>
                <div className="flex items-start space-x-4 mb-3">
                  <Icon className="text-navy flex-shrink-0" size={28} />
                  <h3 className="text-lg font-bold text-navy">{insight.title}</h3>
                </div>
                <p className="text-gray-700 mb-3 text-sm">{insight.description}</p>
                <div className="bg-blue-50 rounded p-3 border border-blue-200">
                  <p className="text-sm font-semibold text-blue-900">
                    <ArrowRight className="inline mr-1" size={16} />
                    What this means: {insight.implication}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Build vs Buy Evidence */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-6">Why Partnerships Win</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">MIT's Finding: 2x Success Rate</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={buildVsBuy}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="approach" fontSize={11} />
                <YAxis label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="successRate" radius={[8, 8, 0, 0]}>
                  {buildVsBuy.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
              <p className="text-sm font-semibold text-green-800">
                ✓ Strategic partnerships (buy) succeed 2x more than internal builds
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-green-50 to-blue-50">
            <h3 className="text-xl font-bold mb-4">Why WPTI Uses This Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-navy">We teach existing tools</p>
                  <p className="text-sm text-gray-600">ChatGPT, Claude, Gemini—not custom builds</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-navy">We measure productivity</p>
                  <p className="text-sm text-gray-600">2 hrs/week savings = 1,756% ROI</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-navy">We formalize shadow AI</p>
                  <p className="text-sm text-gray-600">Turn personal accounts into organizational assets</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-navy">We democratize fluency</p>
                  <p className="text-sm text-gray-600">Context, ownership, taste—at the team level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Fluency Framework */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-6">The Institutional Fluency Framework</h2>
        <p className="text-gray-700 mb-6">
          Both studies reveal that technology alone doesn't drive success—organizational capabilities do.
          WPTI teaches three pillars that separate the 5% who succeed from the 95% who fail:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">WPTI vs. Industry Average</h3>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={institutionalFluency}>
                <PolarGrid />
                <PolarAngleAxis dataKey="pillar" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="WPTI Cohort" dataKey="wpti" stroke="#4AB5C4" fill="#4AB5C4" fillOpacity={0.6} />
                <Radar name="Industry Avg" dataKey="industry" stroke="#95a5a6" fill="#95a5a6" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="card bg-gradient-to-br from-purple-50 to-pink-50">
            <h3 className="text-xl font-bold mb-4">The Three Pillars</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-navy mb-1 flex items-center">
                  <Target className="mr-2 text-turquoise" size={20} />
                  1. Context Awareness (Team-Level)
                </h4>
                <p className="text-sm text-gray-700 ml-7">
                  Teams articulate their domain expertise to AI. Your workforce development knowledge is the foundation—AI amplifies it.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1 flex items-center">
                  <Users className="mr-2 text-turquoise" size={20} />
                  2. Problem-Solving (Individual Ownership)
                </h4>
                <p className="text-sm text-gray-700 ml-7">
                  OLD: Managers own outcomes, individuals have skills. NEW: Individuals own quality, teams share skills via prompts.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1 flex items-center">
                  <Award className="mr-2 text-turquoise" size={20} />
                  3. Taste (Democratized Quality)
                </h4>
                <p className="text-sm text-gray-700 ml-7">
                  Quality decisions can't be bottlenecked through management. Frontline workers must judge what's "good enough" with AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Comparison */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-6">WPTI's Exceptional ROI</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">ROI Comparison</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={roiComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis label={{ value: 'ROI (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="roi" fill="#2ecc71" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-green-50 rounded p-3 border border-green-200 text-center">
                <p className="text-2xl font-bold text-green-700">1,756%</p>
                <p className="text-xs text-green-600">WPTI ROI</p>
              </div>
              <div className="bg-blue-50 rounded p-3 border border-blue-200 text-center">
                <p className="text-2xl font-bold text-blue-700">2.8 weeks</p>
                <p className="text-xs text-blue-600">Payback Period</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300">
            <h3 className="text-xl font-bold mb-4">Why WPTI's ROI Is Credible</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Conservative estimate:</strong> 2 hrs/week vs. 12-30% productivity gains cited in research
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Documented use cases:</strong> Email (5-10/week), content creation (2-3/week), translation (3-5/week)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Industry benchmarks:</strong> McKinsey (15-30% gains), HBS (12.2% gains), BCG (25% faster)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Excludes quality gains:</strong> Better writing, faster response, improved participant materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Framework */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-6">What This Means for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* For Executives */}
          <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="text-blue-600" size={32} />
              <h3 className="text-xl font-bold text-navy">For Executives</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-navy mb-1">Stop Building, Start Buying</p>
                <p className="text-sm text-gray-700">
                  MIT: Strategic partnerships succeed 2x more. Buy enterprise ChatGPT/Claude licenses for your 72.7% using personal accounts.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-navy mb-1">Measure Productivity, Not P&L</p>
                <p className="text-sm text-gray-700">
                  Wharton: 72% now measure ROI via productivity (47%), time-to-productivity (37%), engagement (47%). Stop demanding 6-month P&L impact.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-navy mb-1">Invest in Back-Office</p>
                <p className="text-sm text-gray-700">
                  MIT: $2-10M savings in back-office automation. Yet 50% of budgets go to sales/marketing. Fund the "boring" work that delivers 1,756% ROI.
                </p>
              </div>
            </div>
          </div>

          {/* For Learners */}
          <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="text-purple-600" size={32} />
              <h3 className="text-xl font-bold text-navy">For Learners</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="font-semibold text-navy mb-1">Your Daily Usage Is the Foundation</p>
                <p className="text-sm text-gray-700">
                  67% daily use = high adoption. Now formalize it: Get organizational accounts, share prompts, document use cases.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="font-semibold text-navy mb-1">Share Skills, Own Quality</p>
                <p className="text-sm text-gray-700">
                  The new model: Individuals own outcomes, teams share skills via prompts. Create your prompt library and share it.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="font-semibold text-navy mb-1">Build Your Business Case</p>
                <p className="text-sm text-gray-700">
                  Use this research to advocate: "Wharton found 75% success using productivity measures. Our training shows 1,756% ROI with 2.8-week payback."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Sources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-6">Research Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchSources.map((source, index) => {
            const Icon = source.icon
            return (
              <div key={index} className={`card ${source.color} border-2 hover:shadow-xl transition-all`}>
                <div className="flex items-start space-x-4 mb-4">
                  <Icon className="flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">{source.title}</h3>
                    <p className="text-sm opacity-80">{source.authors}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm"><strong>Sample:</strong> {source.sample}</p>
                  <p className="text-sm"><strong>Key Finding:</strong> {source.keyFinding}</p>
                </div>
                <a
                  href={source.link}
                  className="inline-flex items-center text-sm font-semibold hover:underline"
                >
                  View Full Report
                  <ExternalLink className="ml-1" size={14} />
                </a>
              </div>
            )
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-turquoise to-navy rounded-xl p-8 text-white text-center">
        <Heart className="mx-auto mb-4" size={48} />
        <h2 className="text-3xl font-bold mb-4">You're on the Right Path</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          WPTI's curriculum is designed to bridge the AI Divide that keeps 95% of organizations stuck.
          Your 87% active usage shows you're ready. The next three sessions will help you transform that
          adoption into organizational impact.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="bg-white/20 rounded-lg px-6 py-3">
            <p className="text-sm opacity-90">From Wharton's 800 enterprises</p>
            <p className="text-2xl font-bold">75% Success</p>
          </div>
          <ArrowRight size={32} />
          <div className="bg-white/20 rounded-lg px-6 py-3">
            <p className="text-sm opacity-90">WPTI's Research-Backed ROI</p>
            <p className="text-2xl font-bold">1,756%</p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-8 text-center">
        <button className="inline-flex items-center space-x-2 bg-turquoise text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy transition-colors">
          <Download size={20} />
          <span>Download Research Summary (1-Pager)</span>
        </button>
        <p className="text-sm text-gray-600 mt-3">
          Use this for budget requests, leadership presentations, and organizational advocacy
        </p>
      </div>
    </div>
  )
}

export default ResearchContext
