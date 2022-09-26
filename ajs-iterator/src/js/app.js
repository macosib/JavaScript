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

  [Symbol.iterator]() {
    return {
      current: -1,
      last: this.members.size,
      team: this.toArray(),

      next() {
        this.current += 1;

        if (this.current < this.last) {
          return { done: false, value: this.team[this.current] };
        }
        return { done: true };
      },
    };
  }
}
