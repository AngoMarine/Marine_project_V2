import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routes from "./Routes";


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(require('vue-cookies'))

const router = new VueRouter(({
  routes: Routes
}))

new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
