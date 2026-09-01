import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import TextLink from '../../components/ui/TextLink'
import type { RecruiterIdentity } from '../../content/types'

type RecruiterIdentitySectionProps = {
  content: RecruiterIdentity
}

function RecruiterIdentitySection({ content }: RecruiterIdentitySectionProps) {
  const metadata = [
    content.status,
    content.location,
    content.experience,
    content.availability,
  ].filter(Boolean)

  return (
    <Section
      className="recruiter-identity"
      aria-labelledby="recruiter-identity-title"
    >
      <Container>
        <div className="recruiter-identity-grid">
          <div className="recruiter-identity-main">
            <p className="section-kicker">01 / Identity</p>
            <h1 id="recruiter-identity-title">{content.name}</h1>
            <p className="recruiter-identity-title">{content.title}</p>
            <p className="recruiter-identity-profile">{content.profile}</p>
          </div>
          <div className="recruiter-identity-visual">
            <div className="identity-portrait-frame">
              <img
                className="identity-portrait"
                src={content.portrait.src}
                alt={content.portrait.alt}
              />
            </div>
            <aside
              className="recruiter-identity-aside"
              aria-label="Professional details"
            >
              <p className="identity-label">Primary specialization</p>
              <p className="identity-specialization">
                {content.specialization}
              </p>
              {metadata.length > 0 && (
                <ul
                  className="identity-metadata"
                  aria-label="Professional metadata"
                >
                  {metadata.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {content.links.length > 0 && (
                <nav className="identity-links" aria-label="Professional links">
                  {content.links.map((link) => (
                    <TextLink
                      key={link.href}
                      href={link.href}
                      target={
                        link.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        link.href.startsWith('http') ? 'noreferrer' : undefined
                      }
                    >
                      {link.label}
                    </TextLink>
                  ))}
                </nav>
              )}
            </aside>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default RecruiterIdentitySection
