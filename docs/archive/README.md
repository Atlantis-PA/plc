# Archivo histórico

`static-site/` conserva el HTML, CSS y JavaScript de la versión anterior del sitio.
Se trasladaron sin modificar su contenido desde `public/` para que Vite no los
copie al despliegue actual. Son referencias históricas, no una segunda aplicación
mantenida; los íconos compartidos permanecen en `public/assets/icons/`.

El sitio vigente se inicia en `index.html` de la raíz y `src/main.js`.
No volver a colocar la entrada histórica en `public/`: puede sustituir la entrada
generada o publicar contenido obsoleto.
