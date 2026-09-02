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
    expect(
      screen.getByRole('link', { name: /see how i solve them/i }),
    ).toHaveAttribute('href', '#client-services')
    expect(
      screen.getByRole('heading', {
        name: /\[services and capabilities\]/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'What I can help you with' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Services and capabilities' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('[Service name]')).toHaveLength(6)
    expect(
      screen.getByRole('heading', { name: 'Built with quality at every step' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Quality principles' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /business workflows represented in a system/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', {
        name: '[Business process workflow] stages',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('[Requester]')).toHaveLength(2)
    expect(screen.getAllByText('Manual')).toHaveLength(2)
    expect(screen.getByText('Automated')).toBeInTheDocument()
    expect(screen.getByText('[Request input]')).toBeInTheDocument()
    expect(screen.getByText('[Decision rule]')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /outcomes that move the business forward/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Business outcomes' }),
    ).toBeInTheDocument()
    expect(screen.getByText('[Clearer process visibility]')).toBeInTheDocument()
    expect(screen.getAllByText('Placeholder evidence')).toHaveLength(2)
    expect(screen.getAllByText('No metric available')).toHaveLength(2)
    expect(screen.getByText('[Measured time saving]')).toBeInTheDocument()
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
