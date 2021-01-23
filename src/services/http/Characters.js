import store from '@/store';
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
      return null;
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
