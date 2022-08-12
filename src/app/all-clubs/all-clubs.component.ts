import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from '../models/club';
import { ClubService } from '../service/club.service';

@Component({
  selector: 'app-all-clubs',
  templateUrl: './all-clubs.component.html',
  styleUrls: ['./all-clubs.component.css']
})
export class AllClubsComponent implements OnInit {

  id! :bigint;
  club!: Club[];


  constructor(private clubservice: ClubService, private router: Router) { }

  ngOnInit(): void {
    this.getClubs();
  }

  private getClubs(){
    this.clubservice.getAllClubs().subscribe(

    data => {
      this.club = data;
      console.log(this.club);
      }
    );
  }

}
