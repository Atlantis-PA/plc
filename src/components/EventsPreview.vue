<template>
  <section class="events">
    <div class="events-inner">
      <div class="head" v-reveal>
        <div>
          <p class="overline">Próximamente</p>
          <h2>Eventos & Actividades</h2>
        </div>
        <a href="#" class="more">Ver todos <span aria-hidden="true">→</span></a>
      </div>
      <div class="list">
        <article
          v-for="(e, i) in events"
          :key="e.title"
          class="event"
          v-reveal="{ delay: 80 + i * 90 }"
        >
          <div class="event-accent" :style="{ background: e.color }"></div>
          <div class="event-body">
            <div class="event-top">
              <span class="badge" :style="{ color: e.color, borderColor: e.color + '55', background: e.color + '18' }">
                {{ e.type }}
              </span>
              <span class="date">{{ e.date }}</span>
            </div>
            <h3>{{ e.title }}</h3>
            <p>{{ e.desc }}</p>
            <a href="#" class="event-cta">Más info <span aria-hidden="true">→</span></a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue';
const isLight = inject('isLight', false);

const eventsData = [
  { title: 'Intro a JavaScript Moderno', desc: 'Sesión práctica para personas que comienzan desde cero.', date: 'May 10', type: 'Workshop',   dark: '#2193b0', light: '#0e7490' },
  { title: 'Hack Night: Proyecto Cívico', desc: 'Construimos herramientas digitales para la comunidad.', date: 'May 24', type: 'Hack Night', dark: '#c084fc', light: '#7c3aed' },
  { title: 'Mentoría Frontend', desc: 'Revisión de portafolios y feedback personalizado.',               date: 'Jun 07', type: 'Mentoría',   dark: '#00b894', light: '#0a7a5e' },
];
const events = computed(() => eventsData.map(e => ({ ...e, color: isLight.value ? e.light : e.dark })));
</script>

<style scoped>
.events {
  padding: 6rem 1.5rem;
  position: relative;
}
.events::before {
  content: '';
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: min(900px, 100%);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border-strong), transparent);
}
.events-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.overline {
  font-size: .72rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-accent);
  margin: 0 0 .4rem;
}
.head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.head h2 {
  font-size: clamp(1.9rem, 3.5vw, 2.6rem);
  margin: 0;
  font-weight: 800;
}
.more {
  text-decoration: none;
  color: var(--color-accent);
  font-weight: 600;
  font-size: .9rem;
  letter-spacing: .5px;
  display: inline-flex;
  align-items: center;
  gap: .3rem;
  transition: gap .25s;
}
.more:hover { gap: .6rem; }

.list {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
}

/* Event card */
.event {
  display: flex;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  backdrop-filter: blur(8px);
  transition: transform .4s cubic-bezier(.16,.8,.24,1), background .4s, border-color .4s, box-shadow .4s;
}
.event:hover {
  transform: translateY(-6px);
  background: var(--color-surface-hover);
  border-color: var(--color-border-strong);
  box-shadow: 0 24px 48px -16px rgba(0,0,0,.5);
}

.event-accent {
  width: 4px;
  flex-shrink: 0;
  border-radius: 4px 0 0 4px;
  opacity: .85;
}

.event-body {
  padding: 1.5rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  flex: 1;
}

.event-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .6rem;
  flex-wrap: wrap;
}

.badge {
  font-size: .65rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  padding: .25rem .65rem;
  border-radius: 999px;
  border: 1px solid;
}

.date {
  font-size: .75rem;
  color: var(--color-text-dim);
  font-weight: 500;
  letter-spacing: .5px;
}

.event h3 {
  margin: .3rem 0 0;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: .2px;
  line-height: 1.3;
}
.event p {
  margin: 0;
  font-size: .88rem;
  color: var(--color-text-dim);
  line-height: 1.55;
  flex: 1;
}

.event-cta {
  display: inline-flex;
  align-items: center;
  gap: .3rem;
  margin-top: .4rem;
  font-size: .82rem;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  letter-spacing: .3px;
  transition: gap .25s;
}
.event-cta:hover { gap: .55rem; }
</style>
