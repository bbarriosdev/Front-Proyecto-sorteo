import { createRouter, createWebHistory } from 'vue-router'

import registro from '@/components/registrosClientes/registro.vue'
import registroContrasena from '@/components/registrosClientes/registroContrasena.vue'
import Mensaje from '@/components/registrosClientes/mensaje.vue'
import IngresoAdmin from '@/components/registrosClientes/ingresoadmin/ingresoAdmin.vue'
import PanelAdmin from '@/components/registrosClientes/ingresoadmin/panelAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registro',
      component: registro,
    },
    {
      path: '/Mensaje',
      name: 'Mensaje',
      component: Mensaje,
    },
    {
      path: '/registroContrasena/:token',
      name: 'registroContrasena',
      component: registroContrasena,
    },
    {
      path: '/login',
      name: 'Login',
      component: IngresoAdmin,
    },
    {
      path: '/admin-dashboard',
      name: 'AdminDashboard',
      component: PanelAdmin,
      meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*', // Redirigir cualquier ruta no definida
      redirect: '/login',
    },
    
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken'); // Validar token

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirigir al login si no está autenticado
  } else {
    next(); // Continuar si está autenticado o si la ruta no requiere autenticación
  }
});

export default router
