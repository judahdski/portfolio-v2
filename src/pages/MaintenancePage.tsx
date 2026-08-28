import { ArrowUpRight, Braces, Database, PanelsTopLeft } from 'lucide-react'
import './MaintenancePage.css'
import horizontalLogo from '../assets/img/horizontal-logo.png'

const buildStages = [
  { label: 'Architecture', value: 'Mapped', state: 'done' },
  { label: 'Interface', value: 'In motion', state: 'active' },
  { label: 'Case studies', value: 'Loading', state: 'waiting' },
]

const systemNodes = [
  { label: 'Interface', icon: PanelsTopLeft, className: 'node-interface' },
  { label: 'Logic', icon: Braces, className: 'node-logic' },
  { label: 'Data', icon: Database, className: 'node-data' },
]

function MaintenancePage() {
  return (
    <main className="maintenance-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Portfolio home">
          <span className="brand-logo-frame">
            <img className="brand-logo" src={horizontalLogo} alt="Judah" />
          </span>
        </a>

        <div className="live-status" aria-label="Site status: work in progress">
          <span className="status-dot" aria-hidden="true" />
          <span>WORK IN PROGRESS</span>
        </div>
      </header>

      <section className="hero" aria-labelledby="maintenance-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Full-stack Web Developer</span>
            <span>2026 / Indonesia</span>
          </p>

          <h1 id="maintenance-title">
            <span className="title-line">PORTFOLIO</span>
            <span className="title-line title-accent">
              IN PROGRESS<span className="title-period">.</span>
            </span>
          </h1>

          <div className="intro-row">
            <p className="intro">
              I&apos;m shaping the work, decisions, and systems behind the code
              into a portfolio worth exploring.
            </p>

            <a className="contact-link" href="#build-status">
              <span>Build status</span>
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div
          className="system-visual"
          aria-label="Animated system build diagram"
        >
          <div className="visual-grid" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="system-core" aria-hidden="true">
            <span>BUILD</span>
            <strong>02</strong>
          </div>

          {systemNodes.map(({ label, icon: Icon, className }, index) => (
            <div className={`system-node ${className}`} key={label}>
              <span className="node-index">0{index + 1}</span>
              <Icon aria-hidden="true" size={18} strokeWidth={1.6} />
              <span>{label}</span>
            </div>
          ))}

          <p className="visual-caption">
            Assembling a clearer view of how I think and build.
          </p>
        </div>
      </section>

      <section
        className="build-log"
        id="build-status"
        aria-label="Current build status"
      >
        <div className="build-log-heading">
          <span>Current build</span>
          <span>03 modules</span>
        </div>

        <ol className="stage-list">
          {buildStages.map((stage, index) => (
            <li className={`stage stage-${stage.state}`} key={stage.label}>
              <span className="stage-number">0{index + 1}</span>
              <span className="stage-label">{stage.label}</span>
              <span className="stage-value">{stage.value}</span>
              <span className="stage-indicator" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <footer className="footer">
        <p>Good work takes a few iterations.</p>
        <div className="signal" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <p>Coming online soon</p>
      </footer>
    </main>
  )
}

export default MaintenancePage
