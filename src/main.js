import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueMarkDown from 'vue-markdown';
import i18n from './plugin/i18n';
//import LoadScript from 'vue-plugin-load-script';

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



Vue.filter('truncate', filter);

Vue.use(VueMaterial);
Vue.use(VueMarkDown);
//Vue.use(LoadScript);
const sourceOfTruth = { title: 'hello world', updatedTime: '2020-03-28 00:00:00' };

//Vue.LoadScript('./mapdata.js');
//Vue.LoadScript('./countrymap.js')

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  data: sourceOfTruth,
  render: h => h(App)
}).$mount('#app')
