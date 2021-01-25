import Vuex from 'vuex';
import getters from '@/store/modules/search/getters';
import { createLocalVue } from '@vue/test-utils';
import { search } from '../../__mock__/search';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Getters', () => {
  it('Should return search key', () => {
    const key = getters.getSearchKey(search);
    expect(key).toBe('Morty');
  });

  it('Should return search visibility', () => {
    const visibility = getters.getSearchVisibility(search);
    expect(visibility).toBeTruthy();
  });

  it('Should return search loading icon state', () => {
    const loading = getters.getSearchLoading(search);
    expect(loading).toBeFalsy();
  });

  it('Should return search items results', () => {
    const results = getters.getSearchResults(search);
    expect(results.length).toBeGreaterThan(0);
  });

  it('Should return api call has error', () => {
    const error = getters.getErrorState(search);
    expect(error).toBeFalsy();
  });

  it('Should return user selected item', () => {
    const seleted = getters.getSelectedItem(search);
    const { length } = Object.keys(seleted);
    expect(length).toBeGreaterThan(0);
    expect(seleted).toHaveProperty('name', 'Morty');
  });

  it('Should return item by ID', () => {
    const item = getters.getItemByID(search)({ id: 2 });
    const { length } = Object.keys(item);
    expect(length).toBeGreaterThan(0);
    expect(item).toHaveProperty('name', 'Morty');
  });
});
