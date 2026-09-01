import type { ClientContent } from '../types'

export const clientContent: ClientContent = {
  identity: {
    name: '[Your name]',
    role: '[Professional role]',
    primaryCapability: '[Primary capability for client-facing work]',
    profile:
      '[Short introduction about the kind of business problems you help solve.]',
    areasOfWork: [
      '[General area of work]',
      '[Type of system or workflow]',
      '[Relevant delivery capability]',
    ],
    portrait: {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
      alt: 'Temporary portrait placeholder',
    },
    location: '[Optional location]',
    links: [],
    contactInformation: '[Contact information to be added]',
    primaryAction: {
      label: "Let's discuss your project",
      href: '#contact',
    },
  },
  inquiryLinks: [],
}
