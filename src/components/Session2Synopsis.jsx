import React, { useState } from 'react'
import {
  Calendar, Users, Target, Lightbulb, BookOpen, Award,
  TrendingUp, MessageSquare, ArrowLeft, FileText, CheckCircle,
  Zap, Brain, Layers, ImageIcon, Workflow, ExternalLink
} from 'lucide-react'

const Session2Synopsis = ({ onBack }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const drawingImages = [
    { id: 1, src: '/session2/drawing-activity/Drawing 1.jpg', caption: 'Team 1 Robot Drawing' },
    { id: 2, src: '/session2/drawing-activity/Drawing 2.jpg', caption: 'Team 2 Robot Drawing' },
    { id: 3, src: '/session2/drawing-activity/Drawing 3.jpg', caption: 'Team 3 Robot Drawing' },
    { id: 4, src: '/session2/drawing-activity/Drawing 4.jpg', caption: 'Team 4 Robot Drawing' },
    { id: 5, src: '/session2/drawing-activity/Drawing 5.jpg', caption: 'Team 5 Robot Drawing' }
  ]

  const workflowImages = [
    { id: 1, src: '/session2/workflow-activity/IMG_9444.jpg', caption: 'Workflow Mapping Exercise 1' },
    { id: 2, src: '/session2/workflow-activity/IMG_9445.jpg', caption: 'Workflow Mapping Exercise 2' },
    { id: 3, src: '/session2/workflow-activity/IMG_9449.jpg', caption: 'Workflow Mapping Exercise 3' }
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
            <h2 className="text-2xl mb-4 text-turquoise-100">Session 2 Synopsis</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                November 7, 2025
              </div>
              <div className="flex items-center">
                <Users className="mr-2" size={16} />
                Facilitators: Kim Snyder (Remote from Arizona) & Joshua Peskay
              </div>
              <div className="flex items-center">
                <Target className="mr-2" size={16} />
                Location: Civic Hall, NYC
              </div>
            </div>
          </div>
          <FileText size={64} className="text-turquoise-200 opacity-50" />
        </div>
      </div>

      {/* Group Photo */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <ImageIcon className="mr-2 text-turquoise" size={28} />
          Session 2 at Civic Hall
        </h2>
        <img
          src="/session2/group-photo.jpeg"
          alt="WPTI Session 2 group photo at Civic Hall looking up Lexington Avenue to the Chrysler Building and Harlem River"
          className="w-full rounded-lg shadow-lg mb-3"
        />
        <p className="text-gray-600 text-sm italic text-center">
          Our cohort at Civic Hall with stunning views up Lexington Avenue all the way to the Chrysler Building and Harlem River
        </p>
      </div>

      {/* Overview */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Session 2 built on the foundations of Session 1, moving from understanding AI basics to <strong>putting AI to work</strong>.
          This hands-on session focused on practical implementation through workflow analysis, creating AI packages, and exploring
          advanced capabilities like deep research and exploratory data analysis.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The session emphasized <strong>human+AI augmentation</strong> using Stanford's H1-H5 framework, helping participants
          understand different levels of AI integration from fully human-controlled to fully automated processes.
        </p>
      </div>

      {/* Key Opening Messages */}
      <div className="card mb-8 border-l-4 border-warmYellow">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Lightbulb className="mr-2 text-warmYellow" size={28} />
          Session Kickoff Highlights
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Dashboard & Community Engagement</h3>
            <p className="text-gray-700 leading-relaxed">
              Joshua shared the newly launched <strong>learner dashboard</strong> in the Circle community, providing
              comprehensive session synopses, executive insights, and research context comparing Wharton (75% AI project
              success) vs. MIT (95% failure rate) studies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Notebook LM Debate Feature</h3>
            <p className="text-gray-700 leading-relaxed">
              Inspired by Carlton's Session 1 mention of Notebook LM podcasts, Joshua demonstrated the AI-generated
              debate feature analyzing the ROI discrepancy between the Wharton and MIT research papers.
            </p>
          </div>
        </div>
      </div>

      {/* Human+AI Augmentation Framework */}
      <div className="card mb-8 bg-gradient-to-br from-turquoise/10 to-navy/10 border-2 border-navy">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Layers className="mr-2 text-navy" size={28} />
          Stanford's Human+AI Augmentation Framework (H5 to H1)
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The session introduced Stanford's framework for understanding levels of AI integration:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-400">
            <h3 className="text-lg font-bold text-gray-600 mb-2">H5 - Human Only</h3>
            <p className="text-sm text-gray-700">
              Fully human-controlled processes with no AI involvement (e.g., in-person meetings)
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
            <h3 className="text-lg font-bold text-blue-600 mb-2">H4 - Human-Led with AI Support</h3>
            <p className="text-sm text-gray-700">
              AI assists but humans make all decisions (e.g., AI note-taking during meetings)
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-turquoise">
            <h3 className="text-lg font-bold text-turquoise mb-2">H3 - Equal Partnership</h3>
            <p className="text-sm text-gray-700">
              Humans and AI work together collaboratively (e.g., drafting slides, creating presentations)
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-warmYellow">
            <h3 className="text-lg font-bold text-orange-600 mb-2">H2 - AI-Led with Human Oversight</h3>
            <p className="text-sm text-gray-700">
              AI performs tasks automatically, humans review before sending (e.g., automated meeting summaries)
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500 lg:col-span-2">
            <h3 className="text-lg font-bold text-red-600 mb-2">H1 - Fully Automated</h3>
            <p className="text-sm text-gray-700">
              AI acts independently without human intervention (most powerful but requires monitoring systems)
            </p>
          </div>
        </div>

        <div className="bg-navy text-white p-4 rounded-lg">
          <p className="font-semibold mb-2">
            <strong>Key Insight:</strong> Most of Session 2 focused on H4 and H3 levels (human+AI augmentation),
            with discussion of moving toward H2 automations in future sessions.
          </p>
          <p className="text-sm text-turquoise-100">
            Example: Kim and Josh use Fathom AI note-taker → Zapier automation → email draft (H2) with human
            review before sending
          </p>
        </div>
      </div>

      {/* Workflow Planning */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Workflow className="mr-2 text-turquoise" size={28} />
          Workflow Planning & Analysis
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">The Workflow Exercise</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Participants mapped organizational workflows using Post-it notes, breaking down processes from
              start to finish. Example demonstrated: intake process from application through enrollment decision.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy mb-2">GPT Workflow Analyzer</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Teams used a custom GPT to analyze their workflows, with volunteers Michael, Enos, and Kari
              demonstrating an older adult workforce intake process.
            </p>
            <div className="bg-beige p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Workflow Analyzed:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 ml-4">
                <li>Applicant submits Microsoft Form (or completes paper form in-person for non-tech-savvy seniors)</li>
                <li>Counselor reviews application and places phone call (population is 55+ and prefers phone)</li>
                <li>Applicant brings physical documents to in-person interview</li>
                <li>Panel makes enrollment decision</li>
              </ol>
              <p className="text-sm text-turquoise font-semibold mt-3">
                AI Opportunity Identified: Replace paper forms with voice-to-text transcription for accessibility
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Packages */}
      <div className="card mb-8 bg-gradient-to-br from-warmYellow/10 to-turquoise/10">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Brain className="mr-2 text-navy" size={28} />
          AI Packages: GPTs, Gems, Agents & Projects
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Participants learned when and how to create reusable AI assistants across different platforms:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-navy mb-2">ChatGPT: GPTs & Projects</h3>
            <p className="text-sm text-gray-600 mb-2">GPTs for shareable assistants, Projects for ongoing work with multiple attachments</p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-navy mb-2">Google Gemini: Gems</h3>
            <p className="text-sm text-gray-600 mb-2">Shareable AI assistants (can share with anyone with Google account)</p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-navy mb-2">Microsoft Copilot: Agents</h3>
            <p className="text-sm text-gray-600 mb-2">Includes wizard to create agents through conversation (keeps asking questions until you create)</p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-navy mb-2">Anthropic Claude: Projects</h3>
            <p className="text-sm text-gray-600 mb-2">Best for ongoing work with extensive knowledge bases and attachments</p>
          </div>
        </div>

        <div className="bg-navy text-white p-4 rounded-lg">
          <h4 className="font-bold mb-2">When to Create a Package:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-turquoise-100">
            <li>You'll use the same prompt 5-10 times/day or several times/week</li>
            <li>You want to attach reference documents (policies, samples, templates)</li>
            <li>You need to share it with team members or publicly</li>
          </ul>
        </div>
      </div>

      {/* Drawing Activity */}
      <div className="card mb-8 border-l-4 border-warmYellow">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <ImageIcon className="mr-2 text-warmYellow" size={28} />
          The Robot Drawing Communication Game
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-navy mb-3">The Challenge</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Teams split into <strong>Instructors</strong> and <strong>Drawers</strong>. Instructors could see
            a robot drawing but couldn't show it. Drawers had to recreate it based only on verbal instructions.
            Time limit: 5 minutes.
          </p>

          <div className="bg-beige p-4 rounded-lg mb-4">
            <h4 className="font-bold text-navy mb-2">Original Robot Drawing:</h4>
            <img
              src="/session2/drawing-activity/Original Drawing.png"
              alt="Original robot drawing for the activity"
              className="w-64 mx-auto rounded-lg shadow-md"
            />
          </div>

          <h4 className="font-bold text-navy mb-3">Team Drawings:</h4>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
            {drawingImages.map((img) => (
              <div key={img.id} className="cursor-pointer" onClick={() => setSelectedImage(img)}>
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full rounded-lg shadow hover:shadow-lg transition-shadow"
                />
                <p className="text-xs text-gray-600 mt-1 text-center">{img.caption}</p>
              </div>
            ))}
          </div>

          <div className="bg-turquoise/10 p-4 rounded-lg border border-turquoise">
            <h4 className="font-bold text-navy mb-2">Key Lessons:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Clarity is critical</strong>: "Draw a head" is vague - need specifics (shape, size, features)</li>
              <li><strong>One voice wins</strong>: Teams that designated one instructor did better than those with multiple voices</li>
              <li><strong>Iteration matters</strong>: Best teams asked for feedback and refined instructions</li>
              <li><strong>Context helps</strong>: Starting with overview ("It's a simple robot with a round head...") set expectations</li>
            </ul>
            <p className="mt-3 text-sm italic text-gray-600">
              <strong>Connection to AI:</strong> Just like the drawing game, AI needs clear, specific instructions.
              Vague prompts get vague results. This exercise demonstrated why the CRAFT framework matters.
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Mapping Photos */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Workflow className="mr-2 text-turquoise" size={28} />
          Workflow Mapping in Action
        </h2>
        <p className="text-gray-700 mb-4">
          Teams mapped their organizational workflows using Post-it notes, identifying opportunities for AI augmentation:
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {workflowImages.map((img) => (
            <div key={img.id} className="cursor-pointer" onClick={() => setSelectedImage(img)}>
              <img
                src={img.src}
                alt={img.caption}
                className="w-full rounded-lg shadow hover:shadow-lg transition-shadow"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Deep Research & Notebook LM */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <BookOpen className="mr-2 text-turquoise" size={28} />
          Deep Research & Google Notebook LM
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Deep Research Agents</h3>
            <p className="text-gray-700 leading-relaxed">
              All major AI platforms now offer deep research capabilities that autonomously search the web,
              synthesize information, and produce comprehensive reports with citations. Demonstrated across
              ChatGPT, Gemini, and Copilot.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Notebook LM: The Hidden Gem</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Joshua called it "the most powerful, useful, fun AI product that no one uses or knows about."
              Notebook LM excels at:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
              <li><strong>Retrieval Augmented Generation (RAG)</strong>: Only answers from your uploaded documents</li>
              <li><strong>Audio Overviews</strong>: Generates podcast-style debates between two AI hosts</li>
              <li><strong>Source Citations</strong>: Every claim links back to specific source passages</li>
              <li><strong>Zero hallucination</strong>: Most accurate tool for policy Q&A and document analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Exploratory Data Analysis */}
      <div className="card mb-8 bg-gradient-to-br from-navy/10 to-turquoise/10">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <TrendingUp className="mr-2 text-navy" size={28} />
          Exploratory Data Analysis (EDA) with Titanic Dataset
        </h2>

        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Participants practiced data analysis using the Titanic passenger manifest - a real dataset with
            rich opportunities to explore survival patterns by age, gender, passenger class, and more.
          </p>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-navy mb-2">Carlton's Cross-Platform Achievement</h3>
            <p className="text-gray-700 mb-2">
              Carlton went above and beyond, analyzing the same Titanic dataset across all four major AI platforms:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-700">
              <li>ChatGPT: Good analysis and text summaries</li>
              <li>Claude: <strong>Most interactive visualizations</strong> with best chart design</li>
              <li>Gemini: Solid analytical capabilities</li>
              <li>Copilot: Integrated with Microsoft ecosystem</li>
            </ul>
          </div>

          <div className="bg-beige p-4 rounded-lg">
            <h4 className="font-bold text-navy mb-2">Key Finding:</h4>
            <p className="text-gray-700 text-lg">
              49 out of 83 children under 16 survived the Titanic → <strong>59% survival rate</strong>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              This finding demonstrated how AI can quickly surface meaningful insights from complex datasets
            </p>
          </div>
        </div>
      </div>

      {/* Carlton's Interactive Dashboard */}
      <div className="card mb-8 border-l-4 border-warmYellow bg-gradient-to-br from-warmYellow/5 to-turquoise/5">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Award className="mr-2 text-warmYellow" size={28} />
          Carlton's Interactive Titanic Dashboard
        </h2>

        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            During Session 2, <strong>Carlton</strong> created a stunning interactive data visualization dashboard
            using Claude AI - showcasing exactly what participants learned about exploratory data analysis.
            This exemplary work demonstrates the power of AI-assisted data storytelling.
          </p>

          <div className="bg-navy text-white p-4 rounded-lg">
            <p className="font-semibold mb-2 flex items-center">
              <Zap className="mr-2 text-warmYellow" size={20} />
              Why This Is Exceptional:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-turquoise-100 ml-4">
              <li>Created during the session - immediate application of skills learned</li>
              <li>Professional-grade visualizations with compelling narrative</li>
              <li>Clear insights: Class determined survival (1st class: 63%, 3rd class: 24.2%)</li>
              <li>Interactive and shareable via Claude Artifacts</li>
              <li>Perfect example of what's possible with AI-assisted analysis</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <img
                src="/session2/carlton-dashboard-header.png"
                alt="Carlton's Titanic Dashboard Header - The Titanic Tragedy: A Data Story of Survival, Class, and Fate"
                className="w-full rounded-lg shadow-lg border-2 border-turquoise/20"
              />
              <p className="text-xs text-gray-600 mt-2 text-center italic">Dashboard header with compelling narrative</p>
            </div>
            <div>
              <img
                src="/session2/carlton-dashboard-viz.png"
                alt="Carlton's Titanic Dashboard Visualization showing survival rates by passenger class"
                className="w-full rounded-lg shadow-lg border-2 border-turquoise/20"
              />
              <p className="text-xs text-gray-600 mt-2 text-center italic">Class survival analysis with interactive charts</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://claude.ai/public/artifacts/7ebc3030-207d-43bb-85f0-99248166cb18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-turquoise hover:bg-navy text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <ExternalLink className="mr-2" size={20} />
              View Carlton's Interactive Dashboard
            </a>
            <p className="text-sm text-gray-600 mt-2">
              Opens in new tab - explore the full interactive experience
            </p>
          </div>

          <div className="bg-beige p-4 rounded-lg">
            <p className="text-sm text-gray-700 italic">
              <strong>Instructor's Note:</strong> Carlton's dashboard is a perfect example of Session 2's learning
              objectives in action - using AI to transform raw data into compelling stories with professional
              visualizations. This is the kind of work product that can elevate organizational reporting and
              decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="card mb-8 border-l-4 border-turquoise">
        <h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
          <Award className="mr-2 text-turquoise" size={28} />
          Key Takeaways from Session 2
        </h2>

        <div className="space-y-3">
          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Think in Workflows:</strong> Break organizational processes into discrete steps to identify AI opportunities
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Augmentation > Automation:</strong> Most value comes from H4/H3 partnership, not full automation
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Create Packages for Repetition:</strong> Turn good prompts into reusable GPTs/Gems/Agents
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Clear Instructions Win:</strong> The drawing game proved specificity beats brevity
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Practice is Learning:</strong> Hands-on exercises with Titanic data built real competence
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 mt-1 text-turquoise flex-shrink-0" size={20} />
            <p className="text-gray-700">
              <strong>Notebook LM for Documents:</strong> Best tool for policy Q&A and avoiding hallucinations
            </p>
          </div>
        </div>
      </div>

      {/* Looking Ahead */}
      <div className="card bg-gradient-to-r from-turquoise to-navy text-white">
        <h2 className="text-2xl font-bold mb-4">Looking Ahead to Session 3</h2>
        <p className="mb-4 text-turquoise-100">
          Session 3 (November 14, 2025) will focus on <strong>Risk, Responsibility & Ethics</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 text-turquoise-100 mb-4">
          <li>AI bias and fairness considerations</li>
          <li>Environmental impact of AI</li>
          <li>Participant data protection</li>
          <li>AI detection and authenticity</li>
          <li>Organizational policy development</li>
        </ul>
        <div className="bg-white/10 p-4 rounded-lg">
          <p className="text-sm">
            <strong>Recommended Preparation:</strong> Review your organization's current AI policy (if any)
            and think about ethical questions that concern you most
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-screen rounded-lg"
            />
            <p className="text-white text-center mt-4">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Session2Synopsis
