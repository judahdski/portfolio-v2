import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import { recruiterContent } from '../content/recruiter'
import RecruiterEngineeringDetailsSection from '../sections/recruiter/RecruiterEngineeringDetailsSection'
import RecruiterExperienceSection from '../sections/recruiter/RecruiterExperienceSection'
import RecruiterIdentitySection from '../sections/recruiter/RecruiterIdentitySection'
import RecruiterProfessionalProfileSection from '../sections/recruiter/RecruiterProfessionalProfileSection'
import RecruiterProjectsSection from '../sections/recruiter/RecruiterProjectsSection'
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
      <RecruiterProjectsSection content={recruiterContent.projects} />
      <RecruiterEngineeringDetailsSection
        content={recruiterContent.engineeringDetails}
      />
      <Section
        id="contact"
        className="coming-section"
        aria-label="Recruiter portfolio sections"
      >
        <Container className="coming-section-inner">
          <span>Career evidence</span>
          <span>Being assembled for Phase 04</span>
        </Container>
      </Section>
    </div>
  )
}

export default RecruiterPage
