import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { Club } from '../models/club';
import { BookService } from '../service/book.service';
import { ClubService } from '../service/club.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {
  club:Club=new Club();
  book!:Book[];
  b_id!:bigint;

  constructor(private bookService: BookService, private clubService: ClubService, private router:Router) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data=>{
      this.book=data;

      // Set id of book to first book id in Array
      this.b_id = this.book[0].id;
      console.log(this.book);
      console.log(this.b_id);
    })
  }

  onSubmit(){
  this.clubService.addClub(this.b_id,this.club).subscribe(data =>{
    console.log(this.club);
    this.router.navigate(["all-clubs"]);
  })
  }

  selectChange() {
    console.log(this.b_id);
  }


  goToClubsList()
  {
    this.router.navigate(["all-clubs"]);

  }
}
