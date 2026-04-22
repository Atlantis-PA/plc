<template>
  <footer class="site-footer" v-reveal>
    <div class="top">
      <div class="brand">
        <img src="/assets/icons/plc.svg" alt="PLC" />
        <span>Panama Learning Code</span>
      </div>
      <nav class="links">
        <a href="#features">Features</a>
        <a href="#events">Eventos</a>
        <a href="#newsletter">Newsletter</a>
        <a href="#stats">Comunidad</a>
      </nav>
    </div>
    <div class="bottom">
      <small>© 2026 Panama Learning Code · Hecho con pasión por la comunidad.</small>
    </div>
  </footer>
</template>
<script setup></script>
<style scoped>
.site-footer { padding:4rem 1.5rem 3rem; max-width:1200px; margin:0 auto; }
.top { display:flex; flex-wrap:wrap; gap:2rem; justify-content:space-between; align-items:center; margin-bottom:2.2rem; }
.brand { display:flex; align-items:center; gap:.8rem; font-weight:600; letter-spacing:.5px; font-size:1rem; }
.brand img { width:48px; }
.links { display:flex; gap:1.3rem; flex-wrap:wrap; }
.links a { color:var(--color-text-dim); text-decoration:none; font-size:.85rem; letter-spacing:.5px; position:relative; padding:.2rem 0; }
.links a::after { content:''; position:absolute; left:0; bottom:-4px; width:0; height:2px; background:linear-gradient(90deg,var(--color-accent),var(--color-accent-alt)); transition:width .35s; border-radius:2px; }
.links a:hover::after, .links a:focus-visible::after { width:100%; }
.bottom { text-align:center; font-size:.65rem; letter-spacing:.6px; color:var(--color-text-dim); opacity:.85; }
</style>
