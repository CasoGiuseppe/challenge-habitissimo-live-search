import mutations from '@/store/modules/cosmetic/mutations';
import { cosmetic } from '../../__mock__/cosmetic';

const state = {
  extraPanel: false,
};

describe('Mutations', () => {
  test('Should set panel state', () => {
    mutations.setExtraMenuPanel(state, { value: cosmetic.extraPanel });
    expect(state.extraPanel).toBeFalsy();
  });
});
