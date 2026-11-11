<template>
  <div class="layout">
    <NavBar :is-light="isLight" @toggle-theme="toggleTheme" />
    <RouterView />
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';

const isLight = ref(true);

function leer() {
  try { return localStorage.getItem('plc-theme'); } catch { return null; }
}
function guardar(v) {
  try { localStorage.setItem('plc-theme', v); } catch { /* sin almacenamiento */ }
}
function applyTheme() {
  document.documentElement.classList.toggle('dark', !isLight.value);
  guardar(isLight.value ? 'light' : 'dark');
}
function toggleTheme() { isLight.value = !isLight.value; applyTheme(); }

onMounted(() => {
  const saved = leer();
  isLight.value = saved ? saved === 'light' : !window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme();
});
</script>

<style>
/* ── Tokens ─────────────────────────────────────── */
:root {
  --font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-display: 'Archivo', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  --bg: #ffffff;
  --bg-alt: #f5f5f9;
  --surface: #ffffff;
  --border: #e4e4ea;
  --ink: #1f1f20;
  --text: #1f1f20;
  --text-dim: #5c5c66;

  --azul: #0a4fd6;
  --azul-oscuro: #072357;
  --azul-claro: #e7efff;
  --rojo: #d7263d;
  --rojo-oscuro: #b01a2f;
  --rojo-claro: #ffe9ec;
  --oro: #f2b632;

  --band-from: #072357;
  --band-to: #0a8fd6;

  --radius: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --container: 1200px;
  --nav-h: 72px;
  --shadow: 0 1px 2px rgba(16,16,20,.06), 0 8px 24px rgba(16,16,20,.06);
  --shadow-lg: 0 24px 48px rgba(16,16,20,.12);
}
:root.dark {
  --bg: #121214;
  --bg-alt: #1b1b1f;
  --surface: #1f1f24;
  --border: #303038;
  --text: #f3f3f6;
  --text-dim: #a8a8b4;
  --azul: #6aa1ff;
  --azul-claro: #16264a;
  --rojo: #ff5a6e;
  --rojo-claro: #3a1820;
  --shadow: 0 1px 2px rgba(0,0,0,.4), 0 8px 24px rgba(0,0,0,.35);
  --shadow-lg: 0 24px 48px rgba(0,0,0,.5);
}

/* ── Base ───────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; scroll-padding-top: calc(var(--nav-h) + 16px); }
html, body { margin: 0; }
body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
img, svg { display: block; max-width: 100%; }
a { color: inherit; }
h1, h2, h3 { font-family: var(--font-display); letter-spacing: -.02em; line-height: 1.1; margin: 0; }
p { margin: 0; }
:focus-visible { outline: 3px solid var(--azul); outline-offset: 3px; border-radius: 6px; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}

.layout { min-height: 100vh; display: flex; flex-direction: column; }
.layout > main { flex: 1; }

/* ── Utilidades compartidas ─────────────────────── */
.container { max-width: var(--container); margin: 0 auto; padding: 0 16px; }
@media (min-width: 640px) { .container { padding: 0 24px; } }
@media (min-width: 1024px) { .container { padding: 0 32px; } }

.section { padding: 64px 0; }
@media (min-width: 768px) { .section { padding: 96px 0; } }
.section-alt { background: var(--bg-alt); }

.eyebrow {
  display: inline-block; font-size: .78rem; font-weight: 700; letter-spacing: .14em;
  text-transform: uppercase; color: var(--azul); margin-bottom: 12px;
}
.h-display { font-size: clamp(2.4rem, 6vw, 4.5rem); font-weight: 900; }
.h-section { font-size: clamp(1.9rem, 4vw, 3rem); font-weight: 900; }
.lead { font-size: clamp(1.05rem, 1.6vw, 1.25rem); color: var(--text-dim); max-width: 640px; }
.center { text-align: center; margin-left: auto; margin-right: auto; }

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 28px; border-radius: 999px; border: 2px solid transparent;
  font-family: var(--font-sans); font-weight: 700; font-size: 1rem; text-decoration: none;
  cursor: pointer; transition: transform .15s ease, background .2s ease, box-shadow .2s ease;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: var(--rojo); color: #fff; box-shadow: 0 8px 20px rgba(215,38,61,.28); }
.btn-primary:hover { background: var(--rojo-oscuro); }
.btn-ink { background: var(--ink); color: #fff; }
:root.dark .btn-ink { background: #fff; color: var(--ink); }
.btn-outline { border-color: currentColor; color: var(--text); background: transparent; }
.btn-light { background: #fff; color: var(--ink); }

.pill {
  display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: .75rem;
  font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  background: var(--azul-claro); color: var(--azul);
}

.card {
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 28px; box-shadow: var(--shadow);
}

.grid-3 { display: grid; gap: 20px; grid-template-columns: 1fr; }
@media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
.grid-2 { display: grid; gap: 20px; grid-template-columns: 1fr; }
@media (min-width: 768px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }

.aviso {
  font-size: .85rem; color: var(--text-dim); border-left: 3px solid var(--oro);
  padding: 8px 14px; background: var(--bg-alt); border-radius: 0 8px 8px 0;
}

.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }

/* Cabecera de páginas internas */
.page-hero { padding: calc(var(--nav-h) + 56px) 0 56px; background: var(--bg-alt); border-bottom: 1px solid var(--border); }
.page-hero .lead { margin-top: 16px; }

/* Formularios */
.form { display: grid; gap: 14px; }
.form label { font-weight: 600; font-size: .9rem; display: grid; gap: 6px; }
.form input, .form textarea, .form select {
  font: inherit; padding: 12px 14px; border-radius: var(--radius); border: 1.5px solid var(--border);
  background: var(--surface); color: var(--text); width: 100%;
}
.form input:focus, .form textarea:focus, .form select:focus { border-color: var(--azul); outline: none; box-shadow: 0 0 0 3px var(--azul-claro); }
.msg { padding: 12px 16px; border-radius: var(--radius); font-weight: 600; }
.msg.ok { background: #dcfce7; color: #166534; }
.msg.error { background: var(--rojo-claro); color: var(--rojo); }
</style>
