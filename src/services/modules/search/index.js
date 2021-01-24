import { Characters } from '@/services/http/Characters';
import { wait } from '@/helpers';
import store from '@/store';

export class Response {
  static async getSearchresults({ key }) {
    // CHANGE SEARCH PANEL VISIBILITY
    // ON TRUE
    store.dispatch('search/changeSearchVisibility', {
      value: true,
    });

    // CHANGE SEARCH LOADING
    // ON TRUE
    store.dispatch('search/changeSearchLoading', {
      value: true,
    });

    // API CALL
    // WITH WAIT PROMISE
    await wait(1500);
    const res = await Characters.getCharacterByName({
      name: key,
    });

    // FILL STORE WITH RESULTS
    store.dispatch('search/fillSearchResults', {
      items: res
        ? res.results.map((node) => {
          return {
            name: node.name,
            status: node.status,
            gender: node.gender,
            image: node.image,
          };
        })
        : [],
    });
  }
}
