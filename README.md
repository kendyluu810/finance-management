<div align="center">

# Finance Management

Organize, track, and visualize personal or small‑business finances with a modern, component‑driven Next.js (App Router) application.

</div>

## Overview

Finance Management is a modular web app for tracking wallets, invoices, transactions, and generating financial reports. It ships with a reusable UI system and mock data so you can prototype quickly, then evolve toward real persistence (e.g., Prisma + PostgreSQL) and auth.

## Core Objectives

1. Centralize financial records (invoices, transactions, wallet balances).
2. Provide quick visual feedback via summary cards, charts, and tables.
3. Offer a scalable UI pattern using composable components.
4. Serve as a starter/learning reference for finance dashboards.

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- UI: Radix UI + shadcn/ui patterns, Lucide icons
- Styling: Tailwind CSS v4 (`@tailwindcss/postcss`), CSS variables
- Charts: Recharts
- Dates: date-fns, react-day-picker
- Tooling: ESLint, PostCSS

## Requirements

- Node.js 18+ (LTS recommended)
- npm, pnpm, yarn, or bun

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
# or
pnpm install
pnpm dev
# or
yarn
yarn dev
# or
bun install
bun dev
```

App runs at http://localhost:3000

## Scripts

- `dev`: Start Next.js in development
- `build`: Build for production
- `start`: Run the production build
- `lint`: Run ESLint

## Project Structure

```
app/            # Route groups & pages
  layout.tsx    # Root layout (sidebar + navbar)
  globals.css   # Global styles (Tailwind v4)
  invoice/      # Invoice page (extend with CRUD)
  transaction/  # Transaction page
  wallet/       # Wallet balances
  report/       # Reporting dashboard
components/     # Shared UI + composite components
  ui/           # Reusable primitives (shadcn/radix)
data/           # Mock data source
hooks/          # Custom hooks (e.g., mobile behavior)
lib/            # Utilities (e.g., class/merge helpers)
public/         # Static assets
```

## Features

- Modular `app/` routing with isolated feature folders
- Reusable primitives in `components/ui/*` for consistent patterns
- KPIs and charts (Recharts) for quick insights
- Mock data (`data/mock-data.ts`) for fast prototyping
- Layout with sidebar + navbar

## UI Components (shadcn)

This project follows shadcn/ui conventions with Radix UI under the hood and Tailwind v4 styling. Add more components using the CLI, e.g.:

```bash
npx shadcn@latest add dialog label input select
```

Components are generated into `components/ui` and styled via Tailwind v4 and CSS variables in `app/globals.css`.

## Limitations / Gaps

- No real persistence: data resets on reload (add a DB)
- No authentication/authorization yet (consider NextAuth)
- Reporting is basic; lacks CSV/PDF export
- Accessibility/i18n need further auditing
- No test suite (unit/e2e) included yet

## Roadmap Ideas

- Database (Prisma + PostgreSQL)
- Authentication (NextAuth, OAuth, or JWT)
- Richer analytics and export (CSV, PDF)
- Tests: Vitest/Jest + Playwright/Cypress
- Dark mode refinements and a11y improvements

## Contributing

Issues and PRs are welcome. Keep changes modular and follow existing component patterns.

## License

No license specified. If open‑sourcing, add a LICENSE file (e.g., MIT) and update this section.

## Disclaimer

Uses mock data and is not production‑ready for sensitive financial information. Add security, validation, and compliance before deploying.

## Acknowledgments

Built on the Next.js ecosystem; inspired by modern finance dashboards and component‑driven development practices.

---

Feel free to adapt & extend. Feedback welcome!
\
\
### Design Reference

UI/UX inspiration: [AI Finance Management SaaS Dashboard](https://www.behance.net/gallery/234937291/AI-Finance-Management-SaaS-UX-UI-DashboardDesign) — referenced for layout hierarchy, card density, color accents, and data visualization composition.
