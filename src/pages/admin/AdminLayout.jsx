import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { CloseIcon } from '../../components/icons.jsx'
import { MenuIcon } from './AdminIcons.jsx'
import { ADMIN_NAV, getAdminSection } from './adminSections.js'

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const activeKey = pathname.replace(/\/+$/, '').split('/')[2] || 'dashboard'
  const current = getAdminSection(activeKey)

  return (
    <div className="min-h-screen bg-ink text-cream">
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/10 bg-surface transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <Link to="/admin" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded bg-brand text-sm font-black text-white">
              S
            </span>
            <span className="text-sm font-black tracking-tight text-white">
              StreamBox <span className="font-medium text-mist">Admin</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded p-1 text-mist transition hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Close navigation"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3">
          <ul className="space-y-0.5">
            {ADMIN_NAV.map((section) => {
              const Icon = section.icon
              return (
                <li key={section.key}>
                  <NavLink
                    to={section.path ? `/admin/${section.path}` : '/admin'}
                    end={!section.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-mist hover:bg-white/5 hover:text-cream'
                      }`
                    }
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {section.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="border-t border-white/10 p-3">
          <p className="rounded-lg border border-amber-400/25 bg-amber-400/10 px-3 py-2 text-[11px] leading-relaxed text-amber-200">
            Not protected yet. Sign-in, roles and server-side checks arrive with
            the account system, so treat this shell as a layout preview only.
          </p>
          <Link
            to="/"
            className="mt-2 flex items-center justify-center rounded-lg border border-white/12 px-3 py-2 text-xs font-bold text-cream transition hover:bg-white/10"
          >
            Back to site
          </Link>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/90 backdrop-blur">
          <div className="flex items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-lg border border-white/12 p-2 text-cream transition hover:bg-white/10 lg:hidden"
              aria-label="Open navigation"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand">
                Admin
              </p>
              <h1 className="truncate text-lg font-black tracking-tight text-white">
                {current.label}
              </h1>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 pb-16 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
