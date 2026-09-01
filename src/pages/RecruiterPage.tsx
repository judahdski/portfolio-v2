import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import { recruiterContent } from '../content/recruiter'
import RecruiterIdentitySection from '../sections/recruiter/RecruiterIdentitySection'
import RecruiterProfessionalProfileSection from '../sections/recruiter/RecruiterProfessionalProfileSection'

function RecruiterPage() {
  return (
    <div className="audience-page">
      <RecruiterIdentitySection content={recruiterContent.identity} />
      <RecruiterProfessionalProfileSection
        content={recruiterContent.professionalProfile}
      />
      <Section
        id="contact"
        className="coming-section"
        aria-label="Recruiter portfolio sections"
      >
        <Container className="coming-section-inner">
          <span>Experience / Technical skills / Selected work</span>
          <span>Being assembled for Phase 04</span>
        </Container>
      </Section>
    </div>
  )
}

export default RecruiterPage
