import { http } from './index';

const characters = '/character';

class Characters {
  static getCharacterByName = async (payload) => {
    try {
      const res = await http.get(
        `${characters}`,
        {
          params: {
            name: 'ric',
          },
        },
      );

      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export { Characters };
