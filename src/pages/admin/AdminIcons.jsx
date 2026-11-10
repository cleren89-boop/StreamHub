const Svg = ({ children, className = 'h-5 w-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
)

export const GridIcon = ({ className }) => (
  <Svg className={className}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </Svg>
)

export const UsersIcon = ({ className }) => (
  <Svg className={className}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c0-2.8 2.5-4.6 5.5-4.6s5.5 1.8 5.5 4.6" />
    <path d="M16.5 5.6a3.2 3.2 0 0 1 0 6" />
    <path d="M17.5 14.8c1.9.5 3 1.9 3 4.2" />
  </Svg>
)

export const CardIcon = ({ className }) => (
  <Svg className={className}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 10h19" />
    <path d="M6 15h4" />
  </Svg>
)

export const ReceiptIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
    <path d="M9 8h6" />
    <path d="M9 12h6" />
  </Svg>
)

export const FilmIcon = ({ className }) => (
  <Svg className={className}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
  </Svg>
)

export const SlidersIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
    <circle cx="16" cy="7" r="2" />
    <circle cx="10" cy="17" r="2" />
  </Svg>
)

export const ChartIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <rect x="7" y="12" width="3" height="5" rx="1" />
    <rect x="12" y="8" width="3" height="9" rx="1" />
    <rect x="17" y="5" width="3" height="12" rx="1" />
  </Svg>
)

export const LogIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M8 6h12M8 12h12M8 18h12" />
    <circle cx="4" cy="6" r="1" />
    <circle cx="4" cy="12" r="1" />
    <circle cx="4" cy="18" r="1" />
  </Svg>
)

export const MenuIcon = ({ className }) => (
  <Svg className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
)
