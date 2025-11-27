/**
 * ContactSection.tsx
 *
 * Renders the contact area for Lisa Wang. This file provides a compact,
 * single-card layout that places the actionable email at the top of the card
 * and the quick-message form directly underneath. WhatsApp and other external
 * contact links are intentionally removed — only the primary email remains.
 */

import React, { useState } from 'react'
import { Copy, Mail } from 'lucide-react'

/**
 * ContactSection
 *
 * Main exported component that displays the contact header and a single
 * card containing the email row (copy/open) and a quick message form.
 */
export const ContactSection: React.FC = () => {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  /**
   * handleCopy
   *
   * Copy the provided value to the clipboard and show a temporary "Copied" state.
   *
   * @param label - label used to identify which item was copied
   * @param value - the text value to copy
   */
  const handleCopy = async (label: string, value: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(value)
        setCopiedLabel(label)
        window.setTimeout(() => setCopiedLabel(null), 1800)
      }
    } catch {
      setCopiedLabel(null)
    }
  }

  /**
   * handleSubmit
   *
   * Prevent default form submission and open the user's email client with a
   * prefilled subject/body using a mailto link.
   *
   * @param event - form submission event
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = `Message for Lisa Wang from ${form.name || 'website visitor'}`
    const bodyLines = [
      'Hi Lisa,',
      '',
      form.message || '[Your message here]',
      '',
      '---',
      `From: ${form.name || 'Visitor'}`,
      `Email: ${form.email || 'Not provided'}`,
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    const mailto = `mailto:wangyuyanlisa@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`
    window.location.href = mailto
  }

  /**
   * contactEmail
   *
   * Local config for the single email entry shown in the card.
   */
  const contactEmail = {
    label: 'Email',
    value: 'wangyuyanlisa@gmail.com',
    icon: Mail,
    href: 'mailto:wangyuyanlisa@gmail.com',
    showOpen: true,
  } as const

  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 md:text-sm">
            CONTACT
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Let's explore what we can build together.
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            For investment collaboration, advisory opportunities, or speaking engagements, feel
            free to reach out using the contact below or send a quick message.
          </p>
        </header>

        {/* Single compact card: email row on top, quick message form below */}
        <div className="mt-8">
          <article className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            {/* Email row placed at the very top to reduce empty space */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">Direct contact</h3>
              <div className="mt-3">
                <ContactRow
                  label={contactEmail.label}
                  value={contactEmail.value}
                  icon={contactEmail.icon}
                  href={contactEmail.href}
                  showOpen={contactEmail.showOpen}
                  copied={copiedLabel === contactEmail.label}
                  onCopy={() => handleCopy(contactEmail.label, contactEmail.value)}
                />
              </div>
            </div>

            {/* Quick message form immediately follows the email row */}
            <div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900 md:text-base">Quick message</h3>
              <p className="mt-1 text-xs text-slate-600 md:text-sm">
                This form formats a clear email and opens your default mail client with the content.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-sm">
                <div className="grid gap-3 md:grid-cols-2">
                  <FormField
                    label="Your name"
                    value={form.name}
                    onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
                    placeholder="Enter your name"
                  />
                  <FormField
                    label="Your email"
                    value={form.email}
                    onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 md:text-sm">Your message</label>
                  <textarea
                    className="mt-1.5 h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none transition focus:bg-white focus:ring-2 md:text-sm"
                    placeholder="Share a bit about your goals, timeline, and preferred way to collaborate."
                    value={form.message}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, message: event.target.value }))
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-amber-500/30 transition hover:bg-amber-400 md:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  Open email with this message
                </button>
              </form>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/**
 * ContactRow
 *
 * Small reusable component that shows a contact line with icon, label, value,
 * copy button and an optional open link. Kept intentionally compact for use
 * inside the single card layout.
 */
const ContactRow: React.FC<{
  label: string
  value: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  showOpen?: boolean
  copied: boolean
  onCopy: () => void
}> = ({ label, value, icon: Icon, href, showOpen, copied, onCopy }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700">
          <Icon className="h-3.5 w-3.5" />
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400 md:text-xs">
            {label}
          </p>
          <p className="text-sm font-medium text-slate-900 md:text-[15px]">{value}</p>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition hover:border-amber-300 hover:text-amber-700 md:text-xs"
        >
          <Copy className="h-3 w-3" />
          {copied ? 'Copied' : 'Copy'}
        </button>

        {showOpen && href && (
          <a
            href={href}
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 transition hover:border-amber-300 hover:text-amber-700 md:text-xs"
          >
            Open
          </a>
        )}
      </div>
    </div>
  )
}

/**
 * FormField
 *
 * Small text input component used by the quick message form.
 */
const FormField: React.FC<{
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
}> = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <div>
    <label className="block text-xs font-medium text-slate-700 md:text-sm">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none transition focus:bg-white focus:ring-2 md:text-sm"
    />
  </div>
)