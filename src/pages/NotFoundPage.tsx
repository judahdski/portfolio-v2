import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <p className="section-kicker">404 / Route not found</p>
      <h1>This page is not part of the system yet.</h1>
      <Link className="text-link" to="/recruiter">
        Return to portfolio
      </Link>
    </main>
  )
}

export default NotFoundPage
