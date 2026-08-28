import { ArrowUpRight } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import horizontalLogo from '../../assets/img/horizontal-logo.png'

function AppShell() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="app-brand" to="/" aria-label="Portfolio home">
          <img src={horizontalLogo} alt="Judah" />
        </NavLink>
        <nav className="audience-nav" aria-label="Choose portfolio view">
          <NavLink
            className={({ isActive }) =>
              `audience-link${isActive ? ' audience-link-active' : ''}`
            }
            to="/recruiter"
          >
            Recruiter
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `audience-link${isActive ? ' audience-link-active' : ''}`
            }
            to="/client"
          >
            Client
          </NavLink>
        </nav>
        <a className="header-contact" href="#contact">
          Let&apos;s talk{' '}
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
        </a>
      </header>
      <main className="app-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <span>Full-stack Web Developer</span>
        <span>Indonesia / 2026</span>
        <span>Available for thoughtful work</span>
      </footer>
    </div>
  )
}

export default AppShell
