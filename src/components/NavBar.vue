<template>
  <header class="nav-wrapper" :class="{ scrolled }" role="banner">
    <a href="#main" class="skip-link">Saltar al contenido</a>
    <nav class="nav" aria-label="Principal">

      <RouterLink to="/" class="brand" aria-label="Panama Learning Code — Inicio">
        <img src="/assets/icons/plc.svg" alt="" width="34" height="34" aria-hidden="true" />
        <span>Panama Learning Code</span>
      </RouterLink>

      <ul class="links" role="list">
        <li v-for="l in links" :key="l.to">
          <RouterLink :to="l.to" class="nav-link" active-class="active">{{ l.label }}</RouterLink>
        </li>
      </ul>

      <div class="nav-actions">
        <button
          class="theme-btn"
          @click="$emit('toggleTheme')"
          :aria-label="`Cambiar a tema ${isLight ? 'oscuro' : 'claro'}`"
        >
          <!-- Sun -->
          <svg v-if="isLight" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon -->
          <svg v-else width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <RouterLink to="/comunidad" class="btn-nav">Únete gratis</RouterLink>
      </div>

      <!-- Mobile toggle -->
      <button class="menu-btn" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Menú">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line v-if="!menuOpen" x1="3" y1="6"  x2="21" y2="6"/>
          <line v-if="!menuOpen" x1="3" y1="12" x2="21" y2="12"/>
          <line v-if="!menuOpen" x1="3" y1="18" x2="21" y2="18"/>
          <line v-if="menuOpen"  x1="18" y1="6"  x2="6"  y2="18"/>
          <line v-if="menuOpen"  x1="6"  y1="6"  x2="18" y2="18"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile drawer -->
    <div v-if="menuOpen" class="mobile-menu" @click.self="menuOpen = false">
      <ul role="list">
        <li v-for="l in links" :key="l.to">
          <RouterLink :to="l.to" class="mobile-link" active-class="active" @click="menuOpen = false">
            {{ l.label }}
          </RouterLink>
        </li>
        <li><RouterLink to="/comunidad" class="mobile-cta" @click="menuOpen = false">Únete gratis</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({ isLight: Boolean });
defineEmits(['toggleTheme']);

const links = [
  { to: '/eventos',   label: 'Eventos'   },
  { to: '/comunidad', label: 'Comunidad' },
  { to: '/mentores',  label: 'Mentores'  },
  { to: '/sobre',     label: 'Sobre PLC' },
];

const scrolled  = ref(false);
const menuOpen  = ref(false);

function onScroll() { scrolled.value = window.scrollY > 40; }
onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.nav-wrapper {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid transparent;
  transition: border-color .25s, box-shadow .25s;
}
.nav-wrapper.scrolled {
  border-color: var(--border);
  box-shadow: var(--shadow);
}

.nav {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 1.5rem;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Brand */
.brand {
  display: flex; align-items: center; gap: .6rem;
  text-decoration: none; color: var(--text);
  font-weight: 700; font-size: .92rem;
  letter-spacing: -.01em; flex-shrink: 0;
}
.brand img { border-radius: 6px; }

/* Desktop links */
.links {
  display: flex; gap: .15rem;
  margin: 0; padding: 0; list-style: none;
  flex: 1;
}
.nav-link {
  display: block;
  padding: .45rem .85rem;
  border-radius: var(--radius);
  text-decoration: none;
  font-size: .88rem; font-weight: 500;
  color: var(--text-dim);
  transition: color .2s, background .2s;
  white-space: nowrap;
}
.nav-link:hover, .nav-link.active {
  color: var(--text);
  background: var(--bg-alt);
}

/* Actions */
.nav-actions { display: flex; align-items: center; gap: .65rem; flex-shrink: 0; }

.theme-btn {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  border-radius: var(--radius); border: 1px solid var(--border);
  background: transparent; color: var(--text-dim);
  cursor: pointer; transition: background .2s, color .2s;
}
.theme-btn:hover { background: var(--bg-alt); color: var(--text); }

.btn-nav {
  padding: .48rem 1.1rem;
  background: var(--blue); color: #fff;
  border-radius: var(--radius);
  text-decoration: none; font-size: .87rem; font-weight: 600;
  white-space: nowrap;
  transition: background .2s, transform .15s;
}
.btn-nav:hover { background: var(--blue-dark); transform: translateY(-1px); }

/* Mobile toggle */
.menu-btn {
  display: none;
  align-items: center; justify-content: center;
  width: 36px; height: 36px; margin-left: auto;
  border-radius: var(--radius); border: 1px solid var(--border);
  background: transparent; color: var(--text-dim);
  cursor: pointer; transition: background .2s;
}
.menu-btn:hover { background: var(--bg-alt); }

/* Mobile drawer */
.mobile-menu {
  border-top: 1px solid var(--border);
  background: var(--bg);
  padding: .75rem 1.5rem 1.25rem;
}
.mobile-menu ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: .15rem; }
.mobile-link {
  display: block; padding: .65rem .75rem;
  border-radius: var(--radius);
  text-decoration: none; font-size: .95rem; font-weight: 500;
  color: var(--text-dim); transition: background .2s, color .2s;
}
.mobile-link:hover, .mobile-link.active { background: var(--bg-alt); color: var(--text); }
.mobile-cta {
  display: block; margin-top: .5rem; padding: .75rem;
  background: var(--blue); color: #fff;
  border-radius: var(--radius); text-align: center;
  text-decoration: none; font-weight: 700; font-size: .95rem;
  transition: background .2s;
}
.mobile-cta:hover { background: var(--blue-dark); }

@media (max-width: 760px) {
  .links, .nav-actions { display: none; }
  .menu-btn { display: flex; }
}
@media (max-width: 460px) {
  .brand span { display: none; }
}
</style>
