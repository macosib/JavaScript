import Character from '../character';

test('creating a new character', () => {
  expect(new Character('LichKing', 'Undead', 100, 1)).toEqual({
    name: 'LichKing',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: null,
    defence: null,
  });
});

test('validation for the name data type', () => {
  expect(() => new Character({ Artur: 'undead' }, 'Undead')).toThrow();
});

test('validation for a name length less than 2', () => {
  expect(() => new Character('L', 'Undead')).toThrow();
});

test('validation for a name length greater than 10', () => {
  expect(() => new Character('LichKingMain', 'Undead')).toThrow();
});

test('character type validation', () => {
  expect(() => new Character('LichKing', 'SuperZombi')).toThrow();
});

test('raise the level of the character', () => {
  const newChr = new Character('LichKing', 'Undead');
  newChr.attack = 20;
  newChr.defence = 20;
  newChr.levelUp();
  expect(newChr).toEqual({
    name: 'LichKing',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 24,
    defence: 24,
  });
});

test('validation by health indicator, method levelUp', () => {
  const newChr = new Character('LichKing', 'Undead', 0);
  expect(() => newChr.levelUp()).toThrow();
});

test('dealing damage', () => {
  const newChr = new Character('LichKing', 'Undead');
  newChr.attack = 20;
  newChr.defence = 20;
  newChr.damage(100);
  expect(newChr.health).toBe(20);
});

test('validation by health indicator, method damage', () => {
  const magician = new Character('LichKing', 'Undead', -5);
  expect(() => magician.damage(40)).toThrow();
});
