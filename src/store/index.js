import Vue from 'vue';
import Vuex from 'vuex';

// modules
import { cosmetic } from './modules/cosmetic/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cosmetic,
  },
});
