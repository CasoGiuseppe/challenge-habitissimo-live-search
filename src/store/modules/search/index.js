// getters
import getters, {
  GET_SEARCH_KEY,
  GET_SEARCH_VISIBILITY,
  GET_SEARCH_LOADING,
} from './getters';

// mutations
import mutations, {
  SET_SEARCH_KEY,
  SET_SEARCH_VISIBILITY,
  SET_SEARCH_LOADING,
} from './mutations';

// actions
import actions, {
  CHANGE_SEARCH_KEY,
  CHANGE_SEARCH_VISIBILITY,
  CHANGE_SEARCH_LOADING,
  RESET_SEARCH_STATE,
} from './actions';

// default state values
const defaultValues = {
  key: null,
  visibility: null,
  loading: false,
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

    [CHANGE_SEARCH_LOADING]({ commit }, payload) {
      commit(SET_SEARCH_LOADING, payload);
    },

    [RESET_SEARCH_STATE]({ commit }, payload) {
      commit(SET_SEARCH_VISIBILITY, payload);
      commit(SET_SEARCH_LOADING, payload);
    },
  },

  getters,
};
