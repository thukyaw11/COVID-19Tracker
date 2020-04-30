import Vue from 'vue'
import App from './App.vue'
import wb from "./registerServiceWorker";
import router from './router'
import store from './store/store'
import VueMarkDown from 'vue-markdown';
import i18n from './plugin/i18n';
import Meta from 'vue-meta';
import vuescroll from 'vue-scrollto';
import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

var filter = function (text, length, clamp) {
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.filter('truncate', filter);
Vue.use(Meta);
Vue.use(VueMaterial);
Vue.use(VueMarkDown);
Vue.use(vuescroll);
Vue.use(VueSweetalert2,options);
Vue.prototype.$workbox = wb;

//Vue.use(LoadScript);
const sourceOfTruth = { title: 'hello world', updatedTime: '2020-03-28 00:00:00' };



Vue.prototype.$eventHub = new Vue(); // Global event bus
Vue.prototype.$darkModeBus = new Vue(); //second darkmode event bus


Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  router,
  data: sourceOfTruth,
  render: h => h(App)
}).$mount('#app')
