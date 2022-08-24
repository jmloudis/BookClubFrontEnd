import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl: string = "http://localhost:8080/api/v1";

  bookId!: bigint;

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  getBookById(id: bigint): Observable<Book>{
    return this.http.get<Book>(`${this.baseUrl}/books/${id}`);
  }

  updateBook(id: bigint, book:Book): Observable<any> {
    return this.http.put(`${this.baseUrl}/books/${id}`, book);
  }

  createBook(book: Book): Observable<any> {
    return this.http.post(`${this.baseUrl}/books`, book);
  }

  deleteBook(id: bigint): Observable<any> {
    return this.http.delete(`${this.baseUrl}/books/${id}`);
  }


}

