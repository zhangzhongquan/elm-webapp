// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router'
import VueResource from'vue-resource'
import  Goods from './components/goods/goods.vue'
import Seller from './components/seller/seller.vue'
import Ratings from './components/ratings/ratings.vue'


Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/goods', component: Goods },
  { path: '/seller', component: Seller },
  { path: '/ratings', component: Ratings }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes:routes,// （缩写）相当于 routes: routes
  linkActiveClass:'active'
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
