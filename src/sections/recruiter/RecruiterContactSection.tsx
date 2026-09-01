import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  FolderKanban,
  Handshake,
  Mail,
  MapPin,
} from 'lucide-react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type {
  RecruiterContact,
  RecruiterContactIcon,
} from '../../content/types'

type RecruiterContactSectionProps = {
  content: RecruiterContact
}

const contactIcons: Record<RecruiterContactIcon, typeof Mail> = {
  email: Mail,
  linkedin: ExternalLink,
  github: ExternalLink,
  cv: FileText,
  projects: FolderKanban,
}

function RecruiterContactSection({ content }: RecruiterContactSectionProps) {
  const methods = content.methods.filter(
    (method) => method.href.trim() && method.label.trim(),
  )
  const primaryMethod = methods[0]
  const primaryMethodIsExternal =
    primaryMethod?.external ?? primaryMethod?.href.startsWith('http')

  return (
    <Section
      id="contact"
      className="recruiter-contact"
      aria-labelledby="recruiter-contact-title"
    >
      <Container>
        <header className="contact-header">
          <div>
            <p className="section-kicker">
              <Handshake aria-hidden="true" />
              08 / Contact / Professional Links
            </p>
            <h2 id="recruiter-contact-title">
              {content.title} <span>{content.highlightedTitle}</span>
            </h2>
            <p>{content.description}</p>
          </div>
          {content.availability && (
            <div className="contact-availability">
              <span aria-hidden="true" />
              {content.availability}
            </div>
          )}
        </header>

        {methods.length > 0 && (
          <div
            className="contact-methods"
            aria-label="Professional contact options"
          >
            {methods.map((method) => {
              const Icon = contactIcons[method.icon]
              const isExternal =
                method.external ?? method.href.startsWith('http')
              return (
                <article className="contact-method" key={method.id}>
                  <div className="contact-method-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <div className="contact-method-content">
                    <p className="contact-method-label">{method.label}</p>
                    <p className="contact-method-description">
                      {method.description}
                    </p>
                    <p className="contact-method-value">{method.value}</p>
                    <a
                      className="contact-method-action"
                      href={method.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      download={method.download ? true : undefined}
                    >
                      {method.actionLabel}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        <aside className="contact-cta">
          <Handshake aria-hidden="true" />
          <div>
            <strong>{content.collaborationPrompt}</strong>
            {content.location && (
              <span className="contact-location">
                <MapPin aria-hidden="true" />
                {content.location}
              </span>
            )}
          </div>
          {primaryMethod && (
            <a
              href={primaryMethod.href}
              className="contact-cta-action"
              aria-label={`${primaryMethod.actionLabel} from collaboration prompt`}
              target={primaryMethodIsExternal ? '_blank' : undefined}
              rel={primaryMethodIsExternal ? 'noreferrer' : undefined}
              download={primaryMethod.download ? true : undefined}
            >
              {primaryMethod.actionLabel}
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </aside>

        <p className="contact-standard">{content.closingStatement}</p>
      </Container>
    </Section>
  )
}

export default RecruiterContactSection
