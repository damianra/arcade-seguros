# una-landing-page-de-seguros-con-un-estilo-retro-ar

una landing page de seguros con un estilo retro arcade

> App generada automáticamente por [MetaBuilder Orchestrator](https://github.com/damianra/metabuilder-orchestrator)

## Stack

- React + Vite + Tailwind CSS (frontend)
- Vitest (tests) + Playwright + Chromium (E2E)

## Requisitos

- Node.js >= 20

## Levantar el proyecto

```bash
npm install
npm run dev        # frontend en http://localhost:5173
```

## Tests

```bash
npm test           # suite Vitest
npm run test:e2e   # E2E Playwright (Chromium)
```

## Deploy

Si el proyecto se generó con `--github`, el build de `dist/` queda publicado en GitHub Pages (`https://<usuario>.github.io/una-landing-page-de-seguros-con-un-estilo-retro-ar/`). Pages sirve solo el frontend; en apps fullstack el backend corre aparte (`npm run api`).
