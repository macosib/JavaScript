import Undead from '../undead';

test('creating an instance of the Undead class', () => {
  expect(new Undead('SupUndead')).toEqual({
    name: 'SupUndead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
