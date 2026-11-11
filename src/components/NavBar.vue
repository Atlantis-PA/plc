<template>
  <header class="nav-wrap" :class="{ scrolled }">
    <a href="#main" class="skip-link">Saltar al contenido</a>
    <nav class="container nav" aria-label="Principal">
      <RouterLink to="/" class="brand" aria-label="Panama Learning Code, inicio">
        <img src="/assets/icons/plc.svg" alt="" width="36" height="36" />
        <span>Panama Learning Code</span>
      </RouterLink>

      <ul class="links">
        <li v-for="l in navegacion" :key="l.to">
          <RouterLink :to="l.to" class="link" active-class="active">{{ l.label }}</RouterLink>
        </li>
      </ul>

      <div class="acciones">
        <button class="icon-btn" type="button" @click="$emit('toggle-theme')"
          :aria-label="isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'">
          <svg v-if="isLight" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
        </button>
        <RouterLink to="/participa" class="btn btn-ink btn-sm cta-desktop">Participa</RouterLink>
        <button class="icon-btn menu-btn" type="button" @click="abierto = !abierto"
          :aria-expanded="abierto" aria-controls="menu-movil" aria-label="Abrir menú">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path v-if="!abierto" d="M3 6h18M3 12h18M3 18h18"/>
            <path v-else d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="abierto" id="menu-movil" class="menu-movil">
      <ul class="container">
        <li v-for="l in navegacion" :key="l.to">
          <RouterLink :to="l.to" class="link-movil" @click="abierto = false">{{ l.label }}</RouterLink>
        </li>
        <li><RouterLink to="/participa" class="btn btn-primary full" @click="abierto = false">Participa</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { navegacion } from '../data/contenido.js';

defineProps({ isLight: { type: Boolean, default: true } });
defineEmits(['toggle-theme']);

const scrolled = ref(false);
const abierto = ref(false);
const onScroll = () => { scrolled.value = window.scrollY > 8; };
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); });
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.nav-wrap {
  position: fixed; inset: 0 0 auto 0; z-index: 50; height: var(--nav-h);
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: saturate(1.4) blur(10px);
  border-bottom: 1px solid transparent; transition: border-color .2s, box-shadow .2s;
}
.nav-wrap.scrolled { border-bottom-color: var(--border); box-shadow: 0 2px 12px rgba(0,0,0,.04); }
.skip-link { position: absolute; left: -999px; }
.skip-link:focus { left: 16px; top: 12px; z-index: 60; background: var(--ink); color: #fff; padding: 8px 14px; border-radius: 8px; }

.nav { height: 100%; display: flex; align-items: center; gap: 24px; }
.brand { display: flex; align-items: center; gap: 10px; text-decoration: none; font-family: var(--font-display); font-weight: 800; font-size: 1.05rem; color: var(--text); white-space: nowrap; min-width: 0; }
.brand span { overflow: hidden; text-overflow: ellipsis; }
.links { list-style: none; display: none; gap: 4px; margin: 0 0 0 auto; padding: 0; }
.link { display: block; padding: 8px 14px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: .95rem; color: var(--text); }
.link:hover { background: var(--bg-alt); }
.link.active { color: var(--azul); }
.acciones { display: flex; align-items: center; gap: 8px; margin-left: auto; }
.icon-btn { display: grid; place-items: center; width: 42px; height: 42px; flex: none; border-radius: 999px; border: 1px solid var(--border); background: transparent; color: var(--text); cursor: pointer; }
.btn-sm { padding: 10px 20px; font-size: .92rem; }
.cta-desktop { display: none; }

.menu-movil { background: var(--bg); border-bottom: 1px solid var(--border); box-shadow: var(--shadow-lg); }
.menu-movil ul { list-style: none; margin: 0 auto; padding-top: 8px; padding-bottom: 20px; display: grid; gap: 4px; }
.link-movil { display: block; padding: 14px 4px; font-weight: 700; font-size: 1.1rem; text-decoration: none; border-bottom: 1px solid var(--border); }
.full { width: 100%; margin-top: 12px; }

@media (max-width: 420px) { .brand span { font-size: .92rem; } .nav { gap: 12px; } }
@media (min-width: 1024px) {
  .links { display: flex; }
  .acciones { margin-left: 8px; }
  .cta-desktop { display: inline-flex; }
  .menu-btn { display: none; }
}
</style>
