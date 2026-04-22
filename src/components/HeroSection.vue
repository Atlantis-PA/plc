<template>
  <section class="hero" v-reveal>
    <div class="hero-inner">
      <h1 class="gradient-title" v-html="displayedTitle" />
      <p class="tagline" v-reveal.delay="120">Ecosistema colaborativo para aprender a programar, crear proyectos y crecer profesionalmente en Panamá.</p>
      <div class="hero-ctas" v-reveal.delay="220">
        <a href="#features" class="btn primary">Explorar</a>
        <a href="#newsletter" class="btn ghost">Unirme</a>
      </div>
    </div>
    <canvas ref="canvas" class="particles" aria-hidden="true"></canvas>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const fullTitle = 'Panama <span class="thin">Learning</span> Code';
const displayedTitle = ref('');
const canvas = ref(null);
let frame, idx = 0;

function typeLoop() {
  if (idx <= fullTitle.length) {
    displayedTitle.value = fullTitle.slice(0, idx);
    idx++;
    setTimeout(typeLoop, 55);
  }
}

// Simple partículas sutiles
function initParticles() {
  const ctx = canvas.value.getContext('2d');
  const particles = Array.from({ length: 42 }, () => ({
    x: Math.random() * canvas.value.width,
    y: Math.random() * canvas.value.height,
    r: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2
  }));
  function resize() {
    canvas.value.width = canvas.value.offsetWidth * devicePixelRatio;
    canvas.value.height = canvas.value.offsetHeight * devicePixelRatio;
  }
  resize();
  function loop() {
    ctx.clearRect(0,0,canvas.value.width, canvas.value.height);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.value.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.value.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    });
    frame = requestAnimationFrame(loop);
  }
  window.addEventListener('resize', resize);
  loop();
}

onMounted(() => {
  typeLoop();
  initParticles();
});
onBeforeUnmount(() => cancelAnimationFrame(frame));
</script>

<style scoped>
.hero { position: relative; padding: clamp(5rem,10vw,8rem) 1.5rem 5rem; text-align: center; overflow: hidden; }
.hero-inner { max-width: 960px; margin: 0 auto; }
.gradient-title { font-size: clamp(2.8rem, 8vw, 5rem); line-height: 1.05; font-weight: 800; background: var(--grad-hero, linear-gradient(90deg,#6dd5ed,#2193b0,#00b894,#6dd5ed)); background-size: 300% 100%; -webkit-background-clip: text; color: transparent; animation: slideGradient 14s ease infinite; }
.gradient-title .thin { font-weight: 300; }
@keyframes slideGradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
.tagline { font-size: clamp(1.1rem,2.1vw,1.5rem); margin: 1.3rem auto 2rem; max-width: 780px; color: var(--color-text-dim); }
.hero-ctas { display: flex; justify-content: center; gap: 1rem; }
.btn { --bg:var(--color-accent); --bg2:var(--color-accent-alt); position: relative; display: inline-flex; align-items: center; justify-content:center; padding: .95rem 1.9rem; font-weight:600; border-radius: var(--radius); text-decoration:none; font-size:1rem; letter-spacing:.5px; backdrop-filter: blur(6px); transition: background .3s, transform .25s, box-shadow .25s; }
.btn.primary { background: linear-gradient(135deg,var(--bg),var(--bg2)); color:#fff; box-shadow:0 6px 25px -10px rgba(0,184,148,.35); }
.btn.primary:hover { transform: translateY(-3px); box-shadow:0 12px 32px -8px rgba(0,184,148,.45); }
.btn.ghost { background: var(--color-surface); color:var(--color-text); border:1px solid var(--color-border); }
.btn.ghost:hover { background: var(--color-surface-hover); }
.particles { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
</style>
