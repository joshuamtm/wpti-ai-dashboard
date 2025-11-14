// WPTI AI Training Workshop - Session 1 Data
// Comprehensive dataset from analysis

export const workshopMetrics = {
  totalParticipants: 30,
  sessionsCompleted: 3,
  totalSessions: 4,
  officeHours: 'Wednesdays, 4-5 PM Eastern',
  sessions: [
    {
      number: 1,
      date: 'October 31, 2025',
      location: 'New York City',
      title: 'AI Basics & Workforce Disruption',
      status: 'completed'
    },
    {
      number: 2,
      date: 'November 7, 2025',
      location: 'Civic Hall, NYC',
      title: 'Prompting 101 & Putting AI to Work',
      status: 'completed'
    },
    {
      number: 3,
      date: 'November 14, 2025',
      location: 'New York City',
      title: 'Responsible AI Practices & Vibe Coding',
      status: 'completed'
    },
    {
      number: 4,
      date: 'November 21, 2025',
      location: 'Civic Hall, NYC',
      title: 'Shark Tank: AI Project Pitches',
      status: 'upcoming'
    }
  ]
};

export const aiUsageFrequency = [
  { frequency: 'Every day', count: 20, percentage: 66.7 },
  { frequency: 'Once or twice', count: 6, percentage: 20.0 },
  { frequency: 'Not at all', count: 4, percentage: 13.3 },
];

export const topConcerns = [
  { concern: 'They won\'t be able to adapt fast enough', count: 8, percentage: 26.7 },
  { concern: 'Entry-level jobs will disappear', count: 7, percentage: 23.3 },
  { concern: 'They won\'t have skills to compete', count: 6, percentage: 20.0 },
  { concern: 'Other concerns', count: 4, percentage: 13.3 },
  { concern: 'I don\'t know how to help them prepare', count: 3, percentage: 10.0 },
  { concern: 'They\'ll lose jobs to automation', count: 2, percentage: 6.7 },
];

export const accountTypes = [
  { type: 'Personal Account', count: 16, percentage: 72.7, risk: 'high' },
  { type: 'Work Account', count: 5, percentage: 22.7, risk: 'low' },
  { type: 'Not sure', count: 1, percentage: 4.5, risk: 'medium' },
];

export const platformAdoption = [
  { platform: 'Microsoft 365 (free Copilot)', count: 10 },
  { platform: 'Google Workspace (Gemini)', count: 7 },
  { platform: 'Other/Not sure', count: 7 },
  { platform: 'ChatGPT Team/Enterprise', count: 6 },
  { platform: 'Microsoft 365 (Copilot Add-on)', count: 5 },
  { platform: 'Claude Team', count: 1 },
];

export const sentimentData = [
  { feeling: 'Excited', frequency: 15, category: 'positive' },
  { feeling: 'Curious', frequency: 12, category: 'positive' },
  { feeling: 'Unsure', frequency: 10, category: 'neutral' },
  { feeling: 'Confused', frequency: 8, category: 'neutral' },
  { feeling: 'Challenging', frequency: 7, category: 'negative' },
  { feeling: 'Efficiency', frequency: 6, category: 'positive' },
  { feeling: 'Cautious', frequency: 5, category: 'negative' },
  { feeling: 'Anxious', frequency: 4, category: 'negative' },
  { feeling: 'Concerned', frequency: 4, category: 'negative' },
  { feeling: 'Scared', frequency: 3, category: 'negative' },
];

export const sentimentOverview = [
  { sentiment: 'Positive', count: 33, percentage: 40.7 },
  { sentiment: 'Neutral', count: 23, percentage: 28.4 },
  { sentiment: 'Negative', count: 25, percentage: 30.9 },
];

export const themeDistribution = [
  { theme: 'Participant Concerns', count: 11 },
  { theme: 'Employer Questions', count: 13 },
  { theme: 'Organizational Issues', count: 20 },
];

export const kirkpatrickScores = [
  {
    level: 'Level 1: Reaction',
    score: 4.2,
    maxScore: 5.0,
    rating: 'Excellent',
    description: 'High engagement, active participation, positive feedback',
    color: '#2ecc71'
  },
  {
    level: 'Level 2: Learning',
    score: 3.8,
    maxScore: 5.0,
    rating: 'Strong',
    description: 'Conceptual understanding gained, practical skills demonstrated',
    color: '#3498db'
  },
  {
    level: 'Level 3: Behavior',
    score: 4.0,
    maxScore: 5.0,
    rating: 'Very Good',
    description: 'High likelihood of application, clear behavioral intentions',
    color: '#9b59b6'
  },
  {
    level: 'Level 4: Results',
    score: 2.5,
    maxScore: 5.0,
    rating: 'Baseline Established',
    description: 'Too early to measure, metrics framework in place',
    color: '#95a5a6'
  },
];

export const keyFindings = [
  {
    id: 1,
    title: '67% Daily AI Users',
    description: 'Two-thirds of workforce professionals use AI every single day',
    impact: 'high',
    icon: 'TrendingUp',
    metric: '67%',
    category: 'adoption'
  },
  {
    id: 2,
    title: 'Data Security Crisis',
    description: '73% using personal accounts, exposing sensitive participant data',
    impact: 'critical',
    icon: 'AlertTriangle',
    metric: '73%',
    category: 'security'
  },
  {
    id: 3,
    title: 'Adaptation Over Automation',
    description: 'Top concern is adaptation speed (27%), not job loss (7%)',
    impact: 'high',
    icon: 'Zap',
    metric: '27%',
    category: 'insight'
  },
  {
    id: 4,
    title: 'Cautious Optimism',
    description: 'Positive-to-negative sentiment ratio of 1.3:1',
    impact: 'medium',
    icon: 'Heart',
    metric: '1.3:1',
    category: 'sentiment'
  },
  {
    id: 5,
    title: 'Platform Fragmentation',
    description: '6 different AI platforms across organizations',
    impact: 'medium',
    icon: 'GitBranch',
    metric: '6',
    category: 'infrastructure'
  },
  {
    id: 6,
    title: 'Organizational Concerns Dominate',
    description: '20 organizational issues captured - nearly half of all concerns',
    impact: 'high',
    icon: 'Building2',
    metric: '45%',
    category: 'governance'
  },
];

export const recommendations = [
  {
    priority: 'URGENT',
    timeline: '0-30 Days',
    title: 'Security & Governance',
    items: [
      'Migrate 73% of users from personal to enterprise accounts',
      'Draft model AI usage policy template',
      'Host emergency data privacy webinar',
      'Create "Is it safe?" decision tree for AI inputs'
    ],
    successMetric: '80% on enterprise accounts within 30 days'
  },
  {
    priority: 'HIGH',
    timeline: '30-90 Days',
    title: 'Platform Standardization',
    items: [
      'Conduct platform needs assessment',
      'Create platform-specific quick start guides',
      'Build shared prompt library (50+ templates)',
      'Launch AI Champions peer educator program'
    ],
    successMetric: '30+ AI Champions trained'
  },
  {
    priority: 'MEDIUM',
    timeline: '60-120 Days',
    title: 'Participant-Facing Programs',
    items: [
      'Pilot "AI for Job Seekers" curriculum',
      'Create multilingual AI literacy resources',
      'Launch "AI Resume Workshop" program',
      'Establish AI Office Hours for 1:1 support'
    ],
    successMetric: '500+ job seekers trained'
  },
  {
    priority: 'ONGOING',
    timeline: '4-12 Months',
    title: 'Long-Term Infrastructure',
    items: [
      'Secure enterprise AI license funding',
      'Integrate AI into ALL training programs',
      'Develop Kirkpatrick Level 4 measurement',
      'Publish research report on AI impact'
    ],
    successMetric: '100% programs include AI literacy'
  },
];

export const qualitativeThemes = {
  participants: [
    'Students initially believed AI was "crazy"',
    'How does AI affect my application process?',
    'Can AI make my resume "AI Friendly"?',
    'How does this affect future jobs?',
    'Using AI without knowing it\'s "cheating"',
    'Don\'t know how to use information correctly',
    'What is the level of AI knowledge I need to have?',
    'AI screening resumes and applications',
    'Using AI to help writing casenotes',
    'How can AI help with skills testing?',
    'Making communication smoother with AI',
  ],
  employers: [
    'How do we maximize using AI?',
    'Why partner if I can screen resumes with AI?',
    'Job applications screened by AI',
    'How other cities are using AI for workforce development',
    'How to train workers for entry-level opportunities?',
    'What training can you provide?',
    'What are these tools?',
    'How do we train staff on AI?',
    'What do our participants know about AI?',
    'Quick turnover due to lack of competitive pay',
    'No AI resumes',
    'Who should be thinking about AI?',
    'What do our participants know about AI?',
  ],
  organizations: [
    'Organization has said very little about AI',
    'Employees using AI in silos',
    'Aversion to change in government',
    'Slow IT implementation process',
    'How can we use AI to improve processes?',
    'How to automate processes?',
    'Guidelines for what you put into AI',
    'Implementing AI policies',
    'Data privacy and participant protection',
    'Deep fakes and misinformation',
    'Loss of autonomy and creativity',
    'Right to privacy',
    'Would clients benefit?',
    'How do we assign AI to staff?',
    'Create AI lessons for computer training class',
    'How can we use AI for independent job search?',
    'Approved tools: ChatGPT, Gemini, NotebookLM, Co-Pilot',
    'Organizations have employees who use it in silo',
    'No direction from administration',
    'Creative policies needed',
  ],
};

// Session 2 Data
export const session2Metrics = {
  date: 'November 7, 2025',
  location: 'Civic Hall, NYC',
  facilitators: ['Joshua Peskay', 'Kim Snyder (remote)'],
  keyActivities: [
    'Drawing Communication Game',
    'Workflow Mapping Exercise',
    'AI Package Creation (GPTs, Gems, Agents)',
    'Deep Research Demonstrations',
    'Exploratory Data Analysis with Titanic Dataset'
  ],
  toolsDemonstrated: [
    'ChatGPT (GPTs & Projects)',
    'Google Gemini (Gems)',
    'Microsoft Copilot (Agents)',
    'Google Notebook LM',
    'Claude (Projects)',
    'Zapier Automations'
  ],
  frameworks: [
    'Stanford H1-H5 Human+AI Augmentation',
    'Workflow Analysis & Mapping',
    'CRAFT Framework (continued from Session 1)'
  ]
};

export const session2Insights = {
  mainThemes: [
    'Human+AI Augmentation over Full Automation',
    'Workflow-Based Thinking',
    'Package Creation for Repetitive Tasks',
    'Deep Research Capabilities',
    'Clear Communication (Drawing Game Lesson)'
  ],
  participantHighlights: [
    {
      participant: 'Carlton',
      achievement: 'Analyzed Titanic dataset across all 4 major AI platforms',
      insight: 'Claude provided most interactive visualizations'
    },
    {
      participant: 'Ariana',
      question: 'Difference between GPTs and chatbots for policy Q&A',
      answer: 'Notebook LM best for document-based Q&A (Retrieval Augmented Generation)'
    }
  ],
  keyFinding: '49 out of 83 children under 16 survived Titanic (59% survival rate)',
  bestPractices: [
    'One designated voice for instructions (drawing game winner strategy)',
    'Break workflows into discrete steps before applying AI',
    'Use Notebook LM for policy documents to avoid hallucinations',
    'Review rigor should match task complexity'
  ]
};

// Session 3 Data
export const session3Metrics = {
  date: 'November 14, 2025',
  location: 'New York City',
  facilitators: ['Joshua Peskay', 'Kim Snyder'],
  keyActivities: [
    '$20 Auction (Moloch Trap Exercise)',
    'Giraffe Neck Quiz (Anchoring Bias)',
    'Circles of Control/Influence/Concern Framework',
    'AI Trolley Problems Interactive Tool',
    'Murder Mystery Attention Exercise',
    'Vibe Coding Hackathon'
  ],
  toolsDemonstrated: [
    'Nonprofit AI Trolley Problem',
    'EcoAIQ (Carbon Footprint Calculator)',
    'Bolt.new (Vibe Coding Platform)',
    'Lovable.dev (Vibe Coding Platform)',
    'Replit (Vibe Coding Platform)',
    'Product Requirements Document (PRD) Generator'
  ],
  frameworks: [
    'Circles of Control, Influence & Concern',
    'The Big Three AI Risks (Accuracy, Bias, Privacy)',
    'Green/Yellow/Red Light Application Categories',
    '5-Slide Pitch Deck Framework',
    'Stateless Application Design'
  ],
  applicationsBuilt: 11
};

export const session3Applications = [
  {
    id: 1,
    name: 'Coloring App',
    url: 'https://coloring.lovable.app',
    platform: 'Lovable',
    creator: 'Participant',
    description: 'Interactive coloring application'
  },
  {
    id: 2,
    name: 'SCEP Job Seeker Screening',
    url: 'https://scep-job-seeker-scre-hctg.bolt.host',
    platform: 'Bolt',
    creator: 'Participant',
    description: 'Distinguishes employment seekers from social engagement seekers'
  },
  {
    id: 3,
    name: 'Clear Your Plan',
    url: 'https://clear-your-plan.lovable.app',
    platform: 'Lovable',
    creator: 'Participant',
    description: 'Planning and goal-setting tool'
  },
  {
    id: 4,
    name: 'Pathfinder Compass',
    url: 'https://pathfinder-compass-32.lovable.app',
    platform: 'Lovable',
    creator: 'Participant',
    description: 'Career navigation application'
  },
  {
    id: 5,
    name: 'Thought Tangle Tracker',
    url: 'https://thought-tangle-tracker.lovable.app',
    platform: 'Lovable',
    creator: 'Participant',
    description: 'Mental clarity and organization tool'
  },
  {
    id: 6,
    name: 'Alumni Job & Event Center',
    url: 'https://alumni-job-and-event-c5yf.bolt.host',
    platform: 'Bolt',
    creator: 'Participant',
    description: 'Alumni engagement and job board application'
  },
  {
    id: 7,
    name: 'Beacon Center',
    url: 'https://beacon-center.lovable.app',
    platform: 'Lovable',
    creator: 'Participant',
    description: 'Resource center application'
  },
  {
    id: 8,
    name: 'Get-a-J0b',
    url: 'https://get-a-j0b.lovable.app',
    platform: 'Lovable',
    creator: 'Participant',
    description: 'Job search assistance tool'
  },
  {
    id: 9,
    name: 'Skincare Routine Personalizer',
    url: 'https://skincare-routine-per-djqc.bolt.host',
    platform: 'Bolt',
    creator: 'Ariana Baldomero',
    description: 'Personalized skincare recommendation app with AM/PM routines',
    featured: true
  },
  {
    id: 10,
    name: 'AI Job Sculptor',
    url: 'https://ai-job-sculptor.lovable.app',
    platform: 'Lovable',
    creator: 'Participant',
    description: 'Career path sculpting and planning tool'
  },
  {
    id: 11,
    name: 'Rox Quick Shortlist',
    url: 'https://rox-quick-shortlist.lovable.app',
    platform: 'Lovable',
    creator: 'Participant',
    description: 'Rapid candidate shortlisting application'
  }
];

export const session3Insights = {
  mainThemes: [
    'Responsible AI Implementation',
    'Cognitive Biases and AI',
    'Ethical Decision-Making Frameworks',
    'Data Privacy and Security',
    'Vibe Coding and Rapid Prototyping',
    'Stateless Application Design'
  ],
  cognitiveBiases: [
    {
      bias: 'Anchoring Bias',
      example: 'Giraffe neck quiz - phone number influenced guesses',
      lesson: 'Irrelevant data can unconsciously shape our estimates and AI prompts'
    },
    {
      bias: 'Sunk Cost Fallacy',
      example: '$20 auction - participants kept bidding to avoid losing invested money',
      lesson: 'Organizations can get trapped continuing AI projects based on investment, not value'
    },
    {
      bias: 'Confirmation Bias',
      example: 'Murder mystery - only seeing what we\'re told to look for',
      lesson: 'AI amplifies our tendency to seek information confirming existing beliefs'
    },
    {
      bias: 'Availability Heuristic',
      example: 'Discussed sharks vs cows (cows are 20x more deadly)',
      lesson: 'We overestimate risks we hear about frequently, underestimate actual dangers'
    }
  ],
  bigThreeRisks: [
    {
      risk: 'Accuracy (Hallucinations)',
      severity: 'Critical',
      inControl: true,
      mitigation: 'Always review AI outputs; implement "you are responsible" policies'
    },
    {
      risk: 'Bias (Pale-Male Data)',
      severity: 'High',
      inControl: true,
      mitigation: 'Test with diverse data; question vendor training sources; follow Dr. Joy Buolamwini'
    },
    {
      risk: 'Privacy (Data Training)',
      severity: 'Critical',
      inControl: true,
      mitigation: 'Use enterprise accounts only; never input PII or strategic data'
    }
  ],
  keyTakeaway: '11 functional applications built in one hour, demonstrating both the power and the responsibility of vibe coding. Participants learned that with these capabilities comes the obligation to build ethically, securely, and sustainably.'
};

export const chartColors = {
  primary: '#2B5F8E',    // Navy
  secondary: '#4AB5C4',  // Turquoise
  accent: '#F5D574',     // Warm Yellow
  success: '#2ecc71',
  warning: '#f39c12',
  danger: '#e74c3c',
  info: '#3498db',
  purple: '#9b59b6',
  gray: '#95a5a6',
};
