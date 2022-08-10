import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book!:Book[];

  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    
    this.getBooks();
  }
 
private getBooks(){
  this.bookservice.getAllBooks().subscribe(
    
    data => {
      this.book = data;
      console.log(this.book);
    }
  );
}

}
