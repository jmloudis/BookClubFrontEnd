import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import {AddBookComponent} from "./add-book/add-book.component";
import {ClubListComponent} from "./club-list/club-list.component";
import {UpdateClubComponent} from "./update-club/update-club.component";

const routes: Routes = [
  {path: "books", component: BookListComponent},
  {path: "update-book/:id", component:UpdateBookComponent},
  {path: "add-book", component: AddBookComponent},
  {path: "clubs/:id", component: ClubListComponent},
  {path: "update-club/:id", component: UpdateClubComponent},
  {path: "", redirectTo: "books", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
