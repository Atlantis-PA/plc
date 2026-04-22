<template>
  <section id="newsletter" class="newsletter">
    <div class="nl-inner" v-reveal>
      <div class="nl-badge">Newsletter</div>
      <h2>Mantente al día</h2>
      <p>Recibe noticias sobre eventos, recursos y oportunidades<br class="br" /> en el ecosistema tech panameño.</p>
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
        <div class="input-wrap">
          <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.7"/>
            <path d="M2 8l10 7 10-7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
          </svg>
          <input
            v-model="email"
            name="email"
            type="email"
            required
            placeholder="tu@correo.com"
            :disabled="loading"
            aria-label="Correo electrónico"
          />
        </div>
        <button class="btn primary" type="submit" :disabled="loading">
          <span>{{ loading ? 'Enviando…' : 'Suscribirme' }}</span>
          <svg v-if="!loading" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </form>
      <p v-if="error" class="err" role="alert">{{ error }}</p>
      <p v-if="done" class="ok" v-reveal role="status">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="9" stroke="#14cba8" stroke-width="1.8"/>
          <path d="M6 10l3 3 5-5" stroke="#14cba8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ¡Gracias! Te escribiremos pronto.
      </p>
    </div>
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
    if (!res.ok) throw new Error();
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
.newsletter {
  padding: 7rem 1.5rem 8rem;
  position: relative;
  overflow: hidden;
}
.newsletter::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(0,184,148,.1), transparent 60%),
    radial-gradient(circle at 80% 50%, rgba(33,147,176,.1), transparent 60%);
  pointer-events: none;
}
.newsletter::after {
  content: '';
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: min(900px, 100%);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border-strong), transparent);
}

.nl-inner {
  position: relative;
  z-index: 1;
  max-width: 620px;
  margin: 0 auto;
  text-align: center;
}

.nl-badge {
  display: inline-block;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  background: rgba(0,184,148,.12);
  border: 1px solid rgba(0,184,148,.35);
  padding: .35rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.4rem;
}

.nl-inner h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0 0 1rem;
  font-weight: 800;
  color: var(--color-text);
}
.nl-inner > p {
  margin: 0 auto 2rem;
  font-size: 1.05rem;
  color: var(--color-text-dim);
  line-height: 1.65;
}
.br { display: none; }
@media (min-width: 500px) { .br { display: inline; } }

/* Form */
.form {
  display: flex;
  gap: .75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.input-wrap {
  position: relative;
  flex: 1 1 260px;
  min-width: 220px;
}
.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-dim);
  pointer-events: none;
}
.input-wrap input {
  width: 100%;
  padding: .95rem 1rem .95rem 2.9rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  font-size: 1rem;
  background: var(--color-surface);
  color: var(--color-text);
  outline: none;
  transition: border-color .3s, background .3s, box-shadow .3s;
  backdrop-filter: blur(8px);
}
.input-wrap input:focus {
  border-color: var(--color-accent);
  background: var(--color-surface-hover);
  box-shadow: 0 0 0 3px rgba(0,184,148,.15);
}
.input-wrap input:disabled { opacity: .6; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .95rem 1.7rem;
  font-weight: 600;
  border-radius: var(--radius);
  font-size: 1rem;
  letter-spacing: .3px;
  border: none;
  cursor: pointer;
  transition: transform .25s, box-shadow .25s;
}
.btn.primary {
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-alt));
  color: #fff;
  box-shadow: 0 6px 24px -8px rgba(0,184,148,.4);
}
.btn.primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 32px -8px rgba(0,184,148,.5); }
.btn:disabled { opacity: .6; cursor: default; }

.ok {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  color: var(--color-success);
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
}
.err {
  color: var(--color-danger);
  font-size: .9rem;
  margin-top: .8rem;
}
</style>
