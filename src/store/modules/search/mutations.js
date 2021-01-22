export const SET_SEARCH_KEY = 'setSearchKey';
export const SET_SEARCH_VISIBILITY = 'setSearchVisibility';

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
};
