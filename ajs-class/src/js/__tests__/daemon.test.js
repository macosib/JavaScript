import Daemon from '../daemon';

test('creating an instance of the Daemon class', () => {
  expect(new Daemon('SupDaemon')).toEqual({
    name: 'SupDaemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
