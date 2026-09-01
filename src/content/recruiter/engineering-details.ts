import type { RecruiterEngineeringDetails } from '../types'

export const recruiterEngineeringDetails: RecruiterEngineeringDetails = {
  title: 'How I Design, Build, and Deliver Systems',
  description:
    'A closer look at verified architecture, technology boundaries, integrations, and delivery practices behind my project work.',
  featuredProjectId: 'ifinancing-360',
  featuredProjectLabel: 'iFinancing 360 architecture overview',
  diagramTitle: 'System architecture',
  diagramDescription:
    'A verified high-level view of the technology layers used for iFinancing 360, not an exact production topology.',
  diagramNodes: [
    {
      id: 'blazor-interface',
      label: 'Blazor',
      detail: 'Application interface',
      layer: 'interface',
    },
    {
      id: 'dotnet-services',
      label: '.NET services',
      detail: 'Microservice-based application layer',
      layer: 'service',
    },
    {
      id: 'postgresql-data',
      label: 'PostgreSQL',
      detail: 'Relational data layer',
      layer: 'data',
    },
    {
      id: 'ai-integration',
      label: 'AI-assisted analysis',
      detail: 'Sentiment and data collection integration',
      layer: 'integration',
    },
    {
      id: 'delivery-workflow',
      label: 'Docker + GitHub Actions',
      detail: 'Containerized delivery and CI/CD workflow',
      layer: 'delivery',
    },
  ],
  stackGroups: [
    { label: 'Frontend', technologies: ['Blazor'] },
    { label: 'Backend', technologies: ['.NET', 'Microservices'] },
    { label: 'Database', technologies: ['PostgreSQL'] },
    {
      label: 'Delivery',
      technologies: ['Docker', 'GitHub Actions', 'CI/CD'],
    },
  ],
  topics: [
    {
      id: 'architecture',
      title: 'System Architecture',
      summary:
        'System structures evidenced across microservice, full-stack, and map-based applications.',
      icon: 'architecture',
      evidence: [
        {
          projectId: 'ifinancing-360',
          label: 'iFinancing 360',
          details: ['Microservices'],
        },
        {
          projectId: 'ifinancing-v5',
          label: 'iFinancing v5',
          details: ['RESTful API', 'Full-stack application'],
        },
        {
          projectId: 'si-mantap',
          label: 'Si Mantap',
          details: ['Map-based monitoring', 'Full-stack application'],
        },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend Architecture',
      summary:
        'Interface technologies selected around financing workflows and infrastructure monitoring.',
      icon: 'frontend',
      evidence: [
        {
          projectId: 'ifinancing-360',
          label: 'iFinancing 360',
          details: ['Blazor'],
        },
        {
          projectId: 'ifinancing-v5',
          label: 'iFinancing v5',
          details: ['Angular', 'TypeScript', 'JavaScript'],
        },
        {
          projectId: 'si-mantap',
          label: 'Si Mantap',
          details: ['JavaScript', 'Leaflet'],
        },
      ],
    },
    {
      id: 'backend-api',
      title: 'Backend & API',
      summary:
        'Application services and API work grounded in multifinance product workflows.',
      icon: 'api',
      evidence: [
        {
          projectId: 'ifinancing-360',
          label: 'iFinancing 360',
          details: ['.NET microservices', 'OpenXML reporting'],
        },
        {
          projectId: 'ifinancing-v5',
          label: 'iFinancing v5',
          details: ['.NET backend APIs', 'RESTful API consumption'],
        },
      ],
    },
    {
      id: 'database',
      title: 'Database Structure',
      summary:
        'Relational and document data technologies used across verified product contexts.',
      icon: 'database',
      evidence: [
        {
          projectId: 'ifinancing-360',
          label: 'iFinancing 360',
          details: ['PostgreSQL'],
        },
        {
          projectId: 'ifinancing-v5',
          label: 'iFinancing v5',
          details: ['SQL Server'],
        },
        {
          projectId: 'si-mantap',
          label: 'Si Mantap',
          details: ['Firestore coordinates', 'MongoDB application data'],
        },
      ],
    },
    {
      id: 'integrations',
      title: 'Integration Architecture',
      summary:
        'External and cross-system capabilities connected to application workflows.',
      icon: 'integration',
      evidence: [
        {
          projectId: 'ifinancing-360',
          label: 'iFinancing 360',
          details: ['AI-assisted sentiment and data collection'],
        },
        {
          projectId: 'ifinancing-v5',
          label: 'iFinancing v5',
          details: ['RESTful API integration'],
        },
      ],
    },
    {
      id: 'deployment',
      title: 'Deployment & CI/CD',
      summary:
        'Verified container, delivery workflow, and cloud deployment exposure.',
      icon: 'deployment',
      evidence: [
        {
          projectId: 'ifinancing-360',
          label: 'iFinancing 360',
          details: ['Docker', 'GitHub Actions', 'CI/CD'],
        },
        {
          projectId: 'si-mantap',
          label: 'Si Mantap',
          details: ['Alibaba Cloud'],
        },
      ],
    },
    {
      id: 'complexity',
      title: 'System Complexity',
      summary:
        'Concrete indicators of workflow breadth and infrastructure scope.',
      icon: 'complexity',
      evidence: [
        {
          projectId: 'ifinancing-v5',
          label: 'iFinancing v5',
          details: ['More than 32 business-process modules'],
        },
        {
          projectId: 'si-mantap',
          label: 'Si Mantap',
          details: ['ODP, OLT, cable, and tower infrastructure monitoring'],
        },
      ],
    },
  ],
  principle:
    'Engineering is not just about code. It is about connecting sound system boundaries, clear implementation, and dependable delivery to the problem being solved.',
}
