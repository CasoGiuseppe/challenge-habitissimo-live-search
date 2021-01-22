// getters
import getters, {
  GET_SEARCH_KEY,
  GET_SEARCH_VISIBILITY,
} from './getters';

// mutations
import mutations, {
  SET_SEARCH_KEY,
  SET_SEARCH_VISIBILITY,
} from './mutations';

// actions
import actions, {
  CHANGE_SEARCH_KEY,
  CHANGE_SEARCH_VISIBILITY,
} from './actions';

// default state values
const defaultValues = {
  key: null,
  visibility: null,
  results: [],
};

export const search = {
  namespaced: true,

  state: defaultValues,

  mutations,

  actions: {
    [CHANGE_SEARCH_KEY]({ commit }, payload) {
      commit(SET_SEARCH_KEY, payload);
    },

    [CHANGE_SEARCH_VISIBILITY]({ commit }, payload) {
      commit(SET_SEARCH_VISIBILITY, payload);
    },
  },

  getters,
};
