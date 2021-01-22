export const SET_SEARCH_KEY = 'setSearchKey';
export const SET_SEARCH_VISIBILITY = 'setSearchVisibility';
export const SET_SEARCH_LOADING = 'setSearchLoading';

export default {
  /**
   * Set search key
   * @param key {String}
   */
  [SET_SEARCH_KEY](state, { key }) {
    state.key = key;
  },

  /**
   * Set search visibility
   * @param value {String}
   */
  [SET_SEARCH_VISIBILITY](state, { value }) {
    state.visibility = value;
  },

  /**
   * Set search loading
   * @param value {String}
   */
  [SET_SEARCH_LOADING](state, { value }) {
    state.loading = value;
  },
};
