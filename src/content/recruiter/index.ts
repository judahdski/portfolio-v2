import type { RecruiterContent } from '../types'

export const recruiterContent: RecruiterContent = {
  identity: {
    name: 'Judah',
    title: 'Full-stack Web Developer',
    specialization: 'Systems / Web / API / Database',
    profile:
      'An engineer who cares about the system behind the screen, building useful web experiences with intention.',
    portrait: {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
      alt: 'Temporary portrait placeholder for Judah',
    },
    links: [],
  },
  professionalProfile: {
    statement: 'Full-stack engineer who builds scalable systems that drive',
    highlightedStatement: 'real impact.',
    summary: [
      'I specialize in building robust web applications and internal systems that are reliable, maintainable, and built for growth.',
      'From frontend experiences to backend architecture, I focus on clean code, system design, and solving problems that actually matter.',
    ],
    coreSpecializations: [
      {
        title: 'Full-stack Development',
        description:
          'End-to-end web development with modern technologies and clear architecture.',
        icon: 'code',
      },
      {
        title: 'System Design',
        description:
          'Designing scalable systems with maintainability and performance in mind.',
        icon: 'systems',
      },
      {
        title: 'Database & API',
        description:
          'Building efficient APIs and structuring data for reliability and scale.',
        icon: 'database',
      },
      {
        title: 'Integration',
        description:
          'Connecting third-party services, APIs, and external systems cleanly.',
        icon: 'integration',
      },
      {
        title: 'Deployment',
        description:
          'Shipping applications with repeatable deployment and delivery workflows.',
        icon: 'rocket',
      },
    ],
    expertiseAreas: [
      'Web Applications',
      'Internal Tools & Systems',
      'Workflow Automation',
      'Dashboard & Reporting',
      'System Integration',
    ],
    technicalFocus: [
      { label: 'Backend Development', emphasis: 'primary' },
      { label: 'Frontend Development', emphasis: 'primary' },
      { label: 'System Architecture', emphasis: 'supporting' },
      { label: 'DevOps & Deployment', emphasis: 'supporting' },
    ],
    systemTypes: [
      'Monolith',
      'Microservices',
      'RESTful API',
      'Real-time Systems',
      'Event-driven',
      'Database Design',
      'Third-party APIs',
    ],
    engineeringValues: [
      'Clean & Maintainable Code',
      'User Experience',
      'Performance & Scalability',
      'Security & Reliability',
    ],
    principles: [
      'Turn complex requirements into simple, effective solutions.',
      'Write code that is easy to read, maintain, and scale.',
      'Focus on business impact, not just features.',
    ],
  },
}
