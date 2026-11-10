import { Link } from 'react-router-dom'
import { getAdminSection } from './adminSections.js'

export default function AdminSection({ sectionKey }) {
  const section = getAdminSection(sectionKey)
  const Icon = section.icon

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-white/12 bg-surface p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-brand">
            <Icon className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h2 className="text-lg font-black tracking-tight text-white">
              {section.label}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-mist">{section.blurb}</p>
          </div>
        </div>

        <p className="mt-4 inline-block rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
          Not built yet — {section.dependsOn}
        </p>
      </section>

      <section className="rounded-2xl border border-white/12 bg-surface p-5 sm:p-6">
        <h3 className="text-xs font-black uppercase tracking-[0.18em] text-mist">
          Planned for this view
        </h3>
        <ul className="mt-3 space-y-2">
          {section.planned.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-cream">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <Link
        to="/admin"
        className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-3 py-2 text-xs font-bold text-cream transition hover:bg-white/10"
      >
        Back to dashboard
      </Link>
    </div>
  )
}
