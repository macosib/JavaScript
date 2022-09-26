import Validator from '../app';

test.each([
  ['Validation with a digit at the beginning', '1username', false],
  ['Validation with a digit at the beginning', 'username1', false],
  [
    'Validation when the number of digits is more than three',
    'usern4444ame',
    false,
  ],
  ['Validation with non-Latin characters', 'userЯname', false],
  ['Successful validation', 'username', true],
])('Checking the validation method - %s', (_, text, expected) => {
  const valid = new Validator();
  const result = valid.validateUsername(text);
  expect(result).toBe(expected);
});
