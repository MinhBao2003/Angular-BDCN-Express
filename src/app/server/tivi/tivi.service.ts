import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiviService {

  private apiUrl = 'http://localhost:3000/tivi';

  constructor(private http: HttpClient) {}

  getTivis(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getTiviIds(ids: number[]): Observable<any[]> {
    const url = `${this.apiUrl}?id=${ids.join('&id=')}`;
    return this.http.get<any[]>(url);
  }
}
