<template>
  <section class="landing">
    <h2>Bienvenido a Panama Learning Code</h2>
    <p>Impulsamos el aprendizaje digital y la colaboración en Panamá. Únete a nuestra comunidad y accede a recursos, eventos y mentoría.</p>
    <a href="#" class="cta-btn">Comenzar</a>
  </section>
</template>

<script setup>
// Aquí puedes agregar lógica de Vue si es necesario
</script>

<style scoped>
.landing {
  max-width: 600px;
  margin: 3rem auto;
  background: rgba(255,255,255,0.05);
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.12);
  padding: 2.5rem 2rem;
  text-align: center;
}
.landing h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}
.landing p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #dfe6e9;
}
.cta-btn {
  display: inline-block;
  background: #00b894;
  color: #fff;
  padding: 0.8rem 2.2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.cta-btn:hover {
  background: #0984e3;
}
</style>
