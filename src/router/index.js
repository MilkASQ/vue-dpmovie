import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Index',
    component: function (resolve) {
      require(['@/components/index'], resolve)
    },
    meta: {requireAuth: false}
  },
  {
    path: '/movie/:id',
    name: 'Detail',
    component: function (resolve) {
      require(['@/components/detail'], resolve)
    },
    meta: {requireAuth: false}
  },
  {
    path: '/movie/comment/:id',
    name: 'Comments',
    component: function (resolve) {
      require(['@/components/comments'], resolve)
    },
    meta: {requireAuth: false}
  }
];

const router = new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'on'
});

export default router
