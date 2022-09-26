import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test.each([
  ['ok', 1, { status: 'ok', level: 1 }, 'Ваш текущий уровень: 1'],
  ['error', 2, { status: 'error' }, 'Информация об уровне временно недоступна'],
])(
  'return message with current level, status - %s',
  (status, idPerson, person, expected) => {
    fetchData.mockReturnValue(person);
    expect(getLevel(idPerson)).toBe(expected);
  },
);
