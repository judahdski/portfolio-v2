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

export type RecruiterContent = {
  identity: RecruiterIdentity
}

export type ClientContent = {
  intro: AudienceIntro
  inquiryLinks: ProfessionalLink[]
}
