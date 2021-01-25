import Vuex from 'vuex';
import getters from '@/store/modules/cosmetic/getters';
import { createLocalVue } from '@vue/test-utils';
import { cosmetic } from '../../__mock__/cosmetic';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Getters', () => {
  it('Should return extra panel state', () => {
    const panel = getters.getExtraPanelState(cosmetic);
    expect(panel).toBeFalsy()
  });
});
