<template>
  <section class="hero" id="hero">
    <div class="hero-bg-orb orb1" aria-hidden="true"></div>
    <div class="hero-bg-orb orb2" aria-hidden="true"></div>
    <div class="hero-bg-orb orb3" aria-hidden="true"></div>
    <div class="hero-inner">
      <div class="badge-pill" v-reveal>
        <span class="dot" aria-hidden="true"></span>
        Comunidad tech · Panamá
      </div>
      <h1 class="gradient-title" v-html="displayedTitle" v-reveal="{ delay: 60 }" />
      <p class="tagline" v-reveal="{ delay: 160 }">
        Ecosistema colaborativo para aprender a programar,<br class="br" />
        crear proyectos y crecer profesionalmente.
      </p>
      <div class="hero-ctas" v-reveal="{ delay: 260 }">
        <a href="#features" class="btn primary">
          <span>Explorar</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#newsletter" class="btn ghost">Unirme gratis</a>
      </div>
      <div class="hero-pills" v-reveal="{ delay: 360 }">
        <span v-for="t in tags" :key="t" class="pill">{{ t }}</span>
      </div>
    </div>
    <canvas ref="canvas" class="particles" aria-hidden="true"></canvas>
    <div class="hero-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg)" opacity="0.6"/>
        <path d="M0,60 C480,20 960,80 1440,50 L1440,80 L0,80 Z" fill="var(--color-bg)"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const fullTitle = 'Panama <span class="thin">Learning</span> Code';
const displayedTitle = ref('');
const canvas = ref(null);
const tags = ['JavaScript', 'Python', 'Open Source', 'Eventos', 'Mentoría'];
let frame, idx = 0;

function typeLoop() {
  if (idx <= fullTitle.length) {
    displayedTitle.value = fullTitle.slice(0, idx);
    idx++;
    setTimeout(typeLoop, 50);
  }
}

function initParticles() {
  const ctx = canvas.value.getContext('2d');
  const particles = Array.from({ length: 55 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.8 + 0.4,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    alpha: Math.random() * 0.4 + 0.15,
  }));

  function resize() {
    canvas.value.width = canvas.value.offsetWidth * devicePixelRatio;
    canvas.value.height = canvas.value.offsetHeight * devicePixelRatio;
  }
  resize();
  window.addEventListener('resize', resize);

  function loop() {
    const w = canvas.value.width, h = canvas.value.height;
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx / w * devicePixelRatio;
      p.y += p.vy / h * devicePixelRatio;
      if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
      if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, p.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(109,213,237,${p.alpha})`;
      ctx.fill();
    });
    frame = requestAnimationFrame(loop);
  }
  loop();
}

onMounted(() => { typeLoop(); initParticles(); });
onBeforeUnmount(() => cancelAnimationFrame(frame));
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(6rem, 12vw, 10rem) 1.5rem 6rem;
  text-align: center;
  overflow: hidden;
}

/* Orbes de fondo */
.hero-bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: .18;
  animation: drift 20s ease-in-out infinite alternate;
}
.orb1 { width: 500px; height: 500px; background: #2193b0; top: -120px; left: -100px; animation-duration: 22s; }
.orb2 { width: 400px; height: 400px; background: #00b894; bottom: 60px; right: -80px; animation-duration: 18s; animation-delay: -6s; }
.orb3 { width: 300px; height: 300px; background: #7f00ff; top: 40%; left: 50%; transform: translate(-50%,-50%); animation-duration: 28s; animation-delay: -12s; opacity: .10; }
@keyframes drift {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(30px, -20px) scale(1.05); }
  100% { transform: translate(-20px, 30px) scale(.97); }
}
.orb3 { animation-name: drift3; }
@keyframes drift3 {
  0%   { transform: translate(-50%, -50%) scale(1); }
  100% { transform: translate(calc(-50% + 40px), calc(-50% - 30px)) scale(1.1); }
}

/* Badge pill */
.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  background: rgba(0,184,148,.12);
  border: 1px solid rgba(0,184,148,.3);
  color: var(--color-accent);
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: .4rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.6rem;
  backdrop-filter: blur(8px);
}
.dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 6px var(--color-accent);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .5; transform: scale(.7); }
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gradient-title {
  font-size: clamp(3rem, 9vw, 5.5rem);
  line-height: 1.03;
  font-weight: 800;
  margin: 0 0 1.4rem;
  background: linear-gradient(90deg, #6dd5ed, #2193b0, #00b894, #6dd5ed);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: slideGradient 14s ease infinite;
  min-height: 1.1em;
}
.gradient-title :deep(.thin) { font-weight: 300; }
@keyframes slideGradient {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.tagline {
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);
  margin: 0 auto 2.2rem;
  max-width: 640px;
  color: var(--color-text-dim);
  line-height: 1.65;
}
.br { display: none; }
@media (min-width: 600px) { .br { display: inline; } }

/* CTAs */
.hero-ctas {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.2rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  padding: .95rem 1.9rem;
  font-weight: 600;
  border-radius: var(--radius);
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: .4px;
  transition: transform .25s, box-shadow .25s, background .3s;
}
.btn.primary {
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-alt));
  color: #fff;
  box-shadow: 0 8px 28px -10px rgba(0,184,148,.45);
}
.btn.primary:hover { transform: translateY(-3px); box-shadow: 0 16px 36px -10px rgba(0,184,148,.55); }
.btn.ghost {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  backdrop-filter: blur(8px);
}
.btn.ghost:hover { background: var(--color-surface-hover); transform: translateY(-2px); }

/* Pills de tecnologías */
.hero-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
}
.pill {
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .8px;
  padding: .3rem .85rem;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-dim);
  backdrop-filter: blur(6px);
  transition: color .3s, border-color .3s, background .3s;
}
.pill:hover { color: var(--color-text); border-color: var(--color-border-strong); background: var(--color-surface-hover); }

/* Canvas partículas */
.particles {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
}

/* Onda inferior */
.hero-wave {
  position: absolute;
  bottom: -1px; left: 0; right: 0;
  line-height: 0;
}
.hero-wave svg { width: 100%; height: 80px; }
</style>
