import type { RecruiterExperience } from '../types'

export const recruiterExperience: RecruiterExperience = {
  title: 'My Professional Journey',
  description:
    "A timeline of my work experience, the teams I've worked with, and the impact I've contributed along the way.",
  entries: [
    {
      id: 'ims-research-development',
      company: 'Inovasi Mitra Sejati',
      companyMark: 'IMS',
      position: 'Research and Development (under CTO)',
      period: {
        start: '2025-07',
        label: 'Jul 2025 - Present',
      },
      employmentType: 'Full-time',
      location: {
        city: 'Jakarta',
        country: 'Indonesia',
      },
      current: true,
      product: 'iFinancing 360',
      summary:
        'Leading development of a microservice-based financing platform with dynamic dashboards, reporting, and AI-assisted analysis.',
      technologies: [
        '.NET',
        'Blazor',
        'Microservices',
        'PostgreSQL',
        'Docker',
        'GitHub Actions',
      ],
      contributions: [
        'Designed and developed microservices with .NET and Blazor.',
        'Built dynamic dashboards and reporting using OpenXML.',
        'Integrated AI-assisted analysis for sentiment and data collection.',
        'Handled containerized deployment and CI/CD workflows.',
      ],
      collaboration: ['CTO', 'Development team'],
      architectureExposure: ['Microservices'],
      operationalExposure: ['Docker', 'CI/CD', 'GitHub Actions'],
    },
    {
      id: 'ims-fullstack',
      company: 'Inovasi Mitra Sejati',
      companyMark: 'CLF MONT',
      position: 'Full-stack Web Developer',
      period: {
        start: '2023-07',
        end: '2025-01',
        label: 'Jul 2023 - Jan 2025',
      },
      employmentType: 'Full-time',
      location: {
        city: 'Jakarta',
        country: 'Indonesia',
      },
      product: 'iFinancing v5 for Clement Finance Indonesia',
      summary:
        'Developed an end-to-end multifinance platform covering more than 32 business-process modules.',
      technologies: [
        'Angular',
        '.NET',
        'TypeScript',
        'JavaScript',
        'SQL Server',
      ],
      contributions: [
        'Developed the frontend with Angular and consumed RESTful APIs.',
        'Built backend APIs with .NET and SQL Server.',
        'Collaborated with QA, project leadership, and business stakeholders.',
        'Implemented features across the complete application workflow.',
      ],
      collaboration: [
        'Development team',
        'QA',
        'Project leader',
        'Business team',
      ],
      architectureExposure: ['RESTful API', 'Full-stack application'],
      operationalExposure: [],
    },
    {
      id: 'telkom-regional-three',
      company: 'Telkom Indonesia Regional III',
      companyMark: 'TELKOM',
      position: 'Full-stack Web Developer',
      period: {
        start: '2022-08',
        end: '2023-05',
        label: 'Aug 2022 - May 2023',
      },
      employmentType: 'Full-time',
      location: {
        city: 'Bandung',
        country: 'Indonesia',
      },
      product: 'Si Mantap',
      summary:
        'Built a map-based network-monitoring application for ODP, OLT, cable, and tower infrastructure.',
      technologies: [
        'JavaScript',
        'Firestore',
        'MongoDB',
        'Leaflet',
        'Alibaba Cloud',
      ],
      contributions: [
        'Developed map rendering with Leaflet and Firestore coordinates.',
        'Designed and built full-stack network-monitoring features.',
        'Managed related data using MongoDB.',
        'Deployed the application through Alibaba Cloud.',
      ],
      collaboration: ['Regional infrastructure team'],
      architectureExposure: ['Map-based monitoring', 'Full-stack application'],
      operationalExposure: ['Alibaba Cloud'],
    },
  ],
}
