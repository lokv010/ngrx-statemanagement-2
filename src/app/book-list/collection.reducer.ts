import { createReducer, on } from '@ngrx/store';
import{removebook,addbook} from '../book-list/books.action'
import { Book } from '../book-list/books.model';

export const initialstate:ReadonlyArray<string>=[];
export const collectionreducer=createReducer(initialstate,
  on(addbook,(state,{bookid})=>{
    if(state.indexOf(bookid)>-1)
    return state;
    return [...state,bookid];
    
  }),
  on(removebook,(state,{bookid})=>{
state.filter((id)=>id!==bookid)
return state;
  }));
