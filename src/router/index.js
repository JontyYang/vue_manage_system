import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
      path: "/",
      component: () => import('../views/Main.vue'),
      children: [{
          path: '/',
          home: 'home',
          component: () => import('../views/Home/Home.vue')
          },
          {
              path: '/video',
              name: 'video',
              component: () => import('../views/VideoManager/VideoManager')
          },
          {
              path: '/user',
              name: 'user',
              component: () => import('../views/UserManager/UserManger')
          },
          {
              path: '/page1',
              name: 'page1',
              component: () => import('../views/other/PageOne')
          },
          {
              path: '/page2',
              name: 'page2',
              component: () => import('../views/other/PageTwo')
          }]
  },
    {
        path: "/login",
        name: '登录',
        component: () => import('../views/Login/Login')
    }
];

const router = new VueRouter({
  routes
});

export default router;
