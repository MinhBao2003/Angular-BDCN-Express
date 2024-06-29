import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  private apiUrl = 'http://localhost:3000/laptop';

  constructor(private http: HttpClient) {}

  getLaptops(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getLaptopIds(ids: number[]): Observable<any[]> {
    const url = `${this.apiUrl}?id=${ids.join('&id=')}`;
    return this.http.get<any[]>(url);
  }
}
