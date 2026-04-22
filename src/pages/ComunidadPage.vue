<template>
  <main id="main">
    <div class="page-hero">
      <div class="page-hero-inner">
        <p class="overline">Únete</p>
        <h1>La comunidad tech<br />más activa de Panamá</h1>
        <p>Más de 350 personas aprendiendo, colaborando y construyendo juntas. Encontrarás tu lugar sin importar tu nivel de experiencia.</p>
      </div>
    </div>

    <div class="page-body">
      <div class="page-body-inner">

        <!-- Cómo unirse -->
        <section class="join-section">
          <p class="section-label">¿Cómo empiezo?</p>
          <h2 class="section-title">Tres pasos para ser parte</h2>
          <div class="steps">
            <div v-for="(s, i) in steps" :key="s.title" class="step">
              <div class="step-num">{{ i + 1 }}</div>
              <div>
                <h3>{{ s.title }}</h3>
                <p>{{ s.desc }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Canales -->
        <section class="channels-section">
          <p class="section-label">Plataformas</p>
          <h2 class="section-title">Dónde nos encontramos</h2>
          <div class="channels-grid">
            <a v-for="c in channels" :key="c.name" href="#" class="channel-card">
              <div class="channel-icon">{{ c.icon }}</div>
              <div>
                <h3>{{ c.name }}</h3>
                <p>{{ c.desc }}</p>
              </div>
              <span class="channel-arrow">→</span>
            </a>
          </div>
        </section>

        <!-- Newsletter CTA -->
        <div class="cta-block">
          <h2>Primer paso: suscríbete al newsletter</h2>
          <p>Es la forma más fácil de estar al tanto de eventos, recursos y anuncios de la comunidad.</p>
          <RouterLink to="/#newsletter" class="btn-primary">Suscribirme gratis</RouterLink>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const steps = [
  { title: 'Suscríbete al newsletter', desc: 'Recibe la agenda y novedades directamente en tu correo. Es gratuito y puedes cancelar cuando quieras.' },
  { title: 'Únete a Discord',          desc: 'Preséntate en el canal #bienvenidos, comparte tus metas y comienza a participar en las conversaciones.' },
  { title: 'Asiste a un evento',       desc: 'Ven a un workshop o hack night, conoce a otras personas y empieza a construir tu red de contactos.' },
];

const channels = [
  { icon: '💬', name: 'Discord',    desc: 'Chat en tiempo real, canales por tecnología y anuncios de la comunidad.' },
  { icon: '🐙', name: 'GitHub',     desc: 'Repositorios de proyectos open source panameños a los que puedes contribuir.' },
  { icon: '🐦', name: 'Twitter / X', desc: 'Noticias, recursos y conversaciones del ecosistema tech de Panamá.' },
  { icon: '💼', name: 'LinkedIn',   desc: 'Red profesional y oportunidades laborales compartidas por la comunidad.' },
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
.page-hero p { font-size: 1rem; color: var(--text-dim); line-height: 1.7; margin: 0; max-width: 580px; }

.page-body { padding: 3rem 1.5rem 5rem; }
.page-body-inner { max-width: var(--container); margin: 0 auto; }

.section-label { font-size: .78rem; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; color: var(--blue); margin: 0 0 .6rem; }
.section-title { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; letter-spacing: -.03em; color: var(--text); margin: 0 0 2rem; line-height: 1.2; }

/* Steps */
.join-section { margin-bottom: 4rem; }
.steps { display: flex; flex-direction: column; gap: 1rem; }
.step {
  display: flex; gap: 1.25rem; align-items: flex-start;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 1.5rem 1.75rem;
}
.step-num {
  min-width: 36px; height: 36px;
  background: var(--blue); color: #fff;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: .95rem; flex-shrink: 0;
}
.step h3 { font-size: 1rem; font-weight: 700; color: var(--text); margin: 0 0 .35rem; }
.step p  { font-size: .9rem; color: var(--text-dim); line-height: 1.6; margin: 0; }

/* Channels */
.channels-section { margin-bottom: 3.5rem; }
.channels-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
.channel-card {
  display: flex; align-items: center; gap: 1rem;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 1.4rem 1.5rem;
  text-decoration: none; color: inherit;
  transition: box-shadow .2s, transform .2s, border-color .2s;
}
.channel-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--blue); }
.channel-icon { font-size: 1.8rem; flex-shrink: 0; }
.channel-card h3 { font-size: .98rem; font-weight: 700; color: var(--text); margin: 0 0 .25rem; }
.channel-card p  { font-size: .84rem; color: var(--text-dim); line-height: 1.5; margin: 0; }
.channel-arrow { margin-left: auto; color: var(--blue); font-weight: 700; flex-shrink: 0; }

/* CTA */
.cta-block {
  background: var(--bg-dark); color: #f0f4ff;
  border-radius: var(--radius-lg); padding: 3rem 2.5rem; text-align: center;
}
.cta-block h2 { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; letter-spacing: -.03em; margin: 0 0 .75rem; color: #fff; }
.cta-block p  { font-size: .98rem; color: #8b9ab8; margin: 0 0 1.6rem; }
.btn-primary {
  display: inline-block; padding: .8rem 1.8rem;
  background: var(--blue); color: #fff; border-radius: var(--radius);
  text-decoration: none; font-weight: 700; font-size: .95rem;
  transition: background .2s, transform .15s;
}
.btn-primary:hover { background: var(--blue-dark); transform: translateY(-2px); }
</style>
