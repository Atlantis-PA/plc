<template>
  <div id="app" class="layout" :class="themeClass">
    <NavBar :is-light="isLight" :sections="sectionIds" @toggleTheme="toggleTheme" />
    <HeroSection id="hero" />
    <FeaturesSection id="features" />
    <StatsSection id="stats" />
    <EventsPreview id="events" />
    <NewsletterSignup id="newsletter" />
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import StatsSection from './components/StatsSection.vue';
import EventsPreview from './components/EventsPreview.vue';
import NewsletterSignup from './components/NewsletterSignup.vue';
import FooterSection from './components/FooterSection.vue';
import NavBar from './components/NavBar.vue';

const isLight = ref(false);
const themeClass = computed(()=> isLight.value ? 'light' : 'dark');
function applyTheme(){
  const root = document.documentElement; 
  if(isLight.value){ root.classList.add('light'); } else { root.classList.remove('light'); }
  localStorage.setItem('plc-theme', isLight.value ? 'light':'dark');
}
function toggleTheme(){ isLight.value = !isLight.value; applyTheme(); }
onMounted(()=>{
  const saved = localStorage.getItem('plc-theme');
  if(saved) isLight.value = saved === 'light'; else {
    // Auto preferencia del sistema
    isLight.value = window.matchMedia('(prefers-color-scheme: light)').matches;
  }
  applyTheme();
});
const sectionIds = ['hero','features','stats','events','newsletter'];
</script>

<style>
.layout {
  min-height: 100vh;
  background: radial-gradient(circle at 20% 20%, #143642, #0f2027 55%, #08252e 90%);
  color: #fff;
  font-family: 'Inter', 'Montserrat', Arial, sans-serif;
  position: relative;
}
/* Fondo animado sutil */
.layout::before,
.layout::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 10%, rgba(0, 184, 148, .18), transparent 60%),
    radial-gradient(circle at 10% 80%, rgba(33, 147, 176, .18), transparent 65%);
  mix-blend-mode: screen;
  animation: floatBg 18s linear infinite alternate;
  pointer-events: none;
}
.layout::after {
  animation-duration: 28s;
  filter: blur(40px);
  opacity: .6;
}
@keyframes floatBg {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-25px) scale(1.02);
  }
  100% {
    transform: translateY(10px) scale(1);
  }
}

/* Utilidades */
html,
body,
#app {
  margin: 0;
}

.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: background 0.3s, color 0.3s;
  z-index: 1000;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
}

.light {
  --bg-color: #f0f0f0;
  --text-color: #333;
}

.dark {
  --bg-color: #143642;
  --text-color: #fff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}
</style>
