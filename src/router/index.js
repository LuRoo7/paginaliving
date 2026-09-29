import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),

  routes: [

    // =========================
    // PRINCIPAL
    // =========================

    {
      path: '/',
      redirect: '/registrarse'
    },

    {
      path: '/registrarse',
      name: 'Registrarse',
      component: () => import('../views/Registrarse.vue')
    },

    {
      path: '/Iniciosesion',
      name: 'Iniciosesion',
      component: () => import('../views/Iniciosesion.vue')
    },

    {
      path: '/Inicio',
      name: 'Inicio',
      component: () => import('../views/Inicio.vue')
    },


    // =========================
    // EMPLEADOS
    // =========================

    {
      path: '/perfil',
      name: 'Perfil',
      component: () => import('../views/Perfil.vue')
    },

    {
      path: '/higieneyseguridad',
      name: 'HigieneYSeguridad',
      component: () => import('../views/HigieneYSeguridad.vue')
    },

    {
      path: '/capacitaciones',
      name: 'Capacitaciones',
      component: () => import('../views/Capacitaciones.vue')
    },

    {
      path: '/certificados',
      name: 'Certificados',
      component: () => import('../views/certificados.vue')
    },

    {
      path: '/novedades',
      name: 'Novedades',
      component: () => import('../views/Novedades.vue')
    },

    {
      path: '/maquinaria',
      name: 'Maquinaria',
      component: () => import('../views/Maquinaria.vue')
    },


    // =========================
    // PRODUCTOS
    // =========================

    {
      path: '/productos',
      name: 'Productos',
      component: () => import('../views/Productos.vue')
    },


    // =========================
    // LIVING
    // =========================

    {
      path: '/living',
      name: 'Living',
      component: () => import('../views/Living.vue')
    },


    // =========================
    // COLCHONES Y BASES
    // =========================

    {
      path: '/colchones',
      name: 'Colchones',
      component: () => import('../views/Colchones.vue')
    },

    {
      path: '/bases',
      name: 'Bases',
      component: () => import('../views/bases.vue')
    },


    // =========================
    // MARCA BLANCA (RUTAS ANIDADAS)
    // =========================

    {
      path: '/marca-blanca',
      name: 'MarcaBlanca',
      component: () => import('../views/marcablanca.vue'),
      children: [
        {
          path: 'espuma',
          name: 'MarcaBlancaEspuma',
          component: () => import('../views/MarcaBlancaEspuma.vue')
        }
      ]
    },


    // =========================
    // NATURAL SOFT
    // =========================

    {
      path: '/natural-soft',
      name: 'NaturalSoft',
      component: () => import('../views/naturalsoft.vue')
    },

    {
      path: '/natural-soft/espuma',
      name: 'NaturalSoftEspuma',
      component: () => import('../views/naturalsoftespuma.vue')
    },

    {
      path: '/natural-soft/espuma-soft',
      name: 'NaturalSoftEspumaSoft',
      component: () => import('../views/naturalsoftespumasoft.vue')
    },

    {
      path: '/natural-soft/resorte',
      name: 'NaturalSoftResorte',
      component: () => import('../views/naturalsoftresortes.vue')
    },


    {
      path: '/tiposcolchones',
      name: 'TiposColchones',
      component: () => import('../views/tiposcolchones.vue')
    },
    {
      path: '/colchonesprueba',
      name: 'colchonesprueba',
      component: () => import('../views/colchonesprueba.vue')
    },

  ]
})

export default router