import {
  ArrowDown,
  Bot,
  CircleUserRound,
  GitBranch,
  Globe2,
  Waypoints,
} from 'lucide-react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type {
  ClientBusinessWorkflow,
  ClientWorkflow,
  ClientWorkflowActor,
  ClientWorkflowStage,
} from '../../content/types'

type ClientBusinessWorkflowSectionProps = {
  content: ClientBusinessWorkflow
}

const actorIcons: Record<ClientWorkflowActor['type'], typeof CircleUserRound> =
  {
    human: CircleUserRound,
    system: Bot,
    external: Globe2,
  }

const modeLabels: Record<NonNullable<ClientWorkflowStage['mode']>, string> = {
  manual: 'Manual',
  automated: 'Automated',
  assisted: 'Assisted',
}

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) {
    return null
  }

  return (
    <div className="client-workflow-detail-list">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ActorLegend({ actors }: { actors: ClientWorkflowActor[] }) {
  return (
    <ul className="client-workflow-actors" aria-label="Workflow actors">
      {actors.map((actor) => {
        const Icon = actorIcons[actor.type]

        return (
          <li key={actor.id}>
            <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
            <span>
              <strong>{actor.name}</strong>
              <small>{actor.role}</small>
            </span>
          </li>
        )
      })}
    </ul>
  )
}

function WorkflowStage({
  stage,
  actors,
}: {
  stage: ClientWorkflowStage
  actors: ClientWorkflowActor[]
}) {
  const stageActors = actors.filter((actor) =>
    stage.actorIds.includes(actor.id),
  )

  return (
    <div className="client-workflow-stage">
      <div className="client-workflow-stage-heading">
        <span className="client-workflow-stage-number">{stage.number}</span>
        <div>
          <h3>{stage.name}</h3>
          {stage.mode && (
            <span className="client-workflow-mode">
              {modeLabels[stage.mode]}
            </span>
          )}
        </div>
      </div>
      <p>{stage.description}</p>
      {stageActors.length > 0 && (
        <p className="client-workflow-stage-actors">
          {stageActors.map((actor) => actor.name).join(' / ')}
        </p>
      )}
      <div className="client-workflow-stage-details">
        <DetailList title="Input" items={stage.inputs} />
        <DetailList title="Output" items={stage.outputs} />
        <DetailList title="Business rules" items={stage.businessRules} />
        <DetailList
          title="System interactions"
          items={stage.systemInteractions}
        />
      </div>
    </div>
  )
}

function WorkflowPanel({ workflow }: { workflow: ClientWorkflow }) {
  return (
    <article className="client-workflow-panel">
      <div className="client-workflow-panel-header">
        <div>
          <p className="client-workflow-category">{workflow.category}</p>
          <h2>{workflow.name}</h2>
          <p>{workflow.description}</p>
        </div>
        <div className="client-workflow-panel-mark" aria-hidden="true">
          <GitBranch size={28} strokeWidth={1.5} />
          <span>{workflow.stages.length} stages</span>
        </div>
      </div>

      <ActorLegend actors={workflow.actors} />

      <ol
        className="client-workflow-stage-list"
        aria-label={`${workflow.name} stages`}
      >
        {workflow.stages.map((stage, index) => (
          <li className="client-workflow-stage-wrapper" key={stage.id}>
            <WorkflowStage stage={stage} actors={workflow.actors} />
            {index < workflow.stages.length - 1 && (
              <ArrowDown
                className="client-workflow-connector"
                aria-hidden="true"
                size={18}
                strokeWidth={1.5}
              />
            )}
          </li>
        ))}
      </ol>

      {(workflow.painPoints?.length || workflow.improvements?.length) && (
        <div className="client-workflow-context">
          <DetailList title="Current pain points" items={workflow.painPoints} />
          <DetailList
            title="Workflow improvements"
            items={workflow.improvements}
          />
        </div>
      )}
    </article>
  )
}

function ClientBusinessWorkflowSection({
  content,
}: ClientBusinessWorkflowSectionProps) {
  const workflow =
    content.workflows.find((item) => item.id === content.selectedWorkflowId) ??
    content.workflows[0]

  return (
    <Section
      id="client-workflow"
      className="client-workflow"
      aria-labelledby="client-workflow-title"
    >
      <Container>
        <div className="client-workflow-heading">
          <div>
            <p className="section-kicker">
              <Waypoints aria-hidden="true" />
              {content.kicker}
            </p>
            <h2 id="client-workflow-title">
              {content.title}
              {content.highlightedTitle && (
                <span>{content.highlightedTitle}</span>
              )}
            </h2>
            <p>{content.description}</p>
          </div>
          <div className="client-workflow-visual" aria-hidden="true">
            <div className="client-workflow-visual-line" />
            <div className="client-workflow-visual-node" />
            <div className="client-workflow-visual-node" />
            <div className="client-workflow-visual-node" />
          </div>
        </div>

        {workflow ? (
          <WorkflowPanel workflow={workflow} />
        ) : (
          <p className="client-workflow-empty-state">
            No workflow has been added yet.
          </p>
        )}
      </Container>
    </Section>
  )
}

export default ClientBusinessWorkflowSection
