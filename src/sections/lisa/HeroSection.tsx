/**
 * HeroSection.tsx
 *
 * 顶部 Hero 区块，展示姓名、简介、关键数据点与主要 CTA（已移除 "View Experience" 按钮）。
 *
 * 说明：
 * - 本文件使用 TypeScript + React。
 * - 已删除所有 href="#experience" 与 "View Experience" 文本/图标，确保页面不再渲染该按钮。
 */

import React from 'react'
import { Mail } from 'lucide-react'

/**
 * HeroSection
 *
 * 渲染页面顶部横幅：包含定位标签、主标题、描述、若干统计信息以及联系按钮。
 * 该组件单一职责为展示顶部信息与 CTA，不包含任何指向 #experience 的锚点或按钮。
 */
export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* 视觉装饰：柔和色块 */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 md:flex-row md:items-stretch md:gap-12 md:px-6 md:py-20">
        {/* 左侧：文字与 CTA */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 md:text-sm">
            Independent Investor & Financial Analyst
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Lisa Wang
            </h1>
            <p className="max-w-xl text-sm text-slate-700 md:text-base">
              An independent investor and financial analyst with over 13 years of experience in
              private wealth management, cryptocurrency day trading, forex and derivatives trading,
              and income-generating real estate investment.
            </p>
          </div>

          <div className="grid gap-4 text-xs text-slate-700 sm:grid-cols-2 md:text-sm">
            <HeroStat label="Experience" value="13+ years in global markets" />
            <HeroStat label="Focus" value="Crypto · FX · Derivatives · Real Estate" />
            <HeroStat label="Current Role" value="Financial Analyst, Moomoo Technologies Inc." />
            <HeroStat label="Office" value="Jersey City, NJ · Global coverage" />
          </div>

          <div className="flex flex-wrap gap-3">
            {/* 主要联系 CTA（保留 Email） - 已移除 View Experience */}
            <a
              href="mailto:wangyuyanlisa@gmail.com?subject=Collaboration%20with%20Lisa%20Wang"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-400"
            >
              <Mail className="h-4 w-4" />
              Email Lisa
            </a>
          </div>
        </div>

        {/* 右侧：肖像卡 */}
        <div className="flex-1">
          <div className="mx-auto max-w-xs overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg md:max-w-sm">
            <div className="relative">
              <img
                src="https://pub-cdn.sider.ai/u/U005HE02679/web-coder/6928993ad9e33362d256fe21/resource/ca5006f2-cbe1-4a28-90f4-594ea31fa88d.jpg"
                alt="Portrait of Lisa Wang"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/60" />
            </div>
            <div className="px-4 pb-4 pt-4 text-sm text-slate-800">
              <p className="font-medium text-amber-600">Lisa Wang · Leo</p>
              <p className="mt-1 text-[13px] text-slate-700">
                "Treat others with sincerity, enjoy life fully, and let new goals lead the next
                stage of growth."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * HeroStat
 *
 * 小组件：在 Hero 区展示带标签的简短信息（例如经验年数、关注领域等）。
 *
 * @param label - 统计项标签
 * @param value - 统计项值
 */
const HeroStat: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-medium text-slate-900">{value}</div>
    </div>
  )
}
