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

export type ProjectCategory = {
  id: string
  label: string
}

export type ProjectPeriod = {
  start: string
  end?: string
  label: string
}

export type ProjectLink = {
  label: string
  href: string
}

export type ProjectMedia = {
  src: string
  alt: string
}

export type RecruiterProject = {
  id: string
  name: string
  type: string
  categories: ProjectCategory['id'][]
  domain: string
  period: ProjectPeriod
  role: string
  summary: string
  responsibilities: string[]
  technicalStack: string[]
  architecture: string[]
  features: string[]
  experienceIds: ExperienceEntry['id'][]
  visualVariant: 'dashboard' | 'workflow' | 'map'
  teamContext?: string[]
  technicalChallenges?: string[]
  engineeringDecisions?: string[]
  integrations?: string[]
  databases?: string[]
  deployment?: string[]
  complexityIndicators?: string[]
  outcome?: string[]
  visibility?: 'public' | 'private'
  repository?: ProjectLink
  liveDemo?: ProjectLink
  caseStudyPath?: string
  media?: ProjectMedia[]
}

export type RecruiterProjects = {
  title: string
  description: string
  categories: ProjectCategory[]
  projects: RecruiterProject[]
}

export type EngineeringTopicId =
  | 'architecture'
  | 'frontend'
  | 'backend-api'
  | 'database'
  | 'integrations'
  | 'deployment'
  | 'complexity'

export type EngineeringTopicIcon =
  | 'api'
  | 'architecture'
  | 'complexity'
  | 'database'
  | 'deployment'
  | 'frontend'
  | 'integration'

export type EngineeringEvidence = {
  projectId: RecruiterProject['id']
  label: string
  details: string[]
}

export type EngineeringTopic = {
  id: EngineeringTopicId
  title: string
  summary: string
  icon: EngineeringTopicIcon
  evidence: EngineeringEvidence[]
}

export type EngineeringDiagramNode = {
  id: string
  label: string
  detail: string
  layer: 'interface' | 'service' | 'data' | 'delivery' | 'integration'
}

export type EngineeringStackGroup = {
  label: string
  technologies: string[]
}

export type RecruiterEngineeringDetails = {
  title: string
  description: string
  featuredProjectId: RecruiterProject['id']
  featuredProjectLabel: string
  diagramTitle: string
  diagramDescription: string
  diagramNodes: EngineeringDiagramNode[]
  stackGroups: EngineeringStackGroup[]
  topics: EngineeringTopic[]
  principle: string
}

export type CareerEvidenceCategoryId =
  | 'education'
  | 'certifications'
  | 'achievements'
  | 'learning'
  | 'contributions'
  | 'public-work'

export type CareerEvidenceIcon =
  | 'award'
  | 'certificate'
  | 'contribution'
  | 'education'
  | 'learning'
  | 'public-work'

export type CareerEvidenceLink = {
  label: string
  href: string
  external?: boolean
}

export type CareerEvidenceItem = {
  id: string
  title: string
  organization: string
  description: string
  icon: CareerEvidenceIcon
  dateLabel?: string
  status?: string
  details?: string[]
  links: CareerEvidenceLink[]
}

export type CareerEvidenceCategory = {
  id: CareerEvidenceCategoryId
  title: string
  description: string
  icon: CareerEvidenceIcon
  items: CareerEvidenceItem[]
}

export type RecruiterCareerEvidence = {
  title: string
  highlightedTitle: string
  description: string
  categories: CareerEvidenceCategory[]
  closingStatement: string
}

export type RecruiterContactIcon =
  'email' | 'linkedin' | 'github' | 'cv' | 'projects'

export type RecruiterContactMethod = {
  id: string
  label: string
  description: string
  value: string
  href: string
  icon: RecruiterContactIcon
  actionLabel: string
  external?: boolean
  download?: boolean
}

export type RecruiterContact = {
  title: string
  highlightedTitle: string
  description: string
  availability?: string
  location?: string
  methods: RecruiterContactMethod[]
  collaborationPrompt: string
  closingStatement: string
}

export type RecruiterContent = {
  identity: RecruiterIdentity
  professionalProfile: RecruiterProfessionalProfile
  experience: RecruiterExperience
  technicalSkills: RecruiterTechnicalSkills
  projects: RecruiterProjects
  engineeringDetails: RecruiterEngineeringDetails
  careerEvidence: RecruiterCareerEvidence
  contact: RecruiterContact
}

export type ClientAction = {
  label: string
  href: string
  external?: boolean
}

export type ClientIdentity = {
  name: string
  role: string
  primaryCapability: string
  profile: string
  areasOfWork: string[]
  portrait?: Portrait
  location?: string
  links: ProfessionalLink[]
  contactInformation?: string
  primaryAction: ClientAction
  secondaryAction?: ClientAction
}

export type ClientContent = {
  identity: ClientIdentity
  inquiryLinks: ProfessionalLink[]
}
