import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Compass,
  Handshake,
  Lightbulb,
  ListChecks,
  MessageCircle,
  PencilRuler,
  Rocket,
  ShieldCheck,
  Target,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import TextLink from '../../components/ui/TextLink'
import type {
  ClientEngagement,
  ClientEngagementIcon,
  ClientEngagementItem,
  ClientEngagementModel,
  ClientTimelineStage,
} from '../../content/types'

type Props = { content: ClientEngagement }

const icons: Record<ClientEngagementIcon, LucideIcon> = {
  scope: Target,
  time: Clock3,
  collaboration: Handshake,
  discovery: Compass,
  design: PencilRuler,
  development: Code2,
  testing: ShieldCheck,
  deployment: Rocket,
  support: MessageCircle,
  client: UsersRound,
  deliverable: ListChecks,
}

function Item({ item }: { item: ClientEngagementItem }) {
  const Icon = icons[item.icon]
  return (
    <li className="client-engagement-item">
      <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </li>
  )
}

function Model({ model }: { model: ClientEngagementModel }) {
  const Icon = icons[model.icon]
  return (
    <li
      className={`client-engagement-model${model.recommended ? ' client-engagement-model-recommended' : ''}`}
    >
      <div className="client-engagement-model-topline">
        <span>{model.number}</span>
        <Icon aria-hidden="true" size={24} strokeWidth={1.7} />
      </div>
      {model.recommended && (
        <span className="client-engagement-recommended">
          Recommended for flexibility
        </span>
      )}
      <h3>{model.name}</h3>
      <p className="client-engagement-best-for">{model.bestFor}</p>
      <p>{model.description}</p>
      <ul>
        {model.scope.map((item) => (
          <li key={item}>
            <Check aria-hidden="true" size={13} strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>
      <p className="client-engagement-model-meta">
        <strong>Collaboration</strong>
        {model.collaborationModel}
      </p>
    </li>
  )
}

function TimelineStage({ stage }: { stage: ClientTimelineStage }) {
  const Icon = icons[stage.icon]
  return (
    <li className="client-engagement-timeline-stage">
      <div className="client-engagement-timeline-icon">
        <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
      </div>
      <span>{stage.number}</span>
      <h3>{stage.name}</h3>
      <strong>{stage.duration}</strong>
      <p>{stage.description}</p>
    </li>
  )
}

function DetailDisclosure({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`client-engagement-disclosure${open ? ' is-open' : ''}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <ChevronDown aria-hidden="true" size={17} />
      </button>
      {open && (
        <div className="client-engagement-disclosure-content">{children}</div>
      )}
    </div>
  )
}

function DetailList({
  title,
  items,
  icon: Icon,
}: {
  title: string
  items: string[]
  icon: LucideIcon
}) {
  return (
    <div className="client-engagement-detail-list">
      <div>
        <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check aria-hidden="true" size={13} strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ClientEngagementSection({ content }: Props) {
  return (
    <Section
      id="client-engagement"
      className="client-engagement"
      aria-labelledby="client-engagement-title"
    >
      <Container>
        <div className="client-engagement-heading">
          <div>
            <p className="section-kicker">
              <BriefcaseBusiness aria-hidden="true" />
              {content.kicker}
            </p>
            <h2 id="client-engagement-title">
              {content.title}{' '}
              {content.highlightedTitle && (
                <span>{content.highlightedTitle} </span>
              )}
              <span>Better Results.</span>
            </h2>
            <p>{content.description}</p>
          </div>
          <ul
            className="client-engagement-expectations"
            aria-label="Engagement expectations"
          >
            {content.expectations.map((item) => (
              <Item key={item.title} item={item} />
            ))}
          </ul>
        </div>
        <div className="client-engagement-block-heading">
          <h2>Engagement Models</h2>
          <p>
            Choose the engagement model that fits your project needs and team
            preference.
          </p>
        </div>
        <div className="client-engagement-models-layout">
          <ul
            className="client-engagement-models"
            aria-label="Engagement models"
          >
            {content.models.map((model) => (
              <Model key={model.id} model={model} />
            ))}
          </ul>
          <aside className="client-engagement-recommendation">
            <Lightbulb aria-hidden="true" size={24} strokeWidth={1.7} />
            <h3>Not sure which one fits?</h3>
            <p>{content.closingStatement}</p>
            {content.action && (
              <TextLink href={content.action.href}>
                {content.action.label}
                <Rocket aria-hidden="true" size={15} strokeWidth={1.8} />
              </TextLink>
            )}
          </aside>
        </div>
        <div className="client-engagement-included">
          <div className="client-engagement-block-heading">
            <h2>{content.includedTitle}</h2>
          </div>
          <ul aria-label="What's included">
            {content.includedItems.map((item) => (
              <Item key={item.title} item={item} />
            ))}
          </ul>
        </div>
        <div className="client-engagement-timeline">
          <div className="client-engagement-block-heading">
            <h2>{content.timelineTitle}</h2>
            <p>{content.timelineDescription}</p>
          </div>
          <ol aria-label="Typical project timeline">
            {content.timeline.map((stage) => (
              <TimelineStage key={stage.id} stage={stage} />
            ))}
          </ol>
        </div>
        <div className="client-engagement-details">
          <DetailDisclosure title="Client Responsibilities" defaultOpen>
            <DetailList
              title="What I need from you"
              items={content.clientResponsibilities}
              icon={UsersRound}
            />
          </DetailDisclosure>
          <DetailDisclosure title="Deliverables You Can Expect" defaultOpen>
            <DetailList
              title="What you receive"
              items={content.deliverables}
              icon={ListChecks}
            />
          </DetailDisclosure>
        </div>
        {(content.remoteAvailability ||
          content.technologyPreferences?.length) && (
          <div className="client-engagement-availability">
            <CalendarDays aria-hidden="true" size={25} strokeWidth={1.7} />
            <div>
              <h3>Ready to start your project?</h3>
              {content.remoteAvailability && (
                <p>{content.remoteAvailability}</p>
              )}
              {content.technologyPreferences?.length && (
                <p>{content.technologyPreferences.join(' ')}</p>
              )}
            </div>
            {content.action && (
              <TextLink href={content.action.href}>
                {content.action.label}
                <Rocket aria-hidden="true" size={15} strokeWidth={1.8} />
              </TextLink>
            )}
          </div>
        )}
      </Container>
    </Section>
  )
}

export default ClientEngagementSection
