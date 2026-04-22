<template>
  <section id="features" class="features" v-reveal>
    <h2 class="section-title">¿Qué encontrarás?</h2>
    <div class="grid">
      <article v-for="f in features" :key="f.title" class="card" v-reveal>
        <div class="icon" :class="f.iconBg">{{ f.icon }}</div>
        <h3>{{ f.title }}</h3>
        <p>{{ f.desc }}</p>
      </article>
    </div>
  </section>
</template>
<script setup>
const features = [
  { title: 'Rutas de Aprendizaje', desc: 'Guías estructuradas para avanzar desde cero hasta proyectos reales.', icon: '📚', iconBg:'bg1' },
  { title: 'Mentoría', desc: 'Apoyo de la comunidad y sesiones guiadas para acelerar tu progreso.', icon: '🤝', iconBg:'bg2' },
  { title: 'Eventos y Workshops', desc: 'Charlas, hack nights y espacios prácticos para crear.', icon: '🛠️', iconBg:'bg3' },
  { title: 'Open Source Local', desc: 'Proyectos panameños a los que puedes contribuir.', icon: '🌱', iconBg:'bg4' },
  { title: 'Networking', desc: 'Conecta con desarrolladores, diseñadores y tech founders.', icon: '🌐', iconBg:'bg5' },
  { title: 'Recursos Curados', desc: 'Listas de herramientas y referencias confiables.', icon: '🧭', iconBg:'bg6' }
];
</script>
<style scoped>
.features { padding: 6rem 1.5rem; max-width: var(--container); margin: 0 auto; }
.section-title { font-size: clamp(2rem,4vw,3rem); text-align:center; margin:0 0 3rem; font-weight:700; background: var(--grad-accent, linear-gradient(90deg,var(--color-accent),var(--color-accent-alt))); -webkit-background-clip:text; color:transparent; }
.grid { display:grid; gap:1.7rem; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); }
.card { background: var(--color-surface); border:1px solid var(--color-border); padding:1.5rem 1.3rem 1.7rem; border-radius: var(--radius-lg); position:relative; overflow:hidden; backdrop-filter: blur(8px); transition: transform .35s, border-color .35s, background .35s; }
.card::before { content:''; position:absolute; inset:0; background: radial-gradient(circle at 30% 20%,rgba(255,255,255,.18),transparent 70%); opacity:0; transition:opacity .4s; }
.card:hover { transform: translateY(-6px); border-color: var(--color-border-strong); background: var(--color-surface-hover); }
.card:hover::before { opacity:1; }
.icon { width:54px; height:54px; display:flex; align-items:center; justify-content:center; font-size:1.7rem; border-radius:16px; margin-bottom:1rem; font-weight:600; }
.icon.bg1 { background:linear-gradient(135deg,var(--color-accent-alt),#6dd5ed); }
.icon.bg2 { background:linear-gradient(135deg,var(--color-accent),#16a085); }
.icon.bg3 { background:linear-gradient(135deg,#ff9966,#ff5e62); }
.icon.bg4 { background:linear-gradient(135deg,#56ab2f,#a8e063); }
.icon.bg5 { background:linear-gradient(135deg,#7f00ff,#e100ff); }
.icon.bg6 { background:linear-gradient(135deg,#f7971e,#ffd200); }
.card h3 { margin:.2rem 0 .6rem; font-size:1.15rem; }
.card p { margin:0; color:var(--color-text-dim); line-height:1.35; font-size:.95rem; }
</style>
