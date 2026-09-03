import type { ClientEngagement } from '../types'

export const clientEngagement: ClientEngagement = {
  kicker: 'Client portfolio / Section 09',
  title: 'Clear Scope.',
  highlightedTitle: 'Aligned Expectations.',
  description: 'Choose an engagement model that fits your project, priorities, and preferred way of working.',
  expectations: [
    { title: 'Aligned from the Start', description: 'Goals, scope, and success criteria are clarified together.', icon: 'scope' },
    { title: 'Transparent & Flexible', description: 'Communication, decisions, and changes remain visible throughout delivery.', icon: 'collaboration' },
    { title: 'On Time, Every Time', description: 'Work is planned in clear stages with regular progress updates.', icon: 'time' },
    { title: 'Built for Impact', description: 'Implementation stays connected to the business problem it should solve.', icon: 'deliverable' },
  ],
  models: [
    { id: 'fixed-scope', number: '01', name: 'Fixed Scope Project', description: 'A defined delivery path for a clearly understood project.', bestFor: 'Best for well-defined projects', scope: ['Clear requirements & deliverables', 'Fixed timeline & price', 'Milestone-based delivery', 'Ideal for new systems or features'], collaborationModel: 'Regular reviews at agreed milestones.', timelineCategory: 'Short to medium project', supportAvailability: 'Handover and optional support', icon: 'scope' },
    { id: 'time-and-material', number: '02', name: 'Time & Material', description: 'Flexible delivery for evolving requirements and priorities.', bestFor: 'Best for evolving requirements', scope: ['Flexible scope & prioritization', 'Pay for actual time and effort', 'Iterative delivery & fast adaptation', 'Ideal for product development'], collaborationModel: 'Frequent prioritization and progress reviews.', timelineCategory: 'Iterative engagement', supportAvailability: 'Support can continue between iterations', icon: 'time', recommended: true },
    { id: 'dedicated-collaboration', number: '03', name: 'Dedicated Collaboration', description: 'A closer partnership for sustained delivery and improvement.', bestFor: 'Best for long-term partnership', scope: ['Dedicated developer or team', 'Deep understanding of your business', 'Continuous improvement', 'Ideal for ongoing product & support'], collaborationModel: 'Embedded collaboration with your team.', timelineCategory: 'Long-term partnership', supportAvailability: 'Ongoing support and iteration', icon: 'collaboration' },
  ],
  includedTitle: "What's Included",
  includedItems: [
    { title: 'Discovery & Planning', description: 'Understand goals, users, and constraints.', icon: 'discovery' },
    { title: 'Design & Prototyping', description: 'Shape clear workflows and interfaces.', icon: 'design' },
    { title: 'Development', description: 'Build maintainable, tested functionality.', icon: 'development' },
    { title: 'Testing & Quality', description: 'Validate behavior, performance, and security.', icon: 'testing' },
    { title: 'Deployment', description: 'Release smoothly and prepare your team.', icon: 'deployment' },
    { title: 'Support & Optimization', description: 'Improve the system after launch.', icon: 'support' },
  ],
  timelineTitle: 'Typical Project Timeline',
  timelineDescription: 'The exact timeline depends on project complexity, scope, and feedback cycles.',
  timeline: [
    { id: 'discover', number: '01', name: 'Discover', duration: '1–2 weeks', description: 'Align on goals, scope, and success metrics.', icon: 'discovery' },
    { id: 'plan', number: '02', name: 'Plan', duration: '1 week', description: 'Define the roadmap, priorities, and approach.', icon: 'scope' },
    { id: 'design', number: '03', name: 'Design', duration: '1–3 weeks', description: 'Create workflows and interactive prototypes.', icon: 'design' },
    { id: 'build', number: '04', name: 'Build', duration: '2–12+ weeks', description: 'Develop, integrate, and iterate in visible increments.', icon: 'development' },
    { id: 'refine', number: '05', name: 'Test & Refine', duration: '1–2 weeks', description: 'Test thoroughly and refine from real feedback.', icon: 'testing' },
    { id: 'support', number: '06', name: 'Deploy & Support', duration: 'Ongoing', description: 'Go live and continue to support and optimize.', icon: 'deployment' },
  ],
  clientResponsibilities: ['Clear goals & success metrics', 'Timely feedback & decisions', 'Access to key stakeholders', 'Availability for key meetings', 'Open communication'],
  deliverables: ['Scope and project documentation', 'Working product increments', 'Production-ready deployment', 'Handover and team enablement', 'Knowledge transfer'],
  remoteAvailability: 'Remote collaboration available by default.',
  technologyPreferences: ['Use your existing stack where practical.', 'Recommend alternatives when they reduce risk or improve fit.'],
  closingStatement: 'Not sure which engagement model fits? Let’s discuss your goals and recommend the best approach for your project.',
  action: { label: 'Schedule a Call', href: '#contact' },
}