import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadphonesService {

  private apiUrl = 'http://localhost:3000/headphones';

  constructor(private http: HttpClient) {}

  getHeadphones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getHeadphone(ids: number[]): Observable<any[]> {
    const url = `${this.apiUrl}?id=${ids.join('&id=')}`;
    return this.http.get<any[]>(url);
  }
}
