export const SET_EXTRA_PANEL_STATE = 'setExtraMenuPanel';

export default {
  /**
   * Set extra panel visibility
   * @param value [Boolean]
   */
  [SET_EXTRA_PANEL_STATE](state, { value }) {
    state.extraPanel = value;
  },
};
