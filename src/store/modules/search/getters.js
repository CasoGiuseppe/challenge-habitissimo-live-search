export const GET_SEARCH_KEY = 'getSearchKey';
export const GET_SEARCH_VISIBILITY = 'getSearchVisibility';

export default {
  /**
   * Get search key
   * @param state
   */
  [GET_SEARCH_KEY]: (state) => state.key,

  /**
   * Get search visibiity
   * @param state
   */
  [GET_SEARCH_VISIBILITY]: (state) => state.visibility,
};
