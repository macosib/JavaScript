import Person from '../person';

test('Create a new character', () => {
  expect(new Person('Лучник', 'Bowman')).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: null,
    defence: null,
  });
});
