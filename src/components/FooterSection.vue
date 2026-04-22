<template>
  <footer class="site-footer">
    <div class="inner">
      <div class="top">
        <div class="brand-col">
          <a href="#hero" class="brand">
            <img src="/assets/icons/plc.svg" alt="Panama Learning Code" width="40" height="40" />
            <span>Panama Learning Code</span>
          </a>
          <p>Ecosistema colaborativo sin fines de lucro para aprender a programar en Panamá.</p>
          <div class="socials">
            <a href="#" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.891 1.528 2.341 1.087 2.91.831.091-.645.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.547 1.376.203 2.394.1 2.646.641.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="#" aria-label="Twitter / X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        <nav class="footer-nav" aria-label="Footer">
          <div class="nav-col">
            <strong>Programa</strong>
            <RouterLink to="/eventos">Eventos</RouterLink>
            <RouterLink to="/comunidad">Comunidad</RouterLink>
            <RouterLink to="/#features">Qué ofrecemos</RouterLink>
          </div>
          <div class="nav-col">
            <strong>Conectar</strong>
            <RouterLink to="/#newsletter">Newsletter</RouterLink>
            <a href="#">Discord</a>
            <a href="#">GitHub</a>
          </div>
          <div class="nav-col">
            <strong>Organización</strong>
            <RouterLink to="/sobre">Sobre PLC</RouterLink>
            <RouterLink to="/mentores">Mentores</RouterLink>
            <RouterLink to="/#newsletter">Contacto</RouterLink>
          </div>
        </nav>
      </div>
      <div class="bottom">
        <small>© 2026 Panama Learning Code · Hecho con pasión por la comunidad de Panamá</small>
        <div class="bottom-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.site-footer {
  background: var(--bg);
  border-top: 1px solid var(--border);
  padding: 4rem 1.5rem 2.5rem;
}
.inner { max-width: var(--container); margin: 0 auto; }

.top {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border);
}

.brand-col { max-width: 280px; }
.brand {
  display: flex; align-items: center; gap: .65rem;
  text-decoration: none;
  font-weight: 700;
  font-size: .95rem;
  color: var(--text);
  margin-bottom: .9rem;
}
.brand-col p {
  font-size: .88rem;
  color: var(--text-dim);
  line-height: 1.65;
  margin: 0 0 1.2rem;
}

.socials { display: flex; gap: .5rem; }
.socials a {
  display: flex; align-items: center; justify-content: center;
  width: 34px; height: 34px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  color: var(--text-dim);
  text-decoration: none;
  transition: background .2s, color .2s, border-color .2s;
}
.socials a:hover { background: var(--blue); color: #fff; border-color: var(--blue); }

.footer-nav {
  display: flex;
  gap: 3.5rem;
  flex-wrap: wrap;
}
.nav-col {
  display: flex;
  flex-direction: column;
  gap: .6rem;
  min-width: 110px;
}
.nav-col strong {
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--text);
  margin-bottom: .2rem;
}
.nav-col a {
  font-size: .88rem;
  color: var(--text-dim);
  text-decoration: none;
  transition: color .2s;
}
.nav-col a:hover { color: var(--blue); }

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.bottom small {
  font-size: .8rem;
  color: var(--text-dim);
}
.bottom-links {
  display: flex;
  gap: 1.5rem;
}
.bottom-links a {
  font-size: .8rem;
  color: var(--text-dim);
  text-decoration: none;
}
.bottom-links a:hover { color: var(--blue); }
</style>
