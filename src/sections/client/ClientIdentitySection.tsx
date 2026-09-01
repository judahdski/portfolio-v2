import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import TextLink from '../../components/ui/TextLink'
import type { ClientAction, ClientIdentity } from '../../content/types'

type ClientIdentitySectionProps = {
  content: ClientIdentity
}

function ClientActionLink({
  action,
  primary,
}: {
  action: ClientAction
  primary: boolean
}) {
  const Icon = action.external ? ArrowUpRight : ArrowDownRight

  return (
    <TextLink
      className={`client-identity-action ${primary ? 'client-identity-action-primary' : 'client-identity-action-secondary'}`}
      href={action.href}
      target={action.external ? '_blank' : undefined}
      rel={action.external ? 'noreferrer' : undefined}
    >
      <span>{action.label}</span>
      <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
    </TextLink>
  )
}

function ClientIdentitySection({ content }: ClientIdentitySectionProps) {
  const metadata = [content.location, content.contactInformation].filter(
    Boolean,
  )

  return (
    <Section
      className="client-identity"
      aria-labelledby="client-identity-title"
    >
      <Container>
        <div className="client-identity-grid">
          <div className="client-identity-main">
            <p className="section-kicker">Client portfolio / Section 01</p>
            <p className="client-identity-role">{content.role}</p>
            <h1 id="client-identity-title">{content.name}</h1>
            <p className="client-identity-capability">
              {content.primaryCapability}
            </p>
            <p className="client-identity-profile">{content.profile}</p>
            <div className="client-identity-actions">
              <ClientActionLink action={content.primaryAction} primary />
              {content.secondaryAction && (
                <ClientActionLink
                  action={content.secondaryAction}
                  primary={false}
                />
              )}
            </div>
            {(content.areasOfWork.length > 0 ||
              metadata.length > 0 ||
              content.links.length > 0) && (
              <div className="client-identity-details">
                {content.areasOfWork.length > 0 && (
                  <ul aria-label="Areas of work">
                    {content.areasOfWork.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                )}
                {metadata.length > 0 && (
                  <ul aria-label="Additional information">
                    {metadata.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {content.links.length > 0 && (
                  <nav aria-label="Professional links">
                    {content.links.map((link) => (
                      <TextLink
                        key={link.href}
                        href={link.href}
                        target={
                          link.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          link.href.startsWith('http')
                            ? 'noreferrer'
                            : undefined
                        }
                      >
                        {link.label}
                      </TextLink>
                    ))}
                  </nav>
                )}
              </div>
            )}
          </div>
          {content.portrait && (
            <div className="client-identity-visual">
              <div className="client-identity-portrait-frame">
                <img
                  className="client-identity-portrait"
                  src={content.portrait.src}
                  alt={content.portrait.alt}
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default ClientIdentitySection
