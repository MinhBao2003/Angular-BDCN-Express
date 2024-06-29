import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private apiUrl = 'http://localhost:3000/clock';

  constructor(private http: HttpClient) {}

  getClocks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getClock(ids: number[]): Observable<any[]> {
    const url = `${this.apiUrl}?id=${ids.join('&id=')}`;
    return this.http.get<any[]>(url);
  }
}
