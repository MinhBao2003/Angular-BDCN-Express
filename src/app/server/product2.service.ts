import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product2Service {

  private apiUrl = 'http://localhost:3000/Qan';

  constructor(private http: HttpClient) {}

  getCommentById(commentId: string): Observable<any> {
    const url = `${this.apiUrl}/${commentId}`;
    return this.http.get<any>(url);
  }
}