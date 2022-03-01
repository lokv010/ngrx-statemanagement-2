import { Book } from './book-list/books.model';

export interface appstate {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
