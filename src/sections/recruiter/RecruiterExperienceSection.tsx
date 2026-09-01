import {
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  ChevronDown,
  Download,
  MapPin,
} from 'lucide-react'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type { ExperienceEntry, RecruiterExperience } from '../../content/types'

type RecruiterExperienceSectionProps = {
  content: RecruiterExperience
}

function ExperienceTimelineItem({ entry }: { entry: ExperienceEntry }) {
  const detailGroups = [
    { label: 'Key contributions', items: entry.contributions },
    { label: 'Collaboration', items: entry.collaboration },
    { label: 'Architecture exposure', items: entry.architectureExposure },
    { label: 'Operational exposure', items: entry.operationalExposure },
  ].filter((group) => group.items.length > 0)

  return (
    <li className="experience-timeline-item">
      <div className="experience-period">
        <time dateTime={entry.period.start}>{entry.period.label}</time>
        {entry.current && <span>Current</span>}
      </div>
      <span className="experience-timeline-node" aria-hidden="true" />
      <Card
        className={
          entry.current ? 'experience-card is-current' : 'experience-card'
        }
      >
        <div className="experience-card-main">
          <div className="experience-company-mark" aria-hidden="true">
            {entry.companyMark}
          </div>
          <div className="experience-card-content">
            <div className="experience-card-heading">
              <div>
                <h3>{entry.company}</h3>
                <p className="experience-position">{entry.position}</p>
              </div>
              <div className="experience-meta">
                <span>
                  <MapPin aria-hidden="true" />
                  {entry.location.city}, {entry.location.country}
                </span>
                <span>{entry.employmentType}</span>
              </div>
            </div>

            <div
              className="experience-technologies"
              aria-label="Technologies used"
            >
              {entry.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>

            {entry.product && (
              <p className="experience-product">{entry.product}</p>
            )}
            <p className="experience-summary">{entry.summary}</p>

            {detailGroups.length > 0 && (
              <details className="experience-details">
                <summary>
                  <span>View experience details</span>
                  <ChevronDown aria-hidden="true" />
                </summary>
                <div className="experience-detail-grid">
                  {detailGroups.map((group) => (
                    <section key={group.label}>
                      <h4>{group.label}</h4>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </details>
            )}
          </div>
          <ArrowUpRight className="experience-card-arrow" aria-hidden="true" />
        </div>
      </Card>
    </li>
  )
}

function RecruiterExperienceSection({
  content,
}: RecruiterExperienceSectionProps) {
  return (
    <Section
      id="recruiter-experience"
      className="recruiter-experience"
      aria-labelledby="recruiter-experience-title"
    >
      <Container>
        <header className="experience-header">
          <div>
            <p className="section-kicker">
              <BriefcaseBusiness aria-hidden="true" />
              03 / Experience
            </p>
            <h2 id="recruiter-experience-title">{content.title}</h2>
            <p>{content.description}</p>
          </div>
          <div className="experience-system-visual" aria-hidden="true">
            <Boxes />
          </div>
        </header>

        <ol
          className="experience-timeline"
          aria-label="Professional experience timeline"
        >
          {content.entries.map((entry) => (
            <ExperienceTimelineItem entry={entry} key={entry.id} />
          ))}
        </ol>

        {content.cvUrl && (
          <aside className="experience-cv-callout">
            <Download aria-hidden="true" />
            <div>
              <h3>Want the full details?</h3>
              <p>
                Download my CV for a complete overview of my experience and
                skills.
              </p>
            </div>
            <a
              className="button button-secondary"
              href={content.cvUrl}
              download
            >
              Download CV
              <Download aria-hidden="true" />
            </a>
          </aside>
        )}
      </Container>
    </Section>
  )
}

export default RecruiterExperienceSection
