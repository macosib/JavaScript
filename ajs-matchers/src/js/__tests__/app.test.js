import sortBattle from '../app';

test('sort characters by health', () => {
  const received = sortBattle([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(received).toEqual(expected);
  expect(received).not.toBe(expected);
});
