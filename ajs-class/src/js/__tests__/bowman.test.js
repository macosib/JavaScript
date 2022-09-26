import Bowman from '../bowman';

test('creating an instance of the Bowman class', () => {
  expect(new Bowman('GreenArrow')).toEqual({
    name: 'GreenArrow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
