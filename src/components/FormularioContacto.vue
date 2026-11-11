<template>
  <div class="card">
    <form v-if="!hecho" class="form" name="contacto" method="POST" data-netlify="true" netlify-honeypot="bot-field" @submit.prevent="enviar">
      <input type="hidden" name="form-name" value="contacto" />
      <input type="hidden" name="tipo" :value="tipo" />
      <p class="sr-only"><label>No llenar: <input name="bot-field" /></label></p>
      <label>Nombre <input v-model="f.nombre" name="nombre" required autocomplete="name" /></label>
      <label>Correo electrónico <input v-model="f.email" name="email" type="email" required autocomplete="email" /></label>
      <label>{{ etiquetaOrganizacion }} <input v-model="f.organizacion" name="organizacion" autocomplete="organization" /></label>
      <label>Mensaje <textarea v-model="f.mensaje" name="mensaje" rows="5" required :placeholder="placeholder"></textarea></label>
      <p class="privacidad">Usaremos estos datos solo para responderte. No los compartimos con terceros.</p>
      <button class="btn btn-primary" type="submit" :disabled="cargando">{{ cargando ? 'Enviando…' : 'Enviar' }}</button>
    </form>
    <p v-else class="msg ok" role="status">¡Gracias! Recibimos tu mensaje y te responderemos.</p>
    <p v-if="error" class="msg error" role="alert">{{ error }}</p>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { enviarFormulario } from '../utils/formularios.js';

const props = defineProps({
  tipo: { type: String, required: true },
  etiquetaOrganizacion: { type: String, default: 'Organización o comunidad (opcional)' },
  placeholder: { type: String, default: '' },
});

const f = reactive({ nombre: '', email: '', organizacion: '', mensaje: '' });
const cargando = ref(false);
const hecho = ref(false);
const error = ref('');

async function enviar() {
  cargando.value = true; error.value = '';
  try {
    await enviarFormulario('contacto', { tipo: props.tipo, ...f });
    hecho.value = true;
  } catch {
    error.value = 'No pudimos enviar el mensaje. Intenta de nuevo.';
  } finally {
    cargando.value = false;
  }
}
</script>

<style scoped>
.privacidad { font-size: .85rem; color: var(--text-dim); }
.form .btn { justify-self: start; }
</style>
