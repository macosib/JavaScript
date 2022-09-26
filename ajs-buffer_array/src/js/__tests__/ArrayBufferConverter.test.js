import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('checking the byte-to-string conversion function', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe(
    // eslint-disable-next-line comma-dangle
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  );
});
