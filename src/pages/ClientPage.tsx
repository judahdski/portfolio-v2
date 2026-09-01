import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import SectionHeader from '../components/ui/SectionHeader'
import { clientContent } from '../content/client'

function ClientPage() {
  return (
    <div className="audience-page">
      <Section className="page-intro">
        <Container>
          <SectionHeader
            kicker={clientContent.intro.kicker}
            title={clientContent.intro.title}
            description={clientContent.intro.description}
          />
        </Container>
      </Section>
      <Section
        id="contact"
        className="coming-section"
        aria-label="Client portfolio sections"
      >
        <Container className="coming-section-inner">
          <span>Services / Case studies / Approach</span>
          <span>Being assembled for Phase 05</span>
        </Container>
      </Section>
    </div>
  )
}

export default ClientPage
