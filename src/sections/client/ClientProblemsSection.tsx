import {
  ChartNoAxesCombined,
  ClipboardList,
  Code2,
  Database,
  Eye,
  Gauge,
  Link,
  Puzzle,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import TextLink from '../../components/ui/TextLink'
import type {
  ClientProblem,
  ClientProblemIcon,
  ClientProblems,
} from '../../content/types'

type ClientProblemsSectionProps = {
  content: ClientProblems
}

const problemIcons: Record<ClientProblemIcon, typeof ClipboardList> = {
  manual: ClipboardList,
  data: Database,
  visibility: Eye,
  workflow: Puzzle,
  integration: Link,
  legacy: Code2,
  reporting: ChartNoAxesCombined,
  user: UserRound,
  performance: Gauge,
  security: ShieldCheck,
}

function ProblemCard({ problem }: { problem: ClientProblem }) {
  const Icon = problemIcons[problem.icon]

  return (
    <li className="client-problem-card">
      <div className="client-problem-icon">
        <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
      </div>
      <p className="client-problem-category">{problem.category}</p>
      <h3>{problem.title}</h3>
      <p className="client-problem-situation">{problem.situation}</p>
      <p className="client-problem-pain">{problem.painPoint}</p>
      {problem.capability && (
        <p className="client-problem-capability">{problem.capability}</p>
      )}
    </li>
  )
}

function ClientProblemsSection({ content }: ClientProblemsSectionProps) {
  return (
    <Section
      id="client-problems"
      className="client-problems"
      aria-labelledby="client-problems-title"
    >
      <Container>
        <div className="client-problems-heading">
          <div>
            <p className="section-kicker">{content.kicker}</p>
            <h2 id="client-problems-title">
              {content.title}
              {content.highlightedTitle && (
                <span>{content.highlightedTitle}</span>
              )}
            </h2>
            <p className="client-problems-description">{content.description}</p>
          </div>
          <div className="client-problems-visual" aria-hidden="true">
            <div className="client-problems-stream client-problems-stream-input" />
            <div className="client-problems-block">PROBLEM</div>
            <div className="client-problems-stream client-problems-stream-output" />
            <span>CLARITY</span>
          </div>
        </div>

        <div className="client-problems-list-heading">
          <div>
            <h2>{content.listTitle}</h2>
            <p>{content.listDescription}</p>
          </div>
          {content.action && (
            <TextLink
              className="client-problems-action"
              href={content.action.href}
              target={content.action.external ? '_blank' : undefined}
              rel={content.action.external ? 'noreferrer' : undefined}
            >
              {content.action.label}
            </TextLink>
          )}
        </div>

        <ul className="client-problems-grid" aria-label="Common challenges">
          {content.problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export default ClientProblemsSection
