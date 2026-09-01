import {
  Boxes,
  CheckCircle2,
  Cloud,
  CodeXml,
  Database,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type {
  ProfessionalProfileIcon,
  RecruiterProfessionalProfile,
} from '../../content/types'

type RecruiterProfessionalProfileSectionProps = {
  content: RecruiterProfessionalProfile
}

const specializationIcons = {
  code: CodeXml,
  systems: Boxes,
  database: Database,
  integration: Cloud,
  rocket: Rocket,
} satisfies Record<ProfessionalProfileIcon, typeof CodeXml>

function RecruiterProfessionalProfileSection({
  content,
}: RecruiterProfessionalProfileSectionProps) {
  const detailGroups = [
    {
      title: 'Expertise areas',
      className: 'profile-expertise-list',
      content: (
        <ul className="profile-detail-list">
          {content.expertiseAreas.map((area) => (
            <li key={area}>
              <CheckCircle2 aria-hidden="true" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      ),
      isVisible: content.expertiseAreas.length > 0,
    },
    {
      title: 'Technical focus',
      className: 'profile-focus-list',
      content: (
        <ul className="profile-focus-items">
          {content.technicalFocus.map((focus) => (
            <li key={focus.label} data-emphasis={focus.emphasis}>
              <span>{focus.label}</span>
              <span className="profile-focus-indicator" aria-hidden="true" />
            </li>
          ))}
        </ul>
      ),
      isVisible: content.technicalFocus.length > 0,
    },
    {
      title: 'Systems I work with',
      className: 'profile-system-list',
      content: (
        <div className="profile-badges">
          {content.systemTypes.map((system) => (
            <Badge key={system}>{system}</Badge>
          ))}
        </div>
      ),
      isVisible: content.systemTypes.length > 0,
    },
    {
      title: 'I care about',
      className: 'profile-values-list',
      content: (
        <ul className="profile-detail-list">
          {content.engineeringValues.map((value) => (
            <li key={value}>
              <ShieldCheck aria-hidden="true" />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      ),
      isVisible: content.engineeringValues.length > 0,
    },
  ]

  return (
    <Section
      className="recruiter-profile"
      aria-labelledby="recruiter-profile-title"
    >
      <Container>
        <div className="recruiter-profile-intro">
          <div>
            <p className="section-kicker">02 / Professional Profile</p>
            <h2 id="recruiter-profile-title">
              {content.statement} <span>{content.highlightedStatement}</span>
            </h2>
          </div>
          <div className="recruiter-profile-summary">
            {content.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="profile-system-visual" aria-hidden="true">
            <Boxes />
          </div>
        </div>

        {content.coreSpecializations.length > 0 && (
          <div className="profile-specializations">
            <p className="profile-group-label">Core specialization</p>
            <div className="profile-specialization-grid">
              {content.coreSpecializations.map((specialization) => {
                const Icon = specializationIcons[specialization.icon]

                return (
                  <Card key={specialization.title}>
                    <Icon aria-hidden="true" />
                    <h3>{specialization.title}</h3>
                    <p>{specialization.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {detailGroups.some((group) => group.isVisible) && (
          <div className="profile-detail-grid">
            {detailGroups
              .filter((group) => group.isVisible)
              .map((group) => (
                <section className={group.className} key={group.title}>
                  <h3>{group.title}</h3>
                  {group.content}
                </section>
              ))}
          </div>
        )}

        {content.principles.length > 0 && (
          <ul
            className="profile-principles"
            aria-label="Engineering principles"
          >
            {content.principles.map((principle, index) => {
              const icons = [Sparkles, CodeXml, Target]
              const Icon = icons[index % icons.length]

              return (
                <li key={principle}>
                  <Icon aria-hidden="true" />
                  <span>{principle}</span>
                </li>
              )
            })}
          </ul>
        )}
      </Container>
    </Section>
  )
}

export default RecruiterProfessionalProfileSection
