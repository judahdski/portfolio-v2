import {
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Compass,
  FileText,
  Gauge,
  Handshake,
  MessageCircle,
  PencilRuler,
  Rocket,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import TextLink from '../../components/ui/TextLink'
import type {
  ClientApproachIcon,
  ClientApproachPrincipleIcon,
  ClientApproachPhase,
  ClientWorkingApproach,
  ClientWorkingPrinciple,
} from '../../content/types'

type ClientWorkingApproachSectionProps = {
  content: ClientWorkingApproach
}

const phaseIcons: Record<ClientApproachIcon, LucideIcon> = {
  discovery: Compass,
  planning: ClipboardCheck,
  design: PencilRuler,
  development: Code2,
  testing: ShieldCheck,
  delivery: Rocket,
}

const principleIcons: Record<ClientApproachPrincipleIcon, LucideIcon> = {
  collaborative: Handshake,
  transparent: MessageCircle,
  quality: ShieldCheck,
  results: Gauge,
}

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) {
    return null
  }

  return (
    <div className="client-approach-detail-list">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ApproachPhase({ phase }: { phase: ClientApproachPhase }) {
  const Icon = phaseIcons[phase.icon]

  return (
    <li className="client-approach-phase-wrapper">
      <article className="client-approach-phase">
        <div className="client-approach-phase-topline">
          <span>{phase.number}</span>
          <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
        </div>
        <h3>{phase.name}</h3>
        <p className="client-approach-phase-description">{phase.description}</p>
        <div className="client-approach-phase-details">
          <DetailList
            title="Client involvement"
            items={
              phase.clientInvolvement ? [phase.clientInvolvement] : undefined
            }
          />
          <DetailList title="Expected input" items={phase.expectedInput} />
          <DetailList title="Deliverables" items={phase.deliverables} />
          <DetailList
            title="Feedback point"
            items={phase.feedbackPoint ? [phase.feedbackPoint] : undefined}
          />
        </div>
      </article>
      <span className="client-approach-connector" aria-hidden="true">
        →
      </span>
    </li>
  )
}

function WorkingPrinciple({
  principle,
}: {
  principle: ClientWorkingPrinciple
}) {
  const Icon = principleIcons[principle.icon]

  return (
    <li className="client-approach-principle">
      <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
      <div>
        <h3>{principle.title}</h3>
        <p>{principle.description}</p>
      </div>
    </li>
  )
}

function ClientWorkingApproachSection({
  content,
}: ClientWorkingApproachSectionProps) {
  return (
    <Section
      id="client-approach"
      className="client-approach"
      aria-labelledby="client-approach-title"
    >
      <Container>
        <div className="client-approach-heading">
          <div>
            <p className="section-kicker">
              <Sparkles aria-hidden="true" />
              {content.kicker}
            </p>
            <h2 id="client-approach-title">
              {content.title}
              {content.highlightedTitle && (
                <span>{content.highlightedTitle}</span>
              )}
            </h2>
            <p>{content.description}</p>
          </div>
          {(content.commitmentTitle || content.commitmentDescription) && (
            <div className="client-approach-commitment">
              <Handshake aria-hidden="true" size={28} strokeWidth={1.5} />
              <div>
                {content.commitmentTitle && <h3>{content.commitmentTitle}</h3>}
                {content.commitmentDescription && (
                  <p>{content.commitmentDescription}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {content.phases.length > 0 ? (
          <div className="client-approach-process">
            <h2>How I work with you</h2>
            <ol
              className="client-approach-phases"
              aria-label="Working approach phases"
            >
              {content.phases.map((phase) => (
                <ApproachPhase key={phase.id} phase={phase} />
              ))}
            </ol>
          </div>
        ) : (
          <p className="client-approach-empty-state">
            No working approach phases have been added yet.
          </p>
        )}

        {content.principles.length > 0 && (
          <div className="client-approach-principles-panel">
            <ul
              className="client-approach-principles"
              aria-label="Working principles"
            >
              {content.principles.map((principle) => (
                <WorkingPrinciple key={principle.id} principle={principle} />
              ))}
            </ul>
          </div>
        )}

        {(content.communicationModel ||
          content.changeHandling ||
          content.documentation?.length ||
          content.deliveryExpectations?.length) && (
          <div className="client-approach-details">
            {content.communicationModel && (
              <div>
                <MessageCircle aria-hidden="true" size={18} strokeWidth={1.7} />
                <h3>Communication model</h3>
                <p>{content.communicationModel}</p>
              </div>
            )}
            {content.changeHandling && (
              <div>
                <PencilRuler aria-hidden="true" size={18} strokeWidth={1.7} />
                <h3>Change handling</h3>
                <p>{content.changeHandling}</p>
              </div>
            )}
            <DetailList title="Documentation" items={content.documentation} />
            <DetailList
              title="Delivery expectations"
              items={content.deliveryExpectations}
            />
          </div>
        )}

        {(content.closingStatement || content.action) && (
          <div className="client-approach-cta">
            <div>
              <FileText aria-hidden="true" size={28} strokeWidth={1.5} />
              {content.closingStatement && <p>{content.closingStatement}</p>}
            </div>
            {content.action && (
              <TextLink
                href={content.action.href}
                target={content.action.external ? '_blank' : undefined}
                rel={content.action.external ? 'noreferrer' : undefined}
              >
                <CheckCircle2 aria-hidden="true" size={16} strokeWidth={1.8} />
                {content.action.label}
              </TextLink>
            )}
          </div>
        )}
      </Container>
    </Section>
  )
}

export default ClientWorkingApproachSection
