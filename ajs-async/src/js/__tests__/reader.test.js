import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Checking the load() method of the GameSavingLoader class wiwth reject', async () => {
  const newError = new Error('Test error');
  read.mockRejectedValue(newError);
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toEqual(newError);
  }
});
