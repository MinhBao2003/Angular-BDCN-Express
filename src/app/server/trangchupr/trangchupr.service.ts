import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrangchuprService {

  private apiUrl = 'http://localhost:3000/TrangchuPR';

  constructor(private http: HttpClient) {}

  gettrangchuprs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
