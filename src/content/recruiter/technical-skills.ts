import type { RecruiterTechnicalSkills } from '../types'

const experience = {
  researchAndDevelopment: {
    experienceId: 'ims-research-development',
    label: 'iFinancing 360',
  },
  financingPlatform: {
    experienceId: 'ims-fullstack',
    label: 'iFinancing v5',
  },
  networkMonitoring: {
    experienceId: 'telkom-regional-three',
    label: 'Si Mantap',
  },
} as const

export const recruiterTechnicalSkills: RecruiterTechnicalSkills = {
  title: 'Technical Skills & Capabilities',
  description:
    'Technologies, tools, and engineering practices grounded in the systems I have built and maintained.',
  categories: [
    {
      id: 'frontend',
      title: 'Frontend',
      description:
        'Building maintainable interfaces for complex operational workflows.',
      icon: 'frontend',
      emphasis: 'primary',
      skills: [
        {
          name: 'Angular',
          type: 'technology',
          evidence: [experience.financingPlatform],
        },
        {
          name: 'Blazor',
          type: 'technology',
          evidence: [experience.researchAndDevelopment],
        },
        {
          name: 'TypeScript',
          type: 'technology',
          evidence: [experience.financingPlatform],
        },
        {
          name: 'JavaScript',
          type: 'technology',
          evidence: [
            experience.financingPlatform,
            experience.networkMonitoring,
          ],
        },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      description:
        'Designing APIs and application services around business workflows.',
      icon: 'backend',
      emphasis: 'primary',
      skills: [
        {
          name: '.NET',
          type: 'technology',
          evidence: [
            experience.researchAndDevelopment,
            experience.financingPlatform,
          ],
        },
        {
          name: 'RESTful API',
          type: 'architecture',
          evidence: [experience.financingPlatform],
        },
        {
          name: 'OpenXML',
          type: 'technology',
          evidence: [experience.researchAndDevelopment],
        },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      description:
        'Working with relational and document data across product domains.',
      icon: 'database',
      emphasis: 'primary',
      skills: [
        {
          name: 'PostgreSQL',
          type: 'technology',
          evidence: [experience.researchAndDevelopment],
        },
        {
          name: 'SQL Server',
          type: 'technology',
          evidence: [experience.financingPlatform],
        },
        {
          name: 'Firestore',
          type: 'technology',
          evidence: [experience.networkMonitoring],
        },
        {
          name: 'MongoDB',
          type: 'technology',
          evidence: [experience.networkMonitoring],
        },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps & Infrastructure',
      description:
        'Shipping and operating applications through repeatable delivery workflows.',
      icon: 'devops',
      emphasis: 'supporting',
      skills: [
        {
          name: 'Docker',
          type: 'tool',
          evidence: [experience.researchAndDevelopment],
        },
        {
          name: 'GitHub Actions',
          type: 'tool',
          evidence: [experience.researchAndDevelopment],
        },
        {
          name: 'CI/CD',
          type: 'practice',
          evidence: [experience.researchAndDevelopment],
        },
        {
          name: 'Alibaba Cloud',
          type: 'technology',
          evidence: [experience.networkMonitoring],
        },
      ],
    },
    {
      id: 'integration',
      title: 'Integration',
      description:
        'Connecting product workflows with external and AI-assisted services.',
      icon: 'integration',
      emphasis: 'supporting',
      skills: [
        {
          name: 'AI-assisted analysis',
          type: 'technology',
          evidence: [experience.researchAndDevelopment],
        },
      ],
    },
    {
      id: 'architecture',
      title: 'Architecture',
      description:
        'Structuring systems around clear service and application boundaries.',
      icon: 'architecture',
      emphasis: 'supporting',
      skills: [
        {
          name: 'Microservices',
          type: 'architecture',
          evidence: [experience.researchAndDevelopment],
        },
        {
          name: 'Full-stack applications',
          type: 'architecture',
          evidence: [
            experience.financingPlatform,
            experience.networkMonitoring,
          ],
        },
        {
          name: 'Map-based monitoring',
          type: 'architecture',
          evidence: [experience.networkMonitoring],
        },
      ],
    },
    {
      id: 'specialized-tooling',
      title: 'Specialized Tooling',
      description:
        'Applying focused libraries and tools to reporting and spatial interfaces.',
      icon: 'tooling',
      emphasis: 'supporting',
      skills: [
        {
          name: 'Leaflet',
          type: 'tool',
          evidence: [experience.networkMonitoring],
        },
        {
          name: 'OpenXML',
          type: 'tool',
          evidence: [experience.researchAndDevelopment],
        },
      ],
    },
  ],
  learningStatement:
    'I keep expanding my toolkit when a system calls for a better engineering approach.',
}
