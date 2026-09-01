import {
  Boxes,
  Braces,
  CloudCog,
  CodeXml,
  Database,
  GitBranch,
  Lightbulb,
  Network,
  PlugZap,
} from 'lucide-react'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type {
  RecruiterTechnicalSkills,
  TechnicalSkillIcon,
} from '../../content/types'

type RecruiterTechnicalSkillsSectionProps = {
  content: RecruiterTechnicalSkills
}

const categoryIcons = {
  architecture: Network,
  backend: Braces,
  database: Database,
  devops: CloudCog,
  frontend: CodeXml,
  integration: PlugZap,
  tooling: GitBranch,
} satisfies Record<TechnicalSkillIcon, typeof CodeXml>

function RecruiterTechnicalSkillsSection({
  content,
}: RecruiterTechnicalSkillsSectionProps) {
  const categories = content.categories.filter(
    (category) => category.skills.length > 0,
  )
  const technologyCount = new Set(
    categories.flatMap((category) =>
      category.skills.map((skill) => skill.name),
    ),
  ).size
  const evidenceCount = new Set(
    categories.flatMap((category) =>
      category.skills.flatMap((skill) =>
        skill.evidence.map((evidence) => evidence.experienceId),
      ),
    ),
  ).size

  return (
    <Section
      className="recruiter-technical-skills"
      aria-labelledby="recruiter-technical-skills-title"
    >
      <Container>
        <header className="technical-skills-header">
          <div>
            <p className="section-kicker">
              <CodeXml aria-hidden="true" />
              04 / Technical Skills
            </p>
            <h2 id="recruiter-technical-skills-title">{content.title}</h2>
            <p>{content.description}</p>
          </div>
          <div className="technical-skills-system-visual" aria-hidden="true">
            <Boxes />
          </div>
        </header>

        <dl className="technical-skills-overview" aria-label="Skills overview">
          <div>
            <dt>Capability areas</dt>
            <dd>{categories.length}</dd>
          </div>
          <div>
            <dt>Evidenced skills</dt>
            <dd>{technologyCount}</dd>
          </div>
          <div>
            <dt>Experience sources</dt>
            <dd>{evidenceCount}</dd>
          </div>
        </dl>

        <div className="technical-skills-section-heading">
          <h3>Core capability areas</h3>
          <span>Skills linked to professional experience</span>
        </div>

        <div className="technical-skill-grid">
          {categories.map((category) => {
            const Icon = categoryIcons[category.icon]
            const evidence = Array.from(
              new Map(
                category.skills.flatMap((skill) =>
                  skill.evidence.map((item) => [item.experienceId, item]),
                ),
              ).values(),
            )

            return (
              <Card
                className="technical-skill-card"
                data-emphasis={category.emphasis}
                key={category.id}
              >
                <div className="technical-skill-card-header">
                  <Icon aria-hidden="true" />
                  <div>
                    <h4>{category.title}</h4>
                    <p>{category.description}</p>
                  </div>
                </div>

                <div
                  className="technical-skill-chips"
                  aria-label={`${category.title} skills`}
                >
                  {category.skills.map((skill) => (
                    <Badge key={skill.name}>{skill.name}</Badge>
                  ))}
                </div>

                <details className="technical-skill-evidence">
                  <summary>View evidence</summary>
                  <ul>
                    {evidence.map((item) => (
                      <li key={item.experienceId}>
                        <span>{item.label}</span>
                        <a href="#recruiter-experience">Experience</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </Card>
            )
          })}
        </div>

        {content.learningStatement && (
          <aside className="technical-skills-learning">
            <Lightbulb aria-hidden="true" />
            <p>{content.learningStatement}</p>
          </aside>
        )}
      </Container>
    </Section>
  )
}

export default RecruiterTechnicalSkillsSection
