import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
cart.add(new Movie(1333, 'Avatar', 'Аватар', 2008, 'США', 'Супер Слоган', 'Аватар', 'Фантастика', 2000000, 1000, true, true));

console.log(cart.items);
