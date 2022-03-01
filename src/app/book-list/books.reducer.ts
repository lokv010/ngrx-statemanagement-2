import { createReducer, on } from '@ngrx/store';
import { retrivebooks } from '../book-list/books.action';
import { Book } from '../book-list/books.model';

export const initialstate:ReadonlyArray<Book>=[];
export const booksreducer=createReducer(initialstate,
  on(retrivebooks,(state,{books})=>books));
