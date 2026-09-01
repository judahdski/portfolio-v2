import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Button from './Button'
import IconButton from './IconButton'
import SectionHeader from './SectionHeader'
import RecruiterEngineeringDetailsSection from '../../sections/recruiter/RecruiterEngineeringDetailsSection'
import RecruiterIdentitySection from '../../sections/recruiter/RecruiterIdentitySection'
import RecruiterProfessionalProfileSection from '../../sections/recruiter/RecruiterProfessionalProfileSection'
import RecruiterProjectsSection from '../../sections/recruiter/RecruiterProjectsSection'
import RecruiterTechnicalSkillsSection from '../../sections/recruiter/RecruiterTechnicalSkillsSection'
import RecruiterExperienceSection from '../../sections/recruiter/RecruiterExperienceSection'

afterEach(cleanup)

describe('UI primitives', () => {
  it('renders an accessible section heading', () => {
    render(
      <SectionHeader
        kicker="02 / Evidence"
        title="Selected work"
        description="Systems built with clear constraints."
      />,
    )

    expect(
      screen.getByRole('heading', { name: 'Selected work' }),
    ).toBeInTheDocument()
    expect(screen.getByText('02 / Evidence')).toBeInTheDocument()
  })

  it('preserves native button semantics', () => {
    render(<Button disabled>Submit inquiry</Button>)

    expect(
      screen.getByRole('button', { name: 'Submit inquiry' }),
    ).toBeDisabled()
  })

  it('requires an accessible name for icon-only actions', () => {
    render(<IconButton label="Open navigation">+</IconButton>)

    expect(
      screen.getByRole('button', { name: 'Open navigation' }),
    ).toBeInTheDocument()
  })

  it('renders recruiter identity and omits unavailable metadata', () => {
    render(
      <RecruiterIdentitySection
        content={{
          name: 'Judah',
          title: 'Full-stack Web Developer',
          specialization: 'Systems / Web / API / Database',
          profile: 'A systems-focused engineering profile.',
          portrait: {
            src: 'https://example.com/portrait.jpg',
            alt: 'Temporary portrait placeholder for Judah',
          },
          links: [],
        }}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Judah' })).toBeInTheDocument()
    expect(screen.getByText('Full-stack Web Developer')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        name: 'Temporary portrait placeholder for Judah',
      }),
    ).toBeInTheDocument()
    expect(
      screen.queryByLabelText('Professional metadata'),
    ).not.toBeInTheDocument()
  })

  it('renders a professional profile without invented proficiency scores', () => {
    render(
      <RecruiterProfessionalProfileSection
        content={{
          statement: 'Full-stack engineer who builds reliable systems that',
          highlightedStatement: 'create real impact.',
          summary: ['A systems-focused professional summary.'],
          coreSpecializations: [
            {
              title: 'System Design',
              description: 'Maintainable systems with clear boundaries.',
              icon: 'systems',
            },
          ],
          expertiseAreas: [],
          technicalFocus: [
            { label: 'Backend Development', emphasis: 'primary' },
          ],
          systemTypes: [],
          engineeringValues: [],
          principles: [],
        }}
      />,
    )

    expect(
      screen.getByRole('heading', {
        name: /full-stack engineer who builds reliable systems/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('System Design')).toBeInTheDocument()
    expect(screen.getByText('Technical focus')).toBeInTheDocument()
    expect(screen.queryByText('Expertise areas')).not.toBeInTheDocument()
    expect(screen.queryByText(/\d+%/)).not.toBeInTheDocument()
  })

  it('renders an accessible experience timeline without an unavailable CV link', () => {
    render(
      <RecruiterExperienceSection
        content={{
          title: 'My Professional Journey',
          description: 'A timeline of verified experience.',
          entries: [
            {
              id: 'current-role',
              company: 'Current Company',
              companyMark: 'CC',
              position: 'Full-stack Developer',
              period: { start: '2025-07', label: 'Jul 2025 - Present' },
              employmentType: 'Full-time',
              location: { city: 'Jakarta', country: 'Indonesia' },
              current: true,
              summary: 'Building reliable internal systems.',
              technologies: ['TypeScript'],
              contributions: ['Built a maintainable application.'],
              collaboration: [],
              architectureExposure: [],
              operationalExposure: [],
            },
          ],
        }}
      />,
    )

    expect(
      screen.getByRole('heading', { name: 'My Professional Journey' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Professional experience timeline' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Current')).toBeInTheDocument()
    expect(screen.getByText('View experience details')).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /download cv/i }),
    ).not.toBeInTheDocument()
  })

  it('renders evidenced skill categories without fabricated proficiency ratings', () => {
    render(
      <RecruiterTechnicalSkillsSection
        content={{
          title: 'Technical Skills & Capabilities',
          description: 'Skills grounded in professional work.',
          categories: [
            {
              id: 'backend',
              title: 'Backend',
              description: 'Building application services.',
              icon: 'backend',
              emphasis: 'primary',
              skills: [
                {
                  name: '.NET',
                  type: 'technology',
                  evidence: [
                    {
                      experienceId: 'verified-role',
                      label: 'Verified product',
                    },
                  ],
                },
              ],
            },
            {
              id: 'empty',
              title: 'Testing',
              description: 'No confirmed evidence yet.',
              icon: 'tooling',
              emphasis: 'supporting',
              skills: [],
            },
          ],
        }}
      />,
    )

    expect(
      screen.getByRole('heading', { name: 'Technical Skills & Capabilities' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Backend' })).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'Testing' }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('Verified product')).toBeInTheDocument()
    expect(
      screen.queryByText(/expert|advanced|intermediate|\d+%/i),
    ).not.toBeInTheDocument()
  })

  it('filters, sorts, and changes the recruiter project view without unavailable links', () => {
    render(
      <RecruiterProjectsSection
        content={{
          title: 'Projects That Show What I Build',
          description: 'Verified project evidence.',
          categories: [
            { id: 'internal-system', label: 'Internal system' },
            { id: 'internal-tool', label: 'Internal tool' },
          ],
          projects: [
            {
              id: 'new-system',
              name: 'New System',
              type: 'Platform',
              categories: ['internal-system'],
              domain: 'Finance',
              period: { start: '2025-07', label: 'Jul 2025 - Present' },
              role: 'Developer',
              summary: 'A verified internal platform.',
              responsibilities: ['Built platform services.'],
              technicalStack: ['.NET'],
              architecture: ['Microservices'],
              features: ['Reporting'],
              deployment: ['Docker'],
              experienceIds: ['current-role'],
              visualVariant: 'dashboard',
            },
            {
              id: 'older-tool',
              name: 'Older Tool',
              type: 'Monitoring tool',
              categories: ['internal-tool'],
              domain: 'Infrastructure',
              period: {
                start: '2022-08',
                end: '2023-05',
                label: 'Aug 2022 - May 2023',
              },
              role: 'Developer',
              summary: 'A verified monitoring tool.',
              responsibilities: ['Built map monitoring.'],
              technicalStack: ['JavaScript'],
              architecture: ['Full-stack application'],
              features: ['Map monitoring'],
              experienceIds: ['previous-role'],
              visualVariant: 'map',
            },
          ],
        }}
      />,
    )

    const projectGrid = screen
      .getByText('New System')
      .closest<HTMLElement>('.project-grid')
    expect(projectGrid).not.toBeNull()
    expect(within(projectGrid!).getAllByRole('article')[0]).toHaveTextContent(
      'New System',
    )

    fireEvent.change(screen.getByLabelText('Filter projects'), {
      target: { value: 'internal-tool' },
    })
    expect(screen.queryByText('New System')).not.toBeInTheDocument()
    expect(screen.getByText('Older Tool')).toBeInTheDocument()
    expect(screen.getByText('Showing 1 of 2 projects')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Filter projects'), {
      target: { value: 'all' },
    })
    fireEvent.change(screen.getByLabelText('Sort projects'), {
      target: { value: 'oldest' },
    })
    expect(within(projectGrid!).getAllByRole('article')[0]).toHaveTextContent(
      'Older Tool',
    )

    fireEvent.click(screen.getByRole('button', { name: 'List view' }))
    expect(screen.getByRole('button', { name: 'List view' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(projectGrid).toHaveAttribute('data-view', 'list')
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('navigates verified engineering evidence without rendering unsupported topics', () => {
    render(
      <RecruiterEngineeringDetailsSection
        content={{
          title: 'How I Design, Build, and Deliver Systems',
          description: 'Verified technical evidence.',
          featuredProjectId: 'verified-system',
          featuredProjectLabel: 'Verified system architecture overview',
          diagramTitle: 'System architecture',
          diagramDescription: 'A verified high-level system view.',
          diagramNodes: [
            {
              id: 'interface',
              label: 'Web interface',
              detail: 'Application interface',
              layer: 'interface',
            },
            {
              id: 'service',
              label: 'Application service',
              detail: 'Service layer',
              layer: 'service',
            },
          ],
          stackGroups: [{ label: 'Frontend', technologies: ['TypeScript'] }],
          topics: [
            {
              id: 'architecture',
              title: 'System Architecture',
              summary: 'Verified architecture evidence.',
              icon: 'architecture',
              evidence: [
                {
                  projectId: 'verified-system',
                  label: 'Verified System',
                  details: ['Service boundaries'],
                },
              ],
            },
            {
              id: 'deployment',
              title: 'Deployment & CI/CD',
              summary: 'No verified evidence.',
              icon: 'deployment',
              evidence: [],
            },
          ],
          principle: 'Engineering connects implementation to the problem.',
        }}
      />,
    )

    const overviewTab = screen.getByRole('tab', { name: 'Overview' })
    const architectureTab = screen.getByRole('tab', {
      name: 'System Architecture',
    })
    expect(overviewTab).toHaveAttribute('aria-selected', 'true')
    expect(
      screen.getAllByRole('heading', { name: 'Tech stack overview' }).length,
    ).toBeGreaterThan(0)

    fireEvent.click(architectureTab)
    expect(architectureTab).toHaveAttribute('aria-selected', 'true')
    expect(
      screen.getAllByText('Verified architecture evidence.').length,
    ).toBeGreaterThan(0)
    expect(
      screen.queryByRole('tab', { name: 'Deployment & CI/CD' }),
    ).not.toBeInTheDocument()
    expect(screen.queryByText(/security|performance/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Explore my projects' }),
    ).toHaveAttribute('href', '#recruiter-projects')

    fireEvent.keyDown(architectureTab, { key: 'Home' })
    expect(overviewTab).toHaveAttribute('aria-selected', 'true')
  })
})
