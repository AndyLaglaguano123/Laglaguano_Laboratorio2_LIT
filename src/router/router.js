import { Router } from '@vaadin/router';

const outlet = document.getElementById('outlet');

if (!outlet) {
  throw new Error('No se encontro un outlet para inicializar el router.');
}

const router = new Router(outlet);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: 'mi-home',
    action: async () => {
      await import('../pages/home.js');
    }
  },
  {
    path: '/gallery',
    component: 'mi-gallery',
    action: async () => {
      await import('../pages/gallery.js');
    }
  },
  {
    path: '/direction',
    component: 'mi-direction',
    action: async () => {
      await import('../pages/direction.js');
    }
  },
  {
    path: '/contact',
    component: 'mi-contact',
    action: async () => {
      await import('../pages/contact.js');
    }
  },
  {
    path: '/about',
    component: 'mi-about',
    action: async () => {
      await import('../pages/about.js');
    }
  },
  {
    path: '(.*)',
    redirect: '/home'
  }
];

router.setRoutes(routes);
