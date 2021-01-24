import store from '@/store';
import { Errors } from '@/assets/utilities/errors';
import { http } from './index';

const characters = '/character/';
class Characters {
  static getCharacterByName = async ({ name }) => {
    try {
      const res = await http.get(
        `${characters}`,
        {
          params: {
            name,
          },
        },
      );
      return res.data;
    } catch (error) {
      // SET ERROR VALUE
      // CASE: EMPTY RESULT
      store.dispatch(`search/${Errors.EMPTY_RESULTS}`, {
        value: true,
      });
    } finally {
      // CHANGE SEARCH LOADING
      // ON FALSE
      store.dispatch('search/changeSearchLoading', {
        value: false,
      });
    }
  }
}

export { Characters };
