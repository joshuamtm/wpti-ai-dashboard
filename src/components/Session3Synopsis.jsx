import React, { useState } from 'react'
import {
  Calendar, Users, Target, Lightbulb, BookOpen, Award,
  TrendingUp, MessageSquare, ArrowLeft, FileText, CheckCircle,
  Zap, Brain, Layers, ImageIcon, Workflow, ExternalLink, Shield,
  AlertTriangle, Eye, Code, Sparkles
} from 'lucide-react'

const Session3Synopsis = ({ onBack }) => {
  const applications = [
    { id: 1, name: 'Coloring App', url: 'https://coloring.lovable.app', description: 'Interactive coloring application' },
    { id: 2, name: 'SCEP Job Seeker Screening', url: 'https://scep-job-seeker-scre-hctg.bolt.host', description: 'Separates people who need employment assistance from those seeking social interaction' },
    { id: 3, name: 'Clear Your Plan', url: 'https://clear-your-plan.lovable.app', description: 'Planning and goal-setting tool' },
    { id: 4, name: 'Pathfinder Compass', url: 'https://pathfinder-compass-32.lovable.app', description: 'Career navigation application' },
    { id: 5, name: 'Thought Tangle Tracker', url: 'https://thought-tangle-tracker.lovable.app', description: 'Mental clarity and organization tool' },
    { id: 6, name: 'Alumni Job & Event Center', url: 'https://alumni-job-and-event-c5yf.bolt.host', description: 'Built on Bolt platform for alumni engagement' },
    { id: 7, name: 'Beacon Center', url: 'https://beacon-center.lovable.app', description: 'Built on Lovable platform' },
    { id: 8, name: 'Get-a-J0b', url: 'https://get-a-j0b.lovable.app', description: 'Job search assistance tool' },
    { id: 9, name: 'Skincare Routine Personalizer', url: 'https://skincare-routine-per-djqc.bolt.host', description: 'Ariana\'s personalized skincare recommendation app' },
    { id: 10, name: 'AI Job Sculptor', url: 'https://ai-job-sculptor.lovable.app', description: 'Career path sculpting tool' },
    { id: 11, name: 'Rox Quick Shortlist', url: 'https://rox-quick-shortlist.lovable.app', description: 'Rapid candidate shortlisting application' }
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
      <div className="card mb-8 bg-gradient-to-r from-navy to-turquoise text-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">WPTI AI Learning Lab</h1>
            <h2 className="text-2xl mb-4 text-turquoise-100">Session 3 Synopsis</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                November 14, 2025
              </div>
              <div className="flex items-center">
                <Users className="mr-2" size={16} />
                Facilitators: Kim Snyder & Joshua Peskay
              </div>
              <div className="flex items-center">
                <Target className="mr-2" size={16} />
                Focus: Responsible AI & Vibe Coding
              </div>
            </div>
          </div>
          <Shield size={64} className="text-turquoise-200 opacity-50" />
        </div>
      </div>

      {/* Overview */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Session 3 tackled the critical intersection of <strong>AI ethics, responsible implementation, and hands-on application development</strong>.
          Through interactive exercises exploring cognitive biases, ethical dilemmas, and vibe coding, participants confronted the real-world
          challenges and opportunities of deploying AI in workforce development organizations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The session balanced sobering discussions of AI risks with the exhilarating experience of building functional applications in minutes—demonstrating
          both the power and the responsibility that comes with these tools.
        </p>
      </div>

      {/* Opening Exercises: Cognitive Biases */}
      <div className="card mb-8 border-l-4 border-warmYellow">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Brain className="mr-2 text-warmYellow" size={28} />
          Opening: Cognitive Biases in Action
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">The Giraffe Neck Quiz</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Participants were asked: How many bones are in a giraffe's neck? After providing the last two digits of their phone number,
              they made guesses ranging wildly from the correct answer of <strong>7 bones</strong>.
            </p>
            <div className="bg-beige p-4 rounded-lg">
              <p className="text-sm font-semibold text-navy mb-2">The Lesson: Anchoring Bias</p>
              <p className="text-sm text-gray-700">
                This exercise demonstrated <strong>anchoring bias</strong>—how an irrelevant number (phone digits) can unconsciously
                influence our estimates. On average, participants were off by 48 bones, essentially random guessing. This same cognitive
                error affects AI training data and our interactions with AI systems.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy mb-2">The $20 Auction (Moloch Trap)</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Joshua auctioned a $20 bill with a twist: the top TWO bidders both pay, but only the highest bidder gets the money.
              The bidding escalated past $30, with participants caught in what's called a <strong>Moloch trap</strong>.
            </p>
            <div className="bg-turquoise/10 p-4 rounded-lg border border-turquoise">
              <p className="text-sm font-semibold text-navy mb-2">Why This Matters for AI</p>
              <p className="text-sm text-gray-700">
                Just like the bidders who felt compelled to keep bidding to avoid losing what they'd already invested, organizations
                can get trapped in AI implementations driven by competition rather than actual value. The lesson: implement AI based
                on your organization's real needs, not because "everyone else is doing it."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Circles of Control/Influence/Concern */}
      <div className="card mb-8 bg-gradient-to-br from-navy/10 to-turquoise/10 border-2 border-navy">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Target className="mr-2 text-navy" size={28} />
          Framework: Circles of Control, Influence & Concern
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Kim introduced a powerful framework for thinking about AI ethics and organizational change:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-turquoise">
            <h3 className="text-lg font-bold text-turquoise mb-2">Circle of Control</h3>
            <p className="text-sm text-gray-700 mb-3">
              Things you can directly control:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
              <li>Whether you learn AI skills</li>
              <li>Reviewing AI outputs before using them</li>
              <li>What data you put into AI systems</li>
              <li>Leading AI training at your org</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-warmYellow">
            <h3 className="text-lg font-bold text-orange-600 mb-2">Circle of Influence</h3>
            <p className="text-sm text-gray-700 mb-3">
              Things you can affect but not fully control:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
              <li>Vendor AI practices (through questions)</li>
              <li>Organizational AI policy development</li>
              <li>Colleague adoption of best practices</li>
              <li>Board/leadership AI decisions</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-400">
            <h3 className="text-lg font-bold text-gray-600 mb-2">Circle of Concern</h3>
            <p className="text-sm text-gray-700 mb-3">
              Things that worry you but you can't control:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
              <li>Big Tech AI practices</li>
              <li>Environmental impact of AI training</li>
              <li>Global AI regulation</li>
              <li>Societal job displacement</li>
            </ul>
          </div>
        </div>

        <div className="bg-navy text-white p-4 rounded-lg">
          <p className="font-semibold">
            <strong>Key Insight:</strong> Focus your energy on your circles of control and influence. Don't let concerns
            about things outside your control paralyze you from taking action where you can make a difference.
          </p>
        </div>
      </div>

      {/* The Big Three Risks */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <AlertTriangle className="mr-2 text-warmYellow" size={28} />
          The Big Three: AI Risks Within Our Control
        </h2>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-bold text-red-700 mb-2">1. Accuracy (Hallucinations)</h3>
            <p className="text-sm text-gray-700 mb-2">
              AI makes things up—it's a feature, not a bug. Generative AI creates content probabilistically, which means it can
              confidently state falsehoods.
            </p>
            <p className="text-sm text-gray-700 italic">
              <strong>Mitigation:</strong> Always review AI outputs. Never publish AI-generated content without human verification.
              AI policies should state: "You are responsible for AI outputs you use."
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-lg font-bold text-orange-700 mb-2">2. Bias (Pale-Male Data)</h3>
            <p className="text-sm text-gray-700 mb-2">
              Dr. Joy Buolamwini's research revealed that AI training data overwhelmingly represents lighter-skinned males,
              creating what she termed <strong>"pale-male data"</strong>. Self-driving cars tracked darker-skinned pedestrians
              less accurately.
            </p>
            <p className="text-sm text-gray-700 italic">
              <strong>Mitigation:</strong> Review outputs for bias. Test AI systems with diverse data. Question vendor training
              data sources. Follow the Algorithmic Justice League.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-bold text-purple-700 mb-2">3. Privacy (Data Training)</h3>
            <p className="text-sm text-gray-700 mb-2">
              Free AI tools often train on your prompts and data. 73% of workforce professionals in Session 1 used personal
              accounts, exposing sensitive participant data.
            </p>
            <p className="text-sm text-gray-700 italic">
              <strong>Mitigation:</strong> Use enterprise accounts only. Turn off data training in settings. Never input
              PII, strategic data, or intellectual property. Understand: "If it's free, you're the product."
            </p>
          </div>
        </div>
      </div>

      {/* AI Trolley Problems */}
      <div className="card mb-8 bg-gradient-to-br from-warmYellow/10 to-turquoise/10">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Zap className="mr-2 text-turquoise" size={28} />
          AI Trolley Problems: Real Ethical Dilemmas
        </h2>

        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Joshua and Kim introduced their award-winning <strong>Nonprofit AI Trolley Problem</strong> tool—an interactive
            application that helps organizations think through the ethical trade-offs of AI implementation.
          </p>

          <div className="bg-white p-4 rounded-lg border-2 border-turquoise/30">
            <h3 className="text-lg font-bold text-navy mb-2">The Classic Example: Crisis Text Line</h3>
            <p className="text-sm text-gray-700 mb-3">
              A youth crisis text line can't respond to 100 texts per month due to staff shortages. They could implement an AI that would:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
              <li>Give 90 kids advice as good or better than trained personnel</li>
              <li>Give 8 kids not-great but not-harmful advice</li>
              <li>Give 2 kids actively harmful advice that could lead to bad outcomes</li>
            </ul>
            <p className="text-sm font-semibold text-turquoise mt-3">
              Do you implement the AI? There's no easy answer—that's why it's a trolley problem.
            </p>
          </div>

          <div className="bg-beige p-4 rounded-lg">
            <h3 className="text-lg font-bold text-navy mb-2">Live Demo: Enos's Scenario</h3>
            <p className="text-sm text-gray-700 mb-2">
              Enos volunteered to test the trolley problem tool with his organization's mission: helping low-income older
              New Yorkers get back into the workforce. After answering questions about the AI project, stakeholder readiness,
              and risk tolerance, the tool recommended: <strong>"Don't Pull the Lever - Keep the Status Quo."</strong>
            </p>
            <p className="text-sm text-gray-700 italic">
              The tool isn't prescriptive—it's a thought exercise to help organizations identify benefits, risks, and
              whether they're ready for AI implementation.
            </p>
          </div>

          <div className="text-center mt-4">
            <a
              href="https://nonprofit-ai-trolley-mtmapps.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-turquoise hover:bg-navy text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <ExternalLink className="mr-2" size={20} />
              Try the AI Trolley Problem Tool
            </a>
          </div>
        </div>
      </div>

      {/* Murder Mystery Exercise */}
      <div className="card mb-8 border-l-4 border-warmYellow">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Eye className="mr-2 text-warmYellow" size={28} />
          The Murder Mystery: What We Don't See
        </h2>

        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            In this brilliant exercise, participants watched a 1-minute murder mystery video. But here's the catch: everyone
            was assigned to watch ONE specific thing—the paintings, the inspector's coat, the gardener's hat, the bear, or
            the murder victim.
          </p>

          <div className="bg-turquoise/10 p-4 rounded-lg border border-turquoise">
            <h3 className="text-lg font-bold text-navy mb-2">The Results</h3>
            <p className="text-sm text-gray-700 mb-3">
              People easily noticed changes in what they were assigned to watch. But <strong>21 total changes</strong> occurred
              in the video—most of which were completely invisible to participants focused on their one task.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Some participants didn't even know there WAS a bear in the scene.
            </p>
          </div>

          <div className="bg-navy text-white p-4 rounded-lg">
            <p className="font-semibold mb-2">
              <strong>The AI Connection:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-turquoise-100">
              <li>When we direct AI to look at ONE thing, it misses everything else (just like us)</li>
              <li>What's obvious to you is completely invisible to others—we all have different perspectives</li>
              <li>Confirmation bias: We see what we're looking for and miss contradictory information</li>
              <li>AI amplifies our biases if we don't actively prompt it to consider multiple perspectives</li>
              <li>Ask AI: "What am I missing?" "Tell me why this idea won't work." "Take a contrary viewpoint."</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vibe Coding */}
      <div className="card mb-8 bg-gradient-to-br from-turquoise/10 to-navy/10 border-2 border-turquoise">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Code className="mr-2 text-turquoise" size={28} />
          Vibe Coding: Building Apps in Minutes
        </h2>

        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            The afternoon session introduced <strong>vibe coding</strong>—a term coined by AI researcher Andrej Karpathy to
            describe using natural language to have AI write code for you. What once took months and thousands of dollars
            can now happen in minutes for free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-navy mb-2">Platforms Used</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Bolt.new</li>
                <li>Lovable.dev</li>
                <li>Replit.com</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-navy mb-2">What You Can Build</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Calculators & converters</li>
                <li>Interactive displays</li>
                <li>Progress trackers</li>
                <li>Assessment tools</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-navy mb-2">What to Avoid</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Storing sensitive data</li>
                <li>Collecting PII</li>
                <li>Database-backed apps</li>
                <li>Production-critical systems</li>
              </ul>
            </div>
          </div>

          <div className="bg-warmYellow/20 p-4 rounded-lg border-l-4 border-warmYellow">
            <h3 className="text-lg font-bold text-navy mb-2">The Demo: WorkRox!</h3>
            <p className="text-sm text-gray-700 mb-2">
              Kim live-coded career pathway apps for the fictional "WorkRox!" organization featuring three entry-level
              positions: Geologists, Professional Yodelers, and Horticulturists.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              In under 20 minutes, she created working applications across multiple platforms showing career progressions,
              salary ranges, and skill requirements—demonstrating the speed and power of vibe coding.
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-bold text-red-700 mb-2">Important Warnings</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li><strong>Stateless Applications Only:</strong> Build apps that don't store data between sessions</li>
              <li><strong>No Sensitive Data:</strong> Never use organizational data or collect personal information</li>
              <li><strong>Maintenance Challenge:</strong> If people start depending on your app, you need to support it</li>
              <li><strong>The Access Database Problem:</strong> Don't create Frankenstein monsters you can't maintain</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Applications Built */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Sparkles className="mr-2 text-warmYellow" size={28} />
          11 Applications Built During Session 3
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          In just one hour, participants built 11 functional applications demonstrating the power and potential of vibe coding
          for workforce development:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {applications.map((app) => (
            <div key={app.id} className="bg-white border-2 border-turquoise/20 rounded-lg p-4 hover:border-turquoise transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-navy mb-1">{app.id}. {app.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{app.description}</p>
                </div>
              </div>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-turquoise hover:text-navy font-semibold transition-colors"
              >
                <ExternalLink className="mr-1" size={14} />
                Try it
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gradient-to-r from-turquoise/10 to-warmYellow/10 p-6 rounded-lg border-2 border-turquoise/30">
          <h3 className="text-lg font-bold text-navy mb-3">Spotlight: Ariana's Skincare Routine App</h3>
          <p className="text-sm text-gray-700 mb-3">
            Ariana's application stood out for its user-friendly design and practical application. Users select their
            complexity level (Simple, Moderate, Complex), answer questions about skin type and concerns, and receive
            personalized product recommendations with AM/PM routines.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            The app demonstrated key UX principles: intuitive navigation, clear visual feedback, and immediately actionable
            results. Participants tested it and provided feedback about making it more inclusive (gender-neutral options,
            allergy considerations).
          </p>
          <div className="flex gap-3">
            <a
              href="https://skincare-routine-per-djqc.bolt.host"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-turquoise hover:bg-navy text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <ExternalLink className="mr-2" size={16} />
              Try Ariana's Skincare App
            </a>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="card mb-8 border-l-4 border-turquoise">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Award className="mr-2 text-turquoise" size={28} />
          Key Takeaways from Session 3
        </h2>

        <div className="space-y-3">
          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Focus on Your Circles:</strong> Spend energy on what you can control and influence, not just concerns
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>The Big Three Risks:</strong> Accuracy, Bias, and Privacy are within your control—mitigate through review and policy
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Cognitive Biases Affect AI:</strong> Our biases shape AI training data and how we interact with AI systems
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Ethics Require Trade-offs:</strong> AI trolley problems have no perfect answers—think through implications carefully
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Vibe Coding is Powerful:</strong> Build functional apps in minutes, but remember: with great power comes great responsibility
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Stateless and Safe:</strong> Keep applications simple, don't collect data, and think about long-term maintenance
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Ask "What Am I Missing?":</strong> Actively prompt AI and yourself to consider alternative perspectives
            </p>
          </div>
        </div>
      </div>

      {/* Looking Ahead */}
      <div className="card bg-gradient-to-r from-turquoise to-navy text-white">
        <h2 className="text-2xl font-bold mb-4">Looking Ahead to Session 4: Shark Tank</h2>
        <p className="mb-4 text-turquoise-100">
          Session 4 (November 21, 2025) will feature <strong>AI Project Pitch Session</strong>—Shark Tank style!
        </p>
        <ul className="list-disc list-inside space-y-2 text-turquoise-100 mb-4">
          <li>Present AI projects using the 5-slide pitch deck framework</li>
          <li>Problem → Why Worth Solving → Solution → How → Vision</li>
          <li>Sharks will provide reality checks: Green Light, Yellow Light, or Red Light</li>
          <li>2 minutes to pitch, 5 minutes for shark questions, 2 minutes for feedback</li>
          <li>Discussion of organizational AI policy and implementation readiness</li>
        </ul>
        <div className="bg-white/10 p-4 rounded-lg">
          <p className="text-sm font-semibold mb-2">Homework:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Develop a pitch for an AI project at your organization (optional but encouraged)</li>
            <li>Review your organization's AI policy (if one exists)</li>
            <li>Continue experimenting with vibe coding using the PRD prompt</li>
            <li>Test colleagues' applications and provide feedback</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Session3Synopsis
