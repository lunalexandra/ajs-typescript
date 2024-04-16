import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";

test('add item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1011,
      "The Avengers",
      2500,
      2012,
      "Avengers Assemble!",
      "USA",
      ["action movie", "fantastic"],
      "137 мин"
    )
  );
  expect(cart.items.length).toBe(3)
});

test('check sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1011,
      "The Avengers",
      2500,
      2012,
      "Avengers Assemble!",
      "USA",
      ["action movie", "fantastic"],
      "137 мин"
    )
  );
  expect(cart.totalSum()).toBeCloseTo(5400)
});

test('sum with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1011,
      "The Avengers",
      2500,
      2012,
      "Avengers Assemble!",
      "USA",
      ["action movie", "fantastic"],
      "137 мин"
    )
  );
  expect(cart.sumWithDiscount(20)).toBeCloseTo(4320)
});

test('checking the deletion of an element', () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1011,
      "The Avengers",
      2500,
      2012,
      "Avengers Assemble!",
      "USA",
      ["action movie", "fantastic"],
      "137 мин"
    )
  );
  cart.removeItem(1008);
  expect(cart.items.length).toBe(2)
});
