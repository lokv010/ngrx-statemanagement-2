import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{StoreModule} from '@ngrx/store'
import{booksreducer} from './book-list/books.reducer';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './hello.component';
import { collectionreducer } from './book-list/collection.reducer';
import { BookListComponent } from './book-list/book-list/book-list.component';
import { BookCollectionComponent } from './book-list/book-collection/book-collection.component';

@NgModule({
  imports:      [ BrowserModule,HttpClientModule, FormsModule,StoreModule.forRoot({books:booksreducer,collection:collectionreducer}) ],
  declarations: [ AppComponent, HelloComponent,BookListComponent,BookCollectionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
