import Swordsman from '../swordsman';

test('creating an instance of the Swordsman class', () => {
  expect(new Swordsman('SupSword')).toEqual({
    name: 'SupSword',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
