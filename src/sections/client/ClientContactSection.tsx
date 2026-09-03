import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  ExternalLink,
  FileText,
  GitBranch,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
} from 'lucide-react'
import { useState, type FormEvent, type ReactNode } from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import type { ClientContact, ClientContactIcon } from '../../content/types'

type Props = { content: ClientContact }
type FormValues = {
  name: string
  email: string
  company: string
  projectType: string
  description: string
  budget: string
  privacyAccepted: boolean
}
type FormErrors = Partial<
  Record<
    'name' | 'email' | 'projectType' | 'description' | 'privacyAccepted',
    string
  >
>

const icons: Record<ClientContactIcon, typeof Mail> = {
  email: Mail,
  calendar: CalendarDays,
  project: MessageCircle,
  linkedin: ExternalLink,
  github: GitBranch,
  document: FileText,
  availability: CheckCircle2,
  location: MapPin,
  clock: Clock3,
  shield: ShieldCheck,
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = 'Please enter a valid work email.'
  if (!values.projectType) errors.projectType = 'Please select a project type.'
  if (!values.description.trim())
    errors.description = 'Please tell me a little about your project.'
  if (!values.privacyAccepted)
    errors.privacyAccepted = 'Please confirm this before continuing.'
  return errors
}

function Disclosure({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`client-contact-disclosure${open ? ' is-open' : ''}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <ChevronDown aria-hidden="true" size={17} />
      </button>
      {open && (
        <div className="client-contact-disclosure-content">{children}</div>
      )}
    </div>
  )
}

function ClientContactSection({ content }: Props) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    budget: '',
    privacyAccepted: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const methods = content.methods.filter(
    (method) =>
      method.available !== false && method.href.trim() && method.label.trim(),
  )
  const update = (field: keyof FormValues, value: string | boolean) =>
    setValues((current) => ({ ...current, [field]: value }))
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }
    if (!content.inquiryEmail && !content.endpoint) {
      setStatus('error')
      return
    }
    if (content.inquiryEmail) {
      const subject = encodeURIComponent(`Project inquiry from ${values.name}`)
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company}\nProject type: ${values.projectType}\nBudget: ${values.budget || 'Not specified'}\n\n${values.description}`,
      )
      window.location.href = `mailto:${content.inquiryEmail}?subject=${subject}&body=${body}`
      setStatus('success')
    }
  }
  return (
    <Section
      id="contact"
      className="client-contact"
      aria-labelledby="client-contact-title"
    >
      <Container>
        <header className="client-contact-heading">
          <div>
            <p className="section-kicker">
              <Handshake aria-hidden="true" />
              {content.kicker}
            </p>
            <h2 id="client-contact-title">
              {content.title} <span>{content.highlightedTitle}</span>
            </h2>
            <p>{content.description}</p>
          </div>
          <ul
            className="client-contact-signals"
            aria-label="Contact expectations"
          >
            {content.signals.map((signal) => {
              const Icon = icons[signal.icon]
              return (
                <li key={signal.id}>
                  <Icon aria-hidden="true" size={20} />
                  <div>
                    <h3>{signal.title}</h3>
                    <p>{signal.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </header>
        <div className="client-contact-layout">
          <div className="client-contact-side">
            <h3>Ways to connect</h3>
            {methods.length > 0 ? (
              <ul
                className="client-contact-methods"
                aria-label="Contact methods"
              >
                {methods.map((method) => {
                  const Icon = icons[method.icon]
                  const external =
                    method.external ?? method.href.startsWith('http')
                  return (
                    <li key={method.id}>
                      <Icon aria-hidden="true" size={20} />
                      <div>
                        <h4>{method.label}</h4>
                        <p>{method.description}</p>
                        {method.value && <small>{method.value}</small>}
                      </div>
                      <a
                        href={method.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer' : undefined}
                        aria-label={method.actionLabel}
                      >
                        {method.actionLabel}
                        <ExternalLink aria-hidden="true" size={14} />
                      </a>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="client-contact-empty">
                Verified contact methods will appear here when configured.
              </p>
            )}
            {content.availability && (
              <div className="client-contact-availability">
                <CheckCircle2 aria-hidden="true" size={21} />
                <div>
                  <h3>{content.availability.status}</h3>
                  <p>{content.availability.description}</p>
                </div>
              </div>
            )}
            {content.workingHours && (
              <Disclosure title="Working hours">
                <p>{content.workingHours}</p>
              </Disclosure>
            )}
            {content.location && (
              <Disclosure title="Location">
                <p>{content.location}</p>
                {content.remoteAvailability && (
                  <p>{content.remoteAvailability}</p>
                )}
              </Disclosure>
            )}
          </div>
          <form
            className="client-contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="client-contact-form-heading">
              <Send aria-hidden="true" size={23} />
              <div>
                <h3>Send a message</h3>
                <p>Tell me about your project and how I can help.</p>
              </div>
            </div>
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              required
              value={values.name}
              onChange={(event) => update('name', event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && (
              <span id="contact-name-error" className="client-contact-error">
                {errors.name}
              </span>
            )}
            <label htmlFor="contact-email">Work email</label>
            <input
              id="contact-email"
              required
              type="email"
              value={values.email}
              onChange={(event) => update('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? 'contact-email-error' : undefined
              }
            />
            {errors.email && (
              <span id="contact-email-error" className="client-contact-error">
                {errors.email}
              </span>
            )}
            <label htmlFor="contact-company">
              Company <span>(optional)</span>
            </label>
            <input
              id="contact-company"
              value={values.company}
              onChange={(event) => update('company', event.target.value)}
            />
            <label htmlFor="contact-project-type">Project type</label>
            <select
              id="contact-project-type"
              required
              value={values.projectType}
              onChange={(event) => update('projectType', event.target.value)}
              aria-invalid={Boolean(errors.projectType)}
            >
              <option value="">Select project type</option>
              {content.projectTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <span className="client-contact-error">{errors.projectType}</span>
            )}
            <label htmlFor="contact-description">
              Tell me about your project
            </label>
            <textarea
              id="contact-description"
              required
              value={values.description}
              onChange={(event) => update('description', event.target.value)}
              aria-invalid={Boolean(errors.description)}
            />
            <p className="client-contact-field-hint">
              Goals, challenges, timeline, or anything important.
            </p>
            {errors.description && (
              <span className="client-contact-error">{errors.description}</span>
            )}
            <fieldset>
              <legend>
                Budget range <span>(optional)</span>
              </legend>
              <div className="client-contact-budget">
                {content.budgetOptions.map((option) => (
                  <label key={option.value}>
                    <input
                      type="radio"
                      name="budget"
                      value={option.value}
                      checked={values.budget === option.value}
                      onChange={(event) => update('budget', event.target.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="client-contact-privacy">
              <input
                type="checkbox"
                required
                checked={values.privacyAccepted}
                onChange={(event) =>
                  update('privacyAccepted', event.target.checked)
                }
                aria-invalid={Boolean(errors.privacyAccepted)}
              />
              {content.privacyLabel}
            </label>
            {errors.privacyAccepted && (
              <span className="client-contact-error">
                {errors.privacyAccepted}
              </span>
            )}
            <button className="client-contact-submit" type="submit">
              {content.submitLabel}
              <Send aria-hidden="true" size={15} />
            </button>
            {status === 'success' && (
              <p
                className="client-contact-status client-contact-status-success"
                role="status"
              >
                {content.successMessage}
              </p>
            )}
            {status === 'error' && (
              <p
                className="client-contact-status client-contact-status-error"
                role="alert"
              >
                {content.errorMessage}
              </p>
            )}
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default ClientContactSection
