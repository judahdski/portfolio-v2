import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import { clientContent } from '../content/client'
import ClientIdentitySection from '../sections/client/ClientIdentitySection'
import ClientProblemsSection from '../sections/client/ClientProblemsSection'
import ClientValuePropositionSection from '../sections/client/ClientValuePropositionSection'

function ClientPage() {
  return (
    <div className="audience-page">
      <ClientIdentitySection content={clientContent.identity} />
      <ClientValuePropositionSection content={clientContent.valueProposition} />
      <ClientProblemsSection content={clientContent.problems} />
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
