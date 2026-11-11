<template>
  <main id="main">
    <header class="page-hero">
      <div class="container">
        <span class="eyebrow">Organizadores</span>
        <h1 class="h-display">Organiza con el respaldo de PLC</h1>
        <p class="lead">Tu comunidad pone las ideas, las personas y el liderazgo. PLC te ayuda con lo administrativo para que puedas concentrarte en lo que importa.</p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h2 class="h-section">En qué podemos apoyarte</h2>
        <div class="grid-3 espacio">
          <article v-for="a in apoyos" :key="a.titulo" class="card">
            <span class="icono" aria-hidden="true">{{ a.icono }}</span>
            <h3>{{ a.titulo }}</h3>
            <p>{{ a.texto }}</p>
          </article>
        </div>
        <p class="aviso">Estamos preparando un kit para comunidades organizadoras. El alcance del apoyo dependerá de los recursos disponibles y de la aprobación de cada solicitud.</p>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container grid-2">
        <div>
          <h2 class="h-section">Tu comunidad, tus decisiones</h2>
          <ul class="principios">
            <li>Cada comunidad conserva su nombre, su identidad, su liderazgo y su cultura.</li>
            <li>El contenido, el calendario y las vocerías de un programa los decide su comunidad.</li>
            <li>Ningún aliado, logo o cifra se publica sin permiso escrito.</li>
            <li>Cada aporte se registra y se rinde cuentas por programa.</li>
          </ul>
        </div>
        <div id="solicitud">
          <h2 class="h-section">Solicita apoyo</h2>
          <p class="dim">Cuéntanos qué quieres organizar y qué necesitas.</p>
          <FormularioContacto tipo="organizadores" etiqueta-organizacion="Comunidad u organización"
            placeholder="Qué actividad planeas, para quién, cuándo y qué apoyo necesitas." />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import FormularioContacto from '../components/FormularioContacto.vue';

const apoyos = [
  { icono: '🗓️', titulo: 'Planificación', texto: 'Guías para pasar de la idea a un plan con objetivos, calendario y responsables.' },
  { icono: '💰', titulo: 'Presupuesto y fondos', texto: 'Plantillas de presupuesto y orden en los aportes, con rendición de cuentas por programa.' },
  { icono: '📦', titulo: 'Logística', texto: 'Listas de verificación para espacios, materiales, transmisión y voluntariado.' },
  { icono: '📣', titulo: 'Comunicación', texto: 'Apoyo para anunciar tu actividad respetando permisos de marca y de imagen.' },
  { icono: '🛡️', titulo: 'Cuidado de participantes', texto: 'Código de conducta, protección de datos y medidas para actividades con menores.' },
  { icono: '🤝', titulo: 'Aliados', texto: 'Conexión con organizaciones que puedan aportar espacios, mentoría o recursos.' },
];
</script>

<style scoped>
h3 { font-size: 1.25rem; font-weight: 800; margin: 12px 0 8px; }
.card p, .dim { color: var(--text-dim); }
.icono { font-size: 1.8rem; }
.espacio { margin: 32px 0 24px; }
.principios { padding-left: 20px; display: grid; gap: 12px; margin-top: 24px; font-size: 1.05rem; }
#solicitud { display: grid; gap: 12px; align-content: start; }
</style>
