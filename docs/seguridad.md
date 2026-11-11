# Seguridad del repositorio

## Archivos locales y secretos

- Guardar variables locales en `.env.local`; no se requieren variables para ejecutar
  actualmente este sitio. Versionar solo plantillas `.env.example` sin valores reales.
- `.gitignore` excluye dependencias, compilaciones, logs, configuraciones personales,
  llaves privadas y carpetas locales de despliegue.
- Usar `private/` para material local privado. Esa exclusión no cifra los archivos.
- No colocar datos privados dentro de `public/`: Vite copia esa carpeta al despliegue,
  aunque los archivos estén ignorados por Git.
- Las variables `VITE_*` usadas por el cliente son públicas. Credenciales de servicios
  deben permanecer en un backend o en funciones, nunca en componentes Vue.
- `package-lock.json`, documentación, código y configuraciones compartidas sí se versionan.

## Comprobaciones

`npm run check:repo` comprueba rutas sensibles entre los archivos versionados y los
nuevos que Git puede incluir, archivos ignorados que ya estén en el índice y archivos
privados o enlaces simbólicos dentro de `public/`. Se ejecuta antes de compilar y
en CI. No inspecciona el contenido de los secretos ni el historial completo de Git:
es una barrera adicional, no una auditoría exhaustiva ni un reemplazo de un escáner
de secretos.

Ejecutar `npm audit` al cambiar dependencias. La automatización instala desde el
lockfile, compila y rechaza vulnerabilidades moderadas o superiores.

Si una credencial ya se publicó, revocarla o rotarla en el proveedor y revisar el
historial y los despliegues anteriores. Añadirla al `.gitignore` no la elimina del
historial ni de bundles publicados. No reescribir el historial sin coordinarlo.

## Despliegue

Netlify publica únicamente `dist/`. Las cabeceras están centralizadas en
`public/_headers`, que Vite copia al resultado. La CSP restringe los scripts al
propio sitio, los formularios al mismo origen y bloquea objetos y marcos externos.
Los estilos conservan `unsafe-inline` por los estilos dinámicos existentes; Google
Fonts permanece permitido. Los recursos estáticos revalidan su caché, incluidos
los íconos cuyos nombres no llevan hash.

Usar Vite y su vista previa en localhost para desarrollo; no son servidores de
producción. Las cabeceras de Netlify y la recepción de formularios requieren una
verificación en el despliegue: compilar localmente no confirma su aplicación remota.

Referencias: [variables de Vite](https://vite.dev/guide/env-and-mode),
[límites de gitignore](https://git-scm.com/docs/gitignore) y
[cabeceras de Netlify](https://docs.netlify.com/manage/routing/headers/).
