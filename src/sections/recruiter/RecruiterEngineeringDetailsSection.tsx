import { useState, type KeyboardEvent } from 'react'
import {
  ArrowRight,
  Boxes,
  Braces,
  CloudCog,
  CodeXml,
  Database,
  Gauge,
  Layers3,
  Network,
  PlugZap,
} from 'lucide-react'
import Badge from '../../components/ui/Badge'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type {
  EngineeringTopic,
  EngineeringTopicIcon,
  RecruiterEngineeringDetails,
} from '../../content/types'

type RecruiterEngineeringDetailsSectionProps = {
  content: RecruiterEngineeringDetails
}

const topicIcons = {
  api: Braces,
  architecture: Network,
  complexity: Gauge,
  database: Database,
  deployment: CloudCog,
  frontend: CodeXml,
  integration: PlugZap,
} satisfies Record<EngineeringTopicIcon, typeof CodeXml>

function TopicEvidence({ topic }: { topic: EngineeringTopic }) {
  const Icon = topicIcons[topic.icon]

  return (
    <div className="engineering-topic-content">
      <div className="engineering-topic-intro">
        <Icon aria-hidden="true" />
        <div>
          <h3>{topic.title}</h3>
          <p>{topic.summary}</p>
        </div>
      </div>
      <div className="engineering-evidence-grid">
        {topic.evidence.map((evidence) => (
          <article key={evidence.projectId}>
            <a href={`#project-${evidence.projectId}`}>{evidence.label}</a>
            <ul>
              {evidence.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

function ArchitectureOverview({
  content,
}: {
  content: RecruiterEngineeringDetails
}) {
  return (
    <div className="engineering-overview">
      <article className="engineering-architecture-panel">
        <header>
          <span>{content.featuredProjectLabel}</span>
          <h3>{content.diagramTitle}</h3>
          <p>{content.diagramDescription}</p>
        </header>
        <div className="engineering-diagram" aria-label={content.diagramTitle}>
          {content.diagramNodes.map((node, index) => (
            <div className="engineering-diagram-step" key={node.id}>
              <div data-layer={node.layer}>
                <span>{node.layer}</span>
                <strong>{node.label}</strong>
                <small>{node.detail}</small>
              </div>
              {index < content.diagramNodes.length - 1 && (
                <ArrowRight aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </article>

      <aside className="engineering-stack-panel">
        <h3>Tech stack overview</h3>
        {content.stackGroups.map((group) => (
          <section key={group.label}>
            <span>{group.label}</span>
            <div>
              {group.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </section>
        ))}
      </aside>
    </div>
  )
}

function RecruiterEngineeringDetailsSection({
  content,
}: RecruiterEngineeringDetailsSectionProps) {
  const topics = content.topics.filter((topic) => topic.evidence.length > 0)
  const tabIds = ['overview', ...topics.map((topic) => topic.id)]
  const [activeTab, setActiveTab] = useState(tabIds[0])

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    tabId: string,
  ) => {
    const currentIndex = tabIds.indexOf(tabId)
    let nextIndex: number

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabIds.length
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabIds.length) % tabIds.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = tabIds.length - 1
    } else {
      return
    }

    event.preventDefault()
    setActiveTab(tabIds[nextIndex])
    document.getElementById(`engineering-tab-${tabIds[nextIndex]}`)?.focus()
  }

  const activeTopic = topics.find((topic) => topic.id === activeTab)

  return (
    <Section
      id="recruiter-engineering-details"
      className="recruiter-engineering-details"
      aria-labelledby="recruiter-engineering-details-title"
    >
      <Container>
        <header className="engineering-header">
          <div>
            <p className="section-kicker">
              <CodeXml aria-hidden="true" />
              06 / Engineering / Technical Details
            </p>
            <h2 id="recruiter-engineering-details-title">{content.title}</h2>
            <p>{content.description}</p>
          </div>
          <div className="engineering-system-visual" aria-hidden="true">
            <Layers3 />
          </div>
        </header>

        <div className="engineering-desktop-workspace">
          <div
            className="engineering-tabs"
            role="tablist"
            aria-label="Engineering topics"
          >
            <button
              id="engineering-tab-overview"
              type="button"
              role="tab"
              aria-selected={activeTab === 'overview'}
              aria-controls="engineering-panel-overview"
              tabIndex={activeTab === 'overview' ? 0 : -1}
              onClick={() => setActiveTab('overview')}
              onKeyDown={(event) => handleTabKeyDown(event, 'overview')}
            >
              <Boxes aria-hidden="true" />
              Overview
            </button>
            {topics.map((topic) => {
              const Icon = topicIcons[topic.icon]
              return (
                <button
                  id={`engineering-tab-${topic.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === topic.id}
                  aria-controls={`engineering-panel-${topic.id}`}
                  tabIndex={activeTab === topic.id ? 0 : -1}
                  key={topic.id}
                  onClick={() => setActiveTab(topic.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, topic.id)}
                >
                  <Icon aria-hidden="true" />
                  {topic.title}
                </button>
              )
            })}
          </div>

          <div
            key={activeTab}
            id={`engineering-panel-${activeTab}`}
            className="engineering-tab-panel"
            role="tabpanel"
            aria-labelledby={`engineering-tab-${activeTab}`}
          >
            {activeTopic ? (
              <TopicEvidence topic={activeTopic} />
            ) : (
              <ArchitectureOverview content={content} />
            )}
          </div>
        </div>

        <div className="engineering-mobile-workspace">
          <ArchitectureOverview content={content} />
          <div className="engineering-disclosures">
            {topics.map((topic) => {
              const Icon = topicIcons[topic.icon]
              return (
                <details key={topic.id}>
                  <summary>
                    <Icon aria-hidden="true" />
                    {topic.title}
                    <ArrowRight aria-hidden="true" />
                  </summary>
                  <TopicEvidence topic={topic} />
                </details>
              )
            })}
          </div>
        </div>

        <aside className="engineering-principle">
          <Boxes aria-hidden="true" />
          <p>{content.principle}</p>
          <a href="#recruiter-projects">
            Explore my projects
            <ArrowRight aria-hidden="true" />
          </a>
        </aside>
      </Container>
    </Section>
  )
}

export default RecruiterEngineeringDetailsSection
