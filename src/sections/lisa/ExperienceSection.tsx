/**
 * Professional experience section for Lisa Wang.
 * Focuses on her role at Moomoo Technologies Inc. and responsibilities.
 */

import React from 'react'

/**
 * ExperienceSection renders detailed professional experience in a timeline style.
 */
export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="border-t border-slate-200 bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 md:text-sm">
            EXPERIENCE
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Applying quantitative research, macro analysis, and product thinking to design
            strategies and tools for investors across US and Asian markets.
          </p>
        </header>

        <div className="mt-8 space-y-6 md:mt-10">
          <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600" />
            <div className="pl-5 md:pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                    Financial Analyst · Moomoo Technologies Inc.
                  </h3>
                  <p className="text-xs text-slate-600 md:text-sm">
                    Equity, ETF, options, and cross-market research &amp; modeling
                  </p>
                </div>
                <p className="text-xs font-medium text-slate-500 md:text-sm">2014 – 2018 · USA</p>
              </div>

              <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700 md:text-sm">
                <li>
                  Conducted in-depth research on stocks, ETFs, and options across US and Asian
                  markets, building cross-market investment models and providing strategic support
                  to research and product teams.
                </li>
                <li>
                  Combined quantitative analysis (Quant) with macro research to write in-depth
                  industry reports, earnings analysis, and investment recommendations, publishing
                  over 120 research pieces.
                </li>
                <li>
                  Participated in the optimisation of the firm&apos;s trading system, collaborating
                  with engineers to enhance Level-2 market data analysis modules so that insights
                  aligned more closely with investor needs.
                </li>
                <li>
                  Worked with product managers to translate research logic into client-facing
                  investment tools, including strategy screeners, risk alert indicators, and
                  valuation models.
                </li>
                <li>
                  Monitored macroeconomic indicators, policy shifts, and market sentiment to support
                  the internal risk team with forward-looking risk assessments and sensitivity
                  analysis.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}