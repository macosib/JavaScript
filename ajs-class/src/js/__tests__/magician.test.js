import Magician from '../magician';

test('creating an instance of the Magician class', () => {
  expect(new Magician('SupMag')).toEqual({
    name: 'SupMag',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
