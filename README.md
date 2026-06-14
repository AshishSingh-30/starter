# Vite + React + TypeScript + Tailwind CSS + shadcn/ui Starter

A modern starter template built with:

- **Vite** for fast development and optimized production builds
- **React** with **TypeScript**
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **shadcn/ui** style primitives and component structure
- **Radix UI** utilities for accessible component patterns
- **Theme provider** with light/dark/system mode support
- **Class Variance Authority** + `cn()` helper for composable Tailwind variants

## What’s included

- `src/main.tsx` — entry point with `ThemeProvider`
- `src/App.tsx` — example page using a shadcn-style `Button`
- `src/components/theme-provider.tsx` — theme switching and system preference handling
- `src/components/ui/button.tsx` — reusable button component with variant/size support
- `src/lib/utils.ts` — shared utility helpers
- `src/index.css` — Tailwind imports, custom theme tokens, and dark mode styles
- `vite.config.ts` — Vite config with React plugin, Tailwind plugin, and `@` alias

## Quick start

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run static analysis:

```bash
npm run lint
npm run typecheck
npm run format
```

## Theme support

This starter includes a theme provider with:

- persistent theme selection in `localStorage`
- `dark`, `light`, and `system` modes
- keyboard toggle via `d`
- smooth transition handling when switching themes

## Component structure

The starter follows a simple component structure:

- `src/components/ui/` — reusable UI primitives (buttons, inputs, cards, etc.)
- `src/components/` — app-level components such as `theme-provider`
- `src/lib/` — shared utilities and helper functions

### Example component import

```tsx
import { Button } from "@/components/ui/button"
```

## Recommended workflow

1. Build small UI primitives in `src/components/ui`
2. Use `cva()` from `class-variance-authority` for variant-driven styling
3. Keep app-level logic and provider setup in `src/components`
4. Add page and layout components under `src/` as your app grows

## Customize Tailwind

This template uses Tailwind CSS v4 and the `@tailwindcss/vite` plugin. Update `src/index.css` with custom tokens, themes, and utility imports:

- `@import "tailwindcss"`
- `@import "shadcn/tailwind.css"`
- `@import "tw-animate-css"`

## Notes

- The starter ships with `react@^19`, `typescript@~6`, and the latest Vite plugin ecosystem.
- The current button component is a good reference for building additional UI primitives.
- Use the `@` alias to simplify imports from `src/`.

## Learn more

- Vite: https://vitejs.dev/
- React: https://reactjs.org/
- Tailwind CSS: https://tailwindcss.com/
- shadcn/ui: https://ui.shadcn.com/
- Radix UI: https://www.radix-ui.com/
- Class Variance Authority: https://cva.style/

