<template>
  <main id="main">
    <div class="page-hero">
      <div class="page-hero-inner">
        <p class="overline">Mentores voluntarios</p>
        <h1>Personas reales que<br />comparten su experiencia</h1>
        <p>Nuestros mentores son profesionales del sector tech que donan su tiempo para ayudarte a crecer. Las sesiones son gratuitas y se coordinan según disponibilidad.</p>
      </div>
    </div>

    <div class="page-body">
      <div class="page-body-inner">

        <!-- Mentores -->
        <section class="mentors-section">
          <p class="section-label">El equipo</p>
          <h2 class="section-title">Conoce a nuestros mentores</h2>
          <div class="mentors-grid">
            <div v-for="m in mentors" :key="m.name" class="mentor-card">
              <div class="mentor-avatar" :style="{ background: m.color }">{{ m.initials }}</div>
              <div class="mentor-info">
                <h3>{{ m.name }}</h3>
                <span class="mentor-role">{{ m.role }}</span>
                <div class="mentor-tags">
                  <span v-for="t in m.tags" :key="t" class="tag">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Ser mentor -->
        <section class="become-section">
          <div class="become-inner">
            <div>
              <p class="section-label">Únete como mentor</p>
              <h2 class="section-title">¿Tienes experiencia en tech?</h2>
              <p>Si llevas más de 2 años trabajando en tecnología y quieres impactar la comunidad panameña, nos encantaría contar contigo. Solo necesitas dedicar 1-2 horas al mes.</p>
              <ul class="benefit-list">
                <li>Impacta a personas que están comenzando su carrera</li>
                <li>Amplía tu red de contactos en el ecosistema local</li>
                <li>Acceso anticipado a todos los eventos de PLC</li>
              </ul>
            </div>
            <div class="become-cta">
              <RouterLink to="/#newsletter" class="btn-primary">Postularme como mentor</RouterLink>
              <p class="disclaimer">Te contactaremos en menos de 72 horas</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const mentors = [
  { name: 'Ana Rodríguez',  initials: 'AR', role: 'Frontend Engineer · Google',        color: '#dbeafe', tags: ['React', 'CSS', 'Accesibilidad'] },
  { name: 'Carlos Méndez',  initials: 'CM', role: 'Backend Developer · Startup local', color: '#e0e7ff', tags: ['Node.js', 'PostgreSQL', 'APIs'] },
  { name: 'Sofía Torres',   initials: 'ST', role: 'Data Scientist · Freelance',        color: '#fce7f3', tags: ['Python', 'ML', 'Análisis de datos'] },
  { name: 'Diego Herrera',  initials: 'DH', role: 'DevOps Engineer · Banco General',   color: '#d1fae5', tags: ['Docker', 'AWS', 'CI/CD'] },
  { name: 'María López',    initials: 'ML', role: 'UX Designer · Agencia digital',     color: '#fef3c7', tags: ['Figma', 'Diseño de producto', 'UX'] },
  { name: 'Roberto Fung',   initials: 'RF', role: 'Full Stack · Empresa propia',       color: '#ede9fe', tags: ['Vue', 'Laravel', 'Mobile'] },
  { name: 'Valentina Cruz', initials: 'VC', role: 'QA Engineer · Empresa internacional', color: '#ffedd5', tags: ['Testing', 'Automatización', 'Selenium'] },
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
.page-hero p { font-size: 1rem; color: var(--text-dim); line-height: 1.7; margin: 0; max-width: 600px; }

.page-body { padding: 3rem 1.5rem 5rem; }
.page-body-inner { max-width: var(--container); margin: 0 auto; }

.section-label { font-size: .78rem; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; color: var(--blue); margin: 0 0 .6rem; }
.section-title { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; letter-spacing: -.03em; color: var(--text); margin: 0 0 2rem; line-height: 1.2; }

/* Mentors grid */
.mentors-section { margin-bottom: 4rem; }
.mentors-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.1rem; }
.mentor-card {
  display: flex; gap: 1rem; align-items: flex-start;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 1.4rem 1.5rem;
  transition: box-shadow .2s, transform .2s;
}
.mentor-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.mentor-avatar {
  width: 48px; height: 48px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: .9rem; color: #1a2238;
  flex-shrink: 0;
}
.mentor-info h3 { font-size: .98rem; font-weight: 700; color: var(--text); margin: 0 0 .2rem; }
.mentor-role { font-size: .8rem; color: var(--text-dim); display: block; margin-bottom: .65rem; }
.mentor-tags { display: flex; flex-wrap: wrap; gap: .35rem; }
.tag {
  font-size: .7rem; font-weight: 600; letter-spacing: .5px;
  background: var(--blue-light); color: var(--blue);
  padding: .2rem .6rem; border-radius: 999px;
}

/* Become section */
.become-section {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 2.5rem;
}
.become-inner { display: grid; grid-template-columns: 1fr auto; gap: 3rem; align-items: center; }
.become-section p { font-size: .95rem; color: var(--text-dim); line-height: 1.7; margin: 0 0 1.25rem; }
.benefit-list { margin: 0; padding-left: 1.2rem; display: flex; flex-direction: column; gap: .45rem; }
.benefit-list li { font-size: .9rem; color: var(--text-dim); line-height: 1.5; }
.become-cta { display: flex; flex-direction: column; align-items: center; gap: .75rem; min-width: 200px; }
.btn-primary {
  display: inline-block; padding: .8rem 1.6rem; white-space: nowrap;
  background: var(--blue); color: #fff; border-radius: var(--radius);
  text-decoration: none; font-weight: 700; font-size: .9rem;
  transition: background .2s, transform .15s; text-align: center; width: 100%;
}
.btn-primary:hover { background: var(--blue-dark); transform: translateY(-2px); }
.disclaimer { font-size: .78rem; color: var(--text-dim); margin: 0; text-align: center; }

@media (max-width: 700px) {
  .become-inner { grid-template-columns: 1fr; gap: 1.5rem; }
  .become-cta { align-items: flex-start; min-width: auto; }
  .btn-primary { width: auto; }
}
</style>
