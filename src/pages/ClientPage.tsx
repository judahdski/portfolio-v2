import { clientContent } from '../content/client'
import ClientIdentitySection from '../sections/client/ClientIdentitySection'
import ClientProblemsSection from '../sections/client/ClientProblemsSection'
import ClientBusinessWorkflowSection from '../sections/client/ClientBusinessWorkflowSection'
import ClientOutcomesSection from '../sections/client/ClientOutcomesSection'
import ClientServicesSection from '../sections/client/ClientServicesSection'
import ClientValuePropositionSection from '../sections/client/ClientValuePropositionSection'
import ClientWorkingApproachSection from '../sections/client/ClientWorkingApproachSection'
import ClientEngagementSection from '../sections/client/ClientEngagementSection'
import ClientTrustSection from '../sections/client/ClientTrustSection'
import ClientContactSection from '../sections/client/ClientContactSection'

function ClientPage() {
  return (
    <div className="audience-page">
      <ClientIdentitySection content={clientContent.identity} />
      <ClientValuePropositionSection content={clientContent.valueProposition} />
      <ClientProblemsSection content={clientContent.problems} />
      <ClientServicesSection content={clientContent.services} />
      <ClientBusinessWorkflowSection content={clientContent.businessWorkflow} />
      <ClientOutcomesSection content={clientContent.outcomes} />
      <ClientWorkingApproachSection content={clientContent.workingApproach} />
      <ClientEngagementSection content={clientContent.engagement} />
      <ClientTrustSection content={clientContent.trust} />
      <ClientContactSection content={clientContent.contact} />
    </div>
  )
}

export default ClientPage
