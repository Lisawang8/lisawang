/**
 * Core strengths section for Lisa Wang.
 * Highlights key capabilities across asset classes and client coverage.
 */

import React from 'react'
import { LineChart, Layers, Building2, Users } from 'lucide-react'

/**
 * StrengthsSection displays Lisa&apos;s primary strengths as a grid of feature cards.
 */
export const StrengthsSection: React.FC = () => {
  const strengths = [
    {
      icon: LineChart,
      title: 'Cryptocurrency Trading',
      description:
        'Hands-on intraday and swing trading in major cryptocurrency pairs with disciplined position sizing, risk limits, and scenario analysis.',
    },
    {
      icon: Layers,
      title: 'Multi-Asset Portfolio Construction',
      description:
        'Rules-driven portfolios across equities, ETFs, options, FX, and digital assets, balancing growth, drawdown control, and liquidity.',
    },
    {
      icon: Building2,
      title: 'Real Estate Investment',
      description:
        'Focus on income-generating real estate backed by cash-flow analysis, macro cycles, and risk-adjusted return expectations.',
    },
    {
      icon: Users,
      title: 'High-Net-Worth Client Coverage',
      description:
        'Advisory and research support for high-net-worth clients, translating complex macro and quantitative insights into clear actions.',
    },
  ]

  return (
    <section
      id="strengths"
      className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100/70 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 md:text-sm">
            CORE STRENGTHS
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Connecting quantitative signals with real-world judgment.
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            From crypto markets to traditional assets and real estate, Lisa brings a structured,
            cross-asset perspective shaped by multi-region practice in Europe, North America, and
            Asia.
          </p>
        </header>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2">
          {strengths.map((item) => (
            <StrengthCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * StrengthCard renders a single strength item with icon, title and description.
 */
const StrengthCard: React.FC<{
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}> = ({ icon: Icon, title, description }) => {
  return (
    <article className="group h-full rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md md:p-6">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 md:text-base">{title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">{description}</p>
        </div>
      </div>
    </article>
  )
}