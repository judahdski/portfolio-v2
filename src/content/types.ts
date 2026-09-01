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

export type RecruiterContent = {
  identity: RecruiterIdentity
  professionalProfile: RecruiterProfessionalProfile
}

export type ClientContent = {
  intro: AudienceIntro
  inquiryLinks: ProfessionalLink[]
}
