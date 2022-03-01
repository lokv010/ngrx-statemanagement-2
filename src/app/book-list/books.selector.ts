import{createSelector,createFeatureSelector} from '@ngrx/store'
import{Book} from '../book-list/books.model'

export const selectbooks=createFeatureSelector<ReadonlyArray<Book>>('books');
export const selectcollection=createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectbookcollection=createSelector(selectbooks,selectcollection,
  (books,collection)=>{
    return collection.map((id)=>books.find((book)=>book.id===id));
  })