# Panama Learning Code

Sitio de Panama Learning Code desarrollado con Vue 3, Vue Router y Vite.

## Desarrollo

Usar Node.js 22.12 o superior (`nvm install && nvm use` para la versión de `.nvmrc`).

```sh
npm ci --ignore-scripts
npm run dev
```

```sh
npm run check:repo  # comprueba archivos versionables y recursos públicos
npm run build      # verifica el repositorio y genera dist/
npm run preview    # revisa la compilación localmente
npm audit          # consulta vulnerabilidades; requiere conexión
```

## Estructura

```text
index.html              Entrada HTML de Vite y detección de Netlify Forms
src/
  main.js               Arranque de Vue y directivas
  App.vue               Contenedor y estilos globales
  components/           Componentes reutilizables
  pages/                Vistas de las rutas
  router/               Rutas y metadatos de navegación
  data/                 Contenido compartido del sitio
  utils/                Utilidades y envío de formularios
public/
  assets/icons/         Íconos con rutas públicas estables
  _headers              Cabeceras de seguridad para Netlify
  robots.txt            Reglas para buscadores
  sitemap.xml           Mapa del sitio
docs/
  seguridad.md          Reglas de seguridad y límites de las verificaciones
  archive/              Fuentes del sitio anterior; no se publican en dist/
scripts/                Verificaciones de mantenimiento
.github/workflows/      Comprobaciones automatizadas
netlify.toml            Compilación, directorio publicado y fallback SPA
vite.config.js          Configuración de Vite
```

`public/` contiene solo archivos que pueden publicarse sin transformar. El código
activo pertenece a `src/`; los recursos importados por componentes pueden ir en
`src/assets/` cuando se necesiten. `dist/` es generado y no se versiona.

## Colaboración y despliegue

Versionar `package-lock.json` junto con cada cambio de dependencias. La CI instala
las versiones bloqueadas, comprueba la estructura, compila y ejecuta `npm audit`.
Mantener los cambios de contenido en `src/data/` y las nuevas vistas en `src/pages/`.
Respetar accesibilidad y la preferencia de movimiento reducido.

Netlify ejecuta `npm run build` y publica `dist/`. Las rutas de Vue Router vuelven a
`index.html`. Conservar los formularios ocultos de la entrada: permiten a Netlify
detectar los formularios de la aplicación.

Consultar [seguridad del repositorio](docs/seguridad.md) antes de añadir variables,
credenciales, archivos privados o nuevas integraciones.
