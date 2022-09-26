import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  // eslint-disable-next-line consistent-return
  static async load() {
    try {
      const data = await read();
      const parse = await json(data);
      return new GameSaving(JSON.parse(parse));
    } catch (err) {
      console.log(err);
    }
  }
}
