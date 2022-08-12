import { Component, OnInit } from '@angular/core';
import {Club} from "../models/club";
import {ClubService} from "../service/club.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {BookService} from "../service/book.service";
import {Book} from "../models/book";

@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.css']
})
export class UpdateClubComponent implements OnInit {

  id!: bigint;
  club!: Club;
  b_id!: bigint;
  book!: Book[];

  constructor(private clubService: ClubService, private router: Router,
              private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.b_id = this.bookService.bookId;

    this.clubService.getClubById(this.id).subscribe(
      value => {
        this.club = value;
        console.log(this.club);
      }
    )
    this.bookService.getAllBooks().subscribe(
      value => {this.book = value}
    )

  }

  onSubmit() {
    this.clubService.updateClub(this.id, this.b_id, this.club).subscribe(
      value => {
        this.router.navigate(['books'])
      }
    )
  }

  selectChange() {
    console.log(this.b_id);
  }

  goBack() {
    this.router.navigate(['clubs', this.b_id]);
  }
}
