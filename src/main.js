// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import App from './App'
import courses from './pages/courses';
import blog from './pages/blog';

const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
    {
      path: '/courses',
      name: 'courses',
      component: courses
    },{
      path: '/blog',
      name: 'blog',
      component: blog
    },
    // router 轉址
    { path: '/*', redirect: '/courses' }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
