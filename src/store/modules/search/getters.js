export const GET_SEARCH_KEY = 'getSearchKey';
export const GET_SEARCH_VISIBILITY = 'getSearchVisibility';
export const GET_SEARCH_LOADING = 'getSearchLoading';
export const GET_SEARCH_RESULTS = 'getSearchResults';

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

  /**
   * Get search loading
   * @param state
   */
  [GET_SEARCH_LOADING]: (state) => state.loading,

  /**
   * Get search results
   * @param state
   */
  [GET_SEARCH_RESULTS]: (state) => state.results,
};
