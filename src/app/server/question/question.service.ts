import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://localhost:3000/question';

  constructor(private http: HttpClient) {}

  // Function to get data by ID
  getDataById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
