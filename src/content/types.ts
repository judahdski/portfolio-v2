export type ProfessionalLink = {
  label: string
  href: string
}

export type AudienceIntro = {
  kicker: string
  title: string
  description: string
}

export type Portrait = {
  src: string
  alt: string
}

export type RecruiterIdentity = {
  name: string
  title: string
  specialization: string
  profile: string
  portrait: Portrait
  status?: string
  location?: string
  experience?: string
  availability?: string
  links: ProfessionalLink[]
}

export type ProfessionalProfileIcon =
  'code' | 'database' | 'integration' | 'rocket' | 'systems'

export type ProfessionalProfileCapability = {
  title: string
  description: string
  icon: ProfessionalProfileIcon
}

export type ProfessionalProfileFocus = {
  label: string
  emphasis: 'primary' | 'supporting'
}

export type RecruiterProfessionalProfile = {
  statement: string
  highlightedStatement: string
  summary: string[]
  coreSpecializations: ProfessionalProfileCapability[]
  expertiseAreas: string[]
  technicalFocus: ProfessionalProfileFocus[]
  systemTypes: string[]
  engineeringValues: string[]
  principles: string[]
}

export type ExperiencePeriod = {
  start: string
  end?: string
  label: string
}

export type ExperienceLocation = {
  city: string
  country: string
  arrangement?: string
}

export type ExperienceEntry = {
  id: string
  company: string
  companyMark: string
  position: string
  period: ExperiencePeriod
  employmentType: string
  location: ExperienceLocation
  current?: boolean
  product?: string
  summary: string
  technologies: string[]
  contributions: string[]
  collaboration: string[]
  architectureExposure: string[]
  operationalExposure: string[]
}

export type RecruiterExperience = {
  title: string
  description: string
  entries: ExperienceEntry[]
  cvUrl?: string
}

export type TechnicalSkillIcon =
  | 'architecture'
  | 'backend'
  | 'database'
  | 'devops'
  | 'frontend'
  | 'integration'
  | 'tooling'

export type TechnicalSkillEvidence = {
  experienceId: ExperienceEntry['id']
  label: string
}

export type TechnicalSkill = {
  name: string
  type: 'technology' | 'tool' | 'architecture' | 'practice'
  evidence: TechnicalSkillEvidence[]
}

export type TechnicalSkillCategory = {
  id: string
  title: string
  description: string
  icon: TechnicalSkillIcon
  emphasis: 'primary' | 'supporting'
  skills: TechnicalSkill[]
}

export type RecruiterTechnicalSkills = {
  title: string
  description: string
  categories: TechnicalSkillCategory[]
  learningStatement?: string
}

export type RecruiterContent = {
  identity: RecruiterIdentity
  professionalProfile: RecruiterProfessionalProfile
  experience: RecruiterExperience
  technicalSkills: RecruiterTechnicalSkills
}

export type ClientContent = {
  intro: AudienceIntro
  inquiryLinks: ProfessionalLink[]
}
