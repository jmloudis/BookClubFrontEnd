import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl: string = "http://localhost:8080/api/v1";
  constructor(private http:HttpClient) {}


  getAllBooks(): Observable<Book[]>{
    
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

}

