export default class Character {
  constructor(name, type, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = null;
    this.defence = null;

    function validateName(chrName) {
      return (
        typeof chrName !== 'string' || chrName.length > 10 || chrName.length < 2
      );
    }

    function validateType(chrType) {
      const characters = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
      ];
      return !characters.includes(chrType);
    }

    if (validateName(name) || validateType(type)) {
      throw new Error('Incorrect data entry');
    }
  }

  levelUp() {
    switch (true) {
      case this.health > 0:
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
        return;
      default:
        throw new Error('It is impossible to raise the level of the deceased');
    }
  }

  damage(points) {
    switch (true) {
      case this.health >= 0:
        this.health -= points * (1 - this.defence / 100);
        return;
      default:
        throw new Error('It is impossible to raise the level of the deceased');
    }
  }
}
