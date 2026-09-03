import {
  Award,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  GitBranch,
  Handshake,
  HeartHandshake,
  Medal,
  MessageSquareQuote,
  ShieldCheck,
  Star,
  Target,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import { useState, type ReactNode } from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import TextLink from '../../components/ui/TextLink'
import type {
  ClientTrust,
  ClientTrustIcon,
  ClientTrustMetric,
  ClientTrustTechnology,
} from '../../content/types'

type Props = { content: ClientTrust }

const icons: Record<ClientTrustIcon, LucideIcon> = {
  reliable: Handshake,
  quality: ShieldCheck,
  'client-focused': HeartHandshake,
  results: Target,
  experience: Award,
  projects: Trophy,
  clients: Handshake,
  satisfaction: Star,
  technology: Code2,
  'case-study': Trophy,
  demo: ExternalLink,
  source: GitBranch,
  report: CheckCircle2,
  certification: Medal,
  learning: Award,
}

function Disclosure({
  title,
  children,
  defaultOpen = true,
}: {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`client-trust-disclosure${open ? ' is-open' : ''}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <ChevronDown aria-hidden="true" size={17} />
      </button>
      {open && (
        <div className="client-trust-disclosure-content">{children}</div>
      )}
    </div>
  )
}

function Metric({ metric }: { metric: ClientTrustMetric }) {
  return (
    <li className="client-trust-metric">
      <strong>{metric.value}</strong>
      <span>{metric.label}</span>
      {metric.context && <small>{metric.context}</small>}
    </li>
  )
}

function Technology({ technology }: { technology: ClientTrustTechnology }) {
  return (
    <li>
      <span>{technology.name}</span>
      {technology.category && <small>{technology.category}</small>}
    </li>
  )
}

function ClientTrustSection({ content }: Props) {
  const verifiedMetrics = content.metrics.filter(
    (metric) => metric.status === 'verified',
  )
  const verifiedTestimonials = content.testimonials.filter(
    (testimonial) =>
      testimonial.status === 'verified' && testimonial.permissionConfirmed,
  )
  const verifiedEvidence = content.evidenceLinks.filter(
    (item) => item.status === 'verified' && item.href,
  )
  const verifiedRecognition = content.recognition.filter(
    (item) => item.status === 'verified',
  )

  return (
    <Section
      id="client-trust"
      className="client-trust"
      aria-labelledby="client-trust-title"
    >
      <Container>
        <div className="client-trust-heading">
          <div>
            <p className="section-kicker">
              <ShieldCheck aria-hidden="true" />
              {content.kicker}
            </p>
            <h2 id="client-trust-title">
              {content.title}{' '}
              {content.highlightedTitle && (
                <span>{content.highlightedTitle} </span>
              )}
              <span>Trusted by Clients.</span>
            </h2>
            <p>{content.description}</p>
          </div>
          <ul className="client-trust-principles" aria-label="Trust principles">
            {content.principles.map((principle) => {
              const Icon = icons[principle.icon]
              return (
                <li key={principle.id}>
                  <Icon aria-hidden="true" size={21} />
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {(verifiedMetrics.length > 0 || content.technologies.length > 0) && (
          <div className="client-trust-proof-grid">
            {verifiedMetrics.length > 0 && (
              <Disclosure title="Experience & Credentials">
                <ul
                  className="client-trust-metrics"
                  aria-label="Verified experience metrics"
                >
                  {verifiedMetrics.map((metric) => (
                    <Metric key={metric.id} metric={metric} />
                  ))}
                </ul>
              </Disclosure>
            )}
            {content.technologies.length > 0 && (
              <Disclosure title="Tech Stack Expertise">
                <ul
                  className="client-trust-technologies"
                  aria-label="Technology expertise"
                >
                  {content.technologies
                    .filter(
                      (technology) => technology.status !== 'not-available',
                    )
                    .map((technology) => (
                      <Technology
                        key={technology.name}
                        technology={technology}
                      />
                    ))}
                </ul>
              </Disclosure>
            )}
          </div>
        )}

        {(verifiedTestimonials.length > 0 || verifiedEvidence.length > 0) && (
          <div className="client-trust-proof-grid client-trust-proof-grid-lower">
            {verifiedTestimonials.length > 0 && (
              <Disclosure title="Client Testimonials">
                <ul
                  className="client-trust-testimonials"
                  aria-label="Verified client testimonials"
                >
                  {verifiedTestimonials.map((testimonial) => (
                    <li key={testimonial.id}>
                      <MessageSquareQuote aria-hidden="true" size={21} />
                      <blockquote>“{testimonial.quote}”</blockquote>
                      <cite>
                        {testimonial.personName}
                        {testimonial.role && `, ${testimonial.role}`}
                        {testimonial.organization &&
                          ` at ${testimonial.organization}`}
                      </cite>
                      {testimonial.rating && (
                        <span
                          aria-label={`${testimonial.rating} out of 5 stars`}
                        >
                          {'★'.repeat(testimonial.rating)}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Disclosure>
            )}
            {verifiedEvidence.length > 0 && (
              <Disclosure title="Project Evidence">
                <ul
                  className="client-trust-evidence"
                  aria-label="Project evidence"
                >
                  {verifiedEvidence.map((item) => {
                    const Icon = icons[item.icon]
                    return (
                      <li key={item.id}>
                        <Icon aria-hidden="true" size={20} />
                        <div>
                          <h3>{item.label}</h3>
                          <p>{item.description}</p>
                        </div>
                        <TextLink
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noreferrer' : undefined}
                          aria-label={`Open ${item.label}`}
                        >
                          {item.external && (
                            <ExternalLink aria-hidden="true" size={15} />
                          )}
                        </TextLink>
                      </li>
                    )
                  })}
                </ul>
              </Disclosure>
            )}
          </div>
        )}

        {verifiedRecognition.length > 0 && (
          <Disclosure title="Recognition & Commitment">
            <ul
              className="client-trust-recognition"
              aria-label="Verified recognition"
            >
              {verifiedRecognition.map((item) => {
                const Icon = icons[item.icon]
                return (
                  <li key={item.id}>
                    <Icon aria-hidden="true" size={22} />
                    <div>
                      <h3>{item.title}</h3>
                      {item.issuer && <small>{item.issuer}</small>}
                      <p>{item.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Disclosure>
        )}

        <aside className="client-trust-cta">
          <div>
            <p className="section-kicker">
              <ShieldCheck aria-hidden="true" />A grounded next step
            </p>
            <h2>{content.closingTitle}</h2>
            <p>{content.closingStatement}</p>
          </div>
          {content.action && (
            <TextLink href={content.action.href}>
              {content.action.label}
              <ExternalLink aria-hidden="true" size={15} />
            </TextLink>
          )}
        </aside>
      </Container>
    </Section>
  )
}

export default ClientTrustSection
