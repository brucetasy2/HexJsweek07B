import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Menucontainer',
    component: () => import('../views/main/Homecontainer.vue'),
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/main/About.vue'),
      },
      {
        path: 'ShareholderInfo',
        name: 'ShareholderInfo',
        component: () => import('../views/main/ShareholderInfo.vue'),
      },
      {
        path: 'NEXT',
        name: 'NEXT_STEP',
        component: () => import('../views/main/Next.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin 管理頁面',
    component: () => import('../views/submenu/Menucontainer.vue'),
    children: [
      {
        path: 'products',
        name: 'products_page',
        component: () => import('../views/submenu/products.vue'),
      },
      {
        path: 'storages',
        name: 'storages_page',
        component: () => import('../views/submenu/storages.vue'),
      },
      {
        path: 'orders',
        name: 'orders_page',
        component: () => import('../views/submenu/orders.vue'),
      },
      {
        path: 'coupons',
        name: 'coupons_page',
        component: () => import('../views/submenu/Coupons.vue'),
      },
      {
        path: 'mockorder',
        name: 'mockorder_page',
        component: () => import('../views/submenu/Mockorder.vue'),
      },
      {
        // path: 'Payment/:orderId',
        path: 'Payment',
        name: 'Payment_page',
        component: () => import('../views/submenu/Payment.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'Admin2 管理頁面',
    component: () => import('../views/submenu/Menucontainer.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
