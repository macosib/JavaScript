import Daemon from '../daemon';

test('creating an instance of the Daemon class', () => {
  expect(new Daemon('SupDaemon', 'Daemon')).toEqual({
    name: 'SupDaemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attackDamage: 10,
    defence: 40,
    distance: 1,
    drugged: false,
  });
});
