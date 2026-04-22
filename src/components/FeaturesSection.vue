<template>
  <section id="features" class="features">
    <div class="inner">
      <div class="section-header" v-reveal>
        <p class="overline">Lo que ofrecemos</p>
        <h2>Todo lo que necesitas para crecer en tech</h2>
        <p class="section-sub">Recursos, personas y espacios diseñados para que cualquier persona en Panamá pueda aprender a programar sin importar su punto de partida.</p>
      </div>
      <div class="grid">
        <div v-for="(f, i) in features" :key="f.title" class="card" v-reveal="{ delay: i * 60 }">
          <div class="card-icon">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { icon: '📚', title: 'Rutas de Aprendizaje',  desc: 'Guías estructuradas para avanzar desde cero hasta proyectos reales, a tu ritmo.' },
  { icon: '🤝', title: 'Mentoría Personalizada', desc: 'Conéctate con profesionales del sector que te guían en tu camino técnico.' },
  { icon: '🛠️', title: 'Eventos y Workshops',   desc: 'Charlas, hack nights y talleres prácticos con la comunidad tech de Panamá.' },
  { icon: '🌱', title: 'Open Source Local',      desc: 'Contribuye a proyectos panameños reales y construye tu portafolio.' },
  { icon: '🌐', title: 'Red de Contactos',       desc: 'Conecta con desarrolladores, diseñadores y fundadores de startups locales.' },
  { icon: '🧭', title: 'Recursos Curados',       desc: 'Selección de herramientas, cursos y referencias verificadas por la comunidad.' },
];
</script>

<style scoped>
.features {
  background: var(--bg-alt);
  padding: 6rem 1.5rem;
}
.inner {
  max-width: var(--container);
  margin: 0 auto;
}

.section-header {
  max-width: 640px;
  margin: 0 auto 3.5rem;
  text-align: center;
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
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -.03em;
  color: var(--text);
  margin: 0 0 1rem;
  line-height: 1.2;
}
.section-sub {
  font-size: 1rem;
  color: var(--text-dim);
  line-height: 1.7;
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem 1.75rem;
  transition: box-shadow .25s, transform .25s;
}
.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 1;
}
.card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 .6rem;
  letter-spacing: -.01em;
}
.card p {
  font-size: .9rem;
  color: var(--text-dim);
  line-height: 1.65;
  margin: 0;
}
</style>
