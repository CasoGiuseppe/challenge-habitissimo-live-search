import Vue from 'vue';
import icons from '@/assets/utilities/icons';
import { constants } from '@/assets/utilities/constants';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

Vue.config.productionTip = false;

Vue.prototype.$constants = constants; // this.$constants
Vue.prototype.$icons = icons; // this.$icons

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
