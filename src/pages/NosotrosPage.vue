<template>
  <main id="main">
    <header class="page-hero">
      <div class="container">
        <span class="eyebrow">Nosotros</span>
        <h1 class="h-display">Aprender a programar es una puerta de entrada</h1>
        <p class="lead">Comprender los códigos del mundo permite participar en él y transformarlo.</p>
      </div>
    </header>

    <section class="section">
      <div class="container grid-2">
        <div>
          <h2 class="h-section">Propósito</h2>
          <p class="lead espacio">Ampliar oportunidades para que las personas aprendan a crear con tecnología y a comprender los sistemas, reglas y decisiones que influyen en su vida, su trabajo y su comunidad, y convertir ese aprendizaje en proyectos útiles, participación y capacidad de actuar con otras personas.</p>
        </div>
        <div class="grid-pilares">
          <div v-for="p in pilares" :key="p.valor" class="card">
            <h3>{{ p.valor }} <span>{{ p.etiqueta }}</span></h3>
            <p>{{ p.detalle }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container grid-2">
        <div>
          <span class="pill">Transparencia</span>
          <h2 class="h-section espacio-arriba">Dónde estamos hoy</h2>
          <p class="lead espacio">PLC está en formación. Estamos preparando su constitución como organización sin fines de lucro en Panamá, su gobernanza y sus controles antes de recibir recursos.</p>
          <p class="lead">Mientras tanto, publicamos como propuesta todo lo que todavía es propuesta: ningún programa, alianza o cifra se anuncia antes de estar aprobado y documentado.</p>
        </div>
        <div class="card">
          <h3>Gobernanza propuesta</h3>
          <ul class="lista">
            <li><strong>Asamblea General</strong> de miembros para las decisiones fundamentales.</li>
            <li><strong>Junta Directiva</strong> de tres cargos: Presidencia, Secretaría y Tesorería.</li>
            <li><strong>Funciones de trabajo</strong> con responsable y suplente: alianzas, finanzas, programas, comunicación y ética y cumplimiento.</li>
          </ul>
          <p class="aviso">Pendiente de ratificar en los estatutos y en un acta.</p>
        </div>
      </div>
    </section>

    <section id="referentes" class="section">
      <div class="container">
        <h2 class="h-section">Referentes</h2>
        <p class="lead espacio">Organizaciones que estudiamos como referencia. Mencionarlas no implica relación, alianza ni respaldo.</p>
        <ul class="referentes">
          <li v-for="r in referentes" :key="r.nombre">
            <a :href="r.url" target="_blank" rel="noopener">{{ r.nombre }}</a>
            <span>{{ r.pais }} · {{ r.idea }}</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
import { pilares, referentes } from '../data/contenido.js';
</script>

<style scoped>
.espacio { margin: 16px 0; }
.espacio-arriba { margin-top: 12px; }
.grid-pilares { display: grid; gap: 16px; }
.grid-pilares h3 { font-size: 1.4rem; font-weight: 900; }
.grid-pilares h3 span { font-family: var(--font-sans); font-weight: 600; font-size: 1rem; color: var(--text-dim); }
.grid-pilares p { color: var(--text-dim); margin-top: 6px; }
.card h3 { font-size: 1.3rem; font-weight: 800; }
.lista { padding-left: 20px; display: grid; gap: 10px; margin: 16px 0 20px; }
.referentes { list-style: none; padding: 0; margin: 0; display: grid; gap: 0; border-top: 1px solid var(--border); }
.referentes li { display: grid; gap: 4px; padding: 18px 0; border-bottom: 1px solid var(--border); }
@media (min-width: 768px) { .referentes li { grid-template-columns: 280px 1fr; align-items: baseline; } }
.referentes a { font-family: var(--font-display); font-weight: 800; font-size: 1.15rem; color: var(--azul); }
.referentes span { color: var(--text-dim); }
</style>
