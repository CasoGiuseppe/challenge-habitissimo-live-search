import Vue from 'vue';
import icons from '@/assets/utilities/icons';
import { constants } from '@/assets/utilities/constants';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';
import VueMq from 'vue-mq';

Vue.config.productionTip = false;

Vue.prototype.$constants = constants; // this.$constants
Vue.prototype.$icons = icons; // this.$icons

Vue.use(VueMq, {
  breakpoints: {
    mobile: 600,
    desktop: Infinity,
  },
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
