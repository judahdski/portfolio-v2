import { Activity, Code2, Compass, Target } from 'lucide-react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type {
  ClientExpectedOutcome,
  ClientValueIcon,
  ClientValueProposition,
} from '../../content/types'

type ClientValuePropositionSectionProps = {
  content: ClientValueProposition
}

const valueIcons: Record<ClientValueIcon, typeof Target> = {
  business: Target,
  delivery: Code2,
  impact: Activity,
}

function OutcomeItem({ outcome }: { outcome: ClientExpectedOutcome }) {
  const Icon = valueIcons[outcome.icon]

  return (
    <li className="client-value-outcome">
      <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
      <div>
        <h3>{outcome.title}</h3>
        <p>{outcome.description}</p>
      </div>
    </li>
  )
}

function ClientValuePropositionSection({
  content,
}: ClientValuePropositionSectionProps) {
  return (
    <Section
      id="client-value"
      className="client-value"
      aria-labelledby="client-value-title"
    >
      <Container>
        <div className="client-value-heading">
          <div>
            <p className="section-kicker">{content.kicker}</p>
            <h2 id="client-value-title">
              {content.title}
              {content.highlightedTitle && (
                <span>{content.highlightedTitle}</span>
              )}
            </h2>
            <p className="client-value-description">{content.description}</p>
          </div>
          <div className="client-value-signal" aria-hidden="true">
            <Compass size={28} strokeWidth={1.4} />
            <span>Value / Direction / Delivery</span>
          </div>
        </div>

        <ul className="client-value-pillars" aria-label="Core value pillars">
          {content.pillars.map((pillar) => {
            const Icon = valueIcons[pillar.icon]

            return (
              <li key={pillar.title} className="client-value-pillar">
                <Icon aria-hidden="true" size={24} strokeWidth={1.7} />
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </li>
            )
          })}
        </ul>

        <div className="client-value-help">
          <div className="client-value-subheading">
            <h2>{content.helpTitle}</h2>
            <p>{content.helpDescription}</p>
          </div>
          <ol className="client-value-steps">
            {content.helpSteps.map((step, index) => (
              <li key={step.title}>
                <span className="client-value-step-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="client-value-expectations">
          <h2>{content.expectationsTitle}</h2>
          <ul aria-label="Expected outcomes">
            {content.expectations.map((outcome, index) => (
              <OutcomeItem
                key={`${outcome.title}-${outcome.description}-${index}`}
                outcome={outcome}
              />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export default ClientValuePropositionSection
