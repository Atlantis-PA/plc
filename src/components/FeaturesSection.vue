<template>
  <section id="features" class="features">
    <div class="features-inner">
      <p class="overline" v-reveal>Lo que ofrecemos</p>
      <h2 class="section-title" v-reveal="{ delay: 80 }">¿Qué encontrarás?</h2>
      <div class="grid">
        <article
          v-for="(f, i) in features"
          :key="f.title"
          class="card"
          v-reveal="{ delay: 100 + i * 70 }"
        >
          <div class="card-glow" :style="{ '--glow-color': f.glow }"></div>
          <div class="icon-wrap" :class="f.iconBg">
            <span class="icon-emoji">{{ f.icon }}</span>
          </div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
          <div class="card-line" :style="{ background: f.glow }"></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { title: 'Rutas de Aprendizaje', desc: 'Guías estructuradas para avanzar desde cero hasta proyectos reales.', icon: '📚', iconBg: 'bg1', glow: 'linear-gradient(135deg,#2193b0,#6dd5ed)' },
  { title: 'Mentoría', desc: 'Apoyo de la comunidad y sesiones guiadas para acelerar tu progreso.', icon: '🤝', iconBg: 'bg2', glow: 'linear-gradient(135deg,#00b894,#16a085)' },
  { title: 'Eventos y Workshops', desc: 'Charlas, hack nights y espacios prácticos para crear.', icon: '🛠️', iconBg: 'bg3', glow: 'linear-gradient(135deg,#ff9966,#ff5e62)' },
  { title: 'Open Source Local', desc: 'Proyectos panameños a los que puedes contribuir.', icon: '🌱', iconBg: 'bg4', glow: 'linear-gradient(135deg,#56ab2f,#a8e063)' },
  { title: 'Networking', desc: 'Conecta con desarrolladores, diseñadores y tech founders.', icon: '🌐', iconBg: 'bg5', glow: 'linear-gradient(135deg,#7f00ff,#e100ff)' },
  { title: 'Recursos Curados', desc: 'Listas de herramientas y referencias confiables.', icon: '🧭', iconBg: 'bg6', glow: 'linear-gradient(135deg,#f7971e,#ffd200)' },
];
</script>

<style scoped>
.features {
  padding: 7rem 1.5rem;
  position: relative;
}
.features::before {
  content: '';
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: min(900px, 100%);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border-strong), transparent);
}
.features-inner {
  max-width: var(--container);
  margin: 0 auto;
}
.overline {
  text-align: center;
  font-size: .72rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-accent);
  margin: 0 0 .6rem;
}
.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin: 0 0 3.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-alt), #6dd5ed);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

/* Card */
.card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 2rem 1.6rem 1.8rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
  backdrop-filter: blur(12px);
  transition: transform .4s cubic-bezier(.16,.8,.24,1), border-color .4s, background .4s;
  cursor: default;
}
.card:hover {
  transform: translateY(-8px) scale(1.01);
  border-color: var(--color-border-strong);
  background: var(--color-surface-hover);
}

/* Glow en hover */
.card-glow {
  position: absolute;
  inset: 0;
  background: var(--glow-color);
  opacity: 0;
  transition: opacity .5s;
  filter: blur(40px);
  transform: scale(1.4);
  z-index: 0;
}
.card:hover .card-glow { opacity: .12; }

/* Línea inferior de color */
.card-line {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  opacity: 0;
  transition: opacity .4s;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}
.card:hover .card-line { opacity: 1; }

/* Ícono */
.icon-wrap {
  position: relative;
  z-index: 1;
  width: 60px; height: 60px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 18px;
  margin-bottom: 1.3rem;
  box-shadow: 0 8px 24px -8px rgba(0,0,0,.4);
}
.icon-emoji { font-size: 1.85rem; line-height: 1; }
.bg1 { background: linear-gradient(135deg,#2193b0,#6dd5ed); }
.bg2 { background: linear-gradient(135deg,#00b894,#16a085); }
.bg3 { background: linear-gradient(135deg,#ff9966,#ff5e62); }
.bg4 { background: linear-gradient(135deg,#56ab2f,#a8e063); }
.bg5 { background: linear-gradient(135deg,#7f00ff,#e100ff); }
.bg6 { background: linear-gradient(135deg,#f7971e,#ffd200); }

.card h3 {
  position: relative; z-index: 1;
  margin: 0 0 .55rem;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: .2px;
}
.card p {
  position: relative; z-index: 1;
  margin: 0;
  color: var(--color-text-dim);
  line-height: 1.55;
  font-size: .93rem;
}
</style>
