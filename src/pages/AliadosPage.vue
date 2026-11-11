<template>
  <main id="main">
    <header class="page-hero">
      <div class="container">
        <span class="eyebrow">Aliados</span>
        <h1 class="h-display">Impulsa el talento tech de Panamá</h1>
        <p class="lead">Empresas, universidades, instituciones y organizaciones pueden ayudar a que más personas aprendan a crear con tecnología.</p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h2 class="h-section">Formas de apoyar</h2>
        <div class="grid-3 espacio">
          <article v-for="f in formas" :key="f.titulo" class="card">
            <span class="icono" aria-hidden="true">{{ f.icono }}</span>
            <h3>{{ f.titulo }}</h3>
            <p>{{ f.texto }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container grid-2">
        <div>
          <h2 class="h-section">Cómo trabajamos con aliados</h2>
          <ul class="principios">
            <li>Cada apoyo se destina al programa acordado y se rinde cuentas.</li>
            <li>Los acuerdos con fondos, aportes en especie, firma o exclusividad los aprueba la Junta y la comunidad beneficiada.</li>
            <li>Ningún logo ni mención se publica sin permiso escrito de ambas partes.</li>
            <li>Mientras PLC esté en formación, documentamos qué entidad recibe cada aporte antes de aceptarlo.</li>
          </ul>
        </div>
        <div id="contacto">
          <h2 class="h-section">Hablemos</h2>
          <p class="dim">Cuéntanos cómo te gustaría apoyar.</p>
          <FormularioContacto tipo="aliados" etiqueta-organizacion="Organización"
            placeholder="Qué tipo de apoyo te interesa y a qué población o programa." />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import FormularioContacto from '../components/FormularioContacto.vue';

const formas = [
  { icono: '🏫', titulo: 'Espacios', texto: 'Salas, laboratorios o auditorios para talleres y encuentros.' },
  { icono: '🧑‍🏫', titulo: 'Mentoría', texto: 'Profesionales que acompañan proyectos y comparten experiencia.' },
  { icono: '🛠️', titulo: 'Herramientas', texto: 'Licencias, créditos en la nube o equipos para aprender y construir.' },
  { icono: '🎓', titulo: 'Formación', texto: 'Contenidos, becas o certificaciones para quienes participan.' },
  { icono: '💙', titulo: 'Financiamiento', texto: 'Aportes destinados a un programa, con presupuesto y rendición de cuentas.' },
  { icono: '📢', titulo: 'Difusión', texto: 'Ayuda para que las oportunidades lleguen a más personas en todo Panamá.' },
];
</script>

<style scoped>
h3 { font-size: 1.25rem; font-weight: 800; margin: 12px 0 8px; }
.card p, .dim { color: var(--text-dim); }
.icono { font-size: 1.8rem; }
.espacio { margin-top: 32px; }
.principios { padding-left: 20px; display: grid; gap: 12px; margin-top: 24px; font-size: 1.05rem; }
#contacto { display: grid; gap: 12px; align-content: start; }
</style>
