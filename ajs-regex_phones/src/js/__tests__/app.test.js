import cleanNumber from '../app';

test.each([
  [
    'Formatting a number number when the number starts with 8',
    '8 (927) 000-00-00',
    '+79270000000',
  ],
  ['Formatting a number with spaces', '+7 960 000 00 00', '+79600000000'],
  [
    'Formatting a number with a different region code',
    '+86 000 000 0000',
    '+860000000000',
  ],
])('Checking the number formatting function - %s', (_, text, expected) => {
  const result = cleanNumber(text);
  expect(result).toBe(expected);
});
