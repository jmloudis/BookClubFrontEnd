import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateBookComponent } from './update-book/update-book.component';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { ClubListComponent } from './club-list/club-list.component';
import { UpdateClubComponent } from './update-club/update-club.component';
import { AllClubsComponent } from './all-clubs/all-clubs.component';
import { AddClubComponent } from './add-club/add-club.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    UpdateBookComponent,
    AddBookComponent,
    ClubListComponent,
    UpdateClubComponent,
    AllClubsComponent,
    AddClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
