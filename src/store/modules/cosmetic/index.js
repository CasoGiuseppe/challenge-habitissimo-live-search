// getters
import getters, {
  GET_EXTRA_PANEL_STATE,
} from './getters';

// mutations
import mutations, {
  SET_EXTRA_PANEL_STATE,
} from './mutations';

// actions
import actions, {
  CHANGE_EXTRA_PANEL_STATE,
} from './actions';

export const cosmetic = {
  namespaced: true,

  state: {
    extraPanel: false,
  },

  mutations,

  actions: {
    [CHANGE_EXTRA_PANEL_STATE]({ commit }, payload) {
      commit(SET_EXTRA_PANEL_STATE, payload);
    },
  },

  getters,
};
