<template>
  <header class="nav-wrapper" :class="{ scrolled }" role="banner">
    <a href="#main" class="skip-link">Saltar al contenido</a>
    <nav class="nav" aria-label="Principal">
      <div class="left">
        <a href="#hero" class="brand" aria-label="Inicio Panama Learning Code">
          <img src="/assets/icons/plc.svg" alt="PLC" />
          <span class="word">PLC</span>
        </a>
      </div>
      <ul class="links" role="list">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" :class="{ active: activeId === l.href.substring(1) }">{{ l.label }}</a>
        </li>
      </ul>
      <div class="right">
        <button class="theme-mini" @click="$emit('toggleTheme')" :aria-label="`Cambiar a tema ${isLight ? 'oscuro':'claro'}`">
          <span v-if="isLight">🌙</span><span v-else>☀️</span>
        </button>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
const props = defineProps({ isLight: Boolean, sections: { type: Array, default: () => [] } });
const emit = defineEmits(['toggleTheme','update:active']);
const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#features', label: 'Features' },
  { href: '#stats', label: 'Stats' },
  { href: '#events', label: 'Eventos' },
  { href: '#newsletter', label: 'Newsletter' }
];
const activeId = ref('hero');
const scrolled = ref(false);
let io;
function onScroll(){ scrolled.value = window.scrollY > 20; }
function initSpy(){
  io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        activeId.value = e.target.id;
        emit('update:active', activeId.value);
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: [0,1] });
  props.sections.forEach(id=>{
    const el = document.getElementById(id);
    if(el) io.observe(el);
  });
}

onMounted(()=>{
  window.addEventListener('scroll', onScroll, { passive:true });
  initSpy();
});
onBeforeUnmount(()=>{
  window.removeEventListener('scroll', onScroll);
  if(io) io.disconnect();
});

watch(()=>props.sections, ()=>{ if(io) io.disconnect(); initSpy(); });
</script>
<style scoped>
.nav-wrapper { position:fixed; top:0; left:0; right:0; z-index:60; backdrop-filter: blur(14px); padding:.65rem .9rem; transition: background .4s, box-shadow .4s; }
.nav-wrapper.scrolled { background: rgba(10,20,25,0.72); box-shadow:0 4px 18px -6px rgba(0,0,0,.4); }
.nav { max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:1rem; }
.brand { display:flex; align-items:center; gap:.55rem; font-weight:700; color:var(--color-text); text-decoration:none; letter-spacing:.5px; }
.brand img { width:42px; height:42px; }
.links { display:flex; gap:1.2rem; margin:0; padding:0; list-style:none; }
.links a { position:relative; text-decoration:none; font-size:.85rem; letter-spacing:.6px; font-weight:500; color:var(--color-text-dim); padding:.35rem .4rem; border-radius:8px; transition:color .3s; }
.links a.active, .links a:hover { color:var(--color-text); }
.links a.active::after, .links a:hover::after { width:100%; }
.links a::after { content:''; position:absolute; left:0; bottom:-2px; height:2px; width:0; background:linear-gradient(90deg,var(--color-accent),var(--color-accent-alt)); transition:width .35s; border-radius:2px; }
.right { display:flex; align-items:center; gap:.6rem; }
.theme-mini { cursor:pointer; border:1px solid var(--color-border); background:var(--color-surface); color:var(--color-text); width:40px; height:40px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.05rem; transition: background .35s, border-color .35s; }
.theme-mini:hover { background:var(--color-surface-hover); border-color:var(--color-border-strong); }
.skip-link { position:absolute; left:-999px; top:auto; width:1px; height:1px; overflow:hidden; }
.skip-link:focus { left:1rem; top:.5rem; width:auto; height:auto; padding:.6rem 1rem; background:var(--color-accent); color:#fff; border-radius:var(--radius); z-index:999; }
@media (max-width:680px){
  .links { gap:.65rem; }
  .links a { font-size:.75rem; }
  .brand img { width:34px; height:34px; }
}
</style>
