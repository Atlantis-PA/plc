<template>
  <main id="main">
    <!-- Hero -->
    <section class="hero">
      <div class="decor" aria-hidden="true">
        <div class="tile t1"><span class="mono">print("¡Hola, Panamá!")</span></div>
        <div class="tile t2"><span class="pill">Taller</span><strong>Primeros pasos</strong></div>
        <div class="tile t3"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="mono">git push</span></div>
        <div class="tile t4"><strong>{ }</strong></div>
        <div class="tile t5"><span class="pill rojo">Proyecto</span><strong>En equipo</strong></div>
        <div class="tile t6"><strong>🇵🇦</strong></div>
      </div>
      <div class="container hero-inner">
        <h1 class="h-display">La comunidad para aprender a crear con tecnología en Panamá</h1>
        <p class="lead center">Talleres, proyectos colaborativos y comunidades que se apoyan. Aprende a programar y a entender los códigos del mundo para participar en él y transformarlo.</p>
        <div class="ctas">
          <RouterLink to="/participa" class="btn btn-primary">Participa</RouterLink>
          <RouterLink to="/organizadores" class="btn btn-outline">Organiza con PLC</RouterLink>
        </div>
      </div>
    </section>

    <!-- Pilares (franja de cifras) -->
    <section class="pilares" aria-label="Pilares de PLC">
      <div class="container fila-pilares">
        <div v-for="p in pilares" :key="p.valor" class="pilar">
          <span class="valor">{{ p.valor }}</span>
          <span class="etiqueta">{{ p.etiqueta }}</span>
        </div>
      </div>
    </section>

    <!-- Organiza / Alíate -->
    <section class="section">
      <div class="container grid-2">
        <RouterLink v-for="t in tarjetasAccion" :key="t.titulo" :to="t.to" class="accion" :class="t.tono">
          <h2>{{ t.titulo }}</h2>
          <p>{{ t.texto }}</p>
          <span class="flecha">{{ t.cta }} →</span>
        </RouterLink>
      </div>
    </section>

    <!-- Ecosistema -->
    <section class="section section-alt">
      <div class="container eco">
        <div>
          <span class="eyebrow">Ecosistema</span>
          <h2 class="h-section">Conectando el ecosistema tech de Panamá</h2>
          <p class="lead">Las comunidades ya hacen el trabajo más valioso: enseñar, reunir y acompañar. PLC se ocupa de lo administrativo y canaliza recursos para que ese trabajo crezca, sin quitarle a cada comunidad su identidad ni su liderazgo.</p>
          <p class="lead">Empezamos junto a <a href="https://pythonpanama.org" target="_blank" rel="noopener">Python Panamá</a> y sus programas:</p>
          <ul class="chips">
            <li v-for="p in programasComunidad" :key="p.nombre">
              <a v-if="p.url" :href="p.url" target="_blank" rel="noopener">{{ p.nombre }}</a>
              <span v-else>{{ p.nombre }}</span>
            </li>
          </ul>
          <RouterLink to="/comunidades" class="btn btn-ink">Conoce las comunidades</RouterLink>
        </div>
        <div class="red" aria-hidden="true">
          <div class="nodo centro">PLC</div>
          <div class="nodo n1">Comunidades</div>
          <div class="nodo n2">Personas</div>
          <div class="nodo n3">Aliados</div>
          <div class="nodo n4">Mentores</div>
          <svg class="lineas" viewBox="0 0 400 400" preserveAspectRatio="none">
            <line x1="200" y1="200" x2="80" y2="70" /><line x1="200" y1="200" x2="320" y2="70" />
            <line x1="200" y1="200" x2="80" y2="330" /><line x1="200" y1="200" x2="320" y2="330" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Rutas (banda con degradado) -->
    <section class="banda">
      <div class="container">
        <div class="banda-cabecera">
          <div>
            <span class="pill claro">En diseño</span>
            <h2 class="h-section">Rutas de aprendizaje</h2>
            <p class="sub">Aprende haciendo, en equipo.</p>
          </div>
          <p class="banda-texto">Estamos diseñando, con las comunidades, rutas que conectan aprender, construir, presentar y seguir creciendo. Suscríbete para enterarte cuando abran.</p>
        </div>
        <div class="grid-3">
          <article v-for="r in rutas" :key="r.titulo" class="ruta">
            <h3>{{ r.titulo }}</h3>
            <p>{{ r.texto }}</p>
          </article>
        </div>
        <RouterLink to="/participa#rutas" class="btn btn-light">Descubre más</RouterLink>
      </div>
    </section>

    <!-- Referentes -->
    <section class="section">
      <div class="container">
        <div class="center cabecera">
          <span class="eyebrow">Lo que nos inspira</span>
          <h2 class="h-section">Aprendemos de quienes abrieron camino</h2>
          <p class="lead center">Organizaciones que estudiamos como referencia para construir PLC. Mencionarlas no implica relación, alianza ni respaldo.</p>
        </div>
        <div class="grid-3">
          <a v-for="r in referentes" :key="r.nombre" :href="r.url" target="_blank" rel="noopener" class="card referente">
            <span class="pais">{{ r.pais }}</span>
            <h3>{{ r.nombre }}</h3>
            <p>{{ r.idea }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Novedades (sección oscura) -->
    <section class="novedades">
      <div class="container">
        <div class="cabecera-oscura">
          <h2 class="h-section">Novedades</h2>
          <p>Lo último sobre cómo se construye PLC.</p>
        </div>
        <div class="grid-3">
          <article v-for="n in novedades" :key="n.titulo" class="nota">
            <div class="meta"><span>{{ n.fecha }}</span><span class="cat">#{{ n.categoria }}</span></div>
            <h3>{{ n.titulo }}</h3>
            <p>{{ n.texto }}</p>
          </article>
        </div>
        <RouterLink to="/nosotros" class="btn btn-light">Conoce PLC</RouterLink>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container center cta-final">
        <h2 class="h-section">Aprende, construye y comparte con la comunidad tech de Panamá.</h2>
        <RouterLink to="/participa" class="btn btn-primary">Participa</RouterLink>
      </div>
    </section>

    <NewsletterSignup />
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import NewsletterSignup from '../components/NewsletterSignup.vue';
import { pilares, tarjetasAccion, programasComunidad, rutas, referentes, novedades } from '../data/contenido.js';
</script>

<style scoped>
/* Hero */
.hero { position: relative; overflow: hidden; padding: calc(var(--nav-h) + 56px) 0 56px; }
@media (min-width: 1024px) { .hero { padding: calc(var(--nav-h) + 96px) 0 96px; } }
.hero-inner { position: relative; z-index: 1; text-align: center; display: grid; gap: 24px; justify-items: center; }
.hero-inner h1 { max-width: 900px; }
.ctas { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
.mono { font-family: var(--font-mono); font-size: .8rem; }

.decor { display: none; }
@media (min-width: 1100px) {
  .decor { display: block; position: absolute; inset: 0; pointer-events: none; }
  .tile {
    position: absolute; display: flex; align-items: center; gap: 8px; padding: 14px 18px;
    background: var(--surface); border: 1px solid var(--border); border-radius: 18px; box-shadow: var(--shadow-lg);
    animation: flotar 7s ease-in-out infinite;
  }
  .tile strong { font-family: var(--font-display); font-size: 1.05rem; }
  .t1 { top: 22%; left: 3%; transform: rotate(-6deg); }
  .t2 { top: 60%; left: 6%; flex-direction: column; align-items: flex-start; animation-delay: -2s; }
  .t3 { top: 82%; left: 22%; animation-delay: -4s; }
  .t4 { top: 20%; right: 6%; width: 72px; height: 72px; justify-content: center; background: var(--azul); color: #fff; border: 0; animation-delay: -1s; }
  .t4 strong { font-size: 1.6rem; }
  .t5 { top: 55%; right: 3%; flex-direction: column; align-items: flex-start; animation-delay: -3s; }
  .t6 { top: 82%; right: 20%; width: 64px; height: 64px; justify-content: center; animation-delay: -5s; }
  .t6 strong { font-size: 1.8rem; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot.r { background: #ff5f57; } .dot.y { background: #febc2e; } .dot.g { background: #28c840; }
}
@keyframes flotar { 0%, 100% { translate: 0 0; } 50% { translate: 0 -10px; } }
.pill.rojo { background: var(--rojo-claro); color: var(--rojo); }

/* Pilares */
.pilares { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.fila-pilares { display: grid; grid-template-columns: 1fr; }
.pilar { display: grid; justify-items: center; text-align: center; padding: 36px 8px; }
.pilar + .pilar { border-top: 1px solid var(--border); }
@media (min-width: 768px) {
  .fila-pilares { grid-template-columns: repeat(3, 1fr); }
  .pilar + .pilar { border-top: 0; border-left: 1px solid var(--border); }
}
.valor { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.2rem, 5vw, 3.6rem); letter-spacing: -.03em; line-height: 1; }
.etiqueta { color: var(--text-dim); font-weight: 600; margin-top: 8px; text-transform: uppercase; letter-spacing: .12em; font-size: .8rem; }

/* Tarjetas de acción */
.accion {
  display: grid; gap: 14px; align-content: start; min-height: 240px; padding: 36px; border-radius: var(--radius-xl);
  text-decoration: none; color: #fff; transition: transform .2s ease, box-shadow .2s ease;
}
.accion:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.accion.azul { background: linear-gradient(135deg, #072357, #0a4fd6); }
.accion.rojo { background: linear-gradient(135deg, #8f1022, #d7263d); }
.accion h2 { font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 900; }
.accion p { opacity: .9; font-size: 1.05rem; max-width: 440px; }
.flecha { margin-top: auto; font-weight: 700; }

/* Ecosistema */
.eco { display: grid; gap: 48px; align-items: center; }
@media (min-width: 960px) { .eco { grid-template-columns: 1.1fr .9fr; } }
.eco .lead { margin-top: 16px; }
.eco .lead a { color: var(--azul); font-weight: 700; }
.chips { list-style: none; padding: 0; margin: 16px 0 28px; display: flex; flex-wrap: wrap; gap: 8px; }
.chips li > * { display: inline-block; padding: 8px 16px; border-radius: 999px; background: var(--surface); border: 1px solid var(--border); font-weight: 700; text-decoration: none; }
.chips a:hover { border-color: var(--azul); color: var(--azul); }
.red { position: relative; aspect-ratio: 1; max-width: 420px; width: 100%; margin: 0 auto; }
.lineas { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
.lineas line { stroke: var(--border); stroke-width: 3; stroke-dasharray: 6 8; }
.nodo { position: absolute; z-index: 1; translate: -50% -50%; padding: 10px 16px; border-radius: 999px; background: var(--surface); border: 1px solid var(--border); box-shadow: var(--shadow); font-weight: 700; white-space: nowrap; font-size: .95rem; }
.nodo.centro { left: 50%; top: 50%; width: 120px; height: 120px; display: grid; place-items: center; background: var(--rojo); color: #fff; border: 0; font-family: var(--font-display); font-size: 1.8rem; }
.n1 { left: 20%; top: 17.5%; } .n2 { left: 80%; top: 17.5%; } .n3 { left: 20%; top: 82.5%; } .n4 { left: 80%; top: 82.5%; }

/* Banda */
.banda { background: linear-gradient(90deg, var(--band-from) 20%, var(--band-to) 85%); color: #fff; padding: 72px 0; }
@media (min-width: 768px) { .banda { padding: 96px 0; } }
.banda-cabecera { display: grid; gap: 24px; margin-bottom: 36px; }
@media (min-width: 900px) { .banda-cabecera { grid-template-columns: 1fr 1fr; align-items: end; } }
.pill.claro { background: rgba(255,255,255,.18); color: #fff; margin-bottom: 12px; }
.sub { font-size: 1.25rem; font-weight: 700; margin-top: 8px; }
.banda-texto { opacity: .92; font-size: 1.05rem; }
.ruta { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.22); border-radius: var(--radius-lg); padding: 28px; display: grid; gap: 10px; }
.ruta h3 { font-size: 1.35rem; font-weight: 800; }
.ruta p { opacity: .9; }
.banda .btn { margin-top: 36px; }

/* Referentes */
.cabecera { margin-bottom: 40px; display: grid; gap: 12px; justify-items: center; }
.referente { display: grid; gap: 8px; text-decoration: none; transition: transform .2s ease, border-color .2s ease; }
.referente:hover { transform: translateY(-3px); border-color: var(--azul); }
.referente h3 { font-size: 1.2rem; font-weight: 800; }
.referente p { color: var(--text-dim); }
.pais { font-size: .75rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--azul); }

/* Novedades */
.novedades { background: #000; color: #fff; padding: 72px 0; }
@media (min-width: 1024px) { .novedades { padding: 140px 0; } }
.cabecera-oscura { margin-bottom: 40px; display: grid; gap: 8px; }
.cabecera-oscura p { color: #b9b9c4; font-size: 1.1rem; }
.nota { border: 1px solid #2e2e34; border-radius: var(--radius-lg); padding: 28px; display: grid; gap: 12px; align-content: start; background: #111114; }
.meta { display: flex; justify-content: space-between; font-size: .8rem; font-weight: 700; letter-spacing: .08em; color: #b9b9c4; }
.cat { color: var(--oro); }
.nota h3 { font-size: 1.25rem; font-weight: 800; }
.nota p { color: #c9c9d2; }
.novedades .btn { margin-top: 36px; }

/* CTA */
.cta-final { display: grid; gap: 28px; justify-items: center; max-width: 860px; }
</style>
