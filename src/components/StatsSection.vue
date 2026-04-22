<template>
  <section id="stats" class="stats">
    <div class="inner">
      <div class="text-block" v-reveal>
        <p class="overline">Nuestra comunidad</p>
        <h2>Impacto real en la<br />comunidad tech panameña</h2>
        <p class="body-text">Desde 2023 hemos construido una red de personas aprendiendo, colaborando y creciendo juntas. Estos números representan personas reales con historias reales.</p>
        <a href="#newsletter" class="btn-link">Ser parte del movimiento →</a>
      </div>
      <div class="stats-grid">
        <div v-for="(s, i) in stats" :key="s.label" class="stat-card" v-reveal="{ delay: i * 80 }">
          <div class="stat-value">{{ s.value }}</div>
          <div class="stat-label">{{ s.label }}</div>
          <p class="stat-desc">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '+350', label: 'Miembros activos',     desc: 'Personas aprendiendo y colaborando en nuestra comunidad.' },
  { value: '24',   label: 'Proyectos abiertos',   desc: 'Repositorios públicos a los que puedes contribuir hoy.' },
  { value: '18',   label: 'Eventos realizados',   desc: 'Workshops, hack nights y sesiones de mentoría completadas.' },
  { value: '7',    label: 'Mentores voluntarios', desc: 'Profesionales tech dedicando su tiempo a guiar a otros.' },
];
</script>

<style scoped>
.stats {
  background: var(--bg-dark);
  color: #f0f4ff;
  padding: 6rem 1.5rem;
}

/* Override tokens para sección oscura en ambos modos */
.stats {
  --text:     #f0f4ff;
  --text-dim: #8b9ab8;
  --blue:     #60a5fa;
  --border:   rgba(255,255,255,.1);
  --surface:  rgba(255,255,255,.05);
}

.inner {
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.overline {
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--blue);
  margin: 0 0 .8rem;
}
h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -.03em;
  color: var(--text);
  margin: 0 0 1.2rem;
  line-height: 1.2;
}
.body-text {
  font-size: .98rem;
  color: var(--text-dim);
  line-height: 1.75;
  margin: 0 0 1.8rem;
}
.btn-link {
  font-weight: 600;
  font-size: .9rem;
  color: var(--blue);
  text-decoration: none;
  transition: gap .2s;
  display: inline-block;
}
.btn-link:hover { text-decoration: underline; }

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.stat-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.6rem 1.4rem;
  transition: background .25s;
}
.stat-card:hover { background: rgba(255,255,255,.09); }

.stat-value {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -.04em;
  color: #fff;
  line-height: 1;
  margin-bottom: .4rem;
}
.stat-label {
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: .65rem;
}
.stat-desc {
  font-size: .84rem;
  color: var(--text-dim);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .inner { grid-template-columns: 1fr; gap: 3rem; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr; }
}
</style>
