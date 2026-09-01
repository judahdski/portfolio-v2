import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  GraduationCap,
  Handshake,
  ShieldCheck,
  SquareCode,
  Target,
} from 'lucide-react'
import Badge from '../../components/ui/Badge'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type {
  CareerEvidenceCategory,
  CareerEvidenceIcon,
  CareerEvidenceItem,
  RecruiterCareerEvidence,
} from '../../content/types'

type RecruiterCareerEvidenceSectionProps = {
  content: RecruiterCareerEvidence
}

const evidenceIcons = {
  award: Award,
  certificate: BadgeCheck,
  contribution: Handshake,
  education: GraduationCap,
  learning: BookOpenCheck,
  'public-work': SquareCode,
} satisfies Record<CareerEvidenceIcon, typeof Award>

function EvidenceItem({ item }: { item: CareerEvidenceItem }) {
  const Icon = evidenceIcons[item.icon]

  return (
    <article className="career-evidence-item">
      <div className="career-evidence-item-icon" aria-hidden="true">
        <Icon />
      </div>
      <div className="career-evidence-item-content">
        <div className="career-evidence-item-heading">
          <div>
            <h4>{item.title}</h4>
            <p>{item.organization}</p>
          </div>
          {item.dateLabel && <time>{item.dateLabel}</time>}
        </div>
        <p className="career-evidence-item-description">{item.description}</p>
        {(item.status || (item.details && item.details.length > 0)) && (
          <div className="career-evidence-item-meta">
            {item.status && <Badge>{item.status}</Badge>}
            {item.details?.map((detail) => (
              <Badge key={detail}>{detail}</Badge>
            ))}
          </div>
        )}
        {item.links.length > 0 && (
          <div className="career-evidence-item-links">
            {item.links.map((link) => (
              <a
                href={link.href}
                key={`${link.label}-${link.href}`}
                rel={link.external ? 'noreferrer' : undefined}
                target={link.external ? '_blank' : undefined}
              >
                {link.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

function EvidenceCategory({ category }: { category: CareerEvidenceCategory }) {
  const Icon = evidenceIcons[category.icon]

  return (
    <section
      id={`career-evidence-${category.id}`}
      className="career-evidence-category"
      aria-labelledby={`career-evidence-${category.id}-title`}
    >
      <header>
        <div>
          <Icon aria-hidden="true" />
          <h3 id={`career-evidence-${category.id}-title`}>{category.title}</h3>
        </div>
        <span>{String(category.items.length).padStart(2, '0')}</span>
      </header>
      <p>{category.description}</p>
      <div className="career-evidence-list">
        {category.items.map((item) => (
          <EvidenceItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

function RecruiterCareerEvidenceSection({
  content,
}: RecruiterCareerEvidenceSectionProps) {
  const categories = content.categories.filter(
    (category) => category.items.length > 0,
  )

  if (categories.length === 0) {
    return null
  }

  const evidenceCount = categories.reduce(
    (total, category) => total + category.items.length,
    0,
  )

  return (
    <Section
      id="recruiter-career-evidence"
      className="recruiter-career-evidence"
      aria-labelledby="recruiter-career-evidence-title"
    >
      <Container>
        <header className="career-evidence-header">
          <div>
            <p className="section-kicker">
              <ShieldCheck aria-hidden="true" />
              07 / Career / Professional Evidence
            </p>
            <h2 id="recruiter-career-evidence-title">
              {content.title} <span>{content.highlightedTitle}</span>
            </h2>
            <p>{content.description}</p>
          </div>
          <div className="career-evidence-index" aria-label="Evidence summary">
            <Target aria-hidden="true" />
            <div>
              <strong>{String(evidenceCount).padStart(2, '0')}</strong>
              <span>Verified milestones</span>
            </div>
            <div>
              <strong>{String(categories.length).padStart(2, '0')}</strong>
              <span>Evidence category</span>
            </div>
          </div>
        </header>

        {categories.length > 1 && (
          <nav className="career-evidence-nav" aria-label="Evidence categories">
            {categories.map((category) => {
              const Icon = evidenceIcons[category.icon]
              return (
                <a href={`#career-evidence-${category.id}`} key={category.id}>
                  <Icon aria-hidden="true" />
                  {category.title}
                  <span>{category.items.length}</span>
                </a>
              )
            })}
          </nav>
        )}

        <div className="career-evidence-grid">
          {categories.map((category) => (
            <EvidenceCategory category={category} key={category.id} />
          ))}
        </div>

        <aside className="career-evidence-principle">
          <ShieldCheck aria-hidden="true" />
          <div>
            <span>Evidence standard</span>
            <p>{content.closingStatement}</p>
          </div>
        </aside>
      </Container>
    </Section>
  )
}

export default RecruiterCareerEvidenceSection
