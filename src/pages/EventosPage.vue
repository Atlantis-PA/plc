<template>
  <main id="main">
    <div class="page-hero">
      <div class="page-hero-inner">
        <p class="overline">Agenda 2026</p>
        <h1>Eventos & Actividades</h1>
        <p>Workshops, hack nights, sesiones de mentoría y charlas con la comunidad tech de Panamá. Todos los eventos son gratuitos y abiertos a cualquier nivel.</p>
      </div>
    </div>

    <div class="page-body">
      <div class="page-body-inner">

        <!-- Filtros -->
        <div class="filters" role="group" aria-label="Filtrar por tipo">
          <button
            v-for="f in filters" :key="f"
            class="filter-btn"
            :class="{ active: activeFilter === f }"
            @click="activeFilter = f"
          >{{ f }}</button>
        </div>

        <!-- Lista de eventos -->
        <div class="events-list">
          <article v-for="e in filtered" :key="e.title" class="event-card">
            <div class="event-date">
              <span class="month">{{ e.month }}</span>
              <span class="day">{{ e.day }}</span>
            </div>
            <div class="event-body">
              <div class="event-meta">
                <span class="badge">{{ e.type }}</span>
                <span class="modality">{{ e.modality }}</span>
              </div>
              <h2>{{ e.title }}</h2>
              <p>{{ e.desc }}</p>
              <div class="event-footer">
                <span class="detail">🕖 {{ e.time }}</span>
                <span class="detail">📍 {{ e.place }}</span>
                <a href="#newsletter" class="btn-register">Registrarme →</a>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty state -->
        <div v-if="filtered.length === 0" class="empty">
          <p>No hay eventos de este tipo próximamente.</p>
          <button class="filter-btn" @click="activeFilter = 'Todos'">Ver todos</button>
        </div>

        <!-- CTA newsletter -->
        <div class="cta-block">
          <h2>¿No quieres perderte ningún evento?</h2>
          <p>Suscríbete al newsletter y recibe la agenda directamente en tu correo.</p>
          <RouterLink to="/#newsletter" class="btn-primary">Suscribirme al newsletter</RouterLink>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const filters = ['Todos', 'Workshop', 'Hack Night', 'Mentoría', 'Charla'];
const activeFilter = ref('Todos');

const events = [
  { month: 'May', day: '10', title: 'Intro a JavaScript Moderno',        desc: 'Sesión práctica de 3 horas para personas que comienzan desde cero. Cubrimos variables, funciones, arrays y el DOM. No se requiere experiencia previa.',     type: 'Workshop',   modality: 'Presencial', time: '6:00 PM – 9:00 PM', place: 'Casco Viejo, Panamá' },
  { month: 'May', day: '24', title: 'Hack Night: Herramienta Cívica',    desc: 'En equipos de 4 personas construimos una herramienta digital de impacto para la comunidad panameña. Puedes participar aunque seas principiante.',               type: 'Hack Night', modality: 'Presencial', time: '5:00 PM – 11:00 PM', place: 'Hub Innovación, Ciudad de Panamá' },
  { month: 'Jun', day: '07', title: 'Mentoría Frontend: Portafolios',    desc: 'Trae tu portafolio o proyectos y recibe retroalimentación directa de desarrolladores senior. Cupos limitados a 15 personas.',                                     type: 'Mentoría',   modality: 'Híbrido',     time: '4:00 PM – 7:00 PM', place: 'Online + Presencial' },
  { month: 'Jun', day: '21', title: 'Charla: Carreras en Tech en Panamá', desc: 'Panel con 4 profesionales del sector tech panameño compartiendo sus trayectorias, consejos y oportunidades laborales en el mercado local e internacional.',        type: 'Charla',     modality: 'Online',      time: '7:00 PM – 8:30 PM', place: 'Zoom (link al registrarte)' },
  { month: 'Jul', day: '05', title: 'Python para Principiantes',          desc: 'Introducción práctica a Python: sintaxis básica, estructuras de datos y tu primer script. Trae tu laptop con Python instalado.',                                   type: 'Workshop',   modality: 'Presencial', time: '9:00 AM – 12:00 PM', place: 'Universidad Tecnológica de Panamá' },
  { month: 'Jul', day: '19', title: 'Hack Night: App Móvil',              desc: 'Hack night enfocado en desarrollo móvil con React Native o Flutter. Formamos equipos en el lugar según nivel de experiencia.',                                      type: 'Hack Night', modality: 'Presencial', time: '5:00 PM – 11:00 PM', place: 'TechHub Panamá' },
];

const filtered = computed(() =>
  activeFilter.value === 'Todos' ? events : events.filter(e => e.type === activeFilter.value)
);
</script>

<style scoped>
/* Page hero */
.page-hero {
  padding: calc(var(--nav-h) + 3.5rem) 1.5rem 3.5rem;
  background: var(--bg-alt);
  border-bottom: 1px solid var(--border);
}
.page-hero-inner { max-width: var(--container); margin: 0 auto; }
.overline {
  font-size: .78rem; font-weight: 700; letter-spacing: 1.8px;
  text-transform: uppercase; color: var(--blue); margin: 0 0 .7rem;
}
h1 {
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -.03em; color: var(--text); margin: 0 0 .9rem; line-height: 1.15;
}
.page-hero p { font-size: 1rem; color: var(--text-dim); line-height: 1.7; margin: 0; max-width: 600px; }

/* Body */
.page-body { padding: 3rem 1.5rem 5rem; }
.page-body-inner { max-width: var(--container); margin: 0 auto; }

/* Filters */
.filters {
  display: flex; flex-wrap: wrap; gap: .5rem;
  margin-bottom: 2rem;
}
.filter-btn {
  padding: .4rem 1rem;
  border-radius: 999px;
  border: 1.5px solid var(--border);
  background: transparent;
  color: var(--text-dim);
  font-size: .85rem; font-weight: 600; font-family: inherit;
  cursor: pointer;
  transition: background .2s, color .2s, border-color .2s;
}
.filter-btn:hover { background: var(--bg-alt); color: var(--text); }
.filter-btn.active {
  background: var(--blue); color: #fff; border-color: var(--blue);
}

/* Events list */
.events-list { display: flex; flex-direction: column; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 3rem; }

.event-card {
  display: flex;
  background: var(--surface);
  transition: background .2s;
}
.event-card:hover { background: var(--bg-alt); }
.event-card + .event-card { border-top: 1px solid var(--border); }

.event-date {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-width: 90px; padding: 1.5rem 1rem;
  border-right: 1px solid var(--border);
  background: var(--bg-alt);
  text-align: center; flex-shrink: 0;
}
.month {
  font-size: .72rem; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--blue); line-height: 1;
}
.day {
  font-size: 2rem; font-weight: 800;
  letter-spacing: -.04em; color: var(--text); line-height: 1.1; margin-top: .2rem;
}

.event-body { padding: 1.5rem 2rem; flex: 1; }

.event-meta { display: flex; align-items: center; gap: .6rem; margin-bottom: .6rem; flex-wrap: wrap; }
.badge {
  font-size: .7rem; font-weight: 700; letter-spacing: 1px;
  text-transform: uppercase; color: var(--blue);
  background: var(--blue-light); padding: .2rem .7rem; border-radius: 999px;
}
.modality {
  font-size: .78rem; color: var(--text-dim); font-weight: 500;
}

.event-body h2 {
  font-size: 1.1rem; font-weight: 700; color: var(--text);
  margin: 0 0 .5rem; letter-spacing: -.01em;
}
.event-body p { font-size: .9rem; color: var(--text-dim); line-height: 1.65; margin: 0 0 1rem; }

.event-footer {
  display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;
}
.detail { font-size: .82rem; color: var(--text-dim); }
.btn-register {
  font-size: .85rem; font-weight: 700; color: var(--blue);
  text-decoration: none; margin-left: auto; white-space: nowrap;
}
.btn-register:hover { text-decoration: underline; }

/* Empty state */
.empty { text-align: center; padding: 3rem 1rem; color: var(--text-dim); }
.empty p { margin-bottom: 1rem; }

/* CTA block */
.cta-block {
  background: var(--bg-dark);
  color: #f0f4ff;
  border-radius: var(--radius-lg);
  padding: 3rem 2.5rem;
  text-align: center;
}
.cta-block h2 {
  font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800;
  letter-spacing: -.03em; margin: 0 0 .75rem; color: #fff;
}
.cta-block p { font-size: .98rem; color: #8b9ab8; margin: 0 0 1.6rem; }
.btn-primary {
  display: inline-block;
  padding: .8rem 1.8rem;
  background: var(--blue); color: #fff;
  border-radius: var(--radius);
  text-decoration: none; font-weight: 700; font-size: .95rem;
  transition: background .2s, transform .15s;
}
.btn-primary:hover { background: var(--blue-dark); transform: translateY(-2px); }

@media (max-width: 560px) {
  .event-date { min-width: 72px; }
  .event-body { padding: 1.2rem 1.2rem; }
  .event-footer { gap: .75rem; }
  .btn-register { margin-left: 0; }
}
</style>
