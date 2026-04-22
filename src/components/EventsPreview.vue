<template>
  <section id="events" class="events">
    <div class="inner">
      <div class="section-header" v-reveal>
        <div>
          <p class="overline">Agenda</p>
          <h2>Próximos eventos</h2>
        </div>
        <a href="#" class="see-all">Ver todos los eventos →</a>
      </div>
      <div class="list">
        <article v-for="(e, i) in events" :key="e.title" class="event-card" v-reveal="{ delay: i * 70 }">
          <div class="event-date">
            <span class="month">{{ e.month }}</span>
            <span class="day">{{ e.day }}</span>
          </div>
          <div class="event-body">
            <span class="badge">{{ e.type }}</span>
            <h3>{{ e.title }}</h3>
            <p>{{ e.desc }}</p>
            <a href="#" class="event-link">Más información →</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  { month: 'May', day: '10', title: 'Intro a JavaScript Moderno', desc: 'Sesión práctica para personas que comienzan desde cero. No se requiere experiencia previa.', type: 'Workshop' },
  { month: 'May', day: '24', title: 'Hack Night: Proyecto Cívico', desc: 'Construimos herramientas digitales de impacto para la comunidad panameña en una noche.', type: 'Hack Night' },
  { month: 'Jun', day: '07', title: 'Mentoría Frontend',           desc: 'Sesión de revisión de portafolios y retroalimentación personalizada con mentores senior.', type: 'Mentoría' },
];
</script>

<style scoped>
.events { padding: 6rem 1.5rem; background: var(--bg); }
.inner { max-width: var(--container); margin: 0 auto; }

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.overline {
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--blue);
  margin: 0 0 .5rem;
}
h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -.03em;
  color: var(--text);
  margin: 0;
  line-height: 1.2;
}
.see-all {
  font-size: .88rem;
  font-weight: 600;
  color: var(--blue);
  text-decoration: none;
  white-space: nowrap;
  padding-bottom: .2rem;
}
.see-all:hover { text-decoration: underline; }

.list { display: flex; flex-direction: column; gap: 1px; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }

.event-card {
  display: flex;
  gap: 0;
  background: var(--surface);
  transition: background .2s;
}
.event-card:hover { background: var(--bg-alt); }
.event-card + .event-card { border-top: 1px solid var(--border); }

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 88px;
  padding: 1.5rem 1rem;
  border-right: 1px solid var(--border);
  background: var(--bg-alt);
  text-align: center;
  flex-shrink: 0;
}
.month {
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--blue);
  line-height: 1;
}
.day {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -.03em;
  color: var(--text);
  line-height: 1.1;
  margin-top: .2rem;
}

.event-body {
  padding: 1.5rem 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: .4rem;
}
.badge {
  display: inline-block;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--blue);
  background: var(--blue-light);
  padding: .2rem .7rem;
  border-radius: 999px;
  width: fit-content;
  margin-bottom: .1rem;
}
.event-body h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
  letter-spacing: -.01em;
}
.event-body p {
  font-size: .88rem;
  color: var(--text-dim);
  line-height: 1.6;
  margin: 0;
}
.event-link {
  font-size: .85rem;
  font-weight: 600;
  color: var(--blue);
  text-decoration: none;
  margin-top: .3rem;
  width: fit-content;
}
.event-link:hover { text-decoration: underline; }

@media (max-width: 500px) {
  .event-date { min-width: 70px; }
  .event-body { padding: 1.2rem 1.2rem; }
}
</style>
