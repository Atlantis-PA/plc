import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/',              component: () => import('../pages/HomePage.vue'),          meta: { title: 'Panama Learning Code' } },
  { path: '/participa',     component: () => import('../pages/ParticipaPage.vue'),     meta: { title: 'Participa · Panama Learning Code' } },
  { path: '/organizadores', component: () => import('../pages/OrganizadoresPage.vue'), meta: { title: 'Organizadores · Panama Learning Code' } },
  { path: '/comunidades',   component: () => import('../pages/ComunidadesPage.vue'),   meta: { title: 'Comunidades · Panama Learning Code' } },
  { path: '/nosotros',      component: () => import('../pages/NosotrosPage.vue'),      meta: { title: 'Nosotros · Panama Learning Code' } },
  { path: '/aliados',       component: () => import('../pages/AliadosPage.vue'),       meta: { title: 'Aliados · Panama Learning Code' } },
  // Rutas anteriores
  { path: '/eventos',   redirect: '/participa' },
  { path: '/mentores',  redirect: '/participa' },
  { path: '/comunidad', redirect: '/comunidades' },
  { path: '/sobre',     redirect: '/nosotros' },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Panama Learning Code';
});

export default router;
