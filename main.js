document.addEventListener('DOMContentLoaded', () => {
  const { createApp, ref, computed, onMounted } = Vue;

  createApp({
    setup() {
      const title = ref('Panama Learning Code');
      const letters = computed(() => Array.from(title.value));
      const slide = ref(false);

      const letterStyle = (i) => ({
        transitionDelay: `${i * 60}ms`,
        animationDelay: `${i * 80}ms`,
      });

      const displayChar = (ch) => (ch === ' ' ? '\u00A0' : ch);

      onMounted(() => {
        setTimeout(() => {
          slide.value = true;
        }, 5000); // activar movimiento a los 5s
      });

      return { title, letters, slide, letterStyle, displayChar };
    },
  }).mount('#app');
});
