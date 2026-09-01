# Portfolio Web v2

Personal full-stack developer portfolio with two audience experiences: recruiter and client.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Vitest + Testing Library
- ESLint + Prettier
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

The development server is available at `http://localhost:5173` by default.

## Routes

| Route             | Purpose                                |
| ----------------- | -------------------------------------- |
| `/`               | Redirects to the recruiter experience  |
| `/recruiter`      | Portfolio view for recruiters          |
| `/client`         | Portfolio view for prospective clients |
| `/maintenance`    | Standalone work-in-progress page       |
| Any unknown route | Not-found page                         |

## Project Structure

```text
src/
├── components/
│   ├── layout/       # App shell and shared layout
│   └── ui/           # Reusable interface primitives
├── content/          # Audience-specific portfolio data
├── pages/            # Route-level page composition
├── sections/         # Larger visual/content sections
├── assets/           # Static imported assets
├── App.tsx           # Application routes
└── main.tsx          # React entry point and BrowserRouter
```

## Quality Checks

```bash
pnpm build
pnpm lint
pnpm test
pnpm exec prettier . --check
```

Use `pnpm test:watch` while developing testable behavior.
