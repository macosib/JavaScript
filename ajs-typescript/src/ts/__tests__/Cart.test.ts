import Movie from '../domain/Movie';
import Phone from '../domain/Phone';
import Cart from '../service/Cart';

const oldMovie = new Movie(1333, 'Avatar', 'Аватар', 2008, 'США', 'Супер Слоган', 'Аватар', 'Фантастика', 2000000, 1000, true, true)
const newMovie = new Movie(1334, 'Avatar2', 'Аватар', 2023, 'неСША', 'Супер Слоган2', 'Аватар2', 'Фантастика', 4000000, 2000, true, true)
const iphone = new Phone(13,'Iphone', 150000, 'MaxPro',true, false)

test('Add item to cart', () => {
  const cart = new Cart();
  cart.add(oldMovie)
  cart.add(newMovie)
  expect(cart.items.length).toBe(2);
});

test('Add item to cart with property maxCount', () => {
  const cart = new Cart();
  cart.add(oldMovie)
  cart.add(oldMovie)
  expect(cart.items.length).toBe(1);
});

test('Add item to cart without property maxCount', () => {
  const cart = new Cart();
  cart.add(iphone)
  cart.add(iphone)
  expect(cart.items.length).toBe(2);
});

test('Get total sum', () => {
  const cart = new Cart();
  cart.add(oldMovie)
  cart.add(newMovie)
  expect(cart.cost()).toBe(3000);
});

test('Get total sum with discount', () => {
  const cart = new Cart();
  cart.add(oldMovie)
  cart.add(newMovie)
  expect(cart.costWithDiscount(10)).toBe(2700);
});

test('Delete movie', () => {
  const cart = new Cart();
  cart.add(oldMovie)
  cart.add(newMovie)
  cart.delete(1334)
  expect(cart.items.length).toBe(1);
});

test('Delete a movie that is not in the cart', () => {
  const cart = new Cart();
  cart.add(oldMovie)
  cart.add(newMovie)
  cart.delete(1335)
  expect(cart.items.length).toBe(2);
});

test('Reduce count phone', () => {
  const cart = new Cart();
  cart.add(iphone)
  cart.add(iphone)
  cart.add(iphone)
  cart.reduce(13)
  expect(cart.items.length).toBe(2);
});

test('Reduce count a phone that is not in the cart', () => {
  const cart = new Cart();
  cart.add(iphone)
  cart.add(iphone)
  cart.delete(14)
  expect(cart.items.length).toBe(2);
});