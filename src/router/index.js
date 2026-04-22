import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/',          component: () => import('../pages/HomePage.vue'),      meta: { title: 'Panama Learning Code' } },
  { path: '/eventos',   component: () => import('../pages/EventosPage.vue'),   meta: { title: 'Eventos · PLC' } },
  { path: '/comunidad', component: () => import('../pages/ComunidadPage.vue'), meta: { title: 'Comunidad · PLC' } },
  { path: '/mentores',  component: () => import('../pages/MentoresPage.vue'),  meta: { title: 'Mentores · PLC' } },
  { path: '/sobre',     component: () => import('../pages/SobrePage.vue'),     meta: { title: 'Sobre PLC' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' };
    return { top: 0, behavior: 'smooth' };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Panama Learning Code';
});

export default router;
