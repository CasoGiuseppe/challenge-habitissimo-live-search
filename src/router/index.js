import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'start',

    components: {
      header: () => import(/* webpackChunkName: "MainNavigation" */ '@/views/main/navigation/TheNavigation'),
      main: () => import(/* webpackChunkName: "MainHome" */ '@/views/main/home/TheHome'),
      footer: () => import(/* webpackChunkName: "MainFooter" */ '@/views/main/footer/TheFooter'),
    },
  },
  {
    path: '/detail/:id?',
    name: 'detail',

    components: {
      header: () => import(/* webpackChunkName: "MainNavigation" */ '@/views/main/navigation/TheNavigation'),
      main: () => import(/* webpackChunkName: "MainHome" */ '@/views/detail/Detail'),
      footer: () => import(/* webpackChunkName: "MainFooter" */ '@/views/main/footer/TheFooter'),
    },
  },

  {
    path: '*',
    redirect: { name: 'start' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// catch dupliacated navigation error
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

router.beforeEach((to, from, next) => {
  if (!from.name) {
    to.name !== 'start' ? next({ name: 'start' }) : next();
  } else {
    next();
  }
});

export default router;
