import { Characters } from '@/services/http/Characters';
import store from '@/store';

export class Response {
  static async getSearchresults() {
    // const res = await Activities.getAllActivities();
    // return res;

    // set visibility serach data panel
    store.dispatch('search/changeSearchVisibility', {
      value: true,
    });

    // set loading state
    store.dispatch('search/changeSearchLoading', {
      value: true,
    });

    console.log('ciccio');
  }
}
