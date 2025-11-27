/**
 * Achievements section for Lisa Wang.
 * Summarizes key quantitative and research contributions.
 */

import React from 'react'
import { Star } from 'lucide-react'

/**
 * AchievementsSection lists notable achievements and impact metrics.
 */
export const AchievementsSection: React.FC = () => {
  const achievements: string[] = [
    'Designed a multi-factor stock selection model that outperformed the US equity benchmark by 18% cumulative excess return over three years, becoming one of the most frequently used strategies in the internal library.',
    'Led the development of an industry climate indicator that was integrated into Moomoo’s research system, significantly improving user-side research efficiency and driving a user adoption increase of over 45%.',
    'Identified key inflection points for several technology and semiconductor companies; her reports were referenced by management, contributing meaningful returns to the firm’s investment portfolios.',
    'Received the 2017 &quot;Outstanding Research Contributor&quot; award for contributions in macro research and quantitative model construction.',
    'Participated in IPO market research and proposed a risk-aware valuation framework that is still used to define reasonable valuation ranges for new listings.',
    'Mentored a junior analyst team and established a standardized research workflow, improving overall department research efficiency by more than 30%.',
  ]

  return (
    <section
      id="achievements"
      className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 md:text-sm">
            KEY ACHIEVEMENTS
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Turning research into measurable results.
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Lisa&apos;s work connects rigorous quantitative methods with practical investment
            decisions, generating impact for both internal teams and end investors.
          </p>
        </header>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2">
          {achievements.map((item) => (
            <AchievementItem key={item} text={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * AchievementItem renders a single achievement with an icon accent.
 */
const AchievementItem: React.FC<{ text: string }> = ({ text }) => (
  <article className="flex gap-3 rounded-3xl border border-slate-200 bg-white/80 p-5 text-xs text-slate-700 shadow-sm md:p-6 md:text-sm">
    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-600">
      <Star className="h-4 w-4" />
    </div>
    <p>{text}</p>
  </article>
)