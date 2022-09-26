import Person from './person';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!(character instanceof Person)) {
      throw new Error('Only characters can be added to the team');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (character instanceof Person) {
        this.add(character);
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    let current = 0;

    while (current < this.members.size) {
      yield this.toArray()[current];
      current += 1;
    }
  }
}
