<template>
  <div :class="['layout', isLight ? 'light' : 'dark']">
    <NavBar :is-light="isLight" @toggleTheme="toggleTheme" />
    <RouterView />
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';

const isLight = ref(true);

function applyTheme() {
  document.documentElement.classList.toggle('light', isLight.value);
  localStorage.setItem('plc-theme', isLight.value ? 'light' : 'dark');
}
function toggleTheme() { isLight.value = !isLight.value; applyTheme(); }

onMounted(() => {
  const saved = localStorage.getItem('plc-theme');
  isLight.value = saved ? saved === 'light' : window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme();
});

provide('isLight', isLight);
</script>

<style>
/* ── Design tokens ───────────────────────────────── */
:root {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --bg:        #ffffff;
  --bg-alt:    #f4f6f9;
  --bg-dark:   #0d1321;
  --surface:   #ffffff;
  --border:    #e2e6ed;
  --text:      #0d1321;
  --text-dim:  #5a6478;
  --blue:      #1a56db;
  --blue-dark: #1239a6;
  --blue-light:#dbeafe;
  --radius:    10px;
  --radius-lg: 16px;
  --container: 1140px;
  --shadow:    0 2px 12px rgba(0,0,0,.08);
  --shadow-md: 0 6px 24px rgba(0,0,0,.11);
  --nav-h:     68px;
}
.dark {
  --bg:        #0d1321;
  --bg-alt:    #141b2d;
  --surface:   #1a2238;
  --border:    #2a3550;
  --text:      #f0f4ff;
  --text-dim:  #8b9ab8;
  --blue:      #60a5fa;
  --blue-dark: #3b82f6;
  --blue-light:#1e3a5f;
  --shadow:    0 2px 12px rgba(0,0,0,.35);
  --shadow-md: 0 6px 24px rgba(0,0,0,.45);
}

/* ── Reset ───────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
html, body { margin: 0; min-height: 100%; }
body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  transition: background .3s, color .3s;
}
img { display: block; max-width: 100%; }

:focus-visible { outline: 3px solid var(--blue); outline-offset: 3px; border-radius: 4px; }

.skip-link {
  position: absolute; left: -999px; top: auto; width: 1px; height: 1px; overflow: hidden;
}
.skip-link:focus {
  left: 1rem; top: 1rem; width: auto; height: auto;
  padding: .6rem 1.2rem; background: var(--blue); color: #fff;
  border-radius: var(--radius); z-index: 999; font-weight: 600;
  text-decoration: none;
}

*::-webkit-scrollbar { width: 8px; }
*::-webkit-scrollbar-track { background: var(--bg-alt); }
*::-webkit-scrollbar-thumb { background: var(--blue); border-radius: 8px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}

.layout { min-height: 100vh; display: flex; flex-direction: column; }

/* ── Shared page utility classes ─────────────────── */
.page-hero {
  padding: calc(var(--nav-h) + 3.5rem) 1.5rem 4rem;
  background: var(--bg-alt);
  border-bottom: 1px solid var(--border);
}
.page-hero-inner { max-width: var(--container); margin: 0 auto; }
.page-hero .overline {
  font-size: .78rem; font-weight: 700; letter-spacing: 1.8px;
  text-transform: uppercase; color: var(--blue); margin: 0 0 .8rem;
}
.page-hero h1 {
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -.03em; color: var(--text);
  margin: 0 0 1rem; line-height: 1.15;
}
.page-hero p {
  font-size: 1.05rem; color: var(--text-dim);
  line-height: 1.7; margin: 0; max-width: 620px;
}

.page-body { flex: 1; padding: 4rem 1.5rem; }
.page-body-inner { max-width: var(--container); margin: 0 auto; }

.section-label {
  font-size: .78rem; font-weight: 700; letter-spacing: 1.8px;
  text-transform: uppercase; color: var(--blue); margin: 0 0 .6rem;
}
.section-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800;
  letter-spacing: -.03em; color: var(--text);
  margin: 0 0 2rem; line-height: 1.2;
}
</style>
