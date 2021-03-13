import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './assets/css/main.scss';

Vue.config.productionTip = false

Vue.filter('upper', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.toUpperCase();
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
