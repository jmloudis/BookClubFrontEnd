import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  // Create book - For example: when submit button is clicked.
  onSubmit()
  {
    this.bookService.createBook(this.book).subscribe({
      next: value => {
        console.log(this.book);
        this.goToBooksList()
      },
      error: err => {
        console.log(err)
      }
    });
  }

  goToBooksList()
  {
    this.router.navigate(['books']);
  }


}
