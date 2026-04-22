<template>
  <section class="stats">
    <div class="stats-inner">
      <p class="overline" v-reveal>Nuestra comunidad en números</p>
      <div class="wrap">
        <div
          v-for="(s, i) in stats"
          :key="s.label"
          class="stat"
          v-reveal="{ delay: 80 + i * 90 }"
        >
          <div class="ring" :style="{ '--accent': isLight ? s.colorLight : s.color }">
            <svg viewBox="0 0 80 80" class="ring-svg" aria-hidden="true">
              <circle cx="40" cy="40" r="34" class="ring-track" />
              <circle cx="40" cy="40" r="34" class="ring-fill" :style="{ '--pct': s.pct }" />
            </svg>
            <span class="ring-value">{{ s.value }}</span>
          </div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';
const isLight = inject('isLight', false);

// Colors chosen to pass WCAG AA (>=4.5:1) on both dark (#0f2027) and light (#f8fafb) backgrounds
const stats = [
  { value: '+350', label: 'Miembros activos',     pct: 0.88, color: '#00b894', colorLight: '#0a7a5e' },
  { value: '24',   label: 'Proyectos abiertos',   pct: 0.60, color: '#6dd5ed', colorLight: '#0e7490' },
  { value: '18',   label: 'Eventos realizados',   pct: 0.45, color: '#c084fc', colorLight: '#7c3aed' },
  { value: '7',    label: 'Mentores voluntarios', pct: 0.35, color: '#fbbf24', colorLight: '#92400e' },
];
</script>

<style scoped>
.stats {
  padding: 6rem 1.5rem;
  position: relative;
}
.stats-inner {
  max-width: 960px;
  margin: 0 auto;
}
.overline {
  text-align: center;
  font-size: .72rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-accent);
  margin: 0 0 2.5rem;
}

.wrap {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2rem 1rem 1.6rem;
  backdrop-filter: blur(8px);
  transition: transform .4s cubic-bezier(.16,.8,.24,1), background .4s, border-color .4s, box-shadow .4s;
}
.stat:hover {
  transform: translateY(-6px);
  background: var(--color-surface-hover);
  border-color: var(--color-border-strong);
  box-shadow: 0 20px 40px -16px rgba(0,0,0,.45);
}

/* Anillo SVG */
.ring {
  position: relative;
  width: 80px; height: 80px;
  display: flex; align-items: center; justify-content: center;
}
.ring-svg {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  transform: rotate(-90deg);
}
.ring-track {
  fill: none;
  stroke: var(--color-border);
  stroke-width: 5;
}
.ring-fill {
  fill: none;
  stroke: var(--accent);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: calc(var(--pct) * 213.6) 213.6;
  filter: drop-shadow(0 0 4px var(--accent));
  transition: stroke-dasharray 1.2s cubic-bezier(.16,.8,.24,1);
}
.ring-value {
  position: relative;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: .5px;
  line-height: 1;
}

.stat-label {
  font-size: .72rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-text-dim);
  text-align: center;
}
</style>
