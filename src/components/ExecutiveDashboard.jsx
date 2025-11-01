import React from 'react'
import {
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts'
import {
  TrendingUp, AlertTriangle, Users, Shield, Target,
  CheckCircle, Clock, Zap, Heart, GitBranch, Building2
} from 'lucide-react'
import {
  workshopMetrics,
  aiUsageFrequency,
  topConcerns,
  accountTypes,
  platformAdoption,
  sentimentOverview,
  themeDistribution,
  kirkpatrickScores,
  keyFindings,
  recommendations,
  chartColors
} from '../data/workshopData'

const ExecutiveDashboard = () => {
  const getImpactColor = (impact) => {
    switch (impact) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-300'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      default: return 'bg-blue-100 text-blue-800 border-blue-300'
    }
  }

  const getIconComponent = (iconName) => {
    const icons = {
      TrendingUp, AlertTriangle, Zap, Heart, GitBranch, Building2
    }
    return icons[iconName] || Target
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-navy mb-2">
          WPTI AI Training Workshop - Executive Summary
        </h1>
        <p className="text-gray-600 text-lg">
          Session 1: AI Basics & Workforce Disruption | {workshopMetrics.sessionDate} | {workshopMetrics.location}
        </p>
        <div className="mt-4 flex items-center space-x-6">
          <div className="flex items-center">
            <Users className="text-turquoise mr-2" size={20} />
            <span className="text-sm font-medium">{workshopMetrics.totalParticipants} Participants</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-success mr-2" size={20} />
            <span className="text-sm font-medium">Data Collected & Analyzed</span>
          </div>
        </div>
      </div>

      {/* Key Findings Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Key Findings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyFindings.map((finding) => {
            const Icon = getIconComponent(finding.icon)
            return (
              <div
                key={finding.id}
                className={`card border-2 ${getImpactColor(finding.impact)} hover:shadow-xl transition-all`}
              >
                <div className="flex items-start justify-between mb-3">
                  <Icon size={24} className="text-current" />
                  <span className="text-2xl font-bold">{finding.metric}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{finding.title}</h3>
                <p className="text-sm">{finding.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Charts Row 1: Usage & Concerns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* AI Usage Frequency */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">AI Usage Frequency</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={aiUsageFrequency}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="frequency" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill={chartColors.secondary}>
                {aiUsageFrequency.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? chartColors.success : index === 1 ? chartColors.warning : chartColors.danger}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
            <p className="text-sm font-semibold text-green-800">
              ✓ 67% use AI every day - This is mainstream adoption
            </p>
          </div>
        </div>

        {/* Top Concerns */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Top Concerns About AI Impact</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topConcerns} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="concern" type="category" width={150} fontSize={12} />
              <Tooltip />
              <Bar dataKey="count" fill={chartColors.primary} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-orange-50 rounded border border-orange-200">
            <p className="text-sm font-semibold text-orange-800">
              ⚠ #1 Concern: Adaptation speed (27%), not job loss (7%)
            </p>
          </div>
        </div>
      </div>

      {/* Charts Row 2: Security & Sentiment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Account Type Security Risk */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Account Types - Security Risk</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={accountTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.type}: ${entry.percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
              >
                {accountTypes.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.risk === 'high' ? chartColors.danger : entry.risk === 'low' ? chartColors.success : chartColors.gray}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
            <p className="text-sm font-semibold text-red-800 flex items-center">
              <Shield size={16} className="mr-2" />
              CRITICAL: 73% using personal accounts = data exposure risk
            </p>
          </div>
        </div>

        {/* Sentiment Overview */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Overall Sentiment Toward AI</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sentimentOverview}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.sentiment}: ${entry.percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
              >
                <Cell fill={chartColors.success} />
                <Cell fill={chartColors.warning} />
                <Cell fill={chartColors.danger} />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm font-semibold text-blue-800">
              ℹ Positive-to-negative ratio: 1.3:1 (Cautious optimism)
            </p>
          </div>
        </div>
      </div>

      {/* Kirkpatrick Evaluation */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Kirkpatrick Training Evaluation</h2>
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kirkpatrickScores.map((level, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-3">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke={level.color}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(level.score / level.maxScore) * 351.86} 351.86`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{level.score}/{level.maxScore}</span>
                  </div>
                </div>
                <h4 className="font-bold text-sm mb-1">{level.level}</h4>
                <p className="text-xs text-gray-600 mb-2">{level.rating}</p>
                <p className="text-xs text-gray-500">{level.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-turquoise/10 rounded border border-turquoise">
            <p className="text-sm font-semibold text-navy text-center">
              Overall Kirkpatrick Score: 3.6/5.0 - Strong Foundation for 4-Session Series
            </p>
          </div>
        </div>
      </div>

      {/* Theme Distribution */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Stakeholder Concern Distribution</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={themeDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="theme" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill={chartColors.primary} />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-600">
            44 distinct concerns captured across 4 stakeholder groups through sticky note exercise
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Action Plan & Recommendations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`card border-l-4 ${
                rec.priority === 'URGENT'
                  ? 'border-red-500'
                  : rec.priority === 'HIGH'
                  ? 'border-orange-500'
                  : rec.priority === 'MEDIUM'
                  ? 'border-yellow-500'
                  : 'border-blue-500'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    rec.priority === 'URGENT'
                      ? 'bg-red-100 text-red-800'
                      : rec.priority === 'HIGH'
                      ? 'bg-orange-100 text-orange-800'
                      : rec.priority === 'MEDIUM'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {rec.priority}
                </span>
                <span className="text-sm text-gray-600 flex items-center">
                  <Clock size={14} className="mr-1" />
                  {rec.timeline}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3">{rec.title}</h3>
              <ul className="space-y-2 mb-4">
                {rec.items.map((item, i) => (
                  <li key={i} className="text-sm flex items-start">
                    <CheckCircle size={16} className="text-turquoise mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-2 bg-gray-50 rounded text-xs">
                <strong>Success Metric:</strong> {rec.successMetric}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-gradient-to-r from-navy to-turquoise text-white">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4">The Time to Act is Now</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            The workforce development community is already adopting AI rapidly. The challenge is to
            harness this energy while building the infrastructure, policies, and pedagogy needed for
            sustainable, equitable AI adoption.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Download Full Report
            </button>
            <button className="bg-turquoise text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all border-2 border-white">
              View Session 2 Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExecutiveDashboard
