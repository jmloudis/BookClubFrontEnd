import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl: string = "http://localhost:8090/api/v1";
  constructor(private http:HttpClient) {}


  getAllBooks(): Observable<Book[]>{
    
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }
  getBookById(id: bigint): Observable<Book>{
    return this.http.get<Book>(`${this.baseUrl}/books/${id}`);
  }
  updateBook(id:bigint, book:Book): Observable <Object> {
    return this.http.put(`${this.baseUrl}/books/${id}`, book);
  }
}

