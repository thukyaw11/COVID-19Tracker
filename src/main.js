import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueMarkDown from 'vue-markdown';
import i18n from './plugin/i18n';
import Meta from 'vue-meta';
import mmnumber from 'myanmar-numbers';
//import LoadScript from 'vue-plugin-load-script';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


//filter to cut sentence
var filter = function (text, length, clamp) {
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};
//filter to change number into burmese
var filter2 = function(texttoConvert) {
  return mmnumber(texttoConvert, "my");
}


// filter registeration
Vue.filter('truncate', filter);
Vue.filter('mmnumber',filter2);


Vue.use(Meta);
Vue.use(mmnumber);
Vue.use(VueMaterial);
Vue.use(VueMarkDown);

const sourceOfTruth = { title: 'hello world', updatedTime: '2020-03-28 00:00:00' , lang : ''};



export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  data: sourceOfTruth,
  render: h => h(App)
}).$mount('#app')
