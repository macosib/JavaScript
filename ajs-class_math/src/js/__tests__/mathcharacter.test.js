import Daemon from '../daemon';
import Magician from '../magician';

test('getter test attack - default distance', () => {
  const chr = new Daemon('mainDaemon', 'Daemon');
  expect(chr.attack).toBe(10);
});

test('getter test attack - the distance is 3', () => {
  const chr = new Magician('Mag', 'Magician');
  chr.distance = 3;
  expect(chr.attack).toBe(8);
});

test('getter test attack - the distance is 5', () => {
  const chr = new Magician('Mag', 'Magician');
  chr.distance = 5;
  expect(chr.attack).toBe(6);
});

test('setter test attack', () => {
  const chr = new Magician('Mag', 'Magician');
  chr.attack = 100;
  chr.distance = 5;
  expect(chr.attack).toBe(60);
});

test('getter test stoned', () => {
  const chr = new Magician('Mag', 'Magician');
  expect(chr.stoned).toBe(false);
});

test('setter test stoned', () => {
  const chr = new Daemon('mainDaemon', 'Daemon');
  chr.stoned = true;
  expect(chr.stoned).toBe(true);
});

test('getter test attack - the distance is 2 and stoned=true', () => {
  const chr = new Magician('Mag', 'Magician');
  chr.distance = 2;
  chr.stoned = true;
  expect(chr.attack).toBe(4);
});

test('getter test attack - stoned = true and attackPower < 0', () => {
  const chr = new Daemon('MagDaemon', 'Daemon');
  chr.distance = 5;
  chr.stoned = true;
  expect(chr.attack).toBe(0);
});
