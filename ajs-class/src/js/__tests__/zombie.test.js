import Zombie from '../zombie';

test('creating an instance of the Zombie class', () => {
  expect(new Zombie('SupZombie')).toEqual({
    name: 'SupZombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
