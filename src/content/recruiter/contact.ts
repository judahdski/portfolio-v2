import type { RecruiterContact } from '../types'

export const recruiterContact: RecruiterContact = {
  title: "Let's continue with the",
  highlightedTitle: 'right conversation.',
  description:
    'Explore the selected systems below, then reach out when the work and the way I build feel aligned.',
  methods: [
    {
      id: 'projects',
      label: 'Selected projects',
      description:
        'Review the systems, responsibilities, and engineering evidence in context.',
      value: 'Recruiter project portfolio',
      href: '#recruiter-projects',
      icon: 'projects',
      actionLabel: 'View projects',
    },
  ],
  collaborationPrompt:
    'Interested in discussing a system, role, or engineering problem?',
  closingStatement:
    'Only contact paths with verified destinations are surfaced here. Additional professional links can be added when confirmed.',
}
