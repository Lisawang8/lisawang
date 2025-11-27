/**
 * NavigationBar.tsx
 *
 * 顶部导航栏（简洁版），用于在页面内跳转各主要板块。
 * 说明：应答用户要求，已移除所有 href="#experience" 的锚点与按钮。
 */

import React from 'react'
import { Menu } from 'lucide-react'

/**
 * NavigationBar
 *
 * 渲染页面顶部导航。此组件使用内联锚点（#about, #strengths, 等）用于单页导航。
 * Experience 项已被刻意移除以满足用户要求。
 */
export const NavigationBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <a href="#top" className="text-lg font-semibold tracking-tight text-slate-900">
            Lisa Wang
          </a>
          <span className="hidden text-sm text-slate-500 md:inline">Financial Analyst · Investor</span>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {/* 低调的导航链接（按需显示） — 注意：没有 "#experience" */}
          <NavLink href="#about">About</NavLink>
          <NavLink href="#strengths">Strengths</NavLink>
          <NavLink href="#achievements">Achievements</NavLink>
          <NavLink href="#volunteering">Volunteering</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* 移动端快速按钮（简洁汉堡） */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm"
            onClick={() => {
              /**
               * 移动端的菜单行为保持最小：若需要完整展开菜单或侧栏，可后续扩展。
               * 当前实现仅作为占位，避免动态插入任何 href="#experience" 内容。
               */
              const menu = document.getElementById('mobile-nav')
              if (menu) {
                menu.classList.toggle('hidden')
              }
            }}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* 简易移动端菜单（默认隐藏） */}
      <div id="mobile-nav" className="hidden border-t border-slate-100 bg-white md:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          <MobileNavLink href="#about">About</MobileNavLink>
          <MobileNavLink href="#strengths">Strengths</MobileNavLink>
          <MobileNavLink href="#achievements">Achievements</MobileNavLink>
          <MobileNavLink href="#volunteering">Volunteering</MobileNavLink>
          <MobileNavLink href="#education">Education</MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  )
}

/**
 * NavLink
 *
 * 页面内导航链接（桌面）。单职责：渲染一个样式一致的锚点。
 *
 * @param href - 目标锚点
 * @param children - 链接文本
 */
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-amber-600"
    >
      {children}
    </a>
  )
}

/**
 * MobileNavLink
 *
 * 移动端导航行，视觉上更接近列表项。
 *
 * @param href - 目标锚点
 * @param children - 链接文本
 */
const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-amber-600"
    >
      {children}
    </a>
  )
}