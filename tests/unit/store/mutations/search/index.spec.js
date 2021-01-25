import mutations from '@/store/modules/search/mutations';
import { search } from '../../__mock__/search';

const state = {
  key: null,
  visibility: null,
  loading: false,
  error: false,
  selected: null,
  results: [],
};

describe('Mutations', () => {
  test('Should set key search', () => {
    mutations.setSearchKey(state, { key: search.key });
    expect(state.key).toBe('Morty');
  });

  test('Should set results visibility', () => {
    mutations.setSearchVisibility(state, { value: search.visibility });
    expect(state.visibility).toBeTruthy();
  });

  test('Should set loading state', () => {
    mutations.setSearchLoading(state, { value: search.loading });
    expect(state.loading).toBeFalsy();
  });

  test('Should set search results', () => {
    mutations.setSearchResults(state, { items: search.results });
    expect(state.results.length).toBeGreaterThan(0);
    expect(state.results[0]).toHaveProperty('name', 'Morty');
  });

  test('Should set search error state', () => {
    mutations.setEmptyError(state, { value: search.error });
    expect(state.error).toBeFalsy();
  });

  test('Should set user selected item', () => {
    mutations.setSelectedItem(state, { item: search.selected });
    const { length } = Object.keys(search.selected);
    expect(length).toBeGreaterThan(0);
    expect(state.selected).toHaveProperty('name', 'Morty');
  });
});
