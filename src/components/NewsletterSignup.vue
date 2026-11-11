<template>
  <section id="boletin" class="section boletin">
    <div class="container center contenido">
      <h2 class="h-section">Mantente al tanto</h2>
      <p class="lead center">Entérate de nuevas actividades, rutas de aprendizaje y oportunidades de la comunidad tech de Panamá. Sin spam.</p>

      <form v-if="!hecho" class="fila" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" @submit.prevent="enviar">
        <input type="hidden" name="form-name" value="newsletter" />
        <p class="sr-only"><label>No llenar: <input name="bot-field" /></label></p>
        <label for="nl-email" class="sr-only">Correo electrónico</label>
        <input id="nl-email" v-model="email" name="email" type="email" required autocomplete="email" placeholder="tu@correo.com" :disabled="cargando" />
        <button class="btn btn-primary" type="submit" :disabled="cargando">{{ cargando ? 'Enviando…' : 'Suscribirme' }}</button>
      </form>
      <p v-if="hecho" class="msg ok" role="status">¡Gracias! Te escribiremos cuando haya novedades.</p>
      <p v-if="error" class="msg error" role="alert">{{ error }}</p>
      <p class="nota">Usaremos tu correo solo para enviarte novedades de PLC. Puedes darte de baja cuando quieras.</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { enviarFormulario } from '../utils/formularios.js';

const email = ref('');
const cargando = ref(false);
const hecho = ref(false);
const error = ref('');

async function enviar() {
  cargando.value = true; error.value = '';
  try {
    await enviarFormulario('newsletter', { email: email.value });
    hecho.value = true; email.value = '';
  } catch {
    error.value = 'No pudimos registrar tu correo. Intenta de nuevo.';
  } finally {
    cargando.value = false;
  }
}
</script>

<style scoped>
.boletin { padding-top: 96px; padding-bottom: 120px; }
.contenido { display: grid; gap: 20px; justify-items: center; }
.fila { display: flex; flex-wrap: wrap; gap: 10px; width: 100%; max-width: 520px; margin-top: 8px; }
.fila input { flex: 1 1 240px; min-width: 0; font: inherit; padding: 14px 18px; border-radius: 999px; border: 1.5px solid var(--border); background: var(--surface); color: var(--text); }
.fila input:focus { outline: none; border-color: var(--azul); box-shadow: 0 0 0 3px var(--azul-claro); }
.fila .btn { flex: 1 0 auto; }
.nota { font-size: .85rem; color: var(--text-dim); max-width: 480px; }
</style>
