import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Button from './Button'
import IconButton from './IconButton'
import SectionHeader from './SectionHeader'
import RecruiterIdentitySection from '../../sections/recruiter/RecruiterIdentitySection'
import RecruiterProfessionalProfileSection from '../../sections/recruiter/RecruiterProfessionalProfileSection'

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
})
