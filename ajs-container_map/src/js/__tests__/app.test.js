import ErrorRepository from '../app';

test('Getting a transcript of the error that is in the map', () => {
  const newErrorRepo = new ErrorRepository();
  newErrorRepo.errors.set(1, 'First error').set(2, 'Second error');
  expect(newErrorRepo.translate(2)).toEqual('Second error');
});

test('Getting a transcript of an error that does not exist in map', () => {
  const newErrorRepo = new ErrorRepository();
  newErrorRepo.errors.set(1, 'First error').set(2, 'second error');
  expect(newErrorRepo.translate(3)).toEqual('Unknown error');
});
