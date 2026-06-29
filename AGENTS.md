# AGENTS.md — Innovamas web publica

## Contexto

- `Innovamas-web` es la landing/web publica de Innova Mas, distinta del aula virtual `Innovamas`.
- Stack: Vite + React + Tailwind v4 (`@tailwindcss/vite`), React Router, motion y lucide-react.
- Es una SPA front pura; aunque existan dependencias como `@google/genai`, `express` o `better-sqlite3`, no se usan en `src/` para verla.
- Paginas principales: Home, Nosotros, Sedes, Ciclos, CicloDetalle, Recursos y Contacto.

## Operacion local

- El script `dev` usa puerto 3000, pero ese puerto puede estar ocupado; arrancar con `npm run dev -- --port 3210`.
- Si el proyecto viene de AI Studio o entorno Linux y falla Vite/Rollup en macOS arm64, reinstalar dependencias con `rm -rf node_modules package-lock.json && npm install`.
- Branch actual principal: `main`. No pushear salvo pedido explicito.

## Reglas de UI

- No usar `alert`, `confirm`, `prompt` ni dialogos nativos.
- Mantener separada la identidad visual de la landing respecto al aula virtual, pero respetar la marca Innova Mas cuando aplique.
