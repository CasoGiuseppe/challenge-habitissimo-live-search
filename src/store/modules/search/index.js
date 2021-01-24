// getters
import getters, {
  GET_SEARCH_KEY,
  GET_SEARCH_VISIBILITY,
  GET_SEARCH_LOADING,
  GET_SEARCH_RESULTS,
  GET_ITEM_BY_ID,
  GET_SELECTED_ITEM,
} from './getters';

// mutations
import mutations, {
  SET_SEARCH_KEY,
  SET_SEARCH_VISIBILITY,
  SET_SEARCH_LOADING,
  SET_SEARCH_RESULTS,
  SET_EMPTY_ERROR,
  SET_SELECTED_ITEM,
} from './mutations';

// actions
import actions, {
  CHANGE_SEARCH_KEY,
  CHANGE_SEARCH_VISIBILITY,
  CHANGE_SEARCH_LOADING,
  RESET_SEARCH_STATE,
  FILL_SEARCH_RESULTS,
  EMPTY_RESULTS,
  CHANGE_SELECTED_ITEM,
} from './actions';

// default state values
const defaultValues = {
  key: null,
  visibility: null,
  loading: false,
  error: false,
  selected: null,
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
      commit(SET_SEARCH_RESULTS, { items: [] });
      commit(SET_EMPTY_ERROR, payload);
    },

    [FILL_SEARCH_RESULTS]({ commit }, payload) {
      commit(SET_SEARCH_RESULTS, payload);
    },

    [EMPTY_RESULTS]({ commit }, payload) {
      commit(SET_EMPTY_ERROR, payload);
    },

    [CHANGE_SELECTED_ITEM]({ commit }, payload) {
      commit(SET_SELECTED_ITEM, payload);
    },
  },

  getters,
};
