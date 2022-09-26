import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.drugged = false;
  }

  get stoned() {
    return this.drugged;
  }

  set stoned(status) {
    this.drugged = status;
  }

  set attack(damage) {
    this.attackDamage = damage;
  }

  get attack() {
    let attackPower = this.attackDamage * (1 - (this.distance - 1) / 10);

    if (this.drugged) {
      attackPower -= Math.log2(this.distance) * 5;
    }

    return attackPower > 0 ? Math.round(attackPower) : 0;
  }
}
