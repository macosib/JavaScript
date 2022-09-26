import Team from '../app';
import Person from '../person';

const char = new Person('Лучник', 'Bowman', 50, 1, 40, 10);
const char2 = new Person('Лучник2', 'Bowman', 50, 1, 40, 10);

test('Add a new character', () => {
  const dreamTeam = new Team();
  dreamTeam.add(char);
  expect(dreamTeam.members).toContain(char);
});

test('Add not a Person', () => {
  const dreamTeam = new Team();
  expect(() => dreamTeam.add('GreenArrow')).toThrowError();
});

test('Add multiple characters', () => {
  const dreamTeam = new Team();
  dreamTeam.addAll(char, char2);
  expect(dreamTeam.members).toContain(char, char2);
});

test('Add multiple characters with not Person', () => {
  const dreamTeam = new Team();
  dreamTeam.addAll(char, {}, {});
  expect(dreamTeam.members.size).toEqual(1);
});

test('Convert set to array', () => {
  const dreamTeam = new Team();
  dreamTeam.addAll(char, char2);
  expect(dreamTeam.toArray()).toEqual([char, char2]);
});

test('Checking the iteration of an object', () => {
  const dreamTeam = new Team();
  dreamTeam.addAll(char, char2);
  const expectedTeam = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const character of dreamTeam) {
    expectedTeam.push(character);
  }

  expect(dreamTeam.toArray()).toEqual(expectedTeam);
});
