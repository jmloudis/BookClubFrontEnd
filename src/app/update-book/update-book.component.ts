import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../service/book.service';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
 id!: bigint;
 book:Book=new Book()

  constructor(private bookservice: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.bookservice.getBookById(this.id).subscribe(data =>
      {
        this.book= data;
        console.log(this.book);
    })
  }

  onSubmit(){
    this.bookservice.updateBook(this.id, this.book).subscribe(
      value => {this.navigateToBookList()}
    )
  }

  navigateToBookList()
  {
    this.router.navigate(['books']);
  }



}
