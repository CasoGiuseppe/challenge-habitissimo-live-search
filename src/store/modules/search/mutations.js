export const SET_SEARCH_KEY = 'setSearchKey';
export const SET_SEARCH_VISIBILITY = 'setSearchVisibility';
export const SET_SEARCH_LOADING = 'setSearchLoading';
export const SET_SEARCH_RESULTS = 'setSearchResults';
export const SET_EMPTY_ERROR = 'setEmptyError';
export const SET_SELECTED_ITEM = 'setSelectedItem';

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
   * @param value {Boolean}
   */
  [SET_SEARCH_VISIBILITY](state, { value }) {
    state.visibility = value;
  },

  /**
   * Set search loading
   * @param value {Boolean}
   */
  [SET_SEARCH_LOADING](state, { value }) {
    state.loading = value;
  },

  /**
   * Set search results
   * @param items {Object}
   */
  [SET_SEARCH_RESULTS](state, { items }) {
    state.results = items;
  },

  /**
   * Set error state
   * @param value {Boolean}
   */
  [SET_EMPTY_ERROR](state, { value }) {
    state.error = value;
  },

  /**
   * Set selected ID
   * @param item {Object}
   */
  [SET_SELECTED_ITEM](state, { item }) {
    state.selected = item;
  },
};
