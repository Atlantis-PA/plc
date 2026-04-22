<template>
  <main id="main">
    <HeroSection />
    <FeaturesSection />
    <StatsSection />
    <EventsPreview />
    <NewsletterSignup />
  </main>
</template>

<script setup>
import HeroSection     from '../components/HeroSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import StatsSection    from '../components/StatsSection.vue';
import EventsPreview   from '../components/EventsPreview.vue';
import NewsletterSignup from '../components/NewsletterSignup.vue';
</script>
