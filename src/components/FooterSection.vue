<template>
  <footer class="site-footer">
    <div class="footer-glow" aria-hidden="true"></div>
    <div class="footer-inner">
      <div class="top">
        <div class="brand-block">
          <div class="brand">
            <img src="/assets/icons/plc.svg" alt="PLC logo" width="44" height="44" />
            <div>
              <span class="brand-name">Panama Learning Code</span>
              <span class="brand-sub">Comunidad tech · Panamá</span>
            </div>
          </div>
          <p class="brand-desc">Ecosistema colaborativo para aprender, crear y conectar con la comunidad tech panameña.</p>
        </div>
        <nav class="links" aria-label="Footer">
          <div class="link-col">
            <span class="link-head">Comunidad</span>
            <a href="#features">Features</a>
            <a href="#events">Eventos</a>
            <a href="#stats">Estadísticas</a>
          </div>
          <div class="link-col">
            <span class="link-head">Conectar</span>
            <a href="#newsletter">Newsletter</a>
            <a href="#">Discord</a>
            <a href="#">GitHub</a>
          </div>
        </nav>
      </div>
      <div class="divider" aria-hidden="true"></div>
      <div class="bottom">
        <small>© 2026 Panama Learning Code · Hecho con pasión por la comunidad.</small>
        <div class="socials" aria-label="Redes sociales">
          <a href="#" aria-label="GitHub" class="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.891 1.528 2.341 1.087 2.91.831.091-.645.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.547 1.376.203 2.394.1 2.646.641.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
          <a href="#" aria-label="Twitter / X" class="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" class="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.site-footer {
  position: relative;
  padding: 5rem 1.5rem 3rem;
  overflow: hidden;
}
.footer-glow {
  position: absolute;
  bottom: -80px; left: 50%; transform: translateX(-50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse, rgba(0,184,148,.15), transparent 70%);
  pointer-events: none;
}
.footer-inner { max-width: 1100px; margin: 0 auto; }

.top {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}

.brand-block { max-width: 340px; }
.brand {
  display: flex;
  align-items: center;
  gap: .8rem;
  margin-bottom: 1rem;
}
.brand-name {
  display: block;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: .4px;
  color: var(--color-text);
}
.brand-sub {
  display: block;
  font-size: .72rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 600;
  margin-top: .1rem;
}
.brand-desc {
  font-size: .88rem;
  color: var(--color-text-dim);
  line-height: 1.6;
  margin: 0;
}

.links {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}
.link-col {
  display: flex;
  flex-direction: column;
  gap: .65rem;
}
.link-head {
  font-size: .7rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-text-dim);
  margin-bottom: .2rem;
}
.link-col a {
  color: var(--color-text-dim);
  text-decoration: none;
  font-size: .88rem;
  letter-spacing: .3px;
  transition: color .3s;
  position: relative;
  width: fit-content;
}
.link-col a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 0; height: 1.5px;
  background: var(--color-accent);
  transition: width .3s;
  border-radius: 2px;
}
.link-col a:hover { color: var(--color-text); }
.link-col a:hover::after { width: 100%; }

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border-strong), transparent);
  margin-bottom: 2rem;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.bottom small {
  font-size: .72rem;
  letter-spacing: .5px;
  color: var(--color-text-dim);
  opacity: .8;
}

.socials {
  display: flex;
  gap: .6rem;
}
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: 10px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-dim);
  text-decoration: none;
  transition: background .3s, border-color .3s, color .3s, transform .25s;
}
.social-icon:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-border-strong);
  color: var(--color-text);
  transform: translateY(-2px);
}
</style>
