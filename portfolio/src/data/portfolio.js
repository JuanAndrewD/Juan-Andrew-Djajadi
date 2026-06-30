export const profile = {
  name: 'Juan Andrew Djajadi',
  shortName: 'Juan Andrew',
  initials: 'JA',
  location: 'Kuala Lumpur, Malaysia',
  tagline: 'Building intelligent, scalable systems at the intersection of AI, Cloud, and Systems Programming.',
  roles: [
    'AI & Machine Learning Engineer',
    'AWS Cloud Architect',
    'Full-Stack Developer',
    'Systems Programmer'
  ],
  email: 'notjuan2106@gmail.com',
  github: 'https://github.com/JuanAndrewD',
  linkedin: 'https://linkedin.com/in/juan-andrew-djajadi',
  about: [
    "I'm a Computer Science student driven by a passion for building intelligent, scalable systems at the intersection of AI, Cloud Architecture, and Systems Programming. My approach blends rigorous academic research with hands-on technical execution — whether I'm optimizing machine learning models or designing event-driven serverless backends.",
    'Beyond writing code, I lead community building as Head of Event Coordinator for the AWS Student Builder Group at Asia Pacific University, where I coordinate cross-functional teams and organize large-scale technical events to empower the next generation of cloud enthusiasts.'
  ],
  focus: [
    {
      title: 'Machine Learning & AI',
      desc: 'Predictive engines, neural network architectures (LSTMs, CNNs), and multimodal generative AI for document parsing and identity verification.'
    },
    {
      title: 'Cloud Architecture',
      desc: 'Robust serverless solutions on AWS (S3, Lambda, API Gateway, DynamoDB) powering high-availability applications.'
    },
    {
      title: 'Systems & Performance',
      desc: 'Low-level computer architecture, CPU registers, and assembly to optimize software performance from the hardware up.'
    }
  ]
};

export const stats = [
  { label: 'Hackathon Finalist Placements', value: 2, suffix: 'x' },
  { label: 'GPA / 4.00', value: 3.71, suffix: '' },
  { label: 'Production Projects', value: 3, suffix: '+' },
  { label: 'Months Leading Teams', value: 7, suffix: '' }
];

export const highlights = [
  { icon: '🥇', title: 'Top 10 Finalist', sub: 'AI Marathon 2026 · Global · Solo Project' },
  { icon: '🥈', title: 'Track Top 5 Finalist', sub: 'AWS CendekiAwan 2026 Showcase' },
  { icon: '🏅', title: 'WorldQuant Gold & Silver', sub: 'Quantitative Challenge Certificates' },
  { icon: '🎓', title: 'GPA 3.71', sub: 'BASc Computer Science · APU' }
];

export const projects = [
  {
    name: 'LIFEMAXX',
    subtitle: 'Gamified AI Self-Improvement Platform',
    period: 'Jun 2026',
    badge: 'Hackathon · H0 Zero Stack',
    accent: '#7C3AED',
    link: 'https://lifemaxx-five.vercel.app/',
    linkLabel: 'Live Demo',
    description:
      'An end-to-end, full-stack, AI-driven personal growth platform built on a serverless, zero-ops philosophy. Converts onboarding profiles into parallelized 5-stage health and career roadmaps with gamified habit tracking and a RAG-powered AI accountability coach.',
    highlights: [
      'Single-Table DynamoDB design with composite keys for single-digit-ms retrieval',
      'Hybrid "Pointer Pattern" offloading large JSON blobs to S3 to beat the 400KB limit',
      'RAG pipeline with BGE-M3 embeddings + Pinecone to eliminate hallucinations',
      'HMAC-SHA256 stateless auth with httpOnly cookie sessions'
    ],
    stack: ['TypeScript', 'Next.js', 'DynamoDB', 'S3', 'Pinecone', 'RAG', 'DeepSeek']
  },
  {
    name: 'Cloud Infrastructure Architect',
    subtitle: 'Autonomous AWS Sales Engineer AI',
    period: 'Apr – May 2026',
    badge: 'AI Marathon 2026 · Top 10 Global',
    accent: '#22D3EE',
    link: 'https://github.com/JuanAndrewD/Ambatuwin-AI-Marathon-2026-as-Pria-Solo',
    linkLabel: 'Repository',
    description:
      'An autonomous AI Technical Sales Consultant that transforms natural-language workload briefs into complete, production-ready, cost-optimized AWS deployments. Built solo and selected as a global top 10 finalist.',
    highlights: [
      'Three-layer autonomous agent framework with deterministic guardrails',
      'Deterministic bill engineering — 100% reproducible, to-the-cent AWS pricing',
      'Multi-tier context memory parsing PDF, DOCX & PPTX uploads',
      'Regional fallbacks cross-referencing PDPA, GDPR & HIPAA data-residency laws'
    ],
    stack: ['Generative AI', 'React.js', 'Express.js', 'Node.js', 'PostgreSQL', 'REST APIs']
  },
  {
    name: 'Vendor Event Matcher',
    subtitle: 'AI-Powered Food Vendor Matching System',
    period: 'Apr 2026',
    badge: 'AWS CendekiAwan 2026 · Top 5 Track',
    accent: '#FF9FFC',
    link: 'https://github.com/IRIDIUM86/AmbatuwinCendikiawan',
    linkLabel: 'Repository',
    description:
      'A production-ready backend orchestration platform that helps SME food vendors find real-time event matches, translating unstructured natural-language constraints into accurate matches for bazaars, festivals, and market spaces.',
    highlights: [
      '5-layer hallucination prevention pipeline for 100% data reliability',
      'Flask execution layer parsing queries into strongly-typed validated JSON',
      'AWS Bedrock (Claude 3 Sonnet) for semantic understanding & ranking',
      'Hybrid persistence on a Postgres-backed Supabase relational layer'
    ],
    stack: ['Python', 'AWS Bedrock', 'boto3', 'Supabase', 'PostgreSQL', 'Flask']
  }
];

export const experience = [
  {
    org: 'AWS Student Builder Group — APU',
    role: 'Head of Event Coordinator',
    period: 'May 2026 – Present',
    mode: 'Hybrid · Contract',
    points: [
      'Lead strategic planning, financial oversight, and execution of campus-wide cloud initiatives and tech talks.',
      'Mentor a team of student coordinators across logistics, registration, and technical operations.',
      'Partner with university administration and industry professionals to align event objectives.'
    ]
  },
  {
    org: 'AWS Student Builder Group — APU',
    role: 'Event Coordinator',
    period: 'Dec 2025 – May 2026',
    mode: 'On-site · Contract',
    points: [
      'Managed operational workflows for flagship initiatives including the AWS CendekiAwan 2026 Showcase.',
      'Handled venue bookings, transportation logistics, and on-site registration.',
      'Streamlined task assignments and post-event documentation with committee members.'
    ]
  },
  {
    org: 'Asia Pacific Analytics Club (APAC)',
    role: 'Technical Department',
    period: 'Mar 2025 – Feb 2026',
    mode: 'On-site · Contract',
    points: [
      'Architected and deployed reliable, isolated environments for hands-on technical sessions.',
      'Maintained event-specific code repositories and version control.',
      'Provided live troubleshooting and technical guidance during hackathons and workshops.'
    ]
  }
];

export const education = {
  school: 'Asia Pacific University of Technology and Innovation (APU / APIIT)',
  degree: 'Bachelor of Applied Science — Computer Science',
  period: 'Sep 2024 – Sep 2027',
  grade: '3.71',
  focus: 'Machine Learning Engineering · Event-Driven Cloud Systems · Low-Level Computer Architecture',
  activities:
    'Head of Event Coordinator at AWS Student Builder Group · Technical Department Core Committee Member at APAC'
};

export const skills = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'Java', 'C', 'SQL'] },
  {
    group: 'AI & Machine Learning',
    items: ['Machine Learning', 'Neural Networks', 'CNNs', 'RAG', 'Vector Databases', 'Prompt Engineering', 'Generative AI']
  },
  {
    group: 'Cloud & AWS',
    items: ['AWS', 'DynamoDB', 'Amazon S3', 'Amazon EC2', 'AWS Bedrock', 'SageMaker', 'Serverless', 'boto3']
  },
  {
    group: 'Web & Backend',
    items: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'Supabase']
  },
  {
    group: 'Tools & Concepts',
    items: ['Git', 'GitHub', 'Data Modeling', 'Database Design', 'HMAC Cryptography', 'Pinecone']
  },
  {
    group: 'Quantitative & Leadership',
    items: ['Quantitative Research', 'Data Science', 'Data Analysis', 'Project Management', 'Communication']
  }
];
