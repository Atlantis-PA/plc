<template>
  <section id="hero" class="hero">
    <div class="hero-inner">
      <div class="hero-label">Comunidad · Panamá</div>
      <h1>Aprende a programar.<br />Construye el futuro<br /><em>de Panamá.</em></h1>
      <p class="hero-sub">
        Panama Learning Code es un ecosistema sin fines de lucro que conecta a personas
        con recursos, mentores y eventos para crecer en tecnología.
      </p>
      <div class="hero-ctas">
        <a href="#features" class="btn btn-primary">Explorar el programa</a>
        <a href="#newsletter" class="btn btn-outline">Unirse a la comunidad</a>
      </div>
      <div class="hero-trust">
        <span>Más de <strong>350 miembros</strong> activos</span>
        <span class="sep" aria-hidden="true">·</span>
        <span><strong>18 eventos</strong> realizados</span>
        <span class="sep" aria-hidden="true">·</span>
        <span><strong>100% gratuito</strong></span>
      </div>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="code-card">
        <div class="code-header">
          <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
          <span class="file">aprender.py</span>
        </div>
        <pre class="code-body">comunidad = {
    <span class="str">"miembros"</span>: <span class="num">350</span>,
    <span class="str">"proyectos"</span>: <span class="num">24</span>,
    <span class="str">"eventos"</span>:   <span class="num">18</span>,
    <span class="str">"mentores"</span>:  <span class="num">7</span>,
}

<span class="kw">def</span> <span class="fn">crecer</span>():
    <span class="kw">return</span> (
        comunidad
        .aprender()
        .colaborar()
        .conectar()
    )</pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 68px; /* nav height */
  min-height: 100svh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  max-width: var(--container);
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 5rem;
}

.hero-inner { max-width: 560px; }

.hero-label {
  display: inline-block;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--blue);
  background: var(--blue-light);
  padding: .35rem .9rem;
  border-radius: 999px;
  margin-bottom: 1.6rem;
}

h1 {
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -.03em;
  color: var(--text);
  margin: 0 0 1.4rem;
}
h1 em {
  font-style: normal;
  color: var(--blue);
}

.hero-sub {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-dim);
  margin: 0 0 2.2rem;
  max-width: 480px;
}

.hero-ctas {
  display: flex;
  gap: .9rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: .8rem 1.6rem;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: .95rem;
  text-decoration: none;
  transition: transform .15s, box-shadow .15s, background .2s;
}
.btn-primary {
  background: var(--blue);
  color: #fff;
  box-shadow: 0 4px 14px rgba(26,86,219,.3);
}
.btn-primary:hover { background: var(--blue-dark); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(26,86,219,.35); }
.btn-outline {
  background: transparent;
  color: var(--text);
  border: 1.5px solid var(--border);
}
.btn-outline:hover { background: var(--bg-alt); transform: translateY(-1px); }

.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem 1rem;
  font-size: .85rem;
  color: var(--text-dim);
  align-items: center;
}
.hero-trust strong { color: var(--text); }
.sep { opacity: .4; }

/* Code card */
.hero-visual {
  display: flex;
  justify-content: center;
}
.code-card {
  background: #0d1321;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md), 0 0 0 1px rgba(255,255,255,.06);
  overflow: hidden;
  width: 100%;
  max-width: 420px;
}
.code-header {
  display: flex;
  align-items: center;
  gap: .45rem;
  padding: .9rem 1.2rem;
  background: #141b2d;
  border-bottom: 1px solid rgba(255,255,255,.07);
}
.dot { width: 11px; height: 11px; border-radius: 50%; }
.dot.red    { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green  { background: #28c840; }
.file {
  margin-left: .5rem;
  font-family: var(--font-mono);
  font-size: .78rem;
  color: rgba(255,255,255,.45);
}
.code-body {
  margin: 0;
  padding: 1.5rem 1.4rem;
  font-family: var(--font-mono);
  font-size: .82rem;
  line-height: 1.75;
  color: #c9d1e3;
  white-space: pre;
  overflow-x: auto;
}
.kw  { color: #60a5fa; }
.fn  { color: #93c5fd; }
.num { color: #f0abfc; }
.str { color: #86efac; }

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: calc(68px + 3rem);
    padding-bottom: 3rem;
    gap: 2.5rem;
  }
  .hero-visual { display: none; }
}
</style>
