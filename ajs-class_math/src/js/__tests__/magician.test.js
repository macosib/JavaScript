import Magician from '../magician';

test('creating an instance of the Magician class', () => {
  expect(new Magician('SupMag', 'Magician')).toEqual({
    name: 'SupMag',
    type: 'Magician',
    health: 100,
    level: 1,
    attackDamage: 10,
    defence: 40,
    distance: 1,
    drugged: false,
  });
});
