import type { RecruiterCareerEvidence } from '../types'

export const recruiterCareerEvidence: RecruiterCareerEvidence = {
  title: 'Evidence of Professional',
  highlightedTitle: 'Growth & Commitment',
  description:
    'Verified professional milestones that extend the evidence already shown through my work and projects.',
  categories: [
    {
      id: 'achievements',
      title: 'Professional Achievements',
      description:
        'Career milestones supported by the responsibilities and system scope documented in my professional experience.',
      icon: 'award',
      items: [
        {
          id: 'microservices-platform-leadership',
          title: 'Leading Development of iFinancing 360',
          organization: 'Inovasi Mitra Sejati',
          description:
            'Leading development of a microservice-based financing platform with dashboards, reporting, AI-assisted analysis, and containerized delivery.',
          icon: 'award',
          dateLabel: 'Jul 2025 - Present',
          status: 'Current role',
          details: ['Microservices', 'Full-stack delivery', 'CI/CD'],
          links: [
            {
              label: 'View supporting experience',
              href: '#experience-ims-research-development',
            },
          ],
        },
        {
          id: 'multifinance-platform-scope',
          title: 'Delivered Across 32+ Business-Process Modules',
          organization: 'Inovasi Mitra Sejati',
          description:
            'Developed an end-to-end multifinance platform across a broad application workflow, working with development, QA, project leadership, and business stakeholders.',
          icon: 'award',
          dateLabel: 'Jul 2023 - Jan 2025',
          details: ['Angular', '.NET', 'SQL Server'],
          links: [
            {
              label: 'View supporting experience',
              href: '#experience-ims-fullstack',
            },
          ],
        },
      ],
    },
  ],
  closingStatement:
    'This section only surfaces professional evidence that can be traced to documented experience. Education, certifications, training, and public work will appear when verified records are available.',
}
