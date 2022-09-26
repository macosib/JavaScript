import MathCharacter from './mathcharacter';

export default class Magician extends MathCharacter {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
