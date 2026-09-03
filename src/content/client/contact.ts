import type { ClientContact } from '../types'

export const clientContact: ClientContact = {
  kicker: 'Client portfolio / Section 11',
  title: "Let's build something",
  highlightedTitle: 'great together.',
  description:
    "Have a project in mind or want to explore an idea? Share the context, and we can find the right next step.",
  signals: [
    { id: 'fast-response', title: 'Fast Response', description: 'Response timing will be confirmed with the active contact channel.', icon: 'clock' },
    { id: 'discovery-first', title: 'Discovery First', description: 'Start with a conversation to understand the problem and priorities.', icon: 'project' },
    { id: 'no-spam', title: 'No Spam, Ever', description: 'Information shared here is used only to respond to your inquiry.', icon: 'shield' },
  ],
  projectTypes: [
    { value: 'workflow-system', label: 'Workflow system' },
    { value: 'web-application', label: 'Web application' },
    { value: 'integration', label: 'API or integration' },
    { value: 'modernization', label: 'System modernization' },
    { value: 'reporting', label: 'Reporting or dashboard' },
    { value: 'other', label: 'Something else' },
  ],
  budgetOptions: [
    { value: 'under-5k', label: '< $5K' },
    { value: '5k-15k', label: '$5K - $15K' },
    { value: '15k-30k', label: '$15K - $30K' },
    { value: 'over-30k', label: '$30K+' },
    { value: 'not-sure', label: 'Not sure' },
  ],
  methods: [],
  privacyLabel: 'I agree that my information may be used to respond to this inquiry.',
  submitLabel: 'Prepare Inquiry',
  successMessage: 'Your email client will open with the inquiry prepared.',
  errorMessage: 'A verified contact destination is not configured yet. Please use an available contact method when one is added.',
}