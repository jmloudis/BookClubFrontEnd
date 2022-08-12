import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../service/book.service';
import {ClubService} from "../service/club.service";
import {Club} from "../models/club";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book!:Book[];
  club!: Club[];

  constructor(private bookservice:BookService, private router: Router, private clubService: ClubService) { }

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

  updateBook(id: bigint){
    this.router.navigate(["update-book", id]);
  }


  deleteBook(id: bigint) {
    // console.log("delete book: " + id);
    this.bookservice.deleteBook(id).subscribe(
      value => {
        console.log(value);
        this.getBooks();
      }
    );
  }


  viewClubs(id: bigint)
  {
    this.router.navigate(['clubs', id])
  }
}
