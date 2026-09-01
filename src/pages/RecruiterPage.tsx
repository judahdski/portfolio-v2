import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import { recruiterContent } from '../content/recruiter'
import RecruiterExperienceSection from '../sections/recruiter/RecruiterExperienceSection'
import RecruiterIdentitySection from '../sections/recruiter/RecruiterIdentitySection'
import RecruiterProfessionalProfileSection from '../sections/recruiter/RecruiterProfessionalProfileSection'
import RecruiterTechnicalSkillsSection from '../sections/recruiter/RecruiterTechnicalSkillsSection'

function RecruiterPage() {
  return (
    <div className="audience-page">
      <RecruiterIdentitySection content={recruiterContent.identity} />
      <RecruiterProfessionalProfileSection
        content={recruiterContent.professionalProfile}
      />
      <RecruiterExperienceSection content={recruiterContent.experience} />
      <RecruiterTechnicalSkillsSection
        content={recruiterContent.technicalSkills}
      />
      <Section
        id="contact"
        className="coming-section"
        aria-label="Recruiter portfolio sections"
      >
        <Container className="coming-section-inner">
          <span>Selected work</span>
          <span>Being assembled for Phase 04</span>
        </Container>
      </Section>
    </div>
  )
}

export default RecruiterPage
