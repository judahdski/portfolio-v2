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
    expect(
      screen.getByRole('heading', {
        name: /a clear process for meaningful work/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '[My commitment]' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Working approach phases' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('[Discovery]')).toHaveLength(1)
    expect(screen.getAllByText('[Deliver and support]')).toHaveLength(1)
    expect(
      screen.getByRole('list', { name: 'Working principles' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('[Communication channel and update cadence]'),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: '[Start your project]' }),
    ).toHaveAttribute('href', '#contact')
    expect(
      screen.getByRole('heading', {
        name: /Clear Scope.*Better Results\./,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Engagement models' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Fixed Scope Project')).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: "What's included" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Typical project timeline' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Client Responsibilities' }),
    ).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('heading', {
        name: /Proven Experience.*Trusted by Clients\./,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Trust principles' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Technology expertise' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('list', { name: 'Verified client testimonials' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('list', { name: 'Project evidence' }),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /start a conversation/i }),
    ).toHaveAttribute('href', '#contact')
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
