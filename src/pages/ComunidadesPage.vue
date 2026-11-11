<template>
  <main id="main">
    <header class="page-hero">
      <div class="container">
        <span class="eyebrow">Comunidades</span>
        <h1 class="h-display">Comunidades que enseñan, reúnen y acompañan</h1>
        <p class="lead">PLC es la estructura de apoyo administrativo de las comunidades que forman parte de ella. Cada una conserva su identidad y su liderazgo.</p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <article v-for="c in comunidades" :key="c.nombre" class="card comunidad">
          <div>
            <h2 class="h-section">{{ c.nombre }}</h2>
            <p class="lead espacio">{{ c.descripcion }}</p>
            <a :href="c.url" target="_blank" rel="noopener" class="btn btn-ink">Visitar {{ c.nombre }}</a>
          </div>
          <div>
            <h3>Programas</h3>
            <ul class="programas">
              <li v-for="p in c.programas" :key="p.nombre">
                <strong>
                  <a v-if="p.url" :href="p.url" target="_blank" rel="noopener">{{ p.nombre }}</a>
                  <template v-else>{{ p.nombre }}</template>
                </strong>
                <span>{{ p.detalle }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container center unirse">
        <h2 class="h-section">¿Tu comunidad quiere sumarse?</h2>
        <p class="lead center">Si organizas una comunidad tech en Panamá y quieres apoyo administrativo, conversemos.</p>
        <RouterLink to="/organizadores#solicitud" class="btn btn-primary">Escríbenos</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { comunidades } from '../data/contenido.js';
</script>

<style scoped>
.comunidad { display: grid; gap: 32px; padding: 36px; }
@media (min-width: 900px) { .comunidad { grid-template-columns: 1.3fr 1fr; } }
.espacio { margin: 16px 0 24px; }
h3 { font-size: .8rem; letter-spacing: .14em; text-transform: uppercase; color: var(--text-dim); font-family: var(--font-sans); margin-bottom: 12px; }
.programas { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
.programas li { display: grid; gap: 2px; padding: 16px; border: 1px solid var(--border); border-radius: var(--radius); }
.programas strong { font-family: var(--font-display); font-size: 1.15rem; }
.programas a { color: var(--azul); }
.programas span { color: var(--text-dim); }
.unirse { display: grid; gap: 20px; justify-items: center; }
</style>
