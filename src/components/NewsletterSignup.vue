<template>
  <section id="newsletter" class="newsletter" v-reveal>
    <h2>Mantente al día</h2>
    <p>Recibe noticias sobre eventos, recursos y oportunidades en el ecosistema tech panameño.</p>
    <form
      v-if="!done"
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="submit"
      class="form"
      v-reveal.delay="120"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <input name="bot-field" style="display:none" aria-hidden="true" />
      <input
        v-model="email"
        name="email"
        type="email"
        required
        placeholder="tu@correo.com"
        :disabled="loading"
      />
      <button class="btn primary" type="submit" :disabled="loading">
        {{ loading ? 'Enviando…' : 'Suscribirme' }}
      </button>
    </form>
    <p v-if="error" class="err">{{ error }}</p>
    <p v-if="done" class="ok" v-reveal>¡Gracias! Te escribiremos pronto.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const loading = ref(false);
const done = ref(false);
const error = ref('');

async function submit() {
  loading.value = true;
  error.value = '';
  try {
    const body = new URLSearchParams({ 'form-name': 'newsletter', email: email.value });
    const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
    if (!res.ok) throw new Error('Error al enviar');
    done.value = true;
    email.value = '';
  } catch {
    error.value = 'Algo salió mal. Intenta de nuevo en un momento.';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.newsletter { padding: 6rem 1.5rem 7rem; max-width:760px; margin:0 auto; text-align:center; }
.newsletter h2 { font-size: clamp(2rem,4vw,3rem); margin:0 0 1rem; }
.newsletter p { margin:.2rem auto 1.6rem; max-width:620px; font-size:1.05rem; color:var(--color-text-dim); }
.form { display:flex; gap:.9rem; justify-content:center; flex-wrap:wrap; }
.form input { flex:1 1 260px; min-width:230px; padding:.95rem 1rem; border-radius:var(--radius); border:1px solid var(--color-border); font-size:1rem; background: var(--color-surface); color:var(--color-text); outline:none; transition:border-color .3s, background .3s; }
.form input:focus { border-color:var(--color-accent); background:var(--color-surface-hover); }
.form input:disabled { opacity:.6; }
.form button { cursor:pointer; }
.form button[disabled] { opacity:.6; cursor:default; }
.ok { color:var(--color-success); font-weight:600; }
.err { color:var(--color-danger); font-size:.9rem; margin-top:.8rem; }
</style>
