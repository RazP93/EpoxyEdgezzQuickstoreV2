# EpoxyEdgezz Quickstore

Static marketing site for EpoxyEdgezz, built with Astro 3 and Tailwind CSS.

## Stack

- [Astro 3](https://astro.build) — static site generator
- [Tailwind CSS v3](https://tailwindcss.com) via `@astrojs/tailwind`
- React (interactive islands only — lightbox, UI components)
- Radix UI primitives

## Commands

All commands are run from the root of the project:

| Command             | Action                                        |
| :------------------ | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build production site to `./dist/`            |
| `npm run preview`   | Preview the production build locally          |

## Project Structure

```
src/
├── _data/
│   └── site.json          ← single source of truth for site content & nav
├── assets/
│   └── products/
│       ├── featured/       ← full-size + thumbnails/
│       ├── finished/       ← full-size + thumbnails/
│       └── stock/          ← full-size + thumbnails/
├── components/
│   ├── {page-name}/        ← section components per page
│   └── ui/                 ← React interactive islands
├── layouts/
├── lib/
│   └── utils.ts
└── pages/
```

## Key Conventions

- **Content**: Edit `src/_data/site.json` for contact info, page metadata, and nav visibility.
- **Images**: Each image needs a matching thumbnail in the `thumbnails/` subdirectory at the same array index position. Both files must be added together.
- **Tailwind tokens**: Use `caramel`, `bark`, `persimmon`, and `pine` color scales — not generic Tailwind colors.
- **React islands**: Add `client:load` on the call site; React is only used in `src/components/ui/`.
