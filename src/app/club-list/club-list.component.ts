import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClubService} from "../service/club.service";

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit
{

  book!: Book;
  id!: bigint;

  constructor(private bookservice: BookService, private route: ActivatedRoute,
              private clubService: ClubService, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.bookservice.bookId = this.id;
    this.bookservice.getBookById(this.id).subscribe(data =>
    {
      this.book= data;
      console.log(this.book);
    });
  }

  onSubmit(id: bigint) {
    this.router.navigate(['update-club', id]);
  }
  onDelete(id: bigint){
    this.clubService.deleteClub(id).subscribe(
      data =>{
        this.bookservice.getBookById(this.id).subscribe(data =>
          {
            this.book= data;
            console.log(this.book);
          });
      }
    )

  }
}
