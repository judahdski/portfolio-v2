import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(() => {
  cleanup()
})

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('application routing', () => {
  it('redirects the root route to the recruiter experience', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { name: 'Judah' })).toBeInTheDocument()
    expect(
      screen.getByText(/engineer who cares about the system/i),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /full-stack engineer who builds scalable systems/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'My Professional Journey' }),
    ).toBeInTheDocument()
  })

  it('renders the client experience inside the app shell', () => {
    renderAt('/client')

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: '[Your name]',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('[Professional role]')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /discuss your project/i }),
    ).toHaveAttribute('href', '#client-value')
    expect(
      screen.getByRole('heading', {
        name: /\[value proposition headline\]/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'How I help your business' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /\[problems you help solve\]/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Common challenges' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Common challenges' }),
    ).toBeInTheDocument()
  })

  it('renders the fallback page for an unknown route', () => {
    renderAt('/does-not-exist')

    expect(
      screen.getByRole('heading', {
        name: /not part of the system yet/i,
      }),
    ).toBeInTheDocument()
  })
})
