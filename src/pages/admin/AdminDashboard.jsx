import { Link } from 'react-router-dom'
import { ADMIN_SECTION_ROUTES } from './adminSections.js'

// Every figure on this dashboard is intentionally blank: there is no database
// or API behind the admin shell yet, and inventing numbers would misrepresent
// the platform's state. Each card gains a real source in the phase noted below.
const STAT_CARDS = [
  { key: 'members', label: 'Members', hint: 'Needs the account system', phase: 'Phase 2' },
  { key: 'active', label: 'Active subscriptions', hint: 'Needs billing', phase: 'Phase 5' },
  { key: 'mrr', label: 'Monthly recurring revenue', hint: 'Needs billing', phase: 'Phase 5' },
  { key: 'failed', label: 'Payments needing attention', hint: 'Needs billing', phase: 'Phase 5' },
]

const SYSTEM_STATUS = [
  { label: 'Database', state: 'Not configured', detail: 'No entities or migrations exist yet.' },
  { label: 'Authentication', state: 'Not configured', detail: 'No sign-in, roles or sessions.' },
  { label: 'Billing', state: 'Not configured', detail: 'Stripe is not connected.' },
  { label: 'TMDB access', state: 'Browser key', detail: 'Catalogue calls run from the client today.' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-amber-400/25 bg-amber-400/10 p-4">
        <h2 className="text-sm font-black uppercase tracking-wide text-amber-200">
          Dashboard shell — not connected to a backend
        </h2>
        <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-amber-100/90">
          This page is the layout that future management views will fill. It
          reads no data, writes no data and is not yet access-controlled. The
          public catalogue, My List, history and watch pages are unaffected.
        </p>
      </div>

      <section>
        <h2 className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-mist">
          Overview
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {STAT_CARDS.map((card) => (
            <div
              key={card.key}
              className="rounded-2xl border border-white/12 bg-surface p-4"
            >
              <p className="text-xs font-semibold text-mist">{card.label}</p>
              <p className="mt-2 text-3xl font-black text-white/40">—</p>
              <p className="mt-1 text-[11px] text-mist">{card.hint}</p>
              <p className="mt-3 inline-block rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-mist">
                {card.phase}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/12 bg-surface p-4 sm:p-5">
          <h2 className="text-sm font-black text-white">System status</h2>
          <p className="mt-1 text-xs text-mist">
            What the platform has behind it right now.
          </p>
          <ul className="mt-4 space-y-3">
            {SYSTEM_STATUS.map((item) => (
              <li key={item.label} className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-cream">{item.label}</p>
                  <p className="text-[11px] text-mist">{item.detail}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-mist">
                  {item.state}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/12 bg-surface p-4 sm:p-5">
          <h2 className="text-sm font-black text-white">Management views</h2>
          <p className="mt-1 text-xs text-mist">
            Placeholders ready to be built out, one phase each.
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {ADMIN_SECTION_ROUTES.map((section) => {
              const Icon = section.icon
              return (
                <li key={section.key}>
                  <Link
                    to={`/admin/${section.path}`}
                    className="flex items-center gap-2.5 rounded-lg border border-white/10 px-3 py-2 text-sm font-semibold text-cream transition hover:border-white/20 hover:bg-white/5"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-mist" />
                    <span className="truncate">{section.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border border-white/12 bg-surface p-4 sm:p-5">
        <h2 className="text-sm font-black text-white">Recent activity</h2>
        <div className="mt-3 rounded-xl border border-dashed border-white/12 p-8 text-center">
          <p className="text-sm font-semibold text-cream">No activity recorded</p>
          <p className="mx-auto mt-1 max-w-md text-xs leading-relaxed text-mist">
            The activity log starts collecting admin and security events once
            the backend and audit trail exist.
          </p>
        </div>
      </section>
    </div>
  )
}
