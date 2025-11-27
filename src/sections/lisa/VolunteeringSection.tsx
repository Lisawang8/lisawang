/**
 * Volunteering section for Lisa Wang.
 * Describes her experience in community support projects in Kenya.
 */

import React from 'react'

/**
 * VolunteeringSection highlights Lisa&apos;s volunteer work and social impact.
 */
export const VolunteeringSection: React.FC = () => {
  return (
    <section
      id="volunteering"
      className="border-t border-slate-200 bg-slate-50 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="max-w-xl space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 md:text-sm">
            VOLUNTEERING
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Giving back through education and community support.
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Beyond markets and portfolios, Lisa is committed to improving access to education and
            basic living conditions in underserved communities.
          </p>
        </header>

        <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:mt-10 md:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Community Support Project · Nairobi &amp; Nakuru, Kenya
              </h3>
              <p className="text-xs text-slate-600 md:text-sm">Local NGO &amp; international NGO</p>
            </div>
            <p className="text-xs font-medium text-slate-500 md:text-sm">June – July 2017</p>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-700 md:text-sm">
            Joined a community support initiative in Nairobi and Nakuru, Kenya, jointly organized
            by local NGOs and international volunteer organizations. The project focused on
            improving education resources, basic hygiene conditions, and the overall development
            environment for children in low-income communities. Lisa assisted with classroom
            activities, learning materials, and awareness programs, deepening her understanding of
            how sustainable development and education can transform lives.
          </p>
        </article>
      </div>
    </section>
  )
}