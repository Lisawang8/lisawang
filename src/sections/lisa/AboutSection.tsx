/**
 * AboutSection.tsx
 *
 * 显示 Lisa 的 About 内容与 Snapshot 卡片。
 * 此版本移除了邮箱项，并对 Snapshot 做紧凑重设计：
 * - 更小的内边距与间距，避免卡片底部留太多空白
 * - 保留 Contact 入口（小图标 + 文本）指向页面内 contact 区块
 * - Facts 使用响应式列：移动端 1 列，sm 及以上 2 列
 */

import React from 'react'
import { Mail, MapPin } from 'lucide-react'

/**
 * AboutSection
 *
 * 渲染 About 内容与 Snapshot 侧边卡片。
 */
export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="border-t border-slate-200 bg-slate-50 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[minmax(0,2fr),minmax(0,1.05fr)] md:px-6">
        <div className="space-y-6">
          <header className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 md:text-sm">ABOUT LISA</p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Values-driven investor and analytical thinker.
            </h2>
            <p className="max-w-xl text-sm text-slate-600 md:text-base">
              I am a very sincere person and deeply believe in the law of attraction: when you treat
              others well, the world becomes kinder. I aim to enjoy life as much as possible, stay
              healthy, travel, and embrace new experiences.
            </p>
          </header>

          <div className="space-y-3 text-sm leading-tight text-slate-700 md:text-base">
            <p>
              In both life and work, I am generous rather than calculating. Within my abilities, I
              prefer to help others and share my happiness and daily life.
            </p>

            <div className="rounded-2xl border border-amber-100 bg-amber-50/60 px-4 py-2 text-xs text-amber-900 md:text-sm">
              <p className="font-semibold">Professional Profile</p>
              <p className="mt-1">
                An independent investor and financial analyst with over 13 years of experience in
                private wealth management, cryptocurrency day trading, forex and derivatives
                trading, and income-generating real estate investment.
              </p>
            </div>
          </div>
        </div>

        <aside className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
          <h3 className="text-sm font-semibold tracking-tight text-slate-900 md:text-base">Snapshot</h3>

          {/*
            更紧凑的 facts 网格：
            - 默认 1 列，sm 及以上为 2 列
            - 缩小 gap 避免卡片显得稀疏
          */}
          <dl className="grid grid-cols-1 gap-x-3 gap-y-2 text-xs text-slate-700 sm:grid-cols-2 md:text-sm">
            <Fact label="Age" value="39" />
            <Fact label="Height" value="165 cm" />
            <Fact label="Birthday" value="12 August 1987" />
            <Fact label="Zodiac" value="Leo" />
            <Fact label="Experience" value="13+ years" />
            <Fact label="Current Role" value="Financial Analyst" />
            <Fact label="Company" value="Moomoo Technologies Inc." />
          </dl>

          {/*
            Office address 更紧凑地显示，不占用过多高度。
            同时加入小型 Contact 入口（图标 + 文本），指向页面 contact 区块。
          */}
          <div className="mt-2 flex items-start justify-between gap-3">
            <div className="rounded-lg bg-slate-50 px-3 py-2 text-[12px] text-slate-700">
              <p className="font-medium text-slate-800">Office</p>
              <p className="mt-1 leading-tight">
                185 Hudson St Ste. 2600, Jersey City, NJ 07302
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-medium text-slate-700 shadow-sm transition hover:border-amber-300 hover:text-amber-700"
              aria-label="Go to contact section"
            >
              <Mail className="h-4 w-4 text-amber-600" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

/**
 * Fact
 *
 * 简洁的键值对组件，用于 Snapshot 中的各项信息。
 *
 * Props:
 * - label: 项目名（例如 Age）
 * - value: 对应值（例如 39）
 */
const Fact: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div>
      <dt className="text-[11px] font-medium uppercase tracking-wide text-slate-400 md:text-xs">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-medium text-slate-900 md:text-[15px]">{value}</dd>
    </div>
  )
}