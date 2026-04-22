<template>
  <section id="newsletter" class="newsletter">
    <div class="inner" v-reveal>
      <div class="text">
        <p class="overline">Newsletter</p>
        <h2>Mantente conectado con la comunidad</h2>
        <p>Recibe en tu correo noticias sobre eventos, recursos y oportunidades en el ecosistema tech panameño. Sin spam, solo lo que importa.</p>
      </div>
      <div class="form-side">
        <form
          v-if="!done"
          name="newsletter"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit.prevent="submit"
          class="form"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input name="bot-field" style="display:none" aria-hidden="true" />
          <label for="nl-email" class="sr-only">Correo electrónico</label>
          <input
            id="nl-email"
            v-model="email"
            name="email"
            type="email"
            required
            placeholder="tu@correo.com"
            :disabled="loading"
          />
          <button type="submit" :disabled="loading">
            {{ loading ? 'Enviando…' : 'Suscribirme' }}
          </button>
        </form>
        <p v-if="error" class="msg error" role="alert">{{ error }}</p>
        <p v-if="done" class="msg success" role="status">
          ✓ ¡Gracias! Te escribiremos pronto.
        </p>
        <p class="disclaimer">Gratuito · Sin spam · Cancela cuando quieras</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const email   = ref('');
const loading = ref(false);
const done    = ref(false);
const error   = ref('');

async function submit() {
  loading.value = true; error.value = '';
  try {
    const body = new URLSearchParams({ 'form-name': 'newsletter', email: email.value });
    const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
    if (!res.ok) throw new Error();
    done.value = true; email.value = '';
  } catch {
    error.value = 'Algo salió mal. Intenta de nuevo.';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.newsletter {
  background: var(--bg-alt);
  padding: 6rem 1.5rem;
  border-top: 1px solid var(--border);
}
.inner {
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.overline {
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--blue);
  margin: 0 0 .8rem;
}
h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -.03em;
  color: var(--text);
  margin: 0 0 .9rem;
  line-height: 1.2;
}
.text p {
  font-size: .97rem;
  color: var(--text-dim);
  line-height: 1.7;
  margin: 0;
}

.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); }

.form {
  display: flex;
  gap: .6rem;
  flex-wrap: wrap;
  margin-bottom: .75rem;
}
.form input {
  flex: 1 1 220px;
  padding: .8rem 1rem;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
  font-size: .95rem;
  font-family: inherit;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
}
.form input:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(26,86,219,.15);
}
.form input:disabled { opacity: .6; }

.form button {
  padding: .8rem 1.5rem;
  background: var(--blue);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  font-weight: 700;
  font-size: .95rem;
  font-family: inherit;
  cursor: pointer;
  transition: background .2s, transform .15s;
  white-space: nowrap;
}
.form button:hover:not(:disabled) { background: var(--blue-dark); transform: translateY(-1px); }
.form button:disabled { opacity: .6; cursor: default; }

.disclaimer {
  font-size: .78rem;
  color: var(--text-dim);
  margin: 0;
}

.msg {
  font-size: .9rem;
  font-weight: 600;
  margin: 0 0 .75rem;
  padding: .7rem 1rem;
  border-radius: var(--radius);
}
.msg.success { background: #dcfce7; color: #15803d; }
.msg.error   { background: #fee2e2; color: #dc2626; }

@media (max-width: 700px) {
  .inner { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
