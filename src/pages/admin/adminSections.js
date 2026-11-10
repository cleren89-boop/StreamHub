import { CalendarIcon } from '../../components/icons.jsx'
import {
  CardIcon,
  ChartIcon,
  FilmIcon,
  GridIcon,
  LogIcon,
  ReceiptIcon,
  SlidersIcon,
  UsersIcon,
} from './AdminIcons.jsx'

// Single source of truth for the admin sidebar, the topbar title and the
// placeholder views. Adding a management screen means adding one entry here
// (plus its route element once the view is real).
export const ADMIN_NAV = [
  {
    key: 'dashboard',
    path: '',
    label: 'Dashboard',
    icon: GridIcon,
  },
  {
    key: 'users',
    path: 'users',
    label: 'Users',
    icon: UsersIcon,
    blurb: 'Search members, review accounts, change roles and suspend access.',
    dependsOn: 'Needs the account system (Phase 2).',
    planned: [
      'Paginated member list with search and status filter',
      'Account detail: profile, subscription, payments, watch history',
      'Change role, suspend and reinstate, force sign-out',
      'Every mutation written to the activity log',
    ],
  },
  {
    key: 'plans',
    path: 'plans',
    label: 'Plans',
    icon: CardIcon,
    blurb: 'Define the free, premium monthly and premium annual tiers.',
    dependsOn: 'Needs billing (Phase 5).',
    planned: [
      'Plan list with price, interval and active state',
      'Map each plan to a Stripe price id',
      'Edit display name, features and sort order',
      'Archive a plan without deleting its subscribers',
    ],
  },
  {
    key: 'subscriptions',
    path: 'subscriptions',
    label: 'Subscriptions',
    icon: CalendarIcon,
    blurb: 'Follow member subscription status, renewals and expiries.',
    dependsOn: 'Needs billing (Phase 5).',
    planned: [
      'Active, past due, canceled and expiring views',
      'Period start/end and cancel-at-period-end state',
      'Re-sync a subscription from Stripe',
      'Filter by plan and expiration window',
    ],
  },
  {
    key: 'payments',
    path: 'payments',
    label: 'Payments',
    icon: ReceiptIcon,
    blurb: 'Review transactions, failed charges and refunds.',
    dependsOn: 'Needs billing (Phase 5).',
    planned: [
      'Transaction list with amount, status and member',
      'Failed-payment queue that needs attention',
      'Refund an invoice through Stripe',
      'CSV export for accounting',
    ],
  },
  {
    key: 'content',
    path: 'content',
    label: 'Content',
    icon: FilmIcon,
    blurb: 'Curate the hero and rows, and set per-title access tiers.',
    dependsOn: 'Needs the content access model (Phase 6).',
    planned: [
      'Feature or unfeature a title in the hero spotlight',
      'Order the rows shown on Home, Movies and Series',
      'Set a title to free or premium',
      'Block a title or restrict it by region',
    ],
  },
  {
    key: 'settings',
    path: 'settings',
    label: 'Settings',
    icon: SlidersIcon,
    blurb: 'Platform-wide configuration and streaming provider toggles.',
    dependsOn: 'Needs the settings API (Phase 7).',
    planned: [
      'Branding and support contact details',
      'Enable or disable streaming providers',
      'Trial length and grace period for failed payments',
      'Maintenance mode banner',
    ],
  },
  {
    key: 'reports',
    path: 'reports',
    label: 'Reports',
    icon: ChartIcon,
    blurb: 'Revenue, growth and engagement over time.',
    dependsOn: 'Needs billing history (Phase 5).',
    planned: [
      'Revenue by period and plan, with refunds netted out',
      'Signups, upgrades, cancellations and churn rate',
      'Most-watched titles from member history',
      'Date-range picker with CSV export',
    ],
  },
  {
    key: 'audit',
    path: 'audit',
    label: 'Activity log',
    icon: LogIcon,
    blurb: 'Append-only record of administrative and security events.',
    dependsOn: 'Needs the audit table (Phase 2 onwards).',
    planned: [
      'Every admin mutation with actor, target and timestamp',
      'Sign-ins, password changes and failed attempts',
      'Filter by actor, action and date range',
      'Read-only: entries cannot be edited or deleted',
    ],
  },
]

export const ADMIN_SECTION_ROUTES = ADMIN_NAV.filter((section) => section.path)

export const getAdminSection = (key) =>
  ADMIN_NAV.find((section) => section.key === key) || ADMIN_NAV[0]
