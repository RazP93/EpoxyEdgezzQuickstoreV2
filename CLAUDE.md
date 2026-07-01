# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm preview    # preview the production build
```

No lint or test scripts are configured. Prettier is available (`pnpm prettier`) with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`.

## Architecture

Astro 3 static site with React for interactive islands. Package manager is **pnpm**.

### Data layer

All site metadata lives in `src/_data/site.json`: business contact info, page titles/descriptions/taglines, SEO og images, and navigation visibility flags (`inHeader`, `inFooter`). Pages and the Header/Footer read from this file — it's the single source of truth for content that appears across multiple places.

### Page structure

Pages in `src/pages/` are thin shells that pass metadata from `site.json` into `<Layout>` and compose section-level components. Section components live in `src/components/{page-name}/` (e.g. `components/home/Hero.astro`, `components/about/Values.astro`).

### Image galleries

Each image category has a paired thumbnail directory:
```
src/assets/products/finished/          ← full-size images
src/assets/products/finished/thumbnails/  ← display thumbnails
src/assets/products/featured/
src/assets/products/featured/thumbnails/
src/assets/products/stock/
src/assets/products/stock/thumbnails/
```

Gallery components (e.g. `components/gallery/Products.astro`) use `Astro.glob()` to auto-discover images and pair them with thumbnails **by array index**. When adding new images, both a full-size file and a matching thumbnail must be added, and filenames must sort to the same index position.

### React islands

React is only used for interactive UI in `src/components/ui/`. The lightbox (`lightbox.tsx`) wraps Radix UI's Dialog and receives an image via `JSON.stringify(image)` from the Astro parent, then parses the `src` property out. Interactive components require `client:load` on the call site.

### Path aliases

Defined in `tsconfig.json`:
- `@/*` → `src/*`
- `@/data/*` → `src/_data/*`
- `@/images/*` → `src/assets/images/*`

### Tailwind theme

Custom color palette — use these tokens, not generic Tailwind colors:
- `caramel` — primary orange/amber accent (`caramel-500` is `#EF802F`)
- `bark` — brown neutral; `bark-950` (`#0D0A07`) is the site background color
- `persimmon` — red/orange secondary
- `pine` — green

Custom responsive text sizes include `dynamic`, `dynamic-sm`, `dynamic-md`, `dynamic-lg`, `dynamic-xl` which use `clamp()` for fluid typography. A custom `xs` breakpoint is defined at `425px`.

### Navigation

Header and Footer nav items are driven by `inHeader`/`inFooter` flags in `site.json`. The `setPagesArray` utility in `src/lib/utils.ts` converts the pages object to an array for iteration.
