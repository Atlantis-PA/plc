// Entrada principal para Vite
import { createApp } from 'vue';
import router from './router/index.js';
import App from './App.vue';

// Directiva de reveal con variantes (fade|up|scale)
const revealDirective = {
  mounted(el, binding) {
    const opts = typeof binding.value === 'object' && binding.value !== null ? binding.value : {};
    const delay = opts.delay || (typeof binding.value === 'number' ? binding.value : 0);
    const variant = opts.variant || 'up';
    const base = {
      opacity: '0',
      transform: variant === 'scale' ? 'scale(.92)' : variant === 'fade' ? 'translateY(0)' : 'translateY(18px)'
    };
    Object.assign(el.style, base, { transition: 'opacity .9s cubic-bezier(.16,.8,.24,1), transform .9s cubic-bezier(.16,.8,.24,1)' });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
          }, delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
  }
};

const app = createApp(App);
app.directive('reveal', revealDirective);
app.use(router);
app.mount('#app');
