import {
  ChartNoAxesCombined,
  CloudUpload,
  Code2,
  Database,
  Headphones,
  Link,
  Monitor,
  ShieldCheck,
  Target,
  UserRound,
} from 'lucide-react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import TextLink from '../../components/ui/TextLink'
import type {
  ClientQualityPrinciple,
  ClientService,
  ClientServiceIcon,
  ClientServices,
  ClientValueIcon,
} from '../../content/types'

type ClientServicesSectionProps = {
  content: ClientServices
}

const serviceIcons: Record<ClientServiceIcon, typeof Monitor> = {
  web: Monitor,
  database: Database,
  deployment: CloudUpload,
  integration: Link,
  analytics: ChartNoAxesCombined,
  support: Headphones,
}

const qualityIcons: Record<ClientValueIcon, typeof Target> = {
  business: ShieldCheck,
  delivery: Code2,
  impact: UserRound,
}

const systemNodes = [
  { label: 'Strategy', icon: Target },
  { label: 'Design', icon: Monitor },
  { label: 'Build', icon: Code2 },
  { label: 'Deploy', icon: CloudUpload },
  { label: 'Support', icon: Headphones },
]

function ServiceCard({ service }: { service: ClientService }) {
  const Icon = serviceIcons[service.icon]

  return (
    <li className="client-service-card">
      <div className="client-service-card-topline">
        <span className="client-service-number">{service.number}</span>
        <div className="client-service-icon">
          <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
        </div>
      </div>
      <p className="client-service-category">{service.category}</p>
      <h3>{service.name}</h3>
      <p className="client-service-description">{service.description}</p>
      <ul className="client-service-scope" aria-label={`${service.name} scope`}>
        {service.scope.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  )
}

function QualityPrinciple({
  principle,
}: {
  principle: ClientQualityPrinciple
}) {
  const Icon = qualityIcons[principle.icon]

  return (
    <li className="client-quality-principle">
      <Icon aria-hidden="true" size={24} strokeWidth={1.7} />
      <div>
        <h3>{principle.title}</h3>
        <p>{principle.description}</p>
      </div>
    </li>
  )
}

function ClientServicesSection({ content }: ClientServicesSectionProps) {
  return (
    <Section
      id="client-services"
      className="client-services"
      aria-labelledby="client-services-title"
    >
      <Container>
        <div className="client-services-heading">
          <div>
            <p className="section-kicker">{content.kicker}</p>
            <h2 id="client-services-title">
              {content.title}
              {content.highlightedTitle && (
                <span>{content.highlightedTitle}</span>
              )}
            </h2>
            <p className="client-services-description">{content.description}</p>
          </div>
          <div className="client-services-system" aria-hidden="true">
            <div className="client-services-core">SYSTEM</div>
            {systemNodes.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className={`client-services-node client-services-node-${label.toLowerCase()}`}
              >
                <Icon size={18} strokeWidth={1.7} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="client-services-list-heading">
          <h2>{content.listTitle}</h2>
          {content.action && (
            <TextLink
              href={content.action.href}
              target={content.action.external ? '_blank' : undefined}
              rel={content.action.external ? 'noreferrer' : undefined}
            >
              {content.action.label}
            </TextLink>
          )}
        </div>

        <ul
          className="client-services-grid"
          aria-label="Services and capabilities"
        >
          {content.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ul>

        <div className="client-services-quality">
          <div className="client-services-quality-heading">
            <h2>{content.qualityTitle}</h2>
            {content.qualityDescription && <p>{content.qualityDescription}</p>}
          </div>
          <ul aria-label="Quality principles">
            {content.qualityPrinciples.map((principle) => (
              <QualityPrinciple key={principle.title} principle={principle} />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export default ClientServicesSection
