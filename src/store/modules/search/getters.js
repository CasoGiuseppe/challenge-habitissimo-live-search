export const GET_SEARCH_KEY = 'getSearchKey';
export const GET_SEARCH_VISIBILITY = 'getSearchVisibility';
export const GET_SEARCH_LOADING = 'getSearchLoading';
export const GET_SEARCH_RESULTS = 'getSearchResults';
export const GET_ERROR_STATE = 'getErrorState';
export const GET_SELECTED_ITEM = 'getSelectedItem';
export const GET_ITEM_BY_ID = 'getItemByID';

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

  /**
   * Get error state
   * @param state
   */
  [GET_ERROR_STATE]: (state) => state.error,

  /**
   * Get selected item id
   * @param state
   */
  [GET_SELECTED_ITEM]: (state) => state.selected,

  /**
   * Get item by ID
   * @param state
   * @param id
   */
  [GET_ITEM_BY_ID]: (state) => ({ id }) => state.results.filter((node) => node.id === id)[0],
};
