import healthIndicator from '../app';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Воин', health: 30 }, 'wounded'],
  [{ name: 'Лучник', health: 10 }, 'critical'],
])(
  'Determine the level of health over the character $s',
  (person, expected) => {
    const result = healthIndicator(person);
    expect(result).toBe(expected);
  },
);
