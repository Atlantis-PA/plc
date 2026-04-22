<template>
  <section class="events" v-reveal>
    <div class="head">
      <h2>Eventos & Actividades</h2>
      <a href="#" class="more">Ver todos →</a>
    </div>
    <div class="list">
      <article v-for="e in events" :key="e.title" class="event" v-reveal>
        <h3>{{ e.title }}</h3>
        <p>{{ e.desc }}</p>
        <div class="meta">{{ e.date }} · {{ e.type }}</div>
      </article>
    </div>
  </section>
</template>
<script setup>
const events = [
  { title: 'Intro a JavaScript Moderno', desc: 'Sesión práctica para personas que comienzan.', date: 'May 10', type: 'Workshop' },
  { title: 'Hack Night: Proyecto Cívico', desc: 'Construimos herramientas para la comunidad.', date: 'May 24', type: 'Hack Night' },
  { title: 'Mentoría Frontend', desc: 'Revisión de portafolios y feedback.', date: 'Jun 07', type: 'Mentoría' }
];
</script>
<style scoped>
.events { padding: 6rem 1.5rem; max-width:1150px; margin:0 auto; }
.head { display:flex; align-items:flex-end; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-bottom:2.2rem; }
.head h2 { font-size: clamp(1.9rem,3.5vw,2.6rem); margin:0; }
.more { text-decoration:none; color:var(--color-accent); font-weight:600; font-size:.9rem; letter-spacing:.5px; }
.list { display:grid; gap:1.6rem; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); }
.event { background: var(--color-surface); border:1px solid var(--color-border); padding:1.4rem 1.3rem 1.55rem; border-radius: var(--radius-lg); position:relative; overflow:hidden; backdrop-filter: blur(6px); transition: transform .35s, background .35s, border-color .35s; }
.event:hover { transform: translateY(-5px); background: var(--color-surface-hover); border-color: var(--color-border-strong); }
.event h3 { margin:.2rem 0 .6rem; font-size:1.1rem; letter-spacing:.3px; }
.event p { margin:0 0 1.1rem; font-size:.93rem; color:var(--color-text-dim); line-height:1.35; }
.meta { font-size:.6rem; text-transform:uppercase; letter-spacing:1.1px; font-weight:600; color:var(--color-accent-alt); }
</style>
