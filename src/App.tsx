/**
 * src/App.tsx
 *
 * 应用根路由：使用 HashRouter，但将 Route 改为通配符以确保所有 hash 路径都渲染 HomePage，
 * 避免点击页内锚点（例如 #about）被当作路由跳转导致页面空白的问题。
 */

import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'

/**
 * App
 *
 * 路由容器：使用通配符 Route ('/*')，确保无论 URL hash 如何变化都会加载 HomePage。
 */
export default function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}

