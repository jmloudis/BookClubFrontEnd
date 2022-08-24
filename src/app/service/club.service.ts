import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Club} from "../models/club";

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  // Change localhost - for AWS
  private baseUrl: string = "http://localhost:5000/api/v1";



  constructor(private http: HttpClient) { }

  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(`${this.baseUrl}/clubs`);
  }

  getClubById(id: bigint): Observable<Club> {
    return this.http.get<Club>(`${this.baseUrl}/clubs/${id}`);
  }

  updateClub(id: bigint, bookId: bigint, club: Club): Observable<any> {
    return this.http.put(`${this.baseUrl}/books/${bookId}/clubs/${id}`, club);
  }
  deleteClub(id: bigint): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clubs/${id}`);
  }
addClub (id: bigint, club:Club): Observable<any> {
  return this.http.post(`${this.baseUrl}/books/${id}/clubs`,club);
}
}
