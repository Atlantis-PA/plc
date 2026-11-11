<template>
  <main id="main">
    <header class="page-hero">
      <div class="container">
        <span class="eyebrow">Participa</span>
        <h1 class="h-display">Aprende, construye, presenta y sigue creciendo</h1>
        <p class="lead">No necesitas experiencia previa. Solo ganas de aprender con otras personas.</p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h2 class="h-section">Cómo funciona</h2>
        <ol class="etapas">
          <li v-for="e in etapasRuta" :key="e.paso" class="card">
            <span class="paso">{{ e.paso }}</span>
            <h3>{{ e.titulo }}</h3>
            <p>{{ e.texto }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section id="rutas" class="section section-alt">
      <div class="container">
        <span class="pill">En diseño</span>
        <h2 class="h-section espacio">Rutas de aprendizaje</h2>
        <div class="grid-3">
          <article v-for="r in rutas" :key="r.titulo" class="card">
            <h3>{{ r.titulo }}</h3>
            <p class="dim">{{ r.texto }}</p>
          </article>
        </div>
        <p class="aviso espacio-arriba">Las rutas se están diseñando con las comunidades. Publicaremos fechas, requisitos y cupos cuando estén aprobados.</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid-2 alinear">
        <div>
          <h2 class="h-section">Actividades</h2>
          <p class="lead espacio">Todavía no hay actividades de PLC abiertas a inscripción. Mientras tanto, puedes participar en las comunidades que ya están activas.</p>
          <RouterLink to="/comunidades" class="btn btn-ink">Ver comunidades</RouterLink>
        </div>
        <div class="card">
          <h3>Avísame cuando abran</h3>
          <p class="dim espacio-chico">Suscríbete y te escribimos cuando publiquemos la primera actividad.</p>
          <RouterLink to="/#boletin" class="btn btn-primary">Suscribirme</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { etapasRuta, rutas } from '../data/contenido.js';
</script>

<style scoped>
.etapas { list-style: none; padding: 0; margin: 32px 0 0; display: grid; gap: 20px; grid-template-columns: 1fr; }
@media (min-width: 640px) { .etapas { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .etapas { grid-template-columns: repeat(4, 1fr); } }
.etapas li { display: grid; gap: 8px; align-content: start; }
.paso { font-family: var(--font-display); font-weight: 900; font-size: 2.4rem; color: var(--rojo); line-height: 1; }
h3 { font-size: 1.3rem; font-weight: 800; }
.dim { color: var(--text-dim); margin-top: 8px; }
.espacio { margin-top: 12px; margin-bottom: 24px; }
.espacio-arriba { margin-top: 24px; }
.espacio-chico { margin: 8px 0 20px; }
.alinear { align-items: center; }
</style>
