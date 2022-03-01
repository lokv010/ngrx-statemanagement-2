import { Component, VERSION, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectbookcollection, selectbooks } from './book-list/books.selector';
import { retrivebooks, addbook, removebook } from './book-list/books.action';
import { bookservice } from './book-list/books.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.booksService
      .getbooks()
      .subscribe((books) => this.store.dispatch(retrivebooks({ books })));
  }

  name = 'Angular ' + VERSION.major;
  books$ = this.store.select(selectbooks);
  bookCollection$ = this.store.select(selectbookcollection);
  constructor(private booksService: bookservice, private store: Store) {}

  onAdd(bookid: any) {
    this.store.dispatch(addbook({ bookid }));
  }
  onRemove(bookid: any) {
    this.store.dispatch(removebook({ bookid }));
  }
}
