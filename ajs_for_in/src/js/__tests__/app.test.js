import orderByProps from '../app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('test of the sorting function', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
  ];
  const received = orderByProps(obj, ['name', 'level']);

  expect(received).toEqual(expected);
});

test('test of the sorting function with order = []', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
  ];
  const received = orderByProps(obj);

  expect(received).toEqual(expected);
});

test('test the sorting function on hasOwnProperty', () => {
  Object.defineProperty(obj, 'name', {
    enumerable: true,
  });

  const newObj = Object.create(obj);
  newObj.lint = 'linter';
  const expected = [{ key: 'lint', value: 'linter' }];
  const received = orderByProps(newObj);
  expect(received).toEqual(expected);
});
