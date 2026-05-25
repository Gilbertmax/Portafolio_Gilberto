export type Language = 'en' | 'es'

export type Theme = 'light' | 'dark'

export type Project = {
  title: string
  type: string
  description: string
  impact: string
  stack: string[]
}

export type Capability = {
  title: string
  text: string
  proof: string[]
}

export type Experience = {
  role: string
  company: string
  years: string
  summary: string
}

export type SkillGroup = {
  group: string
  items: string[]
}

export type SystemCard = {
  title: string
  detail: string
}

export type ProfileHighlight = {
  label: string
  text: string
}

export type PortfolioContent = {
  skip: string
  nav: string[]
  aria: {
    nav: string
    language: string
    actions: string
    focus: string
  }
  role: string
  name: string
  hero: string
  primaryCta: string
  cvCta: string
  modal: {
    title: string
    text: string
    email: string
    whatsapp: string
    whatsappPending: string
    close: string
    subject: string
    whatsappMessage: string
  }
  profileHighlights: ProfileHighlight[]
  carousel: {
    previous: string
    next: string
    page: string
    showing: string
    of: string
  }
  panelTop: string[]
  pipeline: string[]
  systemCards: SystemCard[]
  intro: string
  workLabel: string
  workTitle: string
  projects: Project[]
  capabilitiesLabel: string
  capabilitiesTitle: string
  capabilities: Capability[]
  experienceLabel: string
  experienceTitle: string
  experience: Experience[]
  stackLabel: string
  stackTitle: string
  skillGroups: SkillGroup[]
  educationLabel: string
  education: string
  contactLabel: string
  contactTitle: string
  email: string
  linkedin: string
}
