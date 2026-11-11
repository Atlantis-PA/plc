<template>
  <footer class="pie">
    <div class="container cuadricula">
      <div class="marca">
        <RouterLink to="/" class="brand">
          <img src="/assets/icons/plc.svg" alt="" width="40" height="40" />
          <span>Panama Learning Code</span>
        </RouterLink>
        <p>Ayudamos a que más personas en Panamá aprendan a crear con tecnología, acompañando a las comunidades que lo hacen posible.</p>
        <div class="redes">
          <a href="https://github.com/Atlantis-PA" target="_blank" rel="noopener" aria-label="GitHub de PLC">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
          </a>
        </div>
      </div>

      <nav v-for="col in pie" :key="col.titulo" class="columna" :aria-label="col.titulo">
        <h2>{{ col.titulo }}</h2>
        <ul>
          <li v-for="e in col.enlaces" :key="e.to"><RouterLink :to="e.to">{{ e.label }}</RouterLink></li>
        </ul>
      </nav>
    </div>
    <div class="container legal">
      <span>© {{ anio }} Panama Learning Code · Organización en formación</span>
      <span>Hecho en Panamá</span>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { pie } from '../data/contenido.js';
const anio = new Date().getFullYear();
</script>

<style scoped>
.pie { background: var(--bg-alt); border-top: 1px solid var(--border); padding: 64px 0 24px; }
.cuadricula { display: grid; gap: 40px; grid-template-columns: 1fr; }
@media (min-width: 640px) { .cuadricula { grid-template-columns: repeat(3, 1fr); } .marca { grid-column: 1 / -1; } }
@media (min-width: 1024px) { .cuadricula { grid-template-columns: 2fr 1fr 1fr 1fr; } .marca { grid-column: auto; } }
.brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; }
.marca p { color: var(--text-dim); margin: 16px 0 20px; max-width: 360px; }
.redes { display: flex; gap: 10px; }
.redes a { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 999px; background: var(--surface); border: 1px solid var(--border); color: var(--text); }
.redes a:hover { color: var(--azul); }
.columna h2 { font-family: var(--font-sans); font-size: .8rem; letter-spacing: .14em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 16px; }
.columna ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.columna a { text-decoration: none; font-weight: 600; }
.columna a:hover { color: var(--azul); }
.legal { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; margin-top: 48px; padding-top: 20px; border-top: 1px solid var(--border); color: var(--text-dim); font-size: .85rem; }
</style>
