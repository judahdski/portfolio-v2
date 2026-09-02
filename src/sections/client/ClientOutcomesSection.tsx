import {
  Activity,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Eye,
  Gauge,
  ListChecks,
  MinusCircle,
  type LucideIcon,
  Users,
} from 'lucide-react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type {
  ClientBusinessOutcome,
  ClientOutcomeEvidenceStatus,
  ClientOutcomeImpactType,
  ClientOutcomeMetric,
  ClientOutcomes,
} from '../../content/types'

type ClientOutcomesSectionProps = {
  content: ClientOutcomes
}

const impactIcons: Record<ClientOutcomeImpactType, LucideIcon> = {
  operational: ListChecks,
  visibility: Eye,
  quality: CheckCircle2,
  productivity: Activity,
  performance: Gauge,
  cost: CircleDollarSign,
  adoption: Users,
  other: BarChart3,
}

const evidenceLabels: Record<ClientOutcomeEvidenceStatus, string> = {
  verified: 'Verified evidence',
  placeholder: 'Placeholder evidence',
  'not-available': 'No metric available',
}

function OutcomeMetric({ metric }: { metric: ClientOutcomeMetric }) {
  return (
    <div className="client-outcome-metric">
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      {metric.context && <small>{metric.context}</small>}
      {metric.status === 'placeholder' && <em>Template</em>}
    </div>
  )
}

function OutcomeRow({ outcome }: { outcome: ClientBusinessOutcome }) {
  const Icon = impactIcons[outcome.impactType]

  return (
    <li className="client-outcome-row">
      <div className="client-outcome-number" aria-hidden="true">
        {outcome.number}
      </div>
      <div className="client-outcome-main">
        <div className="client-outcome-titleline">
          <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
          <p>{outcome.category}</p>
        </div>
        <h3>{outcome.title}</h3>
        <p className="client-outcome-description">{outcome.description}</p>
        {outcome.evidenceNote && (
          <p className="client-outcome-evidence-note">{outcome.evidenceNote}</p>
        )}
      </div>
      <div className="client-outcome-evidence">
        <span
          className={`client-outcome-status client-outcome-status-${outcome.evidenceStatus}`}
        >
          {outcome.evidenceStatus === 'not-available' ? (
            <MinusCircle aria-hidden="true" size={14} strokeWidth={1.8} />
          ) : (
            <CheckCircle2 aria-hidden="true" size={14} strokeWidth={1.8} />
          )}
          {evidenceLabels[outcome.evidenceStatus]}
        </span>
        {outcome.metrics?.map((metric) => (
          <OutcomeMetric
            key={`${outcome.id}-${metric.label}`}
            metric={metric}
          />
        ))}
      </div>
    </li>
  )
}

function ClientOutcomesSection({ content }: ClientOutcomesSectionProps) {
  return (
    <Section
      id="client-outcomes"
      className="client-outcomes"
      aria-labelledby="client-outcomes-title"
    >
      <Container>
        <div className="client-outcomes-heading">
          <div>
            <p className="section-kicker">
              <BarChart3 aria-hidden="true" />
              {content.kicker}
            </p>
            <h2 id="client-outcomes-title">
              {content.title}
              {content.highlightedTitle && (
                <span>{content.highlightedTitle}</span>
              )}
            </h2>
            <p>{content.description}</p>
          </div>
          <div className="client-outcomes-visual" aria-hidden="true">
            <span>PROCESS</span>
            <div className="client-outcomes-visual-line" />
            <span className="client-outcomes-visual-accent">IMPACT</span>
          </div>
        </div>

        {content.outcomes.length > 0 ? (
          <ol className="client-outcomes-list" aria-label="Business outcomes">
            {content.outcomes.map((outcome) => (
              <OutcomeRow key={outcome.id} outcome={outcome} />
            ))}
          </ol>
        ) : (
          <p className="client-outcomes-empty-state">
            No business outcomes have been added yet.
          </p>
        )}

        {content.closingStatement && (
          <p className="client-outcomes-closing">{content.closingStatement}</p>
        )}
      </Container>
    </Section>
  )
}

export default ClientOutcomesSection
