import { Characters } from '@/services/http/Characters';
import { wait } from '@/helpers';
import store from '@/store';

export class Response {
  static async getSearchresults({ key }) {
    store.dispatch('search/resetSearchState', { value: false });

    // API CALL
    const res = await Characters.getCharacterByName({
      name: key,
    });

    // CHANGE SEARCH PANEL VISIBILITY
    // ON TRUE
    store.dispatch('search/changeSearchVisibility', {
      value: true,
    });

    // FILL STORE WITH RESULTS
    store.dispatch('search/fillSearchResults', {
      items: res
        ? res.results.map((node) => {
          return {
            id: node.id,
            name: node.name,
            status: node.status,
            gender: node.gender,
            image: node.image,
            origin: node.origin.name,
            location: node.location.name,
          };
        })
        : [],
    });
  }
}
