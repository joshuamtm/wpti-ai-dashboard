import React from 'react'
import {
  Calendar, Users, Target, Lightbulb, BookOpen, Award,
  TrendingUp, MessageSquare, ArrowLeft, FileText, CheckCircle
} from 'lucide-react'

const Session1Synopsis = ({ onBack }) => {
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
      <div className="card mb-8 bg-gradient-to-r from-navy to-turquoise text-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">WPTI AI Learning Lab</h1>
            <h2 className="text-2xl mb-4 text-turquoise-100">Session 1 Synopsis</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                October 31, 2025
              </div>
              <div className="flex items-center">
                <Users className="mr-2" size={16} />
                Facilitators: Kim Snyder & Joshua Peskay
              </div>
            </div>
          </div>
          <FileText size={64} className="text-turquoise-200 opacity-50" />
        </div>
      </div>

      {/* Overview */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          This inaugural session launched WPTI's new AI Learning Lab, a four-week initiative designed to help
          workforce development professionals understand, adapt to, and effectively deploy AI in their organizations.
          The session emphasized practical, ethical, and safe AI implementation to benefit both staff and the
          participants served by workforce programs.
        </p>
      </div>

      {/* Key Opening Messages */}
      <div className="card mb-8 border-l-4 border-turquoise">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Lightbulb className="mr-2 text-warmYellow" size={28} />
          Key Opening Messages
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">No One is an "Expert" in AI</h3>
            <p className="text-gray-700 leading-relaxed">
              Joshua opened with an important reframe: <strong>no one is truly an expert in AI</strong> because
              the field is changing so rapidly. Even facilitators who have been teaching and implementing AI for
              over three years consider themselves continuous learners. This message set the tone that wherever
              participants are in their AI journey is exactly the right place to be.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy mb-2">The Right Approach to AI</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              The session emphasized that AI should not be treated as "a hammer looking for nails."
              Instead, the proper approach is:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700">
              <li>Identify real problems in your organization</li>
              <li>Explore how AI might solve those problems</li>
              <li>Experiment and iterate</li>
              <li>Learn from community experiences</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Core Concepts */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <BookOpen className="mr-2 text-turquoise" size={28} />
          Core Concepts Covered
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">1. Work Disruption and the AI Landscape</h3>
            <p className="text-gray-700 mb-2">The session addressed how AI is fundamentally changing:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
              <li>The work environment in workforce development</li>
              <li>Labor market demands</li>
              <li>Skills needed by both professionals and job seekers</li>
              <li>How organizations serve their participants</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy mb-2">2. AI Basics and Common Understanding</h3>
            <p className="text-gray-700 mb-2">
              Facilitators provided foundational knowledge to ensure all participants had a common baseline
              understanding of:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
              <li>What AI is and isn't</li>
              <li>Current capabilities and limitations</li>
              <li>Different AI tools available (Claude, ChatGPT, Gemini, Copilot, etc.)</li>
              <li>The importance of understanding AI's role in workforce development specifically</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy mb-2">3. The Power of Iterations</h3>
            <p className="text-gray-700 mb-2">
              A central theme throughout the session was the importance of <strong>iterative learning and improvement</strong>:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
              <li>Don't expect perfection on the first try</li>
              <li>Try, learn, adjust, and try again</li>
              <li>Share learnings with others</li>
              <li>Adapt approaches based on what works</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">
              Kim and Joshua modeled this themselves, noting they were still refining content the night
              before based on the specific needs of this cohort.
            </p>
          </div>
        </div>
      </div>

      {/* CRAFT Framework */}
      <div className="card mb-8 bg-gradient-to-br from-turquoise/10 to-warmYellow/10 border-2 border-turquoise">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Target className="mr-2 text-turquoise" size={28} />
          Practical Skills: The CRAFT Framework
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The session introduced the <strong>CRAFT framework</strong> for effective AI prompting:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-turquoise mb-2">C - Context</h3>
            <p className="text-sm text-gray-700">
              Provide background information and set the stage for what you're trying to accomplish.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-turquoise mb-2">R - Role</h3>
            <p className="text-sm text-gray-700">
              Tell the AI what role or perspective to take (e.g., "Act as a career counselor").
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-turquoise mb-2">A - Action</h3>
            <p className="text-sm text-gray-700">
              Clearly specify what you want the AI to do.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-turquoise mb-2">F - Format</h3>
            <p className="text-sm text-gray-700">
              Define how you want the output structured (bullet points, paragraphs, tables, etc.).
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-turquoise mb-2">T - The audience</h3>
            <p className="text-sm text-gray-700">
              Define who the output is for and what level of expertise they have.
            </p>
          </div>

          <div className="bg-navy text-white p-4 rounded-lg shadow-sm flex items-center justify-center">
            <div className="text-center">
              <Award className="mx-auto mb-2 text-warmYellow" size={32} />
              <p className="text-sm font-semibold">Key Insight</p>
            </div>
          </div>
        </div>

        <div className="bg-navy text-white p-4 rounded-lg">
          <p className="font-semibold">
            <strong>Key Insight:</strong> Prompting is described as the most important skill to develop when
            working with AI. Better prompts lead to exponentially better results.
          </p>
        </div>
      </div>

      {/* Real-World Applications */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <TrendingUp className="mr-2 text-warmYellow" size={28} />
          Real-World Applications Discussed
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold text-turquoise mb-3">For Program Operations</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Automating retention lists
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Streamlining repetitive administrative tasks
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Creating training materials
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Developing job descriptions and postings
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-turquoise mb-3">For Participant Services</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Creating remote work opportunities for job seekers
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Developing workplace simulations and challenges
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Addressing supervisor shortages limiting internships
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Supporting participants with flexible options
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-turquoise mb-3">For Communications</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Virtual receptionist with natural conversation
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Improving participant engagement
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 text-turquoise flex-shrink-0" size={16} />
                Translating communications for diverse audiences
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Critical Themes */}
      <div className="card mb-8 border-l-4 border-warmYellow">
        <h2 className="text-2xl font-bold text-navy mb-4">Critical Themes and Concerns</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">The Workforce Development Challenge</h3>
            <p className="text-gray-700 mb-2">Several participants highlighted emerging challenges:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
              <li>Fewer supervisors available, limiting internship opportunities</li>
              <li>Need for remote work options for young people with family responsibilities</li>
              <li>Gap between entry-level workers' skills and remote work demands</li>
              <li>How AI might create internship experiences when traditional models are constrained</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Organizational Readiness</h3>
            <p className="text-gray-700 mb-2">The session acknowledged that participants' organizations are at different stages:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
              <li>Some have no AI policy or guidance</li>
              <li>Some provide AI tools but limited training</li>
              <li>Many are asking "how do we do this AI thing?"</li>
              <li>Pressure from leadership to "figure out AI"</li>
            </ul>
          </div>

          <div className="bg-turquoise/10 p-4 rounded-lg border border-turquoise">
            <h3 className="text-xl font-bold text-navy mb-2">The Question: "How Should We Implement AI?"</h3>
            <p className="text-gray-700 mb-3 italic">
              With pressure from leadership to "figure out AI" and organizations asking "how do we do this AI thing?",
              participants wanted to know: <strong>What's the best way to implement AI across our organization?</strong>
            </p>
            <h4 className="text-lg font-bold text-turquoise mb-2">The Unsatisfying But Honest Answer</h4>
            <p className="text-gray-700 mb-3">
              Joshua provided what he called an "unsatisfying answer for executives" but the honest truth:
              <strong> The best way forward is exactly what this cohort is doing:</strong>
            </p>
            <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-700">
              <li>Learn together in community</li>
              <li>Experiment between sessions</li>
              <li>Apply tools to solve real problems</li>
              <li>Share results and learn from each other</li>
              <li>Build organizational knowledge iteratively</li>
            </ol>
            <p className="text-gray-700 mt-3 italic">
              This cohort model is currently the best approach because AI is evolving too quickly for
              traditional training methods.
            </p>
          </div>
        </div>
      </div>

      {/* Important Mindsets */}
      <div className="card mb-8 bg-gradient-to-r from-navy/5 to-turquoise/5">
        <h2 className="text-2xl font-bold text-navy mb-4">Important Mindsets Emphasized</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-turquoise mb-2">1. Community-Based Learning</h3>
            <p className="text-sm text-gray-700">
              The best learning happens in community, not in isolation. Participants are encouraged to be
              "guinea pigs" together, trying things and sharing what works and what doesn't.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-turquoise mb-2">2. Thick-Skinned Iteration</h3>
            <p className="text-sm text-gray-700">
              Kim and Joshua encouraged participants to give feedback freely, noting they have "thick skin"
              and want to make the program better through participant input.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-turquoise mb-2">3. Problem-First, Not Tool-First</h3>
            <p className="text-sm text-gray-700">
              Repeatedly emphasized: Start with the problem you're trying to solve, then explore if and how
              AI can help. Don't start with AI and try to find problems for it to solve.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-turquoise mb-2">4. Your Context Matters Most</h3>
            <p className="text-sm text-gray-700">
              Workforce development organizations face unique challenges. The facilitators want to learn from
              participants about what people in their world need, making this a two-way learning experience.
            </p>
          </div>
        </div>
      </div>

      {/* Standout Quotes */}
      <div className="card mb-8 bg-gradient-to-r from-warmYellow/20 to-turquoise/20">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <MessageSquare className="mr-2 text-turquoise" size={28} />
          Standout Quotes
        </h2>

        <div className="space-y-4">
          <blockquote className="border-l-4 border-turquoise pl-4 py-2 bg-white rounded-r">
            <p className="text-gray-700 italic mb-2">
              "No one is an expert in AI. The best way to do this is in community with other people, learning
              from each other, because this stuff is changing so fast."
            </p>
            <cite className="text-sm font-semibold text-navy">— Joshua Peskay</cite>
          </blockquote>

          <blockquote className="border-l-4 border-turquoise pl-4 py-2 bg-white rounded-r">
            <p className="text-gray-700 italic mb-2">
              "The opportunity to work with, plan content for and engage with you over this next set of time,
              because you are in workforce development, is so meaningful to me. This is where the rubber meets
              the road with AI."
            </p>
            <cite className="text-sm font-semibold text-navy">— Kim Snyder</cite>
          </blockquote>

          <blockquote className="border-l-4 border-turquoise pl-4 py-2 bg-white rounded-r">
            <p className="text-gray-700 italic mb-2">
              "It's not about the AI. It's about finding problems and saying, 'Hey, how can we use this cool
              new technology to solve those problems?'"
            </p>
            <cite className="text-sm font-semibold text-navy">— Joshua Peskay</cite>
          </blockquote>

          <blockquote className="border-l-4 border-turquoise pl-4 py-2 bg-white rounded-r">
            <p className="text-gray-700 italic mb-2">
              "We want to have this be as relevant as possible to you. We're going to learn stuff, and we're
              going to take what we've learned and we're going to keep applying it."
            </p>
            <cite className="text-sm font-semibold text-navy">— Kim Snyder</cite>
          </blockquote>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="card mb-8 bg-gradient-to-r from-navy to-turquoise text-white">
        <h2 className="text-2xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-lg leading-relaxed">
          This cohort represents an honest, practical approach to AI in workforce development. Rather than
          promising quick fixes or claiming expertise, the facilitators positioned this as a{' '}
          <strong>collaborative learning journey</strong> where participants will build organizational capacity
          through experimentation, iteration, and community knowledge-sharing. The goal isn't to master AI but
          to become comfortable identifying where it can solve real problems and then working together to
          implement solutions that serve workforce development missions.
        </p>
        <p className="text-turquoise-100 mt-4">
          The session successfully balanced inspiration with pragmatism, acknowledging both the exciting
          possibilities of AI and the very real challenges facing workforce development organizations today.
        </p>
      </div>

      {/* Footer */}
      <div className="card bg-gray-50">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">
            <strong>Session Duration:</strong> 4 hours
          </p>
          <p className="mb-2">
            <strong>Next Session:</strong> Week 2 (location TBA)
          </p>
          <p>
            <strong>Office Hours:</strong> Wednesday (details in Circle community)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Session1Synopsis
