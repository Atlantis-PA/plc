# Panama Learning Code

Estructura profesional basada en `public/`.

Estructura de carpetas

- `public/`: todo lo que se sirve tal cual.
  - `public/index.html`: documento principal.
  - `public/assets/css/main.css`: estilos del sitio.
  - `public/assets/js/main.js`: JS del sitio.
  - `public/assets/icons/`: íconos y favicon.

Convenciones

- Mantener artefactos servidos en `public/`. Si se agrega bundler, emitir a `dist/`.
- Usar rutas relativas desde `public/index.html` (`assets/...`).
- Respetar accesibilidad (reduced motion) y separar dominios (css/js/img).

Próximos pasos sugeridos

- Añadir `robots.txt` y `sitemap.xml` en `public/` si se publica.
- Si el proyecto crece, introducir un bundler (Vite) y crear `src/` para fuentes; salida a `dist/`.
- Si necesitas imágenes o fuentes, crea `public/assets/img/` y `public/assets/fonts/` cuando sean requeridas.
