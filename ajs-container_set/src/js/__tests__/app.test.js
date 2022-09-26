import Team from '../app';

test('Add a new character', () => {
  const dreamTeam = new Team();
  dreamTeam.add('GreenArrow');
  expect(dreamTeam.members).toContain('GreenArrow');
});

test('Add a new character that is already in the team', () => {
  const dreamTeam = new Team();
  dreamTeam.members = new Set(['GreenArrow']);
  expect(() => dreamTeam.add('GreenArrow')).toThrowError();
});

test('Add multiple characters', () => {
  const dreamTeam = new Team();
  dreamTeam.addAll(...['GreenArrow', 'Ironman']);
  expect(dreamTeam.members).toContain('GreenArrow', 'Ironman');
});

test('Convert set to array', () => {
  const dreamTeam = new Team();
  dreamTeam.addAll(...['GreenArrow', 'Ironman']);
  expect(dreamTeam.toArray()).toEqual(['GreenArrow', 'Ironman']);
});
