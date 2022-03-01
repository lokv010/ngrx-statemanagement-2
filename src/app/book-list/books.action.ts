import{createAction,props} from '@ngrx/store';
import{Book} from '../book-list/books.model';

export const addbook=createAction('[book list] add book',props<{bookid:string}>());

export const removebook=createAction('[book list] removebook',props<{bookid:string}>());

export const retrivebooks=createAction('[book list/api] retrivebooks',props<{books:ReadonlyArray<Book>}>());