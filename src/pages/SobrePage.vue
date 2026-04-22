<template>
  <main id="main">
    <div class="page-hero">
      <div class="page-hero-inner">
        <p class="overline">Nuestra historia</p>
        <h1>Sobre Panama Learning Code</h1>
        <p>Somos una organización sin fines de lucro fundada en Panamá con una misión clara: democratizar el acceso al aprendizaje tecnológico para cualquier persona en el país.</p>
      </div>
    </div>

    <div class="page-body">
      <div class="page-body-inner">

        <!-- Misión -->
        <section class="mission-section">
          <div class="mission-grid">
            <div class="mission-block" v-for="m in mission" :key="m.title">
              <div class="mission-icon">{{ m.icon }}</div>
              <h3>{{ m.title }}</h3>
              <p>{{ m.desc }}</p>
            </div>
          </div>
        </section>

        <!-- Historia -->
        <section class="history-section">
          <p class="section-label">Historia</p>
          <h2 class="section-title">Cómo empezamos</h2>
          <div class="history-body">
            <p>Panama Learning Code nació en 2023 de una conversación entre desarrolladores panameños frustrados por la falta de recursos en español, adaptados al contexto local y accesibles para todos.</p>
            <p>Lo que empezó como un grupo de WhatsApp de 12 personas se convirtió en una comunidad de más de 350 miembros activos, con eventos mensuales, proyectos open source y una red de mentores voluntarios.</p>
            <p>Creemos que el talento en Panamá es enorme. Lo que falta son oportunidades, conexiones y el apoyo correcto en el momento correcto. Para eso existimos.</p>
          </div>
        </section>

        <!-- Timeline -->
        <section class="timeline-section">
          <p class="section-label">Hitos</p>
          <div class="timeline">
            <div v-for="t in timeline" :key="t.date" class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">{{ t.date }}</span>
                <h3>{{ t.title }}</h3>
                <p>{{ t.desc }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Valores -->
        <section class="values-section">
          <p class="section-label">Lo que nos guía</p>
          <h2 class="section-title">Nuestros valores</h2>
          <div class="values-grid">
            <div v-for="v in values" :key="v.title" class="value-card">
              <span class="value-icon">{{ v.icon }}</span>
              <h3>{{ v.title }}</h3>
              <p>{{ v.desc }}</p>
            </div>
          </div>
        </section>

        <!-- Contacto CTA -->
        <div class="cta-block">
          <h2>¿Quieres colaborar con PLC?</h2>
          <p>Estamos abiertos a alianzas, patrocinios y colaboraciones que apoyen nuestra misión de democratizar el acceso a la tecnología en Panamá.</p>
          <RouterLink to="/#newsletter" class="btn-primary">Contáctanos</RouterLink>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const mission = [
  { icon: '🎯', title: 'Misión',  desc: 'Democratizar el acceso al aprendizaje tecnológico en Panamá, sin importar el nivel de experiencia o recursos económicos.' },
  { icon: '🔭', title: 'Visión',  desc: 'Un Panamá donde cualquier persona pueda construir una carrera en tecnología con el apoyo de una comunidad activa.' },
  { icon: '💡', title: 'Impacto', desc: 'Cada evento, mentoría y proyecto open source que impulsamos es un paso hacia un ecosistema tech más fuerte y diverso.' },
];

const timeline = [
  { date: 'Enero 2023',    title: 'El primer WhatsApp',      desc: '12 desarrolladores panameños comienzan a compartir recursos y oportunidades en un grupo informal.' },
  { date: 'Abril 2023',    title: 'Primer evento presencial', desc: 'Workshop de introducción a Python con 28 asistentes en Ciudad de Panamá. Se agotaron los cupos en 2 días.' },
  { date: 'Agosto 2023',   title: 'Primer hack night',        desc: 'Equipo de 6 personas construye una herramienta de información ciudadana en 6 horas.' },
  { date: 'Enero 2024',    title: '100 miembros',             desc: 'La comunidad supera las 100 personas activas y lanzamos el programa formal de mentoría.' },
  { date: 'Agosto 2024',   title: '200 miembros',             desc: 'Abrimos el servidor de Discord y los primeros repositorios open source del proyecto.' },
  { date: 'Enero 2025',    title: '350+ miembros',            desc: 'Hoy somos la comunidad tech de aprendizaje más activa de Panamá. Y apenas estamos empezando.' },
];

const values = [
  { icon: '🔓', title: 'Acceso abierto',     desc: 'Todo lo que hacemos es gratuito. El dinero nunca debe ser una barrera para aprender.' },
  { icon: '🤝', title: 'Colaboración',        desc: 'Aprendemos mejor juntos. Fomentamos la ayuda mutua sobre la competencia.' },
  { icon: '🌱', title: 'Crecimiento continuo', desc: 'No importa tu nivel: siempre hay algo nuevo que aprender y alguien a quien enseñar.' },
  { icon: '🗺️', title: 'Raíces panameñas',   desc: 'Creamos contenido y recursos adaptados al contexto local, en español.' },
];
</script>

<style scoped>
.page-hero {
  padding: calc(var(--nav-h) + 3.5rem) 1.5rem 3.5rem;
  background: var(--bg-alt); border-bottom: 1px solid var(--border);
}
.page-hero-inner { max-width: var(--container); margin: 0 auto; }
.overline { font-size: .78rem; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; color: var(--blue); margin: 0 0 .7rem; }
h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -.03em; color: var(--text); margin: 0 0 .9rem; line-height: 1.15; }
.page-hero p { font-size: 1rem; color: var(--text-dim); line-height: 1.7; margin: 0; max-width: 620px; }

.page-body { padding: 3rem 1.5rem 5rem; }
.page-body-inner { max-width: var(--container); margin: 0 auto; }

.section-label { font-size: .78rem; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; color: var(--blue); margin: 0 0 .6rem; }
.section-title { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; letter-spacing: -.03em; color: var(--text); margin: 0 0 1.8rem; line-height: 1.2; }

/* Mission */
.mission-section { margin-bottom: 4rem; }
.mission-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.1rem; }
.mission-block {
  background: var(--bg-dark); color: #f0f4ff;
  border-radius: var(--radius-lg); padding: 2rem 1.75rem;
}
.mission-icon { font-size: 1.8rem; margin-bottom: .9rem; }
.mission-block h3 { font-size: 1rem; font-weight: 700; color: #fff; margin: 0 0 .6rem; }
.mission-block p  { font-size: .9rem; color: #8b9ab8; line-height: 1.65; margin: 0; }

/* History */
.history-section { margin-bottom: 4rem; }
.history-body { display: flex; flex-direction: column; gap: 1rem; max-width: 680px; }
.history-body p { font-size: .97rem; color: var(--text-dim); line-height: 1.8; margin: 0; }

/* Timeline */
.timeline-section { margin-bottom: 4rem; }
.timeline { display: flex; flex-direction: column; gap: 0; border-left: 2px solid var(--border); margin-left: .75rem; }
.timeline-item { display: flex; gap: 1.5rem; align-items: flex-start; padding: 0 0 2rem 1.75rem; position: relative; }
.timeline-dot {
  position: absolute; left: -7px; top: 4px;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--blue); border: 2px solid var(--bg);
  flex-shrink: 0;
}
.timeline-date { font-size: .78rem; font-weight: 700; color: var(--blue); letter-spacing: .5px; display: block; margin-bottom: .3rem; }
.timeline-content h3 { font-size: 1rem; font-weight: 700; color: var(--text); margin: 0 0 .35rem; }
.timeline-content p  { font-size: .88rem; color: var(--text-dim); line-height: 1.6; margin: 0; }

/* Values */
.values-section { margin-bottom: 3.5rem; }
.values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.1rem; }
.value-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 1.75rem 1.5rem;
  transition: box-shadow .2s, transform .2s;
}
.value-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.value-icon { font-size: 1.7rem; display: block; margin-bottom: .8rem; }
.value-card h3 { font-size: 1rem; font-weight: 700; color: var(--text); margin: 0 0 .5rem; }
.value-card p  { font-size: .88rem; color: var(--text-dim); line-height: 1.6; margin: 0; }

/* CTA */
.cta-block {
  background: var(--bg-dark); color: #f0f4ff;
  border-radius: var(--radius-lg); padding: 3rem 2.5rem; text-align: center;
}
.cta-block h2 { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; letter-spacing: -.03em; margin: 0 0 .75rem; color: #fff; }
.cta-block p  { font-size: .98rem; color: #8b9ab8; margin: 0 0 1.6rem; max-width: 520px; margin-left: auto; margin-right: auto; }
.btn-primary {
  display: inline-block; padding: .8rem 1.8rem;
  background: var(--blue); color: #fff; border-radius: var(--radius);
  text-decoration: none; font-weight: 700; font-size: .95rem;
  transition: background .2s, transform .15s;
}
.btn-primary:hover { background: var(--blue-dark); transform: translateY(-2px); }
</style>
