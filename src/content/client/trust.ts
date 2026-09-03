import type { ClientTrust } from '../types'

export const clientTrust: ClientTrust = {
  kicker: 'Client portfolio / Section 10',
  title: 'Proven Experience.',
  highlightedTitle: 'Real Results.',
  description:
    'Trust is built through documented experience, transparent delivery, and evidence that can be reviewed before a project begins.',
  principles: [
    { id: 'reliable', title: 'Reliable Partner', description: 'Clear communication and dependable follow-through.', icon: 'reliable' },
    { id: 'quality', title: 'Quality First', description: 'Maintainable, secure work is part of delivery.', icon: 'quality' },
    { id: 'client-focused', title: 'Client-Focused', description: 'Technical choices stay connected to your priorities.', icon: 'client-focused' },
    { id: 'results', title: 'Results-Driven', description: 'Progress is measured against the outcome that matters.', icon: 'results' },
  ],
  metrics: [],
  technologies: [
    { name: '.NET / ASP.NET Core', category: 'Backend', status: 'placeholder' },
    { name: 'Blazor', category: 'Frontend', status: 'placeholder' },
    { name: 'Angular', category: 'Frontend', status: 'placeholder' },
    { name: 'TypeScript', category: 'Frontend', status: 'placeholder' },
    { name: 'PostgreSQL', category: 'Data', status: 'placeholder' },
    { name: 'SQL Server', category: 'Data', status: 'placeholder' },
    { name: 'Docker', category: 'Delivery', status: 'placeholder' },
    { name: 'Git / GitHub', category: 'Delivery', status: 'placeholder' },
  ],
  testimonials: [],
  evidenceLinks: [],
  recognition: [],
  closingTitle: 'Let\'s Build Something You Can Trust',
  closingStatement: 'Have a project in mind? Start with the business context, and we can map the right next step together.',
  action: { label: 'Start a conversation', href: '#contact' },
}