/**
 * Education section for Lisa Wang.
 * Outlines academic background and professional certifications.
 */

import React from 'react'

/**
 * EducationSection shows Lisa&apos;s education timeline and CFA qualification.
 */
export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 md:text-sm">
            EDUCATION &amp; CERTIFICATIONS
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Building a rigorous foundation in finance.
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Lisa&apos;s academic journey connects mainland China and Hong Kong, combining a solid
            MBA program with intensive professional certification training.
          </p>
        </header>

        <div className="mt-8 space-y-5 md:mt-10">
          <EducationItem
            period="2009 – 2012"
            title="CFA Qualification Track"
            institution="The Hong Kong Polytechnic University"
            description="Completed advanced studies in finance and investment while pursuing the Chartered Financial Analyst (CFA) qualification, strengthening skills in portfolio management, ethics, and global capital markets."
          />
          <EducationItem
            period="2005 – 2009"
            title="Master of Business Administration (MBA)"
            institution="Shenzhen University"
            description="Graduated with an MBA focused on finance and management, building analytical, strategic thinking, and leadership capabilities in a fast-growing economic environment."
          />
        </div>
      </div>
    </section>
  )
}

/**
 * EducationItem displays a single education record in the timeline.
 */
const EducationItem: React.FC<{
  period: string
  title: string
  institution: string
  description: string
}> = ({ period, title, institution, description }) => (
  <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <div>
        <h3 className="text-sm font-semibold text-slate-900 md:text-base">{title}</h3>
        <p className="text-xs text-slate-600 md:text-sm">{institution}</p>
      </div>
      <p className="text-xs font-medium text-slate-500 md:text-sm">{period}</p>
    </div>
    <p className="mt-3 text-xs leading-relaxed text-slate-700 md:text-sm">{description}</p>
  </article>
)