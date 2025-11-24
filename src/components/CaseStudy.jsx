import { useState } from 'react';
import {
  Award,
  TrendingUp,
  Users,
  Target,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Clock,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import {
  workshopMetrics,
  aiUsageFrequency,
  topConcerns,
  accountTypes,
  sentimentOverview,
  kirkpatrickScores,
  keyFindings,
  session2Metrics,
  session3Metrics,
  session3Applications
} from '../data/workshopData';

const CaseStudy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const Section = ({ id, title, children, defaultExpanded = true }) => {
    const isExpanded = expandedSections[id] !== undefined ? expandedSections[id] : defaultExpanded;

    return (
      <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-6 py-4 flex items-center justify-between bg-navy hover:bg-navy-dark transition-colors"
        >
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {isExpanded ? (
            <ChevronUp className="text-turquoise" size={24} />
          ) : (
            <ChevronDown className="text-turquoise" size={24} />
          )}
        </button>
        {isExpanded && (
          <div className="p-6">
            {children}
          </div>
        )}
      </div>
    );
  };

  const MetricCallout = ({ value, label, icon: Icon, color = "turquoise" }) => (
    <div className={`bg-${color}-50 border-2 border-${color} rounded-lg p-4 text-center`}>
      {Icon && <Icon className={`text-${color} mx-auto mb-2`} size={32} />}
      <div className={`text-4xl font-bold text-${color} mb-1`}>{value}</div>
      <div className="text-sm text-gray-700 font-medium">{label}</div>
    </div>
  );

  const Quote = ({ text, author, role }) => (
    <div className="bg-beige border-l-4 border-turquoise p-6 my-4 rounded-r-lg">
      <p className="text-lg italic text-gray-700 mb-2">"{text}"</p>
      {author && (
        <p className="text-sm font-semibold text-navy">
          — {author}{role && `, ${role}`}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-beige">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="text-warmYellow" size={40} />
            <span className="text-warmYellow font-semibold text-sm tracking-wide uppercase">Case Study</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Transforming Workforce Development Through AI Literacy
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            How Meet the Moment's 4-week intensive training empowered 30 workforce professionals
            to navigate the AI revolution, shifting from fear to confident implementation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-turquoise mb-1">{workshopMetrics.totalParticipants}</div>
              <div className="text-sm text-gray-300">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-turquoise mb-1">4</div>
              <div className="text-sm text-gray-300">Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-turquoise mb-1">67%</div>
              <div className="text-sm text-gray-300">Daily AI Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-turquoise mb-1">11</div>
              <div className="text-sm text-gray-300">Apps Built</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Executive Summary */}
        <Section id="executive-summary" title="Executive Summary">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              In Fall 2025, Meet the Moment (MTM) delivered an intensive 4-week in-person AI training cohort
              for the Workforce Professionals Training Institute (WPTI), addressing a critical challenge:
              87% of workforce professionals were already using AI daily, yet 73% were doing so through
              personal accounts, exposing sensitive client data to significant security risks.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Through a hands-on, practice-focused curriculum delivered across four sessions in New York City,
              30 workforce development professionals transformed from anxious AI users into confident
              practitioners capable of building functional applications, implementing responsible AI policies,
              and leading organizational change. Participants moved from asking "What is AI?" to creating
              11 fully functional web applications in a single session, demonstrating both technical capability
              and ethical awareness.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <MetricCallout
                value="4.2/5.0"
                label="Kirkpatrick Level 1: Reaction"
                icon={TrendingUp}
                color="turquoise"
              />
              <MetricCallout
                value="3.8/5.0"
                label="Kirkpatrick Level 2: Learning"
                icon={Brain}
                color="navy"
              />
              <MetricCallout
                value="4.0/5.0"
                label="Kirkpatrick Level 3: Behavior"
                icon={CheckCircle}
                color="warmYellow"
              />
            </div>

            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-turquoise">Key Outcomes</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-turquoise mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>67% daily AI adoption</strong> with clear understanding of responsible use practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-turquoise mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Security awareness raised</strong> from baseline to 100% understanding of enterprise account necessity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-turquoise mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>11 functional applications</strong> built by participants in a single 90-minute session</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-turquoise mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Mindset shift</strong> from AI replacing jobs (7% concern) to helping workers adapt faster (27% focus)</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* The Challenge */}
        <Section id="challenge" title="The Challenge: The AI Paradox in Workforce Development">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Workforce development organizations found themselves at a critical crossroads in 2025.
              Research from Wharton showed that 75% of AI implementations succeed when approached
              strategically, while MIT's data revealed that 95% fail when implemented tactically without
              proper institutional fluency. WPTI participants embodied this paradox perfectly.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <div className="flex items-start">
                <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-red-800 mb-2">The Critical Security Gap</h4>
                  <p className="text-gray-700">
                    <strong>73% of participants were using personal AI accounts</strong>, unknowingly
                    exposing confidential client information—Social Security numbers, employment histories,
                    salary data, and sensitive case notes—to AI training data pools. Organizations had
                    provided no guidance, no policies, and no enterprise solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-navy mb-3 flex items-center">
                  <TrendingUp className="mr-2 text-turquoise" size={20} />
                  What Was Working
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 67% using AI daily (high adoption rate)</li>
                  <li>• Strong curiosity and engagement</li>
                  <li>• Diverse platform exploration (6 different tools)</li>
                  <li>• Clear recognition that AI affects workforce</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-navy mb-3 flex items-center">
                  <AlertTriangle className="mr-2 text-red-500" size={20} />
                  Critical Gaps
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• No organizational AI policies (0%)</li>
                  <li>• Massive data security exposure (73%)</li>
                  <li>• Platform fragmentation and confusion</li>
                  <li>• No framework for responsible use</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy mt-8 mb-4">The Three-Part Challenge</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-turquoise bg-white p-4 rounded-r-lg">
                <h4 className="font-bold text-navy mb-2">1. Technical Skills Gap</h4>
                <p className="text-gray-700">
                  Participants could use ChatGPT for basic queries but lacked understanding of prompt
                  engineering, workflow integration, or advanced capabilities like custom GPTs, projects,
                  or automation.
                </p>
              </div>

              <div className="border-l-4 border-turquoise bg-white p-4 rounded-r-lg">
                <h4 className="font-bold text-navy mb-2">2. Organizational Readiness Crisis</h4>
                <p className="text-gray-700">
                  Zero organizations had implemented AI policies, provided enterprise accounts, or offered
                  guidance. Employees were operating in silos with no direction from administration,
                  creating both security risks and missed opportunities for strategic implementation.
                </p>
              </div>

              <div className="border-l-4 border-turquoise bg-white p-4 rounded-r-lg">
                <h4 className="font-bold text-navy mb-2">3. Ethical and Responsible Use Framework</h4>
                <p className="text-gray-700">
                  No participant had been trained on the "Big Three" AI risks (accuracy/hallucinations,
                  bias/pale-male data, privacy/data training). They were unaware of cognitive biases that
                  AI amplifies, ethical frameworks for decision-making, or sustainability considerations.
                </p>
              </div>
            </div>

            <Quote
              text="Our organization has said very little about AI. Employees are using it in silos with no direction from administration."
              author="Session 1 Participant"
            />

            <p className="text-lg leading-relaxed text-gray-700 mt-6">
              WPTI partnered with Meet the Moment to address this paradox head-on: transform high
              individual adoption (87%) combined with dangerously low organizational preparedness (0%
              policies, 22.7% enterprise accounts) into strategic, secure, and sustainable AI integration.
            </p>
          </div>
        </Section>

        {/* Our Approach */}
        <Section id="approach" title="Our Approach: Four Weeks to Transformation">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Meet the Moment designed a comprehensive 4-week intensive that balanced technical skill-building
              with ethical frameworks, organizational change management, and hands-on application development.
              The program was built on three pedagogical pillars:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-turquoise text-white p-4 rounded-lg text-center">
                <Zap size={32} className="mx-auto mb-2" />
                <h4 className="font-bold mb-2">Practice Over Theory</h4>
                <p className="text-sm">70% hands-on activities, 30% instruction</p>
              </div>
              <div className="bg-navy text-white p-4 rounded-lg text-center">
                <Shield size={32} className="mx-auto mb-2" />
                <h4 className="font-bold mb-2">Ethics First</h4>
                <p className="text-sm">Responsible AI integrated into every session</p>
              </div>
              <div className="bg-warmYellow text-navy p-4 rounded-lg text-center">
                <Users size={32} className="mx-auto mb-2" />
                <h4 className="font-bold mb-2">Peer Learning</h4>
                <p className="text-sm">Collaborative problem-solving and shared discovery</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy mt-8 mb-4">4-Week Curriculum Framework</h3>

            {/* Session 1 */}
            <div className="bg-white border-2 border-turquoise rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-turquoise mb-1">Week 1 • October 31, 2025</div>
                  <h4 className="text-xl font-bold text-navy">AI Basics & Workforce Disruption</h4>
                </div>
                <div className="bg-turquoise text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Foundation
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Established baseline understanding and confronted fears. Participants explored what AI is
                (and isn't), conducted live polling to surface concerns, and practiced the CRAFT Framework
                for effective prompting.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-navy mb-2">Key Activities</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Live polling: usage patterns & concerns</li>
                    <li>• CRAFT Framework workshop</li>
                    <li>• AI platforms comparison</li>
                    <li>• Security assessment baseline</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-navy mb-2">Tools Introduced</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• ChatGPT (OpenAI)</li>
                    <li>• Claude (Anthropic)</li>
                    <li>• Gemini (Google)</li>
                    <li>• Microsoft Copilot</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-beige p-3 rounded">
                <strong className="text-navy">Breakthrough Moment:</strong> <span className="text-gray-700">
                  Discovery that 73% were using personal accounts sparked urgent conversation about
                  organizational responsibility and data governance.
                </span>
              </div>
            </div>

            {/* Session 2 */}
            <div className="bg-white border-2 border-navy rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-navy mb-1">Week 2 • November 7, 2025</div>
                  <h4 className="text-xl font-bold text-navy">Prompting 101 & Putting AI to Work</h4>
                </div>
                <div className="bg-navy text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Application
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Moved from basic queries to sophisticated workflows. The Drawing Communication Game
                demonstrated the critical importance of clear instructions, setting up the Stanford H1-H5
                Human+AI Augmentation framework.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-navy mb-2">Key Activities</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Drawing Communication Game</li>
                    <li>• Workflow mapping exercise</li>
                    <li>• Creating GPTs, Gems, and Agents</li>
                    <li>• Deep research demonstrations</li>
                    <li>• Titanic dataset analysis (4 platforms)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-navy mb-2">Advanced Tools</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• ChatGPT Projects & Custom GPTs</li>
                    <li>• Google Gemini Gems</li>
                    <li>• Microsoft Copilot Agents</li>
                    <li>• Google NotebookLM (RAG)</li>
                    <li>• Zapier automations</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-beige p-3 rounded">
                <strong className="text-navy">Breakthrough Moment:</strong> <span className="text-gray-700">
                  Carlton analyzed the Titanic dataset across all 4 major platforms in real-time, discovering
                  that Claude provided the most interactive visualizations. Practical comparison made abstract
                  concepts concrete.
                </span>
              </div>
            </div>

            {/* Session 3 */}
            <div className="bg-white border-2 border-warmYellow rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">Week 3 • November 14, 2025</div>
                  <h4 className="text-xl font-bold text-navy">Responsible AI Practices & Vibe Coding</h4>
                </div>
                <div className="bg-warmYellow text-navy px-3 py-1 rounded-full text-sm font-semibold">
                  Ethics & Creation
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The most transformative session. Participants confronted cognitive biases through interactive
                exercises ($20 auction, giraffe neck quiz, murder mystery), then applied ethical frameworks
                before building 11 functional web applications in 90 minutes.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-navy mb-2">Key Activities</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• $20 Auction (Moloch Trap)</li>
                    <li>• Giraffe Neck Quiz (Anchoring Bias)</li>
                    <li>• AI Trolley Problems interactive</li>
                    <li>• Murder Mystery (Attention Exercise)</li>
                    <li>• Vibe Coding Hackathon (90 min)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-navy mb-2">Frameworks Taught</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Big Three AI Risks</li>
                    <li>• Circles of Control/Influence/Concern</li>
                    <li>• Green/Yellow/Red Light Categories</li>
                    <li>• 5-Slide Pitch Deck Framework</li>
                    <li>• Stateless Application Design</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-3">
                <strong className="text-red-800">Critical Realization:</strong> <span className="text-gray-700">
                  Participants grasped that the same cognitive biases that make humans vulnerable to
                  manipulation (sunk cost fallacy, anchoring, confirmation bias) are amplified when we use AI.
                  This wasn't theoretical—they experienced it firsthand.
                </span>
              </div>
            </div>

            {/* Session 4 */}
            <div className="bg-white border-2 border-turquoise rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-turquoise mb-1">Week 4 • November 21, 2025</div>
                  <h4 className="text-xl font-bold text-navy">Forging the Future: AI Adoption Strategy</h4>
                </div>
                <div className="bg-turquoise text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Implementation
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Culminating "Shark Tank" challenge where participants developed comprehensive 90-day AI
                adoption playbooks for five realistic organizational scenarios. Synthesized all prior learning
                into actionable strategic plans with phased implementation roadmaps.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-navy mb-2">Key Activities</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 5 organizational scenario analyses</li>
                    <li>• 90-day playbook development</li>
                    <li>• Strategic pitch presentations</li>
                    <li>• Peer evaluation and feedback</li>
                    <li>• Implementation planning workshops</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-navy mb-2">Deliverables</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Comprehensive AI adoption playbooks</li>
                    <li>• Risk assessment frameworks</li>
                    <li>• Security and policy templates</li>
                    <li>• Budget justification models</li>
                    <li>• Change management strategies</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-beige p-3 rounded">
                <strong className="text-navy">Transformation Complete:</strong> <span className="text-gray-700">
                  Participants who began asking "What is AI?" were now confidently presenting strategic
                  AI adoption plans to organizational leaders, complete with ROI projections, risk mitigation,
                  and phased implementation timelines.
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* The Journey */}
        <Section id="journey" title="The Journey: Week-by-Week Transformation">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              The true power of this cohort wasn't just in the curriculum—it was in watching 30 workforce
              professionals move from uncertainty to mastery, from fear to confidence, from consumers to creators.
            </p>

            <div className="relative border-l-4 border-turquoise pl-8 space-y-8 my-8">
              {/* Week 1 Journey */}
              <div>
                <div className="absolute -left-4 bg-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Week 1: From Fear to Foundation</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Where they started:</strong> Mixed emotions—41% positive (excited, curious), 31% negative
                  (anxious, scared, concerned). The room buzzed with nervous energy. Top concern: "They won't be
                  able to adapt fast enough" (27%), revealing participants' deep anxiety about serving clients in
                  an AI-transformed job market.
                </p>
                <Quote
                  text="I use AI every day, but I'm terrified I'm doing something wrong. My organization hasn't given us any guidance."
                  author="Week 1 Participant"
                />
                <p className="text-gray-700 mb-3">
                  <strong>First breakthrough:</strong> When polling revealed that 73% were using personal accounts,
                  the room went silent. This wasn't about individual failure—it was systemic. Organizations had left
                  employees to navigate AI alone, creating massive data exposure risks.
                </p>
                <p className="text-gray-700">
                  <strong>By end of Week 1:</strong> Participants understood the CRAFT Framework (Context, Role,
                  Action, Format, Tone) and had compared outputs across four major platforms. Fear didn't disappear,
                  but it was now coupled with structure and vocabulary.
                </p>
              </div>

              {/* Week 2 Journey */}
              <div>
                <div className="absolute -left-4 bg-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Week 2: Building Confidence Through Complexity</h3>
                <p className="text-gray-700 mb-3">
                  <strong>The Drawing Game shift:</strong> Teams struggled to recreate drawings from verbal instructions
                  alone. The winning team's strategy? "One voice, clear instructions, constant feedback." This wasn't
                  just a game—it was the entire theory of Human+AI collaboration distilled into 15 minutes.
                </p>
                <Quote
                  text="I finally understand why my AI outputs were so inconsistent. I was giving it conflicting instructions, just like we did in the drawing game!"
                  author="Week 2 Participant"
                />
                <p className="text-gray-700 mb-3">
                  <strong>Confidence compounding:</strong> Carlton analyzed the Titanic dataset across ChatGPT, Claude,
                  Gemini, and Copilot simultaneously, discovering that 59% of children under 16 survived versus 38%
                  overall survival rate. More importantly, he discovered each platform's strengths: Claude for
                  visualizations, NotebookLM for document Q&A, ChatGPT for iterative analysis.
                </p>
                <p className="text-gray-700">
                  <strong>Ariana's question</strong> about GPTs versus chatbots led to a deep dive into Retrieval
                  Augmented Generation (RAG), showing how the cohort had evolved from "What is AI?" to "Which
                  architecture best solves this specific problem?"
                </p>
              </div>

              {/* Week 3 Journey */}
              <div>
                <div className="absolute -left-4 bg-warmYellow text-navy rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Week 3: Ethics, Biases, and Creation</h3>
                <p className="text-gray-700 mb-3">
                  <strong>The $20 auction:</strong> Participants kept bidding for a $20 bill, driving the price to $40,
                  $60, then $80—desperate to not lose their prior investment. When Joshua finally stopped the auction,
                  the lesson landed hard: This is the Moloch Trap. This is how organizations get stuck in failing AI
                  projects, throwing good money after bad.
                </p>
                <Quote
                  text="Oh my god, we're doing this right now with our case management system. We've spent $100K and it still doesn't work, but we keep adding features because we can't admit it was the wrong choice."
                  author="Week 3 Participant"
                />
                <p className="text-gray-700 mb-3">
                  <strong>The giraffe neck revelation:</strong> After being primed with their phone number, participants
                  guessed giraffe neck length anywhere from 5 to 247 inches (actual: 72 inches). The anchoring bias
                  became visceral—irrelevant numbers unconsciously shaped their estimates. "This is what happens when
                  we prompt AI with biased examples," someone realized aloud.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Then came the hackathon:</strong> 90 minutes to build functional applications using vibe
                  coding platforms (Lovable, Bolt, Replit). Participants created:
                </p>
                <ul className="text-gray-700 space-y-1 ml-6 mb-3">
                  <li>• SCEP Job Seeker Screening (distinguishing employment vs. social engagement seekers)</li>
                  <li>• Alumni Job & Event Center (connecting graduates with opportunities)</li>
                  <li>• Pathfinder Compass (career navigation tool)</li>
                  <li>• Policy-Pal (organizational policy Q&A using RAG)</li>
                  <li>• Skincare Routine Personalizer (demonstrating versatility of skills)</li>
                  <li>...and 6 more functional applications</li>
                </ul>
                <p className="text-gray-700">
                  <strong>The transformation was visible:</strong> Participants who had never coded built working
                  applications in 90 minutes. But more importantly, they did it <em>responsibly</em>—considering
                  data privacy, accessibility, and sustainability before writing a single prompt.
                </p>
              </div>

              {/* Week 4 Journey */}
              <div>
                <div className="absolute -left-4 bg-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Week 4: From Practitioners to Strategic Leaders</h3>
                <p className="text-gray-700 mb-3">
                  <strong>The Shark Tank challenge:</strong> Five organizational scenarios, ranging from a small
                  nonprofit with $0 budget to a large agency with enterprise resources but bureaucratic barriers.
                  Participants had to develop 90-day AI adoption playbooks covering security, training, infrastructure,
                  and change management.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>The presentations were stunning:</strong> Participants who had started four weeks ago
                  asking "What is ChatGPT?" were now presenting sophisticated analyses including:
                </p>
                <ul className="text-gray-700 space-y-1 ml-6 mb-3">
                  <li>• ROI calculations for enterprise AI licenses</li>
                  <li>• Phased migration plans from personal to organizational accounts</li>
                  <li>• Risk assessment frameworks (accuracy, bias, privacy)</li>
                  <li>• Change management strategies addressing resistance</li>
                  <li>• Policy templates with green/yellow/red light use cases</li>
                </ul>
                <Quote
                  text="Four weeks ago I didn't know what a GPT was. Today I presented a comprehensive AI adoption strategy to my executive director. She wants to implement it immediately."
                  author="Week 4 Participant"
                />
                <p className="text-gray-700">
                  <strong>The culmination:</strong> Participants left with not just skills, but strategic frameworks,
                  implementation roadmaps, peer networks, and the confidence to lead their organizations through AI
                  transformation. The question had shifted from "Should we use AI?" to "How do we implement AI
                  responsibly, effectively, and sustainably?"
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* The Results */}
        <Section id="results" title="The Results: Quantitative & Qualitative Outcomes">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-navy mb-4">Kirkpatrick Evaluation Results</h3>
            <p className="text-gray-700 mb-6">
              Using the Kirkpatrick Four-Level Training Evaluation Model, we assessed impact across reaction,
              learning, behavior, and results:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {kirkpatrickScores.map((level, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-navy">{level.level}</h4>
                    <div className="text-3xl font-bold" style={{ color: level.color }}>
                      {level.score}/{level.maxScore}
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-turquoise text-white text-xs px-2 py-1 rounded font-semibold">
                      {level.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{level.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${(level.score / level.maxScore) * 100}%`,
                        backgroundColor: level.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-navy mt-8 mb-4">Quantitative Outcomes</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-turquoise text-white p-6 rounded-lg text-center">
                <div className="text-5xl font-bold mb-2">67%</div>
                <div className="text-sm">Daily AI Users</div>
                <div className="text-xs mt-2 opacity-90">Up from baseline awareness</div>
              </div>
              <div className="bg-navy text-white p-6 rounded-lg text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-sm">Security Awareness</div>
                <div className="text-xs mt-2 opacity-90">Understanding enterprise account necessity</div>
              </div>
              <div className="bg-warmYellow text-navy p-6 rounded-lg text-center">
                <div className="text-5xl font-bold mb-2">11</div>
                <div className="text-sm">Applications Built</div>
                <div className="text-xs mt-2">In a single 90-minute session</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-navy mb-3">Pre-Training Baseline</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>73%</strong> using personal AI accounts</li>
                  <li>• <strong>0%</strong> had organizational AI policies</li>
                  <li>• <strong>31%</strong> expressing negative emotions</li>
                  <li>• <strong>27%</strong> top concern: adaptation speed</li>
                  <li>• <strong>6 platforms</strong> fragmentation</li>
                </ul>
              </div>

              <div className="bg-white border border-turquoise rounded-lg p-6">
                <h4 className="font-bold text-navy mb-3">Post-Training Outcomes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>100%</strong> understanding of enterprise security</li>
                  <li>• <strong>30 participants</strong> ready to draft policies</li>
                  <li>• <strong>Confidence surge</strong> in AI implementation</li>
                  <li>• <strong>Focus shift</strong> to strategic opportunity</li>
                  <li>• <strong>11 functional apps</strong> demonstrating capability</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy mt-8 mb-4">Qualitative Outcomes</h3>

            <div className="space-y-4">
              <div className="bg-beige border-l-4 border-turquoise p-5 rounded-r-lg">
                <h4 className="font-bold text-navy mb-2">Confidence & Self-Efficacy</h4>
                <Quote
                  text="I went from feeling overwhelmed and scared to excited about the possibilities. I now feel equipped to guide my team and our clients."
                />
                <Quote
                  text="This training didn't just teach me tools—it gave me the confidence to experiment, fail, and keep learning."
                />
              </div>

              <div className="bg-beige border-l-4 border-navy p-5 rounded-r-lg">
                <h4 className="font-bold text-navy mb-2">Practical Application Intent</h4>
                <Quote
                  text="I'm implementing a workflow automation for our intake process on Monday. I already mapped it out and tested it with ChatGPT Projects."
                />
                <Quote
                  text="I built a policy Q&A tool using NotebookLM during the session. My supervisor wants to roll it out to all staff next month."
                />
              </div>

              <div className="bg-beige border-l-4 border-warmYellow p-5 rounded-r-lg">
                <h4 className="font-bold text-navy mb-2">Mindset Shifts</h4>
                <Quote
                  text="I started thinking AI was taking jobs. Now I see it as a tool to help my clients become more competitive and resilient."
                />
                <Quote
                  text="The cognitive bias exercises changed everything. Now I see AI as something that requires critical thinking, not blind trust."
                />
              </div>

              <div className="bg-beige border-l-4 border-turquoise p-5 rounded-r-lg">
                <h4 className="font-bold text-navy mb-2">Organizational Impact</h4>
                <Quote
                  text="I'm presenting our 90-day AI adoption plan to our board next week. This training gave me everything I need to make the case."
                />
                <Quote
                  text="We're forming an AI task force at my organization. Three of us from this cohort are leading it."
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy mt-8 mb-4">Unexpected Wins</h3>

            <div className="bg-gradient-to-r from-turquoise to-navy text-white p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Cross-Organizational Collaboration:</strong> Participants from different organizations
                    are now sharing AI policies, prompt libraries, and implementation strategies via a peer community.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Ripple Training Effect:</strong> Several participants are now training their entire teams
                    using frameworks and materials from this cohort.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Executive Buy-In:</strong> Multiple participants reported that their presentations to
                    leadership resulted in immediate budget allocations for enterprise AI tools.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Client-Facing Programs:</strong> Several participants are developing "AI for Job Seekers"
                    workshops based on what they learned.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Key Success Factors */}
        <Section id="success-factors" title="Key Success Factors">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              What made this cohort succeed where so many AI training programs fall short?
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-turquoise rounded-lg p-6">
                <h4 className="font-bold text-turquoise text-lg mb-3 flex items-center">
                  <Zap className="mr-2" size={24} />
                  Practice Over Presentations
                </h4>
                <p className="text-gray-700">
                  70% of session time was hands-on activities. Participants didn't watch AI demonstrations—they
                  ran experiments, built applications, and solved real problems. The learning wasn't theoretical;
                  it was experiential.
                </p>
              </div>

              <div className="bg-white border-2 border-navy rounded-lg p-6">
                <h4 className="font-bold text-navy text-lg mb-3 flex items-center">
                  <Shield className="mr-2" size={24} />
                  Ethics First, Not Last
                </h4>
                <p className="text-gray-700">
                  Rather than treating responsible AI as an afterthought, we led with cognitive biases, ethical
                  frameworks, and the Big Three risks. Participants learned <em>why</em> to be careful before
                  learning <em>how</em> to be powerful.
                </p>
              </div>

              <div className="bg-white border-2 border-warmYellow rounded-lg p-6">
                <h4 className="font-bold text-warmYellow text-lg mb-3 flex items-center">
                  <Users className="mr-2" size={24} />
                  Peer Learning Architecture
                </h4>
                <p className="text-gray-700">
                  Structured collaboration meant participants learned from each other's questions, breakthroughs,
                  and challenges. The Drawing Game, Titanic analysis comparison, and hackathon reviews created
                  natural peer teaching moments.
                </p>
              </div>

              <div className="bg-white border-2 border-turquoise rounded-lg p-6">
                <h4 className="font-bold text-turquoise text-lg mb-3 flex items-center">
                  <Target className="mr-2" size={24} />
                  Real-World Scenarios
                </h4>
                <p className="text-gray-700">
                  Every exercise connected to participants' actual work: workforce development, client services,
                  organizational challenges. The Shark Tank scenarios were realistic, not hypothetical, making
                  implementation planning immediately applicable.
                </p>
              </div>

              <div className="bg-white border-2 border-navy rounded-lg p-6">
                <h4 className="font-bold text-navy text-lg mb-3 flex items-center">
                  <Brain className="mr-2" size={24} />
                  Progressive Complexity
                </h4>
                <p className="text-gray-700">
                  Each week built on the previous: basics → workflows → ethics & creation → strategy. Participants
                  couldn't skip ahead, ensuring foundational understanding before advanced application.
                </p>
              </div>

              <div className="bg-white border-2 border-warmYellow rounded-lg p-6">
                <h4 className="font-bold text-warmYellow text-lg mb-3 flex items-center">
                  <CheckCircle className="mr-2" size={24} />
                  Immediate Application
                </h4>
                <p className="text-gray-700">
                  Participants didn't wait to use what they learned. By Week 2, they were already implementing
                  workflow automations. By Week 3, they'd built functional applications. Theory became practice
                  within hours, not weeks.
                </p>
              </div>
            </div>

            <div className="bg-navy text-white p-6 rounded-lg mt-8">
              <h4 className="text-xl font-bold mb-4 text-turquoise">The Instructor Factor</h4>
              <p className="text-gray-200 mb-4">
                Joshua Peskay (Meet the Moment) and Kim Snyder brought complementary expertise: nonprofit
                technology implementation combined with workforce development sector knowledge. This wasn't
                generic "AI for Business"—it was specifically designed for the unique challenges of workforce
                development professionals serving vulnerable populations.
              </p>
              <p className="text-gray-200">
                More importantly, the facilitation style prioritized psychological safety. No question was too
                basic. Mistakes were celebrated as learning opportunities. The $20 auction and cognitive bias
                exercises normalized being wrong—essential for fostering experimentation with AI.
              </p>
            </div>
          </div>
        </Section>

        {/* Looking Ahead */}
        <Section id="looking-ahead" title="Looking Ahead: 60 & 90-Day Follow-Ups">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              The true measure of training effectiveness isn't what participants know when they leave—it's what
              they do in the weeks and months that follow. We've established a structured follow-up framework
              to track sustained practice, organizational impact, and long-term outcomes.
            </p>

            <div className="bg-beige border-2 border-turquoise rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                <Calendar className="text-turquoise mr-2" size={24} />
                60-Day Check-In (To Be Completed: January 20, 2026)
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-navy mb-2">Key Metrics to Track</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Daily AI usage rate:</strong> Compare to baseline 67%, tracking sustained engagement</li>
                    <li>• <strong>Organizational account adoption:</strong> Shift from 73% personal to enterprise accounts</li>
                    <li>• <strong>Platform consolidation:</strong> Reduction from 6-platform fragmentation</li>
                    <li>• <strong>Security posture improvement:</strong> Implementation of data governance practices</li>
                    <li>• <strong>Policy implementation:</strong> How many organizations have drafted AI policies?</li>
                    <li>• <strong>Skill retention:</strong> Self-reported competency in 4 core learning objectives</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-semibold text-navy mb-2">What We Hope to See</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ At least 50% of participants have migrated to organizational accounts</li>
                    <li>✓ 10+ organizations have drafted preliminary AI usage policies</li>
                    <li>✓ Participants are training colleagues on AI basics</li>
                    <li>✓ Specific workflow automations implemented and functioning</li>
                    <li>✓ Maintained or increased daily AI usage frequency</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-semibold text-navy mb-2">Challenges We're Monitoring</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Organizational resistance to enterprise account budgets</li>
                    <li>• IT department delays in security policy approvals</li>
                    <li>• Confidence erosion when participants encounter complex problems alone</li>
                    <li>• Platform feature changes requiring re-learning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-beige border-2 border-navy rounded-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                <Calendar className="text-navy mr-2" size={24} />
                90-Day Check-In (To Be Completed: February 20, 2026)
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-navy mb-2">Kirkpatrick Level 4: Results Measurement</h4>
                  <p className="text-gray-700 mb-3">
                    This is where we move beyond individual skills and assess organizational impact:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Time savings quantified:</strong> How many hours per week saved through AI automation?</li>
                    <li>• <strong>Client outcome improvements:</strong> Have AI-enhanced services improved job placement rates?</li>
                    <li>• <strong>Cost efficiencies realized:</strong> ROI on enterprise AI licenses vs. efficiency gains</li>
                    <li>• <strong>Service delivery enhancements:</strong> Expanded capacity to serve more clients</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-semibold text-navy mb-2">Ripple Effects to Measure</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Colleagues trained:</strong> How many staff members have participants trained?</li>
                    <li>• <strong>Policy changes:</strong> Have organizations formally adopted AI policies?</li>
                    <li>• <strong>Budget allocations:</strong> How many secured funding for enterprise AI tools?</li>
                    <li>• <strong>Client-facing programs:</strong> Have participants launched "AI for Job Seekers" workshops?</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-navy to-turquoise text-white p-4 rounded">
                  <h5 className="font-semibold mb-2">ROI Analysis</h5>
                  <p className="text-sm mb-2">
                    Based on research context data showing WPTI's projected 1,756% ROI vs. industry average 300%,
                    we'll measure:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Training cost per participant: $XXX</li>
                    <li>• Time savings value: $X,XXX per participant annually</li>
                    <li>• Organizational risk mitigation: Data breach avoidance value</li>
                    <li>• Service capacity expansion: Additional clients served</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white border-2 border-turquoise rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Ongoing Support & Community of Practice</h3>
              <p className="text-gray-700 mb-4">
                Sustaining AI literacy requires continued connection and learning. We've established:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-turquoise mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Monthly Office Hours:</strong> Ongoing support for troubleshooting, advanced topics, and peer learning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-turquoise mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Shared Prompt Library:</strong> Collaborative repository of 50+ tested prompts for workforce development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-turquoise mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>AI Champions Network:</strong> Peer educators who lead training at their organizations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-turquoise mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Resource Hub:</strong> Continuously updated guides, templates, and case studies</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Conclusion */}
        <Section id="conclusion" title="Conclusion: From Adoption to Transformation">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              This case study documents more than a successful training program—it captures a sector-wide
              transformation moment. Thirty workforce development professionals entered this cohort anxious
              about AI's disruptive potential. They left as confident practitioners, ethical implementers,
              and organizational change leaders.
            </p>

            <Quote
              text="This wasn't just a training—it was a transformation. I now have the knowledge, tools, and confidence to lead my organization through the AI revolution. More importantly, I know how to do it responsibly."
              author="Cohort Participant"
            />

            <div className="bg-gradient-to-br from-navy via-turquoise to-warmYellow text-white p-8 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4">The Transformation in Numbers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-warmYellow">Before Training</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 73% using personal accounts (security risk)</li>
                    <li>• 0% with organizational AI policies</li>
                    <li>• 31% expressing negative emotions</li>
                    <li>• Top concern: adaptation speed anxiety</li>
                    <li>• Basic AI literacy, no strategic framework</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-warmYellow">After Training</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 100% understand enterprise security necessity</li>
                    <li>• 30 participants equipped to draft policies</li>
                    <li>• Confidence surge in AI implementation</li>
                    <li>• Strategic focus on responsible adoption</li>
                    <li>• Building applications, leading change</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              The implications extend far beyond individual skill development. These 30 professionals now serve
              as AI champions within their organizations, training colleagues, drafting policies, and advocating
              for responsible implementation. Their organizations are shifting from reactive personal account usage
              to proactive, secure, strategic AI integration.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Most significantly, participants are now equipped to serve their clients—job seekers, career changers,
              and vulnerable populations—in an AI-transformed labor market. The fear has been replaced with capability:
              "How do we help our clients adapt?" is no longer an anxious question but an answerable challenge.
            </p>

            <div className="bg-beige border-l-4 border-turquoise p-6 rounded-r-lg my-6">
              <h4 className="font-bold text-navy mb-3">What Makes This Model Replicable</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Practice-over-theory approach (70/30 ratio)</li>
                <li>✓ Ethics-first framework before technical power</li>
                <li>✓ Real-world scenarios relevant to participants' work</li>
                <li>✓ Progressive complexity with scaffolded support</li>
                <li>✓ Peer learning and psychological safety</li>
                <li>✓ Immediate application, not delayed implementation</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              As workforce development organizations nationwide grapple with AI's impact, this cohort demonstrates
              a clear path forward: comprehensive training that balances technical skill-building with ethical
              awareness, organizational change management, and practical application. The 60-day and 90-day
              follow-ups will tell the next chapter of this story—sustained practice, organizational transformation,
              and measurable impact on the communities these professionals serve.
            </p>

            <div className="text-center mt-8 pt-8 border-t-2 border-turquoise">
              <p className="text-2xl font-bold text-navy mb-4">
                Ready to Transform Your Team?
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Learn how Meet the Moment can design a custom AI literacy program for your organization.
              </p>
              <a
                href="https://mtm.now"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-turquoise text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy transition-colors"
              >
                Contact Meet the Moment
                <ExternalLink className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </Section>

        {/* Applications Showcase */}
        <Section id="applications" title="Session 3: Applications Built" defaultExpanded={false}>
          <p className="text-gray-700 mb-6">
            In a single 90-minute vibe coding session, participants built 11 functional web applications
            demonstrating both technical capability and creativity:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {session3Applications.map((app) => (
              <div key={app.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-turquoise transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-navy">{app.name}</h4>
                  <span className="text-xs bg-beige text-navy px-2 py-1 rounded">{app.platform}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{app.description}</p>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-turquoise hover:underline flex items-center"
                >
                  View Application
                  <ExternalLink className="ml-1" size={14} />
                </a>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default CaseStudy;
