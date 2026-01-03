CloudLast website (Next.js App Router) — brand-first, sober and premium showcase.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Key files:
- `app/page.tsx` — homepage
- `app/info/*` — technical info area
- `components/*` — header, toggles
- `lib/copy.ts` — IT/EN copy

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## CI

GitHub Actions workflow runs typecheck, lint and build on PRs and pushes to `main`/`master`.
