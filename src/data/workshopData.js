// WPTI AI Training Workshop - Session 1 Data
// Comprehensive dataset from analysis

export const workshopMetrics = {
  totalParticipants: 30,
  sessionDate: 'November 1, 2025',
  location: 'New York City',
  sessionNumber: 1,
  sessionTitle: 'AI Basics & Workforce Disruption',
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
