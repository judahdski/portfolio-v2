import { recruiterContent } from '../content/recruiter'
import RecruiterContactSection from '../sections/recruiter/RecruiterContactSection'
import RecruiterCareerEvidenceSection from '../sections/recruiter/RecruiterCareerEvidenceSection'
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
      <RecruiterCareerEvidenceSection
        content={recruiterContent.careerEvidence}
      />
      <RecruiterContactSection content={recruiterContent.contact} />
    </div>
  )
}

export default RecruiterPage
