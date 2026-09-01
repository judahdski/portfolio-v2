import { useState } from 'react'
import {
  ArrowUpRight,
  Boxes,
  CodeXml,
  ExternalLink,
  GitFork,
  Grid2X2,
  List,
} from 'lucide-react'
import Badge from '../../components/ui/Badge'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type { RecruiterProject, RecruiterProjects } from '../../content/types'

type RecruiterProjectsSectionProps = {
  content: RecruiterProjects
}

type SortOrder = 'newest' | 'oldest'
type ViewMode = 'grid' | 'list'

function ProjectVisual({ project }: { project: RecruiterProject }) {
  if (project.media?.[0]) {
    return (
      <img
        className="project-media"
        src={project.media[0].src}
        alt={project.media[0].alt}
      />
    )
  }

  return (
    <div
      className="project-visual-fallback"
      data-variant={project.visualVariant}
      aria-hidden="true"
    >
      <div className="project-visual-sidebar" />
      <div className="project-visual-canvas">
        <span />
        <span />
        <span />
      </div>
      <CodeXml />
    </div>
  )
}

function RecruiterProjectsSection({ content }: RecruiterProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  const visibleProjects = content.projects
    .filter(
      (project) =>
        activeCategory === 'all' || project.categories.includes(activeCategory),
    )
    .toSorted((firstProject, secondProject) => {
      const direction = sortOrder === 'newest' ? -1 : 1
      return (
        firstProject.period.start.localeCompare(secondProject.period.start) *
        direction
      )
    })
  const architectureCount = content.projects.filter(
    (project) => project.architecture.length > 0,
  ).length
  const deliveryCount = content.projects.filter(
    (project) => project.deployment?.length,
  ).length

  return (
    <Section
      id="recruiter-projects"
      className="recruiter-projects"
      aria-labelledby="recruiter-projects-title"
    >
      <Container>
        <header className="projects-header">
          <div>
            <p className="section-kicker">
              <CodeXml aria-hidden="true" />
              05 / Projects
            </p>
            <h2 id="recruiter-projects-title">{content.title}</h2>
            <p>{content.description}</p>
          </div>
          <div className="projects-system-visual" aria-hidden="true">
            <Boxes />
          </div>
        </header>

        <div className="projects-toolbar">
          <label>
            <span>Filter projects</span>
            <select
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
            >
              <option value="all">All projects</option>
              {content.categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>

          <div className="projects-toolbar-actions">
            <label>
              <span>Sort projects</span>
              <select
                value={sortOrder}
                onChange={(event) =>
                  setSortOrder(event.target.value as SortOrder)
                }
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </label>

            <div className="project-view-toggle" aria-label="Project view">
              <button
                type="button"
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
                onClick={() => setViewMode('grid')}
              >
                <Grid2X2 aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
                onClick={() => setViewMode('list')}
              >
                <List aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p className="projects-result-count" aria-live="polite">
          Showing {visibleProjects.length} of {content.projects.length} projects
        </p>

        <div className="project-grid" data-view={viewMode}>
          {visibleProjects.map((project) => (
            <article
              id={`project-${project.id}`}
              className="project-card"
              key={project.id}
            >
              <ProjectVisual project={project} />

              <div className="project-card-content">
                <div className="project-card-eyebrow">
                  <span>{project.type}</span>
                  <span>{project.domain}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>

                <dl className="project-metadata">
                  <div>
                    <dt>Period</dt>
                    <dd>{project.period.label}</dd>
                  </div>
                  <div>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                </dl>

                <div
                  className="project-stack"
                  aria-label={`${project.name} technology stack`}
                >
                  {project.technicalStack.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>

                <details className="project-details">
                  <summary>
                    View project details
                    <ArrowUpRight aria-hidden="true" />
                  </summary>
                  <div className="project-detail-grid">
                    <section>
                      <h4>Technical responsibility</h4>
                      <ul>
                        {project.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h4>Architecture & delivery</h4>
                      <ul>
                        {[
                          ...project.architecture,
                          ...(project.deployment ?? []),
                          ...(project.complexityIndicators ?? []),
                        ].map((evidence) => (
                          <li key={evidence}>{evidence}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </details>

                {(project.caseStudyPath ||
                  project.repository ||
                  project.liveDemo) && (
                  <div className="project-links">
                    {project.caseStudyPath && (
                      <a href={project.caseStudyPath}>
                        View case study
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    )}
                    {project.repository && (
                      <a href={project.repository.href}>
                        <GitFork aria-hidden="true" />
                        {project.repository.label}
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo.href}>
                        <ExternalLink aria-hidden="true" />
                        {project.liveDemo.label}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <dl
          className="projects-overview"
          aria-label="Project evidence overview"
        >
          <div>
            <dt>Selected projects</dt>
            <dd>{content.projects.length}</dd>
          </div>
          <div>
            <dt>Architecture evidence</dt>
            <dd>{architectureCount}</dd>
          </div>
          <div>
            <dt>Delivery evidence</dt>
            <dd>{deliveryCount}</dd>
          </div>
        </dl>
      </Container>
    </Section>
  )
}

export default RecruiterProjectsSection
