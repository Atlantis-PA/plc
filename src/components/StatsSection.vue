<template>
  <section class="stats" v-reveal>
    <div class="wrap">
      <div class="stat" v-for="s in stats" :key="s.label" v-reveal>
        <div class="value">{{ s.value }}</div>
        <div class="label">{{ s.label }}</div>
      </div>
    </div>
  </section>
</template>
<script setup>
const stats = [
  { value: '+350', label: 'Miembros activos' },
  { value: '24', label: 'Proyectos abiertos' },
  { value: '18', label: 'Eventos realizados' },
  { value: '7', label: 'Mentores voluntarios' }
];
</script>
<style scoped>
.stats { padding: 4.5rem 1rem 2rem; }
.wrap { max-width:1000px; margin:0 auto; display:grid; gap:1.4rem; grid-template-columns: repeat(auto-fit,minmax(180px,1fr)); }
.stat { background: var(--color-surface); border:1px solid var(--color-border); padding:1.6rem 1.2rem; border-radius: var(--radius-lg); text-align:center; backdrop-filter: blur(6px); transition: background .4s, transform .4s, border-color .4s; }
.stat:hover { background: var(--color-surface-hover); transform:translateY(-4px); border-color: var(--color-border-strong); }
.value { font-size:1.9rem; font-weight:700; letter-spacing:.5px; background: linear-gradient(90deg,var(--color-accent),var(--color-accent-alt)); -webkit-background-clip:text; color:transparent; }
.label { margin-top:.35rem; font-size:.75rem; letter-spacing:1px; color:var(--color-text-dim); text-transform:uppercase; font-weight:600; }
</style>
